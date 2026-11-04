// ============================================================================
// AVIORY & CO. - NAVIGATION CONFIGURATION
// Centralized navigation structure for Header mega-menu and Footer links
// Inspired by Tiffany & Co. haute joaillerie architecture adapted for Aviory & Co.
// Palette: Soft Ivory (#FBF9F6), Deep Charcoal (#161616), Champagne Gold (#C5A059)
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
          heading: 'By Piece',
          links: [
            { label: 'Necklaces & Pendants', href: '/fine-jewellery?collection=Necklaces' },
            { label: 'Earrings & Studs', href: '/fine-jewellery?collection=Earrings' },
            { label: 'Bracelets', href: '/fine-jewellery?collection=Bracelets' },
            { label: 'Signature Rings', href: '/fine-jewellery?collection=Rings' },
          ],
        },
        {
          heading: 'By Moment',
          links: [
            { label: 'Anniversaries & Milestones', href: '/love-and-celebration?moment=anniversary' },
            { label: 'The Bridal Gift', href: '/love-and-celebration' },
            { label: 'A Promise to Yourself', href: '/fine-jewellery' },
            { label: 'Gifts Under $1,500', href: '/fine-jewellery' },
          ],
        },
        {
          heading: 'Signature Lines',
          links: [
            { label: 'The Ceylon Blue Line', href: '/gemstones?category=blue-sapphires' },
            { label: 'The Soft Gold Collection', href: '/fine-jewellery' },
            { label: 'New Creations', href: '/fine-jewellery?collection=Limited+Edition' },
            { label: 'Signature Classics', href: '/fine-jewellery' },
          ],
        },
      ],
      spotlight: {
        image: '/images/gifts-for-her.jpg',
        imageAlt: 'Sapphire pendant resting against skin under warm daylight',
        quote: 'Pieces made to stay against her skin.',
        cta: {
          label: 'Explore Gifts For Her',
          href: '/fine-jewellery',
        },
      },
    },
  },
  {
    key: 'love-and-celebration',
    label: 'LOVE & CELEBRATION',
    labelKey: 'common.loveAndCelebration',
    href: '/love-and-celebration',
    mega: {
      columns: [
        {
          heading: 'The Proposal',
          links: [
            { label: 'Solitaire Rings', href: '/love-and-celebration?style=solitaire' },
            { label: 'Ceylon Sapphire Engagement Rings', href: '/love-and-celebration?stone=blue-sapphire' },
            { label: 'Three-Stone Rings', href: '/love-and-celebration?style=three-stone' },
            { label: 'Halo & Accent Designs', href: '/love-and-celebration?style=halo' },
          ],
        },
        {
          heading: 'The Vows & Secrets',
          links: [
            { label: "Women's Wedding Bands", href: '/love-and-celebration?category=bands' },
            { label: "Men's Wedding Bands", href: '/love-and-celebration?category=bands' },
            { label: 'The Secret Touch (Hidden Gem Bands)', href: '/bespoke' },
            { label: "Matching Couples' Bands", href: '/love-and-celebration?category=bands' },
          ],
        },
        {
          heading: 'Diamond & Sapphire Guides',
          links: [
            { label: 'How to Choose Her Engagement Ring', href: '/journal/designing-your-dream-ring' },
            { label: 'Discover Her Ring Size', href: '/love-and-celebration' },
            { label: 'Book Session with a Sapphire Expert', href: '/private-consultations' },
            { label: 'Explore Past Proposal Designs', href: '/love-and-celebration' },
          ],
        },
      ],
      spotlight: {
        image: '/images/most-popular-gifts.jpg',
        imageAlt: 'Warm close-up of interlocked fingers with a glowing sapphire ring',
        quote: 'Where the Vow Lives.',
        cta: {
          label: 'Explore Engagement Rings',
          href: '/love-and-celebration',
        },
      },
    },
  },
  {
    key: 'natural-gemstones',
    label: 'NATURAL GEMSTONES',
    labelKey: 'common.naturalGemstones',
    href: '/gemstones',
    mega: {
      columns: [
        {
          heading: 'Ceylon Sapphires',
          links: [
            { label: 'Royal Blue Sapphires', href: '/gemstones?category=blue-sapphires' },
            { label: 'Pink & Padparadscha', href: '/gemstones?category=padparadscha' },
            { label: 'Golden & Yellow Sapphires', href: '/gemstones?category=yellow-sapphires' },
            { label: 'Teal & Rare Tones', href: '/gemstones?category=other' },
          ],
        },
        {
          heading: 'Earth & Distinction',
          links: [
            { label: 'Unheated Natural Stones', href: '/gemstones' },
            { label: 'Master Collector Cut Gems', href: '/gemstones?category=collector' },
            { label: 'Loose Stones for Custom Rings', href: '/gemstones' },
            { label: 'Pair a Gem With a Custom Band', href: '/bespoke' },
          ],
        },
        {
          heading: 'Trust & Heritage',
          links: [
            { label: 'Our Sri Lankan Gem Heritage', href: '/journal/the-heritage-of-ceylon-gemstones' },
            { label: 'Ethical Mine-to-Hand Sourcing', href: '/journal/sustainable-luxury-and-ethical-sourcing' },
            { label: 'Unheated Gemstone Certification', href: '/our-house' },
            { label: 'Sourcing Enquiries', href: '/contact' },
          ],
        },
      ],
      spotlight: {
        image: '/images/categories/cat1.jpg',
        imageAlt: 'Macro photo of an unheated blue sapphire resting on soft ivory linen',
        quote: 'Untouched by heat. Wild and real.',
        cta: {
          label: 'Explore Available Gems',
          href: '/gemstones',
        },
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
          heading: 'The Custom Journey',
          links: [
            { label: 'How the Journey Works', href: '/bespoke/process' },
            { label: 'Choose Your Gemstone', href: '/gemstones' },
            { label: 'Design Your Setting', href: '/bespoke/enquiry' },
            { label: 'View Past Commissions', href: '/bespoke' },
          ],
        },
        {
          heading: 'Atelier Experience',
          links: [
            { label: 'Reserve an Atelier Session', href: '/private-consultations' },
            { label: 'Meet Our Master Goldsmiths', href: '/our-house' },
            { label: 'Private Salon Experience', href: '/private-consultations' },
            { label: 'Virtual Custom Consultation', href: '/private-consultations' },
          ],
        },
        {
          heading: 'Signature Touches',
          links: [
            { label: 'The Secret Touch Element', href: '/bespoke' },
            { label: 'Custom Engravings & Touch', href: '/bespoke' },
            { label: 'Remodeling & Family Heirlooms', href: '/bespoke' },
            { label: 'Care & Warranty', href: '/journal/caring-for-your-sapphires' },
          ],
        },
      ],
      spotlight: {
        image: '/images/gifts-to-engrave.jpg',
        imageAlt: 'Atmospheric shot of tea, sketchbook, and raw gems on a warm studio table',
        quote: 'Tell us your story. We will turn it into gold.',
        cta: {
          label: 'Start Your Story',
          href: '/bespoke/enquiry',
        },
      },
    },
  },
  {
    key: 'world-of-aviory',
    label: 'WORLD OF AVIORY',
    labelKey: 'common.worldOfAviory',
    href: '/our-house',
    mega: {
      columns: [
        {
          heading: 'Our House',
          links: [
            { label: 'The Aviory Philosophy', href: '/our-house' },
            { label: 'Our Colombo Atelier', href: '/our-house' },
            { label: 'Master Craftsmanship', href: '/journal/the-art-of-bespoke-jewellery' },
            { label: 'Contact Us', href: '/contact' },
          ],
        },
        {
          heading: 'Our Roots',
          links: [
            { label: 'Sri Lankan Gem Heritage', href: '/journal/the-heritage-of-ceylon-gemstones' },
            { label: 'The Unheated Sapphire Standard', href: '/journal/the-science-of-sapphire' },
            { label: 'Sustainable Sourcing Stories', href: '/journal/sustainable-luxury-and-ethical-sourcing' },
            { label: 'Visit Our Space', href: '/our-house' },
          ],
        },
        {
          heading: 'The Journal',
          links: [
            { label: 'Notes on Fine Jewelry', href: '/journal' },
            { label: 'Behind the Scenes', href: '/journal' },
            { label: 'Press & Editorial', href: '/journal' },
            { label: 'Private Salon Enquiries', href: '/private-consultations' },
          ],
        },
      ],
      spotlight: {
        image: '/images/art-of-gifting.jpg',
        imageAlt: 'Warm photo of a goldsmith shaping metal by hand',
        quote: 'Pulled from the earth. Crafted for her hand.',
        cta: {
          label: 'Read Our Story',
          href: '/our-house',
        },
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
