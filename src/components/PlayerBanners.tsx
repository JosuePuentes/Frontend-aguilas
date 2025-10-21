import React from 'react'

const PlayerBanners: React.FC = () => {
  return (
    <div className="player-banners-container">
      <div className="player-banner banner-1">
        <div className="player-photo">
          <div className="placeholder-photo">
            <span>JUGADOR 1</span>
          </div>
        </div>
        <div className="player-info">
          <h3>Nombre del Jugador</h3>
          <p>Posición</p>
        </div>
      </div>
      
      <div className="player-banner banner-2">
        <div className="player-photo">
          <div className="placeholder-photo">
            <span>JUGADOR 2</span>
          </div>
        </div>
        <div className="player-info">
          <h3>Nombre del Jugador</h3>
          <p>Posición</p>
        </div>
      </div>
      
      <div className="player-banner banner-3">
        <div className="player-photo">
          <div className="placeholder-photo">
            <span>JUGADOR 3</span>
          </div>
        </div>
        <div className="player-info">
          <h3>Nombre del Jugador</h3>
          <p>Posición</p>
        </div>
      </div>
    </div>
  )
}

export default PlayerBanners
