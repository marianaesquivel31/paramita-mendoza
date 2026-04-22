import React, { useState, useEffect } from 'react';

function App() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [pagoInfo, setPagoInfo] = useState({ nivel: '', monto: '', descripcion: '' });
  const [progreso, setProgreso] = useState(0);

  const KMS = 4200;
  const TOTAL = 20000;
  const DIAS = 45;
  const PCT = (KMS / TOTAL * 100).toFixed(1);

  useEffect(() => {
    const timer = setTimeout(() => setProgreso(PCT), 500);
    return () => clearTimeout(timer);
  }, [PCT]);

  const toggleFaq = (e) => {
    e.currentTarget.parentElement.classList.toggle('open');
  };

  const abrirPago = (nivel, monto, desc) => {
    setPagoInfo({ nivel, monto, descripcion: desc });
    setShowCheckout(true);
  };

  return (
    <div style={{ color: '#2C3E3E', backgroundColor: '#FFFFFF' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Lato:wght@300;400;700&display=swap');
        
        :root {
          --teal: #4BA8A2; --teal-dark: #3A8A85; --teal-light: #7FC4BF;
          --teal-pale: #E6F5F4; --teal-bg: #F0FAF9; --blue: #3B6FA0;
          --blue-pale: #EAF2FA; --border: #D4E8E7; --text-mid: #4A6060;
          --accent-orange: #F4A340;
        }

        body { font-family: 'Lato', sans-serif; margin: 0; }
        h1, h2, h3 { font-family: 'Playfair Display', serif; }
        
        .nav-cta { background: var(--teal); color: white; padding: 0.6rem 1.5rem; border-radius: 3px; font-weight: 700; text-transform: uppercase; border: none; cursor: pointer; font-size: 0.8rem; }
        
        /* VIDEO PLAYER ESTILO DISEÑO */
        .hero-video-wrap {
          max-width: 620px; margin: 0 auto 3rem; aspect-ratio: 16/9;
          background: linear-gradient(135deg, var(--teal-pale) 0%, var(--blue-pale) 100%);
          border: 2px solid var(--border); border-radius: 8px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 1rem; cursor: pointer; transition: 0.3s;
        }
        .play-btn {
          width: 68px; height: 68px; border-radius: 50%; background: var(--teal);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 24px rgba(75,168,162,0.3);
        }
        .play-btn::after { content: ''; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 18px solid white; margin-left: 5px; }

        /* CARDS RESUMEN */
        .cards-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 3rem; }
        .card-info { background: #F8FCFC; border: 1px solid var(--border); border-top: 4px solid var(--teal); padding: 2.5rem 1.8rem; border-radius: 0 0 6px 6px; text-align: left; }
        
        /* FAQ */
        .faq-item { border-bottom: 1px solid var(--border); }
        .faq-q { padding: 1.5rem 0; cursor: pointer; display: flex; justify-content: space-between; font-family: 'Playfair Display'; font-size: 1.1rem; }
        .faq-a { max-height: 0; overflow: hidden; transition: 0.4s; color: var(--text-mid); line-height: 1.7; }
        .faq-item.open .faq-a { max-height: 200px; padding-bottom: 1.5rem; }

        .btn-accent { background: var(--accent-orange); color: white; padding: 1rem 2.5rem; border-radius: 4px; border: none; font-weight: 700; text-transform: uppercase; cursor: pointer; box-shadow: 0 4px 15px rgba(244,163,64,0.3); }
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '1rem 3rem', background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000 }}>
        <span style={{ fontFamily: 'Playfair Display', fontWeight: '700', color: 'var(--teal-dark)' }}>Centro Paramita Mendoza</span>
        <button onClick={() => document.getElementById('donaciones').scrollIntoView({behavior:'smooth'})} className="nav-cta">Sumar kilómetros →</button>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', background: 'linear-gradient(160deg, var(--teal-bg) 0%, var(--blue-pale) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '8rem 1rem 4rem' }}>
        <div style={{ maxWidth: '850px' }}>
          <span style={{ color: 'var(--teal)', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.75rem' }}>🪷 Campaña de recaudación · 2025</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', margin: '1.5rem 0', fontWeight: '500' }}>De los <span style={{color: 'var(--teal)', fontStyle: 'italic'}}>Himalayas</span> a los Andes</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-mid)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>El camino de la estatua del Buddha Shakyamuni desde Nepal hacia Mendoza. Juntos abriremos las puertas de nuestro centro.</p>
          
          {/* VIDEO PLACEHOLDER */}
          <div className="hero-video-wrap">
            <div className="play-btn"></div>
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-mid)' }}>Ver video: Visión del Ven. Khenpo Rinchen</span>
          </div>

          <button onClick={() => document.getElementById('donaciones').scrollIntoView({behavior:'smooth'})} className="btn-accent">Suma tus kilómetros al proyecto →</button>
        </div>
      </section>

      {/* TERMÓMETRO */}
      <div style={{ background: 'white', padding: '4rem 1rem', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <p style={{ textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--teal)', marginBottom: '1rem' }}>Kilómetros del viaje recorridos</p>
        <div style={{ fontFamily: 'Playfair Display', fontSize: '4.5rem', color: 'var(--teal-dark)', lineHeight: '1' }}>{KMS.toLocaleString('es-AR')} <sub style={{fontSize: '1rem', bottom: '0'}}>km</sub></div>
        <div style={{ maxWidth: '560px', height: '10px', background: 'var(--teal-pale)', borderRadius: '10px', margin: '1.5rem auto', overflow: 'hidden' }}>
          <div style={{ width: `${progreso}%`, height: '100%', background: 'linear-gradient(90deg, var(--teal-light), var(--teal))', transition: 'width 2s ease-out' }}></div>
        </div>
        <p style={{ color: 'var(--text-mid)' }}><strong>{PCT}%</strong> recaudado de 20.000 km totales | <strong>{DIAS}</strong> días restantes</p>
      </div>

      {/* SECCIÓN 1: RESUMEN (INFO CPM) */}
      <section style={{ padding: '6rem 1rem', maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <span style={{ color: 'var(--teal)', fontWeight: '700', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Sobre el proyecto</span>
        <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>"El sueño que construiremos juntos"</h2>
        
        <div className="cards-3">
          <div className="card-info">
            <div style={{fontSize: '2rem', marginBottom: '1rem'}}>🏡</div>
            <h3>¿Qué es el CPM?</h3>
            <p>Es nuestro punto de encuentro físico, un lugar para la práctica regular, retiros y eventos especiales que busca una integración más profunda de la Sangha.</p>
          </div>
          <div className="card-info">
            <div style={{fontSize: '2rem', marginBottom: '1rem'}}>📍</div>
            <h3>¿Dónde está?</h3>
            <p>En <strong>Luján de Cuyo, Mendoza</strong>. Una hermosa casa con jardín ideal para nuestras prácticas, en un entorno propicio para la vida espiritual.</p>
          </div>
          <div className="card-info">
            <div style={{fontSize: '2rem', marginBottom: '1rem'}}>🤝</div>
            <h3>¿Quiénes acceden?</h3>
            <p>Un oasis donde cualquier persona interesada en la meditación, el estudio filosófico y la práctica espiritual puede encontrar calma y claridad.</p>
          </div>
        </div>
      </section>

      {/* DONACIONES */}
      <section id="donaciones" style={{ padding: '6rem 1rem', background: 'var(--teal-bg)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2.5rem' }}>Kilómetros de Generosidad</h2>
        <p style={{ marginBottom: '4rem', color: 'var(--text-mid)' }}>Cada kilómetro equivale a AR$ 1.000</p>
        <div className="cards-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {['Compasión', 'Mérito', 'Sabiduría'].map((nivel, i) => (
            <div key={nivel} className="card-info" style={{ background: 'white', textAlign: 'center', borderTopColor: i === 1 ? 'var(--accent-orange)' : 'var(--teal)' }}>
              <h3 style={{fontSize: '1.5rem'}}>{nivel}</h3>
              <p style={{ color: 'var(--teal)', fontWeight: 'bold', margin: '1rem 0', fontSize: '1.2rem' }}>
                {i === 0 ? '5 a 100 km' : i === 1 ? '101 a 500 km' : '501 a 5.000 km'}
              </p>
              <button onClick={() => abrirPago(nivel, 'Consultar Rango', `Kilómetros de ${nivel}`)} className="btn-accent" style={{width: '100%', padding: '0.8rem'}}>Donar ahora</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Preguntas Frecuentes</h2>
        {[
          { q: "¿El dinero pasa por la Fundación?", a: "Sí, la campaña nacional está alojada en el dominio de la Fundación Paramita Argentina para otorgar total transparencia." },
          { q: "¿Hay otras formas de apoyar?", a: "¡Sí! Puedes involucrarte en el voluntariado con Marta (cocina, jardín, limpieza) o comprar las remeras oficiales." }
        ].map((item, i) => (
          <div key={i} className="faq-item">
            <div className="faq-q" onClick={toggleFaq}>{item.q} <span>+</span></div>
            <div className="faq-a">{item.a}</div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#2C3E3E', color: 'white', padding: '5rem 1rem', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--teal-light)', fontFamily: 'Playfair Display' }}>Centro Paramita Mendoza</h2>
        <p style={{ opacity: 0.5, marginTop: '1rem' }}>Luján de Cuyo, Mendoza · Fundación Paramita Argentina</p>
        <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>🪷</p>
      </footer>

      {/* CHECKOUT MODAL */}
      {showCheckout && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div style={{ background: 'white', padding: '3rem', borderRadius: '8px', maxWidth: '400px', width: '90%', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem' }}>{pagoInfo.descripcion}</h3>
            <p style={{ margin: '1.5rem 0', color: 'var(--text-mid)' }}>Estás por sumar kilómetros al proyecto Mendoza.</p>
            <button onClick={() => { alert('Redirigiendo...'); setShowCheckout(false); }} className="btn-accent" style={{width: '100%'}}>IR A PAGAR</button>
            <button onClick={() => setShowCheckout(false)} style={{ background: 'none', border: 'none', marginTop: '1.5rem', color: 'var(--teal)', textDecoration: 'underline', cursor: 'pointer' }}>Volver</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
