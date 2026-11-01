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
   Main Header Component
   Mouseover / Hover navigation matching Tiffany & Co.
   ============================================================================ */

export default function Header({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMega, setActiveMega] = useState(null)
  const [activeLoveTab, setActiveLoveTab] = useState('engagement-rings')
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

  // Mouseover / Hover handlers (Tiffany & Co. pattern)
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
            TOP ROW: Tiffany-standard Layout
            Left: Atelier/Search | Center: Logo | Right: Locale/Bag
            ============================================================ */}
        <div className="tiffany-header__top">
          <div className="container tiffany-header__top-inner">
            {/* Left Desktop: Atelier / Search */}
            <div className="tiffany-header__top-left">
              <Link to="/our-house" className="tiffany-header__utility-btn" title="Atelier &amp; Boutiques">
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

            {/* Center: Prominent BlackGold Logo */}
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

            {/* Right: Actions Cluster (Currency, Language & Bag clearly visible) */}
            <div className="tiffany-header__actions">
              <div className="tiffany-header__locale">
                <CurrencySwitcher variant="light" />
                <LanguageSwitcher variant="light" />
              </div>

              {/* Shopping Bag Button */}
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
            BOTTOM ROW: Navigation Menu (Centered)
            Instant Mouseover / Hover menu (Tiffany & Co. Standard)
            ============================================================ */}
        <nav className="tiffany-header__nav" aria-label="Main Navigation">
          <div className="container">
            <ul className="tiffany-header__nav-list">
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  className={`tiffany-header__nav-item ${activeMega === item.key ? 'tiffany-header__nav-item--active' : ''}`}
                  onMouseEnter={() => item.mega ? handleMegaEnter(item.key) : setActiveMega(null)}
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
            FULL-WIDTH MEGA-MENU PANELS
            Mouseover-activated with 5 Tiffany Sub-Nav Tabs for Love & Celebration
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
              {item.mega.tabs ? (
                /* TABBED SUB-NAVIGATION (Tiffany & Co. Love & Celebration 5-Tab Pattern) */
                <div className="container tiffany-mega__tabbed-container">
                  {/* Horizontal Tab Headers: 5 Tiffany Sections */}
                  <div className="tiffany-mega__subnav-bar">
                    <div className="tiffany-mega__subnav-tabs">
                      {item.mega.tabs.map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          className={`tiffany-mega__subnav-tab ${activeLoveTab === tab.id ? 'tiffany-mega__subnav-tab--active' : ''}`}
                          onMouseEnter={() => setActiveLoveTab(tab.id)}
                          onClick={() => setActiveLoveTab(tab.id)}
                        >
                          <span>{tab.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tab Cards Content Grid: 6 Cards per Tab */}
                  {item.mega.tabs.map((tab) =>
                    tab.id === activeLoveTab ? (
                      <div key={tab.id} className="tiffany-mega__cards-grid">
                        {tab.items.map((card, idx) => (
                          <Link
                            key={idx}
                            to={card.href}
                            className={`tiffany-mega__card ${card.guide ? 'tiffany-mega__card--guide' : ''}`}
                            onClick={handleNavClick}
                          >
                            <div className="tiffany-mega__card-media">
                              <img
                                src={card.image}
                                alt={card.name}
                                loading="lazy"
                                onError={(e) => {
                                  e.target.style.display = 'none'
                                  e.target.parentElement.classList.add('tiffany-card-fallback')
                                }}
                              />
                            </div>
                            <h4 className="tiffany-mega__card-title">{card.name}</h4>
                          </Link>
                        ))}
                      </div>
                    ) : null
                  )}
                </div>
              ) : (
                /* STANDARD 3-COLUMN + FEATURE EDITORIAL LAYOUT */
                <div className="container tiffany-mega__inner">
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
                                onClick={handleNavClick}
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

                  {item.mega.feature && (
                    <div className={`tiffany-mega__feature tiffany-mega__feature--${item.mega.feature.accent}`}>
                      <span className="tiffany-mega__feature-eyebrow">AVIORY &amp; CO.</span>
                      <h4 className="tiffany-mega__feature-title">{item.mega.feature.title}</h4>
                      <p className="tiffany-mega__feature-sub">{item.mega.feature.subtitle}</p>
                      <div className="tiffany-mega__feature-rule" />
                      <Link
                        to={item.mega.feature.cta.href}
                        className="tiffany-mega__feature-cta"
                        onClick={handleNavClick}
                      >
                        {item.mega.feature.cta.label}
                        <ArrowRight />
                      </Link>
                    </div>
                  )}
                </div>
              )}
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
                      View All {item.label} &rarr;
                    </Link>

                    {item.mega.tabs ? (
                      item.mega.tabs.map((tab) => (
                        <div key={tab.id} className="tiffany-mobile-sub-group">
                          <span className="tiffany-mobile-sub-heading">{tab.label}</span>
                          {tab.items.map((card, ci) => (
                            <Link
                              key={ci}
                              to={card.href}
                              className="tiffany-mobile-sub-link"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {card.name}
                            </Link>
                          ))}
                        </div>
                      ))
                    ) : (
                      item.mega.columns?.map((col, ci) => (
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
                      ))
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
            <Link to="/our-house" className="tiffany-header__utility-link" onClick={() => setMobileMenuOpen(false)}>
              Atelier &amp; Boutiques
            </Link>
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
