import React, { useEffect, useCallback, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { LanguageProvider } from './hooks/useLanguage'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Home loaded eagerly for immediate first paint
import Home from './pages/Home'

// Route-level code splitting for optimal luxury performance
const TheProposal = lazy(() => import('./pages/TheProposal'))
const TheColourEdit = lazy(() => import('./pages/TheColourEdit'))
const Shop = lazy(() => import('./pages/Shop'))
const Gemstones = lazy(() => import('./pages/Gemstones'))
const GemstoneDetail = lazy(() => import('./pages/GemstoneDetail'))
const FineJewellery = lazy(() => import('./pages/FineJewellery'))
const JewelleryDetail = lazy(() => import('./pages/JewelleryDetail'))
const LoveAndCelebration = lazy(() => import('./pages/LoveAndCelebration'))
const LoveAndCelebrationDetail = lazy(() => import('./pages/LoveAndCelebrationDetail'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Bespoke = lazy(() => import('./pages/Bespoke'))
const BespokeProcess = lazy(() => import('./pages/BespokeProcess'))
const BespokeEnquiry = lazy(() => import('./pages/BespokeEnquiry'))
const Journal = lazy(() => import('./pages/Journal'))
const JournalArticle = lazy(() => import('./pages/JournalArticle'))
const OurHouse = lazy(() => import('./pages/OurHouse'))
const PrivateConsultations = lazy(() => import('./pages/PrivateConsultations'))
const Contact = lazy(() => import('./pages/Contact'))
const PolicyPage = lazy(() => import('./pages/PolicyPage'))

// Hidden Atelier Curator Admin Portal
const AtelierCurator = lazy(() => import('./pages/AtelierCurator'))

const PageLoader = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAF8F5'
  }}>
    <div style={{
      fontFamily: 'Playfair Display, Georgia, serif',
      letterSpacing: '0.24em',
      fontSize: '0.88rem',
      color: '#B8996A',
      textTransform: 'uppercase'
    }}>
      AVIORY &amp; CO.
    </div>
  </div>
)

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
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/atelier-curator" element={<AtelierCurator />} />
          <Route path="/curator-portal" element={<AtelierCurator />} />
        </Routes>
      </Suspense>
    )
  }

  const isHeroPage = isHome || location.pathname === '/the-proposal'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, paddingTop: isHeroPage ? 0 : 'var(--header-height, 120px)' }}>
        <Suspense fallback={<PageLoader />}>
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

          {/* Client Care & Maison Policies */}
          <Route path="/shipping-and-delivery" element={<PolicyPage policySlug="shipping-and-delivery" />} />
          <Route path="/returns-and-refunds" element={<PolicyPage policySlug="returns-and-refunds" />} />
          <Route path="/privacy" element={<PolicyPage policySlug="privacy" />} />
          <Route path="/terms" element={<PolicyPage policySlug="terms" />} />
          <Route path="/jewellery-care" element={<PolicyPage policySlug="jewellery-care" />} />
          <Route path="/gemstone-disclosure" element={<PolicyPage policySlug="gemstone-disclosure" />} />

          {/* Canonical Aliases & Navigation Shortcuts */}
          <Route path="/jewellery" element={<Navigate to="/fine-jewellery" replace />} />
          <Route path="/jewelry" element={<Navigate to="/fine-jewellery" replace />} />
          <Route path="/engagement" element={<Navigate to="/the-proposal" replace />} />
          <Route path="/the-house" element={<Navigate to="/our-house" replace />} />
          <Route path="/house" element={<Navigate to="/our-house" replace />} />
          <Route path="/custom-concierge" element={<Navigate to="/bespoke" replace />} />
          <Route path="/bespoke/consultation" element={<Navigate to="/bespoke/enquiry" replace />} />

          {/* Legacy Route Redirects */}
          <Route path="/about" element={<Navigate to="/our-house" replace />} />
          <Route path="/love" element={<Navigate to="/love-and-celebration" replace />} />
          <Route path="/blog" element={<Navigate to="/journal" replace />} />
          <Route path="/blog/:slug" element={<Navigate to="/journal" replace />} />
          <Route path="/engagement-rings" element={<Navigate to="/the-proposal" replace />} />
          <Route path="/expressions" element={<Navigate to="/love-and-celebration" replace />} />
          </Routes>
        </Suspense>
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
