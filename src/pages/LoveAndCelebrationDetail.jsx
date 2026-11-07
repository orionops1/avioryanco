import { CONTACT_CONFIG } from '../constants/contact'
﻿import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import useCartStore from '../hooks/useCart'
import { useLanguage } from '../hooks/useLanguage'
import { formatPrice } from '../utils/currencyConverter'
import { engagementRings } from '../data/products'
import ProductCard from '../components/ProductCard'
import StickyConciergeButton from '../components/StickyConciergeButton'
import './LoveAndCelebrationDetail.css'

export default function LoveAndCelebrationDetail() {
  const { id } = useParams()
  const { currency } = useLanguage()
  const ring = engagementRings.find(r => r.id === id)
  const addItem = useCartStore((state) => state.addItem)
  
  const [added, setAdded] = useState(false)
  const [selectedSize, setSelectedSize] = useState('6.5')
  const [selectedMetal, setSelectedMetal] = useState('Platinum')
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false)
  const [inquirySent, setInquirySent] = useState(false)
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', phone: '', message: '' })

  if (!ring) {
    return (
      <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Ring Not Found</h2>
        <Link to="/love-and-celebration" className="btn btn-primary" style={{ marginTop: '2rem' }}>
          Back to Love & Celebration Collection
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({ ...ring, selectedSize, selectedMetal })
    setAdded(true)
    setTimeout(() => setAdded(false), 3000)

    // Send ring details to WhatsApp
    const priceStr = typeof ring.price === 'number' ? `$${ring.price.toLocaleString()}` : ring.price
    const text = `Hello AVIORY & CO., I have selected and added this ring to my shopping bag:\n\n*Piece:* ${ring.name}\n*Style:* ${ring.style || 'Engagement Ring'}\n*Stone:* ${ring.stoneType || 'Ceylon Sapphire'}\n*Shape:* ${ring.shape || ''}\n*Selected Size:* US ${selectedSize}\n*Selected Metal:* ${selectedMetal}\n*Price:* ${priceStr}\n*Ref:* ${ring.id}\n\nPlease confirm creation timeline and private salon consultation.`
    window.open(CONTACT_CONFIG.buildWhatsAppUrl(text), '_blank')
  }

  const handleInquirySubmit = (e) => {
    e.preventDefault()
    setInquirySent(true)
    setTimeout(() => {
      setInquirySent(false)
      setInquiryModalOpen(false)
      setInquiryForm({ name: '', email: '', phone: '', message: '' })
    }, 2500)
  }

  const sizes = ['4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5']
  const metals = ['Platinum', '18K Yellow Gold', '18K Rose Gold', '18K White Gold']

  const related = engagementRings.filter(r => r.id !== ring.id).slice(0, 3)

  return (
    <div className="pdp">
      <nav className="pdp-breadcrumbs container" aria-label="Breadcrumb">
        <Link to="/" className="pdp-breadcrumb-link">Maison</Link>
        <span className="pdp-breadcrumb-sep">/</span>
        <Link to="/engagement-rings" className="pdp-breadcrumb-link">Love Collection</Link>
        <span className="pdp-breadcrumb-sep">/</span>
        <span className="pdp-breadcrumb-current">{ring.name}</span>
      </nav>

      <div className="container pdp-main">
        {/* Gallery */}
        <div className="pdp-gallery">
          <div className="pdp-gallery__featured">
            <div className="pdp-gallery__badge-strip">
              <span className="pdp-badge pdp-badge--gold">Handcrafted Ring</span>
              <span className="pdp-badge">Bespoke Fitting</span>
            </div>
            <div className="pdp-gallery__canvas">
              {ring.image ? (
                <img src={ring.image} alt={ring.name} className="pdp-gallery__img" />
              ) : (
                <div className="pdp-gallery__fallback" style={{ background: 'linear-gradient(135deg, #241c19 0%, #453630 50%, #69524a 100%)' }}>
                  <svg className="pdp-gallery__facet-icon" viewBox="0 0 140 140" fill="none" stroke="currentColor">
                    <circle cx="70" cy="70" r="44" stroke="rgba(212,175,127,0.8)" strokeWidth="4" />
                    <circle cx="70" cy="26" r="14" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
                    <polygon points="70,16 78,26 70,36 62,26" fill="rgba(212,175,127,0.7)" />
                  </svg>
                  <span className="pdp-gallery__fallback-caption">{ring.style} â€¢ {ring.stone}</span>
                </div>
              )}
            </div>
          </div>

          <div className="pdp-ritual">
            <h4 className="pdp-ritual__title">Complimentary Ring Sizing & Lifetime Warranty</h4>
            <p className="pdp-ritual__text">
              Every Aviory engagement ring includes complimentary bespoke resizing within 12 months of purchase, 
              annual professional cleaning and prong inspection, and a lifetime craftsmanship guarantee.
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="pdp-info">
          <div className="pdp-info__header">
            <span className="pdp-info__subtitle">{ring.style} â€¢ REF: {ring.id.toUpperCase()}</span>
            <h1 className="pdp-info__title">{ring.name}</h1>
            <div className="pdp-info__price">{formatPrice(ring.price, currency)}</div>
            <p className="pdp-info__taxes">Mounted in {selectedMetal} â€¢ Certified Ceylon Gemstone</p>
          </div>

          {/* Metal Selector */}
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '0.5rem' }}>
              Select Precious Metal: <strong>{selectedMetal}</strong>
            </span>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {metals.map(metal => (
                <button
                  key={metal}
                  type="button"
                  onClick={() => setSelectedMetal(metal)}
                  style={{
                    padding: '0.45rem 0.85rem',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-ui)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    border: `1px solid ${selectedMetal === metal ? 'var(--color-black)' : 'var(--color-gray-light)'}`,
                    backgroundColor: selectedMetal === metal ? 'var(--color-black)' : 'var(--color-white)',
                    color: selectedMetal === metal ? 'var(--color-white)' : 'var(--color-charcoal)',
                    cursor: 'pointer'
                  }}
                >
                  {metal}
                </button>
              ))}
            </div>
          </div>

          {/* Ring Sizing */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-accent)', fontWeight: 600 }}>
                US Ring Size: <strong>{selectedSize}</strong>
              </span>
              <button 
                type="button" 
                onClick={() => setInquiryModalOpen(true)}
                style={{ background: 'none', border: 'none', fontSize: '0.72rem', textDecoration: 'underline', color: 'var(--color-champagne)', cursor: 'pointer' }}
              >
                Complimentary Sizer Tool
              </button>
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {sizes.map(size => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  style={{
                    width: '38px',
                    height: '38px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-ui)',
                    fontWeight: 600,
                    border: `1px solid ${selectedSize === size ? 'var(--color-champagne)' : 'var(--color-gray-light)'}`,
                    backgroundColor: selectedSize === size ? 'var(--color-champagne)' : 'var(--color-white)',
                    color: selectedSize === size ? 'var(--color-black)' : 'var(--color-charcoal)',
                    cursor: 'pointer'
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pdp-actions">
            <button
              type="button"
              className="btn btn-primary pdp-btn--inquire"
              onClick={() => setInquiryModalOpen(true)}
            >
              Consult with Bridal Specialist
            </button>
            <button
              type="button"
              className="btn btn-secondary pdp-btn--cart"
              onClick={handleAddToCart}
            >
              {added ? 'Added to Bag âœ“' : 'Add to Shopping Bag'}
            </button>
          </div>

          {added && (
            <div className="alert alert-success" style={{ marginBottom: '1.5rem' }}>
              Ring added to your bag in size {selectedSize} ({selectedMetal}).
            </div>
          )}

          {/* Specs */}
          <div className="pdp-specs-grid">
            <div className="pdp-spec-box">
              <span className="pdp-spec-box__label">Center Gemstone</span>
              <span className="pdp-spec-box__value">{ring.stone}</span>
            </div>
            <div className="pdp-spec-box">
              <span className="pdp-spec-box__label">Ring Style</span>
              <span className="pdp-spec-box__value">{ring.style}</span>
            </div>
            <div className="pdp-spec-box">
              <span className="pdp-spec-box__label">Precious Metal</span>
              <span className="pdp-spec-box__value">{selectedMetal}</span>
            </div>
            <div className="pdp-spec-box">
              <span className="pdp-spec-box__label">Warranty</span>
              <span className="pdp-spec-box__value">Lifetime Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Concierge Modal */}
      {inquiryModalOpen && (
        <div className="pdp-modal-backdrop" onClick={() => setInquiryModalOpen(false)}>
          <div className="pdp-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="pdp-modal__close" 
              onClick={() => setInquiryModalOpen(false)}
            >
              âœ•
            </button>
            <span className="pdp-info__subtitle">BRIDAL APPOINTMENT & INQUIRY</span>
            <h3 className="pdp-modal__title">{ring.name}</h3>
            <p className="pdp-modal__meta">{formatPrice(ring.price, currency)} â€¢ Size {selectedSize} â€¢ {selectedMetal}</p>

            {inquirySent ? (
              <div className="alert alert-success">
                Thank you. A bridal consultant will reach out to confirm your virtual or in-atelier showing.
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="pdp-modal__form">
                <div className="pdp-form-row">
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    required
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Telephone / WhatsApp (for private consultation)"
                  value={inquiryForm.phone}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                />
                <textarea
                  rows="3"
                  placeholder="Tell us about your timeline, customized center stone preferences, or appointment timing..."
                  value={inquiryForm.message}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                />
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Bridal Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="pdp-related container">
          <div className="section-title">
            <span className="collection-label">BRIDAL COLLECTION</span>
            <h2>Discover More Ring Styles</h2>
          </div>
          <div className="product-grid">
            {related.map(r => (
              <ProductCard key={r.id} product={r} type="ring" />
            ))}
          </div>
        </section>
      )}

      {/* Sticky Concierge Button */}
      <StickyConciergeButton onClickContact={() => setInquiryModalOpen(true)} />
    </div>
  )
}

