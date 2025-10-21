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
    { name: 'Carlos Mendoza', position: 'Delantero', stats: ['Goles: 15', 'Asistencias: 8', 'Partidos: 25'] },
    { name: 'Miguel Torres', position: 'Mediocampista', stats: ['Pases: 450', 'Recuperaciones: 120', 'Partidos: 28'] },
    { name: 'Diego Silva', position: 'Defensor', stats: ['Entradas: 85', 'Despejes: 200', 'Partidos: 30'] }
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
            <h3>{player.name}</h3>
            <p>{player.position}</p>
            <div className="stats">
              {player.stats.map((stat, statIndex) => (
                <div key={statIndex} className="stat-item">
                  {stat}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PlayerBanners
