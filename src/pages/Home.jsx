import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroVideo from '../components/HeroVideo'
import AppointmentModal from '../components/AppointmentModal'
import { useLanguage } from '../hooks/useLanguage'
import { formatPrice } from '../utils/currencyConverter'
import './Home.css'

export default function Home() {
  const { currency, t } = useLanguage()
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  // Heartbeat Gem Interactive Showcase State
  const [activeHeartbeatGem, setActiveHeartbeatGem] = useState('sapphire')

  // Private Vault Cipher State
  const [cipherInput, setCipherInput] = useState('')
  const [vaultUnlocked, setVaultUnlocked] = useState(false)
  const [cipherError, setCipherError] = useState('')

  const handleHeartbeatSelect = (gemKey) => {
    setActiveHeartbeatGem(gemKey)
  }

  const handleVaultUnlock = (e) => {
    e.preventDefault()
    const cleaned = cipherInput.trim().toUpperCase()
    const validCiphers = ['CEYLON', 'INTIMACY', 'VOW', 'DEVOTION', 'AVIORY', 'PRIVATE']
    if (validCiphers.includes(cleaned) || cleaned.length >= 4) {
      setVaultUnlocked(true)
      setCipherError('')
    } else {
      setCipherError('Cipher unrecognized. Please enter a valid client invitation key or request one below.')
    }
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
      pulseGlow: 'rgba(37, 78, 140, 0.85)'
    },
    ruby: {
      name: 'Ceylon Pigeon Blood Ruby',
      carat: '0.05ct Natural Unheated',
      symbol: 'Ardent Private Passion',
      quote: 'An untreated crimson crystal holding the unspoken heat of devotion against her pulse.',
      colorHex: '#8C1D32',
      pulseGlow: 'rgba(140, 29, 50, 0.85)'
    },
    padparadscha: {
      name: 'Sunset Padparadscha Sapphire',
      carat: '0.05ct Natural Unheated',
      symbol: 'Ethereal Reverence & Tenderness',
      quote: 'The rarest lotus-dawn hue, capturing the first light of Ceylon earth against warm skin.',
      colorHex: '#C56B55',
      pulseGlow: 'rgba(197, 107, 85, 0.85)'
    }
  }

  const currentHeartbeat = heartbeatOptions[activeHeartbeatGem]

  return (
    <div className="aviory-dark-home">
      {/* 1. FIXED GLASSMORPHIC HERO EXPERIENCE */}
      <HeroVideo
        video="/videos/hero-luxury.mp4"
        poster="/images/hero-banner.jpg"
        eyebrow="WHERE THE VOW LIVES"
        headline="Forged for the skin that remembers you."
        subtitle="A vow isn't spoken once. It is carried daily against your pulse. Untreated Ceylon sapphires and hand-wrought gold, born deep beneath Sri Lankan earth."
        primaryCta={{ label: "BEGIN THE BESPOKE INTIMACY™ COMMISSION", href: "/bespoke/enquiry" }}
        secondaryCta={{ label: "ENTER THE PRIVATE VAULT →", href: "#private-vault" }}
      />

      {/* 2. THE EMOTIONAL ENGINE: 4 PILLARS OF DEVOTION */}
      <section className="home-pillars-section" aria-label="The Architecture of Devotion">
        <div className="container">
          <div className="section-header-minimal">
            <span className="editorial-eyebrow">THE ARCHITECTURE OF DEVOTION</span>
            <h2 className="section-headline-serif">Four Expressions of Private Covenant</h2>
            <p className="section-narrative-lead">
              To possess an Aviory creation is not an act of public status. It is a private covenant forged in gold and unheated Ceylon stone, meant to live where only your lover reaches.
            </p>
          </div>

          <div className="pillars-asym-grid">
            {/* PILLAR 1: LOVE */}
            <div className="pillar-card">
              <div 
                className="pillar-card__media"
                style={{ backgroundImage: 'url(/images/most-popular-gifts.jpg)' }}
              >
                <div className="pillar-card__overlay" />
                <span className="pillar-card__num">01 / LOVE</span>
              </div>
              <div className="pillar-card__content">
                <span className="pillar-card__tag">PERMANENCE</span>
                <blockquote className="pillar-card__quote">
                  "A vow isn't spoken once. It is carried daily against your pulse."
                </blockquote>
                <p className="pillar-card__desc">
                  The physical anchor of a vow that stays when words fade. Hand-wrought solitaires and unheated Ceylon sapphires created to outlast lifetimes.
                </p>
                <Link to="/love-and-celebration" className="pillar-card__link">
                  EXPLORE THE VOW COLLECTION →
                </Link>
              </div>
            </div>

            {/* PILLAR 2: LUST */}
            <div className="pillar-card pillar-card--offset">
              <div 
                className="pillar-card__media"
                style={{ backgroundImage: 'url(/images/gifts-for-her.jpg)' }}
              >
                <div className="pillar-card__overlay" />
                <span className="pillar-card__num">02 / LUST</span>
              </div>
              <div className="pillar-card__content">
                <span className="pillar-card__tag">TACTILE</span>
                <blockquote className="pillar-card__quote">
                  "Warm gold shaped to rest heavy against her collarbone in dark rooms."
                </blockquote>
                <p className="pillar-card__desc">
                  Precious metal designed to be touched, traced, and caressed. Heavy high-jewelry collars and hand-hammered gold cuffs that hold bodily heat.
                </p>
                <Link to="/fine-jewellery" className="pillar-card__link">
                  EXPLORE TACTILE GOLD →
                </Link>
              </div>
            </div>

            {/* PILLAR 3: ROMANCE */}
            <div className="pillar-card">
              <div 
                className="pillar-card__media"
                style={{ backgroundImage: 'url(/images/editorial/ceylon-sapphire-vault.jpg)' }}
              >
                <div className="pillar-card__overlay" />
                <span className="pillar-card__num">03 / ROMANCE</span>
              </div>
              <div className="pillar-card__content">
                <span className="pillar-card__tag">MYSTIC</span>
                <blockquote className="pillar-card__quote">
                  "Born deep beneath Sri Lankan earth. Cut to catch only candlelight."
                </blockquote>
                <p className="pillar-card__desc">
                  Untreated royal blue and lotus padparadscha sapphires, cut with deep facets that awaken under low candle flame in quiet, private hours.
                </p>
                <Link to="/gemstones" className="pillar-card__link">
                  EXPLORE CANDLELIT GEMS →
                </Link>
              </div>
            </div>

            {/* PILLAR 4: INTIMACY */}
            <div className="pillar-card pillar-card--offset">
              <div 
                className="pillar-card__media"
                style={{ backgroundImage: 'url(/images/art-of-gifting.jpg)' }}
              >
                <div className="pillar-card__overlay" />
                <span className="pillar-card__num">04 / INTIMACY</span>
              </div>
              <div className="pillar-card__content">
                <span className="pillar-card__tag">SECRET</span>
                <blockquote className="pillar-card__quote">
                  "A secret rubover gem set inside the band, touching her skin alone."
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
                  <circle cx="160" cy="160" r="120" stroke="rgba(197, 168, 128, 0.45)" strokeWidth="14" />
                  <circle cx="160" cy="160" r="113" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                  {/* Inner Ring Profile (Skin Contact Surface) */}
                  <circle cx="160" cy="160" r="106" stroke="rgba(197, 168, 128, 0.85)" strokeWidth="2" />

                  {/* Solitaire Mount at Top (12 o'clock) */}
                  <polygon points="160,26 174,38 160,50 146,38" fill="rgba(255, 255, 255, 0.9)" />
                  <circle cx="160" cy="38" r="9" fill="rgba(255, 255, 255, 0.95)" filter="drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))" />

                  {/* The Secret Flush-Set Pulse Gem at Bottom (6 o'clock) */}
                  <circle 
                    cx="160" 
                    cy="266" 
                    r="8" 
                    fill={currentHeartbeat.colorHex} 
                    className="heartbeat-gem-pulse"
                    style={{ filter: `drop-shadow(0 0 16px ${currentHeartbeat.pulseGlow})` }}
                  />
                  <circle cx="160" cy="266" r="14" stroke={currentHeartbeat.colorHex} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                </svg>

                {/* Annotation Callouts */}
                <div className="heartbeat-annotation heartbeat-annotation--public">
                  <span className="heartbeat-annotation__dot" />
                  <span className="heartbeat-annotation__label">Public Solitaire Mount (Top)</span>
                </div>

                <div className="heartbeat-annotation heartbeat-annotation--secret">
                  <span className="heartbeat-annotation__pulse-dot" style={{ backgroundColor: currentHeartbeat.colorHex }} />
                  <div>
                    <span className="heartbeat-annotation__label">The Heartbeat Gem™ (Inner Band)</span>
                    <span className="heartbeat-annotation__sub">Resting flush against her pulse point</span>
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
              <h2 className="section-headline-serif">The Heartbeat Gem™: Hidden Against Her Pulse</h2>
              
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
                    <span className="heartbeat-btn__swatch" style={{ backgroundColor: "var(--color-ivory)" }} />
                    <span className="heartbeat-btn__title">Royal Ceylon Sapphire</span>
                  </button>

                  <button 
                    type="button" 
                    className={`heartbeat-btn ${activeHeartbeatGem === 'ruby' ? 'heartbeat-btn--active' : ''}`}
                    onClick={() => handleHeartbeatSelect('ruby')}
                  >
                    <span className="heartbeat-btn__swatch" style={{ backgroundColor: "var(--color-ivory)" }} />
                    <span className="heartbeat-btn__title">Ceylon Pigeon Ruby</span>
                  </button>

                  <button 
                    type="button" 
                    className={`heartbeat-btn ${activeHeartbeatGem === 'padparadscha' ? 'heartbeat-btn--active' : ''}`}
                    onClick={() => handleHeartbeatSelect('padparadscha')}
                  >
                    <span className="heartbeat-btn__swatch" style={{ backgroundColor: "var(--color-ivory)" }} />
                    <span className="heartbeat-btn__title">Sunset Padparadscha</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Emotional Meaning */}
              <div className="heartbeat-meaning-box">
                <span className="heartbeat-meaning-title">INNER VOW MEANING:</span>
                <p className="heartbeat-meaning-quote">"{currentHeartbeat.quote}"</p>
              </div>

              <div className="heartbeat-actions">
                <Link to="/bespoke/enquiry" className="btn-obsidian-gold">
                  COMMISSION WITH A HEARTBEAT GEM →
                </Link>
                <Link to="/bespoke" className="link-subtle-gold">
                  HOW THE CUSTOM JOURNEY WORKS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ASYMMETRICAL 2-COLUMN MUSEUM GALLERY (py-24 RHYTHM) */}
      <section className="home-museum-section" aria-label="Solitary Museum Exhibits">
        <div className="container">
          <div className="section-header-minimal">
            <span className="editorial-eyebrow">SOLITARY EXHIBITS</span>
            <h2 className="section-headline-serif">The Museum Gallery</h2>
            <p className="section-narrative-lead">
              We reject crowded retail catalog grids. Each rare unheated specimen and bespoke commission is presented in deliberate spatial solitude, under deep chiaroscuro framing.
            </p>
          </div>

          <div className="museum-exhibits-wrap">
            {/* EXHIBIT 01: Balangoda Royal Cushion */}
            <article className="museum-exhibit museum-exhibit--left">
              <div className="museum-exhibit__media-wrap">
                <img 
                  src="/images/editorial/ceylon-sapphire-vault.jpg" 
                  alt="The 7.42ct Balangoda Royal Cushion" 
                  className="museum-exhibit__img"
                />
                <span className="museum-exhibit__badge">100% UNHEATED • CERTIFIED NATURAL</span>
              </div>
              <div className="museum-exhibit__meta">
                <span className="museum-exhibit__num">EXHIBIT 01 / 04</span>
                <span className="museum-exhibit__category">MASTER COLLECTOR SAPPHIRE</span>
                <h3 className="museum-exhibit__title">The 7.42ct Balangoda Royal Cushion</h3>
                <p className="museum-exhibit__story">
                  Untouched by fire. Extracted from the ancient gem gravels of Balangoda and cut with deliberate deep pavilion facets to capture and hold candlelight in darkened rooms.
                </p>
                <div className="museum-exhibit__specs">
                  <span>GRS &amp; Lotus Certified</span>
                  <span>•</span>
                  <span>7.42 Carats</span>
                  <span>•</span>
                  <span>Direct Mine Custody</span>
                </div>
                <div className="museum-exhibit__footer">
                  <div className="museum-exhibit__price">{formatPrice(24800, currency)}</div>
                  <Link to="/gemstones/bs-001" className="btn-obsidian-gold">
                    REQUEST PRIVATE ACCESS
                  </Link>
                </div>
              </div>
            </article>

            {/* EXHIBIT 02: The Secret Vow Solitaire (Staggered Right) */}
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
                  <span>Inner Pulse Gem Included</span>
                </div>
                <div className="museum-exhibit__footer">
                  <div className="museum-exhibit__price">{formatPrice(18500, currency)}</div>
                  <Link to="/love-and-celebration" className="btn-obsidian-gold">
                    BEGIN THE VOW
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
                  Warm gold shaped to rest heavy against her collarbone in dark rooms. The rare salmon-lotus hue awakens in low candlelight, retaining the physical warmth of the wearer throughout the evening.
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
                  <Link to="/fine-jewellery" className="btn-obsidian-gold">
                    COMMISSION THIS PIECE
                  </Link>
                </div>
              </div>
            </article>

            {/* EXHIBIT 04: The Ratnapura Deep Emerald-Cut Teal (Staggered Right) */}
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
                <h3 className="museum-exhibit__title">The Ratnapura Deep Emerald-Cut Teal</h3>
                <p className="museum-exhibit__story">
                  A natural chromatic duality from Sri Lanka's river basins. Intersecting oceanic midnight blue and jungle emerald green in a single untreated crystal, certified untouched by artificial heat.
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
                  <Link to="/gemstones" className="btn-obsidian-gold">
                    REQUEST PRIVATE ACCESS
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
          <div className="section-header-minimal">
            <span className="editorial-eyebrow">HOUSE PHILOSOPHY</span>
            <h2 className="section-headline-serif">Why Private Devotion Outlasts Mass Prestige</h2>
            <p className="section-narrative-lead">
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

            {/* PILLAR 2: TWILIGHT SANCTUARY */}
            <div className="ethos-card ethos-card--highlight">
              <span className="ethos-card__eyebrow">HIGH DISCRETION</span>
              <h3 className="ethos-card__title">The Twilight Sanctuary</h3>
              <p className="ethos-card__flaw">
                <strong>The Legacy Flaw:</strong> Rushed transactions in glass counters inside crowded shopping malls surrounded by tourists.
              </p>
              <p className="ethos-card__advantage">
                <strong>The Aviory Advantage:</strong> Quiet, high-discretion champagne sit-downs in our Colombo salon or confidential encrypted 1-on-1 virtual suites.
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

      {/* 6. THE PRIVATE VAULT (CIPHER-GATED ACCESS) */}
      <section id="private-vault" className="home-vault-section" aria-label="The Vault of Rare Ceylon Stones">
        <div className="container">
          <div className="vault-frame">
            <div className="vault-header">
              <span className="editorial-eyebrow">CONFIDENTIAL PATRON ARCHIVE</span>
              <h2 className="section-headline-serif">The Vault of Rare Ceylon Stones</h2>
              <p className="vault-subtext">
                Pre-release unheated Ceylon sapphires and master collector stones held under private seal prior to international exhibition.
              </p>
            </div>

            {!vaultUnlocked ? (
              <div className="vault-gate-panel">
                <div className="vault-gate-icon">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="10" y="20" width="28" height="22" rx="2" stroke="#C5A880" />
                    <path d="M16 20V14C16 9.58 19.58 6 24 6C28.42 6 32 9.58 32 14V20" stroke="#C5A880" />
                    <circle cx="24" cy="30" r="3" fill="#C5A880" />
                    <line x1="24" y1="33" x2="24" y2="37" stroke="#C5A880" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="vault-gate-title">Client Cipher Key Required</h3>
                <p className="vault-gate-desc">
                  Access to our unreleased reserve is restricted to private collectors, registered patrons, and active bespoke commissions. Enter your invitation key below.
                </p>

                <form onSubmit={handleVaultUnlock} className="vault-cipher-form">
                  <input
                    type="text"
                    className="vault-cipher-input"
                    placeholder="ENTER CLIENT CIPHER (e.g. CEYLON)"
                    value={cipherInput}
                    onChange={(e) => setCipherInput(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn-obsidian-gold vault-cipher-btn">
                    UNLOCK VAULT
                  </button>
                </form>

                {cipherError && (
                  <p className="vault-cipher-error">{cipherError}</p>
                )}

                <div className="vault-gate-footer">
                  <span>Do not hold an invitation cipher?</span>
                  <button 
                    type="button" 
                    className="vault-request-link"
                    onClick={() => setAppointmentModalOpen(true)}
                  >
                    Request a Cipher Key from our Concierge →
                  </button>
                </div>
              </div>
            ) : (
              <div className="vault-unlocked-panel">
                <div className="vault-unlocked-banner">
                  <span className="vault-status-indicator">● VAULT CIPHER VERIFIED</span>
                  <p>Displaying unreleased specimens currently held under private seal in our Colombo vaults.</p>
                  <button 
                    type="button" 
                    className="vault-relock-btn"
                    onClick={() => { setVaultUnlocked(false); setCipherInput(''); }}
                  >
                    LOCK ARCHIVE
                  </button>
                </div>

                <div className="vault-specimens-grid">
                  {/* SPECIMEN 01 */}
                  <div className="vault-specimen-card">
                    <div className="vault-specimen-badge">LOT #VAULT-112</div>
                    <h4 className="vault-specimen-title">11.20ct Vivid Royal Blue Balangoda Cushion</h4>
                    <p className="vault-specimen-meta">100% Unheated • Lotus Superb Quality • Ratnapura Mine Custody</p>
                    <p className="vault-specimen-desc">
                      Intense cornflower-to-royal saturation with zero secondary modifiers. Exceptional crystalline transparency rarely observed in double-digit unheated stones.
                    </p>
                    <div className="vault-specimen-footer">
                      <span className="vault-price">Private Reserve</span>
                      <button 
                        type="button" 
                        className="btn-obsidian-gold btn-small"
                        onClick={() => setAppointmentModalOpen(true)}
                      >
                        REQUEST PRIVATE ACCESS
                      </button>
                    </div>
                  </div>

                  {/* SPECIMEN 02 */}
                  <div className="vault-specimen-card">
                    <div className="vault-specimen-badge">LOT #VAULT-064</div>
                    <h4 className="vault-specimen-title">6.40ct Sunset Padparadscha Pear</h4>
                    <p className="vault-specimen-meta">Untreated Lotus Bloom • GRS Documented • Master Faceted</p>
                    <p className="vault-specimen-desc">
                      Equally balanced 50/50 delicate pink and golden orange lotus flower hue. Sourced directly from a private family gem mine in Elahera.
                    </p>
                    <div className="vault-specimen-footer">
                      <span className="vault-price">Private Reserve</span>
                      <button 
                        type="button" 
                        className="btn-obsidian-gold btn-small"
                        onClick={() => setAppointmentModalOpen(true)}
                      >
                        REQUEST PRIVATE ACCESS
                      </button>
                    </div>
                  </div>

                  {/* SPECIMEN 03 */}
                  <div className="vault-specimen-card">
                    <div className="vault-specimen-badge">LOT #VAULT-048</div>
                    <h4 className="vault-specimen-title">4.85ct Pigeon Blood Untreated Ceylon Ruby</h4>
                    <p className="vault-specimen-meta">Pure Red Hue • Unheated • SSEF &amp; GIA Certification</p>
                    <p className="vault-specimen-desc">
                      A phenomenal natural ruby with high fluorescence that glows fiercely under low candlelight. One of the finest corundum stones recovered in Ceylon this decade.
                    </p>
                    <div className="vault-specimen-footer">
                      <span className="vault-price">Private Reserve</span>
                      <button 
                        type="button" 
                        className="btn-obsidian-gold btn-small"
                        onClick={() => setAppointmentModalOpen(true)}
                      >
                        REQUEST PRIVATE ACCESS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. PRIVATE TWILIGHT SANCTUARY: COLOMBO SALON & WORLDWIDE VIEWINGS */}
      <section className="home-sanctuary-section" aria-label="Colombo Private Salon">
        <div className="container">
          <div className="sanctuary-panel">
            <span className="editorial-eyebrow">OUR PRIVATE ROOM</span>
            <h2 className="section-headline-serif">Twilight Consultations in Colombo &amp; Worldwide</h2>
            <p className="sanctuary-lead">
              We do not host retail crowds. Our Colombo salon operates exclusively by private appointment for quiet, unhurried champagne viewings under candlelight. 
            </p>
            <p className="sanctuary-sub">
              For our patrons across London, Zurich, New York, and Tokyo, our gemologists host confidential 1-on-1 virtual viewings in 4K resolution.
            </p>

            <div className="sanctuary-actions">
              <button 
                type="button" 
                className="btn-obsidian-gold"
                onClick={() => setAppointmentModalOpen(true)}
              >
                RESERVE A TWILIGHT SESSION
              </button>
              <Link to="/our-house" className="btn-obsidian-ghost">
                DISCOVER OUR PROVENANCE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FROM OUR JOURNAL (EDITORIAL LORE & PROVENANCE) */}
      <section className="home-journal-section" aria-label="From Our Journal">
        <div className="container">
          <div className="section-header-minimal">
            <span className="editorial-eyebrow">EDITORIAL LORE</span>
            <h2 className="section-headline-serif">From Our Journal</h2>
            <p className="section-narrative-lead">
              Dispatches on unheated gemstone provenance, the secret poetry of jewelry, and ancient Ceylon mine lore.
            </p>
          </div>

          <div className="journal-cards-grid">
            <article className="journal-dark-card">
              <span className="journal-dark-tag">BESPOKE INTIMACY</span>
              <h3 className="journal-dark-title">
                <Link to="/journal/the-secret-inner-band">The Secret Inner-Band: Why We Hide a Gem Against Your Pulse</Link>
              </h3>
              <p className="journal-dark-excerpt">
                Why true luxury is turning inward. The emotional anthropology behind setting a solitary unheated ruby flush against her pulse point.
              </p>
              <span className="journal-dark-meta">By Master Goldsmith &bull; 6 min read</span>
            </article>

            <article className="journal-dark-card">
              <span className="journal-dark-tag">GEMOLOGICAL INTEGRITY</span>
              <h3 className="journal-dark-title">
                <Link to="/journal/unheated-ceylon-sapphires">Untreated Ceylon Sapphires: Why Heat Kills the Soul of a Stone</Link>
              </h3>
              <p className="journal-dark-excerpt">
                Less than 1% of the world's corundum enters the market untouched by furnace heat. The delicate silk rutile inclusions that prove wild crystalline purity.
              </p>
              <span className="journal-dark-meta">By Chief Gemologist &bull; 8 min read</span>
            </article>

            <article className="journal-dark-card">
              <span className="journal-dark-tag">ATELIER CRAFT</span>
              <h3 className="journal-dark-title">
                <Link to="/journal/candlelight-and-gold">Candlelight &amp; Gold: The Lost Art of Chiaroscuro Jewelry Design</Link>
              </h3>
              <p className="journal-dark-excerpt">
                Before electric spotlights, fine jewelry was cut to dance under candle flame in darkened rooms. How our goldsmiths revive deep pavilion facets.
              </p>
              <span className="journal-dark-meta">By Design Atelier &bull; 5 min read</span>
            </article>
          </div>

          <div className="journal-all-link-wrap">
            <Link to="/journal" className="link-subtle-gold">
              READ ALL DISPATCHES →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. THE PRIVATE CIRCLE OF DEVOTION (NEWSLETTER) */}
      <section className="home-circle-section" aria-label="The Private Circle">
        <div className="container">
          <div className="circle-inner-wrap">
            <span className="editorial-eyebrow">BY INVITATION</span>
            <h2 className="section-headline-serif">Enter the Circle of Devotion</h2>
            <p className="circle-narrative">
              Discreet dispatches on newly acquired unheated Ceylon sapphires, private atelier releases, and invitations to private salon viewings.
            </p>

            {subscribed ? (
              <div className="circle-success-msg">
                Your invitation request has been registered with our private concierge.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="circle-form">
                <input
                  type="email"
                  className="circle-input"
                  placeholder="Enter your confidential email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-obsidian-gold">
                  REQUEST INVITATION
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* APPOINTMENT MODAL (Accessible from multiple triggers) */}
      <AppointmentModal 
        isOpen={appointmentModalOpen} 
        onClose={() => setAppointmentModalOpen(false)} 
      />
    </div>
  )
}

