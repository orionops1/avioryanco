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
          heading: 'Ceylon Sapphires',
          links: [
            { label: 'Royal Blue Sapphires', href: '/gemstones?category=blue-sapphires' },
            { label: 'Cornflower Blue Sapphires', href: '/gemstones?category=blue-sapphires' },
            { label: 'Padparadscha Sapphires', href: '/gemstones?category=padparadscha' },
            { label: 'Pink Sapphires', href: '/gemstones?category=pink-sapphires' },
            { label: 'Yellow Sapphires', href: '/gemstones?category=yellow-sapphires' },
            { label: 'Ceylon Rubies', href: '/gemstones?category=rubies' },
            { label: 'Spinel & Other Coloured Gems', href: '/gemstones?category=spinels' },
          ],
        },
        {
          heading: 'Curated Selections',
          links: [
            { label: 'Private Reserve Stones', href: '/gemstones?category=collector' },
            { label: 'Unheated Gemstones', href: '/gemstones' },
            { label: 'Coloured & Rare Stones', href: '/gemstones?category=other' },
            { label: 'View All Gemstones', href: '/gemstones', accent: true },
          ],
        },
        {
          heading: 'The Truth Behind Every Stone',
          links: [
            { label: 'Why Ceylon Gems Are Different', href: '/journal/the-heritage-of-ceylon-gemstones' },
            { label: 'How We Certify Every Gem', href: '/our-house' },
            { label: 'What Makes a Sapphire Rare', href: '/journal/the-science-of-sapphire' },
          ],
        },
      ],
      feature: {
        title: 'Born in Sri Lanka',
        subtitle: 'Natural, unheated gems — untouched by heat, full of colour, exactly as the earth made them.',
        cta: { label: 'Discover Our Gems', href: '/gemstones' },
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
          heading: 'Find Your Piece',
          links: [
            { label: 'Rings', href: '/fine-jewellery?collection=Rings' },
            { label: 'Earrings & Drops', href: '/fine-jewellery?collection=Earrings' },
            { label: 'Necklaces & Pendants', href: '/fine-jewellery?collection=Necklaces' },
            { label: 'Bracelets & Cuffs', href: '/fine-jewellery?collection=Bracelets' },
            { label: 'One-of-a-Kind Pieces', href: '/fine-jewellery?collection=Brooches' },
          ],
        },
        {
          heading: 'Our Signatures',
          links: [
            { label: 'Rare Limited Editions', href: '/fine-jewellery?collection=Limited+Edition' },
            { label: 'Statement Suites', href: '/fine-jewellery?collection=Rings' },
            { label: 'View All Fine Jewellery', href: '/fine-jewellery', accent: true },
          ],
        },
        {
          heading: 'Work With Us',
          links: [
            { label: 'Design Something Personal', href: '/bespoke' },
            { label: 'Book a Private Appointment', href: '/private-consultations' },
            { label: 'How to Care for Your Pieces', href: '/journal/caring-for-your-sapphires' },
          ],
        },
      ],
      feature: {
        title: 'Gold That Remembers You',
        subtitle: 'Handcrafted in 18K gold and platinum with natural Ceylon gems — made to be felt, every day.',
        cta: { label: 'Explore Fine Jewellery', href: '/fine-jewellery' },
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
          label: 'THE VOW COLLECTION',
          items: [
            {
              name: 'The Royal Solitaire',
              desc: 'Platinum-set, unheated Ceylon sapphire — the kind of ring that stops a room.',
              image: '/images/products/ring-sapphire-solitaire.jpg',
              href: '/love-and-celebration?style=solitaire',
            },
            {
              name: 'The Aviory Classic',
              desc: 'Our signature setting — elevated, timeless, made for one stone and one person.',
              image: '/images/products/ring-aviory-setting.jpg',
              href: '/love-and-celebration?style=solitaire',
            },
            {
              name: 'The Lotus Halo',
              desc: 'The rarest hue in nature — a padparadscha sapphire, soft and warm as dawn.',
              image: '/images/products/ring-padparadscha.jpg',
              href: '/love-and-celebration?style=halo',
            },
            {
              name: 'The Three Promises',
              desc: 'Three stones, one for where you have been and two for everything ahead.',
              image: '/images/products/ring-emerald-solitaire.jpg',
              href: '/love-and-celebration?style=three-stone',
            },
            {
              name: 'The Crimson Soleste',
              desc: 'Deep crimson Ceylon ruby — the colour of something you will never forget.',
              image: '/images/products/ring-ruby-soleste.jpg',
              href: '/love-and-celebration?style=halo',
            },
            {
              name: 'Find Your Ring',
              desc: 'A quiet guide for the most important choice you will make together.',
              image: '/images/products/ring-guide.jpg',
              href: '/journal/designing-your-dream-ring',
              guide: true,
            },
          ],
        },
        {
          id: 'gemstone-shapes',
          label: 'CUT & SHAPE',
          items: [
            {
              name: 'Oval Cut',
              desc: 'Longer, softer — the most romantic cut for a Ceylon sapphire.',
              image: '/images/categories/cat1.jpg',
              href: '/love-and-celebration?cut=oval',
            },
            {
              name: 'Cushion Cut',
              desc: 'The cut that holds colour deepest — warm, full, completely alive.',
              image: '/images/categories/cat2.jpg',
              href: '/love-and-celebration?cut=cushion',
            },
            {
              name: 'Emerald Cut',
              desc: 'Clean, clear, architectural — a stone you can see straight through to the heart of.',
              image: '/images/categories/cat3.jpg',
              href: '/love-and-celebration?cut=emerald',
            },
            {
              name: 'Round Brilliant',
              desc: 'The timeless choice — brilliant light, in every direction.',
              image: '/images/categories/cat4.jpg',
              href: '/love-and-celebration?cut=round',
            },
            {
              name: 'Pear Shape',
              desc: 'One point. One drop. Unmistakable from across the room.',
              image: '/images/categories/cat5.jpg',
              href: '/love-and-celebration?cut=pear',
            },
            {
              name: 'Princess Cut',
              desc: 'Sharp corners, modern soul — for the one who knows exactly who she is.',
              image: '/images/categories/cat6.jpg',
              href: '/love-and-celebration?cut=princess',
            },
          ],
        },
        {
          id: 'wedding-bands',
          label: 'BANDS OF DEVOTION',
          items: [
            {
              name: 'The Unbroken Circle',
              desc: 'A ring with no beginning and no end — just colour, all the way around.',
              image: '/images/products/prod7.jpg',
              href: '/love-and-celebration?category=bands',
            },
            {
              name: 'The Warm Pavé Band',
              desc: 'Tiny gems set by hand — a band that catches light from every angle.',
              image: '/images/products/prod8.jpg',
              href: '/love-and-celebration?category=bands',
            },
            {
              name: 'The Platinum Vow',
              desc: 'Simple. Pure. The band that lets the promise speak for itself.',
              image: '/images/products/prod9.jpg',
              href: '/love-and-celebration?category=bands',
            },
            {
              name: 'Made Together',
              desc: 'Two bands designed as one — shaped around both of you, from the beginning.',
              image: '/images/products/prod10.jpg',
              href: '/love-and-celebration?category=bands',
            },
            {
              name: 'The Contoured Band',
              desc: 'Shaped to fit perfectly beside your solitaire, as if they were always meant to meet.',
              image: '/images/products/portf1.jpg',
              href: '/love-and-celebration?category=bands',
            },
            {
              name: 'See All Bands',
              desc: 'The full Aviory band collection — in platinum and gold, for every story.',
              image: '/images/products/portf2.jpg',
              href: '/love-and-celebration?category=bands',
              guide: true,
            },
          ],
        },
        {
          id: 'celebrations',
          label: 'MARK THE MOMENT',
          items: [
            {
              name: 'The Night She Said Yes',
              desc: 'The ring for the question you have been building the courage to ask.',
              image: '/images/most-popular-gifts.jpg',
              href: '/love-and-celebration?style=solitaire',
            },
            {
              name: 'Years Worn Well',
              desc: 'For the years that deepened everything. Mark them in something that lasts.',
              image: '/images/gifts-for-her.jpg',
              href: '/love-and-celebration?moment=anniversary',
            },
            {
              name: 'Something Perfectly Blue',
              desc: 'Ceylon sapphires to wear on the day that changes everything.',
              image: '/images/art-of-gifting.jpg',
              href: '/fine-jewellery',
            },
            {
              name: 'Tell Us Your Story',
              desc: 'Bring us your memory, your feeling, your moment. We will make it real.',
              image: '/images/gifts-to-engrave.jpg',
              href: '/bespoke',
            },
            {
              name: 'The Moments Worth Keeping',
              desc: 'Some achievements deserve more than a dinner. Mark them in certified Ceylon stone.',
              image: '/images/products/portf3.jpg',
              href: '/gemstones?category=collector',
            },
            {
              name: 'For a New Chapter',
              desc: 'For becoming a mother. For starting again. For anything worth celebrating softly.',
              image: '/images/products/portf4.jpg',
              href: '/love-and-celebration?category=bands',
              guide: true,
            },
          ],
        },
        {
          id: 'the-difference',
          label: 'WHY AVIORY',
          items: [
            {
              name: 'Never Touched by Heat',
              desc: 'Every gem is 100% natural — no heat, no treatment, no shortcuts. Certified and documented.',
              image: '/images/categories/cat1.jpg',
              href: '/our-house',
            },
            {
              name: 'Traced from the Earth',
              desc: 'We know where every stone comes from. That story comes with every purchase.',
              image: '/images/journal/ja-003.jpg',
              href: '/journal/sustainable-luxury-and-ethical-sourcing',
            },
            {
              name: 'Independently Certified',
              desc: 'GRS, GIA, and Lotus reports confirm what we promise — wild, unaltered stones.',
              image: '/images/journal/ja-001.jpg',
              href: '/our-house',
            },
            {
              name: 'Made by Hand',
              desc: 'Every piece is hand-forged by master goldsmiths with generations of craft behind them.',
              image: '/images/art-of-gifting.jpg',
              href: '/journal/the-art-of-bespoke-jewellery',
            },
            {
              name: 'One-on-One Creation',
              desc: 'A personal session to design something that could only ever belong to you.',
              image: '/images/gifts-to-engrave.jpg',
              href: '/bespoke',
            },
            {
              name: 'Cared for Forever',
              desc: 'Free annual care, cleaning, and lifetime provenance custody — yours for good.',
              image: '/images/journal/ja-002.jpg',
              href: '/contact?subject=care',
              guide: true,
            },
          ],
        },
      ],
      columns: [
        {
          heading: 'The Feeling',
          links: [
            { label: 'Ask the Question', href: '/love-and-celebration?style=solitaire' },
            { label: 'Halo Rings', href: '/love-and-celebration?style=halo' },
            { label: 'Three-Stone Rings', href: '/love-and-celebration?style=three-stone' },
            { label: 'Contemporary Styles', href: '/love-and-celebration?style=cushion' },
            { label: 'Oval & Timeless Cuts', href: '/love-and-celebration?style=oval' },
            { label: 'Something Unexpected', href: '/love-and-celebration?style=pear' },
          ],
        },
        {
          heading: 'The Stone',
          links: [
            { label: 'Royal Blue Sapphire Rings', href: '/love-and-celebration?stone=blue-sapphire' },
            { label: 'Ruby Rings', href: '/love-and-celebration?stone=ruby' },
            { label: 'Pink & Padparadscha Rings', href: '/love-and-celebration?stone=pink-sapphire' },
            { label: 'See the Full Collection', href: '/love-and-celebration', accent: true },
          ],
        },
        {
          heading: 'Guidance',
          links: [
            { label: 'Find Her Ring Size', href: '/love-and-celebration' },
            { label: 'Stories of Love & Devotion', href: '/love-and-celebration' },
            { label: 'Book a Private Appointment', href: '/private-consultations' },
            { label: 'Design Something Personal', href: '/bespoke/enquiry' },
          ],
        },
      ],
      feature: {
        title: 'The Vow Collection',
        subtitle: 'Rings that hold the weight of the most important moments in your life.',
        cta: { label: 'Explore the Vow Collection', href: '/love-and-celebration' },
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
          heading: 'Start Here',
          links: [
            { label: 'How It Works', href: '/bespoke/process' },
            { label: 'Tell Us What You Have in Mind', href: '/bespoke/enquiry' },
            { label: 'Book a Private Session', href: '/private-consultations' },
            { label: 'See Our Bespoke Work', href: '/bespoke', accent: true },
          ],
        },
        {
          heading: 'Stories & Ideas',
          links: [
            { label: 'How to Design a Ring Together', href: '/journal/designing-your-dream-ring' },
            { label: 'What Bespoke Actually Means', href: '/journal/the-art-of-bespoke-jewellery' },
            { label: 'Where Our Gems Come From', href: '/journal/sustainable-luxury-and-ethical-sourcing' },
          ],
        },
      ],
      feature: {
        title: 'Made Only for You',
        subtitle: 'You bring the feeling. We will find the gem, design the setting, and make it permanent.',
        cta: { label: 'Start Your Story', href: '/bespoke/enquiry' },
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
    { label: 'Fine Jewellery', href: '/fine-jewellery' },
    { label: 'The Vow Collection', href: '/love-and-celebration' },
    { label: 'Private Reserve Gems', href: '/gemstones?category=collector' },
  ],
  service: [
    { label: 'Book a Private Appointment', href: '/private-consultations' },
    { label: 'Shipping & Worldwide Delivery', href: '/contact?subject=shipping' },
    { label: 'Returns & Our Promise to You', href: '/contact?subject=returns' },
    { label: 'Ring Sizing Guide', href: '/love-and-celebration' },
  ],
  company: [
    { label: 'Who We Are', href: '/our-house' },
    { label: 'The Bespoke Process', href: '/bespoke/process' },
    { label: 'The Aviory Journal', href: '/journal' },
    { label: 'How We Source Our Gems', href: '/journal/sustainable-luxury-and-ethical-sourcing' },
  ],
  concierge: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Book a Consultation', href: '/private-consultations' },
    { label: 'Design Something Personal', href: '/bespoke/enquiry' },
  ],
};
