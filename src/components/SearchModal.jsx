import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { gemstones, fineJewellery, engagementRings } from '../data/products'
import './SearchModal.css'

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('')

  const allItems = useMemo(() => {
    const list = []
    gemstones.forEach(g => list.push({ ...g, itemType: 'gemstone', link: `/gemstones/${g.id}` }))
    fineJewellery.forEach(j => list.push({ ...j, itemType: 'jewellery', link: `/fine-jewellery/${j.id}` }))
    engagementRings.forEach(r => list.push({ ...r, itemType: 'ring', link: `/love-and-celebration/${r.id}` }))
    return list
  }, [])

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return allItems.filter(item => 
      item.name.toLowerCase().includes(q) ||
      (item.category && item.category.toLowerCase().includes(q)) ||
      (item.color && item.color.toLowerCase().includes(q)) ||
      (item.material && item.material.toLowerCase().includes(q)) ||
      (item.style && item.style.toLowerCase().includes(q))
    ).slice(0, 6)
  }, [query, allItems])

  const popularSearches = [
    'Royal Ceylon Sapphire',
    'Padparadscha',
    'Solitaire Engagement',
    'Unheated Ruby',
    'Diamond Eternity Band',
    'Bespoke Ring'
  ]

  if (!isOpen) return null

  return (
    <div className="search-backdrop" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="search-modal__header">
          <div className="search-input-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              autoFocus
              placeholder="Search rare gemstones, rings, or fine collections..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
            {query && (
              <button type="button" className="search-clear-btn" onClick={() => setQuery('')}>
                ✕
              </button>
            )}
          </div>
          <button type="button" className="search-close-btn" onClick={onClose}>
            Close
          </button>
        </div>

        {/* Content */}
        <div className="search-modal__content">
          {!query.trim() ? (
            <div className="search-suggestions">
              <span className="search-section-label">TRENDING IN VAULT</span>
              <div className="search-tags">
                {popularSearches.map((term, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="search-tag"
                    onClick={() => setQuery(term)}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="search-results">
              <span className="search-section-label">FOUND ({results.length})</span>
              <div className="search-results-grid">
                {results.map((item) => (
                  <Link
                    key={`${item.itemType}-${item.id}`}
                    to={item.link}
                    className="search-result-card"
                    onClick={onClose}
                  >
                    <div className="search-result-card__thumb">
                      {item.image ? (
                        <img src={item.image} alt={item.name} onError={(e) => { e.currentTarget.style.display = 'none' }} />
                      ) : null}
                      <span className="search-result-card__ph">💎</span>
                    </div>
                    <div className="search-result-card__info">
                      <span className="search-result-card__cat">{item.category || item.collection || item.style}</span>
                      <h4 className="search-result-card__name">{item.name}</h4>
                      <span className="search-result-card__price">
                        {typeof item.price === 'number' ? `$${item.price.toLocaleString()}` : item.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="search-empty">
              <p>No creations found matching "{query}".</p>
              <Link to="/gemstones" className="btn btn-outline" onClick={onClose} style={{ marginTop: '1rem' }}>
                Browse Full Catalog
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

