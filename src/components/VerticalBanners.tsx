import React from 'react'

const VerticalBanners: React.FC = () => {
  return (
    <div className="vertical-banners-container">
      <div className="vertical-banner banner-1">
        <div className="banner-content">
          <h3>Noticias</h3>
          <p>Últimas noticias del equipo</p>
        </div>
      </div>
      
      <div className="vertical-banner banner-2">
        <div className="banner-content">
          <h3>Equipo</h3>
          <p>Conoce a nuestros jugadores</p>
        </div>
      </div>
      
      <div className="vertical-banner banner-3">
        <div className="banner-content">
          <h3>Tienda</h3>
          <p>Productos oficiales</p>
        </div>
      </div>
    </div>
  )
}

export default VerticalBanners
