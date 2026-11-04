import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './hooks/useLanguage'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Gemstones from './pages/Gemstones'
import GemstoneDetail from './pages/GemstoneDetail'
import FineJewellery from './pages/FineJewellery'
import JewelleryDetail from './pages/JewelleryDetail'
import LoveAndCelebration from './pages/LoveAndCelebration'
import LoveAndCelebrationDetail from './pages/LoveAndCelebrationDetail'
import ProductDetail from './pages/ProductDetail'
import Love from './pages/Love'
import Bespoke from './pages/Bespoke'
import BespokeProcess from './pages/BespokeProcess'
import BespokeEnquiry from './pages/BespokeEnquiry'
import Journal from './pages/Journal'
import JournalArticle from './pages/JournalArticle'
import Blog from './pages/Blog'
import OurHouse from './pages/OurHouse'
import PrivateConsultations from './pages/PrivateConsultations'
import Contact from './pages/Contact'

function AppLayout({ scrolled }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <Header scrolled={scrolled} />
      <main style={{ flex: 1, paddingTop: isHome ? 0 : 'var(--header-height, 120px)' }}>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

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

          {/* Universal Product Detail (fallback for any product type) */}
          <Route path="/products/:id" element={<ProductDetail />} />

          {/* Love Collection */}
          <Route path="/love" element={<Love />} />

          {/* Bespoke */}
          <Route path="/bespoke" element={<Bespoke />} />
          <Route path="/bespoke/process" element={<BespokeProcess />} />
          <Route path="/bespoke/enquiry" element={<BespokeEnquiry />} />

          {/* Journal */}
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalArticle />} />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<JournalArticle />} />

          {/* Other Pages */}
          <Route path="/our-house" element={<OurHouse />} />
          <Route path="/private-consultations" element={<PrivateConsultations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Measure header height and expose as CSS variable for mega-menu and layout positioning */
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
        <AppLayout scrolled={scrolled} />
      </Router>
    </LanguageProvider>
  )
}
