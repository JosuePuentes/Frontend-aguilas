import React, { useEffect, useState, useRef } from 'react'

const EagleScratches: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animationPhase, setAnimationPhase] = useState<'entering' | 'scratching' | 'leaving'>('entering')
  const [homepageBroken, setHomepageBroken] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  const triggerAnimationCycle = () => {
    // Start entering animation
    setAnimationPhase('entering')
    setIsVisible(true)
    
    timeoutRef.current = window.setTimeout(() => {
      // Transition to scratching animation and break homepage
      setAnimationPhase('scratching')
      setHomepageBroken(true)
      
      timeoutRef.current = window.setTimeout(() => {
        // Transition to leaving animation
        setAnimationPhase('leaving')
        
        timeoutRef.current = window.setTimeout(() => {
          // After leaving, go back to idle and wait for 3 minutes before restarting
          setIsVisible(false)
          setHomepageBroken(false)
          timeoutRef.current = window.setTimeout(() => {
            triggerAnimationCycle() // Repeat the cycle
          }, 172000) // 3 minutes (180000ms) - 8000ms (total animation time) = 172000ms
        }, 2000) // Duration of leaving animation
      }, 4000) // Duration of scratching animation
    }, 2000) // Duration of entering animation
  }

  useEffect(() => {
    triggerAnimationCycle() // Start the cycle when the component mounts

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const holographicEagleClawsSVG = (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 1920 1080" 
      className="holographic-claws-svg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        pointerEvents: 'none'
      }}
    >
      <defs>
        {/* Holographic Gradient */}
        <linearGradient id="hologradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="cyan" />
          <stop offset="25%" stopColor="blue" />
          <stop offset="50%" stopColor="purple" />
          <stop offset="75%" stopColor="pink" />
          <stop offset="100%" stopColor="orange" />
        </linearGradient>
        
        {/* Realistic Eagle Claw Gradient */}
        <linearGradient id="realisticClawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#1a1a1a" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#ff6600" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff3300" stopOpacity="0.8" />
        </linearGradient>
        
        {/* Holographic Glow Filter */}
        <filter id="hologlow">
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="cyan" floodOpacity="0.8"/>
          <feDropShadow dx="0" dy="0" stdDeviation="15" floodColor="blue" floodOpacity="0.6"/>
        </filter>
        
        {/* Realistic Shadow Filter */}
        <filter id="realisticShadow">
          <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.7"/>
        </filter>
        
        {/* 3D Depth Filter */}
        <filter id="depth3D">
          <feGaussianBlur stdDeviation="1" result="blur"/>
          <feColorMatrix type="matrix" values="0.3 0 0 0 0  0 0.2 0 0 0  0 0 0.1 0 0  0 0 0 1 0"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        {/* Holographic Interference Pattern */}
        <pattern id="holographicPattern" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill="transparent"/>
          <circle cx="10" cy="10" r="1" fill="cyan" opacity="0.3"/>
        </pattern>
      </defs>
      
      {/* Garras holográficas 3D - Esquina superior izquierda */}
      <g className={`claw-group claw-left ${animationPhase}`}>
        {/* Garra principal izquierda holográfica */}
        <path
          d="M100 50 C150 30, 200 50, 250 80 C300 110, 350 100, 400 130 C450 160, 500 150, 550 180 C600 210, 650 200, 700 230"
          stroke="url(#realisticClawGradient)"
          strokeWidth="15"
          fill="none"
          filter="url(#realisticShadow)"
          opacity="0.9"
        />
        
        {/* Garras individuales que perforan la pantalla */}
        <path
          d="M200 100 C220 80, 240 100, 250 120 C260 140, 270 130, 280 150"
          stroke="url(#hologradient)"
          strokeWidth="10"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.8"
        />
        
        <path
          d="M300 80 C320 60, 340 80, 350 100 C360 120, 370 110, 380 130"
          stroke="url(#realisticClawGradient)"
          strokeWidth="8"
          fill="none"
          filter="url(#depth3D)"
          opacity="0.7"
        />
        
        <path
          d="M400 120 C420 100, 440 120, 450 140 C460 160, 470 150, 480 170"
          stroke="url(#hologradient)"
          strokeWidth="9"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.8"
        />
        
        {/* Efectos holográficos alrededor de las garras */}
        <path
          d="M150 70 C180 50, 220 70, 250 90 C280 110, 320 100, 350 120"
          stroke="url(#hologradient)"
          strokeWidth="20"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.6"
        />
      </g>
      
      {/* Garras holográficas 3D - Esquina superior derecha */}
      <g className={`claw-group claw-right ${animationPhase}`}>
        {/* Garra principal derecha holográfica */}
        <path
          d="M1820 50 C1770 30, 1720 50, 1670 80 C1620 110, 1570 100, 1520 130 C1470 160, 1420 150, 1370 180 C1320 210, 1270 200, 1220 230"
          stroke="url(#realisticClawGradient)"
          strokeWidth="15"
          fill="none"
          filter="url(#realisticShadow)"
          opacity="0.9"
        />
        
        {/* Garras individuales que perforan la pantalla */}
        <path
          d="M1720 100 C1700 80, 1680 100, 1670 120 C1660 140, 1650 130, 1640 150"
          stroke="url(#hologradient)"
          strokeWidth="10"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.8"
        />
        
        <path
          d="M1620 80 C1600 60, 1580 80, 1570 100 C1560 120, 1550 110, 1540 130"
          stroke="url(#realisticClawGradient)"
          strokeWidth="8"
          fill="none"
          filter="url(#depth3D)"
          opacity="0.7"
        />
        
        <path
          d="M1520 120 C1500 100, 1480 120, 1470 140 C1460 160, 1450 150, 1440 170"
          stroke="url(#hologradient)"
          strokeWidth="9"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.8"
        />
        
        {/* Efectos holográficos alrededor de las garras */}
        <path
          d="M1770 70 C1740 50, 1700 70, 1670 90 C1640 110, 1600 100, 1570 120"
          stroke="url(#hologradient)"
          strokeWidth="20"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.6"
        />
      </g>
      
      {/* Garras holográficas 3D - Centro superior */}
      <g className={`claw-group claw-center ${animationPhase}`}>
        {/* Garra central holográfica que rompe desde arriba */}
        <path
          d="M960 0 C1000 -20, 1040 0, 1080 30 C1120 60, 1160 50, 1200 80 C1240 110, 1280 100, 1320 130 C1360 160, 1400 150, 1440 180"
          stroke="url(#realisticClawGradient)"
          strokeWidth="18"
          fill="none"
          filter="url(#realisticShadow)"
          opacity="0.9"
        />
        
        <path
          d="M960 0 C920 -20, 880 0, 840 30 C800 60, 760 50, 720 80 C680 110, 640 100, 600 130 C560 160, 520 150, 480 180"
          stroke="url(#realisticClawGradient)"
          strokeWidth="18"
          fill="none"
          filter="url(#realisticShadow)"
          opacity="0.9"
        />
        
        {/* Garras secundarias centrales holográficas */}
        <path
          d="M1020 20 C1040 0, 1060 20, 1070 40 C1080 60, 1090 50, 1100 70"
          stroke="url(#hologradient)"
          strokeWidth="10"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.8"
        />
        
        <path
          d="M900 20 C880 0, 860 20, 850 40 C840 60, 830 50, 820 70"
          stroke="url(#hologradient)"
          strokeWidth="10"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.8"
        />
        
        {/* Efectos holográficos centrales */}
        <path
          d="M980 10 C1020 -10, 1060 10, 1100 30 C1140 50, 1180 40, 1220 60"
          stroke="url(#hologradient)"
          strokeWidth="25"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.7"
        />
        
        <path
          d="M940 10 C900 -10, 860 10, 820 30 C780 50, 740 40, 700 60"
          stroke="url(#hologradient)"
          strokeWidth="25"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.7"
        />
      </g>
      
      {/* Arañazos holográficos que cruzan toda la pantalla */}
      <g className={`holographic-scratch-effects ${animationPhase}`}>
        {/* Arañazos diagonales holográficos */}
        <path
          d="M0 200 L1920 880"
          stroke="url(#hologradient)"
          strokeWidth="25"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.8"
        />
        <path
          d="M0 300 L1920 980"
          stroke="url(#realisticClawGradient)"
          strokeWidth="20"
          fill="none"
          filter="url(#realisticShadow)"
          opacity="0.7"
        />
        <path
          d="M0 400 L1920 1080"
          stroke="url(#hologradient)"
          strokeWidth="15"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.6"
        />
        
        {/* Arañazos horizontales holográficos */}
        <path
          d="M0 250 L1920 250"
          stroke="url(#realisticClawGradient)"
          strokeWidth="30"
          fill="none"
          filter="url(#realisticShadow)"
          opacity="0.9"
        />
        <path
          d="M0 450 L1920 450"
          stroke="url(#hologradient)"
          strokeWidth="25"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.8"
        />
        <path
          d="M0 650 L1920 650"
          stroke="url(#realisticClawGradient)"
          strokeWidth="20"
          fill="none"
          filter="url(#realisticShadow)"
          opacity="0.7"
        />
        <path
          d="M0 850 L1920 850"
          stroke="url(#hologradient)"
          strokeWidth="15"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.6"
        />
        
        {/* Arañazos verticales holográficos */}
        <path
          d="M300 0 L300 1080"
          stroke="url(#hologradient)"
          strokeWidth="25"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.8"
        />
        <path
          d="M600 0 L600 1080"
          stroke="url(#realisticClawGradient)"
          strokeWidth="20"
          fill="none"
          filter="url(#realisticShadow)"
          opacity="0.7"
        />
        <path
          d="M960 0 L960 1080"
          stroke="url(#hologradient)"
          strokeWidth="30"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.9"
        />
        <path
          d="M1320 0 L1320 1080"
          stroke="url(#realisticClawGradient)"
          strokeWidth="20"
          fill="none"
          filter="url(#realisticShadow)"
          opacity="0.7"
        />
        <path
          d="M1620 0 L1620 1080"
          stroke="url(#hologradient)"
          strokeWidth="25"
          fill="none"
          filter="url(#hologlow)"
          opacity="0.8"
        />
      </g>
      
      {/* Patrón holográfico de fondo */}
      <rect width="100%" height="100%" fill="url(#holographicPattern)" opacity="0.1"/>
    </svg>
  )

  if (!isVisible) return null

  return (
    <>
      {/* Efecto de homepage roto */}
      {homepageBroken && (
        <div className="broken-homepage-overlay">
          <div className="crack crack-1"></div>
          <div className="crack crack-2"></div>
          <div className="crack crack-3"></div>
          <div className="crack crack-4"></div>
          <div className="crack crack-5"></div>
          <div className="crack crack-6"></div>
          <div className="crack crack-7"></div>
          <div className="crack crack-8"></div>
        </div>
      )}
      
      <div 
        className={`eagle-scratches-container ${animationPhase}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1000,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      >
        {holographicEagleClawsSVG}
      </div>
    </>
  )
}

export default EagleScratches
