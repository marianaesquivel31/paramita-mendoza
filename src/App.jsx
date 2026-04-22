import React, { useState, useEffect } from 'react';

function App() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [pagoInfo, setPagoInfo] = useState({ nivel: '', monto: '' });
  const [progreso, setProgreso] = useState(0);

  const KMS_LOGRADOS = 4200;
  const KMS_TOTALES = 20000;
  const PORCENTAJE = (KMS_LOGRADOS / KMS_TOTALES) * 100;

  // Animación del termómetro al cargar
  useEffect(() => {
    const timer = setTimeout(() => setProgreso(PORCENTAJE), 500);
    return () => clearTimeout(timer);
  }, []);

  const abrirPago = (nivel, monto) => {
    setPagoInfo({ nivel, monto });
    setShowCheckout(true);
  };

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: '#2C3E3E', backgroundColor: '#fff' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Lato:wght@300;400;700&display=swap');
        
        :root {
          --primary: #4BA8A2;
          --accent-orange: #F4A340;
          --bg-light: #F0FAF9;
        }

        .btn-accent {
          background: var(--accent-orange);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 4px;
          text-transform: uppercase;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 4px 15px rgba(244, 163, 64, 0.3);
          text-decoration: none;
          display: inline-block;
        }

        .btn-accent:hover {
          background: #E08F2D;
          transform: translateY(-2px);
        }

        .card {
          background: white;
          border: 1px solid #D4E8E7;
          padding: 2.5rem;
          border-radius: 8px;
          text-align: center;
          transition: 0.3s;
        }

        .card-featured {
          border: 2px solid var(--accent-orange);
          background: #FFFAF4;
          transform: scale(1.05);
        }

        .nav-fixed {
          position: fixed;
          top: 0;
          width: 100%;
          padding: 1rem 3rem;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(5px);
          border-bottom: 1px solid #D4E8E7;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="nav-fixed">
        <span style={{ fontFamily: 'Playfair Display', fontWeight: '700', color: '#3A8A85', fontSize: '1.2rem' }}>Centro Paramita Mendoza</span>
        <button onClick={() => abrirPago('General', 'Libre')} style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>SUMAR KM</button>
      </nav>

      {/* HERO SECTION */}
      <section style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #F0FAF9 0%, #EAF2FA 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '8rem 1rem 4rem' }}>
        <div style={{ maxWidth: '800px' }}>
          <span style={{ color: 'var(--primary)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>🪷 Proyecto Mendoza 2025</span>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginTop: '1rem', lineHeight: '1.1' }}>
            De los <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Himalayas</span><br />a los Andes
          </h1>
          <p style={{ margin: '2rem auto', fontSize: '1.2rem', maxWidth: '600px', fontWeight: '300', lineHeight: '1.6' }}>
            Hagamos posible la llegada del Buddha Shakyamuni a los pies de la cordillera. Un refugio para la paz y el estudio del Dharma en Luján de Cuyo.
          </p>
          <button onClick={() => document.getElementById('niveles').scrollIntoView({ behavior: 'smooth' })} className="btn-accent">Quiero participar</button>
        </div>
      </section>

      {/* TERMÓMETRO */}
      <section style={{ padding: '4rem 1rem', textAlign: 'center', borderTop: '1px solid #D4E8E7', borderBottom: '1px solid #D4E8E7' }}>
        <h3 style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px', color: '#7A9898' }}>Km recorridos hacia la meta</h3>
        <div style={{ fontFamily: 'Playfair Display', fontSize: '4rem', fontWeight: '700', color: 'var(--accent-orange)', margin: '1rem 0' }}>
          {KMS_LOGRADOS.toLocaleString('es-AR')} <span style={{ fontSize: '1.5rem' }}>km</span>
        </div>
        <div style={{ maxWidth: '600px', height: '16px', background: '#eee', borderRadius: '20px', margin: '0 auto', overflow: 'hidden' }}>
          <div style={{ width: `${progreso}%`, height: '100%', background: 'linear-gradient(90deg, #F4A340, #FFCC80)', transition: 'width 2s ease-out' }}></div>
        </div>
        <p style={{ marginTop: '1rem', fontWeight: '700' }}>{PORCENTAJE}% completado — Meta: 20.000 km</p>
      </section>

      {/* NIVELES / E-COMMERCE */}
      <section id="niveles" style={{ padding: '6rem 1rem', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Playfair Display', textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>Kilómetros de Mérito</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          
          <div className="card">
            <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem' }}>Compasión</h3>
            <p style={{ color: 'var(--accent-orange)', fontWeight: '700', margin: '1.5rem 0', fontSize: '1.5rem' }}>$5.000 ARS</p>
            <p style={{ marginBottom: '2rem', color: '#7A9898' }}>Tu semilla inicial para este centro de retiro.</p>
            <button onClick={() => abrirPago('Compasión', '$5.000')} className="btn-accent">Elegir</button>
          </div>

          <div className="card card-featured">
            <div style={{ background: 'var(--accent-orange)', color: 'white', padding: '0.3rem', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '0 0 8px 8px', width: '150px', margin: '-2.5rem auto 1.5rem' }}>MÁS ELEGIDO</div>
            <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem' }}>Mérito</h3>
            <p style={{ color: 'var(--accent-orange)', fontWeight: '700', margin: '1.5rem 0', fontSize: '1.5rem' }}>$15.000 ARS</p>
            <p style={{ marginBottom: '2rem', color: '#7A9898' }}>Un aporte vital para la construcción del altar.</p>
            <button onClick={() => abrirPago('Mérito', '$15.000')} className="btn-accent">Elegir</button>
          </div>

          <div className="card">
            <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem' }}>Sabiduría</h3>
            <p style={{ color: 'var(--accent-orange)', fontWeight: '700', margin: '1.5rem 0', fontSize: '1.5rem' }}>$50.000 ARS</p>
            <p style={{ marginBottom: '2rem', color: '#7A9898' }}>Conviértete en patrocinador del linaje.</p>
            <button onClick={() => abrirPago('Sabiduría', '$50.000')} className="btn-accent">Elegir</button>
          </div>

        </div>
      </section>

      {/* MODAL DE CHECKOUT (PASARELA) */}
      {showCheckout && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(44, 62, 62, 0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000, padding: '1rem' }}>
          <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', maxWidth: '450px', width: '100%', textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
            <h3 style={{ fontFamily: 'Playfair Display', fontSize: '2rem' }}>Nivel {pagoInfo.nivel}</h3>
            <p style={{ margin: '1rem 0', color: '#7A9898' }}>Monto a contribuir: <strong>{pagoInfo.monto}</strong></p>
            
            <div style={{ textAlign: 'left', margin: '2rem 0' }}>
              <input type="text" placeholder="Nombre en la tarjeta" style={{ width: '100%', padding: '1rem', marginBottom: '1rem', border: '1px solid #D4E8E7', borderRadius: '4px' }} />
              <input type="text" placeholder="Número de tarjeta" style={{ width: '100%', padding: '1rem', border: '1px solid #D4E8E7', borderRadius: '4px' }} />
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <input type="text" placeholder="MM/AA" style={{ width: '50%', padding: '1rem', border: '1px solid #D4E8E7', borderRadius: '4px' }} />
                <input type="text" placeholder="CVC" style={{ width: '50%', padding: '1rem', border: '1px solid #D4E8E7', borderRadius: '4px' }} />
              </div>
            </div>

            <button onClick={() => { alert('Redirigiendo a Mercado Pago...'); setShowCheckout(false); }} style={{ background: '#009EE3', color: 'white', width: '100%', padding: '1.2rem', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>PAGAR AHORA</button>
            <button onClick={() => setShowCheckout(false)} style={{ background: 'none', border: 'none', marginTop: '1.5rem', color: 'var(--primary)', textDecoration: 'underline', cursor: 'pointer' }}>Volver atrás</button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ background: '#2C3E3E', color: 'white', padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display', color: 'var(--accent-orange)' }}>Centro Paramita Mendoza</h2>
        <p style={{ opacity: 0.6, marginTop: '1rem' }}>Fundación Paramita Argentina · Luján de Cuyo, Mendoza.</p>
        <div style={{ marginTop: '2rem', fontSize: '1.5rem' }}>🪷</div>
      </footer>
    </div>
  );
}

export default App;
