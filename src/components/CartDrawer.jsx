import React from 'react'
import { Link } from 'react-router-dom'
import useCartStore from '../hooks/useCart'
import { CONTACT_CONFIG } from '../constants/contact'
import './CartDrawer.css'

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.79 8.13 19.09L7.85 18.93L4.73 19.75L5.56 16.71L5.38 16.43C4.61 15.2 4.2 13.78 4.2 12.31C4.2 7.77 7.9 4.07 12.44 4.07L12.05 3.67ZM8.83 7.35C8.63 7.35 8.44 7.36 8.28 7.63C8.08 7.93 7.55 8.43 7.55 9.47C7.55 10.51 8.31 11.51 8.41 11.66C8.52 11.8 9.9 13.93 12.03 14.85C13.8 15.61 14.16 15.46 14.54 15.42C15.08 15.37 16.27 14.71 16.52 14.02C16.77 13.33 16.77 12.73 16.69 12.61C16.62 12.49 16.43 12.42 16.14 12.27C15.85 12.12 14.48 11.45 14.22 11.36C13.97 11.26 13.79 11.21 13.61 11.48C13.43 11.76 12.91 12.37 12.75 12.55C12.59 12.74 12.43 12.76 12.14 12.61C11.85 12.47 10.92 12.16 9.82 11.18C8.96 10.42 8.38 9.48 8.22 9.2C8.06 8.93 8.2 8.78 8.35 8.64C8.48 8.51 8.64 8.29 8.78 8.13C8.93 7.96 8.98 7.84 9.07 7.66C9.17 7.49 9.12 7.34 9.05 7.2C8.98 7.05 8.44 5.71 8.21 5.17C7.99 4.65 7.76 4.72 7.6 4.71L7.1 4.71C6.91 4.71 6.61 4.78 6.35 5.06C6.09 5.34 5.37 6.01 5.37 7.37L8.83 7.35Z"/>
  </svg>
)

