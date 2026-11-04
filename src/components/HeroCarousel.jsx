import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './HeroCarousel.css'

export default function HeroCarousel({
  slides = [],
  defaultTitle = "AVIORY & CO.",
  defaultSubtitle = "Exceptional Ceylon Gemstones",
  ctaPrimary = { label: "Shop Gemstones", href: "/gemstones" },
  ctaSecondary = { label: "Love & Celebration", href: "/love-and-celebration" },
  autoplayInterval = 5000,
  transitionDuration = 0.8,
  onSlideChange = null
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRefs = useRef({})

  // Auto-rotate slides
  useEffect(() => {
    if (slides.length <= 1) return

    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, transitionDuration * 1000)
    }, autoplayInterval)

    return () => clearInterval(timer)
  }, [slides.length, autoplayInterval, transitionDuration])

  // Auto-play videos when slide becomes active
  useEffect(() => {
    const currentSlide = slides[currentIndex]
    if (currentSlide?.video && videoRefs.current[currentIndex]) {
      const video = videoRefs.current[currentIndex]
      video.play().catch(() => {
        // Autoplay blocked, user will play manually
      })
    }

    // Pause other videos
    slides.forEach((_, idx) => {
      if (idx !== currentIndex && videoRefs.current[idx]) {
        videoRefs.current[idx].pause()
      }
    })
  }, [currentIndex, slides])

  const currentSlide = slides[currentIndex] || {
    image: '/images/hero-banner.jpg',
    title: defaultTitle,
    subtitle: defaultSubtitle,
  }

  const handlePrevSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
      setIsTransitioning(false)
    }, transitionDuration * 500)
  }

  const handleNextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
      setIsTransitioning(false)
    }, transitionDuration * 500)
  }

  const handleDotClick = (index) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, transitionDuration * 500)
  }

  return (
    <section className="hero-carousel" aria-label="Hero Carousel">
      {/* Slides Container */}
      <div className="hero-carousel__slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-carousel__slide ${
              index === currentIndex ? 'hero-carousel__slide--active' : ''
            } ${isTransitioning ? 'hero-carousel__slide--transitioning' : ''}`}
            style={{
              backgroundImage: !slide.video ? `url(${slide.image})` : 'none',
              transitionDuration: `${transitionDuration}s`,
            }}
          >
            {/* VIDEO BACKGROUND (if video slide) */}
            {slide.video && (
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el
                }}
                className="hero-carousel__video"
                autoPlay={index === currentIndex}
                muted
                loop
                playsInline
                poster={slide.poster || slide.image}
              >
                <source src={slide.video} type="video/mp4" />
              </video>
            )}

            {/* Overlay */}
            <div className="hero-carousel__slide-overlay" />

            {/* Content */}
            <div className="hero-carousel__content">
              <div className="container">
                <div className="hero-carousel__text">
                  <h1 className="hero-carousel__title">
                    {slide.title || defaultTitle}
                  </h1>
                  <p className="hero-carousel__subtitle">
                    {slide.subtitle || defaultSubtitle}
                  </p>

                  {slide.cta && (
                    <div className="hero-carousel__cta">
                      <Link
                        to={slide.cta.href || ctaPrimary.href}
                        className="btn btn-primary"
                      >
                        {slide.cta.label || ctaPrimary.label}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows (Desktop only) */}
      {slides.length > 1 && (
        <>
          <button
            className="hero-carousel__nav hero-carousel__nav--prev"
            onClick={handlePrevSlide}
            aria-label="Previous slide"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className="hero-carousel__nav hero-carousel__nav--next"
            onClick={handleNextSlide}
            aria-label="Next slide"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {slides.length > 1 && (
        <div className="hero-carousel__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-carousel__dot ${
                index === currentIndex ? 'hero-carousel__dot--active' : ''
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </section>
  )
}

