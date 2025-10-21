import React, { useEffect, useRef, useState } from 'react'

const EagleSound: React.FC = () => {
  const audioContextRef = useRef<AudioContext | null>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)

  // Función para crear el sonido de águila
  const createEagleCall = () => {
    if (!audioContextRef.current || isMuted) return

    try {
      const audioContext = audioContextRef.current
      
      // Crear osciladores para el sonido de águila
      const oscillator1 = audioContext.createOscillator()
      const oscillator2 = audioContext.createOscillator()
      const oscillator3 = audioContext.createOscillator()
      
      const gainNode = audioContext.createGain()
      const filterNode = audioContext.createBiquadFilter()

      // Configurar filtro para sonido más natural
      filterNode.type = 'bandpass'
      filterNode.frequency.value = 800
      filterNode.Q.value = 1

      // Configurar osciladores para crear un sonido de águila
      oscillator1.type = 'sawtooth'
      oscillator1.frequency.setValueAtTime(200, audioContext.currentTime)
      oscillator1.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.5)
      oscillator1.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 1)

      oscillator2.type = 'triangle'
      oscillator2.frequency.setValueAtTime(300, audioContext.currentTime)
      oscillator2.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.5)
      oscillator2.frequency.exponentialRampToValueAtTime(450, audioContext.currentTime + 1)

      oscillator3.type = 'sine'
      oscillator3.frequency.setValueAtTime(150, audioContext.currentTime)
      oscillator3.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.5)
      oscillator3.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 1)

      // Configurar ganancia con envelope
      gainNode.gain.setValueAtTime(0, audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1)
      gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.8)
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1.2)

      // Conectar nodos
      oscillator1.connect(filterNode)
      oscillator2.connect(filterNode)
      oscillator3.connect(filterNode)
      filterNode.connect(gainNode)
      gainNode.connect(audioContext.destination)

      // Iniciar osciladores
      oscillator1.start(audioContext.currentTime)
      oscillator2.start(audioContext.currentTime)
      oscillator3.start(audioContext.currentTime)

      // Detener después de 1.5 segundos
      oscillator1.stop(audioContext.currentTime + 1.5)
      oscillator2.stop(audioContext.currentTime + 1.5)
      oscillator3.stop(audioContext.currentTime + 1.5)
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

    // Reproducir sonido después de un pequeño delay
    const playSound = () => {
      if (!isMuted) {
        setTimeout(() => {
          createEagleCall()
          setHasPlayed(true)
        }, isPageReload ? 500 : 1000) // Sonido más rápido en recarga
      }
    }

    // Solo crear el sonido si el usuario ha interactuado con la página
    const handleUserInteraction = () => {
      if (!hasPlayed) {
        playSound()
      }
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
    }

    // Si es una recarga, reproducir inmediatamente
    if (isPageReload) {
      playSound()
    } else {
      // Si es carga inicial, esperar interacción del usuario
      document.addEventListener('click', handleUserInteraction)
      document.addEventListener('keydown', handleUserInteraction)
    }

    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
    }
  }, [isMuted, hasPlayed])

  const toggleMute = () => {
    setIsMuted(!isMuted)
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
