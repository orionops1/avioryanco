import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HeroVideo.css'

export default function HeroVideo({
  video = "/videos/hero-luxury.mp4",
  poster = "/images/hero-banner.jpg",
  eyebrow = "WHERE THE VOW LIVES",
  headline = "Forged for the skin that remembers you.",
  slogan,
  subtitle = "A vow isn't spoken once. It is carried daily against your pulse. Untreated Ceylon sapphires and hand-wrought gold, born deep beneath Sri Lankan earth.",
  primaryCta = { label: "EXPLORE THE VOW COLLECTION", href: "/love-and-celebration" },
  secondaryCta = { label: "BEGIN THE BESPOKE INTIMACY™ COMMISSION →", href: "/bespoke/enquiry" },
  cta,
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

  const firstBtn = cta || ctaPrimary || primaryCta
  const secondBtn = ctaSecondary || secondaryCta
  const mainHeadline = headline || slogan

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
            {eyebrow && (
              <span className="hero-video__eyebrow">{eyebrow}</span>
            )}

            <h1 className="hero-video__title" aria-label="AVIORY & CO.">
              <span className="hero-video__logo-text">AVIORY</span>
              <span className="hero-video__logo-amp">&amp;</span>
              <span className="hero-video__logo-co">CO.</span>
            </h1>

            {mainHeadline && (
              <h2 className="hero-video__slogan">
                {mainHeadline}
              </h2>
            )}
            
            {subtitle && (
              <p className="hero-video__subtitle">{subtitle}</p>
            )}
            
            {(firstBtn || secondBtn) && (
              <div className="hero-video__cta">
                {firstBtn && (
                  <Link to={firstBtn.href} className="btn btn-primary">
                    {firstBtn.label}
                  </Link>
                )}
                {secondBtn && (
                  <Link to={secondBtn.href} className="btn btn-secondary">
                    {secondBtn.label}
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
