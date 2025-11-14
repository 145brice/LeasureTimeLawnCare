import { NextRequest, NextResponse } from 'next/server'

// In-memory storage (for production, use a database like Vercel KV, Supabase, etc.)
// This will reset on serverless function restarts, but works for demo
// TODO: Replace with persistent database for production
let bookings: Array<{ date: string; time: string; name: string; email: string }> = []

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date')

  if (date) {
    // Get bookings for a specific date
    const dateBookings = bookings.filter(b => b.date === date)
    return NextResponse.json({ bookings: dateBookings })
  }

  // Get all bookings
  return NextResponse.json({ bookings })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { date, time, name, email } = body

    if (!date || !time || !name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if this time slot is already booked
    const existingBooking = bookings.find(
      b => b.date === date && b.time === time
    )

    if (existingBooking) {
      return NextResponse.json(
        { error: 'This time slot is already booked', available: false },
        { status: 409 }
      )
    }

    // Add booking
    const newBooking = { date, time, name, email }
    bookings.push(newBooking)

    return NextResponse.json({ 
      success: true, 
      booking: newBooking,
      message: 'Booking confirmed'
    })
  } catch (error: any) {
    console.error('Booking error:', error)
    return NextResponse.json(
      { error: 'Failed to create booking', details: error.message },
      { status: 500 }
    )
  }
}

