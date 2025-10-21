import React, { useEffect, useRef, useState } from 'react'

const EagleSound: React.FC = () => {
  const audioContextRef = useRef<AudioContext | null>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const intervalRef = useRef<number | null>(null)

  // Función para crear el sonido de águila más realista
  const createRealisticEagleCall = () => {
    if (!audioContextRef.current || isMuted) return

    try {
      const audioContext = audioContextRef.current
      
      // Crear múltiples osciladores para un sonido más complejo y realista
      const oscillator1 = audioContext.createOscillator()
      const oscillator2 = audioContext.createOscillator()
      const oscillator3 = audioContext.createOscillator()
      const oscillator4 = audioContext.createOscillator()
      
      const gainNode = audioContext.createGain()
      const filterNode = audioContext.createBiquadFilter()
      const filterNode2 = audioContext.createBiquadFilter()

      // Configurar filtros para sonido más natural
      filterNode.type = 'lowpass'
      filterNode.frequency.value = 1200
      filterNode.Q.value = 2

      filterNode2.type = 'highpass'
      filterNode2.frequency.value = 200
      filterNode2.Q.value = 1

      // Configurar osciladores para crear un sonido de águila más realista
      oscillator1.type = 'sawtooth'
      oscillator1.frequency.setValueAtTime(180, audioContext.currentTime)
      oscillator1.frequency.exponentialRampToValueAtTime(350, audioContext.currentTime + 0.8)
      oscillator1.frequency.exponentialRampToValueAtTime(280, audioContext.currentTime + 1.5)
      oscillator1.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 2.2)
      oscillator1.frequency.exponentialRampToValueAtTime(150, audioContext.currentTime + 3)

      oscillator2.type = 'triangle'
      oscillator2.frequency.setValueAtTime(250, audioContext.currentTime)
      oscillator2.frequency.exponentialRampToValueAtTime(450, audioContext.currentTime + 0.8)
      oscillator2.frequency.exponentialRampToValueAtTime(380, audioContext.currentTime + 1.5)
      oscillator2.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 2.2)
      oscillator2.frequency.exponentialRampToValueAtTime(220, audioContext.currentTime + 3)

      oscillator3.type = 'sine'
      oscillator3.frequency.setValueAtTime(120, audioContext.currentTime)
      oscillator3.frequency.exponentialRampToValueAtTime(280, audioContext.currentTime + 0.8)
      oscillator3.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 1.5)
      oscillator3.frequency.exponentialRampToValueAtTime(160, audioContext.currentTime + 2.2)
      oscillator3.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 3)

      oscillator4.type = 'square'
      oscillator4.frequency.setValueAtTime(80, audioContext.currentTime)
      oscillator4.frequency.exponentialRampToValueAtTime(150, audioContext.currentTime + 0.8)
      oscillator4.frequency.exponentialRampToValueAtTime(120, audioContext.currentTime + 1.5)
      oscillator4.frequency.exponentialRampToValueAtTime(90, audioContext.currentTime + 2.2)
      oscillator4.frequency.exponentialRampToValueAtTime(60, audioContext.currentTime + 3)

      // Configurar ganancia con envelope más complejo
      gainNode.gain.setValueAtTime(0, audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(0.4, audioContext.currentTime + 0.2)
      gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 1.0)
      gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 1.8)
      gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 2.5)
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 3.2)

      // Conectar nodos
      oscillator1.connect(filterNode)
      oscillator2.connect(filterNode)
      oscillator3.connect(filterNode)
      oscillator4.connect(filterNode)
      filterNode.connect(filterNode2)
      filterNode2.connect(gainNode)
      gainNode.connect(audioContext.destination)

      // Iniciar osciladores
      oscillator1.start(audioContext.currentTime)
      oscillator2.start(audioContext.currentTime)
      oscillator3.start(audioContext.currentTime)
      oscillator4.start(audioContext.currentTime)

      // Detener después de 3.5 segundos
      oscillator1.stop(audioContext.currentTime + 3.5)
      oscillator2.stop(audioContext.currentTime + 3.5)
      oscillator3.stop(audioContext.currentTime + 3.5)
      oscillator4.stop(audioContext.currentTime + 3.5)
    } catch (error) {
      console.log('Error playing eagle sound:', error)
    }
  }

  useEffect(() => {
    // Crear el contexto de audio
    const initializeAudio = () => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        audioContextRef.current = audioContext
      } catch (error) {
        console.log('Audio not supported:', error)
      }
    }

    // Detectar si es una recarga de página
    const isPageReload = performance.navigation?.type === 1 || 
                        (performance.getEntriesByType('navigation')[0] as any)?.type === 'reload'

    // Inicializar audio inmediatamente
    initializeAudio()

    // Función para reproducir sonido
    const playSound = () => {
      if (!isMuted) {
        createRealisticEagleCall()
      }
    }

    // Solo crear el sonido si el usuario ha interactuado con la página
    const handleUserInteraction = () => {
      if (!hasPlayed) {
        playSound()
        setHasPlayed(true)
        
        // Configurar repetición cada 10-20 segundos
        const startRepetition = () => {
          intervalRef.current = window.setInterval(() => {
            if (!isMuted) {
              createRealisticEagleCall()
            }
          }, Math.random() * 10000 + 10000) // Entre 10 y 20 segundos
        }
        
        setTimeout(startRepetition, 3000) // Empezar repetición después del primer sonido
      }
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
    }

    // Si es una recarga, reproducir inmediatamente
    if (isPageReload) {
      playSound()
      setHasPlayed(true)
      
      // Configurar repetición
      const startRepetition = () => {
        intervalRef.current = window.setInterval(() => {
          if (!isMuted) {
            createRealisticEagleCall()
          }
        }, Math.random() * 10000 + 10000) // Entre 10 y 20 segundos
      }
      
      setTimeout(startRepetition, 3000)
    } else {
      // Si es carga inicial, esperar interacción del usuario
      document.addEventListener('click', handleUserInteraction)
      document.addEventListener('keydown', handleUserInteraction)
    }

    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isMuted, hasPlayed])

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (!isMuted && intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  return (
    <div className="audio-controls">
      <button 
        onClick={toggleMute}
        className={`mute-btn ${isMuted ? 'muted' : ''}`}
        title={isMuted ? 'Activar sonido' : 'Silenciar'}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>
  )
}

export default EagleSound
