/**
 * Production Serverless Handler: Curator Admin Authentication
 * Handles /api/admin/auth
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {})
    const { password } = body
    const expectedPassword = process.env.ADMIN_PASSWORD || 'aviory2026'

    if (!password || password !== expectedPassword) {
      return res.status(401).json({ success: false, error: 'Invalid curator credentials' })
    }

    // Generate a session token
    const token = `aviory_curator_${Buffer.from(Date.now().toString()).toString('base64')}`
    return res.status(200).json({
      success: true,
      token,
      expiresIn: 86400
    })
  } catch (err) {
    console.error('[API Error /api/admin/auth]:', err)
    return res.status(500).json({ success: false, error: 'Authentication failed' })
  }
}
