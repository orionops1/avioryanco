import { describe, it, expect } from 'vitest'
import { convertPrice, formatPrice, EXCHANGE_RATES } from './currencyConverter'

describe('currencyConverter', () => {
  it('converts USD to target currencies accurately', () => {
    expect(convertPrice(1000, 'USD')).toBe(1000)
    expect(convertPrice(1000, 'EUR')).toBe(920)
    expect(convertPrice(1000, 'GBP')).toBe(790)
    expect(convertPrice(1000, 'LKR')).toBe(327500)
  })

  it('formats prices with correct currency symbols and decimal places', () => {
    expect(formatPrice(1250, 'USD')).toBe('$1,250.00')
    expect(formatPrice(1250, 'GBP')).toBe('£987.50')
    expect(formatPrice(1250, 'EUR')).toBe('1,150.00 €')
    expect(formatPrice(1250, 'LKR')).toBe('₨ 409,375')
  })

  it('handles invalid or non-numeric prices gracefully', () => {
    expect(formatPrice(null)).toBe('Price upon request')
    expect(formatPrice(undefined)).toBe('Price upon request')
    expect(formatPrice(NaN)).toBe('Price upon request')
  })
})
