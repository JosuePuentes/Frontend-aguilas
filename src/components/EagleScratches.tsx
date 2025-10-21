import React, { useEffect, useState, useRef } from 'react'

const EagleScratches: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animationPhase, setAnimationPhase] = useState<'entering' | 'eagle-appearing' | 'claws-tearing' | 'leaving'>('entering')
  const timeoutRef = useRef<number | null>(null)

  const triggerAnimationCycle = () => {
    // Start entering animation
    setAnimationPhase('entering')
    setIsVisible(true)
    
    timeoutRef.current = window.setTimeout(() => {
      // Transition to eagle appearing from hole
      setAnimationPhase('eagle-appearing')
      
      timeoutRef.current = window.setTimeout(() => {
        // Transition to claws tearing the homepage
        setAnimationPhase('claws-tearing')
        
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
        }, 3000) // Duration of claws tearing animation
      }, 3000) // Duration of eagle appearing animation
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

  const realisticEagleEffect = (
    <div className="eagle-effect-container">
      {/* Homepage con color naranja del logo */}
      <div className={`homepage-background ${animationPhase}`}>
        <div className="homepage-content">
          {/* Contenido del homepage aquí */}
        </div>
      </div>
      
      {/* Águila saliendo del hueco roto */}
      <div className={`eagle-emerging ${animationPhase}`}>
        <img 
          src="/images/claws/IMG_1787.jpeg" 
          alt="Águila emergiendo" 
          className="eagle-image"
        />
      </div>
      
      {/* Garras rompiendo el homepage */}
      <div className={`claws-breaking ${animationPhase}`}>
        <img 
          src="/images/claws/garras aguila.png" 
          alt="Garras de águila" 
          className="claws-image"
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
      {realisticEagleEffect}
    </div>
  )
}

export default EagleScratches
