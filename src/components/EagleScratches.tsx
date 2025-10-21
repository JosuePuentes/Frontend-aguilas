import React, { useEffect, useState, useRef } from 'react'

const EagleScratches: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animationPhase, setAnimationPhase] = useState<'entering' | 'tearing' | 'revealing' | 'leaving'>('entering')
  const timeoutRef = useRef<number | null>(null)

  const triggerAnimationCycle = () => {
    // Start entering animation
    setAnimationPhase('entering')
    setIsVisible(true)
    
    timeoutRef.current = window.setTimeout(() => {
      // Transition to tearing animation
      setAnimationPhase('tearing')
      
      timeoutRef.current = window.setTimeout(() => {
        // Transition to revealing eagle face
        setAnimationPhase('revealing')
        
        timeoutRef.current = window.setTimeout(() => {
          // Transition to leaving animation
          setAnimationPhase('leaving')
          
          timeoutRef.current = window.setTimeout(() => {
            // After leaving, go back to idle and wait for 3 minutes before restarting
            setIsVisible(false)
            timeoutRef.current = window.setTimeout(() => {
              triggerAnimationCycle() // Repeat the cycle
            }, 172000) // 3 minutes (180000ms) - 8000ms (total animation time) = 172000ms
          }, 2000) // Duration of leaving animation
        }, 3000) // Duration of revealing eagle face
      }, 3000) // Duration of tearing animation
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

  const realisticPaperTearingEffect = (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 1920 1080" 
      className="paper-tearing-effect-svg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        pointerEvents: 'none'
      }}
    >
      <defs>
        {/* Gradiente para papel blanco */}
        <linearGradient id="paperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#f8f8f8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f0f0f0" stopOpacity="0.85" />
        </linearGradient>
        
        {/* Gradiente para garras orgánicas */}
        <linearGradient id="organicClawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#A0522D" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#CD853F" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D2691E" stopOpacity="0.8" />
        </linearGradient>
        
        {/* Gradiente para puntas de garras */}
        <linearGradient id="clawTipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2F1B14" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#8B4513" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#A0522D" stopOpacity="0.9" />
        </linearGradient>
        
        {/* Filtros para efectos realistas */}
        <filter id="paperShadow">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
        </filter>
        
        <filter id="clawDepth">
          <feGaussianBlur stdDeviation="1" result="blur"/>
          <feColorMatrix type="matrix" values="0.4 0 0 0 0  0 0.3 0 0 0  0 0 0.2 0 0  0 0 0 1 0"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="paperTear">
          <feDropShadow dx="1" dy="1" stdDeviation="2" floodColor="#000000" floodOpacity="0.5"/>
        </filter>
        
        {/* Patrón de textura de papel */}
        <pattern id="paperTexture" patternUnits="userSpaceOnUse" width="4" height="4">
          <rect width="4" height="4" fill="#ffffff"/>
          <circle cx="2" cy="2" r="0.5" fill="#f0f0f0" opacity="0.3"/>
        </pattern>
      </defs>
      
      {/* Papel blanco de fondo */}
      <rect 
        width="100%" 
        height="100%" 
        fill="url(#paperGradient)" 
        filter="url(#paperShadow)"
        className={`paper-background ${animationPhase}`}
      />
      
      {/* Textura de papel */}
      <rect 
        width="100%" 
        height="100%" 
        fill="url(#paperTexture)" 
        opacity="0.3"
        className={`paper-texture ${animationPhase}`}
      />
      
      {/* Garras orgánicas perforando el papel */}
      <g className={`organic-claws ${animationPhase}`}>
        {/* Garra principal central - forma orgánica como tronco */}
        <path
          d="M960 0 C980 -10, 1000 20, 1020 50 C1040 80, 1060 100, 1080 130 C1100 160, 1120 180, 1140 210 C1160 240, 1180 260, 1200 290 C1220 320, 1240 340, 1260 370 C1280 400, 1300 420, 1320 450 C1340 480, 1360 500, 1380 530 C1400 560, 1420 580, 1440 610 C1460 640, 1480 660, 1500 690 C1520 720, 1540 740, 1560 770 C1580 800, 1600 820, 1620 850 C1640 880, 1660 900, 1680 930 C1700 960, 1720 980, 1740 1010 C1760 1040, 1780 1060, 1800 1080"
          stroke="url(#organicClawGradient)"
          strokeWidth="25"
          fill="none"
          filter="url(#clawDepth)"
          opacity="0.9"
        />
        
        {/* Garra izquierda - forma orgánica */}
        <path
          d="M800 0 C820 -15, 840 10, 860 40 C880 70, 900 90, 920 120 C940 150, 960 170, 980 200 C1000 230, 1020 250, 1040 280 C1060 310, 1080 330, 1100 360 C1120 390, 1140 410, 1160 440 C1180 470, 1200 490, 1220 520 C1240 550, 1260 570, 1280 600 C1300 630, 1320 650, 1340 680 C1360 710, 1380 730, 1400 760 C1420 790, 1440 810, 1460 840 C1480 870, 1500 890, 1520 920 C1540 950, 1560 970, 1580 1000 C1600 1030, 1620 1050, 1640 1080"
          stroke="url(#organicClawGradient)"
          strokeWidth="20"
          fill="none"
          filter="url(#clawDepth)"
          opacity="0.8"
        />
        
        {/* Garra derecha - forma orgánica */}
        <path
          d="M1120 0 C1100 -15, 1080 10, 1060 40 C1040 70, 1020 90, 1000 120 C980 150, 960 170, 940 200 C920 230, 900 250, 880 280 C860 310, 840 330, 820 360 C800 390, 780 410, 760 440 C740 470, 720 490, 700 520 C680 550, 660 570, 640 600 C620 630, 600 650, 580 680 C560 710, 540 730, 520 760 C500 790, 480 810, 460 840 C440 870, 420 890, 400 920 C380 950, 360 970, 340 1000 C320 1030, 300 1050, 280 1080"
          stroke="url(#organicClawGradient)"
          strokeWidth="20"
          fill="none"
          filter="url(#clawDepth)"
          opacity="0.8"
        />
        
        {/* Puntas de garras más oscuras */}
        <circle cx="1800" cy="1080" r="15" fill="url(#clawTipGradient)" filter="url(#clawDepth)" opacity="0.9"/>
        <circle cx="1640" cy="1080" r="12" fill="url(#clawTipGradient)" filter="url(#clawDepth)" opacity="0.8"/>
        <circle cx="280" cy="1080" r="12" fill="url(#clawTipGradient)" filter="url(#clawDepth)" opacity="0.8"/>
      </g>
      
      {/* Desgarros del papel */}
      <g className={`paper-tears ${animationPhase}`}>
        {/* Desgarro central principal */}
        <path
          d="M900 200 C920 220, 940 240, 960 260 C980 280, 1000 300, 1020 320 C1040 340, 1060 360, 1080 380 C1100 400, 1120 420, 1140 440 C1160 460, 1180 480, 1200 500 C1220 520, 1240 540, 1260 560 C1280 580, 1300 600, 1320 620 C1340 640, 1360 660, 1380 680 C1400 700, 1420 720, 1440 740 C1460 760, 1480 780, 1500 800 C1520 820, 1540 840, 1560 860 C1580 880, 1600 900, 1620 920 C1640 940, 1660 960, 1680 980 C1700 1000, 1720 1020, 1740 1040 C1760 1060, 1780 1080, 1800 1100"
          stroke="url(#paperGradient)"
          strokeWidth="8"
          fill="none"
          filter="url(#paperTear)"
          opacity="0.7"
        />
        
        {/* Desgarros laterales */}
        <path
          d="M700 300 C720 320, 740 340, 760 360 C780 380, 800 400, 820 420 C840 440, 860 460, 880 480 C900 500, 920 520, 940 540 C960 560, 980 580, 1000 600 C1020 620, 1040 640, 1060 660 C1080 680, 1100 700, 1120 720 C1140 740, 1160 760, 1180 780 C1200 800, 1220 820, 1240 840 C1260 860, 1280 880, 1300 900 C1320 920, 1340 940, 1360 960 C1380 980, 1400 1000, 1420 1020 C1440 1040, 1460 1060, 1480 1080"
          stroke="url(#paperGradient)"
          strokeWidth="6"
          fill="none"
          filter="url(#paperTear)"
          opacity="0.6"
        />
        
        <path
          d="M1220 300 C1200 320, 1180 340, 1160 360 C1140 380, 1120 400, 1100 420 C1080 440, 1060 460, 1040 480 C1020 500, 1000 520, 980 540 C960 560, 940 580, 920 600 C900 620, 880 640, 860 660 C840 680, 820 700, 800 720 C780 740, 760 760, 740 780 C720 800, 700 820, 680 840 C660 860, 640 880, 620 900 C600 920, 580 940, 560 960 C540 980, 520 1000, 500 1020 C480 1040, 460 1060, 440 1080"
          stroke="url(#paperGradient)"
          strokeWidth="6"
          fill="none"
          filter="url(#paperTear)"
          opacity="0.6"
        />
      </g>
      
      {/* Cara de águila que aparece cuando se abre el papel */}
      <g className={`eagle-face ${animationPhase}`}>
        {/* Cabeza del águila */}
        <ellipse
          cx="960"
          cy="540"
          rx="200"
          ry="150"
          fill="#8B4513"
          filter="url(#clawDepth)"
          opacity="0.9"
        />
        
        {/* Ojos del águila */}
        <circle cx="900" cy="500" r="25" fill="#FFD700" opacity="0.9"/>
        <circle cx="1020" cy="500" r="25" fill="#FFD700" opacity="0.9"/>
        <circle cx="900" cy="500" r="15" fill="#000000" opacity="0.9"/>
        <circle cx="1020" cy="500" r="15" fill="#000000" opacity="0.9"/>
        
        {/* Pico del águila */}
        <path
          d="M960 580 L940 620 L960 640 L980 620 Z"
          fill="#FFA500"
          filter="url(#clawDepth)"
          opacity="0.9"
        />
        
        {/* Plumas de la cabeza */}
        <path
          d="M760 540 C780 520, 800 500, 820 480 C840 460, 860 440, 880 420 C900 400, 920 380, 940 360 C960 340, 980 360, 1000 380 C1020 400, 1040 420, 1060 440 C1080 460, 1100 480, 1120 500 C1140 520, 1160 540, 1180 560"
          stroke="#654321"
          strokeWidth="8"
          fill="none"
          filter="url(#clawDepth)"
          opacity="0.8"
        />
      </g>
    </svg>
  )

  if (!isVisible) return null

  return (
    <div 
      className={`paper-tearing-container ${animationPhase}`}
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
      {realisticPaperTearingEffect}
    </div>
  )
}

export default EagleScratches
