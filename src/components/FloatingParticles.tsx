import React, { useEffect, useState } from 'react'

const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10
    }))
    setParticles(newParticles)
  }, [])

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </>
  )
}

export default FloatingParticles
