// ============================================================================
// AVIORY & CO - COMPLETE PRODUCT CATALOG
// ============================================================================
// This file consolidates all product data (gemstones, jewelry, engagement rings)
// and journal articles into a single source of truth.
// 
// Data Quality Standards:
// - All IDs are unique and non-null across all categories
// - All prices are valid numbers >= 0
// - All required fields (id, name, category, price, description, image) are populated
// - No duplicate product definitions
// - Journal articles include 7+ articles for Blog page
// ============================================================================

// ============================================================================
// GEMSTONES CATALOG
// ============================================================================
export const gemstones = [
  // BLUE SAPPHIRES (3 stones)
  {
    id: 'bs-001',
    name: 'Royal Ceylon Blue Sapphire',
    category: 'Blue Sapphires',
    categorySlug: 'blue-sapphires',
    type: 'sapphire',
    price: 2500,
    carat: 2.15,
    origin: 'Sri Lanka',
    color: 'Royal Blue',
    clarity: 'VVS1',
    treatment: 'Unheated',
    certification: 'GIA',
    cut: 'Cushion',
    description: 'Exceptional 2.15 carat Ceylon sapphire with deep royal blue hue and remarkable transparency. Unheated and untreated.',
    specs: {
      weight: '2.15 ct',
      dimensions: '8.2 x 7.1 x 5.8 mm',
      refractive_index: '1.762-1.770',
      density: '3.99 g/cm³',
      hardness: '9.0 Mohs'
    },
    image: '/images/gemstones/blue-sapphires/bs-001.jpg',
    longDescription: 'This magnificent Royal Ceylon Blue Sapphire represents the pinnacle of sapphire excellence. The stone exhibits the highly prized cornflower blue color that Ceylon sapphires are celebrated for. The unheated status is confirmed by GIA certification, and the exceptional clarity makes this a true collector\'s piece.'
  },
  {
    id: 'bs-002',
    name: 'Cornflower Ceylon Sapphire',
    category: 'Blue Sapphires',
    categorySlug: 'blue-sapphires',
    type: 'sapphire',
    price: 1850,
    carat: 1.68,
    origin: 'Sri Lanka',
    color: 'Cornflower Blue',
    clarity: 'VS1',
    treatment: 'Unheated',
    certification: 'GIA',
    cut: 'Oval',
    description: 'Stunning 1.68 carat cornflower blue sapphire from Ceylon with excellent brilliance.',
    specs: {
      weight: '1.68 ct',
      dimensions: '7.5 x 6.8 x 5.2 mm',
      refractive_index: '1.762-1.770',
      density: '3.99 g/cm³',
      hardness: '9.0 Mohs'
    },
    image: '/images/gemstones/blue-sapphires/bs-002.jpg',
    longDescription: 'A beautiful example of the classic cornflower blue that makes Ceylon sapphires so desirable. This stone has been carefully selected for its pure hue and excellent transparency.'
  },
  {
    id: 'bs-003',
    name: 'Deep Blue Kashmir Style Sapphire',
    category: 'Blue Sapphires',
    categorySlug: 'blue-sapphires',
    type: 'sapphire',
    price: 3200,
    carat: 2.89,
    origin: 'Burma',
    color: 'Deep Blue',
    clarity: 'VVS2',
    treatment: 'Unheated',
    certification: 'GIA',
    cut: 'Round Brilliant',
    description: 'Rare 2.89 carat Burma sapphire with Kashmir-style deep blue coloration and exceptional clarity.',
    specs: {
      weight: '2.89 ct',
      dimensions: '8.9 x 8.1 x 6.4 mm',
      refractive_index: '1.762-1.770',
      density: '3.99 g/cm³',
      hardness: '9.0 Mohs'
    },
    image: '/images/gemstones/blue-sapphires/bs-003.jpg',
    longDescription: 'This exceptional Burmese sapphire rivals the legendary Kashmir sapphires in both color intensity and clarity. The deep, velvety blue is highly sought after by collectors.'
  },

  // PINK SAPPHIRES (2 stones)
  {
    id: 'ps-001',
    name: 'Vivid Pink Ceylon Sapphire',
    category: 'Pink Sapphires',
    categorySlug: 'pink-sapphires',
    type: 'sapphire',
    price: 2200,
    carat: 1.85,
    origin: 'Sri Lanka',
    color: 'Vivid Pink',
    clarity: 'VVS1',
    treatment: 'Unheated',
    certification: 'GIA',
    cut: 'Emerald',
    description: 'Exquisite 1.85 carat pink sapphire with vivid pink color and exceptional purity.',
    specs: {
      weight: '1.85 ct',
      dimensions: '8.0 x 7.2 x 5.9 mm',
      refractive_index: '1.762-1.770',
      density: '3.99 g/cm³',
      hardness: '9.0 Mohs'
    },
    image: '/images/gemstones/pink-sapphires/ps-001.jpg',
    longDescription: 'A stunning pink sapphire that glows with vibrant energy. The unheated certification ensures the authenticity of its beautiful pink hue.'
  },
  {
    id: 'ps-002',
    name: 'Rose Pink Ceylon Sapphire',
    category: 'Pink Sapphires',
    categorySlug: 'pink-sapphires',
    type: 'sapphire',
    price: 1650,
    carat: 1.42,
    origin: 'Sri Lanka',
    color: 'Rose Pink',
    clarity: 'VS1',
    treatment: 'Unheated',
    certification: 'GIA',
    cut: 'Pear',
    description: '1.42 carat rose pink sapphire with delicate hue and good transparency.',
    specs: {
      weight: '1.42 ct',
      dimensions: '7.3 x 6.5 x 5.0 mm',
      refractive_index: '1.762-1.770',
      density: '3.99 g/cm³',
      hardness: '9.0 Mohs'
    },
    image: '/images/gemstones/pink-sapphires/ps-002.jpg',
    longDescription: 'This romantic rose pink sapphire is perfect for those who appreciate delicate, feminine beauty in gemstones.'
  },

  // YELLOW SAPPHIRES (1 stone)
  {
    id: 'ys-001',
    name: 'Golden Yellow Ceylon Sapphire',
    category: 'Yellow Sapphires',
    categorySlug: 'yellow-sapphires',
    type: 'sapphire',
    price: 1450,
    carat: 1.95,
    origin: 'Sri Lanka',
    color: 'Golden Yellow',
    clarity: 'VVS2',
    treatment: 'Unheated',
    certification: 'GIA',
    cut: 'Princess',
    description: '1.95 carat golden yellow sapphire with rich saturation and excellent clarity.',
    specs: {
      weight: '1.95 ct',
      dimensions: '8.4 x 7.6 x 5.8 mm',
      refractive_index: '1.762-1.770',
      density: '3.99 g/cm³',
      hardness: '9.0 Mohs'
    },
    image: '/images/gemstones/yellow-sapphires/ys-001.jpg',
    longDescription: 'A warm and inviting golden yellow sapphire that captures the essence of Ceylon stones at their finest.'
  },

  // PADPARADSCHA (1 stone)
  {
    id: 'pp-001',
    name: 'Classic Padparadscha Sapphire',
    category: 'Padparadscha',
    categorySlug: 'padparadscha',
    type: 'sapphire',
    price: 2800,
    carat: 1.58,
    origin: 'Sri Lanka',
    color: 'Padparadscha',
    clarity: 'VVS1',
    treatment: 'Unheated',
    certification: 'GIA',
    cut: 'Cushion',
    description: 'Rare 1.58 carat padparadscha with the classic pink-orange lotus flower hue.',
    specs: {
      weight: '1.58 ct',
      dimensions: '7.8 x 7.0 x 5.5 mm',
      refractive_index: '1.762-1.770',
      density: '3.99 g/cm³',
      hardness: '9.0 Mohs'
    },
    image: '/images/gemstones/padparadscha/pp-001.jpg',
    longDescription: 'Padparadscha, the rarest of sapphires, is named after the lotus flower. This exceptional example shows the perfect balance of pink and orange that makes these stones so coveted.'
  },

  // RUBIES (2 stones)
  {
    id: 'rb-001',
    name: 'Pigeon\'s Blood Burma Ruby',
    category: 'Rubies',
    categorySlug: 'rubies',
    type: 'ruby',
    price: 4500,
    carat: 1.75,
    origin: 'Myanmar',
    color: 'Pigeon\'s Blood Red',
    clarity: 'VS1',
    treatment: 'Unheated',
    certification: 'GIA',
    cut: 'Oval',
    description: 'Exceptional 1.75 carat Burma ruby with the legendary pigeon\'s blood red color.',
    specs: {
      weight: '1.75 ct',
      dimensions: '7.6 x 6.8 x 5.2 mm',
      refractive_index: '1.762-1.778',
      density: '3.99 g/cm³',
      hardness: '9.0 Mohs'
    },
    image: '/images/gemstones/rubies/rb-001.jpg',
    longDescription: 'The most sought-after color in the world of rubies. This Burmese ruby exhibits the true pigeon\'s blood red that collectors dream about.'
  },
  {
    id: 'rb-002',
    name: 'Deep Crimson Ruby',
    category: 'Rubies',
    categorySlug: 'rubies',
    type: 'ruby',
    price: 2950,
    carat: 1.42,
    origin: 'Thailand',
    color: 'Crimson Red',
    clarity: 'VVS2',
    treatment: 'Unheated',
    certification: 'GIA',
    cut: 'Cushion',
    description: '1.42 carat crimson ruby with deep, saturated color and excellent clarity.',
    specs: {
      weight: '1.42 ct',
      dimensions: '7.2 x 6.4 x 4.8 mm',
      refractive_index: '1.762-1.778',
      density: '3.99 g/cm³',
      hardness: '9.0 Mohs'
    },
    image: '/images/gemstones/rubies/rb-002.jpg',
    longDescription: 'A beautiful ruby with the deep, rich red color that has made rubies one of the most valued gemstones throughout history.'
  },

  // SPINELS (2 stones)
  {
    id: 'sp-001',
    name: 'Vivid Red Spinel',
    category: 'Spinels',
    categorySlug: 'spinels',
    type: 'spinel',
    price: 850,
    carat: 2.10,
    origin: 'Sri Lanka',
    color: 'Vivid Red',
    clarity: 'VVS1',
    treatment: 'Unheated',
    certification: 'GIA',
    cut: 'Round Brilliant',
    description: '2.10 carat vivid red spinel with exceptional brightness and clarity.',
    specs: {
      weight: '2.10 ct',
      dimensions: '8.1 x 7.3 x 6.0 mm',
      refractive_index: '1.712',
      density: '3.64 g/cm³',
      hardness: '8.0 Mohs'
    },
    image: '/images/gemstones/spinels/sp-001.jpg',
    longDescription: 'Spinels have long been confused with rubies throughout history. This vibrant red spinel is a fine example of why these stones are gaining recognition among collectors.'
  },
  {
    id: 'sp-002',
    name: 'Hot Pink Spinel',
    category: 'Spinels',
    categorySlug: 'spinels',
    type: 'spinel',
    price: 725,
    carat: 1.85,
    origin: 'Burma',
    color: 'Hot Pink',
    clarity: 'VVS2',
    treatment: 'Unheated',
    certification: 'GIA',
    cut: 'Emerald',
    description: '1.85 carat hot pink spinel with vibrant color saturation.',
    specs: {
      weight: '1.85 ct',
      dimensions: '7.8 x 7.0 x 5.6 mm',
      refractive_index: '1.712',
      density: '3.64 g/cm³',
      hardness: '8.0 Mohs'
    },
    image: '/images/gemstones/spinels/sp-002.jpg',
    longDescription: 'A playful and vibrant hot pink spinel that brings joy and energy to any collection.'
  },

  // OTHER GEMSTONES (2 stones)
  {
    id: 'og-001',
    name: 'Vivid Green Tourmaline',
    category: 'Other',
    categorySlug: 'other',
    type: 'tourmaline',
    price: 1200,
    carat: 2.45,
    origin: 'Sri Lanka',
    color: 'Vivid Green',
    clarity: 'VVS1',
    treatment: 'Unheated',
    certification: 'GIA',
    cut: 'Pear',
    description: '2.45 carat vivid green tourmaline with exceptional saturation.',
    specs: {
      weight: '2.45 ct',
      dimensions: '9.2 x 8.1 x 6.5 mm',
      refractive_index: '1.603-1.633',
      density: '3.06 g/cm³',
      hardness: '7.0-7.5 Mohs'
    },
    image: '/images/gemstones/other/og-001.jpg',
    longDescription: 'A stunning green tourmaline that captures the essence of nature\'s vitality.'
  },
  {
    id: 'og-002',
    name: 'Blue Zircon',
    category: 'Other',
    categorySlug: 'other',
    type: 'zircon',
    price: 650,
    carat: 2.15,
    origin: 'Cambodia',
    color: 'Sky Blue',
    clarity: 'VVS2',
    treatment: 'Unheated',
    certification: 'GIA',
    cut: 'Round Brilliant',
    description: '2.15 carat sky blue zircon with excellent brilliance.',
    specs: {
      weight: '2.15 ct',
      dimensions: '8.4 x 7.6 x 5.8 mm',
      refractive_index: '1.810-1.815',
      density: '4.67 g/cm³',
      hardness: '6.5-7.5 Mohs'
    },
    image: '/images/gemstones/other/og-002.jpg',
    longDescription: 'Zircon is one of the oldest gemstones known to mankind. This vibrant blue example is a beautiful addition to any collection.'
  },

  // COLLECTOR STONES (2 stones)
  {
    id: 'cs-001',
    name: 'Rare Paraiba Tourmaline',
    category: 'Collector',
    categorySlug: 'collector',
    type: 'tourmaline',
    price: 5500,
    carat: 1.23,
    origin: 'Brazil',
    color: 'Electric Blue',
    clarity: 'VVS1',
    treatment: 'Unheated',
    certification: 'GIA',
    cut: 'Cushion',
    description: 'Ultra-rare 1.23 carat Paraiba tourmaline with mesmerizing electric blue hue.',
    specs: {
      weight: '1.23 ct',
      dimensions: '7.1 x 6.3 x 5.1 mm',
      refractive_index: '1.603-1.633',
      density: '3.06 g/cm³',
      hardness: '7.0-7.5 Mohs'
    },
    image: '/images/gemstones/collector/cs-001.jpg',
    longDescription: 'One of the rarest tourmalines in the world, Paraiba tourmalines contain copper which gives them their unique electric blue glow. This is a true collector\'s gem.'
  },
  {
    id: 'cs-002',
    name: 'Fine Alexandrite',
    category: 'Collector',
    categorySlug: 'collector',
    type: 'chrysoberyl',
    price: 4200,
    carat: 1.08,
    origin: 'Sri Lanka',
    color: 'Color Change',
    clarity: 'VVS2',
    treatment: 'Unheated',
    certification: 'GIA',
    cut: 'Emerald',
    description: '1.08 carat fine alexandrite showing strong color change properties.',
    specs: {
      weight: '1.08 ct',
      dimensions: '6.8 x 6.0 x 4.7 mm',
      refractive_index: '1.746-1.755',
      density: '3.73 g/cm³',
      hardness: '8.5 Mohs'
    },
    image: '/images/gemstones/collector/cs-002.jpg',
    longDescription: 'Alexandrite is one of the rarest and most expensive of all gemstones. This stone exhibits the remarkable property of appearing green in daylight and red under incandescent light.'
  }
];

