import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { gemstones } from '../data/products'
import './Gemstones.css'

export default function Gemstones() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedColor, setSelectedColor] = useState('all')
  const [selectedShape, setSelectedShape] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const categories = [
    { id: 'all', label: 'All Gemstones', slug: 'all' },
    { id: 'Blue Sapphires', label: 'Blue Sapphires', slug: 'blue-sapphires' },
    { id: 'Pink Sapphires', label: 'Pink Sapphires', slug: 'pink-sapphires' },
    { id: 'Yellow Sapphires', label: 'Yellow Sapphires', slug: 'yellow-sapphires' },
    { id: 'Padparadscha', label: 'Padparadscha', slug: 'padparadscha' },
    { id: 'Rubies', label: 'Rubies', slug: 'rubies' },
    { id: 'Spinels', label: 'Spinels', slug: 'spinels' },
    { id: 'Collector', label: 'Collector Stones', slug: 'collector' },
    { id: 'Other', label: 'Other Gems', slug: 'other' }
  ]

  const colors = [
    { id: 'all', label: 'All Colors' },
    { id: 'Royal Blue', label: 'Royal Blue' },
    { id: 'Cornflower Blue', label: 'Cornflower Blue' },
    { id: 'Pastel Pink', label: 'Pink' },
    { id: 'Canary Yellow', label: 'Yellow' },
    { id: 'Sunset Orange-Pink', label: 'Sunset Padparadscha' },
    { id: 'Pigeon Blood Red', label: 'Ruby Red' },
    { id: 'Cobalt Blue', label: 'Cobalt' }
  ]

  const shapes = [
    { id: 'all', label: 'All Shapes' },
    { id: 'Round Brilliant', label: 'Round Brilliant' },
    { id: 'Oval', label: 'Oval' },
    { id: 'Emerald', label: 'Emerald' },
    { id: 'Cushion', label: 'Cushion' },
    { id: 'Pear', label: 'Pear' },
    { id: 'Princess', label: 'Princess' }
  ]

  // Synchronize category with URL search parameters
  useEffect(() => {
    const catQuery = searchParams.get('category')
    const typeQuery = searchParams.get('type')

    if (catQuery) {
      const match = categories.find(c => c.slug === catQuery || c.id.toLowerCase() === catQuery.toLowerCase())
      if (match) {
        setSelectedCategory(match.id)
        return
      }
    }

    if (typeQuery) {
      if (typeQuery.includes('sapphire')) setSelectedCategory('Blue Sapphires')
      else if (typeQuery.includes('ruby')) setSelectedCategory('Rubies')
      else if (typeQuery.includes('spinel')) setSelectedCategory('Spinels')
      return
    }

    if (!catQuery && !typeQuery) {
      setSelectedCategory('all')
    }
  }, [searchParams])

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId)
    const match = categories.find(c => c.id === catId)
    if (match && match.slug !== 'all') {
      setSearchParams({ category: match.slug })
    } else {
      setSearchParams({})
    }
  }

  const filteredGemstones = useMemo(() => {
    let result = gemstones.filter(gem => {
      if (selectedCategory !== 'all' && gem.category !== selectedCategory) return false
      if (selectedColor !== 'all' && !gem.color.toLowerCase().includes(selectedColor.toLowerCase())) return false
      if (selectedShape !== 'all' && gem.cut !== selectedShape) return false
      return true
    })

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'carat') {
      result.sort((a, b) => (b.carat || 0) - (a.carat || 0))
    }

    return result
  }, [selectedCategory, selectedColor, selectedShape, sortBy])

  return (
    <div className="gemstones-page">
      {/* Luxury Editorial Header — Intimate & Feeling-First */}
      <section className="gemstones-hero">
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="gemstones-hero__tag">CEYLON &bull; HIGH JEWELLERY VAULT &bull; EST. 2009</span>
          <h1 className="gemstones-hero__title">A Heritage Written in Colour</h1>
          <p style={{ fontFamily: 'var(--font-serif-body)', fontStyle: 'italic', fontSize: '1.25rem', color: '#D4AF7F', margin: '0.5rem 0 0.75rem', letterSpacing: '0.04em' }}>
            DESIRE, MADE REAL.
          </p>
          <p className="gemstones-hero__subtitle" style={{ maxWidth: '580px', margin: '0 auto' }}>
            Two billion years of natural heat and pressure, untouched by human furnace. Certified unheated Ceylon sapphires and rubies chosen for extraordinary character.
          </p>
        </div>
      </section>

      {/* Tiffany-style Filter Bar */}
      <section className="gemstones-controls">
        <div className="container gemstones-controls__inner">
          {/* Category Tabs */}
          <div className="gemstones-pills">
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`gemstones-pill ${selectedCategory === cat.id ? 'gemstones-pill--active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Secondary Filter Dropdowns & Result Count */}
          <div className="gemstones-meta-bar">
            <span className="gemstones-count">
              Showing <strong>{filteredGemstones.length}</strong> creations
            </span>

            <div className="gemstones-selects">
              {/* Color filter */}
              <select 
                className="gemstones-select"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                aria-label="Filter by color"
              >
                {colors.map(col => (
                  <option key={col.id} value={col.id}>{col.label}</option>
                ))}
              </select>

              {/* Shape filter */}
              <select 
                className="gemstones-select"
                value={selectedShape}
                onChange={(e) => setSelectedShape(e.target.value)}
                aria-label="Filter by shape"
              >
                {shapes.map(shape => (
                  <option key={shape.id} value={shape.id}>{shape.label}</option>
                ))}
              </select>

              {/* Sort By */}
              <select
                className="gemstones-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort gemstones"
              >
                <option value="featured">Sort: Curated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="carat">Carat: Largest First</option>
              </select>

              {(selectedCategory !== 'all' || selectedColor !== 'all' || selectedShape !== 'all') && (
                <button
                  type="button"
                  className="gemstones-reset-btn"
                  onClick={() => {
                    handleCategoryChange('all')
                    setSelectedColor('all')
                    setSelectedShape('all')
                    setSortBy('featured')
                  }}
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery Grid */}
      <main className="gemstones-catalog container">
        {filteredGemstones.length > 0 ? (
          <div className="gemstones-grid">
            {filteredGemstones.map(gem => (
              <ProductCard key={gem.id} product={gem} type="gemstone" />
            ))}
          </div>
        ) : (
          <div className="gemstones-empty">
            <h3 className="gemstones-empty__title">No creations match your current criteria</h3>
            <p className="gemstones-empty__text">
              Our gemologists continually acquire unheated stones from Sri Lanka. Contact our concierge to request a private search for your exact desired stone.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                handleCategoryChange('all')
                setSelectedColor('all')
                setSelectedShape('all')
                setSortBy('featured')
              }}
            >
              View All Gemstones
            </button>
          </div>
        )}
      </main>

      {/* Bottom Concierge Assistance Banner */}
      <section className="gemstones-concierge">
        <div className="container gemstones-concierge__inner">
          <div className="gemstones-concierge__text">
            <h3>Seeking a specific Ceylon sapphire or rare carat weight?</h3>
            <p>Our gemological team in Sri Lanka sources exceptional stones directly from verified artisanal mines on request.</p>
          </div>
          <div className="gemstones-concierge__action">
            <a href="/private-consultations" className="btn btn-primary">
              Request Private Sourcing
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
