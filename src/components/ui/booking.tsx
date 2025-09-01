import React, { useState } from 'react'
import { Button } from './button'
import { Input } from './input'

interface BookingFormProps {
  className?: string
  eventTitle?: string
  eventDate?: string
  eventPrice?: string
}

export function BookingForm({
  className,
  eventTitle = "JPNed Connects",
  eventDate = "30-31 October 2025",
  eventPrice = "AU$1,200"
}: BookingFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsBooked(true)
    setIsSubmitting(false)
  }

  if (isBooked) {
    return (
      <div className={`bg-opal/5 border border-opal/20 rounded-3xl p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-opal rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-dark-ocean mb-4">Booking Confirmed!</h3>
        <p className="text-gray-700">Registration for {eventTitle} confirmed.</p>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-dark-ocean mb-2">Book Your Spot</h3>
        <p className="text-lg font-semibold text-opal">{eventTitle}</p>
        <p className="text-gray-600">{eventDate}</p>
        <p className="text-2xl font-bold text-opal mt-2">{eventPrice}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
            required
          />
          <Input
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
            required
          />
        </div>

        <Input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
        />

        <Input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          required
        />

        <Input
          placeholder="Organization"
          value={formData.organization}
          onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-opal text-white hover:bg-opal-dark text-lg py-4"
        >
          {isSubmitting ? 'Processing...' : 'Register Now'}
        </Button>
      </form>
    </div>
  )
}
