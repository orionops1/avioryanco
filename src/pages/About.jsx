import React from 'react'
import { Link } from 'react-router-dom'
import { about } from '../data/content'
import './About.css'

export default function About() {
  // Milestones data
  const milestones = [
    {
      year: '2009',
      title: 'Our Foundation',
      description: 'AVIORY & CO was established with a singular mission: to bring the world\'s finest Ceylon sapphires and exceptional fine jewelry to discerning collectors who appreciate true craftsmanship and heritage.'
    },
    {
      year: '2014',
      title: 'Ceylon Heritage Certification',
      description: 'We established our renowned certification program, ensuring every gemstone carries verified proof of Ceylon origin and treatment status, setting a new standard for transparency in luxury gemstone trading.'
    },
    {
      year: '2018',
      title: 'Bespoke Atelier Launch',
      description: 'Opening our master artisan studio, we began creating exclusively bespoke pieces for clients worldwide, combining our gemstone expertise with artisanal jewelry craftsmanship.'
    },
    {
      year: '2023',
      title: 'Global Recognition',
      description: 'AVIORY & CO received international acclaim for our commitment to ethical sourcing and exceptional quality, becoming the go-to luxury brand for Ceylon sapphires among collectors and connoisseurs.'
    }
  ]

  // Icons for values - using unicode symbols
  const valueIcons = ['◆', '✓', '✦', '❤']

  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero__content">
          <span className="about-hero__tagline">Our Heritage</span>
          <h1 className="about-hero__title">{about.title}</h1>
          <p className="about-hero__subtitle">{about.tagline}</p>
          <div className="about-hero__year">Established 2009 • Sri Lanka Heritage</div>
        </div>
      </section>

      {/* HERITAGE SECTION */}
      <section className="about-heritage">
        <div className="about-heritage__grid">
          <div className="about-heritage__content">
            <h2>Ceylon Heritage & Expertise</h2>
            <p>
              AVIORY & CO stands on a foundation of Ceylon heritage that spans over 50 years. Our deep roots in Sri Lanka 
              provide us with unparalleled access to the world's finest gemstone sources. This isn't merely a business – 
              it's a legacy of excellence.
            </p>
            <p>
              Every piece in our collection tells a story of generations of expertise. Our team's knowledge of Ceylon gemstones 
              is unmatched, built through decades of direct relationships with select mining operations and refined through 
              meticulous curation of thousands of exceptional stones.
            </p>
            
            <div className="about-heritage__highlights">
              <div className="about-heritage__highlight">
                <span className="about-heritage__highlight-icon">◆</span>
                <div>
                  <h3>2,000 Years of History</h3>
                  <p>Ceylon gemstones have been treasured by emperors and collectors for millennia, commanding the highest prices globally.</p>
                </div>
              </div>
              <div className="about-heritage__highlight">
                <span className="about-heritage__highlight-icon">✓</span>
                <div>
                  <h3>Direct Source Access</h3>
                  <p>We work with select mining operations in Sri Lanka, ensuring ethical practices and access to exceptional stones others cannot obtain.</p>
                </div>
              </div>
              <div className="about-heritage__highlight">
                <span className="about-heritage__highlight-icon">✦</span>
                <div>
                  <h3>Uncompromising Quality</h3>
                  <p>Every gemstone is hand-selected and verified as authentic Ceylon specimens. We reject thousands to find the exceptional few that meet our standards.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-heritage__visual">
            <span className="about-heritage__visual-icon">🌴</span>
            <h3>Ceylon Provenance</h3>
            <p>
              Sri Lanka's unique geological conditions create sapphires of unparalleled beauty. Our exclusive access to Ceylon's finest sources defines our collection.
            </p>
          </div>
        </div>
      </section>

      {/* ARTISANS SECTION */}
      <section className="about-artisans">
        <div className="about-artisans__header">
          <h2>Master Artisans & Experts</h2>
          <p>
            Our team comprises the world's finest craftspeople, designers, and gemologists. Each brings decades of expertise 
            and an unwavering commitment to perfection.
          </p>
        </div>

        <div className="about-artisans__grid">
          {about.artisans.map((artisan, idx) => (
            <div key={idx} className="about-artisan-card">
              <span className="about-artisan-card__icon">
                {idx === 0 && '🔨'}
                {idx === 1 && '✏️'}
                {idx === 2 && '🔍'}
              </span>
              <h3>{artisan.name}</h3>
              <span className="about-artisan-card__role">{artisan.role}</span>
              <p className="about-artisan-card__background">{artisan.background}</p>
              <p className="about-artisan-card__specialty">Specialty: {artisan.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MILESTONES SECTION */}
      <section className="about-milestones">
        <div className="about-milestones__header">
          <h2>Our Journey</h2>
          <p>
            From our foundation in 2009 to becoming a globally recognized luxury brand, AVIORY & CO has grown through 
            commitment to excellence and authentic craftsmanship.
          </p>
        </div>

        <div className="about-milestones__timeline">
          {milestones.map((milestone, idx) => (
            <div key={idx} className="about-milestone">
              <div className="about-milestone__year">{milestone.year}</div>
              <div className="about-milestone__content">
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="about-values">
        <div className="about-values__header">
          <h2>Our Core Values</h2>
          <p>
            These principles guide every decision we make, every stone we select, and every piece we create.
          </p>
        </div>

        <div className="about-values__grid">
          {about.values.map((value, idx) => (
            <div key={idx} className="about-value-card">
              <span className="about-value-card__icon">{valueIcons[idx]}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="about-cta">
        <div className="about-cta__content">
          <h2>Discover Our Atelier</h2>
          <p>
            Experience the luxury of AVIORY & CO firsthand. Visit our atelier to explore our collection, 
            consult with our gemologists, and meet our master craftspeople.
          </p>
          <div className="about-cta__buttons">
            <Link to="/our-house" className="btn btn-primary">
              Visit Our Atelier
            </Link>
            <Link to="/private-consultations" className="btn btn-secondary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

