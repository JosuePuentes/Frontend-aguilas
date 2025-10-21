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
                    src="/images/claws/AguilasLogo2022-scaled.png"
                    alt="Águilas del Zulia"
                    className="logo-image"
                  />
                </div>
                <ul className="nav-links">
                  <li><a href="#home" className="nav-link active">
                    <span className="nav-icon">🏠</span>
                    <span className="nav-text">Home</span>
                  </a></li>
                  <li><a href="#noticias" className="nav-link">
                    <span className="nav-icon">📰</span>
                    <span className="nav-text">Noticias</span>
                  </a></li>
                  <li><a href="#equipo" className="nav-link">
                    <span className="nav-icon">🧍</span>
                    <span className="nav-text">Equipo</span>
                  </a></li>
                  <li><a href="#tienda" className="nav-link">
                    <span className="nav-icon">👕</span>
                    <span className="nav-text">Tienda</span>
                  </a></li>
                  <li><a href="#galeria" className="nav-link">
                    <span className="nav-icon">🎫</span>
                    <span className="nav-text">Calendario</span>
                  </a></li>
                  <li><a href="#estadisticas" className="nav-link">
                    <span className="nav-icon">⚾</span>
                    <span className="nav-text">Estadísticas</span>
                  </a></li>
                </ul>
            <button className="login-btn">Iniciar Sesión</button>
          </nav>
        </div>
      </header>

      {/* Player Banners */}
      <PlayerBanners />

      {/* Home Section */}
      <section id="home" className="section">
        <div className="container">
          <h2 className="section-title">Play <span className="accent">Ball</span></h2>
          <div className="welcome-content">
            <p>Tu destino para noticias, equipo, tienda y estadísticas del mejor equipo de béisbol.</p>
          </div>
        </div>
      </section>

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

      {/* Roster Section */}
      <section id="equipo" className="section">
        <div className="container">
          <h2 className="section-title">Nuestro <span className="accent">Roster</span></h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="player-avatar">
                <span>J1</span>
              </div>
              <h3>Jugador 1</h3>
              <p>Lanzador</p>
            </div>
            <div className="team-card">
              <div className="player-avatar">
                <span>J2</span>
              </div>
              <h3>Jugador 2</h3>
              <p>Receptor</p>
            </div>
            <div className="team-card">
              <div className="player-avatar">
                <span>J3</span>
              </div>
              <h3>Jugador 3</h3>
              <p>Primera Base</p>
            </div>
            <div className="team-card">
              <div className="player-avatar">
                <span>J4</span>
              </div>
              <h3>Jugador 4</h3>
              <p>Campo Corto</p>
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

      {/* Calendario Section */}
      <section id="galeria" className="section">
        <div className="container">
          <h2 className="section-title">Calendario de <span className="accent">Partidos</span></h2>
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

      {/* Estadísticas Section */}
      <section id="estadisticas" className="section">
        <div className="container">
          <h2 className="section-title">Estadísticas del <span className="accent">Equipo</span></h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>🏆 Victorias</h3>
              <p className="stat-number">15</p>
            </div>
            <div className="stat-card">
              <h3>⚾ Promedio</h3>
              <p className="stat-number">.285</p>
            </div>
            <div className="stat-card">
              <h3>🎯 ERA</h3>
              <p className="stat-number">3.45</p>
            </div>
            <div className="stat-card">
              <h3>🔥 Home Runs</h3>
              <p className="stat-number">42</p>
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
