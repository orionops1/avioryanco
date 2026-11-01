import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroVideo from "../components/HeroVideo";
import ProductCard from "../components/ProductCard";
import { gemstones, journalArticles, fineJewellery } from "../data/products";
import { useLanguage } from "../hooks/useLanguage";
import "./Home.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [highlightTab, setHighlightTab] = useState("all");
  const { t } = useLanguage();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3500);
  };

  const heroVideo = {
    video: "/videos/hero-luxury.mp4",
    poster: "/images/hero-banner.jpg",
    title: t("hero.title", "AVIORY & CO."),
    subtitle: t("hero.subtitle", "The Art of Natural Ceylon Gemstones & Fine Jewellery"),
    cta: { label: "Explore The House", href: "/gemstones" }
  };

  return (
    <div className="aviory-homepage">
      {/* 1. HERO VIDEO / CAMPAIGN */}
      <HeroVideo 
        video={heroVideo.video}
        poster={heroVideo.poster}
        title={heroVideo.title}
        subtitle={heroVideo.subtitle}
        cta={heroVideo.cta}
      />
      {/* USP Trust Strip */}
      <div className="home-usp-strip">
        <div className="home-usp-strip__item">
          <span className="home-usp-strip__icon" aria-hidden="true">&#10022;</span>
          <span>Complimentary Worldwide Shipping</span>
        </div>
        <div className="home-usp-strip__item">
          <span className="home-usp-strip__icon" aria-hidden="true">&#9671;</span>
          <span>Certified Unheated Ceylon Gemstones</span>
        </div>
        <div className="home-usp-strip__item">
          <span className="home-usp-strip__icon" aria-hidden="true">&#10023;</span>
          <span>Private Consultations Available</span>
        </div>
      </div>


      {/* 2. THE TWO PILLARS: LOVE COLLECTION + HIGH JEWELLERY */}
      <section className="home-editorial-two-up">
        <div className="container">
          <div className="editorial-two-up-grid">
            {/* LEFT PILLAR: THE LOVE COLLECTION */}
            <div className="editorial-panel">
              <div 
                className="editorial-panel-image" 
                style={{ backgroundImage: "url(/images/rings-for-every-love-story.jpg)" }}
              >
                <div className="editorial-panel-overlay" />
              </div>
              <div className="editorial-panel-content">
                <span className="editorial-eyebrow">THE LOVE COLLECTION</span>
                <h3>Rings for Every Love Story</h3>
                <p>
                  She will say "Yes" to handcrafted engagement rings set with rare, unheated Ceylon sapphires and certified natural gemstones.
                </p>
                <Link to="/love-and-celebration" className="btn btn-primary btn-small">
                  EXPLORE LOVE COLLECTION
                </Link>
              </div>
            </div>

            {/* RIGHT PILLAR: HIGH JEWELLERY & RARE GEMS */}
            <div className="editorial-panel">
              <div 
                className="editorial-panel-image" 
                style={{ backgroundImage: "url(/images/atelier-masterpieces.jpg)" }}
              >
                <div className="editorial-panel-overlay" />
              </div>
              <div className="editorial-panel-content">
                <span className="editorial-eyebrow">HIGH JEWELLERY ATELIER</span>
                <h3>Atelier Masterpieces</h3>
                <p>
                  One-of-a-kind statement necklaces, drop earrings, cuffs, and collector-grade natural gemstones hand-wrought by Ceylon goldsmiths.
                </p>
                <Link to="/fine-jewellery" className="btn btn-primary btn-small">
                  EXPLORE FINE JEWELLERY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED STORY: WE DESIGN VALUE FOR EVERY LOVE STORY (Bespoke Focus) */}
      <section className="home-value-hero">
        <div className="home-value-hero-grid">
          <div 
            className="home-value-hero-image" 
            style={{ backgroundImage: "url(/images/we-design-value.jpg)" }}
          >
            <div className="home-value-hero-overlay" />
          </div>
          <div className="home-value-hero-content">
            <span className="editorial-eyebrow">BESPOKE COMMISSIONS &amp; VALUE</span>
            <h2>We Design Value for Every Love Story</h2>
            <p>
              From natural rough gemstone custody in the historic gravels of Ceylon to master goldsmith hand-forging in 950 platinum and 18K solid gold, each bespoke commission is engineered as an immutable generational store of beauty and enduring value.
            </p>
            <div className="home-value-hero-actions">
              <Link to="/bespoke" className="btn btn-primary">
                START YOUR COMMISSION
              </Link>
              <Link to="/our-house" className="btn btn-outline">
                DISCOVER OUR PROVENANCE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE ART OF THE GIFT (Curated Gifts & Milestones) */}
      <section className="home-gift-section">
        <div className="home-gift-grid">
          <div 
            className="home-gift-image" 
            style={{ backgroundImage: "url(/images/the-art-of-the-gift.jpg)" }}
          >
            <div className="home-gift-overlay" />
          </div>
          <div className="home-gift-content">
            <span className="editorial-eyebrow">MILESTONES &amp; CELEBRATIONS</span>
            <h2>The Art of the Gift</h2>
            <p>
              Celebrate every milestone of the ones you cherish. From proposal rings and wedding day heirlooms to anniversary milestones and birthday tributes, discover creations presented in our signature bespoke luxury packaging.
            </p>
            <Link to="/fine-jewellery" className="btn btn-primary">
              DISCOVER CURATED GIFTS
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CEYLON SAPPHIRES: THE ISLAND OF GEMS */}
      <section className="home-heritage-section">
        <div className="container">
          <div className="home-heritage-grid">
            <div className="home-heritage-content">
              <span className="editorial-eyebrow">CEYLON HERITAGE VAULT</span>
              <h2>Rare Natural Gemstones</h2>
              <p>
                For more than two millennia, Sri Lanka has yielded the most extraordinary unheated royal blue sapphires, padparadschas, and rare spinels. Each stone is ethically mined in Ratnapura and Balangoda and certified by the world's premier laboratories: GRS, GIA, and Lotus.
              </p>
              <div className="home-heritage-actions">
                <Link to="/gemstones?category=blue-sapphires" className="btn btn-primary">
                  EXPLORE SAPPHIRES
                </Link>
                <Link to="/our-house" className="btn btn-outline">
                  OUR PROVENANCE
                </Link>
              </div>
            </div>
            <div className="home-heritage-visual">
              <div className="home-heritage-card">
                <div className="heritage-badge">100% UNHEATED &amp; CERTIFIED NATURAL</div>
                <div className="heritage-gemstone-image-wrap">
                  <img 
                    src="/images/editorial/ceylon-sapphire-vault.jpg" 
                    alt="Royal Ceylon Blue Sapphire" 
                    className="heritage-gemstone-img"
                  />
                  <span className="heritage-gemstone-tag">LOTUS &amp; GRS CERTIFIED</span>
                </div>
                <div className="heritage-gemstone-details">
                  <h4>Royal Ceylon Sapphire</h4>
                  <p className="heritage-gemstone-meta">7.42 Carats &bull; Cushion Cut &bull; Unheated</p>
                  <p className="heritage-gemstone-desc">
                    Direct mine-to-atelier custody from Balangoda, Ceylon. Ethically mined and certified untreated natural crystalline purity.
                  </p>
                  <Link to="/gemstones?category=blue-sapphires" className="heritage-card-link">
                    EXPLORE VAULT SPECIMENS &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CURATED HIGHLIGHTS SHOWCASE (Single Tabbed Section - Eliminates Duplication & Scrolling) */}
      <section className="featured-products">
        <div className="container">
          <div className="section-title-wrap">
            <span className="editorial-eyebrow">CURATED HIGHLIGHTS</span>
            <h2 className="section-heading">Featured Creations</h2>
            <div className="highlight-tabs" style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1.25rem" }}>
              <button
                type="button"
                className={`btn btn-small ${highlightTab === "all" ? "btn-primary" : "btn-outline"}`}
                onClick={() => setHighlightTab("all")}
              >
                ALL HIGHLIGHTS
              </button>
              <button
                type="button"
                className={`btn btn-small ${highlightTab === "gemstones" ? "btn-primary" : "btn-outline"}`}
                onClick={() => setHighlightTab("gemstones")}
              >
                RARE GEMSTONES
              </button>
              <button
                type="button"
                className={`btn btn-small ${highlightTab === "jewellery" ? "btn-primary" : "btn-outline"}`}
                onClick={() => setHighlightTab("jewellery")}
              >
                HAUTE JOAILLERIE
              </button>
            </div>
          </div>
          <div className="products-showcase">
            {highlightTab === "all" && [
              ...gemstones.slice(0, 2).map(g => ({ ...g, _type: "gemstone" })),
              ...fineJewellery.slice(0, 2).map(j => ({ ...j, _type: "jewellery" }))
            ].map(item => (
              <ProductCard key={item.id} product={item} type={item._type} />
            ))}
            {highlightTab === "gemstones" && gemstones.slice(0, 4).map(gem => (
              <ProductCard key={gem.id} product={gem} type="gemstone" />
            ))}
            {highlightTab === "jewellery" && fineJewellery.slice(0, 4).map(item => (
              <ProductCard key={item.id} product={item} type="jewellery" />
            ))}
          </div>
        </div>
      </section>

      {/* 8. FROM OUR JOURNAL (Editorial Knowledge) */}
      <section className="journal-preview">
        <div className="container">
          <div className="section-title-wrap">
            <span className="editorial-eyebrow">EDITORIAL &amp; KNOWLEDGE</span>
            <h2 className="section-heading">From Our Journal</h2>
            <p className="section-subtitle">Gemological insights, provenance disclosures, and jewelry care</p>
          </div>
          <div className="journal-grid">
            {journalArticles.slice(0, 3).map(article => (
              <Link key={article.id} to={`/journal/${article.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="journal-card">
                  <div className="journal-category">{article.category}</div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="journal-meta">
                    By {article.author} &bull; {new Date(article.publishDate).toLocaleDateString()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "var(--spacing-2xl)" }}>
            <Link to="/journal" className="btn btn-outline">
              READ ALL ARTICLES
            </Link>
          </div>
        </div>
      </section>

      {/* 9. NEWSLETTER / CIRCLE OF CONNOISSEURS */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <span className="editorial-eyebrow" style={{ color: "#D4AF7F" }}>THE PRIVATE CIRCLE</span>
            <h2>Join Our Circle</h2>
            <p>Receive exclusive private access to newly acquired Ceylon gemstones, bespoke commission invitations, and editorial journal stories.</p>
            {subscribed && <div className="alert alert-success">{t("home.subscribeSuccess", "Thank you for subscribing!")}</div>}
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder={t("home.emailPlaceholder", "Enter your email address")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </section>

      {/* 10. ATELIER & SALON CONSULTATION */}
      <section className="cta-section">
        <div className="container">
          <span className="editorial-eyebrow">PRIVATE SALON EXPERIENCE</span>
          <h2>Visit Our Atelier &amp; Private Salon</h2>
          <p>Our gemologists and master goldsmiths are available for private in-person or virtual consultations worldwide.</p>
          <div style={{ display: "flex", gap: "var(--spacing-md)", justifyContent: "center", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <Link to="/contact" className="btn btn-primary">
              BOOK A PRIVATE CONSULTATION
            </Link>
            <Link to="/our-house" className="btn btn-outline">
              DISCOVER OUR HOUSE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
