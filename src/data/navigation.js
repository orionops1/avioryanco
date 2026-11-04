// ============================================================================
// AVIORY & CO - NAVIGATION CONFIGURATION
// Centralized navigation structure for Header mega-menu and Footer links
// Inspired by Haute Joaillerie standard (Ivory White & Champagne Gold)
// ============================================================================

export const megaMenuData = [
  {
    key: 'gifts-for-her',
    label: 'GIFTS FOR HER',
    labelKey: 'common.giftsForHer',
    href: '/fine-jewellery',
    mega: {
      columns: [
        {
          heading: 'High Jewellery',
          links: [
            { label: 'Solitaire & Cocktail Rings', href: '/fine-jewellery?collection=Rings' },
            { label: 'Drop & Stud Earrings', href: '/fine-jewellery?collection=Earrings' },
            { label: 'Statement Pendants & Necklaces', href: '/fine-jewellery?collection=Necklaces' },
            { label: 'Tennis & Sculptural Bracelets', href: '/fine-jewellery?collection=Bracelets' },
            { label: 'Explore All Fine Jewellery', href: '/fine-jewellery', accent: true },
          ],
        },
        {
          heading: 'Rare Ceylon Gemstones',
          links: [
            { label: 'Royal Blue Sapphires', href: '/gemstones?category=blue-sapphires' },
            { label: 'Padparadscha (Sunset Lotus)', href: '/gemstones?category=padparadscha' },
            { label: 'Vivid Pink Sapphires', href: '/gemstones?category=pink-sapphires' },
            { label: 'Pigeon Blood Rubies', href: '/gemstones?category=rubies' },
            { label: 'Canary Yellow Sapphires', href: '/gemstones?category=yellow-sapphires' },
            { label: 'Explore All Rare Gemstones', href: '/gemstones', accent: true },
          ],
        },
        {
          heading: 'The Art of Gifting',
          links: [
            { label: 'Anniversary Heirlooms', href: '/love-and-celebration?moment=anniversary' },
            { label: 'Celebration Milestones', href: '/fine-jewellery?collection=Limited+Edition' },
            { label: 'Personalized Commissions', href: '/bespoke' },
            { label: 'Complimentary Signature Presentation', href: '/our-house' },
          ],
        },
      ],
      feature: {
        title: 'The Art of Gifting',
        subtitle: 'Rare unheated Ceylon sapphires and handcrafted jewellery created to mark life’s most cherished milestones.',
        cta: { label: 'Explore The Collection', href: '/fine-jewellery' },
        accent: 'gold',
      },
    },
  },
  {
    key: 'engagement',
    label: 'ENGAGEMENT',
    labelKey: 'common.engagement',
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
          id: 'gemstone-cuts',
          label: 'GEMSTONE SHAPES',
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
          heading: 'By Silhouette',
          links: [
            { label: 'The Proposal Solitaire', href: '/love-and-celebration?style=solitaire' },
            { label: 'Brilliant Halo Settings', href: '/love-and-celebration?style=halo' },
            { label: 'Three-Stone Trilogy', href: '/love-and-celebration?style=three-stone' },
            { label: 'Cushion & Oval Romance', href: '/love-and-celebration?style=cushion' },
            { label: 'Pear & Fancy Shapes', href: '/love-and-celebration?style=pear' },
          ],
        },
        {
          heading: 'By Rare Hue',
          links: [
            { label: 'Royal Sapphire Rings', href: '/love-and-celebration?stone=blue-sapphire' },
            { label: 'Burma & Ceylon Ruby Rings', href: '/love-and-celebration?stone=ruby' },
            { label: 'Pink & Padparadscha Rings', href: '/love-and-celebration?stone=pink-sapphire' },
            { label: 'Explore All Rings', href: '/love-and-celebration', accent: true },
          ],
        },
        {
          heading: 'Bridal Guidance',
          links: [
            { label: 'Ring Sizing Guide', href: '/love-and-celebration' },
            { label: 'Our Private Room Salon Session', href: '/private-consultations' },
            { label: 'Design Your Custom Ring', href: '/bespoke/enquiry' },
          ],
        },
      ],
      feature: {
        title: 'The Love Collection',
        subtitle: 'Rings for Every Love Story. Handcrafted with rare Ceylon gemstones.',
        cta: { label: 'Explore Engagement', href: '/love-and-celebration' },
        accent: 'rose',
      },
    },
  },
  {
    key: 'made-only-for-you',
    label: 'MADE ONLY FOR YOU',
    labelKey: 'common.madeOnlyForYou',
    href: '/bespoke',
    mega: {
      columns: [
        {
          heading: 'Custom Creation',
          links: [
            { label: 'The 5-Stage Journey', href: '/bespoke/process' },
            { label: 'Begin Custom Commission', href: '/bespoke/enquiry' },
            { label: 'Private Salon Consultation', href: '/private-consultations' },
            { label: 'View Bespoke Portfolio', href: '/bespoke', accent: true },
          ],
        },
        {
          heading: 'Center Stone Sourcing',
          links: [
            { label: 'Unheated Natural Sapphires', href: '/gemstones' },
            { label: 'Padparadscha & Rare Colors', href: '/gemstones?category=padparadscha' },
            { label: 'Ethical Mine-to-Market Custody', href: '/journal/sustainable-luxury-and-ethical-sourcing' },
          ],
        },
        {
          heading: 'Craft & Inspiration',
          links: [
            { label: 'Designing Your Dream Ring', href: '/journal/designing-your-dream-ring' },
            { label: 'The Art of Haute Joaillerie', href: '/journal/the-art-of-bespoke-jewellery' },
            { label: 'Jewellery Care & Preservation', href: '/journal/caring-for-your-sapphires' },
          ],
        },
      ],
      feature: {
        title: 'Vision to Masterpiece',
        subtitle: 'From a loose hand-selected Ceylon gem to an heirloom that transcends generations.',
        cta: { label: 'Start Your Creation', href: '/bespoke/enquiry' },
        accent: 'champagne',
      },
    },
  },
  {
    key: 'our-story',
    label: 'OUR STORY',
    labelKey: 'common.ourStory',
    href: '/our-house',
    mega: {
      columns: [
        {
          heading: 'The Maison',
          links: [
            { label: 'Our Ceylon Heritage', href: '/our-house' },
            { label: 'Ethical Mine Custody', href: '/journal/sustainable-luxury-and-ethical-sourcing' },
            { label: 'Our Private Room — Colombo Salon', href: '/private-consultations' },
            { label: 'Concierge & Inquiries', href: '/contact' },
          ],
        },
        {
          heading: 'The Aviory Journal',
          links: [
            { label: 'The Science of Sapphires', href: '/journal/the-science-of-sapphire' },
            { label: 'The Heritage of Ceylon Gemstones', href: '/journal/the-heritage-of-ceylon-gemstones' },
            { label: 'Designing Your Dream Ring', href: '/journal/designing-your-dream-ring' },
            { label: 'Read All Journal Stories', href: '/journal', accent: true },
          ],
        },
        {
          heading: 'Guarantees & Custody',
          links: [
            { label: 'GRS, GIA & Lotus Certification', href: '/our-house' },
            { label: 'Complimentary Worldwide Delivery', href: '/contact?subject=shipping' },
            { label: 'Lifetime Care & Authenticity', href: '/contact?subject=returns' },
          ],
        },
      ],
      feature: {
        title: 'Two Millennia of Lore',
        subtitle: 'Unheated Ceylon gems sourced directly from historical mines and crafted into timeless works of art.',
        cta: { label: 'Discover Our Story', href: '/our-house' },
        accent: 'gold',
      },
    },
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
