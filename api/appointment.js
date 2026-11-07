/**
 * Production Serverless Handler: Private Appointments
 * Handles /api/appointment for Vercel / serverless deployments
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {})
    const { name, email, phone, type, date, interest, notes } = body

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ success: false, error: 'Please provide your full name.' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, error: 'Please provide a valid email address.' })
    }

    if (!date) {
      return res.status(400).json({ success: false, error: 'Please select a preferred date.' })
    }

    const appointment = {
      id: `appt_${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: (phone || '').trim(),
      type: type || 'virtual',
      date,
      interest: interest || 'Haute Joaillerie & Ceylon Sapphires',
      notes: (notes || '').trim(),
      receivedAt: new Date().toISOString()
    }

    console.log('[Private Appointment Booked]:', appointment)

    return res.status(200).json({
      success: true,
      message: 'Your appointment request has been confirmed. Our concierge will contact you within 4 hours to finalize details.',
      appointmentId: appointment.id
    })
  } catch (err) {
    console.error('[API Error /api/appointment]:', err)
    return res.status(500).json({ success: false, error: 'Internal server error processing appointment.' })
  }
}
