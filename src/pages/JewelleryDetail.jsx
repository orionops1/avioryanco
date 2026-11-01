import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import useCartStore from '../hooks/useCart'
import { useLanguage } from '../hooks/useLanguage'
import { formatPrice } from '../utils/currencyConverter'
import { fineJewellery } from '../data/products'
import ProductCard from '../components/ProductCard'
import StickyConciergeButton from '../components/StickyConciergeButton'
import './JewelleryDetail.css'

export default function JewelleryDetail() {
  const { id } = useParams()
  const { currency } = useLanguage()
  const item = fineJewellery.find(j => j.id === id)
  const addItem = useCartStore((state) => state.addItem)
  
  const [added, setAdded] = useState(false)
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false)
  const [inquirySent, setInquirySent] = useState(false)
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', phone: '', message: '' })

  if (!item) {
    return (
      <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Creation Not Found</h2>
        <Link to="/fine-jewellery" className="btn btn-primary" style={{ marginTop: '2rem' }}>
          Back to Fine Jewellery
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(item)
    setAdded(true)
    setTimeout(() => setAdded(false), 3000)

    // Send jewellery details to WhatsApp
    const priceStr = typeof item.price === 'number' ? `$${item.price.toLocaleString()}` : item.price
    const text = `Hello AVIORY & CO., I have selected and added this fine jewellery creation to my shopping bag:\n\n*Piece:* ${item.name}\n*Collection:* ${item.category || item.collection || 'High Jewellery'}\n*Price:* ${priceStr}\n*Ref:* ${item.id}\n\nPlease confirm availability and concierge purchase details.`
    window.open(`https://wa.me/94776100099?text=${encodeURIComponent(text)}`, '_blank')
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

  const related = fineJewellery.filter(j => j.id !== item.id).slice(0, 3)

  return (
    <div className="pdp">
      <nav className="pdp-breadcrumbs container" aria-label="Breadcrumb">
        <Link to="/" className="pdp-breadcrumb-link">Maison</Link>
        <span className="pdp-breadcrumb-sep">/</span>
        <Link to="/fine-jewellery" className="pdp-breadcrumb-link">Fine Jewellery</Link>
        <span className="pdp-breadcrumb-sep">/</span>
        <span className="pdp-breadcrumb-current">{item.name}</span>
      </nav>

      <div className="container pdp-main">
        {/* Gallery */}
        <div className="pdp-gallery">
          <div className="pdp-gallery__featured">
            <div className="pdp-gallery__badge-strip">
              <span className="pdp-badge pdp-badge--gold">Atelier Creation</span>
              <span className="pdp-badge">{item.collection}</span>
            </div>
            <div className="pdp-gallery__canvas">
              {item.image ? (
                <img src={item.image} alt={item.name} className="pdp-gallery__img" />
              ) : (
                <div className="pdp-gallery__fallback" style={{ background: 'linear-gradient(135deg, #1f1b24 0%, #3a3245 50%, #594d6b 100%)' }}>
                  <svg className="pdp-gallery__facet-icon" viewBox="0 0 140 140" fill="none" stroke="currentColor">
                    <path d="M70 20 L110 50 L110 90 L70 120 L30 90 L30 50 Z" stroke="rgba(212,175,127,0.8)" strokeWidth="2" />
                    <circle cx="70" cy="70" r="22" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                  </svg>
                  <span className="pdp-gallery__fallback-caption">{item.name}</span>
                </div>
              )}
            </div>
          </div>

          <div className="pdp-ritual">
            <h4 className="pdp-ritual__title">Handcrafted in our Ceylon Atelier</h4>
            <p className="pdp-ritual__text">
              Each piece represents up to 120 hours of intricate setting, polishing, and fine metalwork by our master artisans. 
              Delivered in our signature lacquered mahogany case with certified valuation documentation.
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="pdp-info">
          <div className="pdp-info__header">
            <span className="pdp-info__subtitle">{item.collection} â€¢ REF: {item.id.toUpperCase()}</span>
            <h1 className="pdp-info__title">{item.name}</h1>
            <div className="pdp-info__price">
              {typeof item.price === 'number' ? formatPrice(item.price, currency) : item.price}
            </div>
            <p className="pdp-info__taxes">Handcrafted in {item.material} â€¢ Worldwide Armoured Courier</p>
          </div>

          {/* Action Buttons */}
          <div className="pdp-actions">
            <button
              type="button"
              className="btn btn-primary pdp-btn--inquire"
              onClick={() => setInquiryModalOpen(true)}
            >
              Inquire with Jewellery Specialist
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
              Creation added to your shopping bag.
            </div>
          )}

          {/* Specs */}
          <div className="pdp-specs-grid">
            <div className="pdp-spec-box">
              <span className="pdp-spec-box__label">Precious Metal</span>
              <span className="pdp-spec-box__value">{item.material}</span>
            </div>
            <div className="pdp-spec-box">
              <span className="pdp-spec-box__label">Main Gemstone</span>
              <span className="pdp-spec-box__value">{item.mainStone}</span>
            </div>
            <div className="pdp-spec-box">
              <span className="pdp-spec-box__label">Side Stones</span>
              <span className="pdp-spec-box__value">{item.sideStones}</span>
            </div>
            <div className="pdp-spec-box">
              <span className="pdp-spec-box__label">Total Weight</span>
              <span className="pdp-spec-box__value">{item.weight}</span>
            </div>
          </div>

          <div className="pdp-story-text" style={{ marginTop: '1.5rem' }}>
            <p>{item.description}</p>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
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
            <span className="pdp-info__subtitle">PRIVATE ATELIER INQUIRY</span>
            <h3 className="pdp-modal__title">{item.name}</h3>
            <p className="pdp-modal__meta">{item.collection} â€¢ {item.material}</p>

            {inquirySent ? (
              <div className="alert alert-success">
                Thank you. Our jewellery concierge will contact you with high-resolution imagery and consultation options.
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
                  placeholder="Telephone / WhatsApp (Optional)"
                  value={inquiryForm.phone}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                />
                <textarea
                  rows="3"
                  placeholder="Inquire about custom sizing, bespoke modifications, or private showroom viewing..."
                  value={inquiryForm.message}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                />
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Inquiry
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
            <span className="collection-label">ATELIER HIGHLIGHTS</span>
            <h2>More Fine Jewellery</h2>
          </div>
          <div className="product-grid">
            {related.map(r => (
              <ProductCard key={r.id} product={r} type="jewellery" />
            ))}
          </div>
        </section>
      )}

      {/* Sticky Concierge Button */}
      <StickyConciergeButton onClickContact={() => setInquiryModalOpen(true)} />
    </div>
  )
}

