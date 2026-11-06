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
   ICONS
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
  <svg className={className} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
   HELPERS
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
   HEADER COMPONENT
   ============================================================================ */

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMega, setActiveMega] = useState(null)
  const [mobileAccordion, setMobileAccordion] = useState(null)
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)

  // Scroll state: Tiffany auto-hide on scroll down, reappear on scroll up
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const prevScrollY = useRef(0)

  const itemCount = useCartStore((state) => state.getItemCount())
  const { t } = useLanguage()
  const location = useLocation()
  const megaTimeoutRef = useRef(null)

  const menuItems = useMegaMenuData(t)
  const isHome = location.pathname === '/'

  // Auto-hide header when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isPastThreshold = currentScrollY > 70

      setScrolled(currentScrollY > 20)

      if (isPastThreshold) {
        // If scrolling down by more than 5px and mega menu isn't open
        if (currentScrollY > prevScrollY.current + 4 && !activeMega && !mobileMenuOpen) {
          setHidden(true)
        } else if (currentScrollY < prevScrollY.current - 4) {
          setHidden(false)
        }
      } else {
        setHidden(false)
      }

      prevScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeMega, mobileMenuOpen])

  // Close all menus on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveMega(null)
    setMobileAccordion(null)
    setHidden(false)
  }, [location.pathname, location.search])

  // Prevent scroll when any menu/modal is open
  useEffect(() => {
    const shouldLockScroll = mobileMenuOpen || cartDrawerOpen || searchModalOpen || appointmentModalOpen
    document.body.style.overflow = shouldLockScroll ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen, cartDrawerOpen, searchModalOpen, appointmentModalOpen])

  // Close menus on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setActiveMega(null)
        setMobileMenuOpen(false)
        setCartDrawerOpen(false)
        setSearchModalOpen(false)
        setAppointmentModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  // Close mega menu with delay
  const closeMegaMenu = useCallback(() => {
    megaTimeoutRef.current = setTimeout(() => {
      setActiveMega(null)
    }, 150)
  }, [])

  // Open mega menu (instant)
  const openMegaMenu = useCallback((key) => {
    clearTimeout(megaTimeoutRef.current)
    setActiveMega(key)
    setHidden(false) // Keep visible when hovering mega menu
  }, [])

  // Clear pending timeouts
  const cancelMegaClose = useCallback(() => {
    clearTimeout(megaTimeoutRef.current)
  }, [])

  // Close all menus
  const closeAllMenus = useCallback(() => {
    clearTimeout(megaTimeoutRef.current)
    setActiveMega(null)
  }, [])

  const headerClasses = [
    'tiffany-header',
    scrolled ? 'tiffany-header--scrolled' : '',
    hidden ? 'tiffany-header--hidden' : '',
    isHome && !scrolled ? 'tiffany-header--home-top' : '',
    activeMega ? 'tiffany-header--mega-active' : ''
  ].filter(Boolean).join(' ')

  return (
    <>
      <header className={headerClasses}>
        {/* TOP ROW */}
        <div className="tiffany-header__top">
          <div className="container tiffany-header__top-inner">
            {/* Left Utility Nav */}
            <div className="tiffany-header__top-left">
              <Link 
                to="/private-consultations" 
                className="tiffany-header__utility-btn" 
                title="Private Appointments &amp; Atelier"
              >
                <span className="tiffany-header__utility-text">ATELIER</span>
              </Link>

              <button
                type="button"
                className="tiffany-header__utility-btn"
                onClick={() => setSearchModalOpen(true)}
                aria-label="Search"
                title="Search"
              >
                <SearchIcon />
              </button>

              <div className="tiffany-header__locale-inline">
                <CurrencySwitcher variant="light" />
                <LanguageSwitcher variant="light" />
              </div>
            </div>

            {/* Mobile Hamburger */}
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

            {/* Center Logo: AVIORY & CO. (No tagline underneath) */}
            <Link
              to="/"
              className="tiffany-header__logo-link"
              onClick={closeAllMenus}
              aria-label="AVIORY &amp; CO. Homepage"
            >
              <div className="tiffany-header__logo-row">
                <span className="tiffany-header__logo-text">AVIORY</span>
                <span className="tiffany-header__logo-ampersand">&amp;</span>
                <span className="tiffany-header__logo-co">CO.</span>
              </div>
            </Link>

            {/* Right Actions: Shopping Bag Kept Discreetly */}
            <div className="tiffany-header__actions">
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

        {/* MAIN NAVIGATION: EXPRESSIONS | BESPOKE | OUR HOUSE | JOURNAL */}
        <nav className="tiffany-header__nav" aria-label="Main Navigation">
          <div className="container">
            <ul className="tiffany-header__nav-list">
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  className={`tiffany-header__nav-item ${activeMega === item.key ? 'tiffany-header__nav-item--active' : ''}`}
                  onMouseEnter={() => item.mega && openMegaMenu(item.key)}
                  onMouseLeave={closeMegaMenu}
                >
                  <Link
                    to={item.href}
                    className="tiffany-header__nav-link"
                    onClick={closeAllMenus}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* MEGA MENUS */}
        {menuItems.map((item) =>
          item.mega ? (
            <div
              key={item.key}
              className={`tiffany-mega ${activeMega === item.key ? 'tiffany-mega--visible' : ''}`}
              onMouseEnter={cancelMegaClose}
              onMouseLeave={closeMegaMenu}
              role="menu"
            >
              <div className="container tiffany-mega__inner">
                {/* 4 Expressions Visual Cards Grid (if present) */}
                {item.mega.cards && (
                  <div className="tiffany-mega__expressions-grid">
                    {item.mega.cards.map((card, ci) => (
                      <Link
                        key={ci}
                        to={card.href}
                        className="tiffany-mega__expression-card"
                        onClick={closeAllMenus}
                      >
                        <div className="tiffany-mega__expression-media">
                          <img
                            src={card.image}
                            alt={card.name}
                            loading="lazy"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.parentElement.classList.add('tiffany-card-fallback')
                            }}
                          />
                          <div className="tiffany-mega__expression-overlay" />
                          <span className="tiffany-mega__expression-badge">{card.name}</span>
                        </div>
                        <h4 className="tiffany-mega__expression-title">{card.name}</h4>
                        <p className="tiffany-mega__expression-subtitle">{card.subtitle}</p>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Text Columns */}
                <div className="tiffany-mega__columns">
                  {item.mega.columns?.map((col, ci) => (
                    <div key={ci} className="tiffany-mega__column">
                      <h3 className="tiffany-mega__heading">{col.heading}</h3>
                      <ul className="tiffany-mega__links">
                        {col.links.map((link, li) => (
                          <li key={li}>
                            <Link
                              to={link.href}
                              className={`tiffany-mega__link ${link.accent ? 'tiffany-mega__link--accent' : ''}`}
                              onClick={closeAllMenus}
                            >
                              {link.label}
                              {link.accent && <ArrowRight />}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Editorial Feature Card */}
                {item.mega.feature && (
                  <div className={`tiffany-mega__feature tiffany-mega__feature--${item.mega.feature.accent}`}>
                    <span className="tiffany-mega__feature-eyebrow">BESPOKE INTIMACY</span>
                    <h4 className="tiffany-mega__feature-title">{item.mega.feature.title}</h4>
                    <p className="tiffany-mega__feature-sub">{item.mega.feature.subtitle}</p>
                    <div className="tiffany-mega__feature-rule" />
                    <Link
                      to={item.mega.feature.cta.href}
                      className="tiffany-mega__feature-cta"
                      onClick={closeAllMenus}
                    >
                      {item.mega.feature.cta.label}
                      <ArrowRight />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : null
        )}
      </header>

      {/* MEGA BACKDROP */}
      <div
        className={`tiffany-mega-backdrop ${activeMega ? 'tiffany-mega-backdrop--visible' : ''}`}
        onClick={closeAllMenus}
      />

      {/* MOBILE DRAWER */}
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

        <div className="tiffany-mobile-drawer__body">
          <ul className="tiffany-mobile-drawer__list">
            {menuItems.map((item) => (
              <li key={item.key} className="tiffany-mobile-drawer__item">
                {item.mega ? (
                  <button
                    type="button"
                    className="tiffany-mobile-drawer__item-bar tiffany-mobile-drawer__item-bar--btn"
                    onClick={() => setMobileAccordion(mobileAccordion === item.key ? null : item.key)}
                    aria-expanded={mobileAccordion === item.key}
                  >
                    <span className="tiffany-mobile-drawer__link">{item.label}</span>
                    <ChevronDown className={`tiffany-mobile-chevron ${mobileAccordion === item.key ? 'open' : ''}`} />
                  </button>
                ) : (
                  <div className="tiffany-mobile-drawer__item-bar">
                    <Link
                      to={item.href}
                      className="tiffany-mobile-drawer__link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </div>
                )}

                {item.mega && mobileAccordion === item.key && (
                  <div className="tiffany-mobile-drawer__sub">
                    <Link
                      to={item.href}
                      className="tiffany-mobile-sub-link tiffany-mobile-sub-link--view-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Explore {item.label} &rarr;
                    </Link>

                    {item.mega.cards && (
                      <div className="tiffany-mobile-sub-group">
                        <span className="tiffany-mobile-sub-heading">Four Expressions</span>
                        {item.mega.cards.map((card, ci) => (
                          <Link
                            key={ci}
                            to={card.href}
                            className="tiffany-mobile-sub-link"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <strong>{card.name}</strong> — {card.subtitle}
                          </Link>
                        ))}
                      </div>
                    )}

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
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="tiffany-mobile-drawer__footer">
          <div className="tiffany-mobile-drawer__locale-bar">
            <CurrencySwitcher variant="mobile" />
            <LanguageSwitcher variant="mobile" />
          </div>
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
            <Link to="/our-house" className="tiffany-header__utility-link" onClick={() => setMobileMenuOpen(false)}>
              Atelier &amp; Discretion
            </Link>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="tiffany-mobile-backdrop" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* MODALS */}
      <CartDrawer isOpen={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)} />
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
      <AppointmentModal isOpen={appointmentModalOpen} onClose={() => setAppointmentModalOpen(false)} />
    </>
  )
}
