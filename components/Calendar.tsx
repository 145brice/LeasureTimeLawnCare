'use client'

import { useState } from 'react'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { isPast, isToday } from 'date-fns'

interface CalendarProps {
  onDateSelect: (date: Date) => void
}

export default function Calendar({ onDateSelect }: CalendarProps) {
  const [value, setValue] = useState<Date>(new Date())

  const handleDateChange = (date: Date | Date[] | null) => {
    if (!date) return
    const selectedDate = Array.isArray(date) ? date[0] : date
    if (!(selectedDate instanceof Date)) return
    // Don't allow selecting past dates
    if (!isPast(selectedDate) || isToday(selectedDate)) {
      setValue(selectedDate)
      onDateSelect(selectedDate)
    }
  }

  const tileDisabled = ({ date }: { date: Date }) => {
    // Disable past dates
    return isPast(date) && !isToday(date)
  }

  return (
    <div className="flex justify-center">
      <ReactCalendar
        onChange={handleDateChange as any}
        value={value}
        minDate={new Date()}
        tileDisabled={tileDisabled}
        className="w-full max-w-md"
      />
    </div>
  )
}

