import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AppointmentModal from '../components/AppointmentModal'
import { engagementRings } from '../data/products'
import { useLanguage } from '../hooks/useLanguage'
import { formatPrice } from '../utils/currencyConverter'
import { useContentStore } from '../hooks/useContentStore'
import './TheProposal.css'

export default function TheProposal() {
  const { currency } = useLanguage()
  const { content } = useContentStore()
  const proposalSection = content?.proposalSection || {}
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)

  // Curated 4 proposal rings
  const proposalRings = engagementRings.slice(0, 4)

  const scrollToExperiences = () => {
    const el = document.getElementById('four-experiences')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="proposal-page">
      {/* ====================================================================
          1. HERO — MAKE THE MOMENT YOURS
          ==================================================================== */}
      <section className="proposal-hero">
        <div className="proposal-hero__backdrop">
          <img 
            src={proposalSection.images?.main || "/images/proposal/proposal_moment.jpg"} 
            alt="The Proposal Moment" 
            className="proposal-hero__img"
          />
          <div className="proposal-hero__overlay" />
        </div>

        <div className="container proposal-hero__content">
          <span className="editorial-eyebrow">{proposalSection.eyebrow || "THE PROPOSAL"}</span>
          <h1 className="proposal-hero__title">{proposalSection.headline || "MAKE THE MOMENT YOURS."}</h1>
          <p className="proposal-hero__subtitle">
            {proposalSection.description || "For the question you've been carrying, and the life you hope to begin together."}
          </p>
          <div className="proposal-hero__actions">
            <button 
              type="button" 
              className="btn-luxury-primary"
              onClick={scrollToExperiences}
            >
              BEGIN YOUR PROPOSAL
            </button>
            <button 
              type="button" 
              className="btn-luxury-outline proposal-hero__outline-btn"
              onClick={() => setAppointmentModalOpen(true)}
            >
              THE PRIVATE PROPOSAL EXPERIENCE
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. THE FOUR EXPERIENCES OF A PROPOSAL
          ==================================================================== */}
      <section id="four-experiences" className="proposal-experiences-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">THE FOUR EXPERIENCES</span>
            <h2 className="section-title">Every Proposal Has Its Own Heart</h2>
            <p className="section-subtitle">
              A proposal is not simply another occasion. It is a moment people imagine, plan, and carry forever.
            </p>
          </div>

          <div className="proposal-experiences-grid">
            {/* 01 - FIND THE FEELING */}
            <article id="find-the-feeling" className="proposal-exp-card">
              <div className="proposal-exp-card__media">
                <img 
                  src="/images/proposal/01_find_feeling.jpg" 
                  alt="Find the Feeling" 
                  className="proposal-exp-card__img"
                />
                <span className="proposal-exp-card__number">01</span>
              </div>
              <div className="proposal-exp-card__content">
                <span className="proposal-exp-card__step">STEP ONE</span>
                <h3 className="proposal-exp-card__title">Find the Feeling</h3>
                <p className="proposal-exp-card__desc">
                  Explore different expressions of a proposal, from understated and intimate to expressive and unforgettable. We help you uncover what tone speaks to the bond between the two of you.
                </p>
                <Link to="/love-and-celebration" className="proposal-exp-card__link">
                  EXPLORE EXPRESSIONS &rarr;
                </Link>
              </div>
            </article>

            {/* 02 - MAKE IT YOURS */}
            <article id="make-it-yours" className="proposal-exp-card">
              <div className="proposal-exp-card__media">
                <img 
                  src="/images/proposal/02_make_it_yours.jpg" 
                  alt="Make It Yours" 
                  className="proposal-exp-card__img"
                />
                <span className="proposal-exp-card__number">02</span>
              </div>
              <div className="proposal-exp-card__content">
                <span className="proposal-exp-card__step">STEP TWO</span>
                <h3 className="proposal-exp-card__title">Make It Yours</h3>
                <p className="proposal-exp-card__desc">
                  Discover different designs, colours, settings and personal details. Create something that feels right for the person you love—guided by personal feeling, never generic conventions.
                </p>
                <Link to="/bespoke" className="proposal-exp-card__link">
                  DISCOVER BESPOKE &rarr;
                </Link>
              </div>
            </article>

            {/* 03 - KEEP THE SURPRISE */}
            <article id="keep-the-surprise" className="proposal-exp-card">
              <div className="proposal-exp-card__media">
                <img 
                  src="/images/proposal/03_keep_the_surprise.jpg" 
                  alt="Keep the Surprise" 
                  className="proposal-exp-card__img"
                />
                <span className="proposal-exp-card__number">03</span>
              </div>
              <div className="proposal-exp-card__content">
                <span className="proposal-exp-card__step">STEP THREE</span>
                <h3 className="proposal-exp-card__title">Keep the Surprise</h3>
                <p className="proposal-exp-card__desc">
                  Private consultations, discreet communication, secret ring sizing assistance, and thoughtful presentation packaging for those planning a surprise. Complete secrecy guaranteed.
                </p>
                <button 
                  type="button" 
                  className="proposal-exp-card__btn"
                  onClick={() => setAppointmentModalOpen(true)}
                >
                  CONCIERGE DISCRETION &rarr;
                </button>
              </div>
            </article>

            {/* 04 - THE MOMENT AFTER YES */}
            <article id="moment-after-yes" className="proposal-exp-card">
              <div className="proposal-exp-card__media">
                <img 
                  src="/images/proposal/proposal_candlelight.jpg" 
                  alt="The Moment After Yes" 
                  className="proposal-exp-card__img"
                />
                <span className="proposal-exp-card__number">04</span>
              </div>
              <div className="proposal-exp-card__content">
                <span className="proposal-exp-card__step">STEP FOUR</span>
                <h3 className="proposal-exp-card__title">The Moment After Yes</h3>
                <p className="proposal-exp-card__desc">
                  Wedding bands, anniversary marks and future expressions of the same relationship. Once the covenant is spoken, let the story continue across years worn well.
                </p>
                <Link to="/fine-jewellery" className="proposal-exp-card__link">
                  THE CONTINUING STORY &rarr;
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. THE PRIVATE PROPOSAL EXPERIENCE (Dedicated Service)
          ==================================================================== */}
      <section className="proposal-service-section">
        <div className="container">
          <div className="proposal-service-box">
            <span className="editorial-eyebrow">BESPOKE PROPOSAL CONCIERGE</span>
            <h2 className="proposal-service__title">The Private Proposal Experience</h2>
            <p className="proposal-service__lead">
              Planning a proposal is an art of intimacy. Our salon concierge coordinates every facet in strict confidentiality:
            </p>

            <div className="proposal-service__pillars">
              <div className="proposal-service__pillar">
                <span className="proposal-service__pillar-num">01</span>
                <h4>Discreet Guidance</h4>
                <p>Private 1-on-1 consultations in our salon or confidential virtual suite to explore silhouettes without leaving digital traces.</p>
              </div>

              <div className="proposal-service__pillar">
                <span className="proposal-service__pillar-num">02</span>
                <h4>The Heartbeat Gem™</h4>
                <p>A secret private stone set flush inside the band resting directly against her pulse point—a covenant known only to the two of you.</p>
              </div>

              <div className="proposal-service__pillar">
                <span className="proposal-service__pillar-num">03</span>
                <h4>Surprise Presentation</h4>
                <p>Slim heirloom box designed for a jacket pocket, discreet hand-delivery, and complimentary post-proposal complimentary resizing.</p>
              </div>
            </div>

            <div className="proposal-service__action">
              <button 
                type="button" 
                className="btn-luxury-primary"
                onClick={() => setAppointmentModalOpen(true)}
              >
                REQUEST THE PRIVATE PROPOSAL SERVICE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. CURATED PROPOSAL RINGS
          ==================================================================== */}
      <section id="curated-rings" className="proposal-rings-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">CREATIONS OF DEVOTION</span>
            <h2 className="section-title">Rings For The Question</h2>
            <p className="section-subtitle">
              Solitary creations hand-forged around singular natural stones.
            </p>
          </div>

          <div className="proposal-rings-grid">
            {proposalRings.map((ring) => (
              <div key={ring.id} className="proposal-ring-card">
                <div className="proposal-ring-card__media">
                  <img 
                    src={ring.images?.[0] || ring.image} 
                    alt={ring.name} 
                    className="proposal-ring-card__img"
                  />
                </div>
                <div className="proposal-ring-card__body">
                  <span className="proposal-ring-card__style">{ring.style || 'Solitaire'}</span>
                  <h3 className="proposal-ring-card__name">{ring.name}</h3>
                  <p className="proposal-ring-card__desc">{ring.description}</p>
                  <div className="proposal-ring-card__footer">
                    <span className="proposal-ring-card__price">
                      {formatPrice(ring.price, currency)}
                    </span>
                    <Link to={`/products/${ring.id}`} className="btn-luxury-primary btn-small">
                      VIEW CREATION
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="proposal-rings__cta-wrap">
            <Link to="/love-and-celebration" className="link-text-gold">
              VIEW ALL RINGS OF DEVOTION &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* APPOINTMENT MODAL */}
      <AppointmentModal 
        isOpen={appointmentModalOpen} 
        onClose={() => setAppointmentModalOpen(false)} 
      />
    </div>
  )
}
