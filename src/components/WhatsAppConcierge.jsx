import React, { useState } from 'react'
import { CONTACT_CONFIG } from '../constants/contact'
import './WhatsAppConcierge.css'

export default function WhatsAppConcierge() {
  const [isOpen, setIsOpen] = useState(false)

  const sendWhatsApp = (topic) => {
    const text = `Hello Aviory & Co., I am inquiring regarding: ${topic}. Could you please connect me with a Master Gemologist?`
    window.open(CONTACT_CONFIG.buildWhatsAppUrl(text), '_blank')
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
              Connect directly with our master gemologists in Sri Lanka for private pricing, 4K daylight video previews, or bespoke inquiries.
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
                onClick={() => sendWhatsApp('Bespoke Engagement Ring Consultation')}
              >
                <span>✦</span> Bespoke Engagement Consultation
              </button>
              <button 
                type="button" 
                className="concierge-opt-btn"
                onClick={() => sendWhatsApp('Private Atelier Appointment (Colombo / Virtual)')}
              >
                <span>✦</span> Book Atelier / Virtual Viewing
              </button>
              <button 
                type="button" 
                className="concierge-opt-btn"
                onClick={() => sendWhatsApp('Haute Joaillerie High Jewellery Suites')}
              >
                <span>✦</span> View High Jewellery Suites
              </button>
            </div>

            <div className="concierge-card__footer">
              <span className="concierge-hours">Atelier Hours: {CONTACT_CONFIG.atelier.hours}</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button 
        type="button" 
        className="concierge-launcher" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Direct Concierge"
      >
        <span className="concierge-pulse" />
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span className="concierge-launcher__label">Concierge</span>
      </button>
    </div>
  )
}
