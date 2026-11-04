import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { gemstones } from '../data/products'
import './Gemstones.css'

export default function Gemstones() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedColor, setSelectedColor] = useState('all')
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
  }, [selectedCategory, selectedColor, sortBy])

  return (
    <div className="gemstones-page">
      {/* Luxury Editorial Header */}
      <section className="gemstones-hero">
        <div className="container">
          <span className="gemstones-hero__tag">CEYLON GEMSTONE VAULT</span>
          <h1 className="gemstones-hero__title">Exceptional Gemstones</h1>
          <p className="gemstones-hero__subtitle">
            Unheated Ceylon sapphires, rubies, and collector stones selected for their rare saturation, clarity, and certified provenance.
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

              {(selectedCategory !== 'all' || selectedColor !== 'all') && (
                <button
                  type="button"
                  className="gemstones-reset-btn"
                  onClick={() => {
                    handleCategoryChange('all')
                    setSelectedColor('all')
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
            <p>Our gemological team in Colombo sources exceptional stones directly from verified artisanal mines on request.</p>
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

