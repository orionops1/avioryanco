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
    slogan: "DESIRE, MADE REAL.",
    subtitle: "Every love has its own expression. Exceptional Ceylon gemstones and fine jewellery, created around the moments that define you.",
    cta: { label: "Begin Your Story", href: "/love-and-celebration" }
  };

  return (
    <div className="aviory-homepage">
      {/* 1. HERO VIDEO / CAMPAIGN */}
      <HeroVideo 
        video={heroVideo.video}
        poster={heroVideo.poster}
        title={heroVideo.title}
        slogan={heroVideo.slogan}
        subtitle={heroVideo.subtitle}
        cta={heroVideo.cta}
      />

      {/* USP Trust Strip — Tiffany-standard subtle pillar row */}
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

      {/* 2. LOVE & CELEBRATION — For the Moments Too Large for Words */}
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
                <span className="editorial-eyebrow">LOVE &amp; CELEBRATION</span>
                <h3>For the Moments Too Large for Words</h3>
                <p>
                  Some moments cannot be explained &mdash; only felt. A question asked in a quiet room. A promise made in front of everyone you love. Discover engagement rings and fine jewellery created to hold the weight of those moments.
                </p>
                <Link to="/love-and-celebration" className="btn btn-primary btn-small">
                  EXPLORE LOVE &amp; CELEBRATION
                </Link>
              </div>
            </div>

            {/* RIGHT PILLAR: HIGH JEWELLERY & ATELIER */}
            <div className="editorial-panel">
              <div 
                className="editorial-panel-image" 
                style={{ backgroundImage: "url(/images/atelier-masterpieces.jpg)" }}
              >
                <div className="editorial-panel-overlay" />
              </div>
              <div className="editorial-panel-content">
                <span className="editorial-eyebrow">HIGH JEWELLERY ATELIER</span>
                <h3>Beauty That Becomes Part of Your Story</h3>
                <p>
                  The pieces we wear daily become part of who we are. From considered everyday silhouettes to extraordinary statements &mdash; crafted with certified unheated gemstones, made to be worn, not kept away.
                </p>
                <Link to="/fine-jewellery" className="btn btn-primary btn-small">
                  EXPLORE FINE JEWELLERY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BESPOKE CREATIONS (Elevated Position: High-Value Collaboration) */}
      <section className="home-value-hero">
        <div className="home-value-hero-grid">
          <div 
            className="home-value-hero-image" 
            style={{ backgroundImage: "url(/images/we-design-value.jpg)" }}
          >
            <div className="home-value-hero-overlay" />
          </div>
          <div className="home-value-hero-content">
            <span className="editorial-eyebrow">PURE INTIMACY &bull; THE BESPOKE PROGRAMME</span>
            <h2>A Piece That Belongs Only to You</h2>
            <p>
              Some feelings are difficult to put into words. Tell us about the person. The memory. The moment you want to make permanent.
            </p>
            <p style={{ marginTop: "-1rem", fontStyle: "italic", color: "#8E6F3E" }}>
              Together, we will select an unheated gemstone and develop a design that feels personal, meaningful &mdash; and entirely yours. This is not a purchase. It is a collaboration.
            </p>
            <div className="home-value-hero-actions">
              <Link to="/bespoke" className="btn btn-primary">
                BEGIN A BESPOKE CONVERSATION
              </Link>
              <Link to="/our-house" className="btn btn-outline">
                DISCOVER OUR HOUSE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MILESTONES & GIVING (For the People Who Deserve More Than a Gesture) */}
      <section className="home-gift-section">
        <div className="home-gift-grid">
          <div 
            className="home-gift-image" 
            style={{ backgroundImage: "url(/images/the-art-of-the-gift.jpg)" }}
          >
            <div className="home-gift-overlay" />
          </div>
          <div className="home-gift-content">
            <span className="editorial-eyebrow">MILESTONES &amp; GIVING</span>
            <h2>For the People Who Deserve More Than a Gesture</h2>
            <p>
              A birthday. An anniversary. An unexpected Tuesday when you simply wanted them to know.
            </p>
            <p style={{ marginTop: "-1rem", fontWeight: "500", color: "#111111" }}>
              Find something that says: <em>I thought of you, specifically.</em>
            </p>
            <div style={{ marginTop: "1rem" }}>
              <Link to="/fine-jewellery" className="btn btn-primary">
                DISCOVER MEANINGFUL GIFTS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CEYLON GEMSTONES: A HERITAGE WRITTEN IN COLOUR */}
      <section className="home-heritage-section">
        <div className="container">
          <div className="home-heritage-grid">
            <div className="home-heritage-content">
              <span className="editorial-eyebrow">CEYLON PROVENANCE &amp; SCIENCE</span>
              <h2>A Heritage Written in Colour</h2>
              <p>
                Sri Lanka is one of the oldest gemstone origins on earth &mdash; a legendary island that has yielded extraordinary sapphires, rubies, and spinels for more than two millennia.
              </p>
              <p>
                At Aviory, we bring this heritage closer through a rigorous curation of 100% natural, unheated Ceylon gemstones, accompanied by international reports from Lotus, GRS, and GIA.
              </p>
              <div className="home-heritage-actions">
                <Link to="/gemstones" className="btn btn-primary">
                  EXPLORE CEYLON GEMSTONES
                </Link>
                <Link to="/our-house" className="btn btn-outline">
                  OUR GEMSTONE HERITAGE
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
                  <span className="editorial-eyebrow" style={{ fontSize: "0.62rem", marginBottom: "0.25rem" }}>A CLOSER LOOK</span>
                  <h4>Royal Ceylon Sapphire</h4>
                  <p className="heritage-gemstone-meta">7.42 Carats &bull; Cushion Cut &bull; Unheated &bull; Natural</p>
                  <p className="heritage-gemstone-desc">
                    The colour of a clear evening sky, just after the light changes. Unheated, unaltered, and accompanied by full gemmological documentation.
                  </p>
                  <Link to="/gemstones?category=blue-sapphires" className="heritage-card-link">
                    DISCOVER THIS SAPPHIRE &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CURATED HIGHLIGHTS SHOWCASE */}
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

      {/* 7. OUR HOUSE & THE BRAND CREDO */}
      <section className="home-credo-section" style={{
        backgroundColor: "#111111",
        color: "#FAF7F2",
        padding: "clamp(4rem, 8vw, 6.5rem) 1.5rem",
        textAlign: "center"
      }}>
        <div className="container" style={{ maxWidth: "860px", margin: "0 auto" }}>
          <span className="editorial-eyebrow" style={{ color: "#DFBA73" }}>OUR HOUSE &bull; THE CREDO</span>
          <h2 style={{
            fontFamily: "var(--font-serif-display, 'Playfair Display', serif)",
            fontSize: "clamp(2rem, 3.8vw, 3rem)",
            fontWeight: 400,
            color: "#FFFFFF",
            lineHeight: 1.25,
            marginBottom: "1.5rem"
          }}>
            More Than Jewellery.<br />A Personal Expression.
          </h2>
          <p style={{
            fontFamily: "var(--font-serif-body, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(1.15rem, 2vw, 1.35rem)",
            lineHeight: 1.8,
            color: "#EDE7DC",
            marginBottom: "2rem"
          }}>
            Born in Sri Lanka &mdash; a country with one of the world's most celebrated gemstone heritages &mdash; Aviory brings together the beauty of Ceylon gemstones, gemmological knowledge, and master goldsmith artistry. Every gemstone has its own character, and every creation has the opportunity to mean something different to the person who carries it.
          </p>
          <div style={{
            display: "inline-block",
            padding: "1.25rem 2.5rem",
            border: "1px solid rgba(223, 186, 115, 0.4)",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            marginBottom: "2.5rem"
          }}>
            <p style={{
              margin: 0,
              fontFamily: "var(--font-serif-display, 'Playfair Display', serif)",
              fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
              fontStyle: "italic",
              color: "#DFBA73"
            }}>
              &ldquo;We do not believe in jewellery made for everyone.<br />We believe in jewellery made for someone.&rdquo;
            </p>
          </div>
          <div>
            <Link to="/our-house" className="btn btn-primary" style={{ backgroundColor: "#DFBA73", color: "#111111", border: "none" }}>
              DISCOVER THE AVIORY STORY
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FROM OUR JOURNAL */}
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
