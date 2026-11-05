import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroVideo from '../components/HeroVideo'
import AppointmentModal from '../components/AppointmentModal'
import { useLanguage } from '../hooks/useLanguage'
import { formatPrice } from '../utils/currencyConverter'
import './Home.css'

export default function Home() {
  const { currency } = useLanguage()
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  // Heartbeat Gem Interactive Showcase State
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
      name: 'Midnight Ceylon Sapphire',
      carat: 'Natural · Untouched by Fire',
      symbol: 'Unwavering Devotion',
      quote: 'Echoing the depth of midnight water—a calm, unbroken promise.',
      colorHex: '#254E8C',
      pulseGlow: 'rgba(37, 78, 140, 0.45)'
    },
    ruby: {
      name: 'Pigeon Blood Ruby',
      carat: 'Natural · Untouched by Fire',
      symbol: 'Ardent Private Passion',
      quote: 'An untreated crimson crystal holding the unspoken heat of devotion against her pulse.',
      colorHex: '#8C1D32',
      pulseGlow: 'rgba(140, 29, 50, 0.45)'
    },
    padparadscha: {
      name: 'Sunset Lotus Padparadscha',
      carat: 'Natural · Untouched by Fire',
      symbol: 'Ethereal Reverence',
      quote: 'The first warmth of dawn light against bare skin.',
      colorHex: '#C56B55',
      pulseGlow: 'rgba(197, 107, 85, 0.45)'
    }
  }

  const currentHeartbeat = heartbeatOptions[activeHeartbeatGem]

  return (
    <div className="aviory-romantic-home">
      {/* 1. ATMOSPHERIC HERO BANNER */}
      <HeroVideo
        video="/videos/hero-luxury.mp4"
        poster="/images/hero-banner.jpg"
        eyebrow="WHERE THE VOW LIVES"
        headline="Forged for the skin that remembers you."
        subtitle="A vow isn't spoken once. It is carried daily against your pulse."
        primaryCta={{ label: "EXPLORE THE VOW COLLECTION", href: "/love-and-celebration" }}
        secondaryCta={{ label: "COMMISSION A SECRET PIECE →", href: "/bespoke/enquiry" }}
      />

      {/* 2. THE FOUR EMOTIONAL PILLARS: VOW, TOUCH, WONDER, WHISPER */}
      <section className="home-pillars-section" aria-label="The Architecture of Devotion">
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">THE ARCHITECTURE OF DEVOTION</span>
            <h2 className="section-title">Four Expressions of a Private Covenant</h2>
            <p className="section-subtitle">
              Not an act of public status. A covenant carried where only your lover reaches.
            </p>
          </div>

          <div className="pillars-grid">
            {/* PILLAR 1: VOW */}
            <div className="pillar-card">
              <div 
                className="pillar-card__media"
                style={{ backgroundImage: 'url(/images/most-popular-gifts.jpg)' }}
              >
                <div className="pillar-card__overlay" />
                <span className="pillar-card__num">VOW</span>
              </div>
              <div className="pillar-card__content">
                <span className="pillar-card__tag">PERMANENCE</span>
                <blockquote className="pillar-card__quote">
                  "A vow isn't spoken once. It is carried daily against your pulse."
                </blockquote>
                <p className="pillar-card__desc">
                  When words fade and rooms empty, this stays. The physical anchor of a devotion meant to outlast lifetimes.
                </p>
                <Link to="/love-and-celebration" className="pillar-card__link">
                  EXPLORE THE VOW COLLECTION →
                </Link>
              </div>
            </div>

            {/* PILLAR 2: TOUCH */}
            <div className="pillar-card">
              <div 
                className="pillar-card__media"
                style={{ backgroundImage: 'url(/images/gifts-for-her.jpg)' }}
              >
                <div className="pillar-card__overlay" />
                <span className="pillar-card__num">TOUCH</span>
              </div>
              <div className="pillar-card__content">
                <span className="pillar-card__tag">TACTILE</span>
                <blockquote className="pillar-card__quote">
                  "Warm metal shaped to rest heavy against her collarbone in private hours."
                </blockquote>
                <p className="pillar-card__desc">
                  Designed to be traced with fingertips in the dark. Heavy metal that drinks your heat and holds it through the night.
                </p>
                <Link to="/fine-jewellery" className="pillar-card__link">
                  EXPLORE TACTILE CREATIONS →
                </Link>
              </div>
            </div>

            {/* PILLAR 3: WONDER */}
            <div className="pillar-card">
              <div 
                className="pillar-card__media"
                style={{ backgroundImage: 'url(/images/editorial/ceylon-sapphire-vault.jpg)' }}
              >
                <div className="pillar-card__overlay" />
                <span className="pillar-card__num">WONDER</span>
              </div>
              <div className="pillar-card__content">
                <span className="pillar-card__tag">MYSTIC</span>
                <blockquote className="pillar-card__quote">
                  "Born in ancient dark. Cut to catch only candlelight."
                </blockquote>
                <p className="pillar-card__desc">
                  Awakened under low candle flame in quiet rooms. A deep, solitary glow meant for nobody else in the room.
                </p>
                <Link to="/gemstones" className="pillar-card__link">
                  EXPLORE CANDLELIT PIECES →
                </Link>
              </div>
            </div>

            {/* PILLAR 4: WHISPER */}
            <div className="pillar-card">
              <div 
                className="pillar-card__media"
                style={{ backgroundImage: 'url(/images/art-of-gifting.jpg)' }}
              >
                <div className="pillar-card__overlay" />
                <span className="pillar-card__num">WHISPER</span>
              </div>
              <div className="pillar-card__content">
                <span className="pillar-card__tag">SECRET</span>
                <blockquote className="pillar-card__quote">
                  "A secret stone set flush against the skin, touching her pulse alone."
                </blockquote>
                <p className="pillar-card__desc">
                  The world sees the ring. Only she feels what lives inside—warm, hidden, beating with every breath.
                </p>
                <Link to="/bespoke" className="pillar-card__link">
                  COMMISSION A SECRET DETAIL →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE SIGNATURE COVENANT: THE HEARTBEAT GEM */}
      <section className="home-heartbeat-section" aria-label="The Heartbeat Gem Feature">
        <div className="container">
          <div className="heartbeat-grid">
            {/* Visual Interactive Ring Anatomy */}
            <div className="heartbeat-visual-wrapper">
              <div className="heartbeat-ring-canvas">
                <svg className="heartbeat-ring-svg" viewBox="0 0 320 320" fill="none">
                  {/* Outer Ring Profile */}
                  <circle cx="160" cy="160" r="120" stroke="#D4AF7F" strokeWidth="14" opacity="0.6" />
                  <circle cx="160" cy="160" r="113" stroke="#E6E1DA" strokeWidth="1" />
                  {/* Inner Ring Profile (Skin Contact Surface) */}
                  <circle cx="160" cy="160" r="106" stroke="#D4AF7F" strokeWidth="2" />

                  {/* Solitaire Mount at Top (12 o'clock) */}
                  <polygon points="160,26 174,38 160,50 146,38" fill="#111111" />
                  <circle cx="160" cy="38" r="9" fill="#254E8C" />

                  {/* The Secret Flush-Set Pulse Gem at Bottom (6 o'clock) */}
                  <circle 
                    cx="160" 
                    cy="266" 
                    r="8" 
                    fill={currentHeartbeat.colorHex} 
                    className="heartbeat-gem-pulse"
                  />
                  <circle cx="160" cy="266" r="14" stroke={currentHeartbeat.colorHex} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                </svg>

                {/* Annotation Callouts */}
                <div className="heartbeat-annotation heartbeat-annotation--public">
                  <span className="heartbeat-annotation__dot" />
                  <span className="heartbeat-annotation__label">Public Solitaire Mount</span>
                </div>

                <div className="heartbeat-annotation heartbeat-annotation--secret">
                  <span className="heartbeat-annotation__pulse-dot" style={{ backgroundColor: currentHeartbeat.colorHex }} />
                  <div>
                    <span className="heartbeat-annotation__label">The Heartbeat Gem™</span>
                    <span className="heartbeat-annotation__sub">Resting flush against her pulse</span>
                  </div>
                </div>
              </div>

              {/* Stone Preview Card */}
              <div className="heartbeat-preview-pill">
                <span className="heartbeat-pill-dot" style={{ backgroundColor: currentHeartbeat.colorHex }} />
                <span className="heartbeat-pill-text">Selected: <strong>{currentHeartbeat.name}</strong></span>
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
                Set flush into the interior curve of the band, a secret stone rests against her bare skin. Completely invisible to dinner parties, cameras, and strangers—felt with every beat of her pulse.
              </p>

              {/* Stone Selector Tabs */}
              <div className="heartbeat-selector-group">
                <span className="heartbeat-selector-label">CHOOSE HER SECRET INNER STONE:</span>
                <div className="heartbeat-buttons">
                  <button 
                    type="button" 
                    className={`heartbeat-btn ${activeHeartbeatGem === 'sapphire' ? 'heartbeat-btn--active' : ''}`}
                    onClick={() => handleHeartbeatSelect('sapphire')}
                  >
                    <span className="heartbeat-btn__swatch" style={{ backgroundColor: '#254E8C' }} />
                    <span className="heartbeat-btn__title">Midnight Sapphire</span>
                  </button>

                  <button 
                    type="button" 
                    className={`heartbeat-btn ${activeHeartbeatGem === 'ruby' ? 'heartbeat-btn--active' : ''}`}
                    onClick={() => handleHeartbeatSelect('ruby')}
                  >
                    <span className="heartbeat-btn__swatch" style={{ backgroundColor: '#8C1D32' }} />
                    <span className="heartbeat-btn__title">Pigeon Ruby</span>
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
                  COMMISSION WITH A SECRET GEM →
                </Link>
                <Link to="/bespoke/process" className="link-text-gold">
                  HOW A SECRET IS MADE →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ASYMMETRICAL MUSEUM GALLERY (SOLITARY EXHIBITS) */}
      <section className="home-museum-section" aria-label="Solitary Museum Exhibits">
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">SOLITARY EXHIBITS</span>
            <h2 className="section-title">Works of Solitary Devotion</h2>
            <p className="section-subtitle">
              Each piece is shown alone. The way an obsession deserves to be seen.
            </p>
          </div>

          <div className="museum-exhibits-wrap">
            {/* EXHIBIT 01: The Midnight Cushion */}
            <article className="museum-exhibit museum-exhibit--left">
              <div className="museum-exhibit__media-wrap">
                <img 
                  src="/images/editorial/ceylon-sapphire-vault.jpg" 
                  alt="The 7.42ct Midnight Cushion" 
                  className="museum-exhibit__img"
                />
                <span className="museum-exhibit__badge">SOLITARY SPECIMEN</span>
              </div>
              <div className="museum-exhibit__meta">
                <span className="museum-exhibit__num">EXHIBIT 01 / 04</span>
                <span className="museum-exhibit__category">NIGHTFALL CUSHION</span>
                <h3 className="museum-exhibit__title">The 7.42ct Midnight Cushion</h3>
                <p className="museum-exhibit__story">
                  Untouched by fire. Cut with deep pavilion facets to capture and hold candlelight in darkened rooms. A blue so deep it feels like looking into water at midnight.
                </p>
                <div className="museum-exhibit__specs">
                  <span>7.42 Carats</span>
                  <span>•</span>
                  <span>Cut for Candlelight</span>
                  <span>•</span>
                  <span>Solitary Creation</span>
                </div>
                <div className="museum-exhibit__footer">
                  <div className="museum-exhibit__price">{formatPrice(24800, currency)}</div>
                  <Link to="/gemstones/bs-001" className="btn-luxury-primary">
                    EXPLORE THIS CREATION
                  </Link>
                </div>
              </div>
            </article>

            {/* EXHIBIT 02: The Secret Vow Solitaire */}
            <article className="museum-exhibit museum-exhibit--right">
              <div className="museum-exhibit__media-wrap">
                <img 
                  src="/images/most-popular-gifts.jpg" 
                  alt="The Secret Vow Solitaire Ring" 
                  className="museum-exhibit__img"
                />
                <span className="museum-exhibit__badge">SECRET DETAIL</span>
              </div>
              <div className="museum-exhibit__meta">
                <span className="museum-exhibit__num">EXHIBIT 02 / 04</span>
                <span className="museum-exhibit__category">SOLITAIRE OF DEVOTION</span>
                <h3 className="museum-exhibit__title">The Secret Vow Solitaire</h3>
                <p className="museum-exhibit__story">
                  A classical ring to the world; an intense secret to two lovers. Solid platinum on the outside, with a secret pulse stone resting against her skin where no one else will ever reach.
                </p>
                <div className="museum-exhibit__specs">
                  <span>Hand-Wrought Platinum</span>
                  <span>•</span>
                  <span>Secret Pulse Stone</span>
                  <span>•</span>
                  <span>Made for Her Skin</span>
                </div>
                <div className="museum-exhibit__footer">
                  <div className="museum-exhibit__price">{formatPrice(18500, currency)}</div>
                  <Link to="/love-and-celebration" className="btn-luxury-primary">
                    EXPLORE THIS RING
                  </Link>
                </div>
              </div>
            </article>

            {/* EXHIBIT 03: The Sunset Lotus Collar */}
            <article className="museum-exhibit museum-exhibit--left">
              <div className="museum-exhibit__media-wrap">
                <img 
                  src="/images/gifts-for-her.jpg" 
                  alt="The Sunset Lotus Collar" 
                  className="museum-exhibit__img"
                />
                <span className="museum-exhibit__badge">ONE OF ONE</span>
              </div>
              <div className="museum-exhibit__meta">
                <span className="museum-exhibit__num">EXHIBIT 03 / 04</span>
                <span className="museum-exhibit__category">HIGH JEWELLERY COLLAR</span>
                <h3 className="museum-exhibit__title">The Sunset Lotus Collar</h3>
                <p className="museum-exhibit__story">
                  Warm metal shaped to rest heavy against her collarbone in private hours. The dawn-lotus hue awakens in low candlelight, drinking the physical warmth of the wearer.
                </p>
                <div className="museum-exhibit__specs">
                  <span>Warm Gold</span>
                  <span>•</span>
                  <span>Lotus Bloom Hue</span>
                  <span>•</span>
                  <span>Rests Heavy on Collarbone</span>
                </div>
                <div className="museum-exhibit__footer">
                  <div className="museum-exhibit__price">{formatPrice(32000, currency)}</div>
                  <Link to="/fine-jewellery" className="btn-luxury-primary">
                    EXPLORE THIS CREATION
                  </Link>
                </div>
              </div>
            </article>

            {/* EXHIBIT 04: The Deep Emerald-Cut Oceanic */}
            <article className="museum-exhibit museum-exhibit--right">
              <div className="museum-exhibit__media-wrap">
                <img 
                  src="/images/gifts-to-engrave.jpg" 
                  alt="The Deep Emerald-Cut Oceanic" 
                  className="museum-exhibit__img"
                />
                <span className="museum-exhibit__badge">RARE SPECIMEN</span>
              </div>
              <div className="museum-exhibit__meta">
                <span className="museum-exhibit__num">EXHIBIT 04 / 04</span>
                <span className="museum-exhibit__category">DEEP CUT SPECIMEN</span>
                <h3 className="museum-exhibit__title">The Deep Emerald-Cut Oceanic</h3>
                <p className="museum-exhibit__story">
                  Midnight oceanic depths and jungle shadow in a single untreated crystal. Cut to draw the eye downward into quiet, unbroken silence.
                </p>
                <div className="museum-exhibit__specs">
                  <span>5.10 Carats</span>
                  <span>•</span>
                  <span>Architectural Step Cut</span>
                  <span>•</span>
                  <span>Untouched by Fire</span>
                </div>
                <div className="museum-exhibit__footer">
                  <div className="museum-exhibit__price">{formatPrice(16200, currency)}</div>
                  <Link to="/gemstones" className="btn-luxury-primary">
                    EXPLORE THIS CREATION
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5. HOUSE PHILOSOPHY: PRIVATE DEVOTION VS MASS PRESTIGE */}
      <section className="home-ethos-section" aria-label="House Ethos vs Legacy Houses">
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">HOUSE PHILOSOPHY</span>
            <h2 className="section-title">Why Private Devotion Outlasts Mass Prestige</h2>
            <p className="section-subtitle">
              Legacy houses sell gift boxes to millions. We forge solitary covenants for one person alone.
            </p>
          </div>

          <div className="ethos-cards-grid">
            {/* PILLAR 1: BESPOKE INTIMACY */}
            <div className="ethos-card">
              <span className="ethos-card__eyebrow">ONE-OF-ONE CREATIONS</span>
              <h3 className="ethos-card__title">Bespoke Intimacy™</h3>
              <p className="ethos-card__flaw">
                <strong>The World:</strong> Millions wearing the identical mass-produced bracelet or assembly-line ring.
              </p>
              <p className="ethos-card__advantage">
                <strong>Aviory:</strong> A solitary creation carrying an unspoken secret known only to the two of you.
              </p>
            </div>

            {/* PILLAR 2: ATELIER DISCRETION */}
            <div className="ethos-card ethos-card--highlight">
              <span className="ethos-card__eyebrow">HIGH DISCRETION</span>
              <h3 className="ethos-card__title">Atelier Discretion</h3>
              <p className="ethos-card__flaw">
                <strong>The World:</strong> Rushed transactions at crowded glass counters in shopping malls.
              </p>
              <p className="ethos-card__advantage">
                <strong>Aviory:</strong> Quiet champagne sit-downs in our private salon suite or confidential encrypted virtual rooms.
              </p>
            </div>

            {/* PILLAR 3: WILD PROVENANCE */}
            <div className="ethos-card">
              <span className="ethos-card__eyebrow">WILD &amp; UNTOUCHED</span>
              <h3 className="ethos-card__title">Wild Provenance</h3>
              <p className="ethos-card__flaw">
                <strong>The World:</strong> Cooked, treated commodity stones with sterile technical charts.
              </p>
              <p className="ethos-card__advantage">
                <strong>Aviory:</strong> Untouched by artificial fire. Pure earth, pulled from ancient ground and cut by hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE MASTER RESERVE */}
      <section className="home-vault-section" aria-label="The Master Ceylon Reserve">
        <div className="container">
          <div className="vault-frame">
            <div className="section-header-centered">
              <span className="editorial-eyebrow">THE PRIVATE ARCHIVE</span>
              <h2 className="section-title">The Master Reserve</h2>
              <p className="section-subtitle">
                Rare unheated stones held under private seal. Seen only by private appointment.
              </p>
            </div>

            <div className="vault-specimens-grid">
              {/* SPECIMEN 01 */}
              <div className="vault-specimen-card">
                <span className="vault-specimen-badge">LOT #RES-112</span>
                <h4 className="vault-specimen-title">11.20ct Vivid Royal Blue Cushion</h4>
                <p className="vault-specimen-meta">Untouched by Fire · Pure Saturation · Private Custody</p>
                <p className="vault-specimen-desc">
                  An unbroken midnight blue with transparency rarely found in stones of this weight. Deep, quiet, and hypnotic.
                </p>
                <div className="vault-specimen-footer">
                  <span className="vault-price">Private Reserve</span>
                  <button 
                    type="button" 
                    className="btn-luxury-primary btn-small"
                    onClick={() => setAppointmentModalOpen(true)}
                  >
                    REQUEST PRIVATE ACQUISITION
                  </button>
                </div>
              </div>

              {/* SPECIMEN 02 */}
              <div className="vault-specimen-card">
                <span className="vault-specimen-badge">LOT #RES-064</span>
                <h4 className="vault-specimen-title">6.40ct Sunset Lotus Pear</h4>
                <p className="vault-specimen-meta">Lotus Bloom Hue · Master Faceted · Private Custody</p>
                <p className="vault-specimen-desc">
                  Equally balanced delicate pink and warm sunrise orange. The colour of the first light touching bare skin.
                </p>
                <div className="vault-specimen-footer">
                  <span className="vault-price">Private Reserve</span>
                  <button 
                    type="button" 
                    className="btn-luxury-primary btn-small"
                    onClick={() => setAppointmentModalOpen(true)}
                  >
                    REQUEST PRIVATE ACQUISITION
                  </button>
                </div>
              </div>

              {/* SPECIMEN 03 */}
              <div className="vault-specimen-card">
                <span className="vault-specimen-badge">LOT #RES-048</span>
                <h4 className="vault-specimen-title">4.85ct Pigeon Blood Ruby</h4>
                <p className="vault-specimen-meta">Pure Crimson · Fierce Fluorescence · Private Custody</p>
                <p className="vault-specimen-desc">
                  A fierce crimson crystal with natural fluorescence that awakens fiercely under low candle flame.
                </p>
                <div className="vault-specimen-footer">
                  <span className="vault-price">Private Reserve</span>
                  <button 
                    type="button" 
                    className="btn-luxury-primary btn-small"
                    onClick={() => setAppointmentModalOpen(true)}
                  >
                    REQUEST PRIVATE ACQUISITION
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRIVATE ATELIER & WORLDWIDE VIEWINGS */}
      <section className="home-consultation-section" aria-label="Private Atelier & Worldwide Viewings">
        <div className="container">
          <div className="consultation-card">
            <span className="editorial-eyebrow">PRIVATE SALON &amp; SUITES</span>
            <h2 className="consultation-title">Private Consultations in Sri Lanka &amp; Worldwide</h2>
            <p className="consultation-lead">
              We do not host retail crowds. Our salon operates exclusively by private appointment for quiet, unhurried champagne viewings under candlelight. For our patrons in London, New York, Zurich, and Tokyo, our gemologists host confidential 1-on-1 virtual suites.
            </p>
            <div className="consultation-actions">
              <button 
                type="button" 
                className="btn-luxury-primary"
                onClick={() => setAppointmentModalOpen(true)}
              >
                RESERVE A PRIVATE APPOINTMENT
              </button>
              <Link to="/our-house" className="btn-luxury-outline">
                DISCOVER OUR HOUSE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FROM OUR JOURNAL (LORE & INTIMACY) */}
      <section className="home-journal-section" aria-label="From Our Journal">
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">EDITORIAL LORE</span>
            <h2 className="section-title">From Our Journal</h2>
            <p className="section-subtitle">
              On the secret poetry of jewelry, touch, and ancient earth lore.
            </p>
          </div>

          <div className="journal-articles-grid">
            <article className="journal-card">
              <span className="journal-card__category">BESPOKE INTIMACY</span>
              <h3 className="journal-card__title">
                <Link to="/journal/the-secret-inner-band">The Secret Inner-Band: Why We Hide a Gem Against Your Pulse</Link>
              </h3>
              <p className="journal-card__excerpt">
                Why true luxury turns inward. The emotional anthropology behind placing a secret jewel where only her skin can feel it.
              </p>
              <span className="journal-card__meta">6 min read</span>
            </article>

            <article className="journal-card">
              <span className="journal-card__category">EARTH &amp; INTEGRITY</span>
              <h3 className="journal-card__title">
                <Link to="/journal/unheated-ceylon-sapphires">Untouched by Fire: Why Heat Kills the Soul of a Stone</Link>
              </h3>
              <p className="journal-card__excerpt">
                Less than 1% of the world's stones enter the world untouched by ovens. What wild crystalline purity actually means.
              </p>
              <span className="journal-card__meta">8 min read</span>
            </article>

            <article className="journal-card">
              <span className="journal-card__category">DARK ROMANCE</span>
              <h3 className="journal-card__title">
                <Link to="/journal/candlelight-and-gold">Candlelight &amp; Metal: The Lost Art of Chiaroscuro Jewelry</Link>
              </h3>
              <p className="journal-card__excerpt">
                Before electric spotlights, fine jewelry was cut to dance under low candle flame in quiet rooms.
              </p>
              <span className="journal-card__meta">5 min read</span>
            </article>
          </div>

          <div className="journal-footer-wrap">
            <Link to="/journal" className="link-text-gold">
              READ ALL DISPATCHES →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. THE CIRCLE OF DEVOTION */}
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
