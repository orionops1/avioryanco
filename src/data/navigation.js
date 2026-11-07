// ============================================================================
// AVIORY & CO. - BRAND NAVIGATION CONFIGURATION
// Direction: Jewellery · Engagement · Gemstones · Bespoke · The House · Journal
// Luxury commercial clarity infused with deep emotional storytelling
// ============================================================================

export const megaMenuData = [
  {
    key: 'jewellery',
    label: 'JEWELLERY',
    labelKey: 'common.fineJewellery',
    href: '/fine-jewellery',
    mega: {
      columns: [
        {
          heading: 'High Jewellery Repertoire',
          links: [
            { label: 'All Fine Jewellery', href: '/fine-jewellery' },
            { label: 'Rings of Devotion', href: '/fine-jewellery?type=ring' },
            { label: 'Necklaces & Pendants', href: '/fine-jewellery?type=necklace' },
            { label: 'Earrings & Drops', href: '/fine-jewellery?type=earrings' },
            { label: 'Cuffs & Bracelets', href: '/fine-jewellery?type=bracelet' },
            { label: 'Haute Joaillerie Masterpieces', href: '/fine-jewellery?collection=masterpiece', accent: true },
          ],
        },
        {
          heading: 'Aesthetic Discovery',
          links: [
            { label: 'The Colour Edit', href: '/the-colour-edit' },
            { label: 'Love & Celebration Suites', href: '/love-and-celebration' },
            { label: 'Things Worth Keeping Close', href: '/#things-worth-keeping-close' },
            { label: 'Private Atelier Appointments', href: '/private-consultations', accent: true },
          ],
        },
      ],
      cards: [
        {
          name: 'TOUCH',
          subtitle: 'A touch remembered.',
          image: '/images/expressions/touch.jpg',
          href: '/fine-jewellery',
        },
        {
          name: 'THE COLOUR EDIT',
          subtitle: 'A world of singular colour.',
          image: '/images/the-depth-of-blue.jpg',
          href: '/the-colour-edit',
        },
      ],
      feature: {
        title: 'Beauty That Becomes Part of You',
        subtitle: 'Each creation is sculpted around singular stones and warm precious metals — designed to be worn against bare skin and remembered forever.',
        cta: { label: 'Explore Fine Jewellery', href: '/fine-jewellery' },
        accent: 'champagne',
      },
    },
  },

  {
    key: 'engagement',
    label: 'ENGAGEMENT',
    labelKey: 'common.theProposal',
    href: '/the-proposal',
    mega: {
      columns: [
        {
          heading: 'The Proposal Experience',
          links: [
            { label: '01 — Find the Feeling', href: '/the-proposal#find-the-feeling' },
            { label: '02 — Make It Yours', href: '/the-proposal#make-it-yours' },
            { label: '03 — Keep the Surprise', href: '/the-proposal#keep-the-surprise' },
            { label: '04 — The Moment After Yes', href: '/the-proposal#moment-after-yes' },
          ],
        },
        {
          heading: 'Curated Rings of Devotion',
          links: [
            { label: 'Solitaire Engagement Rings', href: '/the-proposal#curated-rings' },
            { label: 'Three-Stone Emotional Suites', href: '/love-and-celebration' },
            { label: 'The Secret Inner Band', href: '/bespoke' },
            { label: 'Plan Your Proposal With Us', href: '/private-consultations', accent: true },
          ],
        },
      ],
      cards: [
        {
          name: 'THE QUESTION',
          subtitle: 'Make the moment yours.',
          image: '/images/proposal/proposal_moment.jpg',
          href: '/the-proposal',
        },
        {
          name: 'VOW',
          subtitle: 'A promise kept.',
          image: '/images/expressions/vow.jpg',
          href: '/love-and-celebration',
        },
      ],
      feature: {
        title: 'Make the Moment Yours',
        subtitle: 'For the question you have been carrying, and the life you hope to begin together.',
        cta: { label: 'Begin Your Proposal', href: '/the-proposal' },
        accent: 'champagne',
      },
    },
  },

  {
    key: 'gemstones',
    label: 'GEMSTONES',
    labelKey: 'common.gemstones',
    href: '/gemstones',
    mega: {
      columns: [
        {
          heading: 'Singular Natural Stones',
          links: [
            { label: 'Royal Blue Ceylon Sapphires', href: '/gemstones?category=blue-sapphires' },
            { label: 'Cornflower Blue Sapphires', href: '/gemstones?category=blue-sapphires' },
            { label: 'Padparadscha (Sunset Lotus)', href: '/gemstones?category=padparadscha' },
            { label: 'Pink & Magenta Sapphires', href: '/gemstones?category=pink-sapphires' },
            { label: 'Yellow & Golden Sapphires', href: '/gemstones?category=yellow-sapphires' },
            { label: 'Rare Pigeon Red Spinels & Rubies', href: '/gemstones?category=spinel' },
          ],
        },
        {
          heading: 'Earth Custody & Integrity',
          links: [
            { label: '100% Natural & Unheated Verification', href: '/gemstone-disclosure' },
            { label: 'Direct Ceylon Earth Custody', href: '/our-house' },
            { label: 'GIA & GRS Certified Dossiers', href: '/gemstone-disclosure' },
            { label: 'View All Gemstones', href: '/gemstones', accent: true },
          ],
        },
      ],
      cards: [
        {
          name: 'WONDER',
          subtitle: 'A look that lingers.',
          image: '/images/expressions/wonder.jpg',
          href: '/gemstones',
        },
        {
          name: 'PADPARADSCHA',
          subtitle: 'Between rose and sunset.',
          image: '/images/between-rose-and-sunset.jpg',
          href: '/the-colour-edit?color=padparadscha',
        },
      ],
      feature: {
        title: 'Singular Stones From Wild Earth',
        subtitle: 'Completely unheated Ceylon sapphires whose mesmerising depth was forged entirely by nature millions of years ago.',
        cta: { label: 'Explore Rare Gemstones', href: '/gemstones' },
        accent: 'sapphire',
      },
    },
  },

  {
    key: 'bespoke',
    label: 'BESPOKE',
    labelKey: 'common.bespoke',
    href: '/bespoke',
    mega: {
      columns: [
        {
          heading: 'The Intimate Journey',
          links: [
            { label: 'Your Story Begins Here', href: '/bespoke' },
            { label: 'The 5-Stage Bespoke Experience', href: '/bespoke/process' },
            { label: 'Begin a Private Commission', href: '/bespoke/enquiry', accent: true },
          ],
        },
        {
          heading: 'Private Devotion',
          links: [
            { label: 'The Heartbeat Gem™: Hidden Against Her Pulse', href: '/bespoke' },
            { label: 'The Secret Inner Band Covenant', href: '/journal/the-secret-inner-band' },
            { label: 'Reserve an Atelier Suite', href: '/private-consultations' },
            { label: 'Confidential Virtual Salon', href: '/private-consultations' },
          ],
        },
      ],
      cards: [
        {
          name: 'WHISPER',
          subtitle: 'A secret shared.',
          image: '/images/expressions/whisper.jpg',
          href: '/bespoke',
        },
        {
          name: 'HEARTBEAT GEM™',
          subtitle: 'Hidden against her pulse.',
          image: '/images/expressions/bespoke_hands.jpg',
          href: '/bespoke',
        },
      ],
      feature: {
        title: 'Begin With a Feeling',
        subtitle: 'Tell us who it is for, what you want them to feel, or the moment you want to remember. Together, we will create something that could belong to no one else.',
        cta: { label: 'Begin Your Story', href: '/bespoke/enquiry' },
        accent: 'champagne',
      },
    },
  },

  {
    key: 'our-house',
    label: 'THE HOUSE',
    labelKey: 'common.ourHouse',
    href: '/our-house',
    mega: {
      columns: [
        {
          heading: 'The Maison',
          links: [
            { label: 'The Aviory Story', href: '/our-house' },
            { label: 'Our Philosophy of Devotion', href: '/our-house' },
            { label: 'The Colombo Flagship Suite', href: '/private-consultations' },
            { label: 'Direct Gemologist Concierge', href: '/contact' },
          ],
        },
        {
          heading: 'Heritage & Integrity',
          links: [
            { label: 'Wild Earth Provenance', href: '/journal/sustainable-luxury-and-ethical-sourcing' },
            { label: 'Gemstone Disclosure Standards', href: '/gemstone-disclosure' },
            { label: 'Shipping & Armoured Custody', href: '/shipping-and-delivery' },
            { label: 'Private Salons Worldwide', href: '/private-consultations', accent: true },
          ],
        },
      ],
      cards: [
        {
          name: 'OUR HOUSE',
          subtitle: 'Built around feeling.',
          image: '/images/expressions/our_house_portrait.jpg',
          href: '/our-house',
        },
        {
          name: 'THE ATELIER',
          subtitle: 'Master lapidaries of Ceylon.',
          image: '/images/expressions/gem_cutting.jpg',
          href: '/our-house',
        },
      ],
      feature: {
        title: 'Built Around Feeling',
        subtitle: 'Some things are chosen for how they look. Others are chosen for what they mean. Aviory exists for the latter.',
        cta: { label: 'Get to Know Aviory', href: '/our-house' },
        accent: 'platinum',
      },
    },
  },

  {
    key: 'journal',
    label: 'JOURNAL',
    labelKey: 'common.journal',
    href: '/journal',
    mega: {
      columns: [
        {
          heading: 'The Intimate Edit',
          links: [
            { label: 'The Language of Touch', href: '/journal/the-secret-inner-band' },
            { label: 'Candlelight & Gold: The Beauty of Being Desired', href: '/journal/candlelight-and-gold' },
            { label: 'All Dispatches & Stories', href: '/journal', accent: true },
          ],
        },
        {
          heading: 'Craft & Provenance',
          links: [
            { label: 'Untouched by Fire: Unheated Ceylon Sapphires', href: '/journal/unheated-ceylon-sapphires' },
            { label: 'Direct Earth Custody & Ethical Sourcing', href: '/journal/sustainable-luxury-and-ethical-sourcing' },
            { label: 'The Secret Inner Covenant', href: '/journal/the-secret-inner-band' },
          ],
        },
      ],
      cards: [
        {
          name: 'CANDLELIGHT',
          subtitle: 'A warm golden glow.',
          image: '/images/candlelight-and-gold.jpg',
          href: '/journal/candlelight-and-gold',
        },
        {
          name: 'UNTOUCHED BY FIRE',
          subtitle: 'Natural unheated sapphires.',
          image: '/images/unheated-ceylon-sapphires.jpg',
          href: '/journal/unheated-ceylon-sapphires',
        },
      ],
      feature: {
        title: 'The Intimate Edit',
        subtitle: 'Notes on desire, devotion, attraction and the art of making a moment matter.',
        cta: { label: 'Read The Journal', href: '/journal' },
        accent: 'sapphire',
      },
    },
  },
];

