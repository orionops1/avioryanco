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
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
      setFormData({
        name: '',
        email: '',
        phone: '',
        type: 'virtual',
        date: '',
        interest: 'Ceylon Sapphires',
        notes: ''
      })
    }, 2800)
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
          Connect with our gemologist for private viewings and consultations.
        </p>

        {submitted ? (
          <div className="alert alert-success" style={{ margin: '2rem 0', textAlign: 'center' }}>
            <h3>Appointment Request Confirmed</h3>
            <p>Our private concierge will contact you within 4 hours to finalize your calendar confirmation and private session link.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="appt-form">
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
                <strong>Atelier Viewing</strong>
                <span>Private Salon Appointment</span>
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

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
              Confirm Appointment Request
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

