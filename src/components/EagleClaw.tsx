import React, { useEffect, useState } from 'react'

const EagleClaw: React.FC<{ position: string; delay?: number }> = ({ position, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrollTriggered, setIsScrollTriggered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Trigger claw animations based on scroll position
      if (scrollPosition > windowHeight * 0.2) {
        setIsScrollTriggered(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [delay])

  const clawSVG = (
    <svg 
      width="120" 
      height="120" 
      viewBox="0 0 120 120" 
      className="claw-svg"
    >
      <defs>
        <linearGradient id="clawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="50%" stopColor="#ff00ff" />
          <stop offset="100%" stopColor="#00ffff" />
        </linearGradient>
        <filter id="clawShadow">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#00ffff"/>
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#ff00ff"/>
        </filter>
      </defs>
      
      {/* Claw Base */}
      <path
        d="M60 20 C70 15, 80 25, 85 35 C90 45, 85 55, 80 65 C75 75, 65 80, 55 75 C45 70, 40 60, 45 50 C50 40, 55 30, 60 20 Z"
        fill="url(#clawGradient)"
        filter="url(#clawShadow)"
        opacity="0.9"
      />
      
      {/* Talon 1 */}
      <path
        d="M75 40 C80 35, 85 40, 88 45 C90 50, 88 55, 85 60 C82 65, 77 67, 72 65 C67 63, 65 58, 67 53 C69 48, 72 43, 75 40 Z"
        fill="url(#clawGradient)"
        filter="url(#clawShadow)"
        opacity="0.8"
      />
      
      {/* Talon 2 */}
      <path
        d="M65 30 C70 25, 75 30, 78 35 C80 40, 78 45, 75 50 C72 55, 67 57, 62 55 C57 53, 55 48, 57 43 C59 38, 62 33, 65 30 Z"
        fill="url(#clawGradient)"
        filter="url(#clawShadow)"
        opacity="0.8"
      />
      
      {/* Talon 3 */}
      <path
        d="M55 30 C50 25, 45 30, 42 35 C40 40, 42 45, 45 50 C48 55, 53 57, 58 55 C63 53, 65 48, 63 43 C61 38, 58 33, 55 30 Z"
        fill="url(#clawGradient)"
        filter="url(#clawShadow)"
        opacity="0.8"
      />
      
      {/* Talon 4 */}
      <path
        d="M45 40 C40 35, 35 40, 32 45 C30 50, 32 55, 35 60 C38 65, 43 67, 48 65 C53 63, 55 58, 53 53 C51 48, 48 43, 45 40 Z"
        fill="url(#clawGradient)"
        filter="url(#clawShadow)"
        opacity="0.8"
      />
      
      {/* Claw Details */}
      <circle cx="60" cy="50" r="3" fill="#ffffff" opacity="0.6" />
      <circle cx="70" cy="45" r="2" fill="#ffffff" opacity="0.5" />
      <circle cx="50" cy="45" r="2" fill="#ffffff" opacity="0.5" />
      
      {/* Claw Texture Lines */}
      <path d="M55 25 L65 25" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
      <path d="M50 35 L70 35" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
      <path d="M45 45 L75 45" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
    </svg>
  )

  return (
    <div 
      className={`eagle-claw ${position} ${isVisible ? 'visible' : ''} ${isScrollTriggered ? 'scroll-triggered' : ''}`}
      style={{ '--rotation': position.includes('left') ? '-15deg' : '15deg', '--scale': position.includes('bottom') ? '0.6' : '0.8' } as React.CSSProperties}
    >
      {clawSVG}
    </div>
  )
}

export default EagleClaw
