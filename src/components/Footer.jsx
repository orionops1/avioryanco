import React from 'react'
import { Link } from 'react-router-dom'
import { footerLinks } from '../data/navigation'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo-link" aria-label="AVIORY &amp; CO. Home">
                <span className="footer-logo-aviory">AVIORY</span>
                <span className="footer-logo-amp">&amp;</span>
                <span className="footer-logo-co">CO.</span>
              </Link>
              <p className="footer-slogan">
                For the feelings we keep close.
              </p>
              <p className="footer-tagline">
                A world where desire finds its expression, and every feeling has a story. Handcrafted for the moments that belong only to two.
              </p>
              <div className="social-links" aria-label="Follow Our World">
                <a href="https://instagram.com/avioryco" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-icon">IG</a>
                <a href="https://pinterest.com/avioryco" target="_blank" rel="noopener noreferrer" title="Pinterest" className="social-icon">PI</a>
                <a href="https://facebook.com/avioryco" target="_blank" rel="noopener noreferrer" title="Facebook" className="social-icon">FB</a>
                <a href="https://youtube.com/@avioryco" target="_blank" rel="noopener noreferrer" title="YouTube" className="social-icon">YT</a>
              </div>
            </div>

            {/* Expressions Column */}
            <div className="footer-section">
              <h4>EXPRESSIONS</h4>
              <ul>
                {footerLinks.expressions.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* The House Column */}
            <div className="footer-section">
              <h4>THE HOUSE</h4>
              <ul>
                {footerLinks.house.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Assistance Column */}
            <div className="footer-section">
              <h4>ASSISTANCE</h4>
              <ul>
                {footerLinks.assistance.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
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
              <p>&copy; {new Date().getFullYear()} AVIORY &amp; CO. ALL RIGHTS RESERVED.</p>
            </div>
            <div className="footer-links">
              <Link to="/contact">Atelier Discretion</Link>
              <Link to="/private-consultations">Private Appointments</Link>
              <Link to="/contact?subject=care">Care &amp; Custody</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
