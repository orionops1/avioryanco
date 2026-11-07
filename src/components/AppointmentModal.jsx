import React, { useState } from 'react'
import './AppointmentModal.css'

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'virtual',
    date: '',
    interest: 'Ceylon Sapphires',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Unable to submit appointment request. Please try again.')
      }

      setSubmitted(true)
    } catch (err) {
      setErrorMessage(err.message || 'A network error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setSubmitted(false)
    setErrorMessage('')
    setFormData({
      name: '',
      email: '',
      phone: '',
      type: 'virtual',
      date: '',
      interest: 'Ceylon Sapphires',
      notes: ''
    })
    onClose()
  }

  return (
    <div className="appt-backdrop" onClick={onClose}>
      <div className="appt-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="appt-modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <span className="appt-modal__tag">HAUTE JOAILLERIE CONCIERGE</span>
        <h2 className="appt-modal__title">Book a Private Appointment</h2>
        <p className="appt-modal__subtitle">
          Connect with our gemologist for private viewings and bespoke consultations.
        </p>

        {submitted ? (
          <div className="alert alert-success" style={{ margin: '2rem 0', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.75rem', fontFamily: 'var(--font-serif-display)' }}>Appointment Request Confirmed</h3>
            <p style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Our private concierge will contact you within 4 hours to confirm your calendar booking and prepare selected creations for your private session.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleReset}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="appt-form">
            {errorMessage && (
              <div style={{
                backgroundColor: 'rgba(217, 83, 79, 0.1)',
                border: '1px solid #d9534f',
                color: '#d9534f',
                padding: '0.75rem 1rem',
                borderRadius: '4px',
                fontSize: '0.88rem',
                marginBottom: '1rem'
              }}>
                {errorMessage}
              </div>
            )}

            {/* Consultation Type Selector */}
            <div className="appt-types">
              <label className={`appt-type-card ${formData.type === 'virtual' ? 'appt-type-card--active' : ''}`}>
                <input
                  type="radio"
                  name="type"
                  value="virtual"
                  checked={formData.type === 'virtual'}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                />
                <strong>Virtual Viewing</strong>
                <span>1-on-1 4K Video Session</span>
              </label>

              <label className={`appt-type-card ${formData.type === 'atelier' ? 'appt-type-card--active' : ''}`}>
                <input
                  type="radio"
                  name="type"
                  value="atelier"
                  checked={formData.type === 'atelier'}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                />
                <strong>The Flagship Atelier</strong>
                <span>Private Atelier Visit · Sri Lanka</span>
              </label>

              <label className={`appt-type-card ${formData.type === 'suite' ? 'appt-type-card--active' : ''}`}>
                <input
                  type="radio"
                  name="type"
                  value="suite"
                  checked={formData.type === 'suite'}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                />
                <strong>Private Showing</strong>
                <span>In-Suite / Worldwide</span>
              </label>
            </div>

            <div className="appt-form-row">
              <input
                type="text"
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="appt-form-row">
              <input
                type="tel"
                placeholder="Telephone / WhatsApp *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>

            <select
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="appt-select"
            >
              <option value="Ceylon Sapphires">Area of Interest: Ceylon Sapphires (Royal / Cornflower)</option>
              <option value="Padparadscha">Area of Interest: Padparadscha &amp; Rare Spinels</option>
              <option value="Engagement Ring">Area of Interest: Bespoke Engagement Ring Commission</option>
              <option value="Fine Jewellery">Area of Interest: High Jewellery Suites &amp; Necklaces</option>
              <option value="Investment">Area of Interest: Investment Gemstone Portfolio</option>
            </select>

            <textarea
              rows="3"
              placeholder="Specific stones, carat weights, or preferences you would like prepared for your viewing..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              style={{ width: '100%', marginTop: '0.5rem', opacity: isSubmitting ? 0.7 : 1 }}
            >
              {isSubmitting ? 'Confirming with Concierge...' : 'Confirm Appointment Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
