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
      name: 'Ceylon Royal Blue Sapphire',
      carat: '0.05ct Natural Unheated',
      symbol: 'Unwavering Fidelity & Serenity',
      quote: 'Echoing the steady depth of midnight Ceylon waters—a calm, unbroken promise.',
      colorHex: '#254E8C',
      pulseGlow: 'rgba(37, 78, 140, 0.45)'
    },
    ruby: {
      name: 'Ceylon Pigeon Blood Ruby',
      carat: '0.05ct Natural Unheated',
      symbol: 'Ardent Private Passion',
      quote: 'An untreated crimson crystal holding the unspoken heat of devotion against her pulse.',
      colorHex: '#8C1D32',
      pulseGlow: 'rgba(140, 29, 50, 0.45)'
    },
    padparadscha: {
      name: 'Sunset Padparadscha Sapphire',
      carat: '0.05ct Natural Unheated',
      symbol: 'Ethereal Reverence & Tenderness',
      quote: 'The rarest lotus-dawn hue, capturing the first light of Ceylon earth against warm skin.',
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
        subtitle="A vow isn't spoken once. It is carried daily against your pulse. Untreated Ceylon sapphires and hand-wrought gold, born deep beneath Sri Lankan earth."
        primaryCta={{ label: "BEGIN THE BESPOKE INTIMACY™ COMMISSION", href: "/bespoke/enquiry" }}
        secondaryCta={{ label: "EXPLORE THE COLLECTION →", href: "/fine-jewellery" }}
      />

      {/* 2. THE EMOTIONAL ENGINE: 4 PILLARS OF DEVOTION */}
      <section className="home-pillars-section" aria-label="The Architecture of Devotion">
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">THE ARCHITECTURE OF DEVOTION</span>
            <h2 className="section-title">Four Expressions of Private Covenant</h2>
            <p className="section-subtitle">
              To wear an Aviory creation is not an act of public status. It is a private covenant forged in gold and unheated Ceylon stone, meant to live where only your lover reaches.
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
                <span className="pillar-card__num">01 / VOW</span>
              </div>
              <div className="pillar-card__content">
                <span className="pillar-card__tag">PERMANENCE</span>
                <blockquote className="pillar-card__quote">
                  "A vow isn't spoken once. It is carried daily against your pulse."
                </blockquote>
                <p className="pillar-card__desc">
                  The physical anchor of a vow that stays when words fade. Handcrafted solitaires and unheated Ceylon sapphires created to outlast lifetimes.
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
                <span className="pillar-card__num">02 / TOUCH</span>
              </div>
              <div className="pillar-card__content">
                <span className="pillar-card__tag">TACTILE</span>
                <blockquote className="pillar-card__quote">
                  "Warm gold shaped to rest heavy against her collarbone in private hours."
                </blockquote>
                <p className="pillar-card__desc">
                  Precious metal designed to be touched, traced, and caressed. Heavy high-jewelry collars and hand-hammered gold cuffs that hold bodily warmth.
                </p>
                <Link to="/fine-jewellery" className="pillar-card__link">
                  EXPLORE TACTILE GOLD →
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
                <span className="pillar-card__num">03 / WONDER</span>
              </div>
              <div className="pillar-card__content">
                <span className="pillar-card__tag">MYSTIC</span>
                <blockquote className="pillar-card__quote">
                  "Born deep beneath Sri Lankan earth. Cut to catch only candlelight."
                </blockquote>
                <p className="pillar-card__desc">
                  Untreated royal blue and sunset padparadscha sapphires, cut with deep pavilion facets to awaken under low candle flame in quiet, private rooms.
                </p>
                <Link to="/gemstones" className="pillar-card__link">
                  EXPLORE CANDLELIT GEMS →
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
                <span className="pillar-card__num">04 / WHISPER</span>
              </div>
              <div className="pillar-card__content">
                <span className="pillar-card__tag">SECRET</span>
                <blockquote className="pillar-card__quote">
                  "A secret gem set flush inside the band, touching her skin alone."
                </blockquote>
                <p className="pillar-card__desc">
                  Hidden details shared only between the giver and the wearer. The signature Heartbeat Gem™ embedded flush where nobody else will ever see.
                </p>
                <Link to="/bespoke" className="pillar-card__link">
                  COMMISSION A SECRET DETAIL →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE BESPOKE INTIMACY™ SIGNATURE: THE HEARTBEAT GEM */}
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
                <span className="heartbeat-pill-text">Selected: <strong>{currentHeartbeat.name}</strong> ({currentHeartbeat.carat})</span>
              </div>
            </div>

            {/* Narrative & Interactive Selector */}
            <div className="heartbeat-narrative">
              <span className="editorial-eyebrow">SIGNATURE BESPOKE INTIMACY™</span>
              <h2 className="section-title">The Heartbeat Gem™: Hidden Against Her Pulse</h2>
              
              <blockquote className="heartbeat-quote">
                "The stone no one else will ever see—resting directly against the pulse point of the one you love."
              </blockquote>

              <p className="heartbeat-text">
                While the outer world admires an unheated Ceylon sapphire or platinum solitaire, the true covenant of your piece remains hidden within. Our master goldsmiths flush-set a micro unheated Ceylon gem directly into the interior curve of the ring band. 
              </p>
              <p className="heartbeat-text">
                It remains completely invisible to dinner parties, cameras, and strangers—touching only her skin, warm with every beat of her pulse.
              </p>

              {/* Stone Selector Tabs */}
              <div className="heartbeat-selector-group">
                <span className="heartbeat-selector-label">CHOOSE YOUR SECRET INNER STONE:</span>
                <div className="heartbeat-buttons">
                  <button 
                    type="button" 
                    className={`heartbeat-btn ${activeHeartbeatGem === 'sapphire' ? 'heartbeat-btn--active' : ''}`}
                    onClick={() => handleHeartbeatSelect('sapphire')}
                  >
                    <span className="heartbeat-btn__swatch" style={{ backgroundColor: '#254E8C' }} />
                    <span className="heartbeat-btn__title">Royal Sapphire</span>
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
                    <span className="heartbeat-btn__title">Padparadscha</span>
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
                  COMMISSION WITH A HEARTBEAT GEM →
                </Link>
                <Link to="/bespoke/process" className="link-text-gold">
                  HOW THE CUSTOM JOURNEY WORKS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ASYMMETRICAL MUSEUM GALLERY (py-24 RHYTHM) */}
      <section className="home-museum-section" aria-label="Solitary Museum Exhibits">
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">SOLITARY EXHIBITS</span>
            <h2 className="section-title">The Museum Gallery</h2>
            <p className="section-subtitle">
              We reject crowded retail catalog grids. Each rare unheated specimen and bespoke commission is presented in deliberate spatial solitude, under chiaroscuro framing.
            </p>
          </div>

          <div className="museum-exhibits-wrap">
            {/* EXHIBIT 01: Balangoda Royal Cushion */}
            <article className="museum-exhibit museum-exhibit--left">
              <div className="museum-exhibit__media-wrap">
                <img 
                  src="/images/editorial/ceylon-sapphire-vault.jpg" 
                  alt="The Royal Cushion Sapphire" 
                  className="museum-exhibit__img"
                />
                <span className="museum-exhibit__badge">100% UNHEATED • CERTIFIED NATURAL</span>
              </div>
              <div className="museum-exhibit__meta">
                <span className="museum-exhibit__num">EXHIBIT 01 / 04</span>
                <span className="museum-exhibit__category">MASTER COLLECTOR SAPPHIRE</span>
                <h3 className="museum-exhibit__title">The 7.42ct Royal Cushion Sapphire</h3>
                <p className="museum-exhibit__story">
                  Untouched by fire. Extracted from the sacred gem rivers of Ceylon and cut with deliberate deep pavilion facets to capture and hold candlelight in quiet, private rooms.
                </p>
                <div className="museum-exhibit__specs">
                  <span>Certified Ceylon Gem</span>
                  <span>•</span>
                  <span>7.42 Carats</span>
                  <span>•</span>
                  <span>Direct Mine Custody</span>
                </div>
                <div className="museum-exhibit__footer">
                  <div className="museum-exhibit__price">{formatPrice(24800, currency)}</div>
                  <Link to="/gemstones/bs-001" className="btn-luxury-primary">
                    EXPLORE THIS SPECIMEN
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
                <span className="museum-exhibit__badge">BESPOKE INTIMACY™</span>
              </div>
              <div className="museum-exhibit__meta">
                <span className="museum-exhibit__num">EXHIBIT 02 / 04</span>
                <span className="museum-exhibit__category">BESPOKE INTIMACY™ RING</span>
                <h3 className="museum-exhibit__title">The Secret Vow Solitaire</h3>
                <p className="museum-exhibit__story">
                  A classical solitaire to the world; an intense secret to two lovers. Hand-wrought in 950 platinum with a 3.20ct Ceylon Cornflower Sapphire and a secret inner pulse ruby touching her skin alone.
                </p>
                <div className="museum-exhibit__specs">
                  <span>950 Platinum</span>
                  <span>•</span>
                  <span>3.20ct Ceylon Stone</span>
                  <span>•</span>
                  <span>Heartbeat Gem™ Included</span>
                </div>
                <div className="museum-exhibit__footer">
                  <div className="museum-exhibit__price">{formatPrice(18500, currency)}</div>
                  <Link to="/love-and-celebration" className="btn-luxury-primary">
                    EXPLORE THIS RING
                  </Link>
                </div>
              </div>
            </article>

            {/* EXHIBIT 03: The Sunset Padparadscha Collar */}
            <article className="museum-exhibit museum-exhibit--left">
              <div className="museum-exhibit__media-wrap">
                <img 
                  src="/images/gifts-for-her.jpg" 
                  alt="The Sunset Padparadscha Collar" 
                  className="museum-exhibit__img"
                />
                <span className="museum-exhibit__badge">ONE-OF-ONE HAUTE JOAILLERIE</span>
              </div>
              <div className="museum-exhibit__meta">
                <span className="museum-exhibit__num">EXHIBIT 03 / 04</span>
                <span className="museum-exhibit__category">HAUTE JOAILLERIE COLLAR</span>
                <h3 className="museum-exhibit__title">The Sunset Padparadscha Collar</h3>
                <p className="museum-exhibit__story">
                  Warm gold shaped to rest heavy against her collarbone in private hours. The rare salmon-lotus hue awakens in low candlelight, retaining the physical warmth of the wearer throughout the evening.
                </p>
                <div className="museum-exhibit__specs">
                  <span>18K Warm Champagne Gold</span>
                  <span>•</span>
                  <span>4.18ct Untreated Padparadscha</span>
                  <span>•</span>
                  <span>Handcrafted in Ceylon</span>
                </div>
                <div className="museum-exhibit__footer">
                  <div className="museum-exhibit__price">{formatPrice(32000, currency)}</div>
                  <Link to="/fine-jewellery" className="btn-luxury-primary">
                    EXPLORE THIS PIECE
                  </Link>
                </div>
              </div>
            </article>

            {/* EXHIBIT 04: The Ratnapura Deep Emerald-Cut Teal */}
            <article className="museum-exhibit museum-exhibit--right">
              <div className="museum-exhibit__media-wrap">
                <img 
                  src="/images/gifts-to-engrave.jpg" 
                  alt="The Ratnapura Deep Emerald-Cut Teal Sapphire" 
                  className="museum-exhibit__img"
                />
                <span className="museum-exhibit__badge">RARE NATURAL SPECIMEN</span>
              </div>
              <div className="museum-exhibit__meta">
                <span className="museum-exhibit__num">EXHIBIT 04 / 04</span>
                <span className="museum-exhibit__category">MASTER COLLECTOR SPECIMEN</span>
                <h3 className="museum-exhibit__title">The Emerald-Cut Teal Sapphire</h3>
                <p className="museum-exhibit__story">
                  A natural chromatic duality from Ceylon's sacred river basins. Intersecting oceanic midnight blue and jungle emerald green in a single untreated crystal, certified untouched by artificial heat.
                </p>
                <div className="museum-exhibit__specs">
                  <span>5.10 Carats</span>
                  <span>•</span>
                  <span>Lotus Master Gem Report</span>
                  <span>•</span>
                  <span>Emerald Cut</span>
                </div>
                <div className="museum-exhibit__footer">
                  <div className="museum-exhibit__price">{formatPrice(16200, currency)}</div>
                  <Link to="/gemstones" className="btn-luxury-primary">
                    EXPLORE THIS SPECIMEN
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5. HOW AVIORY & CO. OUTPERFORMS LEGACY HOUSES */}
      <section className="home-ethos-section" aria-label="House Ethos vs Legacy Houses">
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">HOUSE PHILOSOPHY</span>
            <h2 className="section-title">Why Private Devotion Outlasts Mass Prestige</h2>
            <p className="section-subtitle">
              Legacy houses sell standardized gift boxes and public prestige to millions. Aviory &amp; Co. creates solitary treasures meant for one person alone.
            </p>
          </div>

          <div className="ethos-cards-grid">
            {/* PILLAR 1: BESPOKE INTIMACY */}
            <div className="ethos-card">
              <span className="ethos-card__eyebrow">ONE-OF-ONE CREATIONS</span>
              <h3 className="ethos-card__title">Bespoke Intimacy™</h3>
              <p className="ethos-card__flaw">
                <strong>The Legacy Flaw:</strong> Millions wear the identical key pendant, love bracelet, or assembly-line engagement band.
              </p>
              <p className="ethos-card__advantage">
                <strong>The Aviory Advantage:</strong> Every piece carries a solitary narrative, an unheated Ceylon gemstone, and secret inner details known only to two lovers.
              </p>
            </div>

            {/* PILLAR 2: ATELIER DISCRETION */}
            <div className="ethos-card ethos-card--highlight">
              <span className="ethos-card__eyebrow">HIGH DISCRETION</span>
              <h3 className="ethos-card__title">Atelier Discretion</h3>
              <p className="ethos-card__flaw">
                <strong>The Legacy Flaw:</strong> Rushed transactions at crowded glass counters in commercial shopping malls.
              </p>
              <p className="ethos-card__advantage">
                <strong>The Aviory Advantage:</strong> Quiet, high-discretion champagne sit-downs in our private atelier or confidential encrypted 1-on-1 virtual viewing suites.
              </p>
            </div>

            {/* PILLAR 3: SENSORY PROVENANCE */}
            <div className="ethos-card">
              <span className="ethos-card__eyebrow">GENUINE RARITY</span>
              <h3 className="ethos-card__title">Sensory Provenance</h3>
              <p className="ethos-card__flaw">
                <strong>The Legacy Flaw:</strong> Dry commodity charts, sterile 4-C formulas, and heated commercial inventory.
              </p>
              <p className="ethos-card__advantage">
                <strong>The Aviory Advantage:</strong> Two millennia of Sri Lankan gem heritage, unheated crystalline purity, and ethical direct mine-to-hand custody.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE MASTER CEYLON RESERVE */}
      <section className="home-vault-section" aria-label="The Master Ceylon Reserve">
        <div className="container">
          <div className="vault-frame">
            <div className="section-header-centered">
              <span className="editorial-eyebrow">CONFIDENTIAL PATRON ARCHIVE</span>
              <h2 className="section-title">The Master Ceylon Reserve</h2>
              <p className="section-subtitle">
                Pre-release unheated Ceylon sapphires and master collector stones held under private seal in our atelier.
              </p>
            </div>

            <div className="vault-specimens-grid">
              {/* SPECIMEN 01 */}
              <div className="vault-specimen-card">
                <span className="vault-specimen-badge">LOT #RES-112</span>
                <h4 className="vault-specimen-title">11.20ct Vivid Royal Blue Cushion Sapphire</h4>
                <p className="vault-specimen-meta">100% Unheated • Certified Ceylon Gem • Direct Provenance Custody</p>
                <p className="vault-specimen-desc">
                  Intense cornflower-to-royal saturation with zero secondary modifiers. Exceptional crystalline transparency rarely observed in double-digit unheated stones.
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
                <h4 className="vault-specimen-title">6.40ct Sunset Padparadscha Pear</h4>
                <p className="vault-specimen-meta">Untreated Ceylon Gem • Independent Verified • Master Faceted</p>
                <p className="vault-specimen-desc">
                  Equally balanced 50/50 delicate pink and golden orange lotus flower hue. Sourced directly from an artisanal family gem deposit in Elahera.
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
                <h4 className="vault-specimen-title">4.85ct Pigeon Blood Untreated Ceylon Ruby</h4>
                <p className="vault-specimen-meta">Pure Red Hue • Unheated • Certified Ceylon Gem</p>
                <p className="vault-specimen-desc">
                  A phenomenal natural ruby with vivid fluorescence that glows fiercely under low candlelight. One of the finest corundum stones recovered in Ceylon this decade.
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

      {/* 7. ATELIER & WORLDWIDE PRIVATE VIEWINGS */}
      <section className="home-consultation-section" aria-label="Atelier & Worldwide Viewings">
        <div className="container">
          <div className="consultation-card">
            <span className="editorial-eyebrow">ATELIER &amp; PRIVATE SALON</span>
            <h2 className="consultation-title">Private Consultations in Ceylon &amp; Worldwide</h2>
            <p className="consultation-lead">
              We do not host retail crowds. Our private atelier in Sri Lanka operates exclusively by appointment for quiet, unhurried champagne viewings under candlelight. For our patrons across London, Zurich, New York, and Tokyo, our gemologists host confidential 1-on-1 virtual viewings in 4K resolution.
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
                DISCOVER OUR PROVENANCE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FROM OUR JOURNAL (EDITORIAL LORE & INTIMACY) */}
      <section className="home-journal-section" aria-label="From Our Journal">
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">EDITORIAL LORE &amp; CRAFT</span>
            <h2 className="section-title">From Our Journal</h2>
            <p className="section-subtitle">
              Dispatches on unheated gemstone provenance, the secret poetry of jewelry, and ancient Ceylon mine lore.
            </p>
          </div>

          <div className="journal-articles-grid">
            <article className="journal-card">
              <span className="journal-card__category">BESPOKE INTIMACY</span>
              <h3 className="journal-card__title">
                <Link to="/journal/the-secret-inner-band">The Secret Inner-Band: Why We Hide a Gem Against Your Pulse</Link>
              </h3>
              <p className="journal-card__excerpt">
                Why true luxury is turning inward. The emotional anthropology behind setting a solitary unheated ruby flush against her pulse point.
              </p>
              <span className="journal-card__meta">By Master Goldsmith &bull; 6 min read</span>
            </article>

            <article className="journal-card">
              <span className="journal-card__category">GEMOLOGICAL INTEGRITY</span>
              <h3 className="journal-card__title">
                <Link to="/journal/unheated-ceylon-sapphires">Untreated Ceylon Sapphires: Why Heat Kills the Soul of a Stone</Link>
              </h3>
              <p className="journal-card__excerpt">
                Less than 1% of the world's corundum enters the market untouched by furnace heat. The delicate silk rutile inclusions that prove wild crystalline purity.
              </p>
              <span className="journal-card__meta">By Chief Gemologist &bull; 8 min read</span>
            </article>

            <article className="journal-card">
              <span className="journal-card__category">ATELIER CRAFT</span>
              <h3 className="journal-card__title">
                <Link to="/journal/candlelight-and-gold">Candlelight &amp; Gold: The Lost Art of Chiaroscuro Jewelry Design</Link>
              </h3>
              <p className="journal-card__excerpt">
                Before electric spotlights, fine jewelry was cut to dance under candle flame in darkened rooms. How our goldsmiths revive deep pavilion facets.
              </p>
              <span className="journal-card__meta">By Design Atelier &bull; 5 min read</span>
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
              Receive discreet dispatches regarding newly unearthed unheated Ceylon sapphires, bespoke atelier releases, and invitations to private salon viewings.
            </p>

            {subscribed ? (
              <div className="newsletter-success">
                Your invitation request has been registered with our private concierge.
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
