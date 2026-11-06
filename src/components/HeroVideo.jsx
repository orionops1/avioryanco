import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HeroVideo.css'

export default function HeroVideo({
  video = "/videos/hero-luxury.mp4",
  poster = "/images/expressions/hero_model.jpg",
  eyebrow = "BESPOKE INTIMACY",
  headline = "THE SHAPE OF DESIRE",
  subtitle = "For love, longing and the moments that belong only to you.",
  primaryCta = { label: "DISCOVER AVIORY", href: "#architecture-of-devotion" },
  secondaryCta = null
}) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true
      videoRef.current.muted = true
      videoRef.current.autoplay = true
      videoRef.current.playsInline = true
      videoRef.current.play().catch(() => {
        // Autoplay handled by browser policies
      })
    }
  }, [])

  const handleCtaClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="hero-video" aria-label="Hero Showcase">
      {/* VIDEO BACKGROUND (Looped, silent, cinematic) */}
      <video
        ref={videoRef}
        className="hero-video__video"
        poster={poster}
        loop
        muted
        autoPlay
        playsInline
      >
        <source src={video} type="video/mp4" />
        <img src={poster} alt="Bespoke Intimacy" className="hero-video__fallback-img" />
      </video>

      {/* FALLBACK IMAGE */}
      <div 
        className="hero-video__fallback"
        style={{ backgroundImage: `url(${poster})` }}
      />

      {/* LUXURY VIGNETTE OVERLAY */}
      <div className="hero-video__overlay" />

      {/* CONTENT (No duplicate logo — only Eyebrow, Headline, Supporting line, and Single CTA) */}
      <div className="hero-video__content">
        <div className="container">
          <div className="hero-video__text">
            {eyebrow && (
              <span className="hero-video__eyebrow">{eyebrow}</span>
            )}

            {headline && (
              <h1 className="hero-video__slogan">
                {headline}
              </h1>
            )}
            
            {subtitle && (
              <p className="hero-video__subtitle">{subtitle}</p>
            )}
            
            {primaryCta && (
              <div className="hero-video__cta">
                {primaryCta.href.startsWith('#') ? (
                  <a 
                    href={primaryCta.href} 
                    className="btn btn-primary"
                    onClick={(e) => handleCtaClick(e, primaryCta.href)}
                  >
                    {primaryCta.label}
                  </a>
                ) : (
                  <Link to={primaryCta.href} className="btn btn-primary">
                    {primaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
