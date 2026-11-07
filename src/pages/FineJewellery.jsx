import React, { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { fineJewellery } from '../data/products'
import './FineJewellery.css'

export default function FineJewellery() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCollection, setSelectedCollection] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const collections = ['all', ...new Set(fineJewellery.map(j => j.collection).filter(Boolean))]
  const types = ['all', ...new Set(fineJewellery.map(j => j.type).filter(Boolean))]

  useEffect(() => {
    const colParam = searchParams.get('collection')
    const typeParam = searchParams.get('type')

    if (colParam) {
      const match = collections.find(c => c.toLowerCase() === colParam.toLowerCase())
      if (match) setSelectedCollection(match)
    } else {
      setSelectedCollection('all')
    }

    if (typeParam) {
      const match = types.find(t => t.toLowerCase() === typeParam.toLowerCase())
      if (match) setSelectedType(match)
    } else {
      setSelectedType('all')
    }
  }, [searchParams])

  const filtered = useMemo(() => {
    return fineJewellery.filter(item => {
      if (selectedCollection !== 'all' && item.collection.toLowerCase() !== selectedCollection.toLowerCase()) return false
      if (selectedType !== 'all' && item.type.toLowerCase() !== selectedType.toLowerCase()) return false
      return true
    })
  }, [selectedCollection, selectedType])

  const updateFilters = (col, type) => {
    const nextParams = {}
    if (col && col !== 'all') nextParams.collection = col
    if (type && type !== 'all') nextParams.type = type
    setSearchParams(nextParams)
  }

  const handleCollectionChange = (col) => {
    setSelectedCollection(col)
    updateFilters(col, selectedType)
  }

  const handleTypeChange = (type) => {
    setSelectedType(type)
    updateFilters(selectedCollection, type)
  }

  const handleClearAll = () => {
    setSelectedCollection('all')
    setSelectedType('all')
    setSearchParams({})
  }

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
            HAUTE JOAILLERIE &bull; ATELIER CREATIONS
          </span>
          <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-serif-display)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 400, marginBottom: '0.75rem' }}>
            Beauty That Becomes Part of You
          </h1>
          <p style={{ fontFamily: 'var(--font-serif-body)', fontStyle: 'italic', fontSize: '1.25rem', color: '#D4AF7F', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
            DESIRE, MADE REAL.
          </p>
          <p style={{ fontSize: '0.98rem', color: '#D0CCBE', opacity: 0.95, maxWidth: '560px', margin: '0 auto', lineHeight: 1.65 }}>
            Each creation is sculpted around rare singular stones and warm precious metals — designed to be worn against bare skin and remembered forever.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="filters-section">
          <div className="filters-header">
            <h3>Filters</h3>
            <button
              type="button"
              className="btn btn-small"
              onClick={handleClearAll}
            >
              Clear All
            </button>
          </div>

          {/* Collection Filter */}
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Collection
            </h4>
            <div className="filter-group">
              {collections.map(col => (
                <button
                  key={col}
                  type="button"
                  className={`filter-option ${selectedCollection.toLowerCase() === col.toLowerCase() ? 'active' : ''}`}
                  onClick={() => handleCollectionChange(col)}
                >
                  {col === 'all' ? 'All Collections' : col.charAt(0).toUpperCase() + col.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Category / Type Filter */}
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Category
            </h4>
            <div className="filter-group">
              {types.map(t => (
                <button
                  key={t}
                  type="button"
                  className={`filter-option ${selectedType.toLowerCase() === t.toLowerCase() ? 'active' : ''}`}
                  onClick={() => handleTypeChange(t)}
                >
                  {t === 'all' ? 'All Categories' : t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <p style={{ color: '#2B2B2B' }}>
            Showing <strong>{filtered.length}</strong> creations
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="product-grid">
            {filtered.map(item => (
              <ProductCard key={item.id} product={item} type="jewellery" />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 'var(--spacing-2xl) 0' }}>
            <p style={{ color: '#2B2B2B', marginBottom: 'var(--spacing-lg)' }}>No fine jewellery pieces match your filters.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClearAll}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </>
  )
}
