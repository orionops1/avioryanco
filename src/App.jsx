import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { LanguageProvider } from './hooks/useLanguage'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Canonical Pages
import Home from './pages/Home'
import Shop from './pages/Shop'
import Gemstones from './pages/Gemstones'
import GemstoneDetail from './pages/GemstoneDetail'
import FineJewellery from './pages/FineJewellery'
import JewelleryDetail from './pages/JewelleryDetail'
import LoveAndCelebration from './pages/LoveAndCelebration'
import LoveAndCelebrationDetail from './pages/LoveAndCelebrationDetail'
import ProductDetail from './pages/ProductDetail'
import Bespoke from './pages/Bespoke'
import BespokeProcess from './pages/BespokeProcess'
import BespokeEnquiry from './pages/BespokeEnquiry'
import Journal from './pages/Journal'
import JournalArticle from './pages/JournalArticle'
import OurHouse from './pages/OurHouse'
import PrivateConsultations from './pages/PrivateConsultations'
import Contact from './pages/Contact'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Measure header height and expose as CSS variable for mega-menu positioning */
  const updateHeaderHeight = useCallback(() => {
    const header = document.querySelector('.tiffany-header, .header')
    if (header) {
      const height = header.offsetHeight
      document.documentElement.style.setProperty('--header-height', `${height}px`)
    }
  }, [])

  useEffect(() => {
    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)
    document.fonts?.ready?.then(updateHeaderHeight)
    return () => window.removeEventListener('resize', updateHeaderHeight)
  }, [updateHeaderHeight])

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
          <Header scrolled={scrolled} />
          <main style={{ flex: 1 }}>
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* Shop */}
              <Route path="/shop" element={<Shop />} />

              {/* Gemstones */}
              <Route path="/gemstones" element={<Gemstones />} />
              <Route path="/gemstones/:id" element={<GemstoneDetail />} />

              {/* Fine Jewellery */}
              <Route path="/fine-jewellery" element={<FineJewellery />} />
              <Route path="/fine-jewellery/:id" element={<JewelleryDetail />} />

              {/* Love & Celebration Collection */}
              <Route path="/love-and-celebration" element={<LoveAndCelebration />} />
              <Route path="/love-and-celebration/:id" element={<LoveAndCelebrationDetail />} />

              {/* Universal Product Detail */}
              <Route path="/products/:id" element={<ProductDetail />} />

              {/* Bespoke */}
              <Route path="/bespoke" element={<Bespoke />} />
              <Route path="/bespoke/process" element={<BespokeProcess />} />
              <Route path="/bespoke/enquiry" element={<BespokeEnquiry />} />

              {/* Journal */}
              <Route path="/journal" element={<Journal />} />
              <Route path="/journal/:slug" element={<JournalArticle />} />

              {/* The Maison / Our House */}
              <Route path="/our-house" element={<OurHouse />} />

              {/* Consultations & Contact */}
              <Route path="/private-consultations" element={<PrivateConsultations />} />
              <Route path="/contact" element={<Contact />} />

              {/* Duplicate / Legacy Route Redirects */}
              <Route path="/about" element={<Navigate to="/our-house" replace />} />
              <Route path="/love" element={<Navigate to="/love-and-celebration" replace />} />
              <Route path="/blog" element={<Navigate to="/journal" replace />} />
              <Route path="/blog/:slug" element={<Navigate to="/journal" replace />} />
              <Route path="/engagement-rings" element={<Navigate to="/love-and-celebration" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}
