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

  const holographicEagleClawSVG = (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 1920 1080" 
      className="holographic-claw-svg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        pointerEvents: 'none'
      }}
    >
      <defs>
        {/* Gradiente holográfico principal */}
        <linearGradient id="holographicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
          <stop offset="25%" stopColor="#0080ff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#8000ff" stopOpacity="0.8" />
          <stop offset="75%" stopColor="#ff0080" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff8000" stopOpacity="0.8" />
        </linearGradient>
        
        {/* Gradiente para las garras */}
        <linearGradient id="clawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#00ffff" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#8000ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff0080" stopOpacity="0.8" />
        </linearGradient>
        
        {/* Filtros holográficos */}
        <filter id="holographicGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="holographicShadow">
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#00ffff" floodOpacity="0.6"/>
        </filter>
        
        <filter id="scratchEffect">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        {/* Patrón de interferencia holográfica */}
        <pattern id="holographicPattern" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill="transparent"/>
          <circle cx="10" cy="10" r="1" fill="#00ffff" opacity="0.3"/>
        </pattern>
      </defs>
      
      {/* Garra principal izquierda */}
      <g className={`claw-group claw-left ${animationPhase}`}>
        <path
          d="M200 200 C300 150, 500 200, 600 300 C700 400, 650 500, 550 600 C450 700, 300 750, 200 700 C100 650, 150 550, 250 450 C350 350, 200 250, 200 200 Z"
          fill="url(#clawGradient)"
          filter="url(#holographicGlow)"
          opacity="0.7"
        />
        
        {/* Garras individuales izquierda */}
        <path
          d="M400 300 C450 280, 500 300, 520 330 C540 360, 535 390, 515 415 C495 440, 465 445, 435 430 C405 415, 400 385, 410 355 C420 325, 400 310, 400 300 Z"
          fill="url(#clawGradient)"
          filter="url(#holographicGlow)"
          opacity="0.8"
        />
        
        <path
          d="M350 250 C400 230, 450 250, 470 280 C490 310, 485 340, 465 365 C445 390, 415 395, 385 380 C355 365, 350 335, 360 305 C370 275, 350 260, 350 250 Z"
          fill="url(#clawGradient)"
          filter="url(#holographicGlow)"
          opacity="0.8"
        />
        
        <path
          d="M250 250 C200 230, 150 250, 130 280 C110 310, 115 340, 135 365 C155 390, 185 395, 215 380 C245 365, 250 335, 240 305 C230 275, 250 260, 250 250 Z"
          fill="url(#clawGradient)"
          filter="url(#holographicGlow)"
          opacity="0.8"
        />
        
        <path
          d="M200 300 C150 280, 100 300, 80 330 C60 360, 65 390, 85 415 C105 440, 135 445, 165 430 C195 415, 200 385, 190 355 C180 325, 200 310, 200 300 Z"
          fill="url(#clawGradient)"
          filter="url(#holographicGlow)"
          opacity="0.8"
        />
      </g>
      
      {/* Garra principal derecha */}
      <g className={`claw-group claw-right ${animationPhase}`}>
        <path
          d="M1720 200 C1620 150, 1420 200, 1320 300 C1220 400, 1270 500, 1370 600 C1470 700, 1620 750, 1720 700 C1820 650, 1770 550, 1670 450 C1570 350, 1720 250, 1720 200 Z"
          fill="url(#clawGradient)"
          filter="url(#holographicGlow)"
          opacity="0.7"
        />
        
        {/* Garras individuales derecha */}
        <path
          d="M1520 300 C1470 280, 1420 300, 1400 330 C1380 360, 1385 390, 1405 415 C1425 440, 1455 445, 1485 430 C1515 415, 1520 385, 1510 355 C1500 325, 1520 310, 1520 300 Z"
          fill="url(#clawGradient)"
          filter="url(#holographicGlow)"
          opacity="0.8"
        />
        
        <path
          d="M1570 250 C1520 230, 1470 250, 1450 280 C1430 310, 1435 340, 1455 365 C1475 390, 1505 395, 1535 380 C1565 365, 1570 335, 1560 305 C1550 275, 1570 260, 1570 250 Z"
          fill="url(#clawGradient)"
          filter="url(#holographicGlow)"
          opacity="0.8"
        />
        
        <path
          d="M1670 250 C1720 230, 1770 250, 1790 280 C1810 310, 1805 340, 1785 365 C1765 390, 1735 395, 1705 380 C1675 365, 1670 335, 1680 305 C1690 275, 1670 260, 1670 250 Z"
          fill="url(#clawGradient)"
          filter="url(#holographicGlow)"
          opacity="0.8"
        />
        
        <path
          d="M1720 300 C1770 280, 1820 300, 1840 330 C1860 360, 1855 390, 1835 415 C1815 440, 1785 445, 1755 430 C1725 415, 1720 385, 1730 355 C1740 325, 1720 310, 1720 300 Z"
          fill="url(#clawGradient)"
          filter="url(#holographicGlow)"
          opacity="0.8"
        />
      </g>
      
      {/* Garra central superior */}
      <g className={`claw-group claw-center ${animationPhase}`}>
        <path
          d="M960 100 C1060 50, 1260 100, 1360 200 C1460 300, 1410 400, 1310 500 C1210 600, 1060 650, 960 600 C860 550, 910 450, 1010 350 C1110 250, 960 150, 960 100 Z"
          fill="url(#clawGradient)"
          filter="url(#holographicGlow)"
          opacity="0.6"
        />
        
        {/* Garras centrales */}
        <path
          d="M1160 200 C1210 180, 1260 200, 1280 230 C1300 260, 1295 290, 1275 315 C1255 340, 1225 345, 1195 330 C1165 315, 1160 285, 1170 255 C1180 225, 1160 210, 1160 200 Z"
          fill="url(#clawGradient)"
          filter="url(#holographicGlow)"
          opacity="0.8"
        />
        
        <path
          d="M1110 150 C1160 130, 1210 150, 1230 180 C1250 210, 1245 240, 1225 265 C1205 290, 1175 295, 1145 280 C1115 265, 1110 235, 1120 205 C1130 175, 1110 160, 1110 150 Z"
          fill="url(#clawGradient)"
          filter="url(#holographicGlow)"
          opacity="0.8"
        />
        
        <path
          d="M810 150 C760 130, 710 150, 690 180 C670 210, 675 240, 695 265 C715 290, 745 295, 775 280 C805 265, 810 235, 800 205 C790 175, 810 160, 810 150 Z"
          fill="url(#clawGradient)"
          filter="url(#holographicGlow)"
          opacity="0.8"
        />
        
        <path
          d="M760 200 C710 180, 660 200, 640 230 C620 260, 625 290, 645 315 C665 340, 695 345, 725 330 C755 315, 760 285, 750 255 C740 225, 760 210, 760 200 Z"
          fill="url(#clawGradient)"
          filter="url(#holographicGlow)"
          opacity="0.8"
        />
      </g>
      
      {/* Efectos de arañazos */}
      <g className={`scratch-effects ${animationPhase}`}>
        {/* Arañazos diagonales */}
        <line x1="100" y1="200" x2="400" y2="500" stroke="url(#holographicGradient)" strokeWidth="8" opacity="0.6" filter="url(#scratchEffect)"/>
        <line x1="200" y1="100" x2="500" y2="400" stroke="url(#holographicGradient)" strokeWidth="6" opacity="0.5" filter="url(#scratchEffect)"/>
        <line x1="300" y1="50" x2="600" y2="350" stroke="url(#holographicGradient)" strokeWidth="4" opacity="0.4" filter="url(#scratchEffect)"/>
        
        <line x1="1820" y1="200" x2="1520" y2="500" stroke="url(#holographicGradient)" strokeWidth="8" opacity="0.6" filter="url(#scratchEffect)"/>
        <line x1="1720" y1="100" x2="1420" y2="400" stroke="url(#holographicGradient)" strokeWidth="6" opacity="0.5" filter="url(#scratchEffect)"/>
        <line x1="1620" y1="50" x2="1320" y2="350" stroke="url(#holographicGradient)" strokeWidth="4" opacity="0.4" filter="url(#scratchEffect)"/>
        
        {/* Arañazos centrales */}
        <line x1="960" y1="50" x2="1260" y2="350" stroke="url(#holographicGradient)" strokeWidth="10" opacity="0.7" filter="url(#scratchEffect)"/>
        <line x1="860" y1="100" x2="1160" y2="400" stroke="url(#holographicGradient)" strokeWidth="8" opacity="0.6" filter="url(#scratchEffect)"/>
        <line x1="760" y1="150" x2="1060" y2="450" stroke="url(#holographicGradient)" strokeWidth="6" opacity="0.5" filter="url(#scratchEffect)"/>
        
        {/* Arañazos horizontales */}
        <line x1="0" y1="300" x2="1920" y2="300" stroke="url(#holographicGradient)" strokeWidth="12" opacity="0.8" filter="url(#scratchEffect)"/>
        <line x1="0" y1="400" x2="1920" y2="400" stroke="url(#holographicGradient)" strokeWidth="10" opacity="0.7" filter="url(#scratchEffect)"/>
        <line x1="0" y1="500" x2="1920" y2="500" stroke="url(#holographicGradient)" strokeWidth="8" opacity="0.6" filter="url(#scratchEffect)"/>
        <line x1="0" y1="600" x2="1920" y2="600" stroke="url(#holographicGradient)" strokeWidth="6" opacity="0.5" filter="url(#scratchEffect)"/>
        
        {/* Arañazos verticales */}
        <line x1="300" y1="0" x2="300" y2="1080" stroke="url(#holographicGradient)" strokeWidth="8" opacity="0.6" filter="url(#scratchEffect)"/>
        <line x1="600" y1="0" x2="600" y2="1080" stroke="url(#holographicGradient)" strokeWidth="6" opacity="0.5" filter="url(#scratchEffect)"/>
        <line x1="900" y1="0" x2="900" y2="1080" stroke="url(#holographicGradient)" strokeWidth="10" opacity="0.7" filter="url(#scratchEffect)"/>
        <line x1="1200" y1="0" x2="1200" y2="1080" stroke="url(#holographicGradient)" strokeWidth="6" opacity="0.5" filter="url(#scratchEffect)"/>
        <line x1="1500" y1="0" x2="1500" y2="1080" stroke="url(#holographicGradient)" strokeWidth="8" opacity="0.6" filter="url(#scratchEffect)"/>
        <line x1="1800" y1="0" x2="1800" y2="1080" stroke="url(#holographicGradient)" strokeWidth="6" opacity="0.5" filter="url(#scratchEffect)"/>
      </g>
      
      {/* Efectos de interferencia holográfica */}
      <rect width="100%" height="100%" fill="url(#holographicPattern)" opacity="0.1"/>
      
      {/* Partículas holográficas */}
      <g className={`holographic-particles ${animationPhase}`}>
        {Array.from({ length: 50 }, (_, i) => (
          <circle
            key={i}
            cx={Math.random() * 1920}
            cy={Math.random() * 1080}
            r={Math.random() * 3 + 1}
            fill="url(#holographicGradient)"
            opacity={Math.random() * 0.5 + 0.2}
          >
            <animate
              attributeName="opacity"
              values="0.2;0.8;0.2"
              dur={`${Math.random() * 2 + 1}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="1;4;1"
              dur={`${Math.random() * 3 + 2}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>
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
      {holographicEagleClawSVG}
    </div>
  )
}

export default EagleScratches
