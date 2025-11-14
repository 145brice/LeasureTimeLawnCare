import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, data } = body

    // Get email configuration from environment variables
    const gmailUser = process.env.GMAIL_USER || 'brianleasuretime@gmail.com'
    const gmailPassword = process.env.GMAIL_APP_PASSWORD
    const recipientEmail = process.env.RECIPIENT_EMAIL || gmailUser

    if (!gmailUser || !gmailPassword) {
      console.error('Gmail credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    })

    let emailSubject = ''
    let emailHtml = ''

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
    } else {
      return NextResponse.json(
        { error: 'Invalid request type' },
        { status: 400 }
      )
    }

    // Send email
    const info = await transporter.sendMail({
      from: `Leasure Time Lawn Care <${gmailUser}>`,
      to: recipientEmail,
      subject: emailSubject,
      html: emailHtml,
    })

    return NextResponse.json({ success: true, messageId: info.messageId })
  } catch (error: any) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    )
  }
}

