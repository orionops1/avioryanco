import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useCartStore from '../hooks/useCart'
import { useLanguage } from '../hooks/useLanguage'
import { megaMenuData } from '../data/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import CurrencySwitcher from './CurrencySwitcher'
import CartDrawer from './CartDrawer'
import SearchModal from './SearchModal'
import AppointmentModal from './AppointmentModal'
import './Header.css'

/* ============================================================================
   Thin-Stroke Luxury Vector Icons
   ============================================================================ */

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const BagIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const ChevronDown = ({ className }) => (
  <svg className={className} width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

/* ============================================================================
   Mega-Menu Editorial Structure with i18n
   ============================================================================ */

function useMegaMenuData(t) {
  return useMemo(() =>
    megaMenuData.map((item) => ({
      ...item,
      label: t(item.labelKey, item.label) || item.label,
    })),
    [t]
  )
}

/* ============================================================================
   Main Header Component — Tiffany & Co. Architectural Blueprint
   ============================================================================ */

export default function Header({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMega, setActiveMega] = useState(null)
  const [mobileAccordion, setMobileAccordion] = useState(null)
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)

  const itemCount = useCartStore((state) => state.getItemCount())
  const { t } = useLanguage()
  const location = useLocation()
  const megaTimeoutRef = useRef(null)
  const headerRef = useRef(null)

  const menuItems = useMegaMenuData(t)

  // Route change reset
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveMega(null)
    setMobileAccordion(null)
  }, [location.pathname, location.search])

  // Prevent scroll when mobile menu or modals open
  useEffect(() => {
    if (mobileMenuOpen || cartDrawerOpen || searchModalOpen || appointmentModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen, cartDrawerOpen, searchModalOpen, appointmentModalOpen])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMega(null)
        setMobileMenuOpen(false)
        setCartDrawerOpen(false)
        setSearchModalOpen(false)
        setAppointmentModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleMegaEnter = useCallback((key) => {
    clearTimeout(megaTimeoutRef.current)
    setActiveMega(key)
  }, [])

  const handleMegaLeave = useCallback(() => {
    megaTimeoutRef.current = setTimeout(() => {
      setActiveMega(null)
    }, 200)
  }, [])

  const handleNavClick = () => {
    clearTimeout(megaTimeoutRef.current)
    setActiveMega(null)
  }

  return (
    <>
      {/* Announcement Bar */}
      <div className="aviory-announce-bar" role="banner">
        <p>COMPLIMENTARY WORLDWIDE SHIPPING &nbsp;&middot;&nbsp; CERTIFIED UNHEATED CEYLON GEMSTONES &nbsp;&middot;&nbsp; PRIVATE CONSULTATIONS AVAILABLE</p>
      </div>

      <header
        ref={headerRef}
        className={`tiffany-header ${scrolled ? 'tiffany-header--scrolled' : ''} ${activeMega ? 'tiffany-header--mega-open' : ''}`}
      >
        {/* ============================================================
            TOP NAVIGATION ROW (Tiffany Blueprint)
            Left: ATELIER (Opens Colombo salon booking modal)
            Center: AVIORY & CO. (Custom gold/charcoal serif)
            Right: $ USD | EN | Search [Q] | Shopping Bag [BAG]
            ============================================================ */}
        <div className="tiffany-header__top">
          <div className="container tiffany-header__top-inner">
            {/* Top Bar (Left): ATELIER */}
            <div className="tiffany-header__top-left">
              <button
                type="button"
                className="tiffany-header__utility-btn"
                onClick={() => setAppointmentModalOpen(true)}
                title="Book an Appointment at our Colombo Salon"
                aria-label="Atelier Colombo Salon Booking"
              >
                <span className="tiffany-header__utility-text">{t('common.atelier', 'ATELIER')}</span>
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="tiffany-header__hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              <span className={`tiffany-hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
              <span className={`tiffany-hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
              <span className={`tiffany-hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
            </button>

            {/* Top Bar (Center): AVIORY & CO. */}
            <Link
              to="/"
              className="tiffany-header__logo-link"
              onClick={handleNavClick}
              aria-label="AVIORY &amp; CO. Homepage"
            >
              <span className="tiffany-header__logo-text">AVIORY</span>
              <span className="tiffany-header__logo-ampersand">&amp;</span>
              <span className="tiffany-header__logo-co">CO.</span>
            </Link>

            {/* Top Bar (Right): $ USD | EN | Search | Bag */}
            <div className="tiffany-header__actions">
              {/* Currency & Language Switchers */}
              <div className="tiffany-header__locale">
                <CurrencySwitcher variant="light" />
                <LanguageSwitcher variant="light" />
              </div>

              {/* Search Icon [Q] */}
              <button
                type="button"
                className="tiffany-header__action-btn"
                onClick={() => setSearchModalOpen(true)}
                aria-label="Search"
                title="Search"
              >
                <SearchIcon />
              </button>

              {/* Shopping Bag Icon [BAG] */}
              <button
                type="button"
                className="tiffany-header__action-btn tiffany-header__action-btn--bag"
                onClick={() => setCartDrawerOpen(true)}
                aria-label="View Shopping Bag"
                title="Shopping Bag"
              >
                <BagIcon />
                {itemCount > 0 && (
                  <span className="tiffany-header__bag-badge">{itemCount}</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================
            BOTTOM ROW: 5 Category Navigation (Centered)
            GIFTS FOR HER | LOVE & CELEBRATION | NATURAL GEMSTONES | MADE ONLY FOR YOU | WORLD OF AVIORY
            ============================================================ */}
        <nav className="tiffany-header__nav" aria-label="Main Navigation">
          <div className="container">
            <ul className="tiffany-header__nav-list">
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  className={`tiffany-header__nav-item ${activeMega === item.key ? 'tiffany-header__nav-item--active' : ''}`}
                  onMouseEnter={() => item.mega && handleMegaEnter(item.key)}
                  onMouseLeave={handleMegaLeave}
                >
                  <Link
                    to={item.href}
                    className="tiffany-header__nav-link"
                    onClick={handleNavClick}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* ============================================================
            FULL-WIDTH 4-COLUMN MEGA-MENU PANELS
            Ivory White (#FBF9F6), Max Height 420px, Zero Vertical Scrolling
            ============================================================ */}
        {menuItems.map((item) =>
          item.mega ? (
            <div
              key={item.key}
              className={`tiffany-mega ${activeMega === item.key ? 'tiffany-mega--visible' : ''}`}
              onMouseEnter={() => clearTimeout(megaTimeoutRef.current)}
              onMouseLeave={handleMegaLeave}
              role="menu"
            >
              <div className="tiffany-mega__grid">
                {/* Columns 1, 2, 3: Editorial Link Categories */}
                {item.mega.columns?.map((col, ci) => (
                  <div key={ci} className="tiffany-mega__column">
                    <h3 className="tiffany-mega__heading">{col.heading}</h3>
                    <ul className="tiffany-mega__links">
                      {col.links.map((link, li) => (
                        <li key={li}>
                          <Link
                            to={link.href}
                            className="tiffany-mega__link"
                            onClick={handleNavClick}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Column 4: Campaign Spotlight (Image Card) */}
                {item.mega.spotlight && (
                  <div className="tiffany-mega__spotlight">
                    <Link
                      to={item.mega.spotlight.cta.href}
                      className="tiffany-mega__spotlight-card"
                      onClick={handleNavClick}
                    >
                      <div className="tiffany-mega__spotlight-media">
                        <img
                          src={item.mega.spotlight.image}
                          alt={item.mega.spotlight.imageAlt || item.mega.spotlight.quote}
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.parentElement.classList.add('tiffany-card-fallback')
                          }}
                        />
                      </div>
                      <div className="tiffany-mega__spotlight-content">
                        <p className="tiffany-mega__spotlight-quote">
                          &ldquo;{item.mega.spotlight.quote}&rdquo;
                        </p>
                        <span className="tiffany-mega__spotlight-cta">
                          {item.mega.spotlight.cta.label} &rarr;
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : null
        )}
      </header>

      {/* Mega Backdrop */}
      <div
        className={`tiffany-mega-backdrop ${activeMega ? 'tiffany-mega-backdrop--visible' : ''}`}
        onClick={() => setActiveMega(null)}
      />

      {/* ============================================================
          MOBILE DRAWER NAVIGATION
          ============================================================ */}
      <div className={`tiffany-mobile-drawer ${mobileMenuOpen ? 'tiffany-mobile-drawer--open' : ''}`}>
        <div className="tiffany-mobile-drawer__header">
          <span className="tiffany-mobile-drawer__logo">AVIORY &amp; CO.</span>
          <button
            type="button"
            className="tiffany-mobile-drawer__close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Currency & Language top bar in mobile drawer */}
        <div className="tiffany-mobile-drawer__locale-top">
          <CurrencySwitcher variant="dark" />
          <LanguageSwitcher variant="dark" />
        </div>

        <div className="tiffany-mobile-drawer__body">
          <ul className="tiffany-mobile-drawer__list">
            {menuItems.map((item) => (
              <li key={item.key} className="tiffany-mobile-drawer__item">
                <div className="tiffany-mobile-drawer__item-bar">
                  <Link
                    to={item.href}
                    className="tiffany-mobile-drawer__link"
                    onClick={() => {
                      if (!item.mega) setMobileMenuOpen(false)
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.mega && (
                    <button
                      type="button"
                      className="tiffany-mobile-drawer__toggle"
                      onClick={() => setMobileAccordion(mobileAccordion === item.key ? null : item.key)}
                      aria-label="Expand submenu"
                    >
                      <ChevronDown className={mobileAccordion === item.key ? 'open' : ''} />
                    </button>
                  )}
                </div>

                {item.mega && mobileAccordion === item.key && (
                  <div className="tiffany-mobile-drawer__sub">
                    {item.mega.columns?.map((col, ci) => (
                      <div key={ci} className="tiffany-mobile-sub-group">
                        <span className="tiffany-mobile-sub-heading">{col.heading}</span>
                        {col.links.map((link, li) => (
                          <Link
                            key={li}
                            to={link.href}
                            className="tiffany-mobile-sub-link"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                    {item.mega.spotlight && (
                      <div className="tiffany-mobile-sub-spotlight">
                        <Link
                          to={item.mega.spotlight.cta.href}
                          className="tiffany-mobile-sub-spotlight-cta"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.mega.spotlight.cta.label} &rarr;
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="tiffany-mobile-drawer__footer">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%', marginBottom: '1rem' }}
            onClick={() => {
              setMobileMenuOpen(false)
              setAppointmentModalOpen(true)
            }}
          >
            {t('common.bookConsultation', 'Book a Consultation')}
          </button>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
            <Link to="/contact" className="tiffany-header__utility-link" onClick={() => setMobileMenuOpen(false)}>
              {t('common.contact', 'Contact Us')}
            </Link>
            <button
              type="button"
              className="tiffany-header__utility-link"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              onClick={() => {
                setMobileMenuOpen(false)
                setAppointmentModalOpen(true)
              }}
            >
              Colombo Atelier
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="tiffany-mobile-backdrop" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* ============================================================
          INTEGRATED MODALS
          ============================================================ */}
      <CartDrawer isOpen={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)} />
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
      <AppointmentModal isOpen={appointmentModalOpen} onClose={() => setAppointmentModalOpen(false)} />
    </>
  )
}
