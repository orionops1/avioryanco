// ============================================================================
// AVIORY & CO. - BRAND NAVIGATION CONFIGURATION
// Direction: Expressions · Bespoke · Our House · Journal
// Emotion before commerce — VOW · TOUCH · WONDER · WHISPER
// ============================================================================

export const megaMenuData = [
  {
    key: 'expressions',
    label: 'EXPRESSIONS',
    labelKey: 'common.expressions',
    href: '/love-and-celebration',
    mega: {
      columns: [
        {
          heading: 'Four Expressions of Intimacy',
          links: [
            { label: 'Vow — A Promise Kept', href: '/love-and-celebration' },
            { label: 'Touch — A Touch Remembered', href: '/fine-jewellery' },
            { label: 'Wonder — A Look That Lingers', href: '/gemstones' },
            { label: 'Whisper — A Secret Shared', href: '/bespoke' },
          ],
        },
        {
          heading: 'Bespoke Intimacy',
          links: [
            { label: 'The Heartbeat Gem™: Hidden Against Her Pulse', href: '/bespoke' },
            { label: 'Solitary Creations', href: '/love-and-celebration' },
            { label: 'Private Commissions', href: '/bespoke/enquiry' },
            { label: 'Explore All Expressions', href: '/love-and-celebration', accent: true },
          ],
        },
      ],
      cards: [
        {
          name: 'VOW',
          subtitle: 'A promise kept.',
          image: '/images/expressions/vow.jpg',
          href: '/love-and-celebration',
        },
        {
          name: 'TOUCH',
          subtitle: 'A touch remembered.',
          image: '/images/expressions/touch.jpg',
          href: '/fine-jewellery',
        },
        {
          name: 'WONDER',
          subtitle: 'A look that lingers.',
          image: '/images/expressions/wonder.jpg',
          href: '/gemstones',
        },
        {
          name: 'WHISPER',
          subtitle: 'A secret shared.',
          image: '/images/expressions/whisper.jpg',
          href: '/bespoke',
        },
      ],
      feature: {
        title: 'The Architecture of Devotion',
        subtitle: 'Love has its own language: a promise kept, a touch remembered, a look that lingers, a secret shared.',
        cta: { label: 'Discover Aviory', href: '/love-and-celebration' },
        accent: 'champagne',
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
            { label: 'Your Story', href: '/bespoke' },
            { label: 'The Bespoke Experience', href: '/bespoke/process' },
            { label: 'Begin a Private Commission', href: '/bespoke/enquiry', accent: true },
          ],
        },
        {
          heading: 'Private Devotion',
          links: [
            { label: 'The Secret Inner Band', href: '/journal/the-secret-inner-band' },
            { label: 'Reserve an Atelier Suite', href: '/private-consultations' },
            { label: 'Confidential Virtual Salon', href: '/private-consultations' },
          ],
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
    label: 'OUR HOUSE',
    labelKey: 'common.ourHouse',
    href: '/our-house',
    mega: {
      columns: [
        {
          heading: 'The Maison',
          links: [
            { label: 'The Aviory Story', href: '/our-house' },
            { label: 'Our Philosophy', href: '/our-house' },
            { label: 'Contact & Atelier Appointments', href: '/contact' },
          ],
        },
        {
          heading: 'Discretion & Heritage',
          links: [
            { label: 'A House Built Around Feeling', href: '/our-house' },
            { label: 'Wild Earth Provenance', href: '/journal/sustainable-luxury-and-ethical-sourcing' },
            { label: 'Private Salons Worldwide', href: '/private-consultations' },
          ],
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
            { label: 'The Beauty of Being Desired', href: '/journal/candlelight-and-gold' },
            { label: 'All Dispatches & Stories', href: '/journal', accent: true },
          ],
        },
        {
          heading: 'Inspiration',
          links: [
            { label: 'Candlelight & Devotion', href: '/journal/candlelight-and-gold' },
            { label: 'Untouched by Fire', href: '/journal/unheated-ceylon-sapphires' },
            { label: 'The Secret Inner Covenant', href: '/journal/the-secret-inner-band' },
          ],
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
    { label: 'Vow', href: '/love-and-celebration' },
    { label: 'Touch', href: '/fine-jewellery' },
    { label: 'Wonder', href: '/gemstones' },
    { label: 'Whisper', href: '/bespoke' },
  ],
  house: [
    { label: 'Our Story', href: '/our-house' },
    { label: 'Bespoke', href: '/bespoke' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
  ],
  assistance: [
    { label: 'Private Enquiries', href: '/contact?subject=enquiry' },
    { label: 'Delivery & Care', href: '/contact?subject=care' },
    { label: 'Returns', href: '/contact?subject=returns' },
    { label: 'Frequently Asked Questions', href: '/contact?subject=faq' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/avioryco' },
    { label: 'Pinterest', href: 'https://pinterest.com/avioryco' },
    { label: 'Facebook', href: 'https://facebook.com/avioryco' },
    { label: 'YouTube', href: 'https://youtube.com/@avioryco' },
  ],
};
