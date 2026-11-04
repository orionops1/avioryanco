import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { engagementRings, fineJewellery } from '../data/products'
import { useLanguage } from '../hooks/useLanguage'
import './Love.css'

export default function Love() {
  const { t } = useLanguage()

  return (
    <>
      {/* HERO SECTION - LOVE COLLECTION */}
      <section className="love-hero">
        <div className="love-hero__content">
          <h1>AVIORY Love Collection</h1>
          <p>Every love story deserves an exceptional beginning</p>
          <span className="love-hero__subtitle">Handcrafted rings celebrating your most cherished moments</span>
        </div>
      </section>

      {/* LOVE MILESTONES SECTION */}
      <section className="love-milestones">
        <div className="container">
          <div className="love-milestones__header">
            <h2>Every Moment Deserves a Masterpiece</h2>
            <p>From first meetings to a lifetime of cherished memories, celebrate each milestone with AVIORY</p>
          </div>

          <div className="love-milestones__grid">
            {/* Milestone 1: The Beginning */}
            <div className="love-milestone-card">
              <div className="love-milestone-card__icon">✨</div>
              <h3>The Beginning</h3>
              <p>Celebrate the moment you knew. Discover fine jewelry and gemstones that mark this precious start.</p>
              <Link to="/fine-jewellery" className="love-milestone-card__link">
                Shop Fine Jewellery
                <span className="arrow">→</span>
              </Link>
            </div>

            {/* Milestone 2: The Proposal */}
            <div className="love-milestone-card">
              <div className="love-milestone-card__icon">💎</div>
              <h3>The Proposal</h3>
              <p>An AVIORY Love Collection ring marks this eternal commitment—handcrafted with Ceylon gemstones.</p>
              <Link to="/love-and-celebration" className="love-milestone-card__link">
                Explore Love & Celebration
                <span className="arrow">→</span>
              </Link>
            </div>

            {/* Milestone 3: The Wedding */}
            <div className="love-milestone-card">
              <div className="love-milestone-card__icon">👑</div>
              <h3>The Wedding</h3>
              <p>Matching bands and bridal jewelry celebrating your vows. Pieces designed to be worn forever.</p>
              <Link to="/love-and-celebration" className="love-milestone-card__link">
                Shop Wedding Bands
                <span className="arrow">→</span>
              </Link>
            </div>

            {/* Milestone 4: Forever & Beyond */}
            <div className="love-milestone-card">
              <div className="love-milestone-card__icon">♾️</div>
              <h3>Forever & Beyond</h3>
              <p>Anniversaries, heirlooms, and the moments that define a life together. Your legacy begins here.</p>
              <Link to="/love-and-celebration" className="love-milestone-card__link">
                Discover Forever Pieces
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AVIORY LOVE COLLECTION */}
      <section className="love-benefits">
        <div className="container">
          <div className="love-benefits__header">
            <h2>Why AVIORY Love Collection</h2>
          </div>

          <div className="love-benefits__grid">
            <div className="love-benefit-card">
              <div className="love-benefit-card__icon">🏛️</div>
              <h3>Handcrafted Heritage</h3>
              <p>Every piece celebrates Sri Lankan gemstone expertise and traditional craftsmanship passed down through generations of master artisans.</p>
            </div>

            <div className="love-benefit-card">
              <div className="love-benefit-card__icon">✨</div>
              <h3>Ceylon Authenticity</h3>
              <p>Center stones from Sri Lanka's most prestigious sapphire and gemstone mines—ethically sourced, certified, and exceptionally rare.</p>
            </div>

            <div className="love-benefit-card">
              <div className="love-benefit-card__icon">💍</div>
              <h3>Lifetime Commitment</h3>
              <p>Each ring is designed to become an heirloom—a symbol of enduring love that transcends generations and stands the test of time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED LOVE & CELEBRATION SHOWCASE */}
      <section className="love-engagement-showcase" id="engagement-showcase">
        <div className="container">
          <h2 className="section-heading">Love & Celebration Collection</h2>
          <div className="products-showcase">
            {engagementRings.slice(0, 4).map(ring => (
              <ProductCard key={ring.id} product={ring} type="engagement" />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <Link to="/love-and-celebration" className="btn btn-outline">
              View All Love & Celebration Rings
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED FINE JEWELLERY */}
      <section className="love-fine-jewellery">
        <div className="container">
          <h2 className="section-heading">Fine Jewellery to Celebrate Your Love</h2>
          <div className="products-showcase">
            {fineJewellery.slice(0, 4).map(item => (
              <ProductCard key={item.id} product={item} type="jewellery" />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <Link to="/fine-jewellery" className="btn btn-outline">
              Explore All Pieces
            </Link>
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION CTA */}
      <section className="love-customization">
        <div className="container">
          <h2>Your Ring, Your Story</h2>
          <p>Every love story is unique. Let us help you create an engagement ring as exceptional as your commitment.</p>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/bespoke/enquiry" className="btn btn-primary">
              Start Custom Design
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

