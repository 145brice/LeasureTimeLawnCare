import nodemailer from 'nodemailer'
import twilio from 'twilio'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, data } = body

    // Get configuration from environment variables
    const gmailUser = process.env.GMAIL_USER || 'brianleasuretime@gmail.com'
    const gmailPassword = process.env.GMAIL_APP_PASSWORD
    const recipientEmail = process.env.RECIPIENT_EMAIL || gmailUser
    const recipientPhone = process.env.RECIPIENT_PHONE // Format: +13093121408 (with country code)
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER

    let emailSubject = ''
    let emailHtml = ''
    let smsMessage = ''

    if (type === 'booking') {
      emailSubject = `New Booking Request - ${data.name}`
      emailHtml = `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Service Type:</strong> ${data.serviceType}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        ${data.notes ? `<p><strong>Notes:</strong> ${data.notes}</p>` : ''}
        <hr>
        <p><em>This is an automated notification from Leasure Time Lawn Care booking system.</em></p>
      `
      smsMessage = `NEW BOOKING: ${data.name} - ${data.serviceType} on ${data.date} at ${data.time}. Phone: ${data.phone}. Address: ${data.address}`
    } else if (type === 'contact') {
      emailSubject = `New Contact Form Submission - ${data.name}`
      emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <hr>
        <p><em>This is an automated notification from Leasure Time Lawn Care contact form.</em></p>
      `
      smsMessage = `NEW CONTACT: ${data.name} - ${data.phone}. Message: ${data.message.substring(0, 100)}${data.message.length > 100 ? '...' : ''}`
    } else {
      return NextResponse.json(
        { error: 'Invalid request type' },
        { status: 400 }
      )
    }

    const results: { email?: any; sms?: any; errors?: string[] } = {}
    const errors: string[] = []

    // Send Email
    if (gmailUser && gmailPassword) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: gmailUser,
            pass: gmailPassword,
          },
        })

        const emailInfo = await transporter.sendMail({
          from: `Leasure Time Lawn Care <${gmailUser}>`,
          to: recipientEmail,
          subject: emailSubject,
          html: emailHtml,
        })
        results.email = { success: true, messageId: emailInfo.messageId }
      } catch (error: any) {
        console.error('Email sending error:', error)
        errors.push(`Email: ${error.message}`)
      }
    } else {
      errors.push('Email not configured')
    }

    // Send SMS
    if (recipientPhone && twilioAccountSid && twilioAuthToken && twilioPhoneNumber) {
      try {
        const client = twilio(twilioAccountSid, twilioAuthToken)
        const smsInfo = await client.messages.create({
          body: smsMessage,
          from: twilioPhoneNumber,
          to: recipientPhone,
        })
        results.sms = { success: true, sid: smsInfo.sid }
      } catch (error: any) {
        console.error('SMS sending error:', error)
        errors.push(`SMS: ${error.message}`)
      }
    } else {
      errors.push('SMS not configured')
    }

    // Return success if at least one notification was sent
    if (results.email || results.sms) {
      return NextResponse.json({ 
        success: true, 
        ...results,
        ...(errors.length > 0 && { warnings: errors })
      })
    } else {
      return NextResponse.json(
        { error: 'Failed to send notifications', details: errors },
        { status: 500 }
      )
    }
  } catch (error: any) {
    console.error('Notification error:', error)
    return NextResponse.json(
      { error: 'Failed to send notifications', details: error.message },
      { status: 500 }
    )
  }
}

