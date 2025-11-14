'use client'

import { useState } from 'react'
import Calendar from '@/components/Calendar'
import BookingForm from '@/components/BookingForm'
import { format } from 'date-fns'

export default function BookPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [step, setStep] = useState<'date' | 'time' | 'details'>('date')
  const [bookedSlots, setBookedSlots] = useState<string[]>([])
  const [loadingSlots, setLoadingSlots] = useState(false)

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM'
  ]

  const handleDateSelect = async (date: Date) => {
    setSelectedDate(date)
    setStep('time')
    // Fetch booked slots for this date
    await fetchBookedSlots(date)
  }

  const fetchBookedSlots = async (date: Date) => {
    setLoadingSlots(true)
    try {
      const dateStr = format(date, 'yyyy-MM-dd')
      const response = await fetch(`/api/bookings?date=${dateStr}`)
      const data = await response.json()
      
      if (data.bookings) {
        const bookedTimes = data.bookings.map((b: { time: string }) => b.time)
        setBookedSlots(bookedTimes)
      }
    } catch (error) {
      console.error('Error fetching booked slots:', error)
    } finally {
      setLoadingSlots(false)
    }
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep('details')
  }

  const handleBack = () => {
    if (step === 'details') {
      setStep('time')
    } else if (step === 'time') {
      setStep('date')
      setSelectedTime('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Book Your Service
          </h1>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div className={`flex items-center ${step === 'date' ? 'text-primary-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'date' ? 'bg-primary-600 text-white' : 'bg-primary-600 text-white'}`}>
                  1
                </div>
                <span className="ml-2 font-medium">Select Date</span>
              </div>
              <div className={`w-16 h-1 ${step !== 'date' ? 'bg-primary-600' : 'bg-gray-300'}`}></div>
              <div className={`flex items-center ${step === 'time' ? 'text-primary-600' : step === 'details' ? 'text-primary-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step !== 'date' ? 'bg-primary-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                  2
                </div>
                <span className="ml-2 font-medium">Select Time</span>
              </div>
              <div className={`w-16 h-1 ${step === 'details' ? 'bg-primary-600' : 'bg-gray-300'}`}></div>
              <div className={`flex items-center ${step === 'details' ? 'text-primary-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'details' ? 'bg-primary-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                  3
                </div>
                <span className="ml-2 font-medium">Your Details</span>
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            {step === 'date' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Choose a Date</h2>
                <Calendar onDateSelect={handleDateSelect} />
              </div>
            )}

            {step === 'time' && (
              <div>
                <button
                  onClick={handleBack}
                  className="mb-6 text-primary-600 hover:text-primary-700 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Date Selection
                </button>
                <h2 className="text-2xl font-semibold mb-2 text-gray-900">Choose a Time</h2>
                <p className="text-gray-600 mb-6">
                  Selected Date: {selectedDate && format(selectedDate, 'EEEE, MMMM d, yyyy')}
                </p>
                {loadingSlots ? (
                  <div className="text-center py-8">
                    <p className="text-gray-600">Checking availability...</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {timeSlots.map((time) => {
                      const isBooked = bookedSlots.includes(time)
                      return (
                        <button
                          key={time}
                          onClick={() => !isBooked && handleTimeSelect(time)}
                          disabled={isBooked}
                          className={`p-4 rounded-lg border-2 transition-colors ${
                            isBooked
                              ? 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed opacity-60'
                              : selectedTime === time
                              ? 'border-primary-600 bg-primary-50 text-primary-600'
                              : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                          }`}
                        >
                          {time}
                          {isBooked && (
                            <span className="block text-xs mt-1 text-red-600">Booked</span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )}

            {step === 'details' && (
              <div>
                <button
                  onClick={handleBack}
                  className="mb-6 text-primary-600 hover:text-primary-700 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Time Selection
                </button>
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Your Information</h2>
                <BookingForm
                  selectedDate={selectedDate!}
                  selectedTime={selectedTime}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

