/* ============================================================================
   CURRENCY CONVERTER UTILITY
   Manages conversion rates and formatting across USD, EUR, GBP, LKR
   ============================================================================ */

export const LAST_RATES_UPDATED = '2026-11-07'

// Base currency is USD
// Verified exchange rates (1 USD = X in target currency)
export const EXCHANGE_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  LKR: 327.50
}

export const CURRENCY_SYMBOLS = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  LKR: '₨'
}

export const CURRENCY_NAMES = {
  USD: 'US Dollar',
  EUR: 'Euro',
  GBP: 'British Pound',
  LKR: 'Sri Lankan Rupee'
}

/**
 * Convert a price from USD to target currency
 * @param {number} priceUSD - Price in USD
 * @param {string} targetCurrency - Target currency code (USD, EUR, GBP, LKR)
 * @returns {number} - Converted price
 */
export const convertPrice = (priceUSD, targetCurrency = 'USD') => {
  if (typeof priceUSD !== 'number' || isNaN(priceUSD)) return 0
  const rate = EXCHANGE_RATES[targetCurrency] || 1
  return priceUSD * rate
}

/**
 * Format price with currency symbol and proper decimal places
 * @param {number} priceUSD - Price in USD
 * @param {string} currency - Currency code (USD, EUR, GBP, LKR)
 * @returns {string} - Formatted price string
 */
export const formatPrice = (priceUSD, currency = 'USD') => {
  if (typeof priceUSD !== 'number' || isNaN(priceUSD)) return 'Price upon request'
  
  const convertedPrice = convertPrice(priceUSD, currency)
  const symbol = CURRENCY_SYMBOLS[currency] || '$'

  // LKR typically doesn't use decimals, others use 2
  const decimals = currency === 'LKR' ? 0 : 2

  // Format the number with proper locale
  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(convertedPrice)

  // Place symbol appropriately
  if (currency === 'EUR') {
    return `${formatted} ${symbol}`
  } else if (currency === 'GBP') {
    return `£${formatted}`
  } else if (currency === 'LKR') {
    return `₨ ${formatted}`
  } else {
    return `${symbol}${formatted}`
  }
}

/**
 * Get exchange rate for a currency
 * @param {string} currency - Currency code
 * @returns {number} - Exchange rate
 */
export const getExchangeRate = (currency) => {
  return EXCHANGE_RATES[currency] || 1
}

/**
 * Get all available currencies with metadata
 * @returns {Array} - Array of currency objects
 */
export const getCurrencies = () => {
  return Object.keys(EXCHANGE_RATES).map(code => ({
    code,
    symbol: CURRENCY_SYMBOLS[code],
    name: CURRENCY_NAMES[code],
    rate: EXCHANGE_RATES[code]
  }))
}

export default {
  LAST_RATES_UPDATED,
  convertPrice,
  formatPrice,
  getExchangeRate,
  getCurrencies,
  EXCHANGE_RATES,
  CURRENCY_SYMBOLS,
  CURRENCY_NAMES
}
