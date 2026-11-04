import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BespokeEnquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pieceType: '',
    gemstone: '',
    style: '',
    budget: '',
    timeline: '',
    inspiration: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        pieceType: '',
        gemstone: '',
        style: '',
        budget: '',
        timeline: '',
        inspiration: '',
        message: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <section style={{
        backgroundColor: 'var(--color-primary-black)',
        color: 'var(--color-ivory)',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: 'var(--color-champagne)' }}>Bespoke Enquiry</h1>
          <p style={{ fontSize: 'var(--font-size-body)', marginTop: 'var(--spacing-md)', opacity: 0.9 }}>
            Tell us about your vision, and we'll be in touch within 24 hours
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {submitted && (
            <div className="alert alert-success" style={{ marginBottom: 'var(--spacing-lg)' }}>
              Thank you for your enquiry! We'll be in touch soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            {/* PERSONAL INFORMATION */}
            <fieldset style={{
              border: '1px solid var(--color-medium-gray)',
              padding: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-xl)',
              backgroundColor: 'var(--color-ivory)'
            }}>
              <legend style={{ paddingLeft: 'var(--spacing-md)' }}>Your Information</legend>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </fieldset>

            {/* PIECE DETAILS */}
            <fieldset style={{
              border: '1px solid var(--color-medium-gray)',
              padding: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-xl)',
              backgroundColor: 'var(--color-ivory)'
            }}>
              <legend style={{ paddingLeft: 'var(--spacing-md)' }}>Your Vision</legend>

              <div className="form-group">
                <label htmlFor="pieceType">What type of piece are you interested in? *</label>
                <select
                  id="pieceType"
                  name="pieceType"
                  value={formData.pieceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a type...</option>
                  <option value="engagement-ring">Engagement Ring</option>
                  <option value="wedding-band">Wedding Band</option>
                  <option value="necklace">Necklace</option>
                  <option value="earrings">Earrings</option>
                  <option value="bracelet">Bracelet</option>
                  <option value="brooch">Brooch</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="gemstone">Which gemstone interests you most?</label>
                <select
                  id="gemstone"
                  name="gemstone"
                  value={formData.gemstone}
                  onChange={handleChange}
                >
                  <option value="">Select a gemstone...</option>
                  <option value="blue-sapphire">Blue Sapphire</option>
                  <option value="pink-sapphire">Pink Sapphire</option>
                  <option value="ruby">Ruby</option>
                  <option value="padparadscha">Padparadscha</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="style">Preferred design style</label>
                <select
                  id="style"
                  name="style"
                  value={formData.style}
                  onChange={handleChange}
                >
                  <option value="">Select a style...</option>
                  <option value="classic">Classic & Timeless</option>
                  <option value="vintage">Vintage Inspired</option>
                  <option value="contemporary">Contemporary</option>
                  <option value="art-deco">Art Deco</option>
                  <option value="bohemian">Bohemian</option>
                  <option value="mixed">Mix of Styles</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select range...</option>
                    <option value="2-5k">$2,000 - $5,000</option>
                    <option value="5-10k">$5,000 - $10,000</option>
                    <option value="10-25k">$10,000 - $25,000</option>
                    <option value="25k+">$25,000+</option>
                    <option value="not-sure">Not sure</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="timeline">Timeline for Completion</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Select timeline...</option>
                    <option value="asap">ASAP (4-6 weeks)</option>
                    <option value="flexible">Flexible (8-12 weeks)</option>
                    <option value="no-rush">No rush (12+ weeks)</option>
                  </select>
                </div>
              </div>
            </fieldset>

            {/* INSPIRATION */}
            <fieldset style={{
              border: '1px solid var(--color-medium-gray)',
              padding: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-xl)',
              backgroundColor: 'var(--color-ivory)'
            }}>
              <legend style={{ paddingLeft: 'var(--spacing-md)' }}>Inspiration</legend>

              <div className="form-group">
                <label htmlFor="inspiration">Where would you like to find inspiration? (Optional)</label>
                <textarea
                  id="inspiration"
                  name="inspiration"
                  value={formData.inspiration}
                  onChange={handleChange}
                  placeholder="Describe any pieces you love, reference images, or design ideas..."
                  style={{ minHeight: '100px' }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell us more about your vision (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share any additional details, stories, or requirements..."
                  style={{ minHeight: '120px' }}
                />
              </div>
            </fieldset>

            <div style={{
              backgroundColor: 'var(--color-ivory)',
              padding: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-lg)',
              borderRadius: '4px',
              fontSize: 'var(--font-size-small)'
            }}>
              <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                * Required fields
              </p>
              <p>
                By submitting this form, you agree to be contacted by AVIORY & CO about your bespoke enquiry. 
                We respect your privacy and will never share your information.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                Submit Enquiry
              </button>
              <Link to="/bespoke" className="btn btn-outline" style={{ flex: 1, textAlign: 'center' }}>
                Back to Bespoke
              </Link>
            </div>
          </form>

          {/* NEXT STEPS */}
          <section style={{
            marginTop: 'var(--spacing-3xl)',
            paddingTop: 'var(--spacing-2xl)',
            borderTop: '1px solid var(--color-medium-gray)'
          }}>
            <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>What Happens Next?</h3>
            <ol style={{ color: 'var(--color-charcoal)', lineHeight: 1.8 }}>
              <li><strong>We Review:</strong> Our design team carefully considers your enquiry and vision.</li>
              <li><strong>We Contact You:</strong> We'll reach out within 24 hours to discuss details.</li>
              <li><strong>Initial Consultation:</strong> We schedule a call or meeting to dive deeper.</li>
              <li><strong>Design Process:</strong> We create sketches and digital renderings for your approval.</li>
              <li><strong>Crafting:</strong> Our artisans bring your masterpiece to life.</li>
              <li><strong>Delivery:</strong> Your completed piece arrives with complete documentation.</li>
            </ol>
          </section>
        </div>
      </div>
    </>
  )
}

