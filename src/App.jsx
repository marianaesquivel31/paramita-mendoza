import React, { useState, useEffect } from 'react';

function App() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [pagoInfo, setPagoInfo] = useState({ nivel: '', monto: '', descripcion: '' });
  
  // Datos para el contador y termómetro
  const KMS = 4200;
  const TOTAL = 20000;
  const DIAS = 45; // Puedes ajustar este valor
  const PCT = (KMS / TOTAL * 100).toFixed(1);

  // Lógica para abrir las preguntas frecuentes (FAQ)
  const toggleFaq = (e) => {
    const item = e.currentTarget.parentElement;
    item.classList.toggle('open');
  };

  const abrirPago = (nivel, monto, desc) => {
    setPagoInfo({ nivel, monto, descripcion: desc });
    setShowCheckout(true);
  };

  return (
    <div style={{ color: '#2C3E3E' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Lato:wght@300;400;700&display=swap');
        
        :root {
          --teal: #4BA8A2; --teal-dark: #3A8A85; --teal-light: #7FC4BF;
          --teal-pale: #E6F5F4; --teal-bg: #F0FAF9; --blue: #3B6FA0;
          --blue-light: #6B9FC8; --blue-pale: #EAF2FA; --white: #FFFFFF;
          --border: #D4E8E7; --text: #2C3E3E; --text-mid: #4A6060;
          --accent-orange: #F4A340;
        }

        body { font-family: 'Lato', sans-serif; margin: 0; overflow-x: hidden; }
        h1, h2, h3 { font-family: 'Playfair Display', serif; font-weight: 500; }
        p { line-height: 1.8; font-weight: 300; }

        /* NAV */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 1rem 3rem; background: rgba(255,255,255,0.97);
          backdrop-filter: blur(8px); border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
        }

        /* BOTONES */
        .btn-teal {
          display: inline-block; background: var(--teal); color: white;
          padding: 0.9rem 2.4rem; border-radius: 3px; font-weight: 700;
          text-transform: uppercase; text-decoration: none; cursor: pointer; border: none;
        }
        .btn-accent {
          background: var(--accent-orange); color: white; padding: 1rem 2rem;
          border-radius: 4px; font-weight: 700; text-transform: uppercase; border: none; cursor: pointer;
        }

        /* HERO */
        .hero {
          min-height: 100vh; background: linear-gradient(160deg, var(--teal-bg) 0%, var(--blue-pale) 55%, var(--white) 100%);
          display: flex; align-items: center; justify-content: center; text-align: center; padding: 8rem 2rem 5rem;
        }

        /* THERMO */
        .thermo-wrap { background: white; border-top: 1px solid var(--border); padding: 3.5rem 2rem; text-align: center; }
        .thermo-track { max-width: 560px; margin: 1.6rem auto; height: 10px; background: var(--teal-pale); border-radius: 999px; overflow: hidden; }
        .thermo-fill { height: 100%; background: linear-gradient(90deg, var(--teal-light), var(--teal)); transition: width 2s ease-out; }

        /* MAPA */
        .map-section { background: var(--teal-bg); padding: 3rem 2rem; text-align: center; border-bottom: 1px solid var(--border); }
        .map-journey { display: flex; align-items: center; justify-content: center; gap: 1.5rem; max-width: 580px; margin: 1.5rem auto 0; }
        .map-line { flex: 1; height: 2px; background: linear-gradient(90deg, var(--teal-light), var(--blue-light)); position: relative; }

        /* CARDS */
        .cards-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 3rem; }
        .card-info { background: #F8FCFC; border: 1px solid var(--border); border-top: 4px solid var(--teal); padding: 2rem; border-radius: 6px; }

        /* FAQ */
        .faq-item { border-bottom: 1px solid var(--border); text-align: left; }
        .faq-q { font-family: 'Playfair Display', serif; padding: 1.4rem 0; cursor: pointer; display: flex; justify-content: space-between; }
        .faq-a { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; color: var(--text-mid); }
        .faq-item.open .faq-a { max-height: 200px; padding-bottom: 1rem; }

        @media(max-width: 768px) { nav { padding: 1rem; } }
      `}</style>

      {/* NAV */}
      <nav>
        <span style={{ fontFamily: 'Playfair Display', color: 'var(--teal-dark)', fontWeight: '700' }}>Centro Paramita Mendoza</span>
        <button onClick={() => document.getElementById('donaciones').scrollIntoView({behavior:'smooth'})} className="btn-teal" style={{padding: '0.5rem 1rem', fontSize: '0.8rem'}}>Sumar kilómetros →</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div style={{ maxWidth: '820px' }}>
          <span style={{ color: 'var(--teal)', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}>🪷 Campaña de recaudación · 2025</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', margin: '1.5rem 0' }}>De los <span style={{color: 'var(--teal)', fontStyle: 'italic'}}>Himalayas</span> a los Andes</h1>
          <p style={{ color: 'var(--text-mid)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>El camino de la estatua del Buddha Shakyamuni desde Nepal hacia Mendoza. Juntos abriremos las puertas del Centro Paramita Mendoza.</p>
          <button onClick={() => document.getElementById('donaciones').scrollIntoView({behavior:'smooth'})} className="btn-accent">Suma tus kilómetros al proyecto →</button>
        </div>
      </section>

      {/* TERMÓMETRO */}
      <div className="thermo-wrap">
        <p style={{ textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--teal)' }}>Kilómetros del viaje recorridos</p>
        <div style={{ fontFamily: 'Playfair Display', fontSize: '4rem', color: 'var(--teal-dark)' }}>{KMS.toLocaleString('es-AR')} <sub style={{fontSize: '1rem'}}>km</sub></div>
        <div className="thermo-track">
          <div className="thermo-fill" style={{ width: `${PCT}%` }}></div>
        </div>
        <p style={{ color: 'var(--text-light)' }}><strong>{PCT}%</strong> completado · Recaudados de 20.000 km totales</p>
      </div>

      {/* MAPA */}
      <div className="map-section">
        <div className="map-journey">
          <div style={{textAlign: 'center'}}><strong>Nepal</strong></div>
          <div className="map-line"></div>
          <div style={{textAlign: 'center'}}><strong>Mendoza</strong></div>
        </div>
      </div>

      {/* RESUMEN */}
      <section style={{ padding: '5rem 2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem' }}>El sueño que construiremos juntos</h2>
        <div className="cards-3">
          <div className="card-info">
            <h3>¿Qué es el CPM?</h3>
            <p>Un espacio físico para la práctica regular, retiros y encuentros de la Sangha.</p>
          </div>
          <div className="card-info">
            <h3>¿Dónde está?</h3>
            <p>En Luján de Cuyo, Mendoza. Una casa con jardín ideal para nuestra vida espiritual.</p>
          </div>
          <div className="card-info">
            <h3>Acceso</h3>
            <p>Un oasis para cualquier persona interesada en la meditación y el estudio filosófico.</p>
          </div>
        </div>
      </section>

      {/* NIVELES DE DONACIÓN */}
      <section id="donaciones" style={{ padding: '5rem 2rem', backgroundColor: 'var(--teal-bg)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>"Kilómetros de Generosidad"</h2>
        <div className="cards-3" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="card-info" style={{background: 'white'}}>
            <h3 style={{fontFamily: 'Playfair Display'}}>Compasión</h3>
            <p style={{color: 'var(--teal)', fontWeight: 'bold'}}>5 a 100 km</p>
            <p style={{fontSize: '0.8rem', margin: '1rem 0'}}>AR$ 5.000 - $100.000</p>
            <button onClick={() => abrirPago('Compasión', 'AR$ 5.000+', 'Kilómetros de Compasión')} className="btn-accent">Elegir</button>
          </div>
          <div className="card-info" style={{background: 'white', border: '2px solid var(--teal)' }}>
            <h3 style={{fontFamily: 'Playfair Display'}}>Mérito</h3>
            <p style={{color: 'var(--teal)', fontWeight: 'bold'}}>101 a 500 km</p>
            <p style={{fontSize: '0.8rem', margin: '1rem 0'}}>AR$ 101.000 - $500.000</p>
            <button onClick={() => abrirPago('Mérito', 'AR$ 101.000+', 'Kilómetros de Mérito')} className="btn-accent">Elegir</button>
          </div>
          <div className="card-info" style={{background: 'white'}}>
            <h3 style={{fontFamily: 'Playfair Display'}}>Sabiduría</h3>
            <p style={{color: 'var(--teal)', fontWeight: 'bold'}}>501 a 5.000 km</p>
            <p style={{fontSize: '0.8rem', margin: '1rem 0'}}>AR$ 501.000+</p>
            <button onClick={() => abrirPago('Sabiduría', 'AR$ 501.000+', 'Kilómetros de Sabiduría')} className="btn-accent">Elegir</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', maxWidth: '700px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Preguntas Frecuentes</h2>
        <div className="faq-item">
          <div className="faq-q" onClick={toggleFaq}>¿El dinero pasa por la Fundación? <span>+</span></div>
          <div className="faq-a">Sí, la campaña está bajo el dominio de la Fundación Paramita Argentina para total transparencia.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q" onClick={toggleFaq}>¿Puedo donar en especies? <span>+</span></div>
          <div className="faq-a">Sí, existe una campaña local en Mendoza para insumos y equipamiento de la casa.</div>
        </div>
      </section>

      {/* CIERRE */}
      <footer style={{ background: 'var(--text)', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--teal-light)', marginBottom: '1rem' }}>Centro Paramita Mendoza</h2>
        <p style={{ opacity: 0.6 }}>Fundación Paramita Argentina · Luján de Cuyo</p>
        <p style={{ marginTop: '2rem' }}>🪷 Que la Rueda del Dharma siga girando 🪷</p>
      </footer>

      {/* MODAL DE PAGO */}
      {showCheckout && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div style={{ background: 'white', padding: '2.5rem', borderRadius: '12px', maxWidth: '400px', width: '90%', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'Playfair Display' }}>{pagoInfo.descripcion}</h3>
            <p style={{ margin: '1rem 0', color: '#7A9898' }}>Rango: {pagoInfo.monto}</p>
            <button onClick={() => { alert('Redirigiendo a Mercado Pago...'); setShowCheckout(false); }} className="btn-teal" style={{width: '100%', border: 'none'}}>PAGAR AHORA</button>
            <button onClick={() => setShowCheckout(false)} style={{ background: 'none', border: 'none', marginTop: '1.5rem', color: 'var(--teal)', textDecoration: 'underline', cursor: 'pointer' }}>Volver atrás</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
