import React, { useState } from 'react'
import { contactInfo } from '../data/content'
import './WhatsAppConcierge.css'

export default function WhatsAppConcierge() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = contactInfo.whatsapp

  const sendWhatsApp = (topic) => {
    const text = encodeURIComponent(`Hello Aviory & Co., I am inquiring regarding: ${topic}. Could you please connect me with a Master Gemologist?`)
    window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank')
    setIsOpen(false)
  }

  return (
    <div className="concierge-widget">
      {/* Popover Card */}
      {isOpen && (
        <div className="concierge-card">
          <div className="concierge-card__header">
            <div className="concierge-card__status">
              <span className="concierge-pulse" />
              <span>GEMOLOGIST • LIVE</span>
            </div>
            <button 
              type="button" 
              className="concierge-card__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close concierge"
            >
              ✕
            </button>
          </div>

          <div className="concierge-card__body">
            <h4 className="concierge-card__title">Direct Gemologist Concierge</h4>
            <p className="concierge-card__desc">
              Connect directly with our master gemologists for private pricing, 4K daylight video previews, or bespoke inquiries.
            </p>

            <div className="concierge-card__options">
              <button 
                type="button" 
                className="concierge-opt-btn"
                onClick={() => sendWhatsApp('Private Gemstone Sourcing / Availability')}
              >
                <span>✦</span> Inquire about Rare Ceylon Stones
              </button>
              <button 
                type="button" 
                className="concierge-opt-btn"
                onClick={() => sendWhatsApp('Daylight Video Preview Request')}
              >
                <span>✦</span> Request 4K Daylight Video Preview
              </button>
              <button 
                type="button" 
                className="concierge-opt-btn"
                onClick={() => sendWhatsApp('Bespoke Engagement Ring Consultation')}
              >
                <span>✦</span> Bespoke Engagement Ring Design
              </button>
            </div>
          </div>

          <div className="concierge-card__footer">
            <span className="concierge-card__secure-note">
              Encrypted Private WhatsApp Connection
            </span>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        className="concierge-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Luxury Concierge"
        title="Direct Gemologist Concierge"
      >
        <span className="concierge-btn__pulse" />
        <span className="concierge-btn__icon">✦</span>
        <span className="concierge-btn__label">Gemologist Concierge</span>
      </button>
    </div>
  )
}

