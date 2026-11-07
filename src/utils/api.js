/**
 * API Utilities
 * Centralized API layer for form submission, error handling, and retry logic
 */

/**
 * Submit contact form data to API
 * Implements: timeout (5s), retry logic (up to 2 retries on timeout), error handling
 * @param {object} formData - Form data to submit (name, email, phone, subject, message)
 * @returns {Promise} - { success: bool, data: object, error: string }
 */
export const submitContactForm = async (formData) => {
  const TIMEOUT_MS = 5000;
  const MAX_RETRIES = 2;
  
  let lastError = null;
  
  // Retry loop
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);
      
      // Make API request
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      // Handle response based on status code
      if (!response.ok) {
        if (response.status === 400) {
          // Validation error - don't retry
          const errorData = await response.json().catch(() => ({}));
          return {
            success: false,
            error: errorData.message || 'Please check your information and try again.',
          };
        }
        
        if (response.status >= 500) {
          // Server error - retry if attempts remaining
          if (attempt < MAX_RETRIES) {
            lastError = new Error('Server error');
            continue;
          }
          return {
            success: false,
            error: "We're experiencing technical difficulties. Please try again in a few moments.",
          };
        }
        
        // Other HTTP errors
        return {
          success: false,
          error: 'An error occurred. Please try again.',
        };
      }
      
      // Success
      const data = await response.json();
      if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development') {
        console.log('[API] Contact form submitted successfully', data);
      }
      return { success: true, data };
      
    } catch (error) {
      lastError = error;
      
      // Check if error is a timeout/abort
      if (error.name === 'AbortError') {
        if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development') {
          console.log(`[API] Timeout on attempt ${attempt + 1}, retrying...`);
        }
        
        if (attempt < MAX_RETRIES) {
          // Retry on timeout
          continue;
        }
        
        // Max retries exhausted
        return {
          success: false,
          error: 'The request took too long. Please try again.',
        };
      }
      
      // Network error
      if (error.message === 'Failed to fetch') {
        if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development') {
          console.error('[API Error] Network error:', error);
        }
        return {
          success: false,
          error: 'Unable to connect. Please check your internet connection and try again.',
        };
      }
      
      // Unknown error - don't retry
      if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development') {
        console.error('[API Error] Unexpected error:', error);
      }
      return {
        success: false,
        error: 'An error occurred. Please try again.',
      };
    }
  }
  
  // Should not reach here, but as fallback
  return {
    success: false,
    error: 'An error occurred. Please try again.',
  };
};

/**
 * Get user-friendly error message from error object
 * @param {Error} error - The error object
 * @returns {string} - User-friendly error message
 */
export const getErrorMessage = (error) => {
  if (!error) {
    return 'An error occurred. Please try again.';
  }
  
  if (error.name === 'AbortError') {
    return 'The request took too long. Please try again.';
  }
  
  if (error.message === 'Failed to fetch') {
    return 'Unable to connect. Please check your internet connection and try again.';
  }
  
  return 'An error occurred. Please try again.';
};

export default {
  submitContactForm,
  getErrorMessage
};
