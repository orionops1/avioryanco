import React from 'react'
import './AvioryLogo.css'

export default function AvioryLogo({ variant = 'standard', className = '', showSubtitle = false }) {
  return (
    <div className={`aviory-logo aviory-logo--${variant} ${className}`}>
      {/* Precision Haute Joaillerie Wordmark */}
      <div className="aviory-logo__wordmark">
        <span className="aviory-logo__name">AVIORY</span>
        <span className="aviory-logo__ampersand">&amp;</span>
        <span className="aviory-logo__co">CO.</span>
      </div>
      
      {/* Subtitle: Exceptional Gemstones & Fine Jewellery */}
      {showSubtitle && (
        <span className="aviory-logo__subtitle">
          Exceptional Gemstones &amp; Fine Jewellery
        </span>
      )}
      
      {/* Heritage Hallmark Subtitle */}
      {variant !== 'minimal' && !showSubtitle && (
        <span className="aviory-logo__hallmark">
          CEYLON &bull; HIGH JEWELLERY &bull; EST. 2009
        </span>
      )}
    </div>
  )
}

