import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { bespokeProcess, faqs } from '../data/content'
import './Bespoke.css'

export default function Bespoke() {
  const [expandedFaq, setExpandedFaq] = useState(null)

  return (
    <div className="bespoke-page">
      {/* 1. HERO — Sensual, refined, feeling-first */}
      <section style={{
        backgroundColor: '#111111',
        color: '#F8F4EF',
        padding: 'clamp(3.5rem, 8vw, 6rem) 0',
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
            PURE INTIMACY &bull; THE BESPOKE PROGRAMME
          </span>

          <h1 style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
            fontWeight: 400,
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginBottom: '1rem'
          }}>
            A Piece That Belongs Only to You
          </h1>

          <p style={{
            fontFamily: 'var(--font-serif-body)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
            color: '#D4AF7F',
            marginBottom: '1.25rem',
            letterSpacing: '0.04em'
          }}>
            "We do not believe in jewellery made for everyone. We believe in jewellery made for someone."
          </p>

          <p style={{
            fontSize: '1rem',
            color: '#D0CCBE',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto 2rem'
          }}>
            Collaborate directly with our master artisans to sculpt love, desire, and memory into rare Ceylon gemstones.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/bespoke/enquiry" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
              Begin Your Commission
            </Link>
            <Link to="/private-consultations" className="btn btn-secondary" style={{ padding: '0.9rem 2rem' }}>
              Private Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY — Concise & intimate */}
      <section className="container" style={{ padding: 'clamp(3rem, 6vw, 4.5rem) 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <span style={{
            display: 'block',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#A68563',
            marginBottom: '0.6rem',
            fontWeight: 600
          }}>
            THE ATELIER PROMISE
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 400,
            marginBottom: '1rem',
            color: '#111111'
          }}>
            Desire, Hand-Forged
          </h2>
          <p style={{
            lineHeight: 1.8,
            color: '#3A3A3A',
            fontFamily: 'var(--font-serif-body)',
            fontSize: '1.2rem'
          }}>
            Every bespoke creation begins with an unspoken truth. We source an unheated Ceylon gemstone that mirrors your emotion, then sculpt precious metal around its unique anatomy. Worn against bare skin. Felt forever.
          </p>
        </div>
      </section>

      {/* 3. THE 5-STAGE BESPOKE EXPERIENCE */}
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
              FROM CONCEPT TO SKIN
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 400,
              color: '#111111'
            }}>
              The Five Chapters
            </h2>
          </div>

          <div className="process-grid">
            {bespokeProcess.map(stage => (
              <Link key={stage.id} to="/bespoke/process" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="process-card" style={{
                  backgroundColor: '#FFFFFF',
                  padding: '2rem 1.5rem',
                  border: '1px solid #E8E3DC',
                  borderRadius: '2px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  height: '100%'
                }}>
                  <div className="process-number" style={{
                    fontFamily: 'var(--font-serif-display)',
                    color: '#D4AF7F',
                    fontSize: '1.8rem',
                    marginBottom: '0.75rem'
                  }}>
                    {stage.number}
                  </div>
                  <h4 style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '1.15rem',
                    marginBottom: '0.25rem',
                    color: '#111111'
                  }}>
                    {stage.title}
                  </h4>
                  <div style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#A68563',
                    marginBottom: '0.75rem'
                  }}>
                    {stage.subtitle}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: 1.6 }}>
                    {stage.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/bespoke/process" className="btn btn-secondary">
              Explore Full Process Details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ATELIER DISTINCTION — Minimal 4 cards */}
      <section className="container" style={{ padding: 'clamp(3.5rem, 6vw, 5rem) 1.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: 'clamp(2rem, 4vw, 2.6rem)',
            fontWeight: 400
          }}>
            Why Pure Intimacy
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem'
        }}>
          {[
            {
              title: 'Singular Creation',
              desc: 'Never duplicated. Cast, carved, and hand-finished for one recipient alone.'
            },
            {
              title: '100% Unheated Stones',
              desc: 'Natural Ceylon gems in raw geological purity — certified by GIA & Lotus.'
            },
            {
              title: 'Pulse-Point Setting',
              desc: 'Optional hidden inner gemstone set flush against your pulse point.'
            },
            {
              title: 'Eternal Custody',
              desc: 'Lifetime complimentary inspection, cleaning, and archival provenance care.'
            }
          ].map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: '#FFFFFF',
              padding: '2rem 1.5rem',
              border: '1px solid #E8E3DC',
              borderTop: '3px solid #D4AF7F'
            }}>
              <h4 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                {item.title}
              </h4>
              <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHISPERS / CLIENT TESTIMONIALS */}
      <section style={{ backgroundColor: '#111111', color: '#F8F4EF', padding: 'clamp(3.5rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{
              display: 'block',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#D4AF7F',
              marginBottom: '0.5rem'
            }}>
              VOICES OF DEVOTION
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              color: '#FFFFFF',
              fontWeight: 400
            }}>
              Worn. Felt. Remembered.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              {
                quote: 'When she opened the box, neither of us spoke for a long time. The sapphire held the exact shade of the night we met in Galle.',
                author: 'Julian & Evelyn',
                location: 'London'
              },
              {
                quote: 'This is not jewellery. It is a secret language between us that she wears every hour of every day.',
                author: 'Marcus D.',
                location: 'Geneva'
              },
              {
                quote: 'The pulse-point ruby inside the band touches her skin continuously. She says she feels me with her even across continents.',
                author: 'Alistair K.',
                location: 'Singapore'
              }
            ].map((t, idx) => (
              <div key={idx} style={{
                backgroundColor: '#1C1C1C',
                padding: '2rem',
                border: '1px solid #333333',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <p style={{
                  fontFamily: 'var(--font-serif-body)',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  lineHeight: 1.7,
                  color: '#EDE7DC',
                  marginBottom: '1.25rem'
                }}>
                  "{t.quote}"
                </p>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#D4AF7F', letterSpacing: '0.05em' }}>
                    {t.author}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ (Curated & brief) */}
      <section className="container" style={{ padding: 'clamp(3rem, 6vw, 4.5rem) 1.5rem' }}>
        <h2 style={{
          fontFamily: 'var(--font-serif-display)',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          Private Inquiries
        </h2>

        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {faqs.filter(faq => faq.category === 'Bespoke').map(faq => (
            <div key={faq.id} style={{
              borderBottom: '1px solid #E8E3DC',
              padding: '1rem 0'
            }}>
              <button
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                style={{
                  width: '100%',
                  padding: '0.5rem 0',
                  textAlign: 'left',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-serif-display)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: '#111'
                }}
              >
                <span>{faq.question}</span>
                <span style={{ fontSize: '1.2rem', color: '#D4AF7F' }}>
                  {expandedFaq === faq.id ? '−' : '+'}
                </span>
              </button>
              {expandedFaq === faq.id && (
                <p style={{
                  paddingTop: '0.5rem',
                  color: '#555555',
                  lineHeight: 1.7,
                  fontSize: '0.95rem'
                }}>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. INVITATION CTA */}
      <section style={{ backgroundColor: '#F8F4EF', borderTop: '1px solid #E8E3DC', padding: 'clamp(3.5rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '620px' }}>
          <span style={{
            display: 'block',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#B8996A',
            marginBottom: '0.5rem',
            fontWeight: 600
          }}>
            COMMISSION YOUR DEVOTION
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: 'clamp(2.2rem, 4vw, 3rem)',
            fontWeight: 400,
            marginBottom: '1rem'
          }}>
            DESIRE, MADE REAL.
          </h2>
          <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.7, marginBottom: '2rem' }}>
            Speak directly with our master gemmologist in Colombo or arrange a confidential virtual consultation from anywhere in the world.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/bespoke/enquiry" className="btn btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
              Submit Commission Brief
            </Link>
            <a
              href="https://wa.me/94776100099?text=Hello%20Aviory%20%26%20Co.%2C%20I%20would%20like%20to%20discuss%20a%20bespoke%20commission."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.9rem 2.2rem' }}
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
