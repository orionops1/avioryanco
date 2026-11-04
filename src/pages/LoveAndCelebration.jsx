import React, { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { engagementRings } from '../data/products'
import './LoveAndCelebration.css'

export default function LoveAndCelebration() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedStyle, setSelectedStyle] = useState('all')
  const [selectedStone, setSelectedStone] = useState('all')
  const [selectedShape, setSelectedShape] = useState('all')

  const styles = ['all', ...new Set(engagementRings.map(r => r.style).filter(Boolean))]
  const stoneTypes = ['all', ...new Set(engagementRings.map(r => r.stoneType).filter(Boolean))]
  const shapes = ['all', ...new Set(engagementRings.map(r => r.shape).filter(Boolean))]

  useEffect(() => {
    const styleParam = searchParams.get('style')
    const stoneParam = searchParams.get('stone')
    const shapeParam = searchParams.get('cut') || searchParams.get('shape')

    if (styleParam) {
      const match = styles.find(s => s.toLowerCase() === styleParam.toLowerCase())
      if (match) setSelectedStyle(match)
    } else {
      setSelectedStyle('all')
    }

    if (stoneParam) {
      const match = stoneTypes.find(s => s.toLowerCase().includes(stoneParam.toLowerCase()))
      if (match) setSelectedStone(match)
    } else {
      setSelectedStone('all')
    }

    if (shapeParam) {
      const match = shapes.find(s => s.toLowerCase().includes(shapeParam.toLowerCase()))
      if (match) setSelectedShape(match)
    } else {
      setSelectedShape('all')
    }
  }, [searchParams])

  const filtered = useMemo(() => {
    return engagementRings.filter(ring => {
      if (selectedStyle !== 'all' && ring.style.toLowerCase() !== selectedStyle.toLowerCase()) return false
      if (selectedStone !== 'all' && ring.stoneType.toLowerCase() !== selectedStone.toLowerCase()) return false
      if (selectedShape !== 'all' && !ring.shape.toLowerCase().includes(selectedShape.toLowerCase())) return false
      return true
    })
  }, [selectedStyle, selectedStone, selectedShape])

  const handleStyleChange = (style) => {
    setSelectedStyle(style)
    const params = new URLSearchParams(searchParams)
    if (style === 'all') {
      params.delete('style')
    } else {
      params.set('style', style)
    }
    setSearchParams(params)
  }

  const handleStoneChange = (stone) => {
    setSelectedStone(stone)
    const params = new URLSearchParams(searchParams)
    if (stone === 'all') {
      params.delete('stone')
    } else {
      params.set('stone', stone)
    }
    setSearchParams(params)
  }

  const handleShapeChange = (shape) => {
    setSelectedShape(shape)
    const params = new URLSearchParams(searchParams)
    if (shape === 'all') {
      params.delete('shape')
      params.delete('cut')
    } else {
      params.set('shape', shape)
    }
    setSearchParams(params)
  }

  const handleClearAll = () => {
    setSelectedStyle('all')
    setSelectedStone('all')
    setSelectedShape('all')
    setSearchParams(new URLSearchParams())
  }

  return (
    <div className="love-page">
      {/* 1. HAUTE JOAILLERIE EDITORIAL HERO */}
      <section className="love-hero">
        <div className="container">
          <span className="love-hero__eyebrow">AVIORY LOVE COLLECTION</span>
          <h1 className="love-hero__title">Rings for Every Love Story</h1>
          <p className="love-hero__subtitle">
            We believe every love story deserves an exceptional beginning. Each piece in the AVIORY Love Collection is handcrafted to celebrate the moments that matter most - from first meetings to lifetime commitments. Handcrafting rare unheated Ceylon sapphires and fine gemstones into heirlooms that outlast generations.
          </p>
        </div>
      </section>

      {/* 2. FILTER & CONTROLS TOOLBAR */}
      <section className="love-filters-container">
        <div className="container">
          <div className="love-filters-header">
            <h3>Filter Rings by Moment, Gemstone &amp; Cut</h3>
            <button
              type="button"
              className="love-clear-btn"
              onClick={handleClearAll}
            >
              Reset Filters
            </button>
          </div>

          {/* By Moment / Style */}
          <div className="love-filter-group">
            <span className="love-filter-subheading">Moments &amp; Style</span>
            <div className="love-filter-pills">
              {styles.map(style => (
                <button
                  key={style}
                  type="button"
                  className={`love-filter-pill ${selectedStyle.toLowerCase() === style.toLowerCase() ? 'love-filter-pill--active' : ''}`}
                  onClick={() => handleStyleChange(style)}
                >
                  {style === 'all' ? 'All Moments' : style}
                </button>
              ))}
            </div>
          </div>

          {/* By Gemstone */}
          <div className="love-filter-group">
            <span className="love-filter-subheading">Gemstone Variety</span>
            <div className="love-filter-pills">
              {stoneTypes.map(stone => (
                <button
                  key={stone}
                  type="button"
                  className={`love-filter-pill ${selectedStone.toLowerCase() === stone.toLowerCase() ? 'love-filter-pill--active' : ''}`}
                  onClick={() => handleStoneChange(stone)}
                >
                  {stone === 'all' ? 'All Gemstones' : stone}
                </button>
              ))}
            </div>
          </div>

          {/* By Shape / Cut */}
          <div className="love-filter-group">
            <span className="love-filter-subheading">Gemstone Shape &amp; Cut</span>
            <div className="love-filter-pills">
              {shapes.map(shape => (
                <button
                  key={shape}
                  type="button"
                  className={`love-filter-pill ${selectedShape.toLowerCase() === shape.toLowerCase() ? 'love-filter-pill--active' : ''}`}
                  onClick={() => handleShapeChange(shape)}
                >
                  {shape === 'all' ? 'All Shapes' : shape}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG */}
      <div className="container love-catalog">
        <div className="love-meta-bar">
          <span className="love-count-text">
            Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? 'ring' : 'rings'} in the Love Collection
          </span>
        </div>

        {filtered.length > 0 ? (
          <div className="love-product-grid">
            {filtered.map(ring => (
              <ProductCard key={ring.id} product={ring} type="ring" />
            ))}
          </div>
        ) : (
          <div className="love-empty-state">
            <h3>No Rings Found</h3>
            <p>No rings match the selected filter combination. Explore our full collection or commission a bespoke ring.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClearAll}
              >
                Clear Filters
              </button>
              <Link to="/bespoke" className="btn btn-outline">
                Start Bespoke Commission
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

