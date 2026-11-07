# AVIORY — Complete Website Redesign & Experience Specification

**Project:** `orionops1/avioryanco`  
**Purpose:** Complete brand-led redesign and functional improvement of the existing Aviory website  
**Audience:** Development team, designers, content editors and QA  
**Implementation approach:** Improve the existing React + Vite application in controlled phases. Do not replace the project wholesale.

---

## 0. Read This First — The Most Important Decision

Aviory is **not another gemstone shop or jewellery catalogue**.

Aviory exists to give form to emotions people cannot easily express: love, desire, intimacy, attraction, devotion, celebration, memory and personal meaning. Jewellery is the physical expression of those feelings. The website must sell the feeling first, create desire through exceptional luxury-jewellery presentation, and then make it easy to discover, understand and enquire about the actual piece.

This is the central design and business principle for every decision in this project:

> **Emotion gives the piece its meaning. Exceptional jewellery gives that emotion a form.**

The website must make a visitor feel something, recognise Aviory as a serious luxury jewellery house, desire the creations, trust the expertise behind them, and know exactly how to take the next step.

### The balance we must get right

- **Emotion leads the story.** The visitor should feel love, longing, desire, intimacy or personal significance before being presented with a technical product description.
- **Jewellery creates the immediate attraction.** The first screen must unmistakably communicate luxury jewellery. A beautiful couple or fashion image alone is not enough. The jewellery must be visible, desirable and photographed exceptionally well.
- **Craft and gemological credibility earn trust.** Real stones, accurate specifications, honest disclosures, genuine craftsmanship and verifiable service promises support the emotional story.
- **Commerce must remain easy.** Visitors must be able to find jewellery, engagement rings, gemstones and bespoke services without decoding poetic or unfamiliar navigation labels.

Do not interpret “emotion first” as hiding the jewellery. Do not interpret “luxury jewellery” as filling every screen with gemstones, product grids or technical specifications. Aviory needs both — in the right order.

---

# 1. Brand Foundation

## 1.1 Brand positioning

**Aviory is a contemporary luxury jewellery house creating personal expressions of love, desire and devotion.**

Aviory should feel like an established international luxury maison with a distinctive point of view and a genuine connection to Sri Lankan gemological knowledge and jewellery-making capability.

Tiffany is a benchmark for clarity, desirability, emotional storytelling, iconic product presentation and consistency. It is a reference for the *standard of execution*, not a template to copy.

### What Aviory should communicate

1. **Desirability:** The pieces are beautiful enough to stop someone scrolling.
2. **Emotion:** Each piece can carry a personal feeling, relationship or memory.
3. **Individuality:** Bespoke work and considered curation make a creation feel personal.
4. **Authority:** Gemological expertise, product knowledge and transparent disclosures are visible.
5. **Confidence:** Aviory speaks calmly. It does not need to over-explain how luxurious it is.

### What Aviory must not become

- A generic online gemstone shop.
- A discount-led jewellery store.
- A catalogue with romantic language pasted over product cards.
- A perfume or fashion website where the jewellery is barely visible.
- A clone of Tiffany, Cartier, Harry Winston or any other established house.
- A website full of extravagant claims that cannot be verified.
- A site that makes visitors read a long manifesto before they can find a ring.

## 1.2 Brand language

The tone is **sensual, refined, intimate, assured and human**.

Use clear, natural English. Prefer a short line that carries meaning over a long, elaborate paragraph. Avoid repetitive metaphors, theatrical declarations and generic AI-sounding luxury copy.

### Language principles

