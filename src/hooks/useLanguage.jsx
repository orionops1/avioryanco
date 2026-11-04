import { createContext, useContext, useState, useEffect } from 'react'
import en from '../i18n/en.json'
import de from '../i18n/de.json'
import fr from '../i18n/fr.json'
import it from '../i18n/it.json'
import es from '../i18n/es.json'

const LanguageContext = createContext()

const translations = {
  en,
  de,
  fr,
  it,
  es
}

const languages = [
  { code: 'en', name: 'English', label: 'EN' },
  { code: 'fr', name: 'Français', label: 'FR' },
  { code: 'de', name: 'Deutsch', label: 'DE' },
  { code: 'it', name: 'Italiano', label: 'IT' },
  { code: 'es', name: 'Español', label: 'ES' }
]

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'LKR', symbol: 'Rs.', name: 'Sri Lankan Rupee' }
]

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('preferred-language')
      return stored && translations[stored] ? stored : 'en'
    }
    return 'en'
  })

  const [currency, setCurrency] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('preferred-currency')
      return stored && currencies.find(c => c.code === stored) ? stored : 'USD'
    }
    return 'USD'
  })

  useEffect(() => {
    localStorage.setItem('preferred-language', language)
  }, [language])

  useEffect(() => {
    localStorage.setItem('preferred-currency', currency)
  }, [currency])

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage)
    }
  }

  const changeCurrency = (newCurrency) => {
    if (currencies.find(c => c.code === newCurrency)) {
      setCurrency(newCurrency)
    }
  }

  const t = (key, fallback = '') => {
    if (!key || typeof key !== 'string') return fallback || ''

    const getNested = (obj, path) => {
      if (!obj) return undefined
      const parts = path.split('.')
      let current = obj
      for (const p of parts) {
        if (current && typeof current === 'object' && p in current) {
          current = current[p]
        } else {
          return undefined
        }
      }
      return typeof current === 'string' ? current : undefined
    }

    // 1. Try selected language
    let result = getNested(translations[language], key)
    if (result) return result

    // 2. Try lowercase key
    const lowerKey = key.toLowerCase()
    if (lowerKey !== key) {
      result = getNested(translations[language], lowerKey)
      if (result) return result
    }

    // 3. Fallback to English
    result = getNested(translations.en, key)
    if (result) return result
    result = getNested(translations.en, lowerKey)
    if (result) return result

    // 4. Return fallback or humanized key
    if (fallback) return fallback
    const lastPart = key.split('.').pop()
    return lastPart.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, languages, currency, changeCurrency, currencies }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export default useLanguage

