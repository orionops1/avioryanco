# AVIORY Phases 3-8 Build Guide

## Completed
✅ Phase 1: Core Infrastructure  
✅ Phase 2: Homepage  
✅ Phase 3a: Gemstones Listing  
✅ Phase 3b: Gemstone Detail Page  

## Remaining Phases (Build Template)

### Phase 3c: FineJewellery Section
```jsx
// src/pages/FineJewellery.jsx
- Grid of jewellery products
- Categories: Rings, Earrings, Necklaces, Bracelets
- Metal options filter
- Price range filter
- "Add to Selection" button
- Consultation CTA
```

### Phase 4: Jewellery Detail
```jsx
// src/pages/JewelleryDetail.jsx
- High-res product images (4+ angles)
- Metal weight & type
- Gemstone specifications
- Customization options
- "Customize This Design" button
- "Book Consultation" CTA
- Related products
```

### Phase 5: Engagement Rings
```jsx
// src/pages/EngagementRings.jsx
- Sapphire engagement rings category
- Coloured gemstone rings category
- Ring styles showcase
- "Ring Size Guide" modal
- Engagement ring enquiry form
- Testimonials section
```

### Phase 6: Bespoke Commissions
```jsx
// src/pages/Bespoke.jsx
- 5-stage commission process (detailed)
- Custom engagement rings section
- Jewellery redesign section
- Gemstone selection guide
- Bespoke enquiry form
- Timeline & pricing
```

### Phase 7: Journal & Our House
```jsx
// src/pages/Journal.jsx
- Article listing with featured images
- Categories: Gemology, Care, Design
- Article detail pages
- Related articles

// src/pages/OurHouse.jsx
- The AVIORY Story
- Our Approach to authenticity
- Gemstone Knowledge base
- Sri Lankan Heritage story
```

### Phase 8: Contact & Policies
```jsx
// src/pages/Contact.jsx & PrivateConsultations.jsx
- General enquiry form
- Private consultation booking
- Whatsapp integration

// src/pages/Policies
- Shipping & Delivery
- Returns & Refunds
- Gemstone Disclosure
- Certification & Reports
- Bespoke Terms
- Jewellery Care
- Privacy Policy
- Terms & Conditions
- FAQs
```

## Implementation Strategy

### Option 1: Manual Build (Recommended for Quality)
Build each section with full styling, responsiveness, and proper component structure. Time: 15-20 hours

### Option 2: Component-Based (Faster)
Create reusable components:
- ProductGrid component (for gemstones & jewellery)
- ProductCard component (already exists, enhance)
- DetailPage component (reusable template)
- EnquiryForm component
- LabBadge component

### Option 3: Skeleton Template (Fastest)
Create minimal functional pages with proper routing and styling hooks. Time: 4-6 hours

## Data Integration

### From WordPress REST API
- WooCommerce Products → Gemstones & Jewellery
- Custom fields for:
  - Carat weight
  - Color
  - Clarity
  - Treatment
  - Lab report links
  - Metal type
  - Customization options

### Featured Content
- Homepage featured products
- Related products on detail pages
- Journal featured articles

## Styling System Already In Place
```
✅ Luxury design tokens (colors, typography, spacing)
✅ Responsive breakpoints (1400px, 1200px, 900px, 768px, 480px)
✅ Button styles (aviory-btn, aviory-btn-outline, aviory-btn-gold)
✅ Card components (product cards, journal cards, etc.)
✅ Form styles ready
✅ Trust badge system
✅ Lab badge system
```

## Next: Choose Your Approach
1. **Quick Functional Build** (4-6 hours) → All pages with basic content
2. **Full Feature Build** (15-20 hours) → Complete with WordPress integration
3. **Hybrid Approach** → Build critical sections (Gemstones, Engagement, Bespoke) fully, others as templates

## Critical Success Factors
✅ Maintain luxury aesthetic throughout
✅ WhatsApp integration on every page
✅ Consultation CTAs prominent
✅ Lab badges on all gemstone/jewellery
✅ 5-stage process visible in Bespoke section
✅ Journal articles accessible
✅ All policy pages available

## Recommendation
Build Phase 3 (Gemstones) fully as a template, then replicate pattern for:
- Phase 4 (Fine Jewellery)
- Phase 5 (Engagement Rings)

Then focus on high-value pages:
- Phase 6 (Bespoke with commission form)
- Phase 8a (Contact & Consultations)

Remaining phases can be simpler templates once architecture is set.
