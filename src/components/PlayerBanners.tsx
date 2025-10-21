import React, { useState } from 'react'

const PlayerBanners: React.FC = () => {
  const [flippedBanners, setFlippedBanners] = useState<number[]>([])

  const handleBannerClick = (index: number) => {
    setFlippedBanners(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const players = [
    { 
      name: 'Carlos Mendoza', 
      position: 'Lanzador', 
      stats: ['ERA: 2.45', 'Strikeouts: 120', 'Partidos: 25'],
      backInfo: 'Lanzador estrella con más de 5 años de experiencia en la liga profesional'
    },
    { 
      name: 'Miguel Torres', 
      position: 'Receptor', 
      stats: ['Promedio: .285', 'Home Runs: 15', 'Partidos: 28'],
      backInfo: 'Receptor líder del equipo, conocido por su excelente trabajo detrás del plato'
    },
    { 
      name: 'Diego Silva', 
      position: 'Primera Base', 
      stats: ['Promedio: .320', 'RBI: 45', 'Partidos: 30'],
      backInfo: 'Primera base con gran poder ofensivo y defensa sólida en la esquina caliente'
    }
  ]

  return (
    <div className="player-banners-container">
      {players.map((player, index) => (
        <div 
          key={index}
          className={`player-banner ${flippedBanners.includes(index) ? 'flipped' : ''}`}
          onClick={() => handleBannerClick(index)}
        >
          {/* Cara frontal */}
          <div className="banner-front">
            <div className="player-photo">
              <div className="placeholder-photo">
                <span>JUGADOR {index + 1}</span>
              </div>
            </div>
            <div className="player-info">
              <h3>{player.name}</h3>
              <p>{player.position}</p>
            </div>
          </div>

              {/* Cara trasera */}
              <div className="banner-back">
                <h3>Información del Jugador</h3>
                <p className="player-description">{player.backInfo}</p>
                <div className="achievements">
                  <div className="achievement-item">⭐ Jugador Estrella</div>
                  <div className="achievement-item">🏆 Líder del Equipo</div>
                  <div className="achievement-item">⚾ Experiencia Profesional</div>
                </div>
              </div>
        </div>
      ))}
    </div>
  )
}

export default PlayerBanners
