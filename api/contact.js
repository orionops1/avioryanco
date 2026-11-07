/**
 * Production Serverless Handler: Contact Inquiries
 * Handles /api/contact for Vercel / serverless deployments
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {})
    const { name, email, phone, subject, message } = body

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ success: false, error: 'Please provide your name (at least 2 characters).' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, error: 'Please provide a valid email address.' })
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({ success: false, error: 'Please enter a message (at least 5 characters).' })
    }

    const inquiry = {
      id: `inq_${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: (phone || '').trim(),
      subject: (subject || 'General Inquiry').trim(),
      message: message.trim(),
      receivedAt: new Date().toISOString()
    }

    // In serverless environment, log structured inquiry
    console.log('[Concierge Inquiry Received]:', inquiry)

    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been received by our private concierge. We will respond within 24 hours.',
      inquiryId: inquiry.id
    })
  } catch (err) {
    console.error('[API Error /api/contact]:', err)
    return res.status(500).json({ success: false, error: 'Internal server error processing inquiry.' })
  }
}