export default function CartDrawer({ isOpen, onClose }) {
  const items = useCartStore((state) => state.items)
  const removeItem = useCartStore((state) => state.removeItem)
  const itemCount = useCartStore((state) => state.getItemCount())

  const calculatedTotal = items.reduce((sum, item) => {
    const price = typeof item.price === 'number' ? item.price : 0
    return sum + (price * (item.quantity || 1))
  }, 0)

  // Direct WhatsApp Checkout with full item manifest
  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return

    const itemLines = items.map((item, i) => {
      const sizeStr = item.selectedSize ? ` | Size: US ${item.selectedSize}` : ''
      const metalStr = item.selectedMetal ? ` | Metal: ${item.selectedMetal}` : ''
      const priceStr = typeof item.price === 'number' ? `$${item.price.toLocaleString()}` : (item.price || 'Price Upon Request')
      return `${i + 1}. *${item.name}*\n   Category: ${item.category || item.collection || 'High Jewellery'}\n   Price: ${priceStr}${sizeStr}${metalStr}`
    }).join('\n\n')

    const totalStr = `$${calculatedTotal.toLocaleString()}`
    const message = `Hello AVIORY & CO.,\n\nI would like to inquire and place an order for the following creation(s) from my shopping bag:\n\n${itemLines}\n\n*Estimated Total:* ${totalStr}\n\nPlease confirm availability and concierge private delivery.`

    const url = CONTACT_CONFIG.buildWhatsAppUrl(message)
    window.open(url, '_blank')
  }

  // Single item WhatsApp enquiry
  const handleSingleItemWhatsApp = (item) => {
    const sizeStr = item.selectedSize ? ` | Size: US ${item.selectedSize}` : ''
    const metalStr = item.selectedMetal ? ` | Metal: ${item.selectedMetal}` : ''
    const priceStr = typeof item.price === 'number' ? `$${item.price.toLocaleString()}` : (item.price || 'Price Upon Request')
    const message = `Hello AVIORY & CO., I would like to enquire about this piece:\n\n*${item.name}*\nCategory: ${item.category || item.collection || 'High Jewellery'}\nPrice: ${priceStr}${sizeStr}${metalStr}\n\nPlease connect me with a concierge.`

    const url = CONTACT_CONFIG.buildWhatsAppUrl(message)
    window.open(url, '_blank')
  }

  if (!isOpen) return null

  return (
    <>
      <div 
        className="cart-drawer-overlay" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <aside 
        className="cart-drawer" 
        role="dialog" 
        aria-modal="true" 
        aria-label="Your Bag"
      >
        <div className="cart-drawer__header">
          <div>
            <h2 className="cart-drawer__title">Your Selection</h2>
            <span className="cart-drawer__subtitle">
              {itemCount} {itemCount === 1 ? 'Creation' : 'Creations'} Selected
            </span>
          </div>
          <button 
            type="button" 
            className="cart-drawer__close" 
            onClick={onClose}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        <div className="cart-drawer__content">
          {items.length === 0 ? (
            <div className="cart-drawer__empty">
              <span className="cart-drawer__empty-icon">✧</span>
              <p className="cart-drawer__empty-title">Your shopping bag is empty</p>
              <p className="cart-drawer__empty-text">
                Explore our fine jewellery creations, rare unheated sapphires, and bridal suites.
              </p>
              <Link 
                to="/fine-jewellery" 
                className="btn btn-outline" 
                onClick={onClose}
              >
                Explore High Jewellery
              </Link>
            </div>
          ) : (
            <ul className="cart-drawer__list">
              {items.map((item) => (
                <li key={item.id} className="cart-drawer__item">
                  <div className="cart-drawer__item-img-wrap">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="cart-drawer__item-img"
                      onError={(e) => { e.target.src = '/images/atelier-masterpieces.jpg' }}
                    />
                  </div>

                  <div className="cart-drawer__item-info">
                    <h3 className="cart-drawer__item-name">{item.name}</h3>
                    <p className="cart-drawer__item-category">
                      {item.category || item.collection || 'Haute Joaillerie'}
                    </p>

                    {(item.selectedSize || item.selectedMetal) && (
                      <p className="cart-drawer__item-meta">
                        {item.selectedSize && <span>US {item.selectedSize}</span>}
                        {item.selectedSize && item.selectedMetal && <span> · </span>}
                        {item.selectedMetal && <span>{item.selectedMetal}</span>}
                      </p>
                    )}

                    <p className="cart-drawer__item-price">
                      {typeof item.price === 'number'
                        ? `$${item.price.toLocaleString()}`
                        : (item.price || 'Price Upon Request')}
                    </p>

                    <div className="cart-drawer__item-actions">
                      <button 
                        type="button" 
                        className="cart-drawer__enquire-btn"
                        onClick={() => handleSingleItemWhatsApp(item)}
                      >
                        Enquire on WhatsApp
                      </button>
                      <button 
                        type="button" 
                        className="cart-drawer__remove-btn" 
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__subtotal-row">
              <span className="cart-drawer__subtotal-label">Estimated Total</span>
              <span className="cart-drawer__subtotal-val">
                ${calculatedTotal.toLocaleString()}
              </span>
            </div>
            <p className="cart-drawer__subtotal-note">
              Taxes, duties, and insured worldwide delivery coordinated via private concierge.
            </p>

            <div className="cart-drawer__actions">
              <button 
                type="button" 
                className="btn cart-drawer__whatsapp-btn"
                onClick={handleWhatsAppCheckout}
              >
                <WhatsAppIcon /> Order via WhatsApp ({CONTACT_CONFIG.whatsappFormatted})
              </button>

              <Link 
                to="/contact" 
                className="btn btn-outline cart-drawer__checkout-btn"
                onClick={onClose}
              >
                Book Private Consultation
              </Link>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}
