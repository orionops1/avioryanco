import React, { useState } from 'react'
import './GemstoneLightingViewer.css'

export default function GemstoneLightingViewer({ gem }) {
  const [lightingMode, setLightingMode] = useState('daylight')
  const [rotationAngle, setRotationAngle] = useState(0)

  const modes = [
    { id: 'daylight', name: 'Direct Daylight (5500K)', desc: 'Pure crystalline saturation & body color' },
    { id: 'evening', name: 'Evening Warmth (2700K)', desc: 'Fire, pleochroism & candlelight lustre' },
    { id: 'inspection', name: 'Gemological Spot (4500K)', desc: 'Facet alignment & internal dispersion' }
  ]

  const getLightingStyle = () => {
    switch (lightingMode) {
      case 'evening':
        return {
          filter: 'sepia(0.2) saturate(1.25) brightness(0.95)',
          background: 'radial-gradient(circle at 60% 40%, rgba(255, 200, 120, 0.25) 0%, rgba(20, 15, 10, 0.95) 80%)'
        }
      case 'inspection':
        return {
          filter: 'contrast(1.3) brightness(1.1) saturate(1.1)',
          background: 'radial-gradient(circle at 40% 30%, rgba(240, 248, 255, 0.3) 0%, rgba(10, 15, 25, 0.98) 75%)'
        }
      default: // daylight
        return {
          filter: 'none',
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(15, 22, 35, 0.95) 80%)'
        }
    }
  }

  const currentMode = modes.find(m => m.id === lightingMode)

  return (
    <div className="lighting-viewer">
      <div className="lighting-viewer__header">
        <span className="lighting-viewer__tag">INTERACTIVE OPTICAL LAB</span>
        <h4 className="lighting-viewer__title">Gemstone Lighting &amp; Brilliance Simulator</h4>
        <p className="lighting-viewer__desc">
          Unheated Ceylon corundum exhibits natural pleochroism — varying its color depth under changing light spectra.
        </p>
      </div>

      {/* Stage */}
      <div className="lighting-viewer__stage" style={{ background: getLightingStyle().background }}>
        <div 
          className="lighting-viewer__gem-wrap"
          style={{ 
            transform: `rotate(${rotationAngle}deg)`,
            filter: getLightingStyle().filter
          }}
        >
          {gem.image ? (
            <img src={gem.image} alt={gem.name} className="lighting-viewer__img" />
          ) : (
            <div className="lighting-viewer__facet-art">
              <svg viewBox="0 0 160 160" fill="none" stroke="currentColor">
                <polygon points="80,15 130,45 130,115 80,145 30,115 30,45" stroke="rgba(212,175,127,0.8)" strokeWidth="1.8" />
                <polygon points="80,35 110,55 110,105 80,125 50,105 50,55" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
                <circle cx="80" cy="80" r="24" stroke="rgba(212,175,127,0.9)" strokeWidth="2" />
                <line x1="80" y1="15" x2="80" y2="35" stroke="rgba(212,175,127,0.6)" />
                <line x1="130" y1="45" x2="110" y2="55" stroke="rgba(212,175,127,0.6)" />
                <line x1="130" y1="115" x2="110" y2="105" stroke="rgba(212,175,127,0.6)" />
                <line x1="80" y1="145" x2="80" y2="125" stroke="rgba(212,175,127,0.6)" />
                <line x1="30" y1="115" x2="50" y2="105" stroke="rgba(212,175,127,0.6)" />
                <line x1="30" y1="45" x2="50" y2="55" stroke="rgba(212,175,127,0.6)" />
              </svg>
            </div>
          )}
        </div>

        {/* Ambient indicator tag */}
        <div className="lighting-viewer__status-pill">
          {currentMode.name} &bull; {rotationAngle}&deg;
        </div>
      </div>

      {/* Rotation Slider Control */}
      <div className="lighting-viewer__rotation-ctrl">
        <label htmlFor="rot-slider">
          <span>Table Rotation</span>
          <strong>{rotationAngle}&deg;</strong>
        </label>
        <input
          id="rot-slider"
          type="range"
          min="-180"
          max="180"
          value={rotationAngle}
          onChange={(e) => setRotationAngle(parseInt(e.target.value))}
          className="lighting-viewer__slider"
        />
      </div>

      {/* Lighting Mode Buttons */}
      <div className="lighting-viewer__modes">
        {modes.map((mode) => (
          <button
            key={mode.id}
            type="button"
            className={`lighting-mode-btn ${lightingMode === mode.id ? 'lighting-mode-btn--active' : ''}`}
            onClick={() => setLightingMode(mode.id)}
          >
            <strong>{mode.name}</strong>
            <span>{mode.desc}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

