import { describe, it, expect } from 'vitest'
import { submitContactForm, getErrorMessage } from './api'

describe('api utilities', () => {
  it('exports submitContactForm function', () => {
    expect(typeof submitContactForm).toBe('function')
  })

  it('provides friendly error messages for aborts and network errors', () => {
    const abortErr = new Error('Abort')
    abortErr.name = 'AbortError'
    expect(getErrorMessage(abortErr)).toContain('took too long')

    const networkErr = new Error('Failed to fetch')
    expect(getErrorMessage(networkErr)).toContain('internet connection')

    expect(getErrorMessage(null)).toBe('An error occurred. Please try again.')
  })
})
