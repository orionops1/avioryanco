import { Link } from 'react-router-dom'
import './LoveCelebration.css'

export default function LoveCelebration() {
  const engagementRings = [
    { id: 1, name: 'The Aviory Setting', subtitle: 'Round brilliant solitaire', path: '/engagement-rings' },
    { id: 2, name: 'Three-Stone Ring', subtitle: 'Past, present & future', path: '/engagement-rings' },
    { id: 3, name: 'Halo Setting', subtitle: 'Gemstone-encrusted halo', path: '/engagement-rings' },
    { id: 4, name: 'Pavé Band', subtitle: 'Continuous sparkle', path: '/engagement-rings' },
    { id: 5, name: 'Coloured Gemstone', subtitle: 'Sapphire, ruby & emerald', path: '/engagement-rings' },
    { id: 6, name: 'Vintage-Inspired', subtitle: 'Art deco silhouettes', path: '/engagement-rings' },
  ]

  const gemstoneCuts = [
    { name: 'Cushion Cut' },
    { name: 'Oval Brilliant' },
    { name: 'Emerald Cut' },
    { name: 'Round Brilliant' },
    { name: 'Pear Shape' },
    { name: 'Princess Cut' },
  ]

  const celebrations = [
    { name: 'Milestone', subtitle: 'Mark every achievement' },
    { name: 'Anniversary', subtitle: 'Celebrate your journey' },
    { name: 'Wedding', subtitle: 'Eternal promises' },
    { name: 'Birthday', subtitle: 'A gift to remember' },
  ]

  const weddingBands = [
    { name: "Women's Bands", subtitle: 'Precious gemstone & metal' },
    { name: "Men's Bands", subtitle: 'Classic & modern' },
    { name: 'Matching Sets', subtitle: 'His & hers' },
    { name: 'Eternity Rings', subtitle: 'Unending sparkle' },
  ]

  const subNavItems = [
    { label: 'Engagement Rings', id: 'engagement' },
    { label: 'Gemstone Cuts', id: 'gemstone-cuts' },
    { label: 'Wedding Bands', id: 'wedding-bands' },
    { label: 'Celebration', id: 'celebration' },
  ]

  return (
    <div className="lc-page">
      {/* Hero */}
      <section className="lc-hero">
        <div className="lc-hero-content">
          <span className="lc-hero-eyebrow">AVIORY LOVE COLLECTION</span>
          <h1 className="lc-hero-title">Rings for Every Love Story</h1>
          <p className="lc-hero-subtitle">
            We believe every love story deserves an exceptional beginning. Each piece in the AVIORY Love Collection is handcrafted to celebrate the moments that matter most—from first meetings to lifetime commitments.
          </p>
          <div className="lc-hero-cta-group">
            <Link to="/consultations" className="lc-hero-cta">Book a Private Consultation</Link>
            <a href="#engagement" className="lc-hero-cta-secondary">Explore Rings</a>
          </div>
        </div>
      </section>

      {/* Sub-nav */}
      <nav className="lc-subnav" aria-label="Love & Celebration sections">
        <div className="lc-subnav-inner">
          {subNavItems.map(item => (
            <a key={item.id} href={`#${item.id}`} className="lc-subnav-link">{item.label}</a>
          ))}
          <span className="lc-subnav-separator">·</span>
          <a href="/consultations" className="lc-subnav-link lc-subnav-highlight">The Aviory Difference</a>
        </div>
      </nav>

      {/* Engagement Rings */}
      <section id="engagement" className="lc-section">
        <div className="lc-section-header">
          <h2 className="lc-section-title">Engagement Rings</h2>
          <p className="lc-section-desc">
            Each ring is a singular expression of your love — 100% natural unheated Ceylon gemstones of certified provenance, handcrafted in our atelier.
          </p>
        </div>
        <div className="lc-grid lc-grid-3">
          {engagementRings.map(ring => (
            <Link key={ring.id} to={ring.path} className="lc-card">
              <div className="lc-card-image"></div>
              <div className="lc-card-body">
                <h3 className="lc-card-name">{ring.name}</h3>
                <p className="lc-card-sub">{ring.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="lc-section-cta">
          <Link to="/engagement-rings" className="lc-btn-outline">Explore All Engagement Rings</Link>
        </div>
      </section>

      {/* Gemstone Cuts */}
      <section id="gemstone-cuts" className="lc-section lc-section-alt">
        <div className="lc-section-header">
          <h2 className="lc-section-title">Gemstone Cuts &amp; Silhouettes</h2>
          <p className="lc-section-desc">
            Natural Ceylon sapphires, rubies and emeralds possess unique crystal structures. Find the cut that illuminates your gemstone's vivid hue.
          </p>
        </div>
        <div className="lc-grid lc-grid-6">
          {gemstoneCuts.map(cut => (
            <Link key={cut.name} to="/gemstones" className="lc-shape-card">
              <div className="lc-shape-image"></div>
              <p className="lc-shape-name">{cut.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Wedding Bands */}
      <section id="wedding-bands" className="lc-section">
        <div className="lc-section-header">
          <h2 className="lc-section-title">Wedding Bands</h2>
          <p className="lc-section-desc">
            Symbols of eternity, meticulously crafted to complement your engagement ring or stand beautifully alone.
          </p>
        </div>
        <div className="lc-grid lc-grid-4">
          {weddingBands.map(band => (
            <Link key={band.name} to="/jewellery" className="lc-card">
              <div className="lc-card-image lc-card-image-wide"></div>
              <div className="lc-card-body">
                <h3 className="lc-card-name">{band.name}</h3>
                <p className="lc-card-sub">{band.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Celebration */}
      <section id="celebration" className="lc-section lc-section-alt">
        <div className="lc-section-header">
          <h2 className="lc-section-title">Celebration</h2>
          <p className="lc-section-desc">
            Mark every milestone with jewellery that carries the weight of the moment.
          </p>
        </div>
        <div className="lc-grid lc-grid-4">
          {celebrations.map(cel => (
            <Link key={cel.name} to="/jewellery" className="lc-card">
              <div className="lc-card-image lc-card-image-tall"></div>
              <div className="lc-card-body">
                <h3 className="lc-card-name">{cel.name}</h3>
                <p className="lc-card-sub">{cel.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* The Aviory Difference */}
      <section className="lc-difference">
        <div className="lc-difference-inner">
          <h2 className="lc-difference-title">The Aviory Difference</h2>
          <div className="lc-difference-grid">
            <div className="lc-diff-item">
              <div className="lc-diff-icon">◈</div>
              <h3>Ethically Sourced</h3>
              <p>Every gemstone traced to its origin — conflict-free, responsibly mined, certified authentic.</p>
            </div>
            <div className="lc-diff-item">
              <div className="lc-diff-icon">◈</div>
              <h3>Ceylon Heritage</h3>
              <p>Direct access to the world's finest sapphires, rubies, and alexandrites from Sri Lanka.</p>
            </div>
            <div className="lc-diff-item">
              <div className="lc-diff-icon">◈</div>
              <h3>Private Consultation</h3>
              <p>Work one-on-one with our gemologists to create a ring as unique as your story.</p>
            </div>
            <div className="lc-diff-item">
              <div className="lc-diff-icon">◈</div>
              <h3>Lifetime Guarantee</h3>
              <p>Every piece comes with a lifetime warranty and complimentary cleaning service.</p>
            </div>
          </div>
          <div className="lc-difference-cta">
            <Link to="/consultations" className="lc-btn-primary">Book a Gemstone Specialist</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
