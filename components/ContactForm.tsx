'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email and SMS notifications
      const response = await fetch('/api/send-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          data: formData,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send notifications')
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting contact form:', error)
      // Still show success to user even if email fails
      setIsSubmitting(false)
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          We&apos;ve received your message and will get back to you soon!
        </p>
        <p className="text-sm text-gray-500">
          Or call us directly at <a href="tel:309-312-1408" className="text-primary-600 font-semibold hover:underline">(309) 312-1408</a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="(309) 312-1408"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          How Can We Help? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Tell us about your lawn care needs..."
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : '📞 Get Your Free Estimate'}
      </button>
      <p className="text-sm text-gray-500 text-center">
        Or call us directly: <a href="tel:309-312-1408" className="text-primary-600 font-semibold hover:underline">(309) 312-1408</a>
      </p>
    </form>
  )
}

