/**
 * Tiffany Love & Engagement Navigation Component
 * Mirrors Tiffany.com's tabbed sub-navigation structure
 * 
 * Usage: Place this below the primary header on Love & Celebration pages
 * 
 * Structure:
 * [ENGAGEMENT RINGS] [GEMSTONE SHAPES] [WEDDING BANDS] [CELEBRATION] [The Tiffany Difference]
 *      ↓ (hover/active)
 *   Collection Grid (6-item showcase)
 */

import React, { useState } from 'react';
import './TiffanyLoveEngagementNav.css';

const TiffanyLoveEngagementNav = ({ onTabChange, initialTab = 'engagement-rings' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const tabs = [
    {
      id: 'engagement-rings',
      label: 'ENGAGEMENT RINGS',
      collections: [
        { name: 'Sixteen Stone by Tiffany', tagline: 'Signature classic' },
        { name: 'The Tiffany® Setting', tagline: 'Iconic raised setting' },
        { name: 'Tiffany True®', tagline: 'Proprietary gemstone cut' },
        { name: 'Tiffany Forever', tagline: 'Timeless designs' },
        { name: 'Tiffany Soleste®', tagline: 'Halo setting' },
        { name: 'How to Choose', tagline: 'Educational guide' }
      ]
    },
    {
      id: 'gemstone-shapes',
      label: 'GEMSTONE SHAPES',
      shapes: [
        { name: 'Round Brilliant', tagline: 'Classic 58-facet cut' },
        { name: 'Oval', tagline: 'Elongated brilliant' },
        { name: 'Emerald', tagline: 'Step-cut, art deco' },
        { name: 'Princess', tagline: 'Square brilliant' },
        { name: 'Cushion', tagline: 'Soft square cut' },
        { name: 'Pear', tagline: 'Teardrop shape' }
      ]
    },
    {
      id: 'wedding-bands',
      label: 'WEDDING BANDS',
      collections: [
        { name: 'Milestone', tagline: 'Anniversary bands' },
        { name: 'Anniversary', tagline: 'Classic collections' },
        { name: 'Wedding', tagline: 'Traditional bands' },
        { name: 'Birthday', tagline: 'Birthday celebration' }
      ]
    },
    {
      id: 'celebration',
      label: 'CELEBRATION',
      moments: [
        { name: 'Milestone', tagline: 'Life milestone moments' },
        { name: 'Anniversary', tagline: 'Anniversary celebrations' },
        { name: 'Wedding', tagline: 'Wedding day jewelry' },
        { name: 'Birthday', tagline: 'Birthday gifts' }
      ]
    }
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (onTabChange) onTabChange(tabId);
  };

  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <nav className="tiffany-love-engagement-nav">
      {/* Tab Headers */}
      <div className="nav-tabs">
        <div className="tabs-container">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
          <a href="#tiffany-difference" className="nav-link">
            The Tiffany Difference
          </a>
        </div>
      </div>

      {/* Content Area - Tabbed Collections */}
      {currentTab && (
        <div className="tab-content">
          <div className="collections-grid">
            {(currentTab.collections || currentTab.shapes || currentTab.moments || []).map((item, idx) => (
              <div key={idx} className="collection-card">
                <div className="collection-image">
                  {/* Placeholder - replace with actual images */}
                  <div className="image-placeholder" />
                </div>
                <h3 className="collection-name">{item.name}</h3>
                <p className="collection-tagline">{item.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default TiffanyLoveEngagementNav;
