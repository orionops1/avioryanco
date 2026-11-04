import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HeroVideo.css'

export default function HeroVideo({
  video = "/videos/hero-luxury.mp4",
  poster = "/images/hero-banner.jpg",
  eyebrow = "AVIORY & CO. • CEYLON ATELIER",
  headline = "Handcrafted Ceylon Sapphires & Fine Jewellery",
  subtitle = "Exceptional unheated natural gemstones and bespoke creations, born deep beneath Sri Lankan earth and crafted by master goldsmiths.",
  primaryCta = { label: "EXPLORE FINE JEWELLERY", href: "/fine-jewellery" },
  secondaryCta = { label: "BOOK A CONSULTATION →", href: "/private-consultations" }
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
    <section className="hero-atmospheric" aria-label="Atmospheric Hero Experience">
      {/* BACKGROUND VIDEO */}
      <video
        ref={videoRef}
        className="hero-atmospheric__video"
        poster={poster}
        loop
        muted
        autoPlay
        playsInline
      >
        <source src={video} type="video/mp4" />
        <img src={poster} alt="Ceylon Gemstones and Jewellery" className="hero-atmospheric__fallback-img" />
      </video>

      {/* FALLBACK POSTER */}
      <div 
        className="hero-atmospheric__fallback"
        style={{ backgroundImage: `url(${poster})` }}
      />

      {/* CHIAROSCURO VIGNETTE (Warm dark contrast for perfect readability) */}
      <div className="hero-atmospheric__vignette" />

      {/* HERO CONTENT */}
      <div className="hero-atmospheric__content">
        <div className="container">
          <div className="hero-atmospheric__text">
            {eyebrow && (
              <span className="hero-atmospheric__eyebrow">
                {eyebrow}
              </span>
            )}
            
            <h1 className="hero-atmospheric__headline">
              {headline}
            </h1>
            
            {subtitle && (
              <p className="hero-atmospheric__subtitle">
                {subtitle}
              </p>
            )}
            
            <div className="hero-atmospheric__actions">
              {primaryCta && (
                <Link to={primaryCta.href} className="hero-atmospheric__btn-primary">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link to={secondaryCta.href} className="hero-atmospheric__btn-secondary">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
