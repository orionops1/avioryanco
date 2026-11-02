import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HeroVideo.css'

export default function HeroVideo({
  video,
  poster,
  title = "AVIORY & CO.",
  tagline = "BESPOKE INTIMACY",
  subtitle = "Every love has its own expression.",
  description = "Exceptional Ceylon gemstones. Fine jewellery. Personal creations made around the moments that matter.",
  ctaPrimary = { label: "EXPLORE AVIORY", href: "/gemstones" },
  ctaSecondary = { label: "CREATE SOMETHING PERSONAL", href: "/bespoke" }
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

  return (
    <section className="hero-video" aria-label="Hero Showcase">
      {/* VIDEO BACKGROUND */}
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
        <img src={poster} alt="Hero" className="hero-video__fallback-img" />
      </video>

      {/* FALLBACK IMAGE */}
      <div 
        className="hero-video__fallback"
        style={{ backgroundImage: `url(${poster})` }}
      />

      {/* LUXURY VIGNETTE OVERLAY */}
      <div className="hero-video__overlay" />

      {/* CONTENT WITH BLACKGOLD LOGO */}
      <div className="hero-video__content">
        <div className="container">
          <div className="hero-video__text">
            <h1 className="hero-video__title" aria-label="AVIORY & CO.">
              <span className="hero-video__logo-text">AVIORY</span>
              <span className="hero-video__logo-amp">&amp;</span>
              <span className="hero-video__logo-co">CO.</span>
            </h1>

            {slogan && (
              <h2 className="hero-video__slogan">
                {slogan}
              </h2>
            )}
            
            <p className="hero-video__tagline">{tagline}</p>
            
            <p className="hero-video__subtitle">{subtitle}</p>

            <p className="hero-video__description">{description}</p>
            
            {(ctaPrimary || ctaSecondary) && (
              <div className="hero-video__cta">
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
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
