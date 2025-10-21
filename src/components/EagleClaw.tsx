import React, { useEffect, useState } from 'react'

const EagleClaw: React.FC<{ position: string; delay?: number }> = ({ position, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const adultEagleClawSVG = (
    <svg 
      width="300" 
      height="300" 
      viewBox="0 0 300 300" 
      className="claw-svg"
    >
      <defs>
        <linearGradient id="adultClawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="30%" stopColor="#A0522D" />
          <stop offset="70%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
        <filter id="adultClawShadow">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.5"/>
        </filter>
      </defs>
      
      {/* Main Claw Base - Adult Eagle */}
      <path
        d="M150 50 C180 40, 220 60, 240 90 C260 120, 250 150, 230 180 C210 210, 180 220, 150 210 C120 200, 100 180, 110 150 C120 120, 130 90, 150 50 Z"
        fill="url(#adultClawGradient)"
        filter="url(#adultClawShadow)"
        opacity="0.9"
      />
      
      {/* Large Talon 1 - Adult Eagle */}
      <path
        d="M200 100 C220 90, 240 100, 250 120 C260 140, 255 160, 240 175 C225 190, 205 195, 185 185 C165 175, 160 155, 170 135 C180 115, 190 105, 200 100 Z"
        fill="url(#adultClawGradient)"
        filter="url(#adultClawShadow)"
        opacity="0.8"
      />
      
      {/* Large Talon 2 - Adult Eagle */}
      <path
        d="M180 80 C200 70, 220 80, 230 100 C240 120, 235 140, 220 155 C205 170, 185 175, 165 165 C145 155, 140 135, 150 115 C160 95, 170 85, 180 80 Z"
        fill="url(#adultClawGradient)"
        filter="url(#adultClawShadow)"
        opacity="0.8"
      />
      
      {/* Large Talon 3 - Adult Eagle */}
      <path
        d="M120 80 C100 70, 80 80, 70 100 C60 120, 65 140, 80 155 C95 170, 115 175, 135 165 C155 155, 160 135, 150 115 C140 95, 130 85, 120 80 Z"
        fill="url(#adultClawGradient)"
        filter="url(#adultClawShadow)"
        opacity="0.8"
      />
      
      {/* Large Talon 4 - Adult Eagle */}
      <path
        d="M100 100 C80 90, 60 100, 50 120 C40 140, 45 160, 60 175 C75 190, 95 195, 115 185 C135 175, 140 155, 130 135 C120 115, 110 105, 100 100 Z"
        fill="url(#adultClawGradient)"
        filter="url(#adultClawShadow)"
        opacity="0.8"
      />
      
      {/* Claw Details - Adult Eagle */}
      <circle cx="150" cy="130" r="4" fill="#654321" opacity="0.7" />
      <circle cx="200" cy="120" r="3" fill="#654321" opacity="0.6" />
      <circle cx="100" cy="120" r="3" fill="#654321" opacity="0.6" />
      
      {/* Claw Texture Lines - Adult Eagle */}
      <path d="M140 60 L160 60" stroke="#654321" strokeWidth="2" opacity="0.4" />
      <path d="M130 80 L170 80" stroke="#654321" strokeWidth="2" opacity="0.3" />
      <path d="M120 100 L180 100" stroke="#654321" strokeWidth="2" opacity="0.3" />
      <path d="M110 120 L190 120" stroke="#654321" strokeWidth="2" opacity="0.3" />
      
      {/* Claw Tips - Adult Eagle */}
      <path d="M245 125 L255 135" stroke="#654321" strokeWidth="3" opacity="0.8" />
      <path d="M225 105 L235 115" stroke="#654321" strokeWidth="3" opacity="0.8" />
      <path d="M75 105 L65 115" stroke="#654321" strokeWidth="3" opacity="0.8" />
      <path d="M55 125 L45 135" stroke="#654321" strokeWidth="3" opacity="0.8" />
    </svg>
  )

  return (
    <div 
      className={`eagle-claw ${position} ${isVisible ? 'visible' : ''}`}
      style={{ '--rotation': position.includes('watermark-2') ? '25deg' : position.includes('watermark-3') ? '45deg' : '-15deg', '--scale': '2.5' } as React.CSSProperties}
    >
      {adultEagleClawSVG}
    </div>
  )
}

export default EagleClaw
