import React, { useState } from 'react'
import { Button } from './button'
import { Input } from './input'

interface ContactFormProps {
  className?: string
  onSubmit?: (data: FormData) => void
}

interface FormData {
  name: string
  email: string
  organization: string
  message: string
  eventInterest: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactForm({ className, onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    message: '',
    eventInterest: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500))

      if (onSubmit) {
        onSubmit(formData)
      }

      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: '',
        eventInterest: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-3xl p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h3>
        <p className="text-green-700 mb-6">
          Your message has been received. We'll get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-green-500 text-green-700 hover:bg-green-500 hover:text-white"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-dark-ocean mb-2">
            Full Name *
          </label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`focus:ring-2 focus:ring-opal ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Enter your full name"
            required
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-dark-ocean mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`focus:ring-2 focus:ring-opal ${errors.email ? 'border-red-500' : ''}`}
            placeholder="your.email@example.com"
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-semibold text-dark-ocean mb-2">
          Organization
        </label>
        <Input
          id="organization"
          type="text"
          value={formData.organization}
          onChange={(e) => handleInputChange('organization', e.target.value)}
          className="focus:ring-2 focus:ring-opal"
          placeholder="Your organization or company"
        />
      </div>

      <div>
        <label htmlFor="eventInterest" className="block text-sm font-semibold text-dark-ocean mb-2">
          Event Interest
        </label>
        <select
          id="eventInterest"
          value={formData.eventInterest}
          onChange={(e) => handleInputChange('eventInterest', e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-opal focus:border-transparent bg-white"
        >
          <option value="">Select an event (optional)</option>
          <option value="jpned">JPNed Connects - Tokyo, Japan</option>
          <option value="philed">PHILed Connects - Philippines</option>
          <option value="ausied">AUSed Connects - Melbourne, Australia</option>
          <option value="uked">UKed Connects - London, UK</option>
          <option value="general">General Inquiry</option>
          <option value="partnership">Partnership Opportunity</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-dark-ocean mb-2">
          Message *
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          rows={5}
          className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-opal focus:border-transparent resize-none ${errors.message ? 'border-red-500' : ''}`}
          placeholder="Tell us about your inquiry, event interest, or how we can help..."
          required
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-opal text-white hover:bg-opal-dark text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending Message...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  )
}
