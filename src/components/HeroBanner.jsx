import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HeroBanner.css'

export default function HeroBanner({
  title = "AVIORY & CO.",
  subtitle = "Exceptional Ceylon Gemstones",
  ctaPrimary = { label: "Shop Gemstones", href: "/gemstones" },
  ctaSecondary = { label: "Love & Celebration", href: "/love-and-celebration" },
  videoSrc = "/videos/hero-loop.mp4",
  fallbackImage = "/images/hero-banner.jpg"
}) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true
      videoRef.current.muted = true
      videoRef.current.autoplay = true
      videoRef.current.play().catch(() => {
        // Fallback if autoplay blocked
      })
    }
  }, [])

  return (
    <section className="hero" aria-label="Hero Showcase">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="hero__video"
        poster={fallbackImage}
        loop
        muted
        autoPlay
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Fallback Image */}
      <div 
        className="hero__fallback"
        style={{ backgroundImage: `url(${fallbackImage})` }}
      />

      {/* Overlay */}
      <div className="hero__overlay" />

      {/* Content */}
      <div className="hero__content">
        <div className="container">
          <div className="hero__text">
            <h1 className="hero__title">{title}</h1>
            <p className="hero__subtitle">{subtitle}</p>
            
            <div className="hero__cta">
              {ctaPrimary && (
                <Link to={ctaPrimary.href} className="btn btn-primary">
                  {ctaPrimary.label}
                </Link>
              )}
              {ctaSecondary && (
                <Link to={ctaSecondary.href} className="btn btn-secondary">
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

