import React, { useState, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import AppointmentModal from '../components/AppointmentModal'
import { gemstones } from '../data/products'
import { useLanguage } from '../hooks/useLanguage'
import { formatPrice } from '../utils/currencyConverter'
import { useContentStore } from '../hooks/useContentStore'
import './TheColourEdit.css'

export const colourFamilies = [
  {
    id: 'blue',
    editorialName: 'THE DEPTH OF BLUE',
    colourFamily: 'Blue',
    tagline: 'A colour with presence. A feeling that stays.',
    description: 'From midnight oceanic depths to calm cornflower mornings, Ceylon blue sapphires hold light with a quiet, undeniable authority. Untouched by artificial heat, their depth lives in unbroken silence.',
    image: '/images/colour-edit/depth_of_blue.jpg',
    colorHex: '#1B3B6F',
    filterKeywords: ['blue', 'royal', 'cornflower']
  },
  {
    id: 'pink',
    editorialName: 'THE ART OF BLUSH',
    colourFamily: 'Pink',
    tagline: 'Soft at first glance. Impossible to forget.',
    description: 'Delicate dawn pastels and vibrant lotus blossoms. Pink stones hold the gentle warmth of flushed skin and unspoken affection—radiant, modern, and profoundly intimate.',
    image: '/images/colour-edit/art_of_blush.jpg',
    colorHex: '#D87093',
    filterKeywords: ['pink', 'blush', 'pastel']
  },
  {
    id: 'padparadscha',
    editorialName: 'BETWEEN ROSE & SUNSET',
    colourFamily: 'Padparadscha tones',
    tagline: 'A meeting of warmth, colour and fascination.',
    description: 'The rarest natural gem in the world—born only beneath Sri Lankan earth. An ethereal marriage of delicate lotus pink and golden sunrise orange that shifts with the light of every room.',
    image: '/images/colour-edit/between_rose_sunset.jpg',
    colorHex: '#E2725B',
    filterKeywords: ['padparadscha', 'sunset', 'lotus']
  },
  {
    id: 'yellow',
    editorialName: 'A LITTLE SUNLIGHT',
    colourFamily: 'Yellow',
    tagline: 'Golden warmth that brings light to skin.',
    description: 'Like honeyed morning light streaming across linen. Ceylon yellow sapphires glow with an inner fire that brings extraordinary radiance and optimism against bare skin.',
    image: '/images/colour-edit/a_little_sunlight.jpg',
    colorHex: '#DAA520',
    filterKeywords: ['yellow', 'golden', 'canary']
  },
  {
    id: 'red',
    editorialName: 'THE HEAT OF RED',
    colourFamily: 'Red',
    tagline: 'Fierce devotion and unbroken passion.',
    description: 'Rare Ceylon rubies holding intense natural fluorescence. Under low candlelight, the crimson crystal awakens with an ardent glow that mirrors the unspoken heat of devotion.',
    image: '/images/colour-edit/the_heat_of_red.jpg',
    colorHex: '#8B0000',
    filterKeywords: ['ruby', 'rubies', 'red', 'crimson']
  },
  {
    id: 'violet',
    editorialName: 'AFTER DUSK',
    colourFamily: 'Violet & deep tones',
    tagline: 'Mysterious, quiet, and hypnotic.',
    description: 'Cobalt spinels and twilight-hued violet stones. For the one captivated by the hour when day surrenders to night—unconventional, rare, and deeply poetic.',
    image: '/images/colour-edit/after_dusk.jpg',
    colorHex: '#483D8B',
    filterKeywords: ['spinel', 'violet', 'purple', 'other']
  }
]

export default function TheColourEdit() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { currency } = useLanguage()
  const { content } = useContentStore()
  const colourEditSection = content?.colourEditSection || {}
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)

  const families = useMemo(() => {
    if (!colourEditSection.families || colourEditSection.families.length === 0) {
      return colourFamilies
    }
    return colourFamilies.map((defFam, idx) => {
      const storeFam = colourEditSection.families.find(f => f.id === defFam.id) || colourEditSection.families[idx]
      return storeFam ? { ...defFam, ...storeFam } : defFam
    })
  }, [colourEditSection])

  const activeColorId = searchParams.get('color') || 'blue'

  const activeFamily = useMemo(() => {
    return families.find(f => f.id === activeColorId) || families[0]
  }, [families, activeColorId])

  const handleSelectColor = (colorId) => {
    setSearchParams({ color: colorId })
    const el = document.getElementById('colour-showcase')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Filter available stones matching active color keywords
  const matchingStones = useMemo(() => {
    return gemstones.filter(stone => {
      const stoneText = `${stone.name} ${stone.category} ${stone.color || ''}`.toLowerCase()
      return (activeFamily.filterKeywords || []).some(kw => stoneText.includes(kw))
    })
  }, [activeFamily])

  return (
    <div className="colour-edit-page">
      {/* ====================================================================
          1. HERO — A WORLD OF COLOUR, WITH A STORY OF ITS OWN
          ==================================================================== */}
      <section className="colour-edit-hero">
        <div className="container">
          <span className="editorial-eyebrow">{colourEditSection.eyebrow || "THE COLOUR EDIT"}</span>
          <h1 className="colour-edit-hero__title">
            {colourEditSection.headline || "A WORLD OF COLOUR, WITH A STORY OF ITS OWN."}
          </h1>
          <p className="colour-edit-hero__subtitle">
            {colourEditSection.subtitle || "Some colours catch your eye. Others stay with you."}
          </p>
          <p className="colour-edit-hero__lead">
            We do not believe in cold technical catalogues. Every colour in the Aviory universe carries its own character, mood, and fascination—pulled straight from Sri Lankan earth and cut to dance under low candlelight.
          </p>
        </div>
      </section>

      {/* ====================================================================
          2. THE SIX COLOUR FAMILIES (Horizontal Multi-Card Selector)
          ==================================================================== */}
      <section className="colour-families-nav-section">
        <div className="container">
          <div className="colour-families-grid">
            {families.map((fam) => (
              <button
                key={fam.id}
                type="button"
                className={`colour-family-card ${activeColorId === fam.id ? 'colour-family-card--active' : ''}`}
                onClick={() => handleSelectColor(fam.id)}
              >
                <div className="colour-family-card__media">
                  <img src={fam.image} alt={fam.editorialName} />
                  <div className="colour-family-card__overlay" />
                  <span className="colour-family-card__swatch" style={{ backgroundColor: fam.colorHex }} />
                </div>
                <div className="colour-family-card__info">
                  <span className="colour-family-card__badge">{fam.colourFamily}</span>
                  <h3 className="colour-family-card__name">{fam.editorialName}</h3>
                  <p className="colour-family-card__tagline">{fam.tagline}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. ACTIVE COLOUR EDITORIAL SHOWCASE
          ==================================================================== */}
      <section id="colour-showcase" className="colour-showcase-section">
        <div className="container">
          {/* Active Family Editorial Introduction */}
          <div className="colour-showcase__header">
            <span className="editorial-eyebrow" style={{ color: activeFamily.colorHex }}>
              {activeFamily.colourFamily.toUpperCase()} SPECTRUM
            </span>
            <h2 className="section-title">{activeFamily.editorialName}</h2>
            <p className="colour-showcase__quote">
              &ldquo;{activeFamily.tagline}&rdquo;
            </p>
            <p className="colour-showcase__desc">
              {activeFamily.description}
            </p>
          </div>

          {/* Curated Stones in This Colour */}
          <div className="colour-stones-grid">
            {matchingStones.length > 0 ? (
              matchingStones.map((stone) => (
                <div key={stone.id} className="colour-stone-card">
                  <div className="colour-stone-card__media">
                    <img 
                      src={stone.images?.[0] || stone.image} 
                      alt={stone.name} 
                      className="colour-stone-card__img"
                    />
                    <span className="colour-stone-card__badge">CERTIFIED SINGULAR</span>
                  </div>
                  <div className="colour-stone-card__body">
                    <span className="colour-stone-card__cut">{stone.shape || 'Cushion Cut'}</span>
                    <h3 className="colour-stone-card__name">{stone.name}</h3>
                    <p className="colour-stone-card__desc">{stone.description}</p>
                    <div className="colour-stone-card__footer">
                      <span className="colour-stone-card__price">
                        {formatPrice(stone.price, currency)}
                      </span>
                      <Link to={`/gemstones/${stone.id}`} className="btn-luxury-primary btn-small">
                        VIEW SPECIMEN
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="colour-empty-state">
                <p>New rare singular stones are continually unearthed from Sri Lanka.</p>
                <button 
                  type="button" 
                  className="btn-luxury-primary"
                  onClick={() => setAppointmentModalOpen(true)}
                >
                  ENQUIRE FOR PRIVATE RESERVE {activeFamily.editorialName}
                </button>
              </div>
            )}
          </div>

          {/* Bespoke Invitation Around This Colour */}
          <div className="colour-bespoke-invite">
            <div className="colour-bespoke-invite__content">
              <span className="editorial-eyebrow">CREATION INTIMACY</span>
              <h3 className="colour-bespoke-invite__title">
                Commission a One-of-One Piece in {activeFamily.colourFamily}
              </h3>
              <p className="colour-bespoke-invite__text">
                Have you fallen for {activeFamily.editorialName}? Work directly with our master artisans to sculpt this exact hue into a bespoke solitaire ring, collar, or private pulse covenant.
              </p>
              <div className="colour-bespoke-invite__actions">
                <Link to="/bespoke/enquiry" className="btn-luxury-primary">
                  BEGIN YOUR BESPOKE STORY
                </Link>
                <button 
                  type="button" 
                  className="btn-luxury-outline"
                  onClick={() => setAppointmentModalOpen(true)}
                >
                  RESERVE SALON VIEWING
                </button>
              </div>
            </div>
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
