import React, { useState, useEffect } from 'react';

function App() {
  const [progreso, setProgreso] = useState(0);

  const KMS = 4200;
  const TOTAL = 20000;
  const PCT = (KMS / TOTAL * 100).toFixed(1);

  useEffect(() => {
    const timer = setTimeout(() => setProgreso(PCT), 500);
    return () => clearTimeout(timer);
  }, [PCT]);

  return (
    <div style={{ color: '#2C3E3E', backgroundColor: '#FFFFFF' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap');
        
        :root {
          --primary-blue: #005596;
          --light-blue: #00AEEF;
          --teal: #4BA8A2;
          --accent-orange: #F4A340;
          --text-dark: #1A2B2B;
          --border: #D4E8E7;
        }

        body { font-family: 'Lato', sans-serif; margin: 0; }
        h1, h2, h3 { font-family: 'Playfair Display', serif; }
        
        /* LOGO INSTITUCIONAL LIMPIO */
        .brand-container { text-align: center; line-height: 1; }
        .brand-logo-top { 
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--primary-blue);
          letter-spacing: -0.02em;
        }
        .brand-logo-bottom {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--text-dark);
          text-transform: none;
          margin-top: 2px;
        }

        /* NAVEGACIÓN */
        nav {
          position: fixed; top: 0; width: 100%; 
          padding: 1rem 3rem; background: rgba(255,255,255,0.98); 
          border-bottom: 1px solid var(--border);
          display: flex; justifyContent: space-between; alignItems: center; z-index: 1000;
        }

        .btn-cta { 
          background: var(--primary-blue); color: white; 
          padding: 0.7rem 1.6rem; border-radius: 4px; 
          font-weight: 700; text-transform: uppercase; border: none; 
          cursor: pointer; font-size: 0.8rem; text-decoration: none;
        }

        /* SECCIÓN HERO */
        .hero {
          min-height: 90vh;
          background: linear-gradient(160deg, #F0FAF9 0%, #EAF2FA 100%);
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 10rem 1rem 5rem;
        }

        .hero h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); margin: 1.5rem 0; font-weight: 500; }
        .hero h1 span { color: var(--light-blue); font-style: italic; }

        /* TERMÓMETRO */
        .thermo-section { padding: 5rem 1rem; text-align: center; border-top: 1px solid var(--border); }
        .thermo-number { font-family: 'Playfair Display'; font-size: 5rem; color: var(--primary-blue); font-weight: 700; }
        .thermo-bar-bg { max-width: 600px; height: 12px; background: #E0E7E7; border-radius: 10px; margin: 2rem auto; overflow: hidden; }
        .thermo-bar-fill { height: 100%; background: linear-gradient(90deg, var(--primary-blue), var(--light-blue)); transition: width 2s ease-out; }

        /* TARJETAS INFO */
        .info-grid { 
          display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
          gap: 2rem; max-width: 1100px; margin: 4rem auto; 
        }
        .info-card { 
          background: #F8FCFC; border: 1px solid var(--border); 
          border-top: 5px solid var(--primary-blue); padding: 3rem 2rem; 
          border-radius: 0 0 8px 8px; text-align: left;
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="brand-container">
          <span className="brand-logo-top">Centro</span>
          <span className="brand-logo-bottom">Paramita Mendoza</span>
        </div>
        <a href="#donar" className="btn-cta">Sumar km</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div style={{ maxWidth: '900px' }}>
          <div style={{ color: var(--primary-blue), fontWeight: '700', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem' }}>
            Campaña de Recaudación 2025
          </div>
          <h1>De los <span>Himalayas</span> <br /> a los Andes</h1>
          <p style={{ fontSize: '1.2rem', color: '#4A6060', maxWidth: '700px', margin: '2rem auto' }}>
            Acompaña el camino de la estatua del Buddha Shakyamuni desde Nepal hasta Mendoza. Juntos abriremos las puertas de nuestro espacio de práctica.
          </p>
          <a href="#donar" className="btn-cta" style={{ padding: '1.2rem 3rem', fontSize: '1rem', background: 'var(--accent-orange)' }}>
            Quiero Participar
          </a>
        </div>
      </section>

      {/* TERMÓMETRO */}
      <section className="thermo-section">
        <div className="thermo-number">{KMS.toLocaleString('es-AR')} <sub style={{fontSize: '1.2rem'}}>km</sub></div>
        <div className="thermo-bar-bg">
          <div className="thermo-bar-fill" style={{ width: `${progreso}%` }}></div>
        </div>
        <p style={{ fontSize: '1.1rem' }}>Recaudado: <strong>{PCT}%</strong> de la meta total (20.000 km)</p>
      </section>

      {/* SECCIÓN RESUMEN */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.8rem' }}>El sueño que construiremos juntos</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>¿Qué es el CPM?</h3>
            <p>Es nuestro punto de encuentro físico, un lugar para la práctica regular, retiros y eventos especiales que busca una integración más profunda de la Sangha.</p>
          </div>
          <div className="info-card">
            <h3>¿Dónde está?</h3>
            <p>Ubicado en <strong>Luján de Cuyo, Mendoza</strong>. Una hermosa casa con jardín ideal para nuestras prácticas, en un entorno propicio para la vida espiritual.</p>
          </div>
          <div className="info-card">
            <h3>¿Quiénes acceden?</h3>
            <p>Un oasis abierto a cualquier persona interesada en explorar la meditación, el estudio filosófico y la calma interior en medio de la urbe.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#1A2B2B', color: 'white', padding: '5rem 1rem', textAlign: 'center' }}>
        <div className="brand-container" style={{ marginBottom: '2rem' }}>
          <span className="brand-logo-top" style={{ color: 'white' }}>Centro</span>
          <span className="brand-logo-bottom" style={{ color: 'var(--light-blue)' }}>Paramita Mendoza</span>
        </div>
        <p style={{ opacity: 0.6 }}>Fundación Paramita Argentina · Luján de Cuyo, Mendoza</p>
      </footer>
    </div>
  );
}

export default App;
