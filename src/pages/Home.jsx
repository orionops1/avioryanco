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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 4000)
  }

  // Curated High Jewellery and Gemstone Highlights
  const featuredCreations = [
    {
      id: 'bs-001',
      title: 'Royal Ceylon Cushion Sapphire',
      category: 'UNHEATED CEYLON SAPPHIRE',
      specs: '7.42 Carats • Cushion Cut • GRS & Lotus Certified',
      description: 'Exceptional untreated royal blue sapphire with natural crystalline purity from Balangoda, Ceylon.',
      price: 24800,
      image: '/images/editorial/ceylon-sapphire-vault.jpg',
      link: '/gemstones/bs-001'
    },
    {
      id: 'ring-001',
      title: 'The Royal Solitaire Ring',
      category: 'ENGAGEMENT & CELEBRATION',
      specs: '950 Platinum • 3.20ct Unheated Ceylon Sapphire',
      description: 'A timeless solitaire ring hand-wrought in platinum, centering an unheated cornflower blue sapphire.',
      price: 18500,
      image: '/images/most-popular-gifts.jpg',
      link: '/love-and-celebration'
    },
    {
      id: 'pad-001',
      title: 'The Sunset Padparadscha Pendant',
      category: 'HIGH JEWELLERY',
      specs: '18K Yellow Gold • 4.18ct Natural Padparadscha',
      description: 'Delicate lotus-dawn hues mounted in custom-crafted 18k yellow gold, capturing warm candlelight.',
      price: 14200,
      image: '/images/gifts-for-her.jpg',
      link: '/fine-jewellery'
    },
    {
      id: 'teal-001',
      title: 'Ratnapura Emerald-Cut Teal Sapphire',
      category: 'RARE COLLECTOR STONE',
      specs: '5.10 Carats • Emerald Cut • Lotus Master Report',
      description: 'Rare untreated parti-color sapphire displaying oceanic blue and rich emerald green tones.',
      price: 16200,
      image: '/images/gifts-to-engrave.jpg',
      link: '/gemstones'
    }
  ]

  return (
    <div className="aviory-home">
      {/* 1. ATMOSPHERIC HERO BANNER */}
      <HeroVideo
        video="/videos/hero-luxury.mp4"
        poster="/images/hero-banner.jpg"
        eyebrow="AVIORY & CO. • CEYLON ATELIER"
        headline="Handcrafted Ceylon Sapphires & Fine Jewellery"
        subtitle="Exceptional unheated natural gemstones and bespoke creations, born deep beneath Sri Lankan earth and crafted by master goldsmiths."
        primaryCta={{ label: "EXPLORE FINE JEWELLERY", href: "/fine-jewellery" }}
        secondaryCta={{ label: "BOOK A CONSULTATION →", href: "/private-consultations" }}
      />

      {/* 2. THE TWO SIGNATURE HOUSES (TIFFANY-STYLE 2-COLUMN SPLIT) */}
      <section className="home-two-houses-section" aria-label="Signature Collections">
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">SIGNATURE COLLECTIONS</span>
            <h2 className="section-title">The Art of Fine Jewellery &amp; Engagement</h2>
            <p className="section-subtitle">
              Each piece is handcrafted in our atelier using ethically sourced precious metals and certified unheated Ceylon gemstones.
            </p>
          </div>

          <div className="two-houses-grid">
            {/* HOUSE 1: LOVE & CELEBRATION */}
            <div className="house-card">
              <div 
                className="house-card__image-wrap"
                style={{ backgroundImage: 'url(/images/most-popular-gifts.jpg)' }}
              >
                <div className="house-card__overlay" />
              </div>
              <div className="house-card__content">
                <span className="house-card__eyebrow">THE ENGAGEMENT COLLECTION</span>
                <h3 className="house-card__title">Celebration &amp; Engagement Rings</h3>
                <p className="house-card__desc">
                  Solitaire, halo, and three-stone rings crafted with unheated royal blue Ceylon sapphires and certified diamonds, designed to celebrate lifetime commitments.
                </p>
                <Link to="/love-and-celebration" className="btn-luxury-outline">
                  EXPLORE ENGAGEMENT RINGS →
                </Link>
              </div>
            </div>

            {/* HOUSE 2: HIGH JEWELLERY */}
            <div className="house-card">
              <div 
                className="house-card__image-wrap"
                style={{ backgroundImage: 'url(/images/gifts-for-her.jpg)' }}
              >
                <div className="house-card__overlay" />
              </div>
              <div className="house-card__content">
                <span className="house-card__eyebrow">HIGH JEWELLERY ATELIER</span>
                <h3 className="house-card__title">Fine Jewellery Masterpieces</h3>
                <p className="house-card__desc">
                  Pendants, earrings, tennis bracelets, and cuffs sculpted by Ceylon goldsmiths, celebrating pure gold and vibrant natural gemstones.
                </p>
                <Link to="/fine-jewellery" className="btn-luxury-outline">
                  EXPLORE FINE JEWELLERY →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE BESPOKE EXPERIENCE (CLEAN LUXURY CRAFT) */}
      <section className="home-bespoke-section" aria-label="The Bespoke Experience">
        <div className="container">
          <div className="bespoke-intro-box">
            <span className="editorial-eyebrow">BESPOKE ATELIER</span>
            <h2 className="section-title">Crafted Exclusively For You</h2>
            <p className="section-subtitle">
              Every love story and milestone deserves a singular creation. Collaborate directly with our gemologists and master artisans to create a bespoke heirloom.
            </p>
          </div>

          <div className="bespoke-steps-grid">
            <div className="bespoke-step-card">
              <span className="bespoke-step-number">01</span>
              <h4 className="bespoke-step-title">Select Your Gemstone</h4>
              <p className="bespoke-step-desc">
                Choose from our private inventory of unheated Ceylon sapphires, padparadschas, rubies, and certified diamonds, sourced directly from Sri Lankan mines.
              </p>
            </div>

            <div className="bespoke-step-card">
              <span className="bespoke-step-number">02</span>
              <h4 className="bespoke-step-title">Custom Design &amp; Setting</h4>
              <p className="bespoke-step-desc">
                Our designers create hand sketches and 3D architectural renders of your setting, tailored to your aesthetic in platinum, yellow gold, or rose gold.
              </p>
            </div>

            <div className="bespoke-step-card">
              <span className="bespoke-step-number">03</span>
              <h4 className="bespoke-step-title">Master Goldsmith Craft</h4>
              <p className="bespoke-step-desc">
                Hand-wrought in our Colombo atelier with meticulous stone-setting, optional private inner engravings, and an international lifetime craftsmanship guarantee.
              </p>
            </div>
          </div>

          <div className="bespoke-action-row">
            <Link to="/bespoke/enquiry" className="btn-luxury-primary">
              START YOUR BESPOKE COMMISSION
            </Link>
            <Link to="/bespoke/process" className="link-text-gold">
              LEARN ABOUT OUR PROCESS &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4. HIGH JEWELLERY & RARE CEYLON GEMSTONES (CURATED EXHIBITS) */}
      <section className="home-curated-gems-section" aria-label="Curated Gemstones and Creations">
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">EXCEPTIONAL SPECIMENS</span>
            <h2 className="section-title">Rare Unheated Ceylon Gemstones</h2>
            <p className="section-subtitle">
              Untouched by thermal enhancement. Each stone is certified by GIA, GRS, or Lotus Gemology, preserving its natural color and crystalline brilliance.
            </p>
          </div>

          <div className="curated-gems-grid">
            {featuredCreations.map((item) => (
              <article key={item.id} className="gem-product-card">
                <div className="gem-product-card__media">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="gem-product-card__img" 
                    loading="lazy"
                  />
                  <span className="gem-product-card__badge">100% UNHEATED</span>
                </div>
                <div className="gem-product-card__body">
                  <span className="gem-product-card__category">{item.category}</span>
                  <h3 className="gem-product-card__title">
                    <Link to={item.link}>{item.title}</Link>
                  </h3>
                  <p className="gem-product-card__specs">{item.specs}</p>
                  <p className="gem-product-card__desc">{item.description}</p>
                  <div className="gem-product-card__footer">
                    <span className="gem-product-card__price">{formatPrice(item.price, currency)}</span>
                    <Link to={item.link} className="gem-product-card__btn">
                      VIEW PIECE &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="gems-view-all-wrap">
            <Link to="/gemstones" className="btn-luxury-outline">
              VIEW ALL GEMSTONES
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY AVIORY & CO. (OUR PROVENANCE & VALUES) */}
      <section className="home-heritage-section" aria-label="Our Heritage & Provenance">
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">OUR HERITAGE</span>
            <h2 className="section-title">The Hallmarks of Aviory &amp; Co.</h2>
            <p className="section-subtitle">
              Built on transparency, ethical sourcing, and more than two millennia of Sri Lankan gemological history.
            </p>
          </div>

          <div className="heritage-hallmarks-grid">
            <div className="hallmark-card">
              <span className="hallmark-card__tag">AUTHENTICITY</span>
              <h3 className="hallmark-card__title">100% Unheated Corundum</h3>
              <p className="hallmark-card__desc">
                Less than one percent of sapphires unearthed worldwide enter the market without furnace heat treatment. We curate only untreated, natural crystals.
              </p>
            </div>

            <div className="hallmark-card">
              <span className="hallmark-card__tag">RESPONSIBILITY</span>
              <h3 className="hallmark-card__title">Single-Mine Custody</h3>
              <p className="hallmark-card__desc">
                Direct mine-to-hand sourcing from licensed artisanal alluvial deposits in Balangoda and Ratnapura, supporting local lapidary communities.
              </p>
            </div>

            <div className="hallmark-card">
              <span className="hallmark-card__tag">CRAFTSMANSHIP</span>
              <h3 className="hallmark-card__title">Generational Goldsmiths</h3>
              <p className="hallmark-card__desc">
                Every bespoke ring and high-jewelry piece is forged by master goldsmiths in Sri Lanka, honoring classical techniques with modern precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VISIT OUR ATELIER & PRIVATE CONSULTATIONS */}
      <section className="home-consultation-section" aria-label="Private Consultations">
        <div className="container">
          <div className="consultation-card">
            <span className="editorial-eyebrow">COLOMBO ATELIER &amp; WORLDWIDE</span>
            <h2 className="consultation-title">Book a Private Appointment</h2>
            <p className="consultation-lead">
              We invite you to experience our collection through an unhurried, one-on-one consultation with our gemologists in our Colombo atelier, or via a private 4K virtual appointment worldwide.
            </p>
            <div className="consultation-actions">
              <button 
                type="button" 
                className="btn-luxury-primary"
                onClick={() => setAppointmentModalOpen(true)}
              >
                BOOK A PRIVATE CONSULTATION
              </button>
              <Link to="/our-house" className="btn-luxury-outline">
                DISCOVER OUR HOUSE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FROM OUR JOURNAL (EDITORIAL KNOWLEDGE) */}
      <section className="home-journal-section" aria-label="From Our Journal">
        <div className="container">
          <div className="section-header-centered">
            <span className="editorial-eyebrow">EDITORIAL &amp; KNOWLEDGE</span>
            <h2 className="section-title">From Our Journal</h2>
            <p className="section-subtitle">
              Gemological guides, jewelry care, and provenance dispatches from our chief gemologist.
            </p>
          </div>

          <div className="journal-articles-grid">
            <article className="journal-card">
              <span className="journal-card__category">GEMOLOGY GUIDE</span>
              <h3 className="journal-card__title">
                <Link to="/journal/unheated-ceylon-sapphires">Understanding Unheated Ceylon Sapphires</Link>
              </h3>
              <p className="journal-card__excerpt">
                Why thermal treatment alters natural gemstones, and how to verify untreated crystalline authenticity with GIA and Lotus laboratory reports.
              </p>
              <span className="journal-card__meta">6 min read &bull; By Chief Gemologist</span>
            </article>

            <article className="journal-card">
              <span className="journal-card__category">BRIDAL &amp; RINGS</span>
              <h3 className="journal-card__title">
                <Link to="/journal/designing-your-dream-ring">The Complete Engagement Ring Guide</Link>
              </h3>
              <p className="journal-card__excerpt">
                From solitaire profiles to three-stone arrangements, explore how to pair the ideal Ceylon sapphire with high-grade precious metals.
              </p>
              <span className="journal-card__meta">8 min read &bull; By Atelier Master</span>
            </article>

            <article className="journal-card">
              <span className="journal-card__category">HERITAGE &amp; ORIGIN</span>
              <h3 className="journal-card__title">
                <Link to="/journal/sri-lankan-sapphire-heritage">The Two-Millennia Legacy of Ceylon Gems</Link>
              </h3>
              <p className="journal-card__excerpt">
                Tracing the ancient gem gravels of Ratnapura and Balangoda that have supplied royal collections across Europe, Asia, and the Middle East.
              </p>
              <span className="journal-card__meta">5 min read &bull; By Aviory Journal</span>
            </article>
          </div>

          <div className="journal-footer-wrap">
            <Link to="/journal" className="link-text-gold">
              READ ALL ARTICLES &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 8. THE AVIORY CIRCLE (NEWSLETTER) */}
      <section className="home-newsletter-section" aria-label="Newsletter">
        <div className="container">
          <div className="newsletter-inner">
            <span className="editorial-eyebrow">STAY INFORMED</span>
            <h2 className="newsletter-title">Join the Aviory Circle</h2>
            <p className="newsletter-desc">
              Receive private previews of newly acquired unheated Ceylon gemstones, bespoke commission invitations, and editorial journal stories.
            </p>

            {subscribed ? (
              <div className="newsletter-success">
                Thank you for subscribing. We look forward to sharing our latest creations with you.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-luxury-primary">
                  SUBSCRIBE
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
