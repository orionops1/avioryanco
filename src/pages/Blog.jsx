import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { journalArticles } from '../data/products'
import './Blog.css'

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showClearButton, setShowClearButton] = useState(false)

  // Extract unique categories from articles
  const allCategories = ['all', ...new Set(journalArticles.map(a => a.category))]

  // Synchronize category from URL search parameters on mount
  useEffect(() => {
    const catQuery = searchParams.get('category')
    if (catQuery && allCategories.includes(catQuery)) {
      setSelectedCategory(catQuery)
    }
  }, [searchParams, allCategories])

  // Handle category filter change and update URL
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    if (category === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  // Handle search input
  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    setShowClearButton(query.length > 0 || selectedCategory !== 'all')
  }

  // Clear filters
  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setSearchParams({})
    setShowClearButton(false)
  }

  // Filter articles by category and search query
  const filteredArticles = useMemo(() => {
    return journalArticles.filter(article => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="blog-page">
      {/* HERO SECTION */}
      <section className="blog-hero">
        <div className="container">
          <span className="blog-hero__tag">EDITORIAL</span>
          <h1 className="blog-hero__title">The Aviory Journal</h1>
          <p className="blog-hero__subtitle">
            Insights, education, and inspiration from our experts. Explore the art, science, and craft behind fine gemstones and bespoke jewelry.
          </p>
        </div>
      </section>

      {/* FILTERS & SEARCH SECTION */}
      <section className="blog-filters-section">
        <div className="container">
          {/* SEARCH BOX */}
          <div className="blog-search-wrapper">
            <div className="blog-search-box">
              <svg className="blog-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                className="blog-search-input"
                value={searchQuery}
                onChange={handleSearchChange}
                aria-label="Search articles by title"
              />
            </div>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="blog-filter-bar">
            <div className="blog-filter-controls">
              {allCategories.map(category => (
                <button
                  key={category}
                  className={`blog-filter-btn ${selectedCategory === category ? 'blog-filter-btn--active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                  aria-pressed={selectedCategory === category}
                  aria-label={`Filter by ${category === 'all' ? 'all categories' : category}`}
                >
                  {category === 'all' ? 'All Articles' : category}
                </button>
              ))}
            </div>

            {/* CLEAR FILTERS BUTTON */}
            {showClearButton && (
              <button
                className="blog-clear-btn"
                onClick={handleClearFilters}
                aria-label="Clear all filters"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* ARTICLE COUNT */}
          <div className="blog-article-count">
            <span className="blog-article-count__text">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="blog-articles-section">
        <div className="container">
          {filteredArticles.length > 0 ? (
            <div className="blog-articles-grid">
              {filteredArticles.map(article => (
                <article key={article.id} className="blog-article-card">
                  <Link 
                    to={`/blog/${article.slug}`} 
                    className="blog-article-card__image-link"
                    aria-label={`Read ${article.title}`}
                  >
                    <div className="blog-article-card__image-wrapper">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="blog-article-card__image"
                        loading="lazy"
                      />
                      <div className="blog-article-card__image-overlay"></div>
                    </div>
                  </Link>

                  <div className="blog-article-card__content">
                    {/* Category Badge */}
                    <div className="blog-article-card__category-badge">
                      {article.category}
                    </div>

                    {/* Title */}
                    <h2 className="blog-article-card__title">
                      <Link to={`/blog/${article.slug}`} className="blog-article-card__title-link">
                        {article.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="blog-article-card__excerpt">
                      {article.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="blog-article-card__meta">
                      <span className="blog-article-card__author">By {article.author}</span>
                      <span className="blog-article-card__divider">•</span>
                      <time className="blog-article-card__date" dateTime={article.publishDate}>
                        {formatDate(article.publishDate)}
                      </time>
                    </div>

                    {/* Read More Link */}
                    <Link to={`/blog/${article.slug}`} className="blog-article-card__read-more">
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* EMPTY STATE */
            <div className="blog-empty-state">
              <h3 className="blog-empty-state__title">No Articles Found</h3>
              <p className="blog-empty-state__message">
                We couldn't find any articles matching your filters. Try adjusting your search or exploring other categories.
              </p>
              <button
                className="blog-empty-state__button"
                onClick={handleClearFilters}
              >
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

