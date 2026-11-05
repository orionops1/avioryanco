import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useCartStore from '../hooks/useCart'
import { useLanguage } from '../hooks/useLanguage'
import { megaMenuData } from '../data/navigation'
import CurrencySwitcher from './CurrencySwitcher'
import LanguageSwitcher from './LanguageSwitcher'
import CartDrawer from './CartDrawer'
import SearchModal from './SearchModal'
import AppointmentModal from './AppointmentModal'
import './Header.css'

/* ============================================================================
   Thin-Stroke Luxury Vector Icons
   ============================================================================ */

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const BagIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const AccountIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const HamburgerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

/* ============================================================================
   Mega-Menu Data Helper
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
   MAIN HEADER — TIFFANY & CO. TRANSPARENT-TO-WHITE HOVER PATTERN
   
   Default (homepage): Fixed transparent header, white text, overlaying hero.
   On hover / mega open: Solid white background (#FFFFFF), black text (#111111).
   On scroll (scrolled past top): Solid white background, black text.
   On non-home pages: Solid white background, black text.
   ============================================================================ */

export default function Header({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMega, setActiveMega] = useState(null)
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)
  const [headerHovered, setHeaderHovered] = useState(false)

  const itemCount = useCartStore((state) => state.getItemCount())
  const { t } = useLanguage()
  const location = useLocation()
  const megaTimeoutRef = useRef(null)
  const headerRef = useRef(null)

  const menuItems = useMegaMenuData(t)

  // Only homepage gets the transparent header treatment
  const isHomePage = location.pathname === '/'

  // Header is "transparent" only when: on homepage, not scrolled, not hovered, no mega menu open
  const isTransparent = isHomePage && !scrolled && !headerHovered && !activeMega

  // Reset menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveMega(null)
    setHeaderHovered(false)
  }, [location.pathname])

  // Prevent scroll when modals open
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

  // Keyboard close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setActiveMega(null)
        setMobileMenuOpen(false)
        setCartDrawerOpen(false)
        setSearchModalOpen(false)
        setAppointmentModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const handleMegaEnter = useCallback((key) => {
    clearTimeout(megaTimeoutRef.current)
    setActiveMega(key)
    setHeaderHovered(true)
  }, [])

  const handleMegaLeave = useCallback(() => {
    megaTimeoutRef.current = setTimeout(() => {
      setActiveMega(null)
      // Check if mouse is still inside header
      if (!headerRef.current?.matches(':hover')) {
        setHeaderHovered(false)
      }
    }, 180)
  }, [])

  const handleHeaderMouseEnter = useCallback(() => {
    setHeaderHovered(true)
  }, [])

  const handleHeaderMouseLeave = useCallback(() => {
    if (!activeMega) {
      setHeaderHovered(false)
    }
  }, [activeMega])

  // When activeMega changes to null, double check hover
  useEffect(() => {
    if (!activeMega && !headerRef.current?.matches(':hover')) {
      setHeaderHovered(false)
    }
  }, [activeMega])

  const headerClassName = [
    'tiffany-header',
    isTransparent ? 'tiffany-header--transparent' : 'tiffany-header--solid',
  ].join(' ')

  return (
    <>
      <header
        ref={headerRef}
        className={headerClassName}
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
      >
        {/* ====================================================================
            TOP ROW: Location | Search || [Logo] || Contact | Account | Bag
            ==================================================================== */}
        <div className="tiffany-header__top-row">
          <div className="container">
            <div className="tiffany-header__top-inner">
              {/* LEFT: Location + Search */}
              <div className="tiffany-header__left">
                <button 
                  className="tiffany-header__util-btn" 
                  onClick={() => setAppointmentModalOpen(true)}
                  title="Colombo Salon & Private Consultations"
                  aria-label="Store Locator & Private Appointments"
                >
                  <LocationIcon />
                </button>
                <button
                  className="tiffany-header__util-btn"
                  onClick={() => setSearchModalOpen(true)}
                  title="Search"
                  aria-label="Search"
                >
                  <SearchIcon />
                  <span className="tiffany-header__util-text">SEARCH</span>
                </button>
              </div>

              {/* CENTER: Logo (Large & Prominent) */}
              <Link to="/" className="tiffany-header__logo" aria-label="AVIORY & CO. Home">
                <span className="tiffany-header__logo-text">AVIORY</span>
                <span className="tiffany-header__logo-amp">&</span>
                <span className="tiffany-header__logo-text">CO.</span>
              </Link>

              {/* RIGHT: Contact | Account | Bag */}
              <div className="tiffany-header__right">
                <button 
                  className="tiffany-header__util-text-btn"
                  onClick={() => setAppointmentModalOpen(true)}
                >
                  CONTACT US
                </button>
                <Link 
                  to="/private-consultations" 
                  className="tiffany-header__util-btn" 
                  title="Private Consultations"
                  aria-label="Client Account / Consultations"
                >
                  <AccountIcon />
                </Link>
                <button
                  className="tiffany-header__util-btn tiffany-header__bag-btn"
                  onClick={() => setCartDrawerOpen(true)}
                  title="Shopping Bag"
                  aria-label="Shopping Bag"
                >
                  <BagIcon />
                  {itemCount > 0 && (
                    <span className="tiffany-header__bag-badge">{itemCount}</span>
                  )}
                </button>
              </div>

              {/* MOBILE: Hamburger */}
              <button
                className="tiffany-header__mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* ====================================================================
            BOTTOM ROW: Horizontal Navigation Categories (Centered)
            ==================================================================== */}
        <nav className="tiffany-header__nav" aria-label="Main Navigation">
          <div className="container">
            <ul className="tiffany-header__nav-list">
              {menuItems.map((item) => (
                <li key={item.key} className="tiffany-header__nav-item">
                  <Link
                    to={item.href}
                    className={`tiffany-header__nav-link ${activeMega === item.key ? 'active' : ''}`}
                    onMouseEnter={() => item.mega && handleMegaEnter(item.key)}
                    onMouseLeave={handleMegaLeave}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mega Menu Panels (Full-Width, 4-Column Layout with Spotlight) */}
          {menuItems.map((item) =>
            item.mega ? (
              <div
                key={`mega-${item.key}`}
                className={`tiffany-mega ${activeMega === item.key ? 'visible' : ''}`}
                onMouseEnter={() => handleMegaEnter(item.key)}
                onMouseLeave={handleMegaLeave}
              >
                <div className="container">
                  <div className="tiffany-mega__grid">
                    {/* Columns 1 - 3: Links */}
                    {item.mega.columns?.map((col, ci) => (
                      <div key={ci} className="tiffany-mega__column">
                        <h3 className="tiffany-mega__heading">{col.heading}</h3>
                        <ul className="tiffany-mega__links">
                          {col.links.map((link, li) => (
                            <li key={li}>
                              <Link
                                to={link.href}
                                className="tiffany-mega__link"
                                onClick={() => setActiveMega(null)}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Column 4: Campaign Spotlight Card */}
                    {item.mega.spotlight && (
                      <div className="tiffany-mega__spotlight">
                        <Link 
                          to={item.mega.spotlight.cta?.href || item.href} 
                          className="tiffany-mega__spotlight-link"
                          onClick={() => setActiveMega(null)}
                        >
                          <div className="tiffany-mega__spotlight-media">
                            <img 
                              src={item.mega.spotlight.image} 
                              alt={item.mega.spotlight.imageAlt || ''} 
                              className="tiffany-mega__spotlight-img"
                              loading="lazy"
                            />
                          </div>
                          {item.mega.spotlight.quote && (
                            <p className="tiffany-mega__spotlight-quote">
                              "{item.mega.spotlight.quote}"
                            </p>
                          )}
                          <span className="tiffany-mega__spotlight-cta">
                            {item.mega.spotlight.cta?.label || 'Explore Collection'} &rarr;
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : null
          )}
        </nav>
      </header>

      {/* Backdrop for mega menu */}
      {activeMega && (
        <div
          className="tiffany-mega-backdrop"
          onClick={() => setActiveMega(null)}
        />
      )}

      {/* ====================================================================
          MOBILE MENU DRAWER
          ==================================================================== */}
      {mobileMenuOpen && (
        <>
          <div className="tiffany-mobile-drawer">
            <div className="tiffany-mobile-drawer__header">
              <Link 
                to="/" 
                className="tiffany-mobile-drawer__logo"
                onClick={() => setMobileMenuOpen(false)}
              >
                AVIORY & CO.
              </Link>
              <button
                className="tiffany-mobile-drawer__close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Locale Switchers in Mobile Drawer */}
            <div className="tiffany-mobile-drawer__locale">
              <div className="tiffany-mobile-drawer__locale-item">
                <span className="tiffany-mobile-drawer__locale-label">Currency</span>
                <CurrencySwitcher variant="mobile" />
              </div>
              <div className="tiffany-mobile-drawer__locale-item">
                <span className="tiffany-mobile-drawer__locale-label">Language</span>
                <LanguageSwitcher variant="mobile" />
              </div>
            </div>

            <div className="tiffany-mobile-drawer__nav">
              {menuItems.map((item) => (
                <div key={item.key} className="tiffany-mobile-drawer__item">
                  <Link
                    to={item.href}
                    className="tiffany-mobile-drawer__link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>

            <div className="tiffany-mobile-drawer__footer">
              <button 
                className="tiffany-mobile-drawer__btn"
                onClick={() => {
                  setMobileMenuOpen(false)
                  setAppointmentModalOpen(true)
                }}
              >
                CONTACT US &bull; PRIVATE APPOINTMENT
              </button>
            </div>
          </div>
          <div
            className="tiffany-mobile-backdrop"
            onClick={() => setMobileMenuOpen(false)}
          />
        </>
      )}

      {/* Modals */}
      <CartDrawer isOpen={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)} />
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
      <AppointmentModal isOpen={appointmentModalOpen} onClose={() => setAppointmentModalOpen(false)} />
    </>
  )
}