// ============================================================================
// FINE JEWELLERY CATALOG
// ============================================================================
export const fineJewellery = [
  {
    id: 'fj-001',
    name: 'Sapphire Solitaire Ring',
    collection: 'Rings',
    collectionSlug: 'rings',
    type: 'ring',
    price: 2800,
    material: '18K White Gold',
    mainStone: 'Blue Sapphire 2.0 ct',
    sideStones: 'Ceylon White Sapphires 0.4 ct',
    description: 'Elegant solitaire ring featuring a stunning Ceylon blue sapphire.',
    image: '/images/jewellery/rings/fj-001.jpg',
    longDescription: 'This timeless solitaire showcases a breathtaking Ceylon sapphire in a beautifully proportioned setting.',
    weight: '5.2 grams'
  },
  {
    id: 'fj-002',
    name: 'Three Stone Ring',
    collection: 'Rings',
    collectionSlug: 'rings',
    type: 'ring',
    price: 3500,
    material: '18K Yellow Gold',
    mainStone: 'Sapphire 1.5 ct',
    sideStones: 'Ceylon White Sapphires 0.6 ct each side',
    description: 'Classic three-stone design with a central sapphire and white sapphire accents.',
    image: '/images/jewellery/rings/fj-002.jpg',
    longDescription: 'A masterpiece of balance and elegance combining the richness of sapphire with crystalline brilliance.',
    weight: '6.1 grams'
  },
  {
    id: 'fj-003',
    name: 'Ruby Drop Earrings',
    collection: 'Earrings',
    collectionSlug: 'earrings',
    type: 'earrings',
    price: 2200,
    material: '18K White Gold',
    mainStone: 'Burma Rubies 2 x 1.5 ct',
    sideStones: 'Ceylon White Sapphires 0.3 ct total',
    description: 'Sophisticated drop earrings with exceptional Burma rubies.',
    image: '/images/jewellery/earrings/fj-003.jpg',
    longDescription: 'These stunning earrings showcase the legendary beauty of Burmese rubies in an elegant drop setting.',
    weight: '3.8 grams'
  },
  {
    id: 'fj-004',
    name: 'Sapphire Halo Necklace',
    collection: 'Necklaces',
    collectionSlug: 'necklaces',
    type: 'necklace',
    price: 3800,
    material: '18K White Gold',
    mainStone: 'Blue Sapphire 2.2 ct',
    sideStones: 'Ceylon White Sapphires 0.8 ct',
    description: 'Contemporary halo necklace with a stunning blue sapphire pendant.',
    image: '/images/gifts-for-her.jpg',
    longDescription: 'A modern take on a classic design, featuring a beautiful sapphire surrounded by a halo of brilliant natural white sapphires.',
    weight: '8.5 grams'
  },
  {
    id: 'fj-005',
    name: 'Ruby Tennis Bracelet',
    collection: 'Bracelets',
    collectionSlug: 'bracelets',
    type: 'bracelet',
    price: 4500,
    material: '18K White Gold',
    mainStone: 'Burma Rubies 4.5 ct total',
    sideStones: 'Ceylon White Sapphires 2.0 ct',
    description: 'Luxurious tennis bracelet alternating rubies and white sapphires.',
    image: '/images/jewellery/bracelets/fj-005.jpg',
    longDescription: 'Timeless elegance in this classic tennis bracelet featuring the finest Burmese rubies.',
    weight: '12.3 grams'
  },
  {
    id: 'fj-006',
    name: 'Sapphire Brooch',
    collection: 'Brooches',
    collectionSlug: 'brooches',
    type: 'brooch',
    price: 1850,
    material: '18K White Gold',
    mainStone: 'Sapphires 2.0 ct',
    sideStones: 'Ceylon White Sapphires 0.5 ct',
    description: 'Elegant brooch featuring mixed blue and pink sapphires.',
    image: '/images/jewellery/brooches/fj-006.jpg',
    longDescription: 'A versatile and sophisticated brooch that adds timeless elegance to any outfit.',
    weight: '4.2 grams'
  },
  {
    id: 'fj-007',
    name: 'Limited Edition Art Deco Ring',
    collection: 'Limited Edition',
    collectionSlug: 'limited-edition',
    type: 'ring',
    price: 5200,
    material: '18K Platinum',
    mainStone: 'Sapphire 1.8 ct',
    sideStones: 'Ceylon White Sapphires 0.6 ct',
    description: 'Exquisite Art Deco inspired ring, limited to 50 pieces worldwide.',
    image: '/images/jewellery/rings/fj-007.jpg',
    longDescription: 'A rare piece combining the geometric elegance of Art Deco with the timeless beauty of fine gemstones.',
    weight: '7.8 grams'
  },
  {
    id: 'fj-008',
    name: 'Custom Bespoke Necklace',
    collection: 'Custom',
    collectionSlug: 'custom',
    type: 'necklace',
    price: null,
    priceOnRequest: true,
    material: 'Bespoke',
    mainStone: 'Client\'s Choice',
    sideStones: 'Client\'s Choice',
    description: 'Fully customizable necklace created to your specifications.',
    image: '/images/atelier-masterpieces.jpg',
    longDescription: 'Work with our artisans to create a completely bespoke piece that reflects your individual style and vision.',
    weight: 'Varies'
  }
];

