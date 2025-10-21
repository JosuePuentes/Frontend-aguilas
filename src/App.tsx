import React from 'react'
import './styles/index.css'
import PlayerBanners from './components/PlayerBanners'

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
              <nav className="nav">
                <div className="logo">
                  <img 
                    src="/images/claws/aguilas_del_zulia.png logo.png" 
                    alt="Águilas del Zulia" 
                    className="logo-image"
                  />
                </div>
            <ul className="nav-links">
              <li><a href="#noticias">Noticias</a></li>
              <li><a href="#equipo">Equipo</a></li>
              <li><a href="#tienda">Tienda</a></li>
              <li><a href="#galeria">Galería</a></li>
            </ul>
            <button className="login-btn">Iniciar Sesión</button>
          </nav>
        </div>
      </header>

      {/* Player Banners */}
      <PlayerBanners />

      {/* Noticias Section */}
      <section id="noticias" className="section">
        <div className="container">
          <h2 className="section-title">Últimas <span className="accent">Noticias</span></h2>
          <div className="news-grid">
            <div className="news-card">
              <h3>Nueva Temporada</h3>
              <p>Descubre todas las novedades de esta nueva temporada con nuestro equipo de Águilas.</p>
            </div>
            <div className="news-card">
              <h3>Entrenamientos</h3>
              <p>Los entrenamientos continúan con gran intensidad y dedicación por parte de todo el equipo.</p>
            </div>
            <div className="news-card">
              <h3>Próximos Partidos</h3>
              <p>No te pierdas los próximos encuentros de nuestro equipo en el estadio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section id="equipo" className="section">
        <div className="container">
          <h2 className="section-title">Nuestro <span className="accent">Equipo</span></h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="player-avatar">
                <span>J1</span>
              </div>
              <h3>Jugador 1</h3>
              <p>Delantero</p>
            </div>
            <div className="team-card">
              <div className="player-avatar">
                <span>J2</span>
              </div>
              <h3>Jugador 2</h3>
              <p>Mediocampista</p>
            </div>
            <div className="team-card">
              <div className="player-avatar">
                <span>J3</span>
              </div>
              <h3>Jugador 3</h3>
              <p>Defensor</p>
            </div>
            <div className="team-card">
              <div className="player-avatar">
                <span>J4</span>
              </div>
              <h3>Jugador 4</h3>
              <p>Portero</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tienda Section */}
      <section id="tienda" className="section">
        <div className="container">
          <h2 className="section-title">Nuestra <span className="accent">Tienda</span></h2>
          <div className="shop-grid">
            <div className="product-card">
              <div style={{width: '100%', height: '200px', backgroundColor: '#ff6b35', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: '2rem', fontWeight: 'bold'}}>
                CAMISETA
              </div>
              <div className="product-info">
                <h3>Camiseta Oficial</h3>
                <p>$25.000</p>
              </div>
            </div>
            <div className="product-card">
              <div style={{width: '100%', height: '200px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff6b35', fontSize: '2rem'}}>
                GORRA
              </div>
              <div className="product-info">
                <h3>Gorra Oficial</h3>
                <p>$15.000</p>
              </div>
            </div>
            <div className="product-card">
              <div style={{width: '100%', height: '200px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff6b35', fontSize: '2rem'}}>
                BUFANDA
              </div>
              <div className="product-info">
                <h3>Bufanda Oficial</h3>
                <p>$12.000</p>
              </div>
            </div>
            <div className="product-card">
              <div style={{width: '100%', height: '200px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff6b35', fontSize: '2rem'}}>
                BALÓN
              </div>
              <div className="product-info">
                <h3>Balón Oficial</h3>
                <p>$35.000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className="section">
        <div className="container">
          <h2 className="section-title">Galería de <span className="accent">Fotos</span></h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div style={{width: '100%', height: '200px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff6b35', fontSize: '1.5rem'}}>
                Foto 1
              </div>
            </div>
            <div className="gallery-item">
              <div style={{width: '100%', height: '200px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff6b35', fontSize: '1.5rem'}}>
                Foto 2
              </div>
            </div>
            <div className="gallery-item">
              <div style={{width: '100%', height: '200px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff6b35', fontSize: '1.5rem'}}>
                Foto 3
              </div>
            </div>
            <div className="gallery-item">
              <div style={{width: '100%', height: '200px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff6b35', fontSize: '1.5rem'}}>
                Foto 4
              </div>
            </div>
            <div className="gallery-item">
              <div style={{width: '100%', height: '200px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff6b35', fontSize: '1.5rem'}}>
                Foto 5
              </div>
            </div>
            <div className="gallery-item">
              <div style={{width: '100%', height: '200px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff6b35', fontSize: '1.5rem'}}>
                Foto 6
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Águilas. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
