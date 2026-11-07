import React, { useState, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import AppointmentModal from '../components/AppointmentModal'
import { gemstones } from '../data/products'
import { useLanguage } from '../hooks/useLanguage'
import { formatPrice } from '../utils/currencyConverter'
import { useContentStore } from '../hooks/useContentStore'
import './TheColourEdit.css'

import { colourFamilies as importedColourFamilies } from '../data/colours'
export const colourFamilies = importedColourFamilies

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