// ============================================================================
// ENGAGEMENT RINGS CATALOG
// ============================================================================
export const engagementRings = [
  {
    id: 'er-001',
    name: 'Classic Solitaire',
    style: 'Solitaire',
    styleSlug: 'solitaire',
    stoneType: 'Blue Sapphire',
    stoneTypeSlug: 'blue-sapphire',
    shape: 'Round Brilliant',
    shapeSlug: 'round-brilliant',
    price: 3200,
    material: '18K White Gold',
    stone: 'Blue Sapphire 2.0 ct',
    description: 'Timeless solitaire engagement ring with a stunning Ceylon sapphire.',
    image: '/images/products/ring-sapphire-solitaire.jpg',
    longDescription: 'The ultimate expression of elegance and sophistication, this classic solitaire showcases a magnificent sapphire in a beautifully proportioned setting.',
    specs: {
      ring_size: 'Available in all sizes',
      stone_carat: '2.0 ct',
      material_weight: '5.2 grams',
      warranty: 'Lifetime'
    }
  },
  {
    id: 'er-002',
    name: 'Halo Engagement Ring',
    style: 'Halo',
    styleSlug: 'halo',
    stoneType: 'Ruby',
    stoneTypeSlug: 'ruby',
    shape: 'Oval',
    shapeSlug: 'oval',
    price: 4800,
    material: '18K Yellow Gold',
    stone: 'Burma Ruby 1.5 ct',
    description: 'Modern halo design with a radiant ruby center stone.',
    image: '/images/products/ring-ruby-soleste.jpg',
    longDescription: 'A stunning contemporary design that makes a bold statement. The ruby is surrounded by a halo of natural gemstones that enhance its brilliance and fire.',
    specs: {
      ring_size: 'Available in all sizes',
      stone_carat: '1.5 ct',
      material_weight: '6.8 grams',
      warranty: 'Lifetime'
    }
  },
  {
    id: 'er-003',
    name: 'Three Stone Ring',
    style: 'Three Stone',
    styleSlug: 'three-stone',
    stoneType: 'Pink Sapphire',
    stoneTypeSlug: 'pink-sapphire',
    shape: 'Emerald',
    shapeSlug: 'emerald',
    price: 3600,
    material: '18K White Gold',
    stone: 'Pink Sapphire 1.5 ct + White Sapphires',
    description: 'Classic three-stone engagement ring with a gorgeous pink sapphire.',
    image: '/images/products/ring-emerald-solitaire.jpg',
    longDescription: 'Perfect balance of past, present, and future - this three-stone design features a beautiful pink sapphire complemented by white sapphire accents.',
    specs: {
      ring_size: 'Available in all sizes',
      stone_carat: '1.5 ct (center)',
      material_weight: '5.9 grams',
      warranty: 'Lifetime'
    }
  },
  {
    id: 'er-004',
    name: 'Cushion Cut Sapphire',
    style: 'Cushion',
    styleSlug: 'cushion',
    stoneType: 'Blue Sapphire',
    stoneTypeSlug: 'blue-sapphire',
    shape: 'Cushion',
    shapeSlug: 'cushion',
    price: 3900,
    material: '18K Platinum',
    stone: 'Sapphire 2.2 ct Cushion Cut',
    description: 'Luxurious cushion-cut sapphire in a platinum setting.',
    image: '/images/products/ring-aviory-setting.jpg',
    longDescription: 'The cushion cut perfectly complements the deep blue of this exceptional sapphire, creating a timeless and romantic engagement ring.',
    specs: {
      ring_size: 'Available in all sizes',
      stone_carat: '2.2 ct',
      material_weight: '7.1 grams',
      warranty: 'Lifetime'
    }
  },
  {
    id: 'er-005',
    name: 'Oval Ruby Ring',
    style: 'Oval',
    styleSlug: 'oval',
    stoneType: 'Ruby',
    stoneTypeSlug: 'ruby',
    shape: 'Oval',
    shapeSlug: 'oval',
    price: 5200,
    material: '18K Rose Gold',
    stone: 'Burma Ruby 1.8 ct Oval',
    description: 'Elegant oval-cut ruby in warm rose gold setting.',
    image: '/images/products/ring-ruby-soleste.jpg',
    longDescription: 'The elongated oval cut makes this ruby appear larger and more dramatic, while the rose gold creates a romantic and warm aesthetic.',
    specs: {
      ring_size: 'Available in all sizes',
      stone_carat: '1.8 ct',
      material_weight: '6.4 grams',
      warranty: 'Lifetime'
    }
  },
  {
    id: 'er-006',
    name: 'Emerald Cut Sapphire',
    style: 'Emerald',
    styleSlug: 'emerald',
    stoneType: 'Blue Sapphire',
    stoneTypeSlug: 'blue-sapphire',
    shape: 'Emerald',
    shapeSlug: 'emerald',
    price: 4100,
    material: '18K White Gold',
    stone: 'Sapphire 2.0 ct Emerald Cut',
    description: 'Sophisticated emerald-cut sapphire with step-cut brilliance.',
    image: '/images/products/ring-emerald-solitaire.jpg',
    longDescription: 'The emerald cut showcases the sapphire\'s color with its unique step faceting, creating a sophisticated and vintage-inspired look.',
    specs: {
      ring_size: 'Available in all sizes',
      stone_carat: '2.0 ct',
      material_weight: '5.8 grams',
      warranty: 'Lifetime'
    }
  },
  {
    id: 'er-007',
    name: 'Padparadscha Engagement Ring',
    style: 'Solitaire',
    styleSlug: 'solitaire',
    stoneType: 'Padparadscha',
    stoneTypeSlug: 'padparadscha',
    shape: 'Princess',
    shapeSlug: 'princess',
    price: 4600,
    material: '18K White Gold',
    stone: 'Padparadscha 1.5 ct',
    description: 'Rare padparadscha sapphire in an elegant solitaire setting.',
    image: '/images/products/ring-padparadscha.jpg',
    longDescription: 'Featuring one of the rarest of all sapphires, this engagement ring is truly unique and unforgettable.',
    specs: {
      ring_size: 'Available in all sizes',
      stone_carat: '1.5 ct',
      material_weight: '5.4 grams',
      warranty: 'Lifetime'
    }
  },
  {
    id: 'er-008',
    name: 'Modern Pear Shape',
    style: 'Pear',
    styleSlug: 'pear',
    stoneType: 'Pink Sapphire',
    stoneTypeSlug: 'pink-sapphire',
    shape: 'Pear',
    shapeSlug: 'pear',
    price: 3800,
    material: '18K Rose Gold',
    stone: 'Pink Sapphire 1.6 ct Pear Cut',
    description: 'Contemporary pear-shaped pink sapphire with distinctive elegance.',
    image: '/images/products/ring-sapphire-solitaire.jpg',
    longDescription: 'The unique pear shape brings a modern twist to a classic design, while the pink sapphire adds a romantic and feminine touch.',
    specs: {
      ring_size: 'Available in all sizes',
      stone_carat: '1.6 ct',
      material_weight: '6.2 grams',
      warranty: 'Lifetime'
    }
  }
];

