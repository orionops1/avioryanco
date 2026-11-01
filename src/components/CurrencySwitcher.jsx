import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import './CurrencySwitcher.css'

export default function CurrencySwitcher({ variant = 'light' }) {
  const { currency, changeCurrency, currencies } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentCurrency = currencies.find(curr => curr.code === currency) || currencies[0]

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
    <div className={`currency-switcher currency-switcher--${variant}`} ref={dropdownRef}>
      <button
        type="button"
        className={`currency-toggle ${isOpen ? 'currency-toggle--open' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
        title="Select Currency"
        aria-expanded={isOpen}
      >
        <span className="currency-symbol">{currentCurrency?.symbol}</span>
        <span className="currency-code">{currency}</span>
        <svg 
          className={`currency-chevron ${isOpen ? 'open' : ''}`} 
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
        <div className="currency-dropdown" role="menu">
          <div className="currency-dropdown__header">Select Currency</div>
          <div className="currency-dropdown__list">
            {currencies.map(curr => (
              <button
                key={curr.code}
                type="button"
                className={`currency-option ${currency === curr.code ? 'active' : ''}`}
                onClick={() => {
                  changeCurrency(curr.code)
                  setIsOpen(false)
                }}
                title={curr.name}
                role="menuitem"
              >
                <span className="option-symbol">{curr.symbol}</span>
                <span className="option-name">{curr.name}</span>
                <span className="option-code">{curr.code}</span>
                {currency === curr.code && <span className="option-check">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
