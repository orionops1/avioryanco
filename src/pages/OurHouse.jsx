import React from 'react'
import { Link } from 'react-router-dom'
import { about, ceylonHeritage } from '../data/content'
import './OurHouse.css'

export default function OurHouse() {
  return (
    <div className="our-house-page">
      {/* 1. HERO — Pure High Jewellery Heritage */}
      <section style={{
        backgroundColor: '#111111',
        color: '#F8F4EF',
        padding: 'clamp(4rem, 8vw, 6.5rem) 0',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span style={{
            display: 'block',
            fontSize: '0.72rem',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#D4AF7F',
            marginBottom: '0.75rem',
            fontWeight: 600
          }}>
            {about.tagline}
          </span>
          <h1 style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
            fontWeight: 400,
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginBottom: '1rem'
          }}>
            The House of Aviory
          </h1>
          <p style={{
            fontFamily: 'var(--font-serif-body)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
            color: '#D4AF7F',
            marginBottom: '1.25rem',
            letterSpacing: '0.04em'
          }}>
            {about.slogan}
          </p>
          <p style={{
            fontSize: '1rem',
            color: '#D0CCBE',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto'
          }}>
            {about.description}
          </p>
        </div>
      </section>

      {/* 2. THE CREDO & MANIFESTO */}
      <section className="container" style={{ padding: 'clamp(3.5rem, 6vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            display: 'block',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#B8996A',
            marginBottom: '0.75rem',
            fontWeight: 600
          }}>
            OUR HOUSE CREDO
          </span>
          <blockquote style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            lineHeight: 1.4,
            color: '#111111',
            fontWeight: 400,
            margin: '0 0 2rem',
            fontStyle: 'italic'
          }}>
            "{about.credo}"
          </blockquote>
          <p style={{
            fontFamily: 'var(--font-serif-body)',
            fontSize: '1.25rem',
            lineHeight: 1.8,
            color: '#444444'
          }}>
            Jewellery is not an ornament. It is a confession worn where blood beats closest to the surface. Since 2009, our maison has preserved the sacred heritage of Sri Lanka's unheated gemstones — stones formed two billion years ago, brought to light with zero thermal alteration.
          </p>
        </div>
      </section>

      {/* 3. FOUR CORNERSTONES */}
      <section style={{ backgroundColor: '#F8F4EF', padding: 'clamp(3.5rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
            <span style={{
              display: 'block',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#A68563',
              marginBottom: '0.5rem',
              fontWeight: 600
            }}>
              PRINCIPLES OF THE MAISON
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 400,
              color: '#111111'
            }}>
              The Four Cornerstones
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {about.values.map((v, idx) => (
              <div key={idx} style={{
                backgroundColor: '#FFFFFF',
                padding: '2rem 1.5rem',
                border: '1px solid #E8E3DC',
                borderTop: '3px solid #D4AF7F'
              }}>
                <h4 style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.2rem',
                  marginBottom: '0.75rem',
                  color: '#111111'
                }}>
                  {v.title}
                </h4>
                <p style={{ color: '#555555', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CEYLON HERITAGE — 2,000+ Years */}
      <section style={{ backgroundColor: '#111111', color: '#F8F4EF', padding: 'clamp(3.5rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'block',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#D4AF7F',
              marginBottom: '0.5rem'
            }}>
              SACRED SOIL
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              color: '#FFFFFF',
              fontWeight: 400,
              marginBottom: '1rem'
            }}>
              A Heritage Written in Colour
            </h2>
            <p style={{
              color: '#EDE7DC',
              fontSize: '1rem',
              lineHeight: 1.7,
              maxWidth: '650px',
              margin: '0 auto',
              opacity: 0.9
            }}>
              For over two millennia, the river gravels of Sri Lanka have yielded sapphires of celestial purity. Roman emperors, Persian monarchs, and British royalty sought Ceylon gems for one singular reason: fire born purely of the earth.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            {ceylonHeritage.sections.map((section, idx) => (
              <div key={idx} style={{
                backgroundColor: '#1C1C1C',
                padding: '1.75rem',
                border: '1px solid #333333'
              }}>
                <h4 style={{
                  fontFamily: 'var(--font-serif-display)',
                  color: '#D4AF7F',
                  fontSize: '1.15rem',
                  marginBottom: '0.5rem'
                }}>
                  {section.title}
                </h4>
                <p style={{ color: '#CCCCCC', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HERITAGE TIMELINE (EST. 2009) */}
      <section className="container" style={{ padding: 'clamp(3.5rem, 6vw, 5rem) 1.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
          <span style={{
            display: 'block',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#B8996A',
            marginBottom: '0.5rem',
            fontWeight: 600
          }}>
            THE ATELIER ARCHIVE
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 400
          }}>
            Moments in Time
          </h2>
        </div>

        <div style={{
          maxWidth: '560px',
          margin: '0 auto',
          position: 'relative',
          paddingLeft: '2rem'
        }}>
          <div style={{
            position: 'absolute',
            left: 0,
            top: '0.5rem',
            bottom: '0.5rem',
            width: '1px',
            backgroundColor: '#D4AF7F'
          }} />

          {[
            { year: '2009', title: 'The Founding', desc: 'Maison established in Colombo, dedicated exclusively to unheated Ceylon sapphires.' },
            { year: '2014', title: 'Mine Custody', desc: 'Direct custodial agreements with historic Ratnapura artisanal pit mines.' },
            { year: '2018', title: 'Pure Intimacy', desc: 'Inauguration of the Bespoke Programme and pulse-point gemstone signature.' },
            { year: '2022', title: 'Global Recognition', desc: 'Private salon viewings across London, Geneva, Dubai, and Singapore.' },
            { year: 'Today', title: 'Desire, Made Real', desc: 'Continuing the craft with uncompromising intimacy and gemmological truth.' }
          ].map((item, idx) => (
            <div key={idx} style={{ position: 'relative', marginBottom: '2rem' }}>
              <div style={{
                position: 'absolute',
                left: '-2rem',
                top: '0.25rem',
                transform: 'translateX(-50%)',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#D4AF7F',
                border: '2px solid #FFFFFF'
              }} />
              <div style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: '1.1rem',
                color: '#B8996A',
                fontWeight: 600,
                lineHeight: 1
              }}>
                {item.year}
              </div>
              <h4 style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: '1.05rem',
                margin: '0.25rem 0',
                color: '#111111'
              }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.55 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO EXPERIENCE */}
      <section style={{ backgroundColor: '#F8F4EF', borderTop: '1px solid #E8E3DC', padding: 'clamp(3.5rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: 'clamp(2rem, 4vw, 2.6rem)',
            fontWeight: 400,
            marginBottom: '1rem'
          }}>
            Experience The Maison
          </h2>
          <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.7, marginBottom: '2rem' }}>
            We welcome private clients by appointment at our Colombo salon or via confidential private consultation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/private-consultations" className="btn btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
              Book Private Consultation
            </Link>
            <Link to="/contact" className="btn btn-secondary" style={{ padding: '0.9rem 2.2rem' }}>
              Contact Atelier
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
