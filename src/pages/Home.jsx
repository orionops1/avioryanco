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
        video="/videos/hero-luxury.mp4"
        poster="/images/hero-banner.jpg"
        slogan="MADE TO BE FELT, NOT JUST WORN."
        subtitle="Natural Ceylon gems. Handcrafted in Sri Lanka. Carried close, every single day."
        cta={{ label: "EXPLORE THE VOW COLLECTION", href: "/love-and-celebration" }}
        ctaSecondary={{ label: "COMMISSION A BESPOKE PIECE →", href: "/bespoke/enquiry" }}
      />

      {/* USP Trust Strip — Tiffany-standard subtle pillar row */}
      <div className="home-usp-strip">
        <div className="home-usp-strip__item">
          <span className="home-usp-strip__icon" aria-hidden="true">&#10022;</span>
          <span>Ships Anywhere in the World</span>
        </div>
        <div className="home-usp-strip__item">
          <span className="home-usp-strip__icon" aria-hidden="true">&#9671;</span>
          <span>100% Natural, Unheated Ceylon Gems</span>
        </div>
        <div className="home-usp-strip__item">
          <span className="home-usp-strip__icon" aria-hidden="true">&#10023;</span>
          <span>Private Appointments — In Person or Online</span>
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
                <h3>The Ring She Will Never Take Off</h3>
                <p>
                  Some feelings are too big to put into words. So you put them into gold. Engagement rings and celebration jewellery created to carry the weight of your most important moments — beautifully, forever.
                </p>
                <Link to="/love-and-celebration" className="btn btn-primary btn-small">
                  EXPLORE THE VOW COLLECTION
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
                <span className="editorial-eyebrow">FINE JEWELLERY</span>
                <h3>Gold That Stays Warm Against Her Skin</h3>
                <p>
                  The pieces you reach for every morning. The ones that feel wrong to remove. Fine jewellery with natural Ceylon gemstones — made to live on you, not in a box.
                </p>
                <Link to="/fine-jewellery" className="btn btn-primary btn-small">
                  DISCOVER FINE JEWELLERY
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
            <span className="editorial-eyebrow">MADE ONLY FOR YOU</span>
            <h2>A Piece That Holds Your Secret</h2>
            <p>
              Think of the person. The feeling. The moment you want to freeze in gold and stone — and keep close for the rest of your life.
            </p>
            <p style={{ marginTop: "-1rem", fontStyle: "italic", color: "#8E6F3E" }}>
              We will sit with you — in our atelier or over video — and design something that belongs entirely to you two. No templates. No catalogues. Just the story you bring us, turned into something real.
            </p>
            <div className="home-value-hero-actions">
              <Link to="/bespoke" className="btn btn-primary">
                START YOUR STORY
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
            <span className="editorial-eyebrow">A GIFT THAT SAYS EVERYTHING</span>
            <h2>For the Person You Think About When Nobody Is Watching</h2>
            <p>
              A birthday. An anniversary. An ordinary Tuesday when you just needed them to know.
            </p>
            <p style={{ marginTop: "-1rem", fontWeight: "500", color: "#111111" }}>
              Find something that says: <em>I chose this for you, and only you.</em>
            </p>
            <div style={{ marginTop: "1rem" }}>
              <Link to="/fine-jewellery" className="btn btn-primary">
                FIND THE PERFECT GIFT
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
              <span className="editorial-eyebrow">BORN IN SRI LANKA</span>
              <h2>Wild Colour, Straight from the Earth</h2>
              <p>
                Sri Lanka has been producing the world's most extraordinary sapphires, rubies, and spinels for over two thousand years. These are not factory stones. They are pulled from the ground exactly as nature made them — unheated, untreated, alive with colour.
              </p>
              <p>
                Every gem at Aviory carries full certification from Lotus, GRS, or GIA — confirming it has never been touched by heat. What you see is exactly what nature created.
              </p>
              <div className="home-heritage-actions">
                <Link to="/gemstones" className="btn btn-primary">
                  EXPLORE RARE CEYLON GEMS
                </Link>
                <Link to="/our-house" className="btn btn-outline">
                  OUR STORY
                </Link>
              </div>
            </div>
            <div className="home-heritage-visual">
              <div className="home-heritage-card">
                <div className="heritage-badge">100% NATURAL · NEVER HEATED</div>
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
                    The colour of deep evening sky. Pulled from Sri Lankan earth, never touched by heat — wild and completely real.
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
            <span className="editorial-eyebrow">HANDPICKED FOR YOU</span>
            <h2 className="section-heading">Pieces Worth Falling For</h2>
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
          <span className="editorial-eyebrow" style={{ color: "#DFBA73" }}>WHO WE ARE</span>
          <h2 style={{
            fontFamily: "var(--font-serif-display, 'Playfair Display', serif)",
            fontSize: "clamp(2rem, 3.8vw, 3rem)",
            fontWeight: 400,
            color: "#FFFFFF",
            lineHeight: 1.25,
            marginBottom: "1.5rem"
          }}>
            We Don't Make Jewellery for Everyone.<br />We Make It for Someone.
          </h2>
          <p style={{
            fontFamily: "var(--font-serif-body, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(1.15rem, 2vw, 1.35rem)",
            lineHeight: 1.8,
            color: "#EDE7DC",
            marginBottom: "2rem"
          }}>
            Sri Lanka has given the world some of its most extraordinary gems for over two thousand years. We bring that heritage into every piece — combining natural, unheated Ceylon gems with master goldsmith craftsmanship. Each creation is designed around one person, one feeling, one story. Yours.
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
              &ldquo;Not for everyone who wants beautiful jewellery.<br />For the one person who deserves this exact piece.&rdquo;
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
            <span className="editorial-eyebrow">STORIES FROM THE ATELIER</span>
            <h2 className="section-heading">From Our Journal</h2>
            <p className="section-subtitle">On gems, gold, the craft — and the feelings that make it all worth it.</p>
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
            <span className="editorial-eyebrow" style={{ color: "#D4AF7F" }}>STAY CLOSE</span>
            <h2>Be the First to Know</h2>
            <p>New rare gems. New designs. Private appointments before they open to everyone. No noise — only the things worth your attention.</p>
            {subscribed && <div className="alert alert-success">{t("home.subscribeSuccess", "Thank you for subscribing!")}</div>}
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder={t("home.emailPlaceholder", "Enter your email address")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">JOIN</button>
            </form>
          </div>
        </div>
      </section>

      {/* 10. ATELIER & SALON CONSULTATION */}
      <section className="cta-section">
        <div className="container">
          <span className="editorial-eyebrow">LET'S MEET</span>
          <h2>Come See Us — or We'll Come to You</h2>
          <p>Our atelier is in Sri Lanka, but we see clients everywhere. Book a private in-person or video appointment — relaxed, unhurried, completely personal.</p>
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
