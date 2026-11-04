import React from 'react'
import { Link } from 'react-router-dom'
import { about, ceylonHeritage } from '../data/content'
import './OurHouse.css'

export default function OurHouse() {
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
          <h1 style={{ color: '#D4AF7F' }}>{about.title}</h1>
          <p style={{ fontSize: '1.1rem', marginTop: 'var(--spacing-md)', opacity: 0.9 }}>
            {about.tagline}
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{ color: '#2B2B2B', lineHeight: 1.8 }}
            dangerouslySetInnerHTML={{ __html: about.story }}
          />
        </div>
      </section>

      {/* VALUES */}
      <section style={{ backgroundColor: "var(--color-ivory)", paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>Our Values</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            {about.values.map((value, idx) => (
              <div key={idx} style={{
                backgroundColor: "var(--color-ivory)",
                padding: 'var(--spacing-lg)',
                border: '1px solid #D0CCBE',
                borderLeft: '4px solid #D4AF7F'
              }}>
                <h4 style={{ marginBottom: 'var(--spacing-md)' }}>{value.title}</h4>
                <p style={{ color: '#2B2B2B' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTISANS */}
      <section className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>Meet Our Artisans</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-xl)'
        }}>
          {about.artisans.map((artisan, idx) => (
            <div key={idx} style={{
              backgroundColor: "var(--color-ivory)",
              padding: 'var(--spacing-lg)',
              border: '1px solid #D0CCBE'
            }}>
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: "var(--color-ivory)",
                marginBottom: 'var(--spacing-lg)',
                borderRadius: '4px'
              }} />
              <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>{artisan.name}</h4>
              <div style={{
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#A68563',
                marginBottom: 'var(--spacing-md)'
              }}>
                {artisan.role}
              </div>
              <p style={{ color: '#2B2B2B', marginBottom: 'var(--spacing-md)', fontSize: '0.95rem' }}>
                {artisan.background}
              </p>
              <p style={{ color: '#A68563', fontSize: '0.85rem' }}>
                <strong>Specialty:</strong> {artisan.specialty}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CEYLON HERITAGE */}
      <section style={{ backgroundColor: "var(--color-ivory)", color: '#F8F4EF', paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container">
          <h2 style={{ color: '#D4AF7F', marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>
            {ceylonHeritage.title}
          </h2>
          <p style={{
            maxWidth: '800px',
            margin: '0 auto var(--spacing-2xl)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            textAlign: 'center'
          }}>
            {ceylonHeritage.introduction}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--spacing-xl)',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {ceylonHeritage.sections.map((section, idx) => (
              <div key={idx} style={{
                backgroundColor: "var(--color-ivory)",
                padding: 'var(--spacing-lg)',
                border: '1px solid #D4AF7F'
              }}>
                <h4 style={{ color: '#D4AF7F', marginBottom: 'var(--spacing-md)' }}>{section.title}</h4>
                <p style={{ color: '#E8E3DC', lineHeight: 1.6 }}>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>Our Timeline</h2>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          position: 'relative',
          paddingLeft: 'var(--spacing-xl)',
          paddingRight: 'var(--spacing-xl)'
        }}>
          {[
            { year: '2009', event: 'Founded as a luxury gemstone and jewelry brand' },
            { year: '2010s', event: 'Established relationships with premier gemstone sources' },
            { year: '2015', event: 'Expanded into fine jewelry creation and bespoke design' },
            { year: '2018', event: 'Became recognized internationally for excellence and authenticity' },
            { year: '2020', event: 'Pioneered ethical sourcing and sustainability practices' },
            { year: '2024', event: 'Continuing the legacy of luxury and craftsmanship' }
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
              <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>{item.year}</h4>
              <p style={{ color: '#2B2B2B' }}>{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content" style={{ textAlign: 'center' }}>
            <h2>Experience AVIORY & CO</h2>
            <p style={{ marginBottom: 'var(--spacing-xl)' }}>
              Visit our atelier or schedule a private consultation to discover our world of luxury gemstones and bespoke creations.
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/private-consultations" className="btn btn-primary">Book Consultation</Link>
              <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

