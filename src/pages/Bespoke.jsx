import React from 'react'
import { Link } from 'react-router-dom'
import { bespokeProcess, faqs } from '../data/content'
import './Bespoke.css'

export default function Bespoke() {
  const [expandedFaq, setExpandedFaq] = React.useState(null)

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
          <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#D4AF7F', marginBottom: '0.6rem' }}>THE PRIVATE COVENANT</span>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}>Bespoke Intimacy™</h1>
          <p style={{ fontSize: '1.1rem', marginTop: 'var(--spacing-md)', opacity: 0.9 }}>
            Forged for the skin that remembers you. Hand-wrought gold, rare unheated Ceylon stones, and the signature secret Heartbeat Gem™
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Crafted Exclusively For You</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-xl)', color: '#555555', lineHeight: 1.8 }}>
            Every piece of jewelry tells a story. Our bespoke service allows you to collaborate with master artisans 
            to create something entirely unique – a piece that perfectly captures your vision, your style, and your most 
            meaningful moments. From initial concept to final masterpiece, we guide you through every stage.
          </p>
        </div>
      </div>

      {/* 5-STAGE PROCESS */}
      <section style={{ backgroundColor: "var(--color-ivory)", paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Our 5-Stage Bespoke Process</h2>
          </div>

          <div className="process-grid">
            {bespokeProcess.map(stage => (
              <Link key={stage.id} to="/bespoke/process" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="process-card">
                  <div className="process-number">{stage.number}</div>
                  <h4>{stage.title}</h4>
                  <p>{stage.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <Link to="/bespoke/process" className="btn btn-primary">Learn More About Our Process</Link>
          </div>
        </div>
      </section>

      {/* WHY BESPOKE */}
      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>Why Choose Bespoke?</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--spacing-xl)'
        }}>
          {[
            {
              title: 'Completely Unique',
              description: 'Your piece will be one of a kind, created specifically for you and never replicated.'
            },
            {
              title: 'Personal Involvement',
              description: 'Collaborate with designers and artisans to bring your vision to life.'
            },
            {
              title: 'Quality Control',
              description: 'Have complete confidence knowing your piece is crafted to your exact specifications.'
            },
            {
              title: 'Investment Value',
              description: 'Bespoke pieces often appreciate in value due to their craftsmanship and uniqueness.'
            },
            {
              title: 'Meaningful Stories',
              description: 'Create jewelry that commemorates important moments and relationships in your life.'
            },
            {
              title: 'Expert Guidance',
              description: 'Benefit from decades of expertise in gemstones, materials, and design.'
            }
          ].map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: "var(--color-ivory)",
              padding: 'var(--spacing-lg)',
              border: "1px solid #E6E1DA"
            }}>
              <h4 style={{ marginBottom: 'var(--spacing-md)' }}>{item.title}</h4>
              <p style={{ color: '#555555' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section style={{ backgroundColor: "var(--color-ivory)", paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>What Our Clients Say</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            {[
              {
                text: 'Creating my engagement ring with AVIORY & CO was a dream. Every detail was perfect, and the craftsmanship is extraordinary.',
                author: 'Sarah M.'
              },
              {
                text: 'The team understood my vision immediately and brought it to life beautifully. This is truly a piece of art.',
                author: 'James L.'
              },
              {
                text: 'From initial consultation to final delivery, the experience was exceptional. I\'ve never owned anything more special.',
                author: 'Emma R.'
              }
            ].map((testimonial, idx) => (
              <div key={idx} style={{
                backgroundColor: "var(--color-ivory)",
                padding: 'var(--spacing-lg)',
                border: "1px solid #E6E1DA",
                borderLeft: '4px solid #D4AF7F'
              }}>
                <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-md)' }}>"{testimonial.text}"</p>
                <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>Frequently Asked Questions</h2>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.filter(faq => faq.category === 'Bespoke').map(faq => (
            <div key={faq.id} style={{
              marginBottom: 'var(--spacing-lg)',
              borderBottom: '1px solid #D0CCBE',
              paddingBottom: 'var(--spacing-lg)'
            }}>
              <button
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                style={{
                  width: '100%',
                  padding: 'var(--spacing-md)',
                  textAlign: 'left',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 600,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{faq.question}</span>
                <span style={{ fontSize: '1.25rem' }}>{expandedFaq === faq.id ? '−' : '+'}</span>
              </button>
              {expandedFaq === faq.id && (
                <p style={{ padding: 'var(--spacing-md) 0', color: '#555555', lineHeight: 1.8 }}>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content" style={{ textAlign: 'center' }}>
            <h2>Begin Your Bespoke Journey</h2>
            <p style={{ marginBottom: 'var(--spacing-xl)' }}>
              Ready to create something extraordinary? Let's start a conversation about your vision.
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/bespoke/enquiry" className="btn btn-primary">Start Enquiry</Link>
              <Link to="/private-consultations" className="btn btn-secondary">Book Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

