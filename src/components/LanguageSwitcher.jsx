import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import './LanguageSwitcher.css'

const GlobeIcon = () => (
  <svg 
    width="13" 
    height="13" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.6" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    style={{ flexShrink: 0, color: '#B8996A' }}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

export default function LanguageSwitcher({ variant = 'light' }) {
  const { language, changeLanguage, languages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  return (
    <div className={`language-switcher language-switcher--${variant}`} ref={dropdownRef}>
      <button
        type="button"
        className={`language-toggle ${isOpen ? 'language-toggle--open' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
        title="Select Language"
        aria-expanded={isOpen}
      >
        <GlobeIcon />
        <span className="language-code">{language.toUpperCase()}</span>
        <svg 
          className={`language-chevron ${isOpen ? 'open' : ''}`} 
          width="9" 
          height="6" 
          viewBox="0 0 10 6" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.8"
        >
          <path d="M1 1L5 5L9 1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div className="language-dropdown" role="menu">
          <div className="language-dropdown__header">Select Language</div>
          <div className="language-dropdown__list">
            {languages.map(lang => (
              <button
                key={lang.code}
                type="button"
                className={`language-option ${language === lang.code ? 'active' : ''}`}
                onClick={() => {
                  changeLanguage(lang.code)
                  setIsOpen(false)
                }}
                title={lang.name}
                role="menuitem"
              >
                <span className="option-name">{lang.name}</span>
                <span className="option-code">{lang.code.toUpperCase()}</span>
                {language === lang.code && <span className="option-check">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
