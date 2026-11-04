import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { privateConsultations } from '../data/content'
import './PrivateConsultations.css'

export default function PrivateConsultations() {
  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <>
      {/* HERO */}
      <section style={{
        backgroundColor: "var(--color-ivory)",
        color: '#F8F4EF',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: '#D4AF7F' }}>{privateConsultations.title}</h1>
          <p style={{ fontSize: '1.1rem', marginTop: 'var(--spacing-md)', opacity: 0.9 }}>
            {privateConsultations.description}
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', color: '#2B2B2B', lineHeight: 1.8, marginBottom: 'var(--spacing-xl)' }}>
            {privateConsultations.intro}
          </p>
        </div>
      </section>

      {/* CONSULTATION OPTIONS */}
      <section style={{ backgroundColor: "var(--color-ivory)", paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>Consultation Options</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)',
            marginBottom: 'var(--spacing-2xl)'
          }}>
            {privateConsultations.options.map((option, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedOption(selectedOption === idx ? null : idx)}
                style={{
                  backgroundColor: "var(--color-ivory)",
                  border: selectedOption === idx ? '2px solid #D4AF7F' : '1px solid #D0CCBE',
                  padding: 'var(--spacing-lg)',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  borderRadius: '4px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 16px rgba(212, 175, 127, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>{option.type}</h4>
                <p style={{ color: '#A68563', fontSize: '0.9rem', marginBottom: 'var(--spacing-md)' }}>
                  {option.duration}
                </p>
                <p style={{ color: '#2B2B2B', marginBottom: 'var(--spacing-md)' }}>
                  {option.description}
                </p>
                <button className="btn btn-small btn-primary">
                  {selectedOption === idx ? 'Hide Details' : 'Learn More'}
                </button>

                {selectedOption === idx && (
                  <div style={{ marginTop: 'var(--spacing-lg)', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid #E8E3DC' }}>
                    <p style={{ color: '#2B2B2B', marginBottom: 'var(--spacing-md)' }}>
                      Perfect for: {option.type === 'Virtual Consultation' ? 'International clients and initial discussions'
                        : option.type === 'Atelier Visit' ? 'A complete experience of our atelier and collections'
                        : 'Personalized service in your preferred location'}
                    </p>
                    <Link to="/contact" className="btn btn-primary btn-small">
                      Schedule {option.type}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>How It Works</h2>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div
            dangerouslySetInnerHTML={{ __html: privateConsultations.process }}
            style={{ color: '#2B2B2B', lineHeight: 1.8 }}
          />
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section style={{ backgroundColor: "var(--color-ivory)", paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>What to Expect</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            {[
              {
                title: 'Personalized Attention',
                description: 'Our experts dedicate time exclusively to understanding your vision and preferences.'
              },
              {
                title: 'Curated Selection',
                description: 'We prepare a carefully selected collection of gemstones and designs just for you.'
              },
              {
                title: 'Expert Guidance',
                description: 'Benefit from decades of expertise in gemstones, design, and jewelry craftsmanship.'
              },
              {
                title: 'Relaxed Atmosphere',
                description: 'Enjoy a comfortable, luxurious setting perfect for meaningful conversations.'
              },
              {
                title: 'No Pressure',
                description: 'Consultations are about exploration and building relationships, not hard selling.'
              },
              {
                title: 'Next Steps',
                description: 'Leave with clear guidance and a personalized plan for creating your perfect piece.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: "var(--color-ivory)",
                padding: 'var(--spacing-lg)',
                border: '1px solid #D0CCBE'
              }}>
                <h4 style={{ marginBottom: 'var(--spacing-md)' }}>{item.title}</h4>
                <p style={{ color: '#2B2B2B' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>Client Experiences</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-xl)'
        }}>
          {[
            {
              text: 'My virtual consultation was so helpful. I felt heard and understood. The team was patient and knowledgeable.',
              author: 'Michael T.'
            },
            {
              text: 'Visiting the atelier was a dream. Seeing the collections in person and meeting the artisans made it special.',
              author: 'Elena R.'
            },
            {
              text: 'They brought the perfect selection to my home. It was so convenient and personalized. Highly recommended!',
              author: 'Sarah M.'
            }
          ].map((testimonial, idx) => (
            <div key={idx} style={{
              backgroundColor: "var(--color-ivory)",
              padding: 'var(--spacing-lg)',
              border: '1px solid #D0CCBE',
              borderLeft: '4px solid #D4AF7F'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-md)', color: '#2B2B2B' }}>
                "{testimonial.text}"
              </p>
              <p style={{ fontWeight: 600 }}>— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content" style={{ textAlign: 'center' }}>
            <h2>Schedule Your Consultation</h2>
            <p style={{ marginBottom: 'var(--spacing-xl)' }}>
              Whether virtual, at our atelier, or in your preferred location, we'd love to meet with you.
            </p>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}

