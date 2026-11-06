import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroVideo from '../components/HeroVideo'
import AppointmentModal from '../components/AppointmentModal'
import { engagementRings, fineJewellery } from '../data/products'
import { colourFamilies } from './TheColourEdit'
import { useLanguage } from '../hooks/useLanguage'
import { formatPrice } from '../utils/currencyConverter'
import './Home.css'

export default function Home() {
  const { currency } = useLanguage()
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  // The Heartbeat Gem™ Interactive State
  const [activeHeartbeatGem, setActiveHeartbeatGem] = useState('sapphire')

  const handleHeartbeatSelect = (gemKey) => {
    setActiveHeartbeatGem(gemKey)
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 4000)
  }

  const heartbeatOptions = {
    sapphire: {
      name: 'Midnight Blue',
      quote: 'Echoing the depth of midnight water—a calm, unbroken promise.',
      colorHex: '#254E8C',
      pulseGlow: 'rgba(37, 78, 140, 0.45)'
    },
    ruby: {
      name: 'Pigeon Crimson',
      quote: 'Holding the unspoken heat of devotion against her pulse.',
      colorHex: '#8C1D32',
      pulseGlow: 'rgba(140, 29, 50, 0.45)'
    },
    padparadscha: {
      name: 'Sunset Lotus',
      quote: 'The first warmth of dawn light against bare skin.',
      colorHex: '#C56B55',
      pulseGlow: 'rgba(197, 107, 85, 0.45)'
    }
  }

  const currentHeartbeat = heartbeatOptions[activeHeartbeatGem]

  // Curated 4 creations for "Things Worth Keeping Close"
  const curatedCreations = [
    engagementRings[0],
    engagementRings[1],
    fineJewellery[0] || engagementRings[2],
    engagementRings[3]
  ].filter(Boolean)

  return (
    <div className="aviory-romantic-home">
      {/* ====================================================================
          1. THE HERO — THE SHAPE OF DESIRE
          ==================================================================== */}
      <HeroVideo
        video="/videos/hero-luxury.mp4"
        poster="/images/expressions/hero_model.jpg"
        eyebrow="BESPOKE INTIMACY"
        headline="THE SHAPE OF DESIRE"
        subtitle="For love, longing and the moments that belong only to you."
        primaryCta={{ label: "DISCOVER AVIORY", href: "#architecture-of-devotion" }}
        secondaryCta={null}
      />

      {/* ====================================================================
          2. THE ARCHITECTURE OF DEVOTION — FOUR EXPRESSIONS OF INTIMACY
          ==================================================================== */}
      <section 
        id="architecture-of-devotion" 
        className="home-pillars-section" 
        aria-label="The Architecture of Devotion"
      >
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">FOUR EXPRESSIONS OF INTIMACY</span>
            <h2 className="section-title">THE ARCHITECTURE OF DEVOTION</h2>
            <p className="section-subtitle">
              Love has its own language: a promise kept, a touch remembered, a look that lingers, a secret shared.
            </p>
          </div>

          <div className="devotion-grid">
            {/* EXPRESSION ONE: VOW */}
            <article className="devotion-card">
              <Link to="/love-and-celebration" className="devotion-card__media-link">
                <div 
                  className="devotion-card__media"
                  style={{ backgroundImage: 'url(/images/expressions/vow.jpg)' }}
                >
                  <div className="devotion-card__overlay" />
                  <span className="devotion-card__tag">VOW</span>
                </div>
              </Link>
              <div className="devotion-card__body">
                <span className="devotion-card__eyebrow">EXPRESSION ONE</span>
                <h3 className="devotion-card__title">A promise kept.</h3>
                <p className="devotion-card__desc">
                  Some promises are made in a moment and lived in every moment that follows.
                </p>
                <Link to="/love-and-celebration" className="devotion-card__cta">
                  DISCOVER VOW &rarr;
                </Link>
              </div>
            </article>

            {/* EXPRESSION TWO: TOUCH */}
            <article className="devotion-card">
              <Link to="/fine-jewellery" className="devotion-card__media-link">
                <div 
                  className="devotion-card__media"
                  style={{ backgroundImage: 'url(/images/expressions/touch.jpg)' }}
                >
                  <div className="devotion-card__overlay" />
                  <span className="devotion-card__tag">TOUCH</span>
                </div>
              </Link>
              <div className="devotion-card__body">
                <span className="devotion-card__eyebrow">EXPRESSION TWO</span>
                <h3 className="devotion-card__title">A touch remembered.</h3>
                <p className="devotion-card__desc">
                  For closeness, attraction and the quiet pull of being near.
                </p>
                <Link to="/fine-jewellery" className="devotion-card__cta">
                  DISCOVER TOUCH &rarr;
                </Link>
              </div>
            </article>

            {/* EXPRESSION THREE: WONDER */}
            <article className="devotion-card">
              <Link to="/gemstones" className="devotion-card__media-link">
                <div 
                  className="devotion-card__media"
                  style={{ backgroundImage: 'url(/images/expressions/wonder.jpg)' }}
                >
                  <div className="devotion-card__overlay" />
                  <span className="devotion-card__tag">WONDER</span>
                </div>
              </Link>
              <div className="devotion-card__body">
                <span className="devotion-card__eyebrow">EXPRESSION THREE</span>
                <h3 className="devotion-card__title">A look that lingers.</h3>
                <p className="devotion-card__desc">
                  For the sudden pull of attraction and the thrill of being captivated.
                </p>
                <Link to="/gemstones" className="devotion-card__cta">
                  DISCOVER WONDER &rarr;
                </Link>
              </div>
            </article>

            {/* EXPRESSION FOUR: WHISPER */}
            <article className="devotion-card">
              <Link to="/bespoke" className="devotion-card__media-link">
                <div 
                  className="devotion-card__media"
                  style={{ backgroundImage: 'url(/images/expressions/whisper.jpg)' }}
                >
                  <div className="devotion-card__overlay" />
                  <span className="devotion-card__tag">WHISPER</span>
                </div>
              </Link>
              <div className="devotion-card__body">
                <span className="devotion-card__eyebrow">EXPRESSION FOUR</span>
                <h3 className="devotion-card__title">A secret shared.</h3>
                <p className="devotion-card__desc">
                  Some meanings are too personal for words. They belong to the two who understand.
                </p>
                <Link to="/bespoke" className="devotion-card__cta">
                  DISCOVER WHISPER &rarr;
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. THE PROPOSAL — MAKE THE MOMENT YOURS
          ==================================================================== */}
      <section className="home-proposal-section" aria-label="The Proposal">
        <div className="container">
          <div className="home-proposal-banner">
            <div className="home-proposal-banner__content">
              <span className="editorial-eyebrow">THE PROPOSAL</span>
              <h2 className="section-title">MAKE THE MOMENT YOURS.</h2>
              <p className="home-proposal-banner__desc">
                For the question you've been carrying, and the life you hope to begin together.
              </p>

              <div className="home-proposal-callout">
                <span className="home-proposal-callout__ask">READY TO ASK?</span>
                <p className="home-proposal-callout__sub">Let's make the moment feel like yours.</p>
                <Link to="/the-proposal" className="btn-luxury-primary">
                  BEGIN YOUR PROPOSAL &rarr;
                </Link>
              </div>
            </div>

            <div className="home-proposal-montage">
              <div className="home-proposal-montage__item home-proposal-montage__item--main">
                <img src="/images/proposal/proposal_moment.jpg" alt="The Proposal Question" />
              </div>
              <div className="home-proposal-montage__item home-proposal-montage__item--sub1">
                <img src="/images/proposal/proposal_ring_hand.jpg" alt="Proposal Ring on Hand" />
              </div>
              <div className="home-proposal-montage__item home-proposal-montage__item--sub2">
                <img src="/images/proposal/proposal_candlelight.jpg" alt="Candlelight Proposal" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. THE COLOUR EDIT — A WORLD OF COLOUR, WITH A STORY OF ITS OWN
          ==================================================================== */}
      <section className="home-colour-edit-section" aria-label="The Colour Edit">
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">THE COLOUR EDIT</span>
            <h2 className="section-title">A WORLD OF COLOUR, WITH A STORY OF ITS OWN.</h2>
            <p className="section-subtitle">
              Some colours catch your eye. Others stay with you.
            </p>
          </div>

          {/* Proper multi-card horizontal collection on desktop */}
          <div className="home-colour-cards-grid">
            {colourFamilies.map((fam) => (
              <Link 
                key={fam.id} 
                to={`/the-colour-edit?color=${fam.id}`} 
                className="home-colour-card"
              >
                <div className="home-colour-card__media">
                  <img src={fam.image} alt={fam.editorialName} />
                  <div className="home-colour-card__overlay" />
                  <span className="home-colour-card__swatch" style={{ backgroundColor: fam.colorHex }} />
                </div>
                <div className="home-colour-card__info">
                  <h3 className="home-colour-card__name">{fam.editorialName}</h3>
                  <p className="home-colour-card__tagline">{fam.tagline}</p>
                  <span className="home-colour-card__cta">
                    DISCOVER {fam.colourFamily.toUpperCase()} &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="home-colour-footer-wrap">
            <Link to="/the-colour-edit" className="link-text-gold">
              EXPLORE ALL COLOURS &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. THINGS WORTH KEEPING CLOSE — UNDERSTATED PRODUCT CURATION
          ==================================================================== */}
      <section 
        id="things-worth-keeping-close" 
        className="home-curations-section" 
        aria-label="Things Worth Keeping Close"
      >
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">CURATED CREATIONS</span>
            <h2 className="section-title">THINGS WORTH KEEPING CLOSE</h2>
            <p className="section-subtitle">
              Discover the creations that speak to you.
            </p>
          </div>

          <div className="curations-grid">
            {curatedCreations.map((item) => (
              <div key={item.id} className="curation-card">
                <Link to={`/products/${item.id}`} className="curation-card__media-link">
                  <div className="curation-card__media">
                    <img 
                      src={item.images?.[0] || item.image} 
                      alt={item.name} 
                      className="curation-card__img"
                    />
                    <span className="curation-card__tag">SOLITARY PIECE</span>
                  </div>
                </Link>
                <div className="curation-card__body">
                  <span className="curation-card__category">{item.category || 'High Jewellery'}</span>
                  <h3 className="curation-card__title">
                    <Link to={`/products/${item.id}`}>{item.name}</Link>
                  </h3>
                  <p className="curation-card__desc">{item.description}</p>
                  <div className="curation-card__footer">
                    <span className="curation-card__price">
                      {formatPrice(item.price, currency)}
                    </span>
                    <Link to={`/products/${item.id}`} className="btn-luxury-primary btn-small">
                      VIEW CREATION
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="curations-footer-wrap">
            <Link to="/love-and-celebration" className="link-text-gold">
              VIEW THE COMPLETE REPERTOIRE &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. THE BESPOKE EXPERIENCE — BEGIN WITH A FEELING
          ==================================================================== */}
      <section className="home-bespoke-section" aria-label="Bespoke Intimacy">
        <div className="container">
          <div className="editorial-split-grid">
            <div className="editorial-split__media-wrap">
              <img 
                src="/images/expressions/bespoke_hands.jpg" 
                alt="Two hands clasped with devotion" 
                className="editorial-split__img"
              />
            </div>
            <div className="editorial-split__content">
              <span className="editorial-eyebrow">MADE AROUND YOU</span>
              <h2 className="section-title">BEGIN WITH A FEELING.</h2>
              <p className="editorial-split__lead">
                Tell us who it is for, what you want them to feel, or the moment you want to remember. Together, we will create something that could belong to no one else.
              </p>
              <div className="editorial-split__actions">
                <Link to="/bespoke/enquiry" className="btn-luxury-primary">
                  BEGIN YOUR BESPOKE STORY
                </Link>
                <Link to="/bespoke/process" className="btn-luxury-outline">
                  THE BESPOKE EXPERIENCE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. THE SIGNATURE COVENANT: THE HEARTBEAT GEM™
          ==================================================================== */}
      <section className="home-heartbeat-section" aria-label="The Heartbeat Gem Feature">
        <div className="container">
          <div className="heartbeat-grid">
            {/* Visual Interactive Ring Anatomy */}
            <div className="heartbeat-visual-wrapper">
              <div className="heartbeat-ring-canvas">
                <svg className="heartbeat-ring-svg" viewBox="0 0 320 320" fill="none">
                  {/* Outer Ring Profile */}
                  <circle cx="160" cy="160" r="120" stroke="#D4AF7F" strokeWidth="14" opacity="0.65" />
                  <circle cx="160" cy="160" r="113" stroke="#F5EDE2" strokeWidth="1" />
                  {/* Inner Ring Profile (Skin Contact Surface) */}
                  <circle cx="160" cy="160" r="106" stroke="#D4AF7F" strokeWidth="2" />

                  {/* Solitaire Mount at Top (12 o'clock) */}
                  <polygon points="160,26 174,38 160,50 146,38" fill="#1A1A1A" />
                  <circle cx="160" cy="38" r="9" fill="#254E8C" />

                  {/* The Secret Flush-Set Pulse Gem at Bottom (6 o'clock) */}
                  <circle 
                    cx="160" 
                    cy="266" 
                    r="8" 
                    fill={currentHeartbeat.colorHex} 
                    className="heartbeat-gem-pulse"
                  />
                  <circle 
                    cx="160" 
                    cy="266" 
                    r="14" 
                    stroke={currentHeartbeat.colorHex} 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3" 
                    opacity="0.65" 
                  />
                </svg>

                {/* Annotation Callouts */}
                <div className="heartbeat-annotation heartbeat-annotation--public">
                  <span className="heartbeat-annotation__dot" />
                  <span className="heartbeat-annotation__label">Public Solitaire</span>
                </div>

                <div className="heartbeat-annotation heartbeat-annotation--secret">
                  <span 
                    className="heartbeat-annotation__pulse-dot" 
                    style={{ backgroundColor: currentHeartbeat.colorHex }} 
                  />
                  <div>
                    <span className="heartbeat-annotation__label">The Heartbeat Gem™</span>
                    <span className="heartbeat-annotation__sub">Resting flush against her pulse</span>
                  </div>
                </div>
              </div>

              {/* Stone Preview Pill */}
              <div className="heartbeat-preview-pill">
                <span 
                  className="heartbeat-pill-dot" 
                  style={{ backgroundColor: currentHeartbeat.colorHex }} 
                />
                <span className="heartbeat-pill-text">
                  Selected Inner Covenant: <strong>{currentHeartbeat.name}</strong>
                </span>
              </div>
            </div>

            {/* Narrative & Interactive Selector */}
            <div className="heartbeat-narrative">
              <span className="editorial-eyebrow">THE SECRET COVENANT</span>
              <h2 className="section-title">The Heartbeat Gem™: Hidden Against Her Pulse</h2>
              
              <blockquote className="heartbeat-quote">
                "The stone no one else will ever see—resting directly against the pulse point of the one you love."
              </blockquote>

              <p className="heartbeat-text">
                The world sees what you wear on the outside. But the true covenant of your piece remains hidden within.
              </p>
              <p className="heartbeat-text">
                Set flush into the interior curve of the band, a private gemstone rests directly against her skin. Completely invisible to dinner parties, cameras, and strangers—felt with every beat of her pulse.
              </p>

              {/* Stone Selector Buttons */}
              <div className="heartbeat-selector-group">
                <span className="heartbeat-selector-label">CHOOSE HER PRIVATE INNER STONE:</span>
                <div className="heartbeat-buttons">
                  <button 
                    type="button" 
                    className={`heartbeat-btn ${activeHeartbeatGem === 'sapphire' ? 'heartbeat-btn--active' : ''}`}
                    onClick={() => handleHeartbeatSelect('sapphire')}
                  >
                    <span className="heartbeat-btn__swatch" style={{ backgroundColor: '#254E8C' }} />
                    <span className="heartbeat-btn__title">Midnight Blue</span>
                  </button>

                  <button 
                    type="button" 
                    className={`heartbeat-btn ${activeHeartbeatGem === 'ruby' ? 'heartbeat-btn--active' : ''}`}
                    onClick={() => handleHeartbeatSelect('ruby')}
                  >
                    <span className="heartbeat-btn__swatch" style={{ backgroundColor: '#8C1D32' }} />
                    <span className="heartbeat-btn__title">Pigeon Crimson</span>
                  </button>

                  <button 
                    type="button" 
                    className={`heartbeat-btn ${activeHeartbeatGem === 'padparadscha' ? 'heartbeat-btn--active' : ''}`}
                    onClick={() => handleHeartbeatSelect('padparadscha')}
                  >
                    <span className="heartbeat-btn__swatch" style={{ backgroundColor: '#C56B55' }} />
                    <span className="heartbeat-btn__title">Sunset Lotus</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Emotional Meaning */}
              <div className="heartbeat-meaning-box">
                <span className="heartbeat-meaning-title">INNER VOW MEANING:</span>
                <p className="heartbeat-meaning-quote">"{currentHeartbeat.quote}"</p>
              </div>

              <div className="heartbeat-actions">
                <Link to="/bespoke/enquiry" className="btn-luxury-primary">
                  BEGIN YOUR BESPOKE STORY &rarr;
                </Link>
                <Link to="/bespoke/process" className="link-text-gold">
                  HOW A SECRET IS MADE &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. THE PRIVATE SIDE OF LOVE — FULL-WIDTH CINEMATIC PAUSE
          ==================================================================== */}
      <section 
        className="home-private-banner" 
        style={{ backgroundImage: 'url(/images/expressions/private_love.jpg)' }}
        aria-label="The Private Side of Love"
      >
        <div className="home-private-banner__overlay" />
        <div className="container">
          <div className="home-private-banner__content">
            <span className="editorial-eyebrow">THE PRIVATE SIDE OF LOVE</span>
            <h2 className="home-private-banner__title">SOME THINGS BELONG ONLY TO TWO.</h2>
            <p className="home-private-banner__desc">
              A glance that says everything. A touch that needs no explanation. A moment the rest of the world never has to understand.
            </p>
            <Link to="/love-and-celebration" className="btn-luxury-primary">
              ENTER THE AVIORY WORLD
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          9. OUR HOUSE — A HOUSE BUILT AROUND FEELING
          ==================================================================== */}
      <section className="home-house-section" aria-label="Our House">
        <div className="container">
          <div className="editorial-split-grid editorial-split-grid--reversed">
            <div className="editorial-split__media-wrap">
              <img 
                src="/images/expressions/our_house_portrait.jpg" 
                alt="The House of Aviory" 
                className="editorial-split__img"
              />
            </div>
            <div className="editorial-split__content">
              <span className="editorial-eyebrow">OUR HOUSE</span>
              <h2 className="section-title">A HOUSE BUILT AROUND FEELING.</h2>
              <p className="editorial-split__quote">
                Some things are chosen for how they look. Others are chosen for what they mean.
              </p>
              <p className="editorial-split__lead">
                Aviory exists for the latter. For the moments, people and emotions we want to hold close. Every story begins with a feeling, and every personal expression begins with yours.
              </p>
              <div className="editorial-split__actions">
                <Link to="/our-house" className="btn-luxury-primary">
                  GET TO KNOW AVIORY &rarr;
                </Link>
                <button 
                  type="button" 
                  className="btn-luxury-outline"
                  onClick={() => setAppointmentModalOpen(true)}
                >
                  RESERVE A PRIVATE APPOINTMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          10. THE INTIMATE EDIT — JOURNAL
          ==================================================================== */}
      <section className="home-journal-section" aria-label="The Aviory Journal">
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">THE AVIORY JOURNAL</span>
            <h2 className="section-title">THE INTIMATE EDIT</h2>
            <p className="section-subtitle">
              Notes on desire, devotion, attraction and the art of making a moment matter.
            </p>
          </div>

          <div className="intimate-journal-grid">
            <article className="intimate-journal-card">
              <Link to="/journal/the-secret-inner-band" className="intimate-journal-card__media-link">
                <div 
                  className="intimate-journal-card__media"
                  style={{ backgroundImage: 'url(/images/expressions/journal_touch.jpg)' }}
                />
              </Link>
              <div className="intimate-journal-card__body">
                <h3 className="intimate-journal-card__title">
                  <Link to="/journal/the-secret-inner-band">The Language of Touch</Link>
                </h3>
                <p className="intimate-journal-card__excerpt">
                  On the things we feel without saying.
                </p>
              </div>
            </article>

            <article className="intimate-journal-card">
              <Link to="/journal/candlelight-and-gold" className="intimate-journal-card__media-link">
                <div 
                  className="intimate-journal-card__media"
                  style={{ backgroundImage: 'url(/images/expressions/journal_desired.jpg)' }}
                />
              </Link>
              <div className="intimate-journal-card__body">
                <h3 className="intimate-journal-card__title">
                  <Link to="/journal/candlelight-and-gold">The Beauty of Being Desired</Link>
                </h3>
                <p className="intimate-journal-card__excerpt">
                  On attraction, confidence and connection.
                </p>
              </div>
            </article>
          </div>

          <div className="journal-footer-wrap">
            <Link to="/journal" className="link-text-gold">
              READ THE JOURNAL &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          11. THE CIRCLE OF DEVOTION — CONFIDENTIAL INVITATION
          ==================================================================== */}
      <section className="home-newsletter-section" aria-label="The Circle of Devotion">
        <div className="container">
          <div className="newsletter-inner">
            <span className="editorial-eyebrow">BY INVITATION</span>
            <h2 className="newsletter-title">Enter the Circle of Devotion</h2>
            <p className="newsletter-desc">
              Discreet invitations to private releases, newly unearthed stones, and salon viewings. Kept strictly confidential.
            </p>

            {subscribed ? (
              <div className="newsletter-success">
                Your invitation request has been registered with our concierge.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your confidential email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-luxury-primary">
                  REQUEST INVITATION
                </button>
              </form>
            )}
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
