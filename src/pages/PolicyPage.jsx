import React from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { policiesData } from '../data/policies'
import { CONTACT_CONFIG } from '../constants/contact'
import './PolicyPage.css'

export default function PolicyPage({ policySlug: propSlug }) {
  const { slug } = useParams()
  const location = useLocation()
  
  // Resolve policy slug from prop, param, or pathname
  const currentSlug = propSlug || slug || location.pathname.replace(/^\//, '')
  const policy = policiesData[currentSlug] || policiesData['shipping-and-delivery']

  const allPolicies = [
    { slug: 'shipping-and-delivery', label: 'Shipping & Delivery' },
    { slug: 'returns-and-refunds', label: 'Returns & Refunds' },
    { slug: 'privacy', label: 'Privacy & Discretion' },
    { slug: 'terms', label: 'Terms & Conditions' },
    { slug: 'jewellery-care', label: 'Jewellery Care Guide' },
    { slug: 'gemstone-disclosure', label: 'Gemstone Disclosure' }
  ]

  return (
    <div className="policy-page">
      {/* Editorial Header */}
      <section className="policy-header">
        <div className="container">
          <span className="policy-eyebrow">{policy.eyebrow}</span>
          <h1 className="policy-title">{policy.title}</h1>
          <p className="policy-meta">Last Revised: {policy.lastUpdated} &bull; Aviory &amp; Co. Haute Joaillerie</p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="policy-content-section">
        <div className="container policy-layout">
          {/* Sidebar Menu */}
          <aside className="policy-sidebar" aria-label="Client Care Navigation">
            <h3 className="policy-sidebar__title">Client Care &amp; Trust</h3>
            <ul className="policy-sidebar__list">
              {allPolicies.map((item) => (
                <li key={item.slug} className="policy-sidebar__item">
                  <Link
                    to={`/${item.slug}`}
                    className={`policy-sidebar__link ${currentSlug === item.slug ? 'policy-sidebar__link--active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="policy-sidebar__concierge">
              <h4>Need Private Guidance?</h4>
              <p>Our client care specialists are available for discreet assistance.</p>
              <a
                href={CONTACT_CONFIG.buildWhatsAppUrl(`Hello Aviory Client Care, I have an inquiry regarding: ${policy.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="policy-sidebar__whatsapp-btn"
              >
                Chat via WhatsApp
              </a>
              <Link to="/contact" className="policy-sidebar__contact-link">
                Email Concierge &rarr;
              </Link>
            </div>
          </aside>

          {/* Policy Text Articles */}
          <main className="policy-main">
            {policy.sections.map((section, idx) => (
              <article key={idx} className="policy-article">
                <h2 className="policy-article__heading">{section.heading}</h2>
                <div className="policy-article__body">
                  {section.body.split('\n').map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
              </article>
            ))}

            <div className="policy-reassurance-box">
              <h3>Direct Maison Inquiry</h3>
              <p>
                For custom legal agreements, corporate acquisitions, or bespoke escrow arrangements, please write directly to{' '}
                <a href={`mailto:${CONTACT_CONFIG.conciergeEmail}`}>{CONTACT_CONFIG.conciergeEmail}</a>.
              </p>
            </div>
          </main>
        </div>
      </section>
    </div>
  )
}
