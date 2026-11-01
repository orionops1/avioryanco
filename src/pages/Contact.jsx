import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { contactInfo } from '../data/content'
import useContactForm from '../hooks/useContactForm'
import { CONTACT_FORM_SUBJECTS } from '../constants/forms'
import './Contact.css'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const { 
    formData, 
    errors, 
    isSubmitting, 
    success, 
    successMessage,
    handleChange, 
    handleSubmit,
    resetForm 
  } = useContactForm()

  // Handle query parameter for pre-filling subject
  useEffect(() => {
    const subjectParam = searchParams.get('subject')
    if (subjectParam) {
      // Map query param values to form subject options
      const subjectMap = {
        'shipping': 'support',
        'returns': 'support',
        'faq': 'support'
      }
      const mappedSubject = subjectMap[subjectParam] || subjectParam
      if (CONTACT_FORM_SUBJECTS.includes(mappedSubject)) {
        handleChange('subject', mappedSubject)
      }
    }
  }, [searchParams, handleChange])

  return (
    <>
      {/* HERO */}
      <section style={{
        backgroundColor: 'var(--color-primary-black)',
        color: 'var(--color-ivory)',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: 'var(--color-champagne)' }}>Contact Us</h1>
          <p style={{ fontSize: '1.1rem', marginTop: 'var(--spacing-md)', opacity: 0.9 }}>
            We're here to help. Reach out with any questions or to schedule a consultation.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-3xl)',
          alignItems: 'start'
        }}>
          {/* CONTACT INFO */}
          <div>
            <h2 style={{ marginBottom: 'var(--spacing-2xl)' }}>Get in Touch</h2>

            <div style={{
              backgroundColor: 'var(--color-ivory)',
              padding: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-lg)',
              border: '1px solid var(--color-medium-gray)'
            }}>
              <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Address</h4>
              <p style={{ color: 'var(--color-charcoal)', lineHeight: 1.8 }}>
                {contactInfo.address}
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--color-ivory)',
              padding: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-lg)',
              border: '1px solid var(--color-medium-gray)'
            }}>
              <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Phone</h4>
              <p style={{ color: 'var(--color-charcoal)' }}>
                <a href={`tel:${contactInfo.phone}`} style={{ color: 'var(--color-champagne)', textDecoration: 'none' }}>
                  {contactInfo.phone}
                </a>
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--color-ivory)',
              padding: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-lg)',
              border: '1px solid var(--color-medium-gray)'
            }}>
              <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Email</h4>
              <p style={{ color: 'var(--color-charcoal)' }}>
                <a href={`mailto:${contactInfo.email}`} style={{ color: 'var(--color-champagne)', textDecoration: 'none' }}>
                  {contactInfo.email}
                </a>
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--color-ivory)',
              padding: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-lg)',
              border: '1px solid var(--color-medium-gray)'
            }}>
              <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Hours</h4>
              <p style={{ color: 'var(--color-charcoal)', marginBottom: 'var(--spacing-sm)' }}>
                {contactInfo.hours}
              </p>
              <p style={{ color: 'var(--color-charcoal)' }}>
                {contactInfo.weekends}
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--color-primary-black)',
              color: 'var(--color-ivory)',
              padding: 'var(--spacing-lg)',
              border: '1px solid var(--color-champagne)',
              marginTop: 'var(--spacing-xl)'
            }}>
              <h4 style={{ color: 'var(--color-champagne)', marginBottom: 'var(--spacing-md)' }}>Response Time</h4>
              <p>We aim to respond to all inquiries within 24 hours during business hours.</p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div>
            <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Send us a Message</h2>

            {success && (
              <div className="alert alert-success" style={{ marginBottom: 'var(--spacing-lg)' }}>
                {successMessage || 'Thank you for your message! We\'ll be in touch soon.'}
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                />
                {errors.name && (
                  <span className="form-error" style={{ color: 'var(--color-rose-gold)', fontSize: '0.9rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                />
                {errors.email && (
                  <span className="form-error" style={{ color: 'var(--color-rose-gold)', fontSize: '0.9rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone (optional)</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
                {errors.phone && (
                  <span className="form-error" style={{ color: 'var(--color-rose-gold)', fontSize: '0.9rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  required
                >
                  <option value="">Select a subject...</option>
                  <option value="general">General Inquiry</option>
                  <option value="bespoke">Bespoke Enquiry</option>
                  <option value="gemologist">Gemologist Concierge Consultation</option>
                  <option value="consultation">Schedule Consultation</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <span className="form-error" style={{ color: 'var(--color-rose-gold)', fontSize: '0.9rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.subject}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  required
                  placeholder="Tell us how we can help..."
                />
                {errors.message && (
                  <span className="form-error" style={{ color: 'var(--color-rose-gold)', fontSize: '0.9rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.message}
                  </span>
                )}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                disabled={isSubmitting || Object.keys(errors).length > 0}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FREQUENTLY CONTACTED */}
      <section style={{ backgroundColor: 'var(--color-ivory)', paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>Common Reasons to Contact Us</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            {[
              { icon: 'ðŸ’', title: 'Bespoke Enquiry', desc: 'Start your custom jewelry creation journey' },
              { icon: 'ðŸ‘¨â€ðŸ”¬', title: 'Gemologist Concierge', desc: 'Expert consultation on gemstone selection' },
              { icon: 'ðŸ’Ž', title: 'Gemstone Questions', desc: 'Learn more about our collection' },
              { icon: 'ðŸ—“', title: 'Schedule Consultation', desc: 'Book a virtual or in-person meeting' },
              { icon: 'ðŸ”§', title: 'Jewelry Care', desc: 'Get advice on caring for your pieces' },
              { icon: 'â“', title: 'General Questions', desc: 'Any other questions about AVIORY & CO' }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: 'var(--color-white)',
                padding: 'var(--spacing-lg)',
                border: '1px solid var(--color-medium-gray)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>
                  {item.icon}
                </div>
                <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>{item.title}</h4>
                <p style={{ color: 'var(--color-charcoal)', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>Visit Our Atelier</h2>
        <div style={{
          width: '100%',
          height: '400px',
          backgroundColor: 'var(--color-medium-gray)',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 'var(--spacing-lg)'
        }}>
          <p style={{ color: 'var(--color-charcoal)', fontSize: '1.1rem' }}>Map Coming Soon</p>
        </div>
        <p style={{ textAlign: 'center', color: 'var(--color-charcoal)' }}>
          Located in the heart of Colombo, Sri Lanka. Contact us to arrange a visit.
        </p>
      </section>
    </>
  )
}

