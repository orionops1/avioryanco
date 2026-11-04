import React, { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { journalArticles } from '../data/products'
import './JournalArticle.css'

export default function JournalArticle() {
  const { slug } = useParams()
  const article = journalArticles.find(a => a.slug === slug)

  // Calculate read time based on content (approximately 200 words per minute)
  const readTime = useMemo(() => {
    if (!article) return 0
    const wordCount = article.content.split(/\s+/).length
    return Math.ceil(wordCount / 200)
  }, [article])

  // Find previous and next articles for navigation
  const currentIndex = journalArticles.findIndex(a => a.slug === slug)
  const prevArticle = currentIndex > 0 ? journalArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < journalArticles.length - 1 ? journalArticles[currentIndex + 1] : null

  if (!article) {
    // Article not found: show error with related articles
    const suggestedArticles = journalArticles.slice(0, 4)

    return (
      <div className="blogpost-error">
        <section className="blogpost-error-header">
          <div className="container">
            <h1>Article Not Found</h1>
            <p>We couldn't locate the article you're looking for. It may have been archived or the link may be incorrect.</p>
            <Link to="/journal" className="btn btn-primary" style={{ marginTop: 'var(--spacing-lg)' }}>
              ← Back to Journal
            </Link>
          </div>
        </section>

        {/* Suggest related articles */}
        {suggestedArticles.length > 0 && (
          <section className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
            <h2 className="section-title" style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>
              You might find these helpful
            </h2>
            <div className="related-articles-grid">
              {suggestedArticles.map(suggested => (
                <Link
                  key={suggested.id}
                  to={`/journal/${suggested.slug}`}
                  className="related-article-card"
                >
                  <div className="related-article-image">
                    <img src={suggested.image} alt={suggested.title} />
                  </div>
                  <div className="related-article-content">
                    <div className="related-article-category">{suggested.category}</div>
                    <h4 className="related-article-title">{suggested.title}</h4>
                    <p className="related-article-excerpt">{suggested.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    )
  }

  const relatedArticles = journalArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 4)

  return (
    <article className="blogpost">
      {/* NAVIGATION: Back to Blog Link */}
      <div className="blogpost-breadcrumbs container">
        <Link to="/journal" className="breadcrumb-link">← Back to Journal</Link>
      </div>

      {/* ARTICLE HEADER */}
      <header className="blogpost-header">
        <div className="container">
          <div className="blogpost-meta-top">
            <span className="blogpost-category">{article.category}</span>
            <span className="blogpost-read-time">{readTime} min read</span>
          </div>
          <h1 className="blogpost-title">{article.title}</h1>
          <div className="blogpost-byline">
            <span className="byline-author">{article.author}</span>
            <span className="byline-sep">•</span>
            <span className="byline-date">
              {new Date(article.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>
      </header>

      {/* FEATURED IMAGE - Full Width */}
      <div className="blogpost-featured-image">
        <img
          src={article.image}
          alt={article.title}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="blogpost-content-wrapper">
        <div className="container">
          <div className="blogpost-content-inner">
            {/* Article body with editorial typography */}
            <div
              className="blogpost-body"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* AUTHOR BIO BOX */}
            <aside className="blogpost-author-bio">
              <div className="author-bio-icon">✦</div>
              <div className="author-bio-content">
                <h4 className="author-bio-name">About the Author</h4>
                <p className="author-bio-title">{article.author}</p>
                <p className="author-bio-text">
                  Our expert contributors bring decades of experience in gemstones, jewelry
                  design, and luxury craftsmanship to share their knowledge and insights with
                  discerning collectors and enthusiasts.
                </p>
              </div>
            </aside>

            {/* ARTICLE NAVIGATION - Previous/Next */}
            <nav className="blogpost-navigation">
              {prevArticle ? (
                <Link to={`/journal/${prevArticle.slug}`} className="nav-article nav-prev">
                  <span className="nav-arrow">←</span>
                  <div className="nav-article-text">
                    <span className="nav-label">Previous Article</span>
                    <span className="nav-title">{prevArticle.title}</span>
                  </div>
                </Link>
              ) : (
                <div className="nav-placeholder" />
              )}

              {nextArticle ? (
                <Link to={`/journal/${nextArticle.slug}`} className="nav-article nav-next">
                  <div className="nav-article-text">
                    <span className="nav-label">Next Article</span>
                    <span className="nav-title">{nextArticle.title}</span>
                  </div>
                  <span className="nav-arrow">→</span>
                </Link>
              ) : (
                <div className="nav-placeholder" />
              )}
            </nav>

            {/* CTA SECTION */}
            <section className="blogpost-cta">
              <h3>Inspired to Create?</h3>
              <p>
                Begin your bespoke journey and bring your vision to life with AVIORY & CO.
              </p>
              <Link to="/bespoke" className="btn btn-primary">
                Start Creating
              </Link>
            </section>
          </div>
        </div>
      </div>

      {/* RELATED ARTICLES SECTION */}
      {relatedArticles.length > 0 && (
        <section className="blogpost-related">
          <div className="container">
            <div className="related-section-header">
              <span className="related-label">FURTHER READING</span>
              <h2>Related Articles</h2>
            </div>
            <div className="related-articles-grid">
              {relatedArticles.map(related => (
                <Link
                  key={related.id}
                  to={`/journal/${related.slug}`}
                  className="related-article-card"
                >
                  <div className="related-article-image">
                    <img src={related.image} alt={related.title} />
                  </div>
                  <div className="related-article-content">
                    <div className="related-article-category">{related.category}</div>
                    <h4 className="related-article-title">{related.title}</h4>
                    <p className="related-article-excerpt">{related.excerpt}</p>
                    <div className="related-article-meta">
                      <span>{related.author}</span>
                      <span>
                        {new Date(related.publishDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER NAVIGATION */}
      <div className="blogpost-footer-nav container">
        <Link to="/journal" className="footer-nav-link">
          ← Explore More Articles
        </Link>
      </div>
    </article>
  )
}

