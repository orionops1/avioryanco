import { CONTACT_CONFIG } from '../constants/contact'
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

  const bridalWhatsAppUrl = CONTACT_CONFIG.buildWhatsAppUrl("Hello AVIORY Atelier, I am seeking a creation for an intimate love story. I would love to explore your bespoke rings and private covenants.")

  return (
    <div className="love-page">
      {/* ============================================================
          1. CINEMATIC SENSUAL HERO — CLOSER THAN WORDS
          ============================================================ */}
      <section className="love-hero">
        <div className="container love-hero__grid">
          {/* Left Intimate Editorial Narrative */}
          <div className="love-hero__content">
            <span className="love-hero__eyebrow">AVIORY &amp; CO. &middot; DESIRE, MADE REAL.</span>
            <h1 className="love-hero__title">Closer Than Words</h1>
            <p className="love-hero__quote">
              &ldquo;Before the question is asked, there is a silence so full it needs a body to hold it. We do not sell jewellery. We make desire real.&rdquo;
            </p>
            <p className="love-hero__narrative">
              Real passion refuses to be rushed, manufactured, or copied. A vow isn't spoken once. It is carried daily against your pulse. Each solitary creation holds an unspoken covenant&mdash;forged for the skin that remembers you.
            </p>

            <div className="love-hero__badges">
              <span className="love-badge">
                <span className="love-badge__dot" /> The Secret Pulse Covenant
              </span>
              <span className="love-badge">
                <span className="love-badge__dot" /> Solitary One-of-One Creations
              </span>
              <span className="love-badge">
                <span className="love-badge__dot" /> Secret Inner Gemstone &amp; Private Engraving
              </span>
            </div>

            <div className="love-hero__actions">
              <button
                type="button"
                className="love-btn love-btn--primary"
                onClick={scrollToRings}
              >
                Explore Rings of Devotion &darr;
              </button>
              <a
                href={bridalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="love-btn love-btn--gold"
              >
                Begin Private Consultation
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
                <span className="love-caption__tag">TALISMAN OF DESIRE</span>
                <h4 className="love-caption__title">The Royal Solitaire</h4>
                <p className="love-caption__desc">Solitary Midnight Covenant resting against her skin</p>
                <Link to="/bespoke" className="love-caption__link">
                  Commission Yours &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. THE FOUR INTIMATE CHAPTERS OF YOUR DESIRE
          ============================================================ */}
      <section className="love-chapters">
        <div className="container">
          <div className="love-chapters__header">
            <span className="love-section-tag">CHRONICLES OF DEVOTION</span>
            <h2 className="love-section-title">The Four Chapters of Your Story</h2>
            <p className="love-section-subtitle">
              From the breathless confession in the quiet to a lifetime lived skin to skin &mdash; explore creations designed for the moments language cannot reach.
            </p>
          </div>

          <div className="love-chapters__grid">
            {/* Chapter 1: The Confession */}
            <div
              className="love-chapter-card"
              onClick={() => handleChapterClick('solitaire')}
              role="button"
              tabIndex={0}
            >
              <div className="love-chapter-card__image-box">
                <img src="/images/products/ring-sapphire-solitaire.jpg" alt="The Confession Ring" />
                <span className="love-chapter-num">CHAPTER I</span>
              </div>
              <div className="love-chapter-card__body">
                <h3 className="love-chapter-card__title">The Confession</h3>
                <p className="love-chapter-card__desc">
                  Iconic cathedral solitaires bearing solitary covenants of devotion. The moment when words stop and everything changes.
                </p>
                <span className="love-chapter-card__link">Discover Solitaires &rarr;</span>
              </div>
            </div>

            {/* Chapter 2: The Burning Circle */}
            <div
              className="love-chapter-card"
              onClick={() => handleChapterClick('halo')}
              role="button"
              tabIndex={0}
            >
              <div className="love-chapter-card__image-box">
                <img src="/images/products/ring-ruby-soleste.jpg" alt="The Burning Circle Halo Ring" />
                <span className="love-chapter-num">CHAPTER II</span>
              </div>
              <div className="love-chapter-card__body">
                <h3 className="love-chapter-card__title">The Burning Circle</h3>
                <p className="love-chapter-card__desc">
                  Luminous halos embracing Ceylon rubies and rare sunset padparadschas &mdash; passion given a radiant, unbroken crown.
                </p>
                <span className="love-chapter-card__link">Explore Halos &rarr;</span>
              </div>
            </div>

            {/* Chapter 3: An Unbroken Life */}
            <div
              className="love-chapter-card"
              onClick={() => handleChapterClick('three-stone')}
              role="button"
              tabIndex={0}
            >
              <div className="love-chapter-card__image-box">
                <img src="/images/products/ring-emerald-solitaire.jpg" alt="An Unbroken Life Trilogy Ring" />
                <span className="love-chapter-num">CHAPTER III</span>
              </div>
              <div className="love-chapter-card__body">
                <h3 className="love-chapter-card__title">An Unbroken Life</h3>
                <p className="love-chapter-card__desc">
                  The Trilogy setting: three harmonious stones of memory honouring what you were, who you are together, and what will outlive you both.
                </p>
                <span className="love-chapter-card__link">View Trilogy Rings &rarr;</span>
              </div>
            </div>

            {/* Chapter 4: Pure Intimacy */}
            <div
              className="love-chapter-card"
              onClick={() => handleChapterClick('bespoke')}
              role="button"
              tabIndex={0}
            >
              <div className="love-chapter-card__image-box">
                <img src="/images/products/ring-padparadscha.jpg" alt="Pure Intimacy Bespoke Ring" />
                <span className="love-chapter-num">CHAPTER IV</span>
              </div>
              <div className="love-chapter-card__body">
                <h3 className="love-chapter-card__title">Pure Intimacy</h3>
                <p className="love-chapter-card__desc">
                  One-of-one bespoke design. Secret birthstones set against the pulse point, hand-engraved love notes, and custom metalwork.
                </p>
                <span className="love-chapter-card__link">Begin Bespoke Collaboration &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. MANIFESTO OF DEVOTION: UNCOMPROMISED & PURE
          ============================================================ */}
      <section className="love-manifesto">
        <div className="container">
          <div className="love-manifesto__header">
            <span className="love-manifesto__tag">THE ANATOMY OF REAL DEVOTION</span>
            <h2 className="love-manifesto__title">Untouched by Artificial Fire</h2>
            <div className="love-manifesto__rule" />
            <p className="love-manifesto__sub">
              Why lovers through antiquity choose Ceylon&rsquo;s unheated gemstones: because real love refuses to be manufactured
            </p>
          </div>

          <div className="love-manifesto__pillars">
            <div className="love-pillar">
              <div className="love-pillar__icon">&#10022;</div>
              <h3 className="love-pillar__title">Pure &amp; Unaltered</h3>
              <p className="love-pillar__text">
                More than 99% of global sapphires are heated and artificially treated. We work exclusively with the unheated miracle &mdash; as pure, raw, and unapologetic as real desire.
              </p>
            </div>

            <div className="love-pillar">
              <div className="love-pillar__icon">&hearts;</div>
              <h3 className="love-pillar__title">Worn Where You Are Felt</h3>
              <p className="love-pillar__text">
                Crafted not to impress a crowd from across a room, but to live against the warmth of skin. Jewellery designed for the one person allowed close enough to touch it.
              </p>
            </div>

            <div className="love-pillar">
              <div className="love-pillar__icon">&#9671;</div>
              <h3 className="love-pillar__title">Cosmic Singularity</h3>
              <p className="love-pillar__text">
                Formed 50 million years ago in Ceylon&rsquo;s crystalline earth, no two natural creations share the same heart. An irreplaceable reflection of the person you chose.
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
                <h3 className="love-filter-title">Find the Ring of Your Story</h3>
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
                    {style === 'all' ? 'All Silhouettes' : style}
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
                    {shape === 'all' ? 'All Cuts' : shape}
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
              Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? 'creation' : 'creations'} in the Love Collection
            </span>
            <div className="love-concierge-pill">
              <span>Have a specific stone in mind?</span>
              <a href={bridalWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                Speak with a Gemmologist &rarr;
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
              <h3>Every Love is One of One</h3>
              <p>No existing ring matches this exact combination. Through our Pure Intimacy bespoke service, we will hand-craft it specifically for you.</p>
              <div className="love-empty-actions">
                <button
                  type="button"
                  className="love-btn love-btn--primary"
                  onClick={handleClearAll}
                >
                  Clear Filters
                </button>
                <Link to="/bespoke" className="love-btn love-btn--gold">
                  Start Bespoke Collaboration
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          5. PURE INTIMACY — WHISPERS IN PLATINUM & GOLD
          ============================================================ */}
      <section id="whispers-section" className="love-whispers">
        <div className="container love-whispers__inner">
          <div className="love-whispers__content">
            <span className="love-section-tag">PURE INTIMACY &bull; THE BESPOKE PROGRAMME</span>
            <h2 className="love-whispers__title">Whispers in Platinum &amp; Gold</h2>
            <p className="love-whispers__lead">
              A private language etched into metal, hidden where only skin can feel it.
            </p>
            <p className="love-whispers__body">
              True intimacy is never performative. At AVIORY &amp; CO., our artisans discreetly set The Heartbeat Gem™ &mdash; a Ceylon ruby or sapphire &mdash; inside the inner band of your ring, resting directly against the wearer&rsquo;s pulse. Add hand-chiseled coordinates of where your hands first met, or a date that belongs to nobody else on earth.
            </p>

            <ul className="love-whispers__features">
              <li>
                <strong>Secret Inner Gemstone:</strong> A hidden Ceylon jewel resting unseen against the pulse point.
              </li>
              <li>
                <strong>Private Hand Engraving:</strong> Micro-chiseled script resting on the inner curve of the band.
              </li>
              <li>
                <strong>Direct Provenance Dossier:</strong> Provenance custody tracing your piece from Sri Lankan earth directly to her skin.
              </li>
            </ul>

            <div className="love-whispers__cta-box">
              <a
                href={bridalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="love-btn love-btn--gold"
              >
                Begin Bespoke Conversation
              </a>
              <Link to="/bespoke" className="love-btn love-btn--outline">
                Explore The Bespoke Atelier
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
