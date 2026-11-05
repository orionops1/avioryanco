import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HeroVideo.css'

export default function HeroVideo({
  video,
  poster,
  title = "AVIORY & CO.",
  slogan = "WHERE LOVE BECOMES GOLD.",
  subtitle = "Unheated Ceylon gems. Handcrafted in Sri Lanka. Made for the one you love.",
  cta = { label: "Explore the Collection", href: "/fine-jewellery" },
  ctaPrimary,
  ctaSecondary
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

  const primaryBtn = cta || ctaPrimary

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
            
            {subtitle && (
              <p className="hero-video__subtitle">{subtitle}</p>
            )}
            
            {(primaryBtn || ctaSecondary) && (
              <div className="hero-video__cta">
                {primaryBtn && (
                  <Link to={primaryBtn.href} className="btn btn-primary">
                    {primaryBtn.label}
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
