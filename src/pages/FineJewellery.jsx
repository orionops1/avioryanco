import React, { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { fineJewellery } from '../data/products'
import './FineJewellery.css'

export default function FineJewellery() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCollection, setSelectedCollection] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const collections = ['all', ...new Set(fineJewellery.map(j => j.collection))]
  const types = ['all', ...new Set(fineJewellery.map(j => j.type))]

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

  const handleCollectionChange = (col) => {
    setSelectedCollection(col)
    if (col === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ collection: col })
    }
  }

  return (
    <>
      <section style={{
        backgroundColor: '#111111',
        color: '#F8F4EF',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: '0.5rem', fontWeight: 700 }}>
            MAISON ATELIER
          </span>
          <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)' }}>Fine Jewellery</h1>
          <p style={{ fontSize: '1.05rem', marginTop: 'var(--spacing-sm)', color: '#EDE7DC', opacity: 0.95, maxWidth: '600px', margin: '0 auto' }}>
            Exquisite pieces crafted with exceptional unheated gemstones and master metalwork.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="filters-section">
          <div className="filters-header">
            <h3>Filters</h3>
            <button
              className="btn btn-small"
              onClick={() => {
                handleCollectionChange('all')
                setSelectedType('all')
              }}
            >
              Clear All
            </button>
          </div>

          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Collection</h4>
            <div className="filter-group">
              {collections.map(col => (
                <button
                  key={col}
                  className={`filter-option ${selectedCollection.toLowerCase() === col.toLowerCase() ? 'active' : ''}`}
                  onClick={() => handleCollectionChange(col)}
                >
                  {col.charAt(0).toUpperCase() + col.slice(1)}
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
              className="btn btn-primary"
              onClick={() => {
                handleCollectionChange('all')
                setSelectedType('all')
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </>
  )
}
