/**
 * Tiffany & Co - Love & Engagement Menu Structure
 * Extracted from: https://www.tiffany.com/love-engagement.html
 * 
 * MENU HIERARCHY:
 * Primary Navigation:
 *   LOVE & CELEBRATION (parent)
 *     ├─ ENGAGEMENT RINGS (sub-nav)
 *     ├─ GEMSTONE SHAPES (sub-nav)
 *     ├─ WEDDING BANDS (sub-nav)
 *     ├─ CELEBRATION (sub-nav)
 *     └─ The Tiffany Difference (info)
 */

export const tiffanyLoveEngagementMenu = {
  primaryNav: [
    "HOLIDAY GIFTS",
    "JEWELRY",
    "HIGH JEWELRY",
    "LOVE & CELEBRATION",
    "WATCHES",
    "HOME",
    "ACCESSORIES",
    "World of Tiffany"
  ],

  // Sub-navigation under "LOVE & CELEBRATION"
  loveAndCelebrationTabs: [
    {
      label: "ENGAGEMENT RINGS",
      slug: "engagement-rings",
      active: false,
      collections: [
        {
          name: "Sixteen Stone by Tiffany",
          image: "engagement-ring-1.jpg",
          description: "Classic solitaire with signature stone setting"
        },
        {
          name: "The Tiffany® Setting",
          image: "engagement-ring-2.jpg",
          description: "Iconic raised setting showcasing the rare gemstone"
        },
        {
          name: "Tiffany True®",
          image: "engagement-ring-3.jpg",
          description: "Tiffany's proprietary gemstone cut"
        },
        {
          name: "Tiffany Forever",
          image: "engagement-ring-4.jpg",
          description: "Timeless engagement ring designs"
        },
        {
          name: "Tiffany Soleste®",
          image: "engagement-ring-5.jpg",
          description: "Halo setting with surrounding gemstones"
        },
        {
          name: "How to Choose an Engagement Ring",
          image: "engagement-ring-guide.jpg",
          description: "Educational guide"
        }
      ]
    },
    {
      label: "GEMSTONE SHAPES",
      slug: "gemstone-shapes",
      active: true, // Currently active tab in the image
      shapes: [
        {
          name: "Round Brilliant",
          image: "round-brilliant.jpg",
          description: "Classic 58-facet cut, maximum sparkle"
        },
        {
          name: "Oval",
          image: "oval.jpg",
          description: "Elongated brilliant cut, vintage appeal"
        },
        {
          name: "Emerald",
          image: "emerald.jpg",
          description: "Step-cut, art deco style"
        },
        {
          name: "Princess",
          image: "princess.jpg",
          description: "Square brilliant cut, modern look"
        },
        {
          name: "Cushion",
          image: "cushion.jpg",
          description: "Soft square cut, romantic feel"
        },
        {
          name: "Pear",
          image: "pear.jpg",
          description: "Teardrop shape, elegant and unique"
        }
      ]
    },
    {
      label: "WEDDING BANDS",
      slug: "wedding-bands",
      active: false,
      collections: [
        {
          name: "Milestone",
          image: "wedding-milestone.jpg",
          description: "Milestone anniversary bands"
        },
        {
          name: "Anniversary",
          image: "wedding-anniversary.jpg",
          description: "Classic anniversary collections"
        },
        {
          name: "Wedding",
          image: "wedding-band.jpg",
          description: "Traditional wedding bands"
        },
        {
          name: "Birthday",
          image: "wedding-birthday.jpg",
          description: "Birthday celebration bands"
        }
      ]
    },
    {
      label: "CELEBRATION",
      slug: "celebration",
      active: false,
      moments: [
        {
          name: "Milestone",
          image: "milestone.jpg",
          description: "Life milestone moments"
        },
        {
          name: "Anniversary",
          image: "anniversary.jpg",
          description: "Anniversary celebrations"
        },
        {
          name: "Wedding",
          image: "wedding.jpg",
          description: "Wedding day jewelry"
        },
        {
          name: "Birthday",
          image: "birthday.jpg",
          description: "Birthday gifts and keepsakes"
        }
      ]
    }
  ],

  // Additional context link
  infoLink: {
    label: "The Tiffany Difference",
    description: "Brand positioning and value proposition"
  },

  /**
   * AVIORY MAPPING:
   * 
   * Tiffany Structure          →    AVIORY Structure
   * ─────────────────────────────────────────────────
   * LOVE & CELEBRATION         →    LOVE & CELEBRATION (✓ already implemented)
   * 
   * Sub-sections:
   * • ENGAGEMENT RINGS         →    Engagement Rings (with Love & Celebration messaging)
   * • GEMSTONE SHAPES           →    Gemstone Shapes (Round, Oval, Emerald, Cushion, Princess, Pear) ✓
   * • WEDDING BANDS            →    Wedding Bands (new collection)
   * • CELEBRATION              →    Moments (By Moment filtering: Milestone, Anniversary, Wedding, Birthday)
   * 
   * Key Differentiators:
   * • Tiffany: Branded collections (Soleste, Tiffany Forever, etc.)
   * • AVIORY: Emotional moments + gemstone options (more flexible, heritage-focused)
   * 
   * Next Phase:
   * • Add WEDDING BANDS collection page
   * • Implement CELEBRATION/MOMENTS filtering
   * • Build category landing pages with tabbed navigation (like Tiffany's)
   */
};

export default tiffanyLoveEngagementMenu;
