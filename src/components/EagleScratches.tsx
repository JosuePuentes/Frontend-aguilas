import React, { useEffect, useState } from 'react'

const EagleScratches: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animationPhase, setAnimationPhase] = useState<'entering' | 'scratching' | 'leaving'>('entering')

  useEffect(() => {
    // Ciclo cada 3 minutos (180000 ms)
    const cycleInterval = setInterval(() => {
      // Fase 1: Aparecer (2 segundos)
      setIsVisible(true)
      setAnimationPhase('entering')
      
      setTimeout(() => {
        // Fase 2: Arañar (4 segundos)
        setAnimationPhase('scratching')
        
        setTimeout(() => {
          // Fase 3: Desaparecer (2 segundos)
          setAnimationPhase('leaving')
          
          setTimeout(() => {
            setIsVisible(false)
          }, 2000)
        }, 4000)
      }, 2000)
    }, 180000) // 3 minutos

    // Ejecutar inmediatamente al cargar
    setIsVisible(true)
    setAnimationPhase('entering')
    
    setTimeout(() => {
      setAnimationPhase('scratching')
      
      setTimeout(() => {
        setAnimationPhase('leaving')
        
        setTimeout(() => {
          setIsVisible(false)
        }, 2000)
      }, 4000)
    }, 2000)

    return () => clearInterval(cycleInterval)
  }, [])

  const paperTearingEagleClawsSVG = (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 1920 1080" 
      className="paper-tearing-claws-svg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        pointerEvents: 'none'
      }}
    >
      <defs>
        {/* Gradiente para garras de águila realistas */}
        <linearGradient id="eagleClawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#1a1a1a" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#ff6600" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff3300" stopOpacity="0.8" />
        </linearGradient>
        
        {/* Gradiente para arañazos profundos */}
        <linearGradient id="deepTearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#ff4400" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#cc2200" stopOpacity="0.9" />
        </linearGradient>
        
        {/* Gradiente para papel roto */}
        <linearGradient id="paperTearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="30%" stopColor="#f0f0f0" stopOpacity="0.2" />
          <stop offset="70%" stopColor="#e0e0e0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#d0d0d0" stopOpacity="0.2" />
        </linearGradient>
        
        {/* Filtros para efectos de papel roto */}
        <filter id="paperTearShadow">
          <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.7"/>
        </filter>
        
        <filter id="clawDepth">
          <feGaussianBlur stdDeviation="1" result="blur"/>
          <feColorMatrix type="matrix" values="0.3 0 0 0 0  0 0.2 0 0 0  0 0 0.1 0 0  0 0 0 1 0"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="paperGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        {/* Patrón de papel roto */}
        <pattern id="paperTearPattern" patternUnits="userSpaceOnUse" width="50" height="50">
          <rect width="50" height="50" fill="url(#paperTearGradient)"/>
          <path d="M0 0 L50 50 M0 50 L50 0" stroke="#cccccc" strokeWidth="0.5" opacity="0.3"/>
        </pattern>
      </defs>
      
      {/* Garras de águila rompiendo el papel - Esquina superior izquierda */}
      <g className={`claw-group claw-left ${animationPhase}`}>
        {/* Garra principal izquierda que rompe el papel */}
        <path
          d="M100 50 C150 30, 200 50, 250 80 C300 110, 350 100, 400 130 C450 160, 500 150, 550 180 C600 210, 650 200, 700 230"
          stroke="url(#eagleClawGradient)"
          strokeWidth="12"
          fill="none"
          filter="url(#paperTearShadow)"
          opacity="0.9"
        />
        
        {/* Garras individuales que perforan el papel */}
        <path
          d="M200 100 C220 80, 240 100, 250 120 C260 140, 270 130, 280 150"
          stroke="url(#deepTearGradient)"
          strokeWidth="8"
          fill="none"
          filter="url(#clawDepth)"
          opacity="0.8"
        />
        
        <path
          d="M300 80 C320 60, 340 80, 350 100 C360 120, 370 110, 380 130"
          stroke="url(#eagleClawGradient)"
          strokeWidth="6"
          fill="none"
          filter="url(#paperTearShadow)"
          opacity="0.7"
        />
        
        <path
          d="M400 120 C420 100, 440 120, 450 140 C460 160, 470 150, 480 170"
          stroke="url(#deepTearGradient)"
          strokeWidth="7"
          fill="none"
          filter="url(#clawDepth)"
          opacity="0.8"
        />
        
        {/* Efectos de papel roto alrededor de las garras */}
        <path
          d="M150 70 C180 50, 220 70, 250 90 C280 110, 320 100, 350 120"
          stroke="url(#paperTearGradient)"
          strokeWidth="15"
          fill="none"
          filter="url(#paperGlow)"
          opacity="0.6"
        />
      </g>
      
      {/* Garras de águila rompiendo el papel - Esquina superior derecha */}
      <g className={`claw-group claw-right ${animationPhase}`}>
        {/* Garra principal derecha que rompe el papel */}
        <path
          d="M1820 50 C1770 30, 1720 50, 1670 80 C1620 110, 1570 100, 1520 130 C1470 160, 1420 150, 1370 180 C1320 210, 1270 200, 1220 230"
          stroke="url(#eagleClawGradient)"
          strokeWidth="12"
          fill="none"
          filter="url(#paperTearShadow)"
          opacity="0.9"
        />
        
        {/* Garras individuales que perforan el papel */}
        <path
          d="M1720 100 C1700 80, 1680 100, 1670 120 C1660 140, 1650 130, 1640 150"
          stroke="url(#deepTearGradient)"
          strokeWidth="8"
          fill="none"
          filter="url(#clawDepth)"
          opacity="0.8"
        />
        
        <path
          d="M1620 80 C1600 60, 1580 80, 1570 100 C1560 120, 1550 110, 1540 130"
          stroke="url(#eagleClawGradient)"
          strokeWidth="6"
          fill="none"
          filter="url(#paperTearShadow)"
          opacity="0.7"
        />
        
        <path
          d="M1520 120 C1500 100, 1480 120, 1470 140 C1460 160, 1450 150, 1440 170"
          stroke="url(#deepTearGradient)"
          strokeWidth="7"
          fill="none"
          filter="url(#clawDepth)"
          opacity="0.8"
        />
        
        {/* Efectos de papel roto alrededor de las garras */}
        <path
          d="M1770 70 C1740 50, 1700 70, 1670 90 C1640 110, 1600 100, 1570 120"
          stroke="url(#paperTearGradient)"
          strokeWidth="15"
          fill="none"
          filter="url(#paperGlow)"
          opacity="0.6"
        />
      </g>
      
      {/* Garras de águila rompiendo el papel - Centro superior */}
      <g className={`claw-group claw-center ${animationPhase}`}>
        {/* Garra central que rompe el papel desde arriba */}
        <path
          d="M960 0 C1000 -20, 1040 0, 1080 30 C1120 60, 1160 50, 1200 80 C1240 110, 1280 100, 1320 130 C1360 160, 1400 150, 1440 180"
          stroke="url(#eagleClawGradient)"
          strokeWidth="15"
          fill="none"
          filter="url(#paperTearShadow)"
          opacity="0.9"
        />
        
        <path
          d="M960 0 C920 -20, 880 0, 840 30 C800 60, 760 50, 720 80 C680 110, 640 100, 600 130 C560 160, 520 150, 480 180"
          stroke="url(#eagleClawGradient)"
          strokeWidth="15"
          fill="none"
          filter="url(#paperTearShadow)"
          opacity="0.9"
        />
        
        {/* Garras secundarias centrales */}
        <path
          d="M1020 20 C1040 0, 1060 20, 1070 40 C1080 60, 1090 50, 1100 70"
          stroke="url(#deepTearGradient)"
          strokeWidth="8"
          fill="none"
          filter="url(#clawDepth)"
          opacity="0.8"
        />
        
        <path
          d="M900 20 C880 0, 860 20, 850 40 C840 60, 830 50, 820 70"
          stroke="url(#deepTearGradient)"
          strokeWidth="8"
          fill="none"
          filter="url(#clawDepth)"
          opacity="0.8"
        />
        
        {/* Efectos de papel roto central */}
        <path
          d="M980 10 C1020 -10, 1060 10, 1100 30 C1140 50, 1180 40, 1220 60"
          stroke="url(#paperTearGradient)"
          strokeWidth="18"
          fill="none"
          filter="url(#paperGlow)"
          opacity="0.7"
        />
        
        <path
          d="M940 10 C900 -10, 860 10, 820 30 C780 50, 740 40, 700 60"
          stroke="url(#paperTearGradient)"
          strokeWidth="18"
          fill="none"
          filter="url(#paperGlow)"
          opacity="0.7"
        />
      </g>
      
      {/* Arañazos largos que cruzan toda la pantalla como papel roto */}
      <g className={`paper-tear-effects ${animationPhase}`}>
        {/* Arañazos diagonales largos que simulan papel roto */}
        <path
          d="M0 200 L1920 880"
          stroke="url(#deepTearGradient)"
          strokeWidth="20"
          fill="none"
          filter="url(#paperTearShadow)"
          opacity="0.8"
        />
        <path
          d="M0 300 L1920 980"
          stroke="url(#eagleClawGradient)"
          strokeWidth="15"
          fill="none"
          filter="url(#clawDepth)"
          opacity="0.7"
        />
        <path
          d="M0 400 L1920 1080"
          stroke="url(#deepTearGradient)"
          strokeWidth="12"
          fill="none"
          filter="url(#paperTearShadow)"
          opacity="0.6"
        />
        
        {/* Arañazos horizontales largos */}
        <path
          d="M0 250 L1920 250"
          stroke="url(#eagleClawGradient)"
          strokeWidth="25"
          fill="none"
          filter="url(#paperTearShadow)"
          opacity="0.9"
        />
        <path
          d="M0 450 L1920 450"
          stroke="url(#deepTearGradient)"
          strokeWidth="18"
          fill="none"
          filter="url(#clawDepth)"
          opacity="0.8"
        />
        <path
          d="M0 650 L1920 650"
          stroke="url(#eagleClawGradient)"
          strokeWidth="15"
          fill="none"
          filter="url(#paperTearShadow)"
          opacity="0.7"
        />
        <path
          d="M0 850 L1920 850"
          stroke="url(#deepTearGradient)"
          strokeWidth="12"
          fill="none"
          filter="url(#paperGlow)"
          opacity="0.6"
        />
        
        {/* Arañazos verticales largos */}
        <path
          d="M300 0 L300 1080"
          stroke="url(#eagleClawGradient)"
          strokeWidth="18"
          fill="none"
          filter="url(#paperTearShadow)"
          opacity="0.8"
        />
        <path
          d="M600 0 L600 1080"
          stroke="url(#deepTearGradient)"
          strokeWidth="15"
          fill="none"
          filter="url(#clawDepth)"
          opacity="0.7"
        />
        <path
          d="M960 0 L960 1080"
          stroke="url(#eagleClawGradient)"
          strokeWidth="22"
          fill="none"
          filter="url(#paperTearShadow)"
          opacity="0.9"
        />
        <path
          d="M1320 0 L1320 1080"
          stroke="url(#deepTearGradient)"
          strokeWidth="15"
          fill="none"
          filter="url(#clawDepth)"
          opacity="0.7"
        />
        <path
          d="M1620 0 L1620 1080"
          stroke="url(#eagleClawGradient)"
          strokeWidth="18"
          fill="none"
          filter="url(#paperTearShadow)"
          opacity="0.8"
        />
      </g>
      
      {/* Patrón de papel roto de fondo */}
      <rect width="100%" height="100%" fill="url(#paperTearPattern)" opacity="0.1"/>
    </svg>
  )

  if (!isVisible) return null

  return (
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
      {paperTearingEagleClawsSVG}
    </div>
  )
}

export default EagleScratches
