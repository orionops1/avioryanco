import React, { useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { LanguageProvider } from './hooks/useLanguage'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Canonical Pages
import Home from './pages/Home'
import TheProposal from './pages/TheProposal'
import TheColourEdit from './pages/TheColourEdit'
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

// Hidden Atelier Curator Admin Portal
import AtelierCurator from './pages/AtelierCurator'

function AppContent() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const isCuratorPortal = 
    location.pathname.startsWith('/atelier-curator') || 
    location.pathname.startsWith('/curator-portal')

  // Discreet keyboard shortcut: Ctrl+Shift+A or Cmd+Shift+A opens the Curator Portal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault()
        navigate('/atelier-curator')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navigate])

  // If in hidden curator portal, render dedicated full-bleed admin suite without public chrome
  if (isCuratorPortal) {
    return (
      <Routes>
        <Route path="/atelier-curator" element={<AtelierCurator />} />
        <Route path="/curator-portal" element={<AtelierCurator />} />
      </Routes>
    )
  }

  const isHeroPage = isHome || location.pathname === '/the-proposal'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, paddingTop: isHeroPage ? 0 : 'var(--header-height, 120px)' }}>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* The Proposal (Dedicated Experience) */}
          <Route path="/the-proposal" element={<TheProposal />} />
          <Route path="/proposal" element={<Navigate to="/the-proposal" replace />} />

          {/* The Colour Edit (Dedicated Aesthetic Discovery) */}
          <Route path="/the-colour-edit" element={<TheColourEdit />} />
          <Route path="/colour-edit" element={<Navigate to="/the-colour-edit" replace />} />
          <Route path="/color-edit" element={<Navigate to="/the-colour-edit" replace />} />

          {/* Expressions / Love & Celebration */}
          <Route path="/love-and-celebration" element={<LoveAndCelebration />} />
          <Route path="/love-and-celebration/:id" element={<LoveAndCelebrationDetail />} />

          {/* Touch / Fine Jewellery */}
          <Route path="/fine-jewellery" element={<FineJewellery />} />
          <Route path="/fine-jewellery/:id" element={<JewelleryDetail />} />

          {/* Wonder / Gemstones */}
          <Route path="/gemstones" element={<Gemstones />} />
          <Route path="/gemstones/:id" element={<GemstoneDetail />} />

          {/* Shop */}
          <Route path="/shop" element={<Shop />} />

          {/* Universal Product Detail */}
          <Route path="/products/:id" element={<ProductDetail />} />

          {/* Whisper / Bespoke */}
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

          {/* Legacy Route Redirects */}
          <Route path="/about" element={<Navigate to="/our-house" replace />} />
          <Route path="/love" element={<Navigate to="/love-and-celebration" replace />} />
          <Route path="/blog" element={<Navigate to="/journal" replace />} />
          <Route path="/blog/:slug" element={<Navigate to="/journal" replace />} />
          <Route path="/engagement-rings" element={<Navigate to="/the-proposal" replace />} />
          <Route path="/expressions" element={<Navigate to="/love-and-celebration" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  /* Measure header height and expose as CSS variable for mega-menu and content positioning */
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
        <AppContent />
      </Router>
    </LanguageProvider>
  )
}
