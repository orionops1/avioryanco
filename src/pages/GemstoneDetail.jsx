import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import useCartStore from '../hooks/useCart'
import { useLanguage } from '../hooks/useLanguage'
import { formatPrice } from '../utils/currencyConverter'
import { gemstones } from '../data/products'
import ProductCard from '../components/ProductCard'
import GemstoneLightingViewer from '../components/GemstoneLightingViewer'
import StickyConciergeButton from '../components/StickyConciergeButton'
import './GemstoneDetail.css'

export default function GemstoneDetail() {
  const { id } = useParams()
  const { currency } = useLanguage()
  const gem = gemstones.find(g => g.id === id)
  const addItem = useCartStore((state) => state.addItem)
  
  const [added, setAdded] = useState(false)
  const [activeTab, setActiveTab] = useState('specs')
  const [selectedAngle, setSelectedAngle] = useState(0)
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false)
  const [inquirySent, setInquirySent] = useState(false)
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', phone: '', message: '' })

  if (!gem) {
    return (
      <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Gemstone Not Found</h2>
        <p style={{ marginTop: '1rem', color: 'var(--color-charcoal)' }}>
          The requested gemstone creation may have already been acquired into a private collection.
        </p>
        <Link to="/gemstones" className="btn btn-primary" style={{ marginTop: '2rem' }}>
          Explore Vault
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(gem)
    setAdded(true)
    setTimeout(() => setAdded(false), 3000)

    // Send item details to WhatsApp
    const priceStr = typeof gem.price === 'number' ? `$${gem.price.toLocaleString()}` : gem.price
    const text = `Hello AVIORY & CO., I have selected and added this gemstone to my shopping bag:\n\n*Piece:* ${gem.name}\n*Category:* ${gem.category || 'Gemstone'}\n*Carat Weight:* ${gem.caratWeight ? gem.caratWeight + ' ct' : 'Unheated Specimen'}\n*Origin:* ${gem.origin || 'Ceylon'}\n*Price:* ${priceStr}\n*Ref:* ${gem.id}\n\nPlease confirm availability and concierge purchase details.`
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

  const angles = [
    { label: 'Table Face', desc: 'Frontal brilliant cut facet view' },
    { label: 'Pavilion Depth', desc: 'Side profile & cut proportion' },
    { label: 'Light Refraction', desc: 'Natural daylight dispersion' },
    { label: 'Hand Scale', desc: 'Scale reference in hand setting' }
  ]

  const related = gemstones
    .filter(g => g.category === gem.category && g.id !== gem.id)
    .slice(0, 4)

  return (
    <div className="pdp">
      {/* Breadcrumb Navigation */}
      <nav className="pdp-breadcrumbs container" aria-label="Breadcrumb">
        <Link to="/" className="pdp-breadcrumb-link">Maison</Link>
        <span className="pdp-breadcrumb-sep">/</span>
        <Link to="/gemstones" className="pdp-breadcrumb-link">Gemstones</Link>
        <span className="pdp-breadcrumb-sep">/</span>
        <Link to={`/gemstones?category=${gem.categorySlug}`} className="pdp-breadcrumb-link">{gem.category}</Link>
        <span className="pdp-breadcrumb-sep">/</span>
        <span className="pdp-breadcrumb-current">{gem.name}</span>
      </nav>

      {/* Main PDP Grid */}
      <div className="container pdp-main">
        {/* Left Column: Interactive Multi-Angle Gallery */}
        <div className="pdp-gallery">
          <div className="pdp-gallery__featured">
            <div className="pdp-gallery__badge-strip">
              <span className="pdp-badge pdp-badge--gold">Certified Ceylon Gem</span>
              <span className="pdp-badge">{gem.treatment}</span>
              <span className="pdp-badge">Ceylon Origin</span>
            </div>

            <div className="pdp-gallery__canvas">
              {gem.image ? (
                <img 
                  src={gem.image} 
                  alt={`${gem.name} - ${angles[selectedAngle].label}`}
                  className="pdp-gallery__img"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling.style.display = 'flex'
                  }}
                />
              ) : null}

              {/* Gemstone Geometric Art fallback */}
              <div className="pdp-gallery__fallback" style={{ display: gem.image ? 'none' : 'flex' }}>
                <svg className="pdp-gallery__facet-icon" viewBox="0 0 140 140" fill="none" stroke="currentColor">
                  <polygon points="70,12 114,38 114,102 70,128 26,102 26,38" stroke="rgba(212,175,127,0.7)" strokeWidth="1.5" />
                  <polygon points="70,30 98,50 98,90 70,110 42,90 42,50" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
                  <circle cx="70" cy="70" r="18" stroke="rgba(212,175,127,0.9)" strokeWidth="1.5" />
                  <line x1="70" y1="12" x2="70" y2="30" stroke="rgba(212,175,127,0.5)" strokeWidth="1.2" />
                  <line x1="114" y1="38" x2="98" y2="50" stroke="rgba(212,175,127,0.5)" strokeWidth="1.2" />
                  <line x1="114" y1="102" x2="98" y2="90" stroke="rgba(212,175,127,0.5)" strokeWidth="1.2" />
                  <line x1="70" y1="128" x2="70" y2="110" stroke="rgba(212,175,127,0.5)" strokeWidth="1.2" />
                  <line x1="26" y1="102" x2="42" y2="90" stroke="rgba(212,175,127,0.5)" strokeWidth="1.2" />
                  <line x1="26" y1="38" x2="42" y2="50" stroke="rgba(212,175,127,0.5)" strokeWidth="1.2" />
                </svg>
                <span className="pdp-gallery__fallback-caption">{angles[selectedAngle].label} â€¢ {gem.color}</span>
              </div>
            </div>

            <div className="pdp-gallery__angle-desc">
              <span>View: <strong>{angles[selectedAngle].label}</strong> â€” {angles[selectedAngle].desc}</span>
            </div>
          </div>

          {/* Thumbnail Selectors */}
          <div className="pdp-thumbnails">
            {angles.map((angle, idx) => (
              <button
                key={idx}
                type="button"
                className={`pdp-thumb ${selectedAngle === idx ? 'pdp-thumb--active' : ''}`}
                onClick={() => setSelectedAngle(idx)}
                aria-label={angle.label}
              >
                <span className="pdp-thumb__index">0{idx + 1}</span>
                <span className="pdp-thumb__title">{angle.label}</span>
              </button>
            ))}
          </div>

          {/* Presentation Ritual Module (Tiffany Style) */}
          <div className="pdp-ritual">
            <h4 className="pdp-ritual__title">The Aviory Signature Packaging</h4>
            <p className="pdp-ritual__text">
              Presented in a hand-polished lacquered mahogany presentation box, plush Italian suede travel pouch, 
              wax-sealed Ceylon provenance dossier, and international laboratory certificate. Delivered via fully insured armoured courier.
            </p>
          </div>
        </div>

        {/* Right Column: Gemstone Details & Actions */}
        <div className="pdp-info">
          <div className="pdp-info__header">
            <span className="pdp-info__subtitle">{gem.category} â€¢ REF: {gem.id.toUpperCase()}</span>
            <h1 className="pdp-info__title">{gem.name}</h1>
            <div className="pdp-info__price">{formatPrice(gem.price, currency)}</div>
            <p className="pdp-info__taxes">Complimentary worldwide insured delivery & taxes included</p>
          </div>

          {/* Key Spec Matrix */}
          <div className="pdp-specs-grid">
            <div className="pdp-spec-box">
              <span className="pdp-spec-box__label">Carat Weight</span>
              <span className="pdp-spec-box__value">{gem.specs.weight}</span>
            </div>
            <div className="pdp-spec-box">
              <span className="pdp-spec-box__label">Color Saturation</span>
              <span className="pdp-spec-box__value">{gem.color}</span>
            </div>
            <div className="pdp-spec-box">
              <span className="pdp-spec-box__label">Clarity Grade</span>
              <span className="pdp-spec-box__value">{gem.clarity}</span>
            </div>
            <div className="pdp-spec-box">
              <span className="pdp-spec-box__label">Treatment</span>
              <span className="pdp-spec-box__value">{gem.treatment}</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pdp-actions">
            <button
              type="button"
              className="btn btn-primary pdp-btn--inquire"
              onClick={() => setInquiryModalOpen(true)}
            >
              Inquire with Master Gemologist
            </button>

            <button
              type="button"
              className="btn btn-secondary pdp-btn--cart"
              onClick={handleAddToCart}
            >
              {added ? 'Added to Bag ✓' : 'Add to Shopping Bag'}
            </button>
          </div>

          {added && (
            <div className="alert alert-success" style={{ marginTop: '1rem' }}>
              Creation successfully added to your private selection.
            </div>
          )}

          {/* Concierge Assurance Badges */}
          <div className="pdp-assurances">
            <div className="pdp-assurance-item">
              <span className="pdp-assurance-icon">âœ¦</span>
              <div>
                <strong>Ceylon Provenance Guarantee</strong>
                <p>100% natural, unheated stone from the sacred gem rivers of Ceylon.</p>
              </div>
            </div>
            <div className="pdp-assurance-item">
              <span className="pdp-assurance-icon">âœ¦</span>
              <div>
                <strong>Ceylon Gemstone Documentation</strong>
                <p>Accompanied by verified independent laboratory certification of authenticity.</p>
              </div>
            </div>
            <div className="pdp-assurance-item">
              <span className="pdp-assurance-icon">âœ¦</span>
              <div>
                <strong>Bespoke Setting Integration</strong>
                <p>Commission our master goldsmiths to mount this stone into a bespoke creation.</p>
              </div>
            </div>
          </div>

          {/* Editorial Tabs */}
          <div className="pdp-tabs">
            <div className="pdp-tabs__nav">
              <button
                type="button"
                className={`pdp-tab-btn ${activeTab === 'specs' ? 'pdp-tab-btn--active' : ''}`}
                onClick={() => setActiveTab('specs')}
              >
                Gemstone Story
              </button>
              <button
                type="button"
                className={`pdp-tab-btn ${activeTab === 'physical' ? 'pdp-tab-btn--active' : ''}`}
                onClick={() => setActiveTab('physical')}
              >
                The Stone
              </button>
              <button
                type="button"
                className={`pdp-tab-btn ${activeTab === 'provenance' ? 'pdp-tab-btn--active' : ''}`}
                onClick={() => setActiveTab('provenance')}
              >
                Certification
              </button>
            </div>

            <div className="pdp-tabs__content">
              {activeTab === 'specs' && (
                <div className="pdp-tab-pane">
                  <p className="pdp-story-text">{gem.longDescription || gem.description}</p>
                  <p className="pdp-story-sub">
                    Hand-cut by master craftsmen to maximize brilliance while preserving natural characteristics.
                  </p>
                </div>
              )}

              {activeTab === 'physical' && (
                <div className="pdp-tab-pane">
                  <table className="pdp-table">
                    <tbody>
                      <tr>
                        <td>Dimensions</td>
                        <td><strong>{gem.specs.dimensions}</strong></td>
                      </tr>
                      <tr>
                        <td>Refractive Index</td>
                        <td><strong>{gem.specs.refractive_index}</strong></td>
                      </tr>
                      <tr>
                        <td>Specific Gravity / Density</td>
                        <td><strong>{gem.specs.density}</strong></td>
                      </tr>
                      <tr>
                        <td>Mohs Hardness Scale</td>
                        <td><strong>{gem.specs.hardness} (Second only to diamond)</strong></td>
                      </tr>
                      <tr>
                        <td>Geographic Origin</td>
                        <td><strong>{gem.origin} (Ceylon)</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'provenance' && (
                <div className="pdp-tab-pane">
                  <div className="pdp-cert-card">
                    <h4>{gem.certification} Diamond & Gemstone Laboratory</h4>
                    <p>
                      This unheated {gem.name} is verified as a certified Ceylon gemstone for natural status, color authenticity, and absence of thermal enhancement. 
                      Official Ceylon provenance documentation with physical hallmark seal is presented upon purchase.
                    </p>
                    <Link to="/journal/the-heritage-of-ceylon-gemstones" className="pdp-cert-link">
                      Learn About Ceylon Gemological Heritage â†’
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Gemstone Lighting & Brilliance Simulator */}
      <div className="container">
        <GemstoneLightingViewer gem={gem} />
      </div>

      {/* Concierge Modal */}
      {inquiryModalOpen && (
        <div className="pdp-modal-backdrop" onClick={() => setInquiryModalOpen(false)}>
          <div className="pdp-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="pdp-modal__close" 
              onClick={() => setInquiryModalOpen(false)}
              aria-label="Close modal"
            >
              âœ•
            </button>
            <span className="pdp-info__subtitle">PRIVATE CONCIERGE INQUIRY</span>
            <h3 className="pdp-modal__title">{gem.name}</h3>
            <p className="pdp-modal__meta">Ref: {gem.id.toUpperCase()} â€¢ {formatPrice(gem.price, currency)} â€¢ {gem.specs.weight}</p>

            {inquirySent ? (
              <div className="alert alert-success" style={{ margin: '2rem 0' }}>
                Thank you. Our Master Gemologist will contact you shortly with high-resolution video footage and private viewing details.
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
                  placeholder="Telephone (Optional - for private WhatsApp video call)"
                  value={inquiryForm.phone}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                />
                <textarea
                  rows="4"
                  placeholder="How may our gemologist assist you? (e.g. video preview, bespoke ring design, custom mounting options)"
                  value={inquiryForm.message}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                />
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  Send Private Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Related Gemstones Gallery */}
      {related.length > 0 && (
        <section className="pdp-related container">
          <div className="section-title">
            <span className="collection-label">SIMILAR PIECES</span>
            <h2>Complementary Gemstones</h2>
          </div>
          <div className="product-grid">
            {related.map(r => (
              <ProductCard key={r.id} product={r} type="gemstone" />
            ))}
          </div>
        </section>
      )}

      {/* Sticky Concierge Button */}
      <StickyConciergeButton onClickContact={() => setInquiryModalOpen(true)} />
    </div>
  )
}