- Lead with emotion in campaign headlines and editorial storytelling.
- Use jewellery and gemological terminology where it helps people understand a product, make a decision or evaluate its quality.
- Keep technical terms out of emotional headlines unless they genuinely improve the line.
- Use specific, factual language on product pages.
- Never make every section sound like a poem.
- Do not repeat “love”, “desire”, “intimacy”, “devotion” and “secret” in every heading. Give each concept a clear purpose.
- Avoid using “rare” as a default luxury adjective. Use it only when scarcity is factual and relevant.
- Do not use “heirloom” as a brand cliché.
- Do not lead emotional campaign copy with phrases such as “Ceylon gemstones”, “unheated sapphire” or “gold”. These belong in product information, provenance and expertise sections where they add value.
- “Ceylon” and Sri Lankan heritage may appear naturally in the brand story and gemological content. Do not force provenance into every slogan.

### Copy direction examples

These are creative reference points, not mandatory final copy:

- Campaign territory: **The Shape of Desire**
- Brand experience: **Bespoke Intimacy**
- Emotional supporting line: “For the moments that belong only to you.”
- Bespoke invitation: “Begin with a feeling.”
- Proposal invitation: “Make the moment yours.”

Before publishing copy, ask: Does it sound like Aviory? Is it understandable? Does it add a new idea? Is it supported by the actual business?

## 1.3 Visual identity

### Palette

Use the existing Aviory palette as the foundation and refine it consistently:

- Warm ivory: `#F8F4EF`
- Warm near-white: `#FDFBF8`
- Soft beige: `#E8D8C3`
- Champagne / muted gold: `#D4AF7F`
- Charcoal: `#2B2B2B`
- Deep black: `#1A1A1A`

Gold is an accent, not a surface colour for everything. Avoid gold borders, gradients, glows and metallic effects on every component. Luxury should come from composition, photography, typography, material and restraint.

### Typography

Establish a clear type system:

- **Display serif:** Editorial headlines and expressive campaign statements.
- **Readable serif or refined sans serif:** Supporting editorial copy.
- **Neutral sans serif:** Navigation, product specifications, buttons, forms and utility labels.

The current project uses Playfair Display, Cormorant Garamond and Montserrat. Review these together rather than assuming all three should remain. Choose a restrained hierarchy, consistent weights and comfortable line lengths. Do not use excessive letter spacing on every heading.

### Photography and art direction

Photography is one of the most important parts of this redesign. Low-quality or generic images cannot be repaired with CSS.

**Jewellery imagery**

- Show the real product clearly.
- Capture the gemstone, setting, proportions, finish and craftsmanship.
- Provide a clean hero image, additional angles, detail/macro views and a scale or on-body image where useful.
- Use consistent colour accuracy and lighting.
- Do not invent gemstone colours, treatments, inclusions, settings or product details in AI-generated product imagery.
- AI-generated jewellery must never be represented as a photograph of a real item unless the image accurately depicts that item and is clearly approved.

**Campaign imagery**

- Use exceptional adult European / Mediterranean international luxury-fashion casting for Aviory campaign imagery. Do not use South Asian-looking models or characters in Aviory campaign creative.
- Models must look distinctive, beautiful, mature and credible as luxury-fashion talent — not generic AI characters.
- Show jewellery clearly. It must not become an invisible accessory in a fashion or romance scene.
- Use elegant wardrobe, considered styling, natural skin texture and believable chemistry.
- Prefer sophisticated editorial direction over obvious stock-photo poses.
- The mood can be romantic and sensual, but must remain tasteful and non-explicit.

**Locations and environments**

Use refined architectural spaces, intimate private interiors, subtle natural light, warm evening light, elegant studio settings and beautifully controlled dark environments. Avoid generic luxury-hotel clichés, excessive chandeliers, obvious wealth displays and artificial sparkle effects.

---

# 2. Recommended Navigation & Sitemap

Desktop navigation:
1. **Jewellery** (`/jewellery` & `/fine-jewellery`)
2. **Engagement** (`/engagement` & `/the-proposal`)
3. **Gemstones** (`/gemstones` & `/the-colour-edit`)
4. **Bespoke** (`/bespoke`)
5. **The House** (`/the-house` & `/our-house`)
6. **Journal** (`/journal`)

Utility items:
- Search
- Language switcher
- Currency switcher
- My Selection (Shopping Bag)
- Private Consultation
