import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContentStore } from '../hooks/useContentStore'
import { defaultSiteContent } from '../data/defaultSiteContent'
import './AtelierCurator.css'

const PASSCODE = 'aviory2009'

export default function AtelierCurator() {
  const navigate = useNavigate()
  const { content, fetchContent, saveToBackend, uploadImage, resetToDefaults, isSaving } = useContentStore()

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('aviory_curator_auth') === 'true'
  })
  const [passcodeInput, setPasscodeInput] = useState('')
  const [authError, setAuthError] = useState('')

  // Local Editable Copy of Content
  const [formData, setFormData] = useState(content)
  const [isDirty, setIsDirty] = useState(false)
  const [activeTab, setActiveTab] = useState('hero')
  const [toast, setToast] = useState(null)
  const [uploadedVaultList, setUploadedVaultList] = useState([])

  // Sync formData with store when content loads
  useEffect(() => {
    fetchContent().then((res) => {
      if (res && res.content) {
        setFormData(res.content)
      }
    })
  }, [fetchContent])

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3800)
  }

  // Handle Passcode Auth
  const handleAuthSubmit = (e) => {
    e.preventDefault()
    if (passcodeInput.trim() === PASSCODE) {
      sessionStorage.setItem('aviory_curator_auth', 'true')
      setIsAuthenticated(true)
      setAuthError('')
      showToast('Welcome to the Atelier Curator Portal')
    } else {
      setAuthError('Invalid accreditation key. Access restricted.')
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('aviory_curator_auth')
    setIsAuthenticated(false)
    setPasscodeInput('')
  }

  // Handle nested form changes
  const updateFormState = (section, field, value) => {
    setFormData((prev) => {
      const updated = {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }
      setIsDirty(true)
      return updated
    })
  }

  // Handle array item changes (e.g. expressions.cards[idx], curations.items[idx])
  const updateArrayItem = (section, arrayName, index, field, value) => {
    setFormData((prev) => {
      const arr = [...(prev[section]?.[arrayName] || [])]
      arr[index] = { ...arr[index], [field]: value }
      const updated = {
        ...prev,
        [section]: {
          ...prev[section],
          [arrayName]: arr
        }
      }
      setIsDirty(true)
      return updated
    })
  }

  // Handle Image Upload for specific field
  const handleFieldImageUpload = async (file, onImageSet) => {
    if (!file) return
    showToast(`Uploading ${file.name}...`, 'info')
    try {
      const res = await uploadImage(file)
      if (res.success) {
        onImageSet(res.url)
        setIsDirty(true)
        showToast('Image uploaded and assigned successfully', 'success')
        // Add to media vault list
        setUploadedVaultList((prev) => [{ name: file.name, url: res.url, time: new Date() }, ...prev])
      }
    } catch (err) {
      showToast('Image upload failed: ' + err.message, 'error')
    }
  }

  // Save All Changes to Disk & Backend
  const handleSaveAll = async () => {
    useContentStore.getState().setContent(formData)
    const res = await saveToBackend()
    if (res.success) {
      setIsDirty(false)
      showToast('All changes saved to live website successfully!', 'success')
    } else {
      showToast('Error saving changes: ' + (res.error || 'Server error'), 'error')
    }
  }

  // Reset to Defaults
  const handleResetDefaults = async () => {
    if (window.confirm('Are you sure you want to restore all texts and images to original Maison defaults?')) {
      const res = await resetToDefaults()
      if (res.success) {
        setFormData(defaultSiteContent)
        setIsDirty(false)
        showToast('Content restored to Maison defaults', 'success')
      }
    }
  }

  // ==========================================================================
  // RENDER PASSCODE GATE IF NOT AUTHENTICATED
  // ==========================================================================
  if (!isAuthenticated) {
    return (
      <div className="curator-gate">
        <div className="curator-gate__backdrop-glow" />
        <div className="curator-gate__card">
          <div className="curator-gate__monogram">AVIORY & CO.</div>
          <span className="curator-gate__eyebrow">Maison d'Art et Haute Joaillerie</span>
          <h1 className="curator-gate__title">Atelier Curator Portal</h1>
          <p className="curator-gate__subtitle">
            Private editorial vault for managing site imagery, poetry, and storytelling.
          </p>

          <form onSubmit={handleAuthSubmit} className="curator-gate__form">
            <div className="curator-gate__input-wrap">
              <input
                type="password"
                className="curator-gate__input"
                placeholder="ENTER PRIVATE KEY"
                value={passcodeInput}
                onChange={(e) => setPasscodeInput(e.target.value)}
                autoFocus
                required
              />
            </div>
            {authError && <div className="curator-gate__error">{authError}</div>}
            <button type="submit" className="curator-gate__btn">
              ENTER ATELIER &rarr;
            </button>
          </form>

          <div className="curator-gate__hint">
            Confidential accreditation required. Press Esc or return home.
          </div>
          <Link to="/" className="curator-gate__back-link">
            &larr; Return to Public Maison
          </Link>
        </div>
      </div>
    )
  }

  // ==========================================================================
  // RENDER CURATOR EDITORIAL DASHBOARD
  // ==========================================================================
  return (
    <div className="curator-portal-root">
      {/* Toast Notification */}
      {toast && (
        <div className={`curator-toast curator-toast--${toast.type}`}>
          <span>{toast.message}</span>
        </div>
      )}

      {/* Top Header Bar */}
      <header className="curator-header">
        <div className="curator-header__brand">
          <span className="curator-header__monogram">A&CO</span>
          <div className="curator-header__title-group">
            <h1 className="curator-header__title">Atelier Curator</h1>
            <span className="curator-header__badge">Private Content & Imagery Suite</span>
          </div>
        </div>

        <div className="curator-header__status">
          <span className={`curator-header__status-dot ${isDirty ? 'curator-header__status-dot--dirty' : ''}`} />
          <span>{isDirty ? 'Unsaved edits in session' : 'Live site synchronized'}</span>
        </div>

        <div className="curator-header__actions">
          <Link to="/" target="_blank" rel="noopener noreferrer" className="curator-btn curator-btn--outline">
            PREVIEW LIVE SITE &nearr;
          </Link>
          <button
            type="button"
            className="curator-btn curator-btn--subtle"
            onClick={handleResetDefaults}
            title="Reset all content to original defaults"
          >
            RESTORE DEFAULTS
          </button>
          <button
            type="button"
            className="curator-btn curator-btn--primary"
            onClick={handleSaveAll}
            disabled={isSaving}
          >
            {isSaving ? 'SAVING...' : 'SAVE ALL CHANGES'}
          </button>
          <button
            type="button"
            className="curator-btn curator-btn--subtle"
            onClick={handleLogout}
            title="Lock Portal"
          >
            LOCK
          </button>
        </div>
      </header>

      {/* Dashboard Layout */}
      <div className="curator-layout">
        {/* Navigation Sidebar */}
        <aside className="curator-sidebar">
          <span className="curator-sidebar__label">SECTIONS</span>
          <button
            type="button"
            className={`curator-nav-item ${activeTab === 'hero' ? 'curator-nav-item--active' : ''}`}
            onClick={() => setActiveTab('hero')}
          >
            <span>01. Hero Showcase</span>
          </button>
          <button
            type="button"
            className={`curator-nav-item ${activeTab === 'expressions' ? 'curator-nav-item--active' : ''}`}
            onClick={() => setActiveTab('expressions')}
          >
            <span>02. Four Expressions</span>
          </button>
          <button
            type="button"
            className={`curator-nav-item ${activeTab === 'proposal' ? 'curator-nav-item--active' : ''}`}
            onClick={() => setActiveTab('proposal')}
          >
            <span>03. The Proposal</span>
          </button>
          <button
            type="button"
            className={`curator-nav-item ${activeTab === 'colour' ? 'curator-nav-item--active' : ''}`}
            onClick={() => setActiveTab('colour')}
          >
            <span>04. The Colour Edit</span>
          </button>
          <button
            type="button"
            className={`curator-nav-item ${activeTab === 'curations' ? 'curator-nav-item--active' : ''}`}
            onClick={() => setActiveTab('curations')}
          >
            <span>05. Curated Pieces</span>
          </button>
          <button
            type="button"
            className={`curator-nav-item ${activeTab === 'bespoke' ? 'curator-nav-item--active' : ''}`}
            onClick={() => setActiveTab('bespoke')}
          >
            <span>06. Bespoke & Heartbeat</span>
          </button>
          <button
            type="button"
            className={`curator-nav-item ${activeTab === 'house' ? 'curator-nav-item--active' : ''}`}
            onClick={() => setActiveTab('house')}
          >
            <span>07. Our House & Private</span>
          </button>
          <button
            type="button"
            className={`curator-nav-item ${activeTab === 'journal' ? 'curator-nav-item--active' : ''}`}
            onClick={() => setActiveTab('journal')}
          >
            <span>08. Journal Stories</span>
          </button>

          <span className="curator-sidebar__label" style={{ marginTop: '1.5rem' }}>MEDIA ASSETS</span>
          <button
            type="button"
            className={`curator-nav-item ${activeTab === 'vault' ? 'curator-nav-item--active' : ''}`}
            onClick={() => setActiveTab('vault')}
          >
            <span>Media Vault & Uploader</span>
            <span className="curator-nav-item__badge">UPLOAD</span>
          </button>
        </aside>

        {/* Main Work Area */}
        <main className="curator-content">
          {/* ================================================================
              TAB 1: HERO SHOWCASE
              ================================================================ */}
          {activeTab === 'hero' && (
            <div className="curator-tab-panel">
              <div className="curator-section-header">
                <div>
                  <span className="curator-section-header__eyebrow">SECTION 01</span>
                  <h2 className="curator-section-header__title">The Hero Showcase</h2>
                  <p className="curator-section-header__desc">
                    Controls the opening cinematic statement, background video poster, and primary invitation.
                  </p>
                </div>
              </div>

              <div className="curator-card">
                <h3 className="curator-card__title">
                  <span>Headline & Poetry</span>
                  <span className="curator-card__tag">HOME HERO</span>
                </h3>

                <div className="curator-form-grid">
                  <div className="curator-form-group">
                    <label className="curator-label">Eyebrow Tagline</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.hero?.eyebrow || ''}
                      onChange={(e) => updateFormState('hero', 'eyebrow', e.target.value)}
                    />
                  </div>

                  <div className="curator-form-group">
                    <label className="curator-label">Main Headline</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.hero?.headline || ''}
                      onChange={(e) => updateFormState('hero', 'headline', e.target.value)}
                    />
                  </div>

                  <div className="curator-form-group curator-form-group--full">
                    <label className="curator-label">Subtitle / Poetic Narrative</label>
                    <textarea
                      className="curator-textarea"
                      value={formData.hero?.subtitle || ''}
                      onChange={(e) => updateFormState('hero', 'subtitle', e.target.value)}
                    />
                  </div>

                  <div className="curator-form-group">
                    <label className="curator-label">CTA Button Label</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.hero?.ctaLabel || ''}
                      onChange={(e) => updateFormState('hero', 'ctaLabel', e.target.value)}
                    />
                  </div>

                  <div className="curator-form-group">
                    <label className="curator-label">CTA Button Link</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.hero?.ctaHref || ''}
                      onChange={(e) => updateFormState('hero', 'ctaHref', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Hero Image & Video */}
              <div className="curator-card">
                <h3 className="curator-card__title">
                  <span>Cinematic Media & Poster</span>
                  <span className="curator-card__tag">HERO BACKDROP</span>
                </h3>

                <div className="curator-form-group">
                  <label className="curator-label">
                    <span>Hero Poster Image</span>
                    <span className="curator-label__hint">Displayed while video loads & on mobile</span>
                  </label>
                  <ImageControl
                    currentUrl={formData.hero?.posterUrl}
                    onUpdate={(url) => updateFormState('hero', 'posterUrl', url)}
                    onUpload={(file) => handleFieldImageUpload(file, (url) => updateFormState('hero', 'posterUrl', url))}
                  />
                </div>

                <div className="curator-form-group" style={{ marginTop: '1.5rem' }}>
                  <label className="curator-label">Background Video URL</label>
                  <input
                    type="text"
                    className="curator-input"
                    value={formData.hero?.videoUrl || ''}
                    onChange={(e) => updateFormState('hero', 'videoUrl', e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              TAB 2: FOUR EXPRESSIONS OF INTIMACY
              ================================================================ */}
          {activeTab === 'expressions' && (
            <div className="curator-tab-panel">
              <div className="curator-section-header">
                <div>
                  <span className="curator-section-header__eyebrow">SECTION 02</span>
                  <h2 className="curator-section-header__title">The Four Expressions</h2>
                  <p className="curator-section-header__desc">
                    VOW (Expression One), TOUCH (Expression Two), WONDER (Expression Three), WHISPER (Expression Four).
                  </p>
                </div>
              </div>

              {/* Section Header Copy */}
              <div className="curator-card">
                <h3 className="curator-card__title">Section Headings</h3>
                <div className="curator-form-grid">
                  <div className="curator-form-group">
                    <label className="curator-label">Eyebrow</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.expressions?.eyebrow || ''}
                      onChange={(e) => updateFormState('expressions', 'eyebrow', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group">
                    <label className="curator-label">Section Title</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.expressions?.title || ''}
                      onChange={(e) => updateFormState('expressions', 'title', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group curator-form-group--full">
                    <label className="curator-label">Subtitle</label>
                    <textarea
                      className="curator-textarea"
                      value={formData.expressions?.subtitle || ''}
                      onChange={(e) => updateFormState('expressions', 'subtitle', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* 4 Expression Cards */}
              {(formData.expressions?.cards || []).map((card, idx) => (
                <div key={card.id || idx} className="curator-card">
                  <h3 className="curator-card__title">
                    <span>{card.step}: {card.name}</span>
                    <span className="curator-card__tag">PILLAR {idx + 1}</span>
                  </h3>

                  <div className="curator-form-grid">
                    <div className="curator-form-group">
                      <label className="curator-label">Card Headline</label>
                      <input
                        type="text"
                        className="curator-input"
                        value={card.title || ''}
                        onChange={(e) => updateArrayItem('expressions', 'cards', idx, 'title', e.target.value)}
                      />
                    </div>

                    <div className="curator-form-group">
                      <label className="curator-label">CTA Label</label>
                      <input
                        type="text"
                        className="curator-input"
                        value={card.ctaText || ''}
                        onChange={(e) => updateArrayItem('expressions', 'cards', idx, 'ctaText', e.target.value)}
                      />
                    </div>

                    <div className="curator-form-group curator-form-group--full">
                      <label className="curator-label">Narrative Description</label>
                      <textarea
                        className="curator-textarea"
                        value={card.desc || ''}
                        onChange={(e) => updateArrayItem('expressions', 'cards', idx, 'desc', e.target.value)}
                      />
                    </div>

                    <div className="curator-form-group curator-form-group--full">
                      <label className="curator-label">Card Visual Media</label>
                      <ImageControl
                        currentUrl={card.image}
                        onUpdate={(url) => updateArrayItem('expressions', 'cards', idx, 'image', url)}
                        onUpload={(file) =>
                          handleFieldImageUpload(file, (url) =>
                            updateArrayItem('expressions', 'cards', idx, 'image', url)
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================================================================
              TAB 3: THE PROPOSAL
              ================================================================ */}
          {activeTab === 'proposal' && (
            <div className="curator-tab-panel">
              <div className="curator-section-header">
                <div>
                  <span className="curator-section-header__eyebrow">SECTION 03</span>
                  <h2 className="curator-section-header__title">The Proposal Experience</h2>
                  <p className="curator-section-header__desc">
                    Homepage proposal spotlight and editorial collage pictures.
                  </p>
                </div>
              </div>

              <div className="curator-card">
                <h3 className="curator-card__title">Headlines & Invitation</h3>
                <div className="curator-form-grid">
                  <div className="curator-form-group">
                    <label className="curator-label">Eyebrow</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.proposalSection?.eyebrow || ''}
                      onChange={(e) => updateFormState('proposalSection', 'eyebrow', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group">
                    <label className="curator-label">Headline</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.proposalSection?.headline || ''}
                      onChange={(e) => updateFormState('proposalSection', 'headline', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group curator-form-group--full">
                    <label className="curator-label">Description</label>
                    <textarea
                      className="curator-textarea"
                      value={formData.proposalSection?.description || ''}
                      onChange={(e) => updateFormState('proposalSection', 'description', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group">
                    <label className="curator-label">Callout Question</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.proposalSection?.calloutAsk || ''}
                      onChange={(e) => updateFormState('proposalSection', 'calloutAsk', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group">
                    <label className="curator-label">Callout Subtitle</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.proposalSection?.calloutSub || ''}
                      onChange={(e) => updateFormState('proposalSection', 'calloutSub', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* 3 Montage Images */}
              <div className="curator-card">
                <h3 className="curator-card__title">Proposal Visual Montage (3 Pictures)</h3>

                <div className="curator-form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="curator-label">1. Primary Proposal Moment (Large Vertical)</label>
                  <ImageControl
                    currentUrl={formData.proposalSection?.images?.main}
                    onUpdate={(url) =>
                      setFormData((prev) => ({
                        ...prev,
                        proposalSection: {
                          ...prev.proposalSection,
                          images: { ...prev.proposalSection?.images, main: url }
                        }
                      }))
                    }
                    onUpload={(file) =>
                      handleFieldImageUpload(file, (url) =>
                        setFormData((prev) => ({
                          ...prev,
                          proposalSection: {
                            ...prev.proposalSection,
                            images: { ...prev.proposalSection?.images, main: url }
                          }
                        }))
                      )
                    }
                  />
                </div>

                <div className="curator-form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="curator-label">2. Solitaire Ring on Hand (Sub 1)</label>
                  <ImageControl
                    currentUrl={formData.proposalSection?.images?.sub1}
                    onUpdate={(url) =>
                      setFormData((prev) => ({
                        ...prev,
                        proposalSection: {
                          ...prev.proposalSection,
                          images: { ...prev.proposalSection?.images, sub1: url }
                        }
                      }))
                    }
                    onUpload={(file) =>
                      handleFieldImageUpload(file, (url) =>
                        setFormData((prev) => ({
                          ...prev,
                          proposalSection: {
                            ...prev.proposalSection,
                            images: { ...prev.proposalSection?.images, sub1: url }
                          }
                        }))
                      )
                    }
                  />
                </div>

                <div className="curator-form-group">
                  <label className="curator-label">3. Candlelight & Intimacy (Sub 2)</label>
                  <ImageControl
                    currentUrl={formData.proposalSection?.images?.sub2}
                    onUpdate={(url) =>
                      setFormData((prev) => ({
                        ...prev,
                        proposalSection: {
                          ...prev.proposalSection,
                          images: { ...prev.proposalSection?.images, sub2: url }
                        }
                      }))
                    }
                    onUpload={(file) =>
                      handleFieldImageUpload(file, (url) =>
                        setFormData((prev) => ({
                          ...prev,
                          proposalSection: {
                            ...prev.proposalSection,
                            images: { ...prev.proposalSection?.images, sub2: url }
                          }
                        }))
                      )
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              TAB 4: THE COLOUR EDIT
              ================================================================ */}
          {activeTab === 'colour' && (
            <div className="curator-tab-panel">
              <div className="curator-section-header">
                <div>
                  <span className="curator-section-header__eyebrow">SECTION 04</span>
                  <h2 className="curator-section-header__title">The Colour Edit</h2>
                  <p className="curator-section-header__desc">
                    6 distinct colour families: Blue, Pink, Padparadscha, Yellow, Red, Violet.
                  </p>
                </div>
              </div>

              {(formData.colourEditSection?.families || []).map((fam, idx) => (
                <div key={fam.id || idx} className="curator-card">
                  <h3 className="curator-card__title">
                    <span>{fam.editorialName}</span>
                    <span className="curator-card__tag" style={{ borderLeft: `4px solid ${fam.colorHex}` }}>
                      {fam.colourFamily}
                    </span>
                  </h3>

                  <div className="curator-form-grid">
                    <div className="curator-form-group">
                      <label className="curator-label">Editorial Title</label>
                      <input
                        type="text"
                        className="curator-input"
                        value={fam.editorialName || ''}
                        onChange={(e) => updateArrayItem('colourEditSection', 'families', idx, 'editorialName', e.target.value)}
                      />
                    </div>

                    <div className="curator-form-group">
                      <label className="curator-label">Colour Family Label</label>
                      <input
                        type="text"
                        className="curator-input"
                        value={fam.colourFamily || ''}
                        onChange={(e) => updateArrayItem('colourEditSection', 'families', idx, 'colourFamily', e.target.value)}
                      />
                    </div>

                    <div className="curator-form-group curator-form-group--full">
                      <label className="curator-label">Tagline</label>
                      <input
                        type="text"
                        className="curator-input"
                        value={fam.tagline || ''}
                        onChange={(e) => updateArrayItem('colourEditSection', 'families', idx, 'tagline', e.target.value)}
                      />
                    </div>

                    <div className="curator-form-group curator-form-group--full">
                      <label className="curator-label">Description</label>
                      <textarea
                        className="curator-textarea"
                        value={fam.description || ''}
                        onChange={(e) => updateArrayItem('colourEditSection', 'families', idx, 'description', e.target.value)}
                      />
                    </div>

                    <div className="curator-form-group curator-form-group--full">
                      <label className="curator-label">Stone Image</label>
                      <ImageControl
                        currentUrl={fam.image}
                        onUpdate={(url) => updateArrayItem('colourEditSection', 'families', idx, 'image', url)}
                        onUpload={(file) =>
                          handleFieldImageUpload(file, (url) =>
                            updateArrayItem('colourEditSection', 'families', idx, 'image', url)
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================================================================
              TAB 5: CURATED CREATIONS / THINGS WORTH KEEPING CLOSE
              ================================================================ */}
          {activeTab === 'curations' && (
            <div className="curator-tab-panel">
              <div className="curator-section-header">
                <div>
                  <span className="curator-section-header__eyebrow">SECTION 05</span>
                  <h2 className="curator-section-header__title">Things Worth Keeping Close</h2>
                  <p className="curator-section-header__desc">
                    Curated jewellery pieces featured on the homepage repertoire.
                  </p>
                </div>
              </div>

              {(formData.curationsSection?.items || []).map((item, idx) => (
                <div key={item.id || idx} className="curator-card">
                  <h3 className="curator-card__title">
                    <span>{item.name}</span>
                    <span className="curator-card__tag">{item.category}</span>
                  </h3>

                  <div className="curator-form-grid">
                    <div className="curator-form-group">
                      <label className="curator-label">Creation Title</label>
                      <input
                        type="text"
                        className="curator-input"
                        value={item.name || ''}
                        onChange={(e) => updateArrayItem('curationsSection', 'items', idx, 'name', e.target.value)}
                      />
                    </div>

                    <div className="curator-form-group">
                      <label className="curator-label">Category</label>
                      <input
                        type="text"
                        className="curator-input"
                        value={item.category || ''}
                        onChange={(e) => updateArrayItem('curationsSection', 'items', idx, 'category', e.target.value)}
                      />
                    </div>

                    <div className="curator-form-group">
                      <label className="curator-label">Price (USD)</label>
                      <input
                        type="number"
                        className="curator-input"
                        value={item.price || 0}
                        onChange={(e) => updateArrayItem('curationsSection', 'items', idx, 'price', parseFloat(e.target.value) || 0)}
                      />
                    </div>

                    <div className="curator-form-group curator-form-group--full">
                      <label className="curator-label">Poetic Product Description</label>
                      <textarea
                        className="curator-textarea"
                        value={item.description || ''}
                        onChange={(e) => updateArrayItem('curationsSection', 'items', idx, 'description', e.target.value)}
                      />
                    </div>

                    <div className="curator-form-group curator-form-group--full">
                      <label className="curator-label">Piece Image</label>
                      <ImageControl
                        currentUrl={item.image}
                        onUpdate={(url) => updateArrayItem('curationsSection', 'items', idx, 'image', url)}
                        onUpload={(file) =>
                          handleFieldImageUpload(file, (url) =>
                            updateArrayItem('curationsSection', 'items', idx, 'image', url)
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================================================================
              TAB 6: BESPOKE & THE HEARTBEAT GEM
              ================================================================ */}
          {activeTab === 'bespoke' && (
            <div className="curator-tab-panel">
              <div className="curator-section-header">
                <div>
                  <span className="curator-section-header__eyebrow">SECTION 06</span>
                  <h2 className="curator-section-header__title">Bespoke & The Heartbeat Gem™</h2>
                  <p className="curator-section-header__desc">
                    "Begin With a Feeling" bespoke section and the private inner pulse gem signature.
                  </p>
                </div>
              </div>

              {/* Bespoke Story */}
              <div className="curator-card">
                <h3 className="curator-card__title">
                  <span>Begin With a Feeling (Bespoke)</span>
                  <span className="curator-card__tag">BESPOKE</span>
                </h3>

                <div className="curator-form-grid">
                  <div className="curator-form-group">
                    <label className="curator-label">Eyebrow</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.bespokeSection?.eyebrow || ''}
                      onChange={(e) => updateFormState('bespokeSection', 'eyebrow', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group">
                    <label className="curator-label">Headline</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.bespokeSection?.headline || ''}
                      onChange={(e) => updateFormState('bespokeSection', 'headline', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group curator-form-group--full">
                    <label className="curator-label">Lead Narrative</label>
                    <textarea
                      className="curator-textarea"
                      value={formData.bespokeSection?.lead || ''}
                      onChange={(e) => updateFormState('bespokeSection', 'lead', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group curator-form-group--full">
                    <label className="curator-label">Bespoke Editorial Image</label>
                    <ImageControl
                      currentUrl={formData.bespokeSection?.image}
                      onUpdate={(url) => updateFormState('bespokeSection', 'image', url)}
                      onUpload={(file) => handleFieldImageUpload(file, (url) => updateFormState('bespokeSection', 'image', url))}
                    />
                  </div>
                </div>
              </div>

              {/* Heartbeat Gem */}
              <div className="curator-card">
                <h3 className="curator-card__title">
                  <span>The Heartbeat Gem™ Feature</span>
                  <span className="curator-card__tag">INNER COVENANT</span>
                </h3>

                <div className="curator-form-grid">
                  <div className="curator-form-group">
                    <label className="curator-label">Eyebrow</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.heartbeatSection?.eyebrow || ''}
                      onChange={(e) => updateFormState('heartbeatSection', 'eyebrow', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group">
                    <label className="curator-label">Signature Title</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.heartbeatSection?.headline || ''}
                      onChange={(e) => updateFormState('heartbeatSection', 'headline', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group curator-form-group--full">
                    <label className="curator-label">Signature Quote</label>
                    <textarea
                      className="curator-textarea"
                      value={formData.heartbeatSection?.quote || ''}
                      onChange={(e) => updateFormState('heartbeatSection', 'quote', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group curator-form-group--full">
                    <label className="curator-label">Narrative Paragraph 1</label>
                    <textarea
                      className="curator-textarea"
                      value={formData.heartbeatSection?.p1 || ''}
                      onChange={(e) => updateFormState('heartbeatSection', 'p1', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group curator-form-group--full">
                    <label className="curator-label">Narrative Paragraph 2</label>
                    <textarea
                      className="curator-textarea"
                      value={formData.heartbeatSection?.p2 || ''}
                      onChange={(e) => updateFormState('heartbeatSection', 'p2', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              TAB 7: OUR HOUSE & PRIVATE BANNER
              ================================================================ */}
          {activeTab === 'house' && (
            <div className="curator-tab-panel">
              <div className="curator-section-header">
                <div>
                  <span className="curator-section-header__eyebrow">SECTION 07</span>
                  <h2 className="curator-section-header__title">Our House & The Private Side</h2>
                  <p className="curator-section-header__desc">
                    Full-width atmospheric pause and Maison origin story.
                  </p>
                </div>
              </div>

              {/* Private Banner */}
              <div className="curator-card">
                <h3 className="curator-card__title">
                  <span>The Private Side of Love Banner</span>
                  <span className="curator-card__tag">CINEMATIC BANNER</span>
                </h3>

                <div className="curator-form-grid">
                  <div className="curator-form-group">
                    <label className="curator-label">Headline</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.privateBanner?.headline || ''}
                      onChange={(e) => updateFormState('privateBanner', 'headline', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group curator-form-group--full">
                    <label className="curator-label">Description</label>
                    <textarea
                      className="curator-textarea"
                      value={formData.privateBanner?.description || ''}
                      onChange={(e) => updateFormState('privateBanner', 'description', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group curator-form-group--full">
                    <label className="curator-label">Full-Width Cinematic Backdrop</label>
                    <ImageControl
                      currentUrl={formData.privateBanner?.image}
                      onUpdate={(url) => updateFormState('privateBanner', 'image', url)}
                      onUpload={(file) => handleFieldImageUpload(file, (url) => updateFormState('privateBanner', 'image', url))}
                    />
                  </div>
                </div>
              </div>

              {/* Our House */}
              <div className="curator-card">
                <h3 className="curator-card__title">
                  <span>Our House Section</span>
                  <span className="curator-card__tag">THE MAISON</span>
                </h3>

                <div className="curator-form-grid">
                  <div className="curator-form-group">
                    <label className="curator-label">Headline</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.ourHouseSection?.headline || ''}
                      onChange={(e) => updateFormState('ourHouseSection', 'headline', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group curator-form-group--full">
                    <label className="curator-label">Quote</label>
                    <input
                      type="text"
                      className="curator-input"
                      value={formData.ourHouseSection?.quote || ''}
                      onChange={(e) => updateFormState('ourHouseSection', 'quote', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group curator-form-group--full">
                    <label className="curator-label">House Narrative</label>
                    <textarea
                      className="curator-textarea"
                      value={formData.ourHouseSection?.lead || ''}
                      onChange={(e) => updateFormState('ourHouseSection', 'lead', e.target.value)}
                    />
                  </div>
                  <div className="curator-form-group curator-form-group--full">
                    <label className="curator-label">House Portrait Image</label>
                    <ImageControl
                      currentUrl={formData.ourHouseSection?.image}
                      onUpdate={(url) => updateFormState('ourHouseSection', 'image', url)}
                      onUpload={(file) => handleFieldImageUpload(file, (url) => updateFormState('ourHouseSection', 'image', url))}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              TAB 8: JOURNAL STORIES
              ================================================================ */}
          {activeTab === 'journal' && (
            <div className="curator-tab-panel">
              <div className="curator-section-header">
                <div>
                  <span className="curator-section-header__eyebrow">SECTION 08</span>
                  <h2 className="curator-section-header__title">The Intimate Edit (Journal)</h2>
                  <p className="curator-section-header__desc">
                    Notes on desire, devotion, and the art of making a moment matter.
                  </p>
                </div>
              </div>

              {(formData.journalSection?.articles || []).map((art, idx) => (
                <div key={art.id || idx} className="curator-card">
                  <h3 className="curator-card__title">
                    <span>Story {idx + 1}: {art.title}</span>
                    <span className="curator-card__tag">ARTICLE</span>
                  </h3>

                  <div className="curator-form-grid">
                    <div className="curator-form-group">
                      <label className="curator-label">Article Title</label>
                      <input
                        type="text"
                        className="curator-input"
                        value={art.title || ''}
                        onChange={(e) => updateArrayItem('journalSection', 'articles', idx, 'title', e.target.value)}
                      />
                    </div>
                    <div className="curator-form-group">
                      <label className="curator-label">Link Destination</label>
                      <input
                        type="text"
                        className="curator-input"
                        value={art.href || ''}
                        onChange={(e) => updateArrayItem('journalSection', 'articles', idx, 'href', e.target.value)}
                      />
                    </div>
                    <div className="curator-form-group curator-form-group--full">
                      <label className="curator-label">Excerpt</label>
                      <textarea
                        className="curator-textarea"
                        value={art.excerpt || ''}
                        onChange={(e) => updateArrayItem('journalSection', 'articles', idx, 'excerpt', e.target.value)}
                      />
                    </div>
                    <div className="curator-form-group curator-form-group--full">
                      <label className="curator-label">Story Image</label>
                      <ImageControl
                        currentUrl={art.image}
                        onUpdate={(url) => updateArrayItem('journalSection', 'articles', idx, 'image', url)}
                        onUpload={(file) =>
                          handleFieldImageUpload(file, (url) =>
                            updateArrayItem('journalSection', 'articles', idx, 'image', url)
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================================================================
              TAB 9: MEDIA VAULT & QUICK UPLOADER
              ================================================================ */}
          {activeTab === 'vault' && (
            <div className="curator-tab-panel">
              <div className="curator-section-header">
                <div>
                  <span className="curator-section-header__eyebrow">ASSETS VAULT</span>
                  <h2 className="curator-section-header__title">Media Vault & Image Uploader</h2>
                  <p className="curator-section-header__desc">
                    Drag and drop any photograph to upload it to the server. You can copy the generated URL to use anywhere on the site.
                  </p>
                </div>
              </div>

              {/* Drag and Drop Zone */}
              <VaultDropzone onUploadComplete={(item) => {
                setUploadedVaultList((prev) => [item, ...prev])
                showToast(`Uploaded ${item.name} to vault`, 'success')
              }} />

              {/* Uploaded History in this session */}
              <div className="curator-card">
                <h3 className="curator-card__title">
                  <span>Vault Assets ({uploadedVaultList.length + 6})</span>
                  <span className="curator-card__tag">PUBLIC MEDIA</span>
                </h3>

                <div className="curator-vault-grid">
                  {/* Default key assets for easy copy */}
                  {[
                    { name: 'hero_model.jpg', url: '/images/expressions/hero_model.jpg' },
                    { name: 'vow.jpg', url: '/images/expressions/vow.jpg' },
                    { name: 'touch.jpg', url: '/images/expressions/touch.jpg' },
                    { name: 'wonder.jpg', url: '/images/expressions/wonder.jpg' },
                    { name: 'whisper.jpg', url: '/images/expressions/whisper.jpg' },
                    { name: 'private_love.jpg', url: '/images/expressions/private_love.jpg' },
                    ...uploadedVaultList
                  ].map((asset, i) => (
                    <div key={i} className="curator-vault-item">
                      <img src={asset.url} alt={asset.name} className="curator-vault-item__thumb" />
                      <div className="curator-vault-item__details">
                        <span className="curator-vault-item__name" title={asset.name}>{asset.name}</span>
                        <button
                          type="button"
                          className="curator-vault-item__copy-btn"
                          onClick={() => {
                            navigator.clipboard.writeText(asset.url)
                            showToast(`Copied ${asset.url} to clipboard!`, 'info')
                          }}
                        >
                          COPY URL
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

// ============================================================================
// SUB-COMPONENT: IMAGE CONTROL WITH DIRECT UPLOAD & URL EDITING
// ============================================================================
function ImageControl({ currentUrl, onUpdate, onUpload }) {
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      onUpload(file)
    }
  }

  return (
    <div className="curator-image-field">
      <div className="curator-image-preview-wrap">
        {currentUrl ? (
          <img
            src={currentUrl}
            alt="Preview"
            className="curator-image-preview-img"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        ) : (
          <div className="curator-image-placeholder">No image selected</div>
        )}
      </div>

      <div className="curator-image-controls">
        <input
          type="text"
          className="curator-input"
          placeholder="/images/... or https://..."
          value={currentUrl || ''}
          onChange={(e) => onUpdate(e.target.value)}
        />

        <div className="curator-upload-btn-wrap">
          <input
            type="file"
            ref={fileInputRef}
            className="curator-file-input"
            accept="image/*"
            onChange={handleFileChange}
          />
          <button
            type="button"
            className="curator-upload-trigger-btn"
            onClick={() => fileInputRef.current?.click()}
          >
            <span>&uarr; CHOOSE NEW PICTURE</span>
          </button>
          <span className="curator-label__hint">Uploads to /images/uploads/ and updates live</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// SUB-COMPONENT: VAULT DRAG & DROP ZONE
// ============================================================================
function VaultDropzone({ onUploadComplete }) {
  const [isDragging, setIsDragging] = useState(false)
  const { uploadImage } = useContentStore()
  const fileInputRef = useRef(null)

  const processFile = async (file) => {
    if (!file) return
    const res = await uploadImage(file)
    if (res.success) {
      onUploadComplete({
        name: file.name,
        url: res.url,
        time: new Date()
      })
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) processFile(file)
  }

  return (
    <div
      className={`curator-vault-dropzone ${isDragging ? 'curator-vault-dropzone--drag' : ''}`}
      onDragOver={(e) => {
        e.preventDefault()
        setIsDragging(true)
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) processFile(file)
        }}
      />
      <div className="curator-vault-dropzone__icon">&uarr;</div>
      <h4 className="curator-vault-dropzone__title">Drag & Drop Any Picture to Upload</h4>
      <p className="curator-vault-dropzone__subtitle">
        Supports JPG, PNG, WEBP. Automatically saves to Maison server storage.
      </p>
    </div>
  )
}
