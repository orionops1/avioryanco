import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { gemstones, fineJewellery, engagementRings } from '../data/products'
import './Shop.css'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState(new Set())
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [sortBy, setSortBy] = useState('featured')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 20

  // Combine all products with product type
  const allProducts = useMemo(() => {
    return [
      ...gemstones.map(p => ({ ...p, productType: 'gemstone' })),
      ...fineJewellery.map(p => ({ ...p, productType: 'jewellery' })),
      ...engagementRings.map(p => ({ ...p, productType: 'ring' }))
    ]
  }, [])

  // Extract all unique categories
  const allCategories = useMemo(() => {
    const categories = new Set()
    gemstones.forEach(p => categories.add(p.category))
    fineJewellery.forEach(p => categories.add(p.collection))
    engagementRings.forEach(p => categories.add(p.style))
    return Array.from(categories).sort()
  }, [])

  // Initialize filters from URL params on mount
  useEffect(() => {
    const cats = searchParams.get('categories')
    const priceMin = searchParams.get('priceMin')
    const priceMax = searchParams.get('priceMax')
    const search = searchParams.get('search')
    const sort = searchParams.get('sort')

    if (cats) {
      setSelectedCategories(new Set(cats.split(',')))
    }
    if (priceMin || priceMax) {
      setPriceRange([
        priceMin ? parseInt(priceMin) : 0,
        priceMax ? parseInt(priceMax) : 10000
      ])
    }
    if (search) {
      setSearchQuery(search)
    }
    if (sort) {
      setSortBy(sort)
    }
  }, [])

  // Update URL when filters change
  const updateURL = (categories, search, price, sort) => {
    const params = new URLSearchParams()
    if (categories.size > 0) {
      params.set('categories', Array.from(categories).join(','))
    }
    if (search) {
      params.set('search', search)
    }
    if (price[0] > 0 || price[1] < 10000) {
      params.set('priceMin', price[0])
      params.set('priceMax', price[1])
    }
    if (sort !== 'featured') {
      params.set('sort', sort)
    }
    setSearchParams(params)
  }

  // Handle category toggle
  const handleCategoryToggle = (category) => {
    const newCategories = new Set(selectedCategories)
    if (newCategories.has(category)) {
      newCategories.delete(category)
    } else {
      newCategories.add(category)
    }
    setSelectedCategories(newCategories)
    setCurrentPage(1)
    updateURL(newCategories, searchQuery, priceRange, sortBy)
  }

  // Handle search
  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    setCurrentPage(1)
    updateURL(selectedCategories, query, priceRange, sortBy)
  }

  // Handle price range change
  const handlePriceChange = (type, value) => {
    const newRange = type === 'min' 
      ? [value, priceRange[1]] 
      : [priceRange[0], value]
    
    if (newRange[0] <= newRange[1]) {
      setPriceRange(newRange)
      setCurrentPage(1)
      updateURL(selectedCategories, searchQuery, newRange, sortBy)
    }
  }

  // Handle sort change
  const handleSortChange = (e) => {
    const sort = e.target.value
    setSortBy(sort)
    setCurrentPage(1)
    updateURL(selectedCategories, searchQuery, priceRange, sort)
  }

  // Clear all filters
  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedCategories(new Set())
    setPriceRange([0, 10000])
    setSortBy('featured')
    setCurrentPage(1)
    setSearchParams({})
  }

  // Filter products
  const filteredProducts = useMemo(() => {
    let result = allProducts.filter(product => {
      // Category filter
      const productCategory = product.category || product.collection || product.style
      if (selectedCategories.size > 0 && !selectedCategories.has(productCategory)) {
        return false
      }

      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }

      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false
      }

      return true
    })

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'carat') {
      result.sort((a, b) => (b.carat || 0) - (a.carat || 0))
    }

    return result
  }, [selectedCategories, searchQuery, priceRange, sortBy, allProducts])

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const startIdx = (currentPage - 1) * productsPerPage
  const endIdx = startIdx + productsPerPage
  const paginatedProducts = filteredProducts.slice(startIdx, endIdx)

  const hasActiveFilters = selectedCategories.size > 0 || 
                           searchQuery || 
                           priceRange[0] > 0 || 
                           priceRange[1] < 10000

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <section className="shop-hero">
        <div className="container">
          <span className="shop-hero__tag">COMPLETE COLLECTION</span>
          <h1 className="shop-hero__title">The Complete Shop</h1>
          <p className="shop-hero__subtitle">
            Discover our unified collection of exceptional Ceylon gemstones, fine jewelry, and love & celebration rings—all in one place for seamless exploration.
          </p>
        </div>
      </section>

      {/* Main Shop Container */}
      <div className="shop-container container">
        {/* Sidebar Filters */}
        <aside className="shop-sidebar">
          <div className="shop-sidebar__inner">
            {/* Search Input */}
            <div className="shop-filter-group">
              <h3 className="shop-filter-group__title">Search</h3>
              <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="shop-search-input"
                aria-label="Search products"
              />
            </div>

            {/* Category Filter */}
            <div className="shop-filter-group">
              <h3 className="shop-filter-group__title">Categories</h3>
              <div className="shop-categories">
                {allCategories.map(category => (
                  <label key={category} className="shop-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedCategories.has(category)}
                      onChange={() => handleCategoryToggle(category)}
                      aria-label={`Filter by ${category}`}
                    />
                    <span className="shop-checkbox__label">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="shop-filter-group">
              <h3 className="shop-filter-group__title">Price Range</h3>
              <div className="shop-price-inputs">
                <div className="shop-price-input-group">
                  <label className="shop-price-label">Min:</label>
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange('min', parseInt(e.target.value))}
                    className="shop-price-input"
                    aria-label="Minimum price"
                  />
                </div>
                <div className="shop-price-input-group">
                  <label className="shop-price-label">Max:</label>
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange('max', parseInt(e.target.value))}
                    className="shop-price-input"
                    aria-label="Maximum price"
                  />
                </div>
              </div>
              <div className="shop-price-slider-container">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange('min', parseInt(e.target.value))}
                  className="shop-price-slider"
                  aria-label="Minimum price slider"
                />
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange('max', parseInt(e.target.value))}
                  className="shop-price-slider"
                  aria-label="Maximum price slider"
                />
              </div>
              <div className="shop-price-display">
                ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
              </div>
            </div>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <button
                type="button"
                className="shop-clear-filters-btn"
                onClick={handleClearFilters}
              >
                Clear All Filters
              </button>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className="shop-content">
          {/* Top Controls */}
          <div className="shop-controls">
            <div className="shop-controls__left">
              <span className="shop-product-count">
                Showing <strong>{paginatedProducts.length}</strong> of <strong>{filteredProducts.length}</strong> products
              </span>
            </div>

            <div className="shop-controls__right">
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="shop-sort-select"
                aria-label="Sort products"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="carat">Carat: Largest First</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <>
              <div className="shop-grid">
                {paginatedProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    type={product.productType}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="shop-pagination">
                  <button
                    type="button"
                    className="shop-pagination__btn"
                    onClick={() => {
                      setCurrentPage(Math.max(1, currentPage - 1))
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                  >
                    ← Previous
                  </button>

                  <div className="shop-pagination__info">
                    Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
                  </div>

                  <button
                    type="button"
                    className="shop-pagination__btn"
                    onClick={() => {
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="shop-empty">
              <h3 className="shop-empty__title">No products match your filters</h3>
              <p className="shop-empty__text">
                Try adjusting your search criteria or price range to discover more pieces.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClearFilters}
              >
                Clear Filters and Browse All
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Concierge Banner */}
      <section className="shop-concierge">
        <div className="container shop-concierge__inner">
          <div className="shop-concierge__text">
            <h3>Can't find what you're looking for?</h3>
            <p>Our expert team is ready to help you discover the perfect piece or create something entirely custom.</p>
          </div>
          <div className="shop-concierge__action">
            <a href="/bespoke/enquiry" className="btn btn-primary">
              Request Bespoke Design
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

