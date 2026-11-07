/**
 * Production Serverless Handler: Newsletter Subscription
 * Handles /api/newsletter for Vercel / serverless deployments
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {})
    const { email } = body

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(String(email).trim())) {
      return res.status(400).json({ success: false, error: 'Please provide a valid email address.' })
    }

    const subscriber = {
      email: String(email).trim().toLowerCase(),
      subscribedAt: new Date().toISOString()
    }

    console.log('[Newsletter Subscriber]:', subscriber)

    return res.status(200).json({
      success: true,
      message: 'Welcome to the Circle of Devotion. You will receive private previews and atelier letters.'
    })
  } catch (err) {
    console.error('[API Error /api/newsletter]:', err)
    return res.status(500).json({ success: false, error: 'Internal server error processing subscription.' })
  }
}
