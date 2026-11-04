import React from 'react'
import { Link } from 'react-router-dom'
import { bespokeProcess } from '../data/content'
import './BespokeProcess.css'

export default function BespokeProcess() {
  return (
    <>
      <section style={{
        backgroundColor: "var(--color-ivory)",
        color: '#555555',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: '#D4AF7F' }}>The Bespoke Process</h1>
          <p style={{ fontSize: '1.1rem', marginTop: 'var(--spacing-md)', opacity: 0.9 }}>
            A detailed look at how we create your masterpiece
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        {bespokeProcess.map((stage, index) => (
          <div key={stage.id} style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              gap: 'var(--spacing-2xl)',
              alignItems: 'center'
            }}>
              <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: "var(--color-ivory)",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-lg)'
                }}>
                  <span style={{ fontSize: '3rem', color: '#D4AF7F', fontWeight: 700 }}>
                    {stage.number}
                  </span>
                </div>
                <h2 style={{ marginBottom: 'var(--spacing-md)' }}>{stage.title}</h2>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#2B2B2B', marginBottom: 'var(--spacing-lg)' }}>
                  {stage.fullDescription}
                </p>
              </div>

              <div style={{
                order: index % 2 === 0 ? 2 : 1,
                aspectRatio: '1',
                backgroundColor: "var(--color-ivory)",
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem'
              }}>
                {['📋', '✏️', '🎨', '🔨', '✨'][index]}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PROCESS TIMELINE */}
      <section style={{ backgroundColor: "var(--color-ivory)", paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>Timeline</h2>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: 'var(--spacing-xl)',
            paddingRight: 'var(--spacing-xl)'
          }}>
            {[
              { stage: 'Consultation', duration: 'Week 1' },
              { stage: 'Design & Approval', duration: 'Weeks 2-3' },
              { stage: 'Prototyping (if needed)', duration: 'Weeks 3-4' },
              { stage: 'Crafting', duration: 'Weeks 5-10' },
              { stage: 'Final Inspection & Delivery', duration: 'Week 11+' }
            ].map((item, idx) => (
              <div key={idx} style={{ marginBottom: 'var(--spacing-lg)', paddingLeft: 'var(--spacing-lg)' }}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  width: '2px',
                  height: '100%',
                  backgroundColor: "var(--color-ivory)",
                  top: 0
                }} />
                <div style={{
                  position: 'absolute',
                  left: '-8px',
                  top: '0',
                  width: '16px',
                  height: '16px',
                  backgroundColor: "var(--color-ivory)",
                  borderRadius: '50%',
                  border: '2px solid #F8F4EF'
                }} />
                <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>{item.stage}</h4>
                <p style={{ color: '#2B2B2B', fontSize: '0.9rem' }}>{item.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY POINTS */}
      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>What to Expect</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-xl)'
        }}>
          {[
            {
              title: 'Expert Guidance',
              description: 'Our designers and artisans will guide you through every decision with professional expertise and personal attention.'
            },
            {
              title: 'Regular Updates',
              description: 'We keep you informed at every stage with photos, samples, and detailed progress reports.'
            },
            {
              title: 'Quality Assurance',
              description: 'Every piece undergoes rigorous quality control before final delivery to ensure perfection.'
            },
            {
              title: 'Lifetime Support',
              description: 'We stand behind our work with lifetime warranties and ongoing support for your bespoke piece.'
            },
            {
              title: 'Complete Documentation',
              description: 'Your piece includes all necessary certifications and documentation for gemstones and materials.'
            },
            {
              title: 'Presentation',
              description: 'Your completed masterpiece is presented in elegant packaging, ready to treasure forever.'
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

      {/* CTA */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content" style={{ textAlign: 'center' }}>
            <h2>Ready to Create Your Masterpiece?</h2>
            <p style={{ marginBottom: 'var(--spacing-xl)' }}>
              Let's begin your bespoke journey with a consultation.
            </p>
            <Link to="/bespoke/enquiry" className="btn btn-primary">Start Your Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  )
}

