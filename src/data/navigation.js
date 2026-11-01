// ============================================================================
// AVIORY & CO - NAVIGATION CONFIGURATION
// Centralized navigation structure for Header mega-menu and Footer links
// Inspired by Tiffany & Co. & Harry Winston Haute Joaillerie standard
// ============================================================================

export const megaMenuData = [
  {
    key: 'gemstones',
    label: 'Gemstones',
    labelKey: 'common.gemstones',
    href: '/gemstones',
    mega: {
      columns: [
        {
          heading: 'By Rare Hue',
          links: [
            { label: 'Royal Blue Sapphires', href: '/gemstones?category=blue-sapphires' },
            { label: 'Cornflower Sapphires', href: '/gemstones?category=blue-sapphires' },
            { label: 'Padparadscha (Sunset Lotus)', href: '/gemstones?category=padparadscha' },
            { label: 'Vivid Pink Sapphires', href: '/gemstones?category=pink-sapphires' },
            { label: 'Canary Yellow Sapphires', href: '/gemstones?category=yellow-sapphires' },
            { label: 'Pigeon Blood Rubies', href: '/gemstones?category=rubies' },
            { label: 'Cobalt Spinels', href: '/gemstones?category=spinels' },
          ],
        },
        {
          heading: 'Curated Selections',
          links: [
            { label: 'Collector Vault Specimens', href: '/gemstones?category=collector' },
            { label: 'Unheated Natural Gems', href: '/gemstones' },
            { label: 'Rare Fancy Colored Gems', href: '/gemstones?category=other' },
            { label: 'View All Gemstones', href: '/gemstones', accent: true },
          ],
        },
        {
          heading: 'Provenance & Science',
          links: [
            { label: 'Ceylon Provenance Assurance', href: '/journal/the-heritage-of-ceylon-gemstones' },
            { label: 'GRS, GIA & Lotus Certification', href: '/our-house' },
            { label: 'The Science of Sapphires', href: '/journal/the-science-of-sapphire' },
          ],
        },
      ],
      feature: {
        title: 'The Ceylon Heritage Vault',
        subtitle: 'Pure, unheated natural sapphires celebrated for over 2,000 years for celestial brilliance.',
        cta: { label: 'Explore Provenance', href: '/our-house' },
        accent: 'sapphire',
      },
    },
  },
  {
    key: 'fine-jewellery',
    label: 'Fine Jewellery',
    labelKey: 'common.fineJewellery',
    href: '/fine-jewellery',
    mega: {
      columns: [
        {
          heading: 'By Category',
          links: [
            { label: 'High Jewellery Rings', href: '/fine-jewellery?collection=Rings' },
            { label: 'Earrings & Drops', href: '/fine-jewellery?collection=Earrings' },
            { label: 'Statement Necklaces', href: '/fine-jewellery?collection=Necklaces' },
            { label: 'Bracelets & Cuffs', href: '/fine-jewellery?collection=Bracelets' },
            { label: 'Bespoke Art Objects', href: '/fine-jewellery?collection=Brooches' },
          ],
        },
        {
          heading: 'Signature Collections',
          links: [
            { label: 'Limited Atelier Masterpieces', href: '/fine-jewellery?collection=Limited+Edition' },
            { label: 'The Love Collection', href: '/love-and-celebration' },
            { label: 'View All Fine Jewellery', href: '/fine-jewellery', accent: true },
          ],
        },
        {
          heading: 'Atelier Services',
          links: [
            { label: 'Bespoke Commission Process', href: '/bespoke' },
            { label: 'Private Atelier Appointments', href: '/private-consultations' },
            { label: 'Jewellery Care Guide', href: '/journal/caring-for-your-sapphires' },
          ],
        },
      ],
      feature: {
        title: 'Atelier Craftsmanship',
        subtitle: 'Hand-wrought in 18K yellow gold, rose gold, and platinum by Ceylon master goldsmiths.',
        cta: { label: 'Discover The Craft', href: '/journal/the-art-of-bespoke-jewellery' },
        accent: 'gold',
      },
    },
  },
  {
    key: 'love-and-celebration',
    label: 'Love & Celebration',
    labelKey: 'common.loveAndCelebration',
    href: '/love-and-celebration',
    mega: {
      tabs: [
        {
          id: 'engagement-rings',
          label: 'ENGAGEMENT RINGS',
          items: [
            {
              name: 'Royal Sapphire Solitaire',
              desc: 'Classic four-prong platinum setting showcasing unheated Ceylon sapphire',
              image: '/images/products/prod1.jpg',
              href: '/love-and-celebration?style=solitaire',
            },
            {
              name: 'The Aviory Setting',
              desc: 'Iconic cathedral setting elevating the gem for maximum optical radiance',
              image: '/images/products/prod2.jpg',
              href: '/love-and-celebration?style=solitaire',
            },
            {
              name: 'Sunset Padparadscha Halo',
              desc: 'Rare lotus-hued sapphire enveloped in diamond micropavé',
              image: '/images/products/prod3.jpg',
              href: '/love-and-celebration?style=halo',
            },
            {
              name: 'Trilogy Three-Stone',
              desc: 'Past, present, and lifetime commitment in three certified gems',
              image: '/images/products/prod4.jpg',
              href: '/love-and-celebration?style=three-stone',
            },
            {
              name: 'Pigeon Blood Ruby Soleste',
              desc: 'Fiery Burma & Ceylon ruby with cushion halo brilliance',
              image: '/images/products/prod5.jpg',
              href: '/love-and-celebration?style=halo',
            },
            {
              name: 'How to Choose Your Ring',
              desc: 'An expert guide to selecting a rare gemstone engagement ring',
              image: '/images/products/prod6.jpg',
              href: '/journal/designing-your-dream-ring',
              guide: true,
            },
          ],
        },
        {
          id: 'diamond-shapes',
          label: 'DIAMOND SHAPES',
          items: [
            {
              name: 'Oval Cut',
              desc: 'Elongated brilliant facets maximizing royal fire and vintage allure',
              image: '/images/categories/cat1.jpg',
              href: '/love-and-celebration?cut=oval',
            },
            {
              name: 'Cushion Cut',
              desc: 'Romantic rounded pillow facets, the premier cut for Ceylon sapphires',
              image: '/images/categories/cat2.jpg',
              href: '/love-and-celebration?cut=cushion',
            },
            {
              name: 'Emerald Cut',
              desc: 'Architectural step cut showcasing crystalline purity and color depth',
              image: '/images/categories/cat3.jpg',
              href: '/love-and-celebration?cut=emerald',
            },
            {
              name: 'Round Brilliant',
              desc: 'Classic 58 facets engineered for scintillation and spectral sparkle',
              image: '/images/categories/cat4.jpg',
              href: '/love-and-celebration?cut=round',
            },
            {
              name: 'Pear Shape',
              desc: 'Dramatic teardrop contour blending distinctive elegance with brilliance',
              image: '/images/categories/cat5.jpg',
              href: '/love-and-celebration?cut=pear',
            },
            {
              name: 'Princess Cut',
              desc: 'Modern square brilliant cut with crisp, contemporary geometry',
              image: '/images/categories/cat6.jpg',
              href: '/love-and-celebration?cut=princess',
            },
          ],
        },
        {
          id: 'wedding-bands',
          label: 'WEDDING BANDS',
          items: [
            {
              name: 'Eternity Sapphire Bands',
              desc: 'Continuous unbroken circle of rare Ceylon blue and pink sapphires',
              image: '/images/products/prod7.jpg',
              href: '/love-and-celebration?category=bands',
            },
            {
              name: 'Micropavé Diamond & Gold',
              desc: 'Delicate hand-set pavé in 18K solid yellow and rose gold',
              image: '/images/products/prod8.jpg',
              href: '/love-and-celebration?category=bands',
            },
            {
              name: 'Classic Platinum Bands',
              desc: 'Timeless comfort-fit 950 platinum wedding rings',
              image: '/images/products/prod9.jpg',
              href: '/love-and-celebration?category=bands',
            },
            {
              name: 'His & Hers Matched Sets',
              desc: 'Harmonious bespoke bridal pairs designed in tandem',
              image: '/images/products/prod10.jpg',
              href: '/love-and-celebration?category=bands',
            },
            {
              name: 'Crown Diamond Band',
              desc: 'Contoured chevron band designed to flush-fit solitaire engagement rings',
              image: '/images/products/portf1.jpg',
              href: '/love-and-celebration?category=bands',
            },
            {
              name: 'Explore All Bands',
              desc: 'Discover our complete bridal wedding band suite in platinum & 18K gold',
              image: '/images/products/portf2.jpg',
              href: '/love-and-celebration?category=bands',
              guide: true,
            },
          ],
        },
        {
          id: 'celebrations',
          label: 'CELEBRATION',
          items: [
            {
              name: 'The Proposal',
              desc: 'She will say "Yes" with a ring crafted for your unique love story',
              image: '/images/most-popular-gifts.jpg',
              href: '/love-and-celebration?style=solitaire',
            },
            {
              name: 'Anniversary Milestones',
              desc: 'Mark each decade with Ceylon sapphires and ruby heirlooms',
              image: '/images/gifts-for-her.jpg',
              href: '/love-and-celebration?moment=anniversary',
            },
            {
              name: 'Wedding Day Jewellery',
              desc: 'Something blue: heirloom sapphires to cherish on your wedding day',
              image: '/images/art-of-gifting.jpg',
              href: '/fine-jewellery',
            },
            {
              name: 'Bespoke Love Stories',
              desc: 'Co-design an heirloom that captures your journey together',
              image: '/images/gifts-to-engrave.jpg',
              href: '/bespoke',
            },
            {
              name: 'Milestone Heirlooms',
              desc: 'Certified collector sapphires to commemorate monumental lifetime achievements',
              image: '/images/products/portf3.jpg',
              href: '/gemstones?category=collector',
            },
            {
              name: 'Push Presents & Eternity',
              desc: 'Cherish new chapters with bespoke eternity bands and coloured gem pendants',
              image: '/images/products/portf4.jpg',
              href: '/love-and-celebration?category=bands',
              guide: true,
            },
          ],
        },
        {
          id: 'the-difference',
          label: 'THE AVIORY DIFFERENCE',
          items: [
            {
              name: '100% Unheated Provenance',
              desc: 'Natural earth-mined Ceylon sapphires with certified unheated custodial origin',
              image: '/images/categories/cat1.jpg',
              href: '/our-house',
            },
            {
              name: 'Direct Mine Custody',
              desc: 'Ethical direct custody from the historic gem-bearing gravels of Ratnapura',
              image: '/images/journal/ja-003.jpg',
              href: '/journal/sustainable-luxury-and-ethical-sourcing',
            },
            {
              name: 'Master Certification',
              desc: 'Independent certificates from GRS, GIA, and Lotus verifying lack of thermal treatment',
              image: '/images/journal/ja-001.jpg',
              href: '/our-house',
            },
            {
              name: 'Master Goldsmith Artistry',
              desc: 'Hand-forged in 950 platinum and 18K solid gold by multi-generational Ceylon artisans',
              image: '/images/art-of-gifting.jpg',
              href: '/journal/the-art-of-bespoke-jewellery',
            },
            {
              name: 'Bespoke Atelier Concierge',
              desc: 'One-on-one consultation with gemmologists to co-design your custom love story',
              image: '/images/gifts-to-engrave.jpg',
              href: '/bespoke',
            },
            {
              name: 'Lifetime Heirlooms Promise',
              desc: 'Complimentary annual inspection, ultrasonic cleaning, and permanent provenance custody',
              image: '/images/journal/ja-002.jpg',
              href: '/contact?subject=care',
              guide: true,
            },
          ],
        },
      ],
      infoLink: {
        label: 'The Aviory Difference',
        href: '/our-house',
        desc: '100% Unheated Ceylon Provenance & Ethical Direct Mine Custody',
      },
      columns: [
        {
          heading: 'By Moment',
          links: [
            { label: 'The Proposal', href: '/love-and-celebration?style=solitaire' },
            { label: 'Say Yes with Halo Designs', href: '/love-and-celebration?style=halo' },
            { label: 'Three Hearts, One Promise', href: '/love-and-celebration?style=three-stone' },
            { label: 'Modern Love Stories', href: '/love-and-celebration?style=cushion' },
            { label: 'Forever Elegance', href: '/love-and-celebration?style=oval' },
            { label: 'Unique & Distinctive', href: '/love-and-celebration?style=pear' },
          ],
        },
        {
          heading: 'By Gemstone',
          links: [
            { label: 'Royal Sapphire Rings', href: '/love-and-celebration?stone=blue-sapphire' },
            { label: 'Burma & Ceylon Ruby Rings', href: '/love-and-celebration?stone=ruby' },
            { label: 'Pink & Padparadscha Rings', href: '/love-and-celebration?stone=pink-sapphire' },
            { label: 'View Full Collection', href: '/love-and-celebration', accent: true },
          ],
        },
        {
          heading: 'Resources',
          links: [
            { label: 'Ring Sizing Guide', href: '/love-and-celebration' },
            { label: 'The Story of Love', href: '/love-and-celebration' },
            { label: 'Book a Consultation', href: '/private-consultations' },
            { label: 'Design Your Own', href: '/bespoke/enquiry' },
          ],
        },
      ],
      feature: {
        title: 'AVIORY Love Collection',
        subtitle: 'Rings for Every Love Story. Handcrafted with rare Ceylon gemstones.',
        cta: { label: 'Design Your Ring', href: '/bespoke/enquiry' },
        accent: 'rose',
      },
    },
  },
  {
    key: 'bespoke',
    label: 'Bespoke',
    labelKey: 'common.bespoke',
    href: '/bespoke',
    mega: {
      columns: [
        {
          heading: 'Custom Creation',
          links: [
            { label: 'The 5-Stage Process', href: '/bespoke/process' },
            { label: 'Submit Custom Commission Enquiry', href: '/bespoke/enquiry' },
            { label: 'Private Showroom Consultation', href: '/private-consultations' },
            { label: 'View Bespoke Atelier', href: '/bespoke', accent: true },
          ],
        },
        {
          heading: 'Inspiration & Stories',
          links: [
            { label: 'Designing Your Dream Ring', href: '/journal/designing-your-dream-ring' },
            { label: 'The Art of Bespoke Jewellery', href: '/journal/the-art-of-bespoke-jewellery' },
            { label: 'Ethical Mine-to-Market', href: '/journal/sustainable-luxury-and-ethical-sourcing' },
          ],
        },
      ],
      feature: {
        title: 'Vision to Masterpiece',
        subtitle: 'From a loose hand-selected gem to an heirloom that transcends generations.',
        cta: { label: 'Explore Bespoke', href: '/bespoke/process' },
        accent: 'champagne',
      },
    },
  },
  {
    key: 'our-house',
    label: 'Our House',
    labelKey: 'common.ourHouse',
    href: '/our-house',
  },
  {
    key: 'journal',
    label: 'Journal',
    labelKey: 'common.journal',
    href: '/journal',
  },
];

