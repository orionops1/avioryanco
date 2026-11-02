import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { journalArticles } from '../data/products'
import './Journal.css'

export default function Journal() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...new Set(journalArticles.map(a => a.category))]

  const filtered = journalArticles.filter(article =>
    selectedCategory === 'all' || article.category === selectedCategory
  )

  return (
    <>
      <section style={{
        backgroundColor: '#111111',
        color: '#F8F4EF',
        padding: 'clamp(3.5rem, 7vw, 5.5rem) 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#D4AF7F', marginBottom: '0.75rem', fontWeight: 600 }}>
            THE AVIORY CHRONICLES &bull; EST. 2009
          </span>
          <h1 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif-display)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 400, marginBottom: '0.75rem' }}>
            The Journal
          </h1>
          <p style={{ fontFamily: 'var(--font-serif-body)', fontStyle: 'italic', fontSize: '1.25rem', color: '#D4AF7F', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
            Stories of devotion, earth-born colour, and high jewellery craft.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        {/* CATEGORY FILTERS */}
        <div style={{ marginBottom: 'var(--spacing-xl)', display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-option ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* ARTICLES GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 'var(--spacing-xl)'
        }}>
          {filtered.map(article => (
            <Link
              key={article.id}
              to={`/journal/${article.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <article style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-medium-gray)',
                overflow: 'hidden',
                transition: 'var(--transition)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-champagne)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 175, 127, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-medium-gray)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                <div style={{
                  width: '100%',
                  height: '200px',
                  backgroundColor: 'var(--color-light-gray)',
                  overflow: 'hidden'
                }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'var(--transition-slow)'
                    }}
                  />
                </div>

                <div style={{ padding: 'var(--spacing-lg)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-accent-brown)',
                    marginBottom: 'var(--spacing-sm)'
                  }}>
                    {article.category}
                  </div>

                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    marginBottom: 'var(--spacing-md)',
                    lineHeight: 1.3,
                    flex: 1
                  }}>
                    {article.title}
                  </h3>

                  <p style={{
                    color: 'var(--color-charcoal)',
                    fontSize: '0.95rem',
                    marginBottom: 'var(--spacing-md)',
                    lineHeight: 1.6
                  }}>
                    {article.excerpt}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.8rem',
                    color: 'var(--color-accent-brown)'
                  }}>
                    <span>By {article.author}</span>
                    <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: 'var(--spacing-2xl) 0' }}>
            <p style={{ color: 'var(--color-charcoal)', marginBottom: 'var(--spacing-lg)' }}>No articles in this category.</p>
            <button
              className="btn btn-primary"
              onClick={() => setSelectedCategory('all')}
            >
              View All Articles
            </button>
          </div>
        )}
      </div>
    </>
  )
}
