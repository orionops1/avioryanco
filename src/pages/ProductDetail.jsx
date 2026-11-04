import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import useCartStore from '../hooks/useCart'
import { useLanguage } from '../hooks/useLanguage'
import { formatPrice } from '../utils/currencyConverter'
import { gemstones, fineJewellery, engagementRings } from '../data/products'
import ProductCard from '../components/ProductCard'
import StickyConciergeButton from '../components/StickyConciergeButton'
import './ProductDetail.css'

export default function ProductDetail() {
  const { id } = useParams()
  const { currency } = useLanguage()
  const addItem = useCartStore((state) => state.addItem)
  
  // Find product across all types
  let product = null
  let productType = null
  let relatedProducts = []

  // Try to find in gemstones (prefix: bs-, ps-, ys-, pp-, rb-, sp-, og-, cs-)
  if (id.startsWith('bs-') || id.startsWith('ps-') || id.startsWith('ys-') || 
      id.startsWith('pp-') || id.startsWith('rb-') || id.startsWith('sp-') || 
      id.startsWith('og-') || id.startsWith('cs-')) {
    product = gemstones.find(g => g.id === id)
    if (product) {
      productType = 'gemstone'
      relatedProducts = gemstones
        .filter(g => g.category === product.category && g.id !== product.id)
        .slice(0, 4)
    }
  }
  // Try to find in fine jewellery (prefix: fj-)
  else if (id.startsWith('fj-')) {
    product = fineJewellery.find(j => j.id === id)
    if (product) {
      productType = 'jewellery'
      relatedProducts = fineJewellery
        .filter(j => j.collection === product.collection && j.id !== product.id)
        .slice(0, 4)
    }
  }
  // Try to find in love & celebration rings (prefix: er-)
  else if (id.startsWith('er-')) {
    product = engagementRings.find(r => r.id === id)
    if (product) {
      productType = 'ring'
      relatedProducts = engagementRings
        .filter(r => r.style === product.style && r.id !== product.id)
        .slice(0, 4)
    }
  }

  // State management
  const [added, setAdded] = useState(false)
  const [activeTab, setActiveTab] = useState('details')
  const [selectedSize, setSelectedSize] = useState('6.5')
  const [selectedMetal, setSelectedMetal] = useState('18K White Gold')
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false)
  const [inquirySent, setInquirySent] = useState(false)
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', phone: '', message: '' })

  if (!product) {
    return (
      <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Product Not Found</h2>
        <p style={{ marginTop: '1rem', color: 'var(--color-charcoal)' }}>
          The requested product may have already been acquired into a private collection.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/gemstones" className="btn btn-primary">
            Explore Gemstones
          </Link>
          <Link to="/fine-jewellery" className="btn btn-primary">
            Browse Fine Jewellery
          </Link>
          <Link to="/love-and-celebration" className="btn btn-primary">
            View Love & Celebration Collection
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    const cartItem = productType === 'ring' 
      ? { ...product, selectedSize, selectedMetal }
      : product
    addItem(cartItem)
    setAdded(true)
    setTimeout(() => setAdded(false), 3000)

    // Send item details to WhatsApp
    const priceStr = typeof cartItem.price === 'number' ? `$${cartItem.price.toLocaleString()}` : cartItem.price
    const sizeStr = cartItem.selectedSize ? `\n*Selected Size:* US ${cartItem.selectedSize}` : ''
    const metalStr = cartItem.selectedMetal ? `\n*Selected Metal:* ${cartItem.selectedMetal}` : ''
    const text = `Hello AVIORY & CO., I have selected and added this creation to my shopping bag:\n\n*Piece:* ${cartItem.name}\n*Category:* ${cartItem.category || cartItem.collection || 'Fine Jewellery'}\n*Price:* ${priceStr}${sizeStr}${metalStr}\n*Ref:* ${cartItem.id}\n\nPlease confirm availability and concierge purchase details.`
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

  // Generate breadcrumb based on product type
  const getBreadcrumb = () => {
    if (productType === 'gemstone') {
      return (
        <>
          <Link to="/" className="pdp-breadcrumb-link">Maison</Link>
          <span className="pdp-breadcrumb-sep">/</span>
          <Link to="/gemstones" className="pdp-breadcrumb-link">Gemstones</Link>
          <span className="pdp-breadcrumb-sep">/</span>
          <Link to={`/gemstones?category=${product.categorySlug}`} className="pdp-breadcrumb-link">
            {product.category}
          </Link>
          <span className="pdp-breadcrumb-sep">/</span>
          <span className="pdp-breadcrumb-current">{product.name}</span>
        </>
      )
    } else if (productType === 'jewellery') {
      return (
        <>
          <Link to="/" className="pdp-breadcrumb-link">Maison</Link>
          <span className="pdp-breadcrumb-sep">/</span>
          <Link to="/fine-jewellery" className="pdp-breadcrumb-link">Fine Jewellery</Link>
          <span className="pdp-breadcrumb-sep">/</span>
          <Link to={`/fine-jewellery?collection=${product.collectionSlug}`} className="pdp-breadcrumb-link">
            {product.collection}
          </Link>
          <span className="pdp-breadcrumb-sep">/</span>
          <span className="pdp-breadcrumb-current">{product.name}</span>
        </>
      )
    } else if (productType === 'ring') {
      return (
        <>
          <Link to="/" className="pdp-breadcrumb-link">Maison</Link>
          <span className="pdp-breadcrumb-sep">/</span>
          <Link to="/love-and-celebration" className="pdp-breadcrumb-link">Love & Celebration</Link>
          <span className="pdp-breadcrumb-sep">/</span>
          <Link to={`/love-and-celebration?style=${product.styleSlug}`} className="pdp-breadcrumb-link">
            {product.style}
          </Link>
          <span className="pdp-breadcrumb-sep">/</span>
          <span className="pdp-breadcrumb-current">{product.name}</span>
        </>
      )
    }
  }

  // Get category label
  const getCategoryLabel = () => {
    if (productType === 'gemstone') return product.category
    if (productType === 'jewellery') return product.collection
    if (productType === 'ring') return product.style
  }

  // Ring options
  const sizes = ['4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5']
  const metals = ['Platinum', '18K Yellow Gold', '18K Rose Gold', '18K White Gold']

  return (
    <div className="pdp">
      {/* Breadcrumb Navigation */}
      <nav className="pdp-breadcrumbs container" aria-label="Breadcrumb">
        {getBreadcrumb()}
      </nav>

      {/* Main PDP Grid */}
      <div className="container pdp-main">
        {/* Left Column: Image Gallery */}
        <div className="pdp-gallery">
          <div className="pdp-gallery__featured">
            {/* Badges */}
            <div className="pdp-gallery__badge-strip">
              {productType === 'gemstone' && (
                <>
                  <span className="pdp-badge pdp-badge--gold">GIA Certified</span>
                  <span className="pdp-badge">{product.treatment}</span>
                  <span className="pdp-badge">{product.origin}</span>
                </>
              )}
              {productType === 'jewellery' && (
                <>
                  <span className="pdp-badge pdp-badge--gold">Handcrafted</span>
                  <span className="pdp-badge">{product.material}</span>
                </>
              )}
              {productType === 'ring' && (
                <>
                  <span className="pdp-badge pdp-badge--gold">Handcrafted Ring</span>
                  <span className="pdp-badge">Bespoke Fitting</span>
                </>
              )}
            </div>

            {/* Main Image */}
            <div className="pdp-gallery__canvas">
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="pdp-gallery__img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling.style.display = 'flex'
                  }}
                />
              ) : null}

              {/* Fallback */}
              <div className="pdp-gallery__fallback" style={{ display: product.image ? 'none' : 'flex' }}>
                <svg className="pdp-gallery__facet-icon" viewBox="0 0 140 140" fill="none" stroke="currentColor">
                  <polygon points="70,12 114,38 114,102 70,128 26,102 26,38" stroke="rgba(212,175,127,0.7)" strokeWidth="1.5" />
                  <polygon points="70,30 98,50 98,90 70,110 42,90 42,50" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
                  <circle cx="70" cy="70" r="18" stroke="rgba(212,175,127,0.9)" strokeWidth="1.5" />
                </svg>
                <span className="pdp-gallery__fallback-caption">{product.name}</span>
              </div>
            </div>
          </div>

          {/* Packaging Info */}
          <div className="pdp-ritual">
            <h4 className="pdp-ritual__title">
              {productType === 'gemstone' ? 'The Aviory Signature Packaging' : 'Craftsmanship & Warranty'}
            </h4>
            <p className="pdp-ritual__text">
              {productType === 'gemstone'
                ? 'Presented in a hand-polished lacquered mahogany presentation box, plush Italian suede travel pouch, wax-sealed GIA dossier, and certificate of authentic mine provenance. Delivered via fully insured armoured courier.'
                : productType === 'jewellery'
                ? 'Each piece includes a luxury presentation box, certificate of authenticity, and complimentary professional cleaning service. Lifetime craftsmanship guarantee with annual inspection included.'
                : 'Every engagement ring includes complimentary bespoke resizing within 12 months of purchase, annual professional cleaning and prong inspection, and a lifetime craftsmanship guarantee.'}
            </p>
          </div>
        </div>

        {/* Right Column: Product Information */}
        <div className="pdp-info">
          {/* Header */}
          <div className="pdp-info__header">
            <span className="pdp-info__subtitle">
              {getCategoryLabel()} â€¢ REF: {product.id.toUpperCase()}
            </span>
            <h1 className="pdp-info__title">{product.name}</h1>
            <div className="pdp-info__price">{formatPrice(product.price, currency)}</div>
            <p className="pdp-info__taxes">
              {productType === 'gemstone'
                ? 'Complimentary worldwide insured delivery & taxes included'
                : 'Taxes and complimentary delivery included'}
            </p>
          </div>

          {/* Quick Specs Grid */}
          <div className="pdp-specs-grid">
            {productType === 'gemstone' && (
              <>
                <div className="pdp-spec-box">
                  <span className="pdp-spec-box__label">Carat Weight</span>
                  <span className="pdp-spec-box__value">{product.specs.weight}</span>
                </div>
                <div className="pdp-spec-box">
                  <span className="pdp-spec-box__label">Color</span>
                  <span className="pdp-spec-box__value">{product.color}</span>
                </div>
                <div className="pdp-spec-box">
                  <span className="pdp-spec-box__label">Clarity</span>
                  <span className="pdp-spec-box__value">{product.clarity}</span>
                </div>
                <div className="pdp-spec-box">
                  <span className="pdp-spec-box__label">Treatment</span>
                  <span className="pdp-spec-box__value">{product.treatment}</span>
                </div>
              </>
            )}
            {productType === 'jewellery' && (
              <>
                <div className="pdp-spec-box">
                  <span className="pdp-spec-box__label">Material</span>
                  <span className="pdp-spec-box__value">{product.material}</span>
                </div>
                <div className="pdp-spec-box">
                  <span className="pdp-spec-box__label">Main Stone</span>
                  <span className="pdp-spec-box__value">{product.mainStone}</span>
                </div>
                <div className="pdp-spec-box">
                  <span className="pdp-spec-box__label">Side Stones</span>
                  <span className="pdp-spec-box__value">{product.sideStones}</span>
                </div>
                <div className="pdp-spec-box">
                  <span className="pdp-spec-box__label">Weight</span>
                  <span className="pdp-spec-box__value">{product.weight}</span>
                </div>
              </>
            )}
            {productType === 'ring' && (
              <>
                <div className="pdp-spec-box">
                  <span className="pdp-spec-box__label">Center Stone</span>
                  <span className="pdp-spec-box__value">{product.stone}</span>
                </div>
                <div className="pdp-spec-box">
                  <span className="pdp-spec-box__label">Style</span>
                  <span className="pdp-spec-box__value">{product.style}</span>
                </div>
                <div className="pdp-spec-box">
                  <span className="pdp-spec-box__label">Precious Metal</span>
                  <span className="pdp-spec-box__value">{selectedMetal}</span>
                </div>
                <div className="pdp-spec-box">
                  <span className="pdp-spec-box__label">Warranty</span>
                  <span className="pdp-spec-box__value">Lifetime Guarantee</span>
                </div>
              </>
            )}
          </div>

          {/* Ring Configuration Options */}
          {productType === 'ring' && (
            <>
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
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {metal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ring Size Selector */}
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
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Primary Action Buttons */}
          <div className="pdp-actions">
            <button
              type="button"
              className="btn btn-primary pdp-btn--inquire"
              onClick={() => setInquiryModalOpen(true)}
            >
              {productType === 'gemstone' ? 'Inquire with Master Gemologist' : productType === 'ring' ? 'Consult with Bridal Specialist' : 'Request Private Consultation'}
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
              {productType === 'ring'
                ? `Ring added to your bag in size ${selectedSize} (${selectedMetal}).`
                : 'Item successfully added to your private selection.'}
            </div>
          )}

          {/* Trust Badges */}
          <div className="pdp-assurances">
            {productType === 'gemstone' && (
              <>
                <div className="pdp-assurance-item">
                  <span className="pdp-assurance-icon">âœ¦</span>
                  <div>
                    <strong>Certified Authenticity</strong>
                    <p>100% natural, unheated stone with independent GIA certification.</p>
                  </div>
                </div>
                <div className="pdp-assurance-item">
                  <span className="pdp-assurance-icon">âœ¦</span>
                  <div>
                    <strong>Direct Mine Provenance</strong>
                    <p>Sourced directly from established operations in Sri Lanka and beyond.</p>
                  </div>
                </div>
                <div className="pdp-assurance-item">
                  <span className="pdp-assurance-icon">âœ¦</span>
                  <div>
                    <strong>Bespoke Setting Integration</strong>
                    <p>Commission our master goldsmiths to mount this stone into a custom creation.</p>
                  </div>
                </div>
              </>
            )}
            {productType === 'jewellery' && (
              <>
                <div className="pdp-assurance-item">
                  <span className="pdp-assurance-icon">âœ¦</span>
                  <div>
                    <strong>Master Craftsmanship</strong>
                    <p>Handcrafted by our atelier of master artisans with decades of expertise.</p>
                  </div>
                </div>
                <div className="pdp-assurance-item">
                  <span className="pdp-assurance-icon">âœ¦</span>
                  <div>
                    <strong>Premium Materials</strong>
                    <p>Fine precious metals and certified gemstones in every piece.</p>
                  </div>
                </div>
                <div className="pdp-assurance-item">
                  <span className="pdp-assurance-icon">âœ¦</span>
                  <div>
                    <strong>Lifetime Guarantee</strong>
                    <p>Complimentary annual inspection and professional cleaning included.</p>
                  </div>
                </div>
              </>
            )}
            {productType === 'ring' && (
              <>
                <div className="pdp-assurance-item">
                  <span className="pdp-assurance-icon">âœ¦</span>
                  <div>
                    <strong>Lifetime Guarantee</strong>
                    <p>Complimentary sizing, inspection, and professional cleaning included.</p>
                  </div>
                </div>
                <div className="pdp-assurance-item">
                  <span className="pdp-assurance-icon">âœ¦</span>
                  <div>
                    <strong>Certified Gemstones</strong>
                    <p>All center stones certified by independent laboratory.</p>
                  </div>
                </div>
                <div className="pdp-assurance-item">
                  <span className="pdp-assurance-icon">âœ¦</span>
                  <div>
                    <strong>Expert Bridal Support</strong>
                    <p>Personalized consultation with our bridal specialists.</p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Tabbed Content */}
          <div className="pdp-tabs">
            <div className="pdp-tabs__nav">
              <button
                type="button"
                className={`pdp-tab-btn ${activeTab === 'details' ? 'pdp-tab-btn--active' : ''}`}
                onClick={() => setActiveTab('details')}
              >
                {productType === 'gemstone' ? 'Gemstone Story' : 'Product Details'}
              </button>
              <button
                type="button"
                className={`pdp-tab-btn ${activeTab === 'specs' ? 'pdp-tab-btn--active' : ''}`}
                onClick={() => setActiveTab('specs')}
              >
                {productType === 'gemstone' ? 'Provenance & Stone' : 'Craft & Provenance'}
              </button>
              {productType !== 'jewellery' && (
                <button
                  type="button"
                  className={`pdp-tab-btn ${activeTab === 'certification' ? 'pdp-tab-btn--active' : ''}`}
                  onClick={() => setActiveTab('certification')}
                >
                  Certification
                </button>
              )}
            </div>

            <div className="pdp-tabs__content">
              {activeTab === 'details' && (
                <div className="pdp-tab-pane">
                  <p className="pdp-story-text">{product.longDescription || product.description}</p>
                </div>
              )}

              {activeTab === 'specs' && productType === 'gemstone' && (
                <div className="pdp-tab-pane">
                  <table className="pdp-table">
                    <tbody>
                      <tr>
                        <td>Dimensions</td>
                        <td><strong>{product.specs.dimensions}</strong></td>
                      </tr>
                      <tr>
                        <td>Refractive Index</td>
                        <td><strong>{product.specs.refractive_index}</strong></td>
                      </tr>
                      <tr>
                        <td>Specific Gravity / Density</td>
                        <td><strong>{product.specs.density}</strong></td>
                      </tr>
                      <tr>
                        <td>Mohs Hardness Scale</td>
                        <td><strong>{product.specs.hardness}</strong></td>
                      </tr>
                      <tr>
                        <td>Geographic Origin</td>
                        <td><strong>{product.origin}</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'specs' && productType === 'jewellery' && (
                <div className="pdp-tab-pane">
                  <table className="pdp-table">
                    <tbody>
                      <tr>
                        <td>Material</td>
                        <td><strong>{product.material}</strong></td>
                      </tr>
                      <tr>
                        <td>Main Stone</td>
                        <td><strong>{product.mainStone}</strong></td>
                      </tr>
                      <tr>
                        <td>Side Stones</td>
                        <td><strong>{product.sideStones}</strong></td>
                      </tr>
                      <tr>
                        <td>Weight</td>
                        <td><strong>{product.weight}</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'specs' && productType === 'ring' && (
                <div className="pdp-tab-pane">
                  <table className="pdp-table">
                    <tbody>
                      <tr>
                        <td>Ring Style</td>
                        <td><strong>{product.style}</strong></td>
                      </tr>
                      <tr>
                        <td>Center Stone</td>
                        <td><strong>{product.stone}</strong></td>
                      </tr>
                      <tr>
                        <td>Precious Metal</td>
                        <td><strong>{product.material}</strong></td>
                      </tr>
                      <tr>
                        <td>Center Stone Carat</td>
                        <td><strong>{product.specs.stone_carat}</strong></td>
                      </tr>
                      <tr>
                        <td>Material Weight</td>
                        <td><strong>{product.specs.material_weight}</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'certification' && (
                <div className="pdp-tab-pane">
                  <div className="pdp-cert-card">
                    <h4>
                      {productType === 'gemstone'
                        ? 'GIA Diamond & Gemstone Laboratory'
                        : 'Certificate of Authenticity'}
                    </h4>
                    <p>
                      {productType === 'gemstone'
                        ? `This unheated ${product.name} is verified for natural status, color authenticity, and absence of thermal enhancement. Official GIA documentation is presented with physical hallmark seal upon purchase.`
                        : productType === 'ring'
                        ? `This engagement ring comes with a certificate of authenticity guaranteeing the quality and characteristics of the center gemstone. All rings are manufactured according to the highest standards of craftsmanship.`
                        : `This fine jewellery piece comes with a certificate of authenticity guaranteeing the materials and craftsmanship standards.`}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="pdp-related container">
          <div className="section-title">
            <span className="collection-label">SIMILAR PIECES</span>
            <h2>
              {productType === 'gemstone'
                ? 'Complementary Gemstones'
                : productType === 'jewellery'
                ? 'Explore the Collection'
                : 'Discover More Ring Styles'}
            </h2>
          </div>
          <div className="product-grid">
            {relatedProducts.map(related => (
              <ProductCard 
                key={related.id} 
                product={related} 
                type={productType}
              />
            ))}
          </div>
        </section>
      )}

      {/* Inquiry Modal */}
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
            <span className="pdp-info__subtitle">
              {productType === 'gemstone'
                ? 'PRIVATE GEMOLOGIST INQUIRY'
                : productType === 'ring'
                ? 'BRIDAL APPOINTMENT & INQUIRY'
                : 'PRIVATE CONSULTATION REQUEST'}
            </span>
            <h3 className="pdp-modal__title">{product.name}</h3>
            <p className="pdp-modal__meta">
              Ref: {product.id.toUpperCase()} â€¢ {formatPrice(product.price, currency)}
              {productType === 'ring' && ` â€¢ Size ${selectedSize}`}
            </p>

            {inquirySent ? (
              <div className="alert alert-success" style={{ margin: '2rem 0' }}>
                {productType === 'gemstone'
                  ? 'Thank you. Our Master Gemologist will contact you shortly with high-resolution video footage and private viewing details.'
                  : productType === 'ring'
                  ? 'Thank you. A bridal consultant will reach out to confirm your virtual or in-atelier showing.'
                  : 'Thank you. Our specialist will contact you shortly to arrange a private consultation.'}
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
                  placeholder="Telephone (Optional)"
                  value={inquiryForm.phone}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                />
                <textarea
                  rows="4"
                  placeholder={
                    productType === 'gemstone'
                      ? 'How may our gemologist assist you? (e.g. video preview, bespoke ring design)'
                      : productType === 'ring'
                      ? 'Tell us about your timeline, customized center stone preferences, or appointment timing...'
                      : 'Tell us more about your inquiry or custom request...'
                  }
                  value={inquiryForm.message}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                />
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  {productType === 'gemstone'
                    ? 'Send Private Inquiry'
                    : productType === 'ring'
                    ? 'Submit Bridal Request'
                    : 'Send Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Sticky Concierge Button */}
      <StickyConciergeButton onClickContact={() => setInquiryModalOpen(true)} />
    </div>
  )
}


