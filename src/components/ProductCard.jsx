import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { formatPrice } from '../utils/currencyConverter'
import './ProductCard.css'

// Helper to determine gemstone facet gradient based on stone or color
function getGemGradient(color = '', type = '') {
  const c = color.toLowerCase()
  const t = type.toLowerCase()
  if (c.includes('royal') || c.includes('blue') || c.includes('cornflower') || t.includes('sapphire')) {
    return 'linear-gradient(135deg, #0b1a30 0%, #173361 50%, #29539b 100%)'
  }
  if (c.includes('pink') || c.includes('padparadscha') || c.includes('peach')) {
    return 'linear-gradient(135deg, #421820 0%, #7d3345 50%, #d46b7a 100%)'
  }
  if (c.includes('yellow') || c.includes('gold') || c.includes('champagne')) {
    return 'linear-gradient(135deg, #382c0b 0%, #6e5719 50%, #c49e35 100%)'
  }
  if (c.includes('ruby') || c.includes('red') || t.includes('ruby')) {
    return 'linear-gradient(135deg, #3d0c14 0%, #781728 50%, #b8253f 100%)'
  }
  if (c.includes('green') || t.includes('emerald') || t.includes('tourmaline')) {
    return 'linear-gradient(135deg, #0c2b18 0%, #1a5732 50%, #2e8b53 100%)'
  }
  return 'linear-gradient(135deg, #242220 0%, #423d38 50%, #6e665e 100%)'
}

export default function ProductCard({ product, type = 'gemstone' }) {
  const [imageError, setImageError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { currency } = useLanguage()

  const getLink = () => {
    if (type === 'gemstone') return `/gemstones/${product.id}`
    if (type === 'jewellery') return `/fine-jewellery/${product.id}`
    if (type === 'ring') return `/love-and-celebration/${product.id}`
    return '#'
  }

  const categoryLabel = product.category || product.collection || product.style || 'Fine Jewellery'
  const formattedPrice = typeof product.price === 'number' 
    ? formatPrice(product.price, currency)
    : (product.price || 'Price on Request')

  const badgeText = product.treatment === 'Unheated' 
    ? 'Unheated Ceylon' 
    : (product.certification ? `${product.certification} Certified` : (product.origin ? `Origin: ${product.origin}` : null))

  return (
    <article 
      className="luxury-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={getLink()} className="luxury-card__media-link" aria-label={`View ${product.name}`}>
        <div className="luxury-card__media">
          {/* Badge */}
          {badgeText && (
            <span className="luxury-card__badge">{badgeText}</span>
          )}

          {/* Product Image / Visual */}
          {!imageError && product.image ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className="luxury-card__image"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div 
              className="luxury-card__gem-art"
              style={{ background: getGemGradient(product.color, product.type || product.stone) }}
            >
              {/* Gemstone Facet SVG Geometric Art */}
              <svg className="luxury-card__facet-svg" viewBox="0 0 120 120" fill="none" stroke="currentColor">
                <polygon points="60,10 98,32 98,88 60,110 22,88 22,32" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
                <polygon points="60,25 85,42 85,78 60,95 35,78 35,42" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
                <line x1="60" y1="10" x2="60" y2="25" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <line x1="98" y1="32" x2="85" y2="42" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <line x1="98" y1="88" x2="85" y2="78" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <line x1="60" y1="110" x2="60" y2="95" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <line x1="22" y1="88" x2="35" y2="78" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <line x1="22" y1="32" x2="35" y2="42" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <circle cx="60" cy="60" r="14" stroke="rgba(212,175,127,0.8)" strokeWidth="1.5" />
              </svg>
              <span className="luxury-card__gem-title">{product.color || product.type || 'Natural Gem'}</span>
            </div>
          )}

          {/* Quick-action overlay appearing on hover */}
          <div className={`luxury-card__overlay ${isHovered ? 'luxury-card__overlay--visible' : ''}`}>
            <span className="luxury-card__action-btn">
              {type === 'ring' ? 'Explore Ring' : type === 'gemstone' ? 'View Gemstone' : 'Explore Piece'}
            </span>
          </div>
        </div>
      </Link>

      <div className="luxury-card__body">
        <span className="luxury-card__category">{categoryLabel}</span>
        
        <h3 className="luxury-card__title">
          <Link to={getLink()} className="luxury-card__title-link">
            {product.name}
          </Link>
        </h3>

        {/* Technical Specification Summary */}
        <div className="luxury-card__specs">
          {product.carat && <span>{product.carat} ct</span>}
          {product.carat && product.origin && <span className="luxury-card__specs-dot">•</span>}
          {product.origin && <span>{product.origin}</span>}
          {product.clarity && <span className="luxury-card__specs-dot">•</span>}
          {product.clarity && <span>{product.clarity}</span>}
          {product.material && <span>{product.material}</span>}
        </div>

        <div className="luxury-card__price">
          {formattedPrice}
        </div>
      </div>
    </article>
  )
}