export const footerLinks = {
  collections: [
    { label: 'Royal Ceylon Sapphires', href: '/gemstones' },
    { label: 'Padparadscha & Spinels', href: '/gemstones?category=padparadscha' },
    { label: 'Haute Joaillerie Suites', href: '/fine-jewellery' },
    { label: 'The Love Collection', href: '/love-and-celebration' },
    { label: 'Collector Vault Pieces', href: '/gemstones?category=collector' },
  ],
  service: [
    { label: 'Private Atelier Appointments', href: '/private-consultations' },
    { label: 'Shipping & Worldwide Delivery', href: '/contact?subject=shipping' },
    { label: 'Returns & Authenticity Guarantee', href: '/contact?subject=returns' },
    { label: 'Ring Sizing Guide', href: '/love-and-celebration' },
  ],
  company: [
    { label: 'Our House & Ceylon Heritage', href: '/our-house' },
    { label: 'The Bespoke Process', href: '/bespoke/process' },
    { label: 'The Aviory Journal', href: '/journal' },
    { label: 'Ethical Mining & Sustainability', href: '/journal/sustainable-luxury-and-ethical-sourcing' },
  ],
  concierge: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Book a Consultation', href: '/private-consultations' },
    { label: 'Bespoke Inquiries', href: '/bespoke/enquiry' },
  ],
};
