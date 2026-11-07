/* ============================================================================
   CONTACT & CONCIERGE CONFIGURATION
   Single source of truth for communication channels, atelier hours, and concierge
   ============================================================================ */

export const CONTACT_CONFIG = {
  brandName: 'AVIORY & CO.',
  legalName: 'Aviory & Co. Haute Joaillerie',
  tagline: 'High Jewellery & Rare Natural Ceylon Gemstones',
  
  // WhatsApp Direct Concierge
  whatsappNumber: '+94776100099',
  whatsappRaw: '94776100099',
  whatsappFormatted: '+94 77 610 0099',
  
  // Direct Phone
  phoneFormatted: '+94 77 610 0099',
  phoneTel: '+94776100099',
  
  // Email Inboxes
  conciergeEmail: 'concierge@aviory.com',
  clientCareEmail: 'clientcare@aviory.com',
  pressEmail: 'press@aviory.com',
  
  // Atelier & Private Client Suite
  atelier: {
    title: 'Aviory Private Client Suite',
    city: 'Colombo 00700',
    country: 'Sri Lanka',
    formatted: 'Private Client Suite, Cinnamon Gardens, Colombo 00700, Sri Lanka',
    hours: 'Monday – Saturday: 9:00 AM – 7:00 PM (GMT+5:30)',
    byAppointmentOnly: true
  },
  
  // Social Channels
  social: {
    instagram: 'https://instagram.com/avioryco',
    pinterest: 'https://pinterest.com/avioryco',
    facebook: 'https://facebook.com/avioryco',
    youtube: 'https://youtube.com/@avioryco'
  },

  /**
   * Generates a direct WhatsApp link with a pre-filled, URL-encoded message
   * @param {string} message - Message body
   * @returns {string} - WhatsApp deep-link URL
   */
  buildWhatsAppUrl: (message = '') => {
    const rawNum = '94776100099'
    if (!message) return `https://wa.me/${rawNum}`
    return `https://wa.me/${rawNum}?text=${encodeURIComponent(message)}`
  }
}

export default CONTACT_CONFIG