export const footerLinks = {
  expressions: [
    { label: 'Fine Jewellery', href: '/fine-jewellery' },
    { label: 'Engagement & The Proposal', href: '/the-proposal' },
    { label: 'Rare Ceylon Gemstones', href: '/gemstones' },
    { label: 'Bespoke Atelier', href: '/bespoke' },
    { label: 'The Colour Edit', href: '/the-colour-edit' },
  ],
  destinations: [
    { label: 'High Jewellery Repertoire', href: '/fine-jewellery' },
    { label: 'The Heartbeat Gem™', href: '/bespoke' },
    { label: 'The Proposal Experience', href: '/the-proposal' },
    { label: 'Private Commissions', href: '/bespoke/enquiry' },
    { label: 'Atelier Suites (Colombo)', href: '/private-consultations' },
  ],
  house: [
    { label: 'The Maison Story', href: '/our-house' },
    { label: 'Our Philosophy of Devotion', href: '/our-house' },
    { label: 'The Intimate Edit', href: '/journal' },
    { label: 'Gemstone Disclosure & Provenance', href: '/gemstone-disclosure' },
    { label: 'Private Appointments', href: '/private-consultations' },
  ],
  assistance: [
    { label: 'Armoured Shipping & Delivery', href: '/shipping-and-delivery' },
    { label: '14-Day Returns & Inspection', href: '/returns-and-refunds' },
    { label: 'Jewellery Care & Cleaning', href: '/jewellery-care' },
    { label: 'Client Privacy & Discretion', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Concierge Direct Inquiry', href: '/contact' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/avioryco' },
    { label: 'Pinterest', href: 'https://pinterest.com/avioryco' },
    { label: 'Facebook', href: 'https://facebook.com/avioryco' },
    { label: 'YouTube', href: 'https://youtube.com/@avioryco' },
  ],
};