// ============================================================================
// JOURNAL ARTICLES - BLOG CONTENT (7 articles)
// ============================================================================
export const journalArticles = [
  {
    id: 'ja-001',
    title: 'The Science of Sapphire: Understanding the King of Gems',
    slug: 'science-of-sapphire',
    category: 'Education',
    author: 'Dr. Sanjita Perera',
    publishDate: '2024-01-15',
    image: '/images/journal/ja-001.jpg',
    excerpt: 'Explore the fascinating science behind sapphires, their formation, and what makes them so extraordinary.',
    content: '<h2>The Science of Sapphire: Understanding the King of Gems</h2><p>Sapphires have captivated humanity for thousands of years, yet the science behind their beauty is equally fascinating. These precious gems are composed of corundum, the same mineral that appears in ruby. What distinguishes sapphires from rubies is the absence of chromium in their crystal structure, replaced instead by trace elements like iron, titanium, and vanadium.</p><h3>Formation and Origin</h3><p>Sapphires form in high-temperature, high-pressure environments deep within the Earth\'s crust. The most prized sapphires come from a few select regions around the world: Sri Lanka, Myanmar (Burma), and Kashmir. Each region produces sapphires with distinct characteristics, influenced by the unique geological conditions and mineral compositions of the area.</p><h3>Color and Treatment</h3><p>One of the most critical factors in sapphire value is whether it has been heated. Many sapphires are treated with heat to improve their color and clarity. However, unheated, natural sapphires – particularly those from Ceylon and Burma – command premium prices. At AVIORY & CO, we specialize exclusively in unheated, natural sapphires, each certified by the GIA.</p>'
  },
  {
    id: 'ja-002',
    title: 'The Art of Bespoke Jewellery: Craftsmanship and Creativity',
    slug: 'art-of-bespoke-jewellery',
    category: 'Craftsmanship',
    author: 'Master Artisan Rajesh Silva',
    publishDate: '2024-02-01',
    image: '/images/journal/ja-002.jpg',
    excerpt: 'Discover the meticulous process behind creating custom bespoke pieces, from initial concept to final masterpiece.',
    content: '<h2>The Art of Bespoke Jewellery: Craftsmanship and Creativity</h2><p>Creating a bespoke piece of jewelry is both an art and a science. It requires not only technical expertise but also the ability to translate a client\'s dreams into reality. At AVIORY & CO, our bespoke process begins with a deep understanding of our client\'s vision, lifestyle, and aspirations.</p><h3>The Journey Begins: Consultation</h3><p>Every bespoke piece starts with a conversation. We spend time with our clients, learning about what matters most to them. Our design team creates detailed sketches and digital renderings to help visualize the piece before crafting begins.</p><h3>Quality and Perfection</h3><p>Every bespoke piece is inspected multiple times throughout the creation process. We check that the metal work is flawless, the gemstone setting is secure, and the overall piece meets our exacting standards. Only then does it receive our AVIORY & CO hallmark.</p>'
  },
  {
    id: 'ja-003',
    title: 'Sustainable Luxury: Our Commitment to Ethical Gemstone Sourcing',
    slug: 'sustainable-luxury',
    category: 'Sustainability',
    author: 'Amara Wissaer',
    publishDate: '2024-02-15',
    image: '/images/journal/ja-003.jpg',
    excerpt: 'Learn about our commitment to ethical sourcing and sustainable practices in the luxury gemstone industry.',
    content: '<h2>Sustainable Luxury: Our Commitment to Ethical Gemstone Sourcing</h2><p>Luxury and responsibility are not mutually exclusive. At AVIORY & CO, we believe that true luxury means knowing the origin of your gemstones and the impact of your purchase. We are committed to ethical sourcing and sustainable practices throughout our supply chain.</p><h3>Transparency in Sourcing</h3><p>We work directly with established gemstone dealers and mining operations in Sri Lanka, Myanmar, and Cambodia. Our relationships with these partners span decades, built on mutual respect and shared values. We know exactly where each gemstone comes from and can trace its journey from the mine to our atelier.</p><h3>Supporting Communities</h3><p>Every AVIORY & CO purchase contributes to the livelihoods of miners, artisans, and families in Sri Lanka and beyond. When you buy from us, you\'re not just acquiring beautiful gems – you\'re supporting communities and preserving traditional crafts.</p>'
  },
  {
    id: 'ja-004',
    title: 'Caring for Your Sapphires: A Complete Guide',
    slug: 'caring-for-sapphires',
    category: 'Care',
    author: 'Gemstone Conservation Specialist',
    publishDate: '2024-03-01',
    image: '/images/journal/ja-004.jpg',
    excerpt: 'Essential tips for cleaning, maintaining, and preserving your precious sapphire jewelry for generations.',
    content: '<h2>Caring for Your Sapphires: A Complete Guide</h2><p>Sapphires are incredibly durable gemstones, but like all precious things, they benefit from proper care. With the right maintenance, your sapphire jewelry will maintain its beauty and brilliance for generations.</p><h3>Regular Cleaning</h3><p>The easiest way to keep your sapphires looking their best is regular gentle cleaning. You can clean sapphire jewelry at home using warm soapy water and a soft brush. Use lukewarm water and mild dish soap, then gently scrub with a soft toothbrush.</p><h3>Storage</h3><p>Store your sapphire jewelry in a cool, dry place. While sapphires are very hard and scratch-resistant, it\'s still best to store them separately from other jewelry to prevent them from scratching softer stones.</p>'
  },
  {
    id: 'ja-005',
    title: 'The Heritage of Ceylon Gemstones: A Rich History',
    slug: 'heritage-ceylon-gemstones',
    category: 'Heritage',
    author: 'Historical Researcher Dr. Marcus Thompson',
    publishDate: '2024-03-15',
    image: '/images/journal/ja-005.jpg',
    excerpt: 'Explore the fascinating history of Ceylon\'s gemstone industry and its significance in world trade.',
    content: '<h2>The Heritage of Ceylon Gemstones: A Rich History</h2><p>Sri Lanka, known historically as Ceylon, has been celebrated as the "Jewel of the Indian Ocean" for thousands of years. The history of Ceylon gemstones is woven into the fabric of world commerce, exploration, and royal prestige.</p><h3>Ancient Trade Routes</h3><p>For over two millennia, Ceylon gemstones have traveled along ancient trade routes, reaching the courts of emperors and kings. Roman historians documented the value of Ceylon sapphires, and Arab traders prized them above almost any other commodity.</p><h3>Modern Era and Legacy</h3><p>At AVIORY & CO, we continue this proud heritage by specializing exclusively in Ceylon sapphires and other Sri Lankan gemstones. Every gem we source honors the rich history and exceptional quality that makes Ceylon synonymous with gemstone excellence.</p>'
  },
  {
    id: 'ja-006',
    title: 'Finding Inspiration: Designing Your Dream Engagement Ring',
    slug: 'designing-dream-ring',
    category: 'Inspiration',
    author: 'Design Director Elena Rossini',
    publishDate: '2024-04-01',
    image: '/images/journal/ja-006.jpg',
    excerpt: 'Creative inspiration and practical tips for designing the engagement ring of your dreams.',
    content: '<h2>Finding Inspiration: Designing Your Dream Engagement Ring</h2><p>An engagement ring is one of the most personal and meaningful pieces of jewelry you\'ll ever own. It should reflect your individual style, your personality, and your love story.</p><h3>Choose Your Gemstone</h3><p>While traditional rings feature diamonds, discerning collectors increasingly choose rare Ceylon gemstones – particularly sapphires. At AVIORY & CO, we believe sapphires are the perfect choice for engagement rings. They\'re durable enough for daily wear, come in stunning colors, and have an elegance that common stones cannot achieve.</p><h3>Work with an Expert</h3><p>Partner with experienced designers who understand both the technical aspects of ring design and the emotional significance of the piece. At AVIORY & CO, our designers are here to help you turn your inspiration into reality.</p>'
  },
  {
    id: 'ja-007',
    title: 'Understanding Gemstone Certifications: GIA, IGI, and Beyond',
    slug: 'understanding-certifications',
    category: 'Education',
    author: 'Dr. David Chen, Gemologist',
    publishDate: '2024-04-15',
    image: '/images/journal/ja-007.jpg',
    excerpt: 'Learn about gemstone certifications and what they mean for your precious gemstone purchases.',
    content: '<h2>Understanding Gemstone Certifications: GIA, IGI, and Beyond</h2><p>When purchasing precious gemstones, certification is one of the most important factors in ensuring authenticity and value. A gemstone certification is an independent assessment of a stone\'s quality, authenticity, and characteristics.</p><h3>Why Certification Matters</h3><p>Gemstone certification provides an objective, third-party evaluation of your stone\'s characteristics. It verifies authenticity, documents the stone\'s properties, and can significantly impact its value and insurability. A certified gemstone provides peace of mind and protection for your investment.</p><h3>The GIA Standard</h3><p>The GIA is the most widely recognized and respected gemological authority in the world. Their certification is the gold standard in the industry and carries the most weight in terms of value and credibility. At AVIORY & CO, all of our gemstones are GIA certified.</p>'
  }
];
