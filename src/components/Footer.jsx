import React from 'react'
import { Link } from 'react-router-dom'
import { contactInfo } from '../data/content'
import { footerLinks } from '../data/navigation'
import { useLanguage } from '../hooks/useLanguage'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer" role="contentinfo">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo-link" aria-label="AVIORY & CO. Home">
                <span className="footer-logo-aviory">AVIORY</span>
                <span className="footer-logo-amp">&amp;</span>
                <span className="footer-logo-co">CO.</span>
              </Link>
              <span className="footer-hallmark">
                CEYLON &bull; HIGH JEWELLERY &bull; EST. 2009
              </span>
              <p className="footer-slogan" style={{
                fontFamily: 'var(--font-serif-display)',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: '#D4AF7F',
                letterSpacing: '0.08em',
                margin: '0.4rem 0 0.6rem'
              }}>
                DESIRE, MADE REAL.
              </p>
              <p className="footer-tagline">
                We do not believe in jewellery made for everyone. We believe in jewellery made for someone. Rare unheated Ceylon sapphires and bespoke creations designed around feeling.
              </p>
              <div className="social-links" aria-label="Social Media">
                <a href="https://instagram.com/avioryco" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-icon">IG</a>
                <a href="https://facebook.com/avioryco" target="_blank" rel="noopener noreferrer" title="Facebook" className="social-icon">FB</a>
                <a href="https://pinterest.com/avioryco" target="_blank" rel="noopener noreferrer" title="Pinterest" className="social-icon">PI</a>
                <a href="https://wa.me/94776100099" target="_blank" rel="noopener noreferrer" title="WhatsApp Concierge" className="social-icon">WA</a>
              </div>
            </div>

            {/* Collections */}
            <div className="footer-section">
              <h4>{t('footer.collections', 'Collections')}</h4>
              <ul>
                {footerLinks.collections.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Services */}
            <div className="footer-section">
              <h4>{t('footer.service', 'Client Services')}</h4>
              <ul>
                {footerLinks.service.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/our-house">Ethical Provenance</Link>
                </li>
                <li>
                  <Link to="/journal/caring-for-your-sapphires">Jewellery Care Guide</Link>
                </li>
              </ul>
            </div>

            {/* Concierge & Direct Contact */}
            <div className="footer-section">
              <h4>{t('footer.concierge', 'Private Concierge')}</h4>
              <ul className="footer-contact">
                <li>
                  <a href={`mailto:${contactInfo.email}`} className="contact-link contact-link--email">
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <a href="tel:+94776100099" className="contact-link">
                    +94 77 610 0099
                  </a>
                </li>
                <li>
                  <a href="tel:+94776100075" className="contact-link">
                    +94 77 610 0075
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/94776100099?text=Hello%20Aviory%20%26%20Co.%2C%20I%20would%20like%20to%20connect%20with%20a%20concierge." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-link contact-link--whatsapp"
                  >
                    WhatsApp: +94 77 610 0099
                  </a>
                </li>
                <li className="contact-address">{contactInfo.address}, {contactInfo.city}, {contactInfo.country}</li>
                <li className="contact-hours">Mon - Sat: 9:00 AM - 6:30 PM</li>
                <li className="contact-hours">Sunday: By Private Appointment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; {new Date().getFullYear()} AVIORY &amp; CO. All Rights Reserved. GIA&reg; &amp; Lotus&reg; Certified Ceylon Gemstones.</p>
            </div>
            <div className="footer-links">
              {footerLinks.company.map((link, idx) => (
                <Link key={idx} to={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
