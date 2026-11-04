import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HeroVideo.css'

export default function HeroVideo({
  video = "/videos/hero-luxury.mp4",
  poster = "/images/hero-banner.jpg",
  eyebrow = "WHERE THE VOW LIVES",
  headline = "Forged for the skin that remembers you.",
  subtitle = "A vow isn't spoken once. It is carried daily against your pulse. Untreated Ceylon sapphires and hand-wrought gold, born deep beneath Sri Lankan earth.",
  primaryCta = { label: "BEGIN THE BESPOKE INTIMACY™ COMMISSION", href: "/bespoke/enquiry" },
  secondaryCta = { label: "ENTER THE PRIVATE VAULT →", href: "#private-vault" }
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

  const handleScrollToVault = (e) => {
    if (secondaryCta.href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(secondaryCta.href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

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
        <img src={poster} alt="Atmospheric Jewelry" className="hero-atmospheric__fallback-img" />
      </video>

      {/* FALLBACK POSTER */}
      <div 
        className="hero-atmospheric__fallback"
        style={{ backgroundImage: `url(${poster})` }}
      />

      {/* DEEP OBSIDIAN CHIAROSCURO VIGNETTE (Fading smoothly into #0A0E17) */}
      <div className="hero-atmospheric__vignette" />

      {/* HERO ATMOSPHERIC CONTENT */}
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
                <a 
                  href={secondaryCta.href} 
                  className="hero-atmospheric__btn-secondary"
                  onClick={handleScrollToVault}
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
