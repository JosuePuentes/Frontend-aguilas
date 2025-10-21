import React, { useEffect, useState, useRef } from 'react'

const EagleScratches: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animationPhase, setAnimationPhase] = useState<'entering' | 'logo-appearing' | 'leaving'>('entering')
  const timeoutRef = useRef<number | null>(null)

  const triggerAnimationCycle = () => {
    // Start entering animation
    setAnimationPhase('entering')
    setIsVisible(true)
    
    timeoutRef.current = window.setTimeout(() => {
      // Transition to logo appearing
      setAnimationPhase('logo-appearing')
      
      timeoutRef.current = window.setTimeout(() => {
        // Transition to leaving animation
        setAnimationPhase('leaving')
        
        timeoutRef.current = window.setTimeout(() => {
          // After leaving, go back to idle and wait for 5 minutes before restarting
          setIsVisible(false)
          timeoutRef.current = window.setTimeout(() => {
            triggerAnimationCycle() // Repeat the cycle
          }, 292000) // 5 minutes (300000ms) - 8000ms (total animation time) = 292000ms
        }, 2000) // Duration of leaving animation
      }, 4000) // Duration of logo appearing animation
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

  const logoEffect = (
    <div className="logo-effect-container">
      {/* Homepage con colores del logo */}
      <div className={`homepage-background ${animationPhase}`}>
        <div className="homepage-content">
          {/* Contenido del homepage aquí */}
        </div>
      </div>
      
      {/* Logo apareciendo */}
      <div className={`logo-emerging ${animationPhase}`}>
        <img 
          src="/images/claws/aguilas_del_zulia.png" 
          alt="Águilas del Zulia" 
          className="logo-image-effect"
        />
      </div>
    </div>
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
      {logoEffect}
    </div>
  )
}

export default EagleScratches
