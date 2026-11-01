import React, { useState, useMemo, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { engagementRings } from '../data/products'
import './LoveAndCelebration.css'

export default function LoveAndCelebration() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedStyle, setSelectedStyle] = useState('all')
  const [selectedStone, setSelectedStone] = useState('all')
  const [selectedShape, setSelectedShape] = useState('all')
  const ringsSectionRef = useRef(null)

  const styles = ['all', ...new Set(engagementRings.map(r => r.style).filter(Boolean))]
  const stoneTypes = ['all', ...new Set(engagementRings.map(r => r.stoneType).filter(Boolean))]
  const shapes = ['all', ...new Set(engagementRings.map(r => r.shape).filter(Boolean))]

  useEffect(() => {
    const styleParam = searchParams.get('style')
    const stoneParam = searchParams.get('stone')
    const shapeParam = searchParams.get('cut') || searchParams.get('shape')

    if (styleParam) {
      const match = styles.find(s => s.toLowerCase() === styleParam.toLowerCase())
      if (match) setSelectedStyle(match)
    } else {
      setSelectedStyle('all')
    }

    if (stoneParam) {
      const match = stoneTypes.find(s => s.toLowerCase().includes(stoneParam.toLowerCase()))
      if (match) setSelectedStone(match)
    } else {
      setSelectedStone('all')
    }

    if (shapeParam) {
      const match = shapes.find(s => s.toLowerCase().includes(shapeParam.toLowerCase()))
      if (match) setSelectedShape(match)
    } else {
      setSelectedShape('all')
    }
  }, [searchParams])

  const filtered = useMemo(() => {
    return engagementRings.filter(ring => {
      if (selectedStyle !== 'all' && ring.style.toLowerCase() !== selectedStyle.toLowerCase()) return false
      if (selectedStone !== 'all' && ring.stoneType.toLowerCase() !== selectedStone.toLowerCase()) return false
      if (selectedShape !== 'all' && !ring.shape.toLowerCase().includes(selectedShape.toLowerCase())) return false
      return true
    })
  }, [selectedStyle, selectedStone, selectedShape])

  const handleStyleChange = (style) => {
    setSelectedStyle(style)
    const params = new URLSearchParams(searchParams)
    if (style === 'all') {
      params.delete('style')
    } else {
      params.set('style', style)
    }
    setSearchParams(params)
  }

  const handleStoneChange = (stone) => {
    setSelectedStone(stone)
    const params = new URLSearchParams(searchParams)
    if (stone === 'all') {
      params.delete('stone')
    } else {
      params.set('stone', stone)
    }
    setSearchParams(params)
  }

  const handleShapeChange = (shape) => {
    setSelectedShape(shape)
    const params = new URLSearchParams(searchParams)
    if (shape === 'all') {
      params.delete('shape')
      params.delete('cut')
    } else {
      params.set('shape', shape)
    }
    setSearchParams(params)
  }

  const handleClearAll = () => {
    setSelectedStyle('all')
    setSelectedStone('all')
    setSelectedShape('all')
    setSearchParams(new URLSearchParams())
  }

  const scrollToRings = () => {
    if (ringsSectionRef.current) {
      ringsSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleChapterClick = (chapterKey) => {
    if (chapterKey === 'solitaire') {
      handleStyleChange('Solitaire')
      scrollToRings()
    } else if (chapterKey === 'halo') {
      handleStyleChange('Halo')
      scrollToRings()
    } else if (chapterKey === 'three-stone') {
      handleStyleChange('Three Stone')
      scrollToRings()
    } else if (chapterKey === 'bespoke') {
      const elem = document.getElementById('whispers-section')
      if (elem) elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const bridalWhatsAppUrl = `https://wa.me/94776100099?text=${encodeURIComponent(
    "Hello AVIORY Atelier, I would love to explore engagement rings and bespoke bridal creations for our love story."
  )}`

  return (
    <div className="love-page">
      {/* ============================================================
          1. CINEMATIC ROMANCE EDITORIAL HERO
          ============================================================ */}
      <section className="love-hero">
        <div className="container love-hero__grid">
          {/* Left Editorial Narrative */}
          <div className="love-hero__content">
            <span className="love-hero__eyebrow">AVIORY &amp; CO. &middot; HAUTE JOAILLERIE BRIDAL</span>
            <h1 className="love-hero__title">Rings for Every Love Story</h1>
            <p className="love-hero__quote">
              &ldquo;Written in the stars, forged in the earth: where rare unheated Ceylon sapphires meet an eternal promise.&rdquo;
            </p>
            <p className="love-hero__narrative">
              We believe every great love begins with a singular truth. In our Colombo atelier, master goldsmiths hand-sculpt 950 platinum and 18K solid gold around certified unheated Ceylon sapphires and rare natural gems &mdash; crafting talismans of devotion that outlast generations.
            </p>

            <div className="love-hero__badges">
              <span className="love-badge">
                <span className="love-badge__dot" /> 100% Unheated Ceylon Provenance
              </span>
              <span className="love-badge">
                <span className="love-badge__dot" /> Hand-Forged 950 Platinum &amp; 18K Gold
              </span>
              <span className="love-badge">
                <span className="love-badge__dot" /> Private Bespoke Engraving
              </span>
            </div>

            <div className="love-hero__actions">
              <button
                type="button"
                className="love-btn love-btn--primary"
                onClick={scrollToRings}
              >
                Explore Engagement Rings &darr;
              </button>
              <a
                href={bridalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="love-btn love-btn--gold"
              >
                WhatsApp Bridal Concierge
              </a>
            </div>
          </div>

          {/* Right Editorial Visual Card */}
          <div className="love-hero__media-wrapper">
            <div className="love-hero__frame">
              <img
                src="/images/rings-for-every-love-story.jpg"
                alt="AVIORY & CO. Engagement Ring Romance"
                className="love-hero__image"
              />
              <div className="love-hero__caption-card">
                <span className="love-caption__tag">ICONIC CREATION</span>
                <h4 className="love-caption__title">The Royal Solitaire</h4>
                <p className="love-caption__desc">Unheated Ceylon Blue Sapphire in Hand-Wrought 950 Platinum</p>
                <Link to="/bespoke" className="love-caption__link">
                  Commission Yours &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. THE FOUR CHAPTERS OF LOVE & CELEBRATION
          ============================================================ */}
      <section className="love-chapters">
        <div className="container">
          <div className="love-chapters__header">
            <span className="love-section-tag">MILESTONES OF ROMANCE</span>
            <h2 className="love-section-title">The Four Chapters of Your Journey</h2>
            <p className="love-section-subtitle">
              From the breath before the question to the decades celebrated together, explore bridal creations curated for each intimate chapter.
            </p>
          </div>

          <div className="love-chapters__grid">
            {/* Chapter 1: The Proposal */}
            <div
              className="love-chapter-card"
              onClick={() => handleChapterClick('solitaire')}
              role="button"
              tabIndex={0}
            >
              <div className="love-chapter-card__image-box">
                <img src="/images/products/ring-sapphire-solitaire.jpg" alt="The Proposal Engagement Ring" />
                <span className="love-chapter-num">CHAPTER I</span>
              </div>
              <div className="love-chapter-card__body">
                <h3 className="love-chapter-card__title">The Proposal</h3>
                <p className="love-chapter-card__desc">
                  Iconic solitaires and cathedral settings showcasing unheated Ceylon sapphires &mdash; the question that changes everything forever.
                </p>
                <span className="love-chapter-card__link">Discover Solitaires &rarr;</span>
              </div>
            </div>

            {/* Chapter 2: The Devotion */}
            <div
              className="love-chapter-card"
              onClick={() => handleChapterClick('halo')}
              role="button"
              tabIndex={0}
            >
              <div className="love-chapter-card__image-box">
                <img src="/images/products/ring-ruby-soleste.jpg" alt="The Devotion Halo Ring" />
                <span className="love-chapter-num">CHAPTER II</span>
              </div>
              <div className="love-chapter-card__body">
                <h3 className="love-chapter-card__title">The Halo of Devotion</h3>
                <p className="love-chapter-card__desc">
                  Intricate halos of hand-set gemstones enveloping rare pigeon blood rubies and padparadscha sapphires with luminous radiance.
                </p>
                <span className="love-chapter-card__link">Explore Halo Designs &rarr;</span>
              </div>
            </div>

            {/* Chapter 3: Trilogy */}
            <div
              className="love-chapter-card"
              onClick={() => handleChapterClick('three-stone')}
              role="button"
              tabIndex={0}
            >
              <div className="love-chapter-card__image-box">
                <img src="/images/products/ring-emerald-solitaire.jpg" alt="Trilogy Three-Stone Ring" />
                <span className="love-chapter-num">CHAPTER III</span>
              </div>
              <div className="love-chapter-card__body">
                <h3 className="love-chapter-card__title">Past, Present &amp; Future</h3>
                <p className="love-chapter-card__desc">
                  The Trilogy setting: three harmonious certified gemstones honoring the journey you have walked and the lifetime ahead.
                </p>
                <span className="love-chapter-card__link">View Trilogy Rings &rarr;</span>
              </div>
            </div>

            {/* Chapter 4: Bespoke */}
            <div
              className="love-chapter-card"
              onClick={() => handleChapterClick('bespoke')}
              role="button"
              tabIndex={0}
            >
              <div className="love-chapter-card__image-box">
                <img src="/images/products/ring-padparadscha.jpg" alt="Bespoke Love Story" />
                <span className="love-chapter-num">CHAPTER IV</span>
              </div>
              <div className="love-chapter-card__body">
                <h3 className="love-chapter-card__title">Your Private Love Story</h3>
                <p className="love-chapter-card__desc">
                  Co-design your dream ring with our master gemmologists, incorporating secret inner gemstones and personal dates.
                </p>
                <span className="love-chapter-card__link">Co-Design With Us &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. ROMANCE MANIFESTO: THE POETRY OF CEYLON SAPPHIRES
          ============================================================ */}
      <section className="love-manifesto">
        <div className="container">
          <div className="love-manifesto__header">
            <span className="love-manifesto__tag">THE TALISMAN OF DEVOTION</span>
            <h2 className="love-manifesto__title">The Poetry of Ceylon Sapphires</h2>
            <div className="love-manifesto__rule" />
            <p className="love-manifesto__sub">
              Why lovers through antiquity have pledged their eternal devotion with the sacred Ceylon gem
            </p>
          </div>

          <div className="love-manifesto__pillars">
            <div className="love-pillar">
              <div className="love-pillar__icon">&hearts;</div>
              <h3 className="love-pillar__title">Celestial Fidelity</h3>
              <p className="love-pillar__text">
                For over two millennia, royalty and romantics have chosen the royal blue sapphire as the timeless symbol of loyalty, truth, and unbroken devotion.
              </p>
            </div>

            <div className="love-pillar">
              <div className="love-pillar__icon">&#9671;</div>
              <h3 className="love-pillar__title">Untouched by Artificial Fire</h3>
              <p className="love-pillar__text">
                Every sapphire in the AVIORY Love Suite is 100% natural and certified unheated &mdash; completely unaltered by human interference, pure and enduring like true love.
              </p>
            </div>

            <div className="love-pillar">
              <div className="love-pillar__icon">&#10022;</div>
              <h3 className="love-pillar__title">One of One in the Cosmos</h3>
              <p className="love-pillar__text">
                Formed deep in Sri Lanka&rsquo;s historic gravels over 500 million years, no two natural gemstones share the exact same crystal fire &mdash; an irreplaceable match for your soulmate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. BRIDAL RING CATALOG WITH INTERACTIVE CURATION
          ============================================================ */}
      <section ref={ringsSectionRef} id="rings-catalog" className="love-catalog-section">
        {/* Controls Toolbar */}
        <div className="love-filters-container">
          <div className="container">
            <div className="love-filters-header">
              <div>
                <span className="love-filter-eyebrow">CURATE YOUR LOVE TALISMAN</span>
                <h3 className="love-filter-title">Filter by Moment, Gemstone &amp; Cut</h3>
              </div>
              {(selectedStyle !== 'all' || selectedStone !== 'all' || selectedShape !== 'all') && (
                <button
                  type="button"
                  className="love-clear-btn"
                  onClick={handleClearAll}
                >
                  Reset All Filters
                </button>
              )}
            </div>

            {/* By Moment / Setting Style */}
            <div className="love-filter-group">
              <span className="love-filter-subheading">Setting Silhouette</span>
              <div className="love-filter-pills">
                {styles.map(style => (
                  <button
                    key={style}
                    type="button"
                    className={`love-filter-pill ${selectedStyle.toLowerCase() === style.toLowerCase() ? 'love-filter-pill--active' : ''}`}
                    onClick={() => handleStyleChange(style)}
                  >
                    {style === 'all' ? 'All Settings' : style}
                  </button>
                ))}
              </div>
            </div>

            {/* By Gemstone Variety */}
            <div className="love-filter-group">
              <span className="love-filter-subheading">Gemstone Heart</span>
              <div className="love-filter-pills">
                {stoneTypes.map(stone => (
                  <button
                    key={stone}
                    type="button"
                    className={`love-filter-pill ${selectedStone.toLowerCase() === stone.toLowerCase() ? 'love-filter-pill--active' : ''}`}
                    onClick={() => handleStoneChange(stone)}
                  >
                    {stone === 'all' ? 'All Gemstones' : stone}
                  </button>
                ))}
              </div>
            </div>

            {/* By Shape / Cut */}
            <div className="love-filter-group">
              <span className="love-filter-subheading">Gemstone Shape</span>
              <div className="love-filter-pills">
                {shapes.map(shape => (
                  <button
                    key={shape}
                    type="button"
                    className={`love-filter-pill ${selectedShape.toLowerCase() === shape.toLowerCase() ? 'love-filter-pill--active' : ''}`}
                    onClick={() => handleShapeChange(shape)}
                  >
                    {shape === 'all' ? 'All Shapes' : shape}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="container love-catalog">
          <div className="love-meta-bar">
            <span className="love-count-text">
              Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? 'handcrafted ring' : 'handcrafted rings'} in the Love Collection
            </span>
            <div className="love-concierge-pill">
              <span>Need guidance selecting your stone?</span>
              <a href={bridalWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                Speak with a Specialist &rarr;
              </a>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="love-product-grid">
              {filtered.map(ring => (
                <ProductCard key={ring.id} product={ring} type="ring" />
              ))}
            </div>
          ) : (
            <div className="love-empty-state">
              <h3>No Rings Match Your Selection</h3>
              <p>We craft bespoke engagement rings to your exact gemstone, metal, and silhouette specifications.</p>
              <div className="love-empty-actions">
                <button
                  type="button"
                  className="love-btn love-btn--primary"
                  onClick={handleClearAll}
                >
                  Clear Filters
                </button>
                <Link to="/bespoke" className="love-btn love-btn--gold">
                  Start a Bespoke Commission
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          5. "WHISPERS IN PLATINUM & GOLD" - BESPOKE LOVE TOUCH
          ============================================================ */}
      <section id="whispers-section" className="love-whispers">
        <div className="container love-whispers__inner">
          <div className="love-whispers__content">
            <span className="love-section-tag">BESPOKE INTIMACY</span>
            <h2 className="love-whispers__title">Whispers in Platinum &amp; Gold</h2>
            <p className="love-whispers__lead">
              A private love language etched into eternal metal.
            </p>
            <p className="love-whispers__body">
              At AVIORY &amp; CO., our master goldsmiths can discreetly set a private birthstone or secret gemstone inside the inner ring band &mdash; touching only the wearer&rsquo;s skin. Complement this with hand-engraved initials, coordinates, or a secret date that only the two of you share.
            </p>

            <ul className="love-whispers__features">
              <li>
                <strong>Secret Inner Gemstone:</strong> A hidden Ceylon ruby or sapphire resting against the pulse.
              </li>
              <li>
                <strong>Master Calligraphy Engraving:</strong> Hand-chiseled script in platinum or solid gold.
              </li>
              <li>
                <strong>Direct Custodial Provenance:</strong> A certified provenance dossier tracing your gem from the mine to your hand.
              </li>
            </ul>

            <div className="love-whispers__cta-box">
              <a
                href={bridalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="love-btn love-btn--gold"
              >
                Inquire on WhatsApp (+94 77 610 0099)
              </a>
              <Link to="/bespoke" className="love-btn love-btn--outline">
                Explore Bespoke Atelier
              </Link>
            </div>
          </div>

          <div className="love-whispers__media">
            <img
              src="/images/the-art-of-the-gift.jpg"
              alt="Bespoke Intimacy & Love Rings"
              className="love-whispers__img"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
