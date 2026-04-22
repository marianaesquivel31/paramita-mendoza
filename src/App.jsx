import React, { useState, useEffect } from 'react';

function App() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [pagoInfo, setPagoInfo] = useState({ nivel: '', monto: '', descripcion: '' });
  const [progreso, setProgreso] = useState(0);

  // Datos basados en el documento oficial
  const KMS_LOGRADOS = 4200; // Este valor lo puedes ir actualizando manualmente
  const KMS_TOTALES = 20000; //
  const PORCENTAJE = (KMS_LOGRADOS / KMS_TOTALES) * 100;

  useEffect(() => {
    const timer = setTimeout(() => setProgreso(PORCENTAJE), 500);
    return () => clearTimeout(timer);
  }, [PORCENTAJE]);

  const abrirPago = (nivel, monto, desc) => {
    setPagoInfo({ nivel, monto, descripcion: desc });
    setShowCheckout(true);
  };

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: '#2C3E3E', backgroundColor: '#fff' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Lato:wght@300;400;700&display=swap');
        :root { --primary: #4BA8A2; --accent-orange: #F4A340; }
        .btn-accent { background: var(--accent-orange); color: white; padding: 1rem 2.5rem; border-radius: 4px; text-transform: uppercase; font-weight: 700; border: none; cursor: pointer; transition: 0.3s; box-shadow: 0 4px 15px rgba(244, 163, 64, 0.3); text-decoration: none; display: inline-block; }
        .btn-accent:hover { background: #E08F2D; transform: translateY(-2px); }
        .card { background: white; border: 1px solid #D4E8E7; padding: 2rem; border-radius: 8px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; }
        .nav-fixed { position: fixed; top: 0; width: 100%; padding: 1rem 3rem; background: rgba(255,255,255,0.95); border-bottom: 1px solid #D4E8E7; z-index: 1000; display: flex; justify-content: space-between; align-items: center; }
        .seccion { padding: 5rem 1rem; maxWidth: 1000px; margin: 0 auto; }
      `}</style>

      {/* NAVBAR */}
      <nav className="nav-fixed">
        <span style={{ fontFamily: 'Playfair Display', fontWeight: '700', color: '#3A8A85' }}>Centro Paramita Mendoza</span>
        <button onClick={() => document.getElementById('donaciones').scrollIntoView({behavior:'smooth'})} style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>SUMAR KM</button>
      </nav>

      {/* HERO SECCIÓN */}
      <section style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #F0FAF9 0%, #EAF2FA 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '8rem 1rem 4rem' }}>
        <div style={{ maxWidth: '900px' }}>
          <span style={{ color: 'var(--primary)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>🪷 Proyecto Mendoza 2025</span>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginTop: '1rem', lineHeight: '1.2' }}>
            De los Himalayas a los Andes:<br />
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>El camino de la estatua del Buddha Shakyamuni desde Nepal hacia Mendoza</span>
          </h1>
          <p style={{ margin: '2rem auto', fontSize: '1.1rem', maxWidth: '750px', fontWeight: '300', lineHeight: '1.6' }}>
            Juntos abriremos las puertas del Centro Paramita Mendoza, un espacio dedicado a la práctica, el estudio y la comunidad, celebrando la oportunidad de generar mérito compartido.
          </p>
          <button onClick={() => document.getElementById('donaciones').scrollIntoView({behavior:'smooth'})} className="btn-accent">Suma tus kilómetros al proyecto →</button>
        </div>
      </section>

      {/* TERMÓMETRO */}
      <section style={{ padding: '4rem 1rem', textAlign: 'center', backgroundColor: '#fff', borderTop: '1px solid #D4E8E7' }}>
        <h3 style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px', color: '#7A9898' }}>Avance de la recaudación</h3>
        <div style={{ fontFamily: 'Playfair Display', fontSize: '4rem', fontWeight: '700', color: 'var(--accent-orange)', margin: '1rem 0' }}>
          {KMS_LOGRADOS.toLocaleString('es-AR')} <span style={{ fontSize: '1.5rem' }}>km</span>
        </div>
        <div style={{ maxWidth: '600px', height: '18px', background: '#eee', borderRadius: '20px', margin: '0 auto', overflow: 'hidden' }}>
          <div style={{ width: `${progreso}%`, height: '100%', background: 'linear-gradient(90deg, #F4A340, #FFCC80)', transition: 'width 2s ease-out' }}></div>
        </div>
        <p style={{ marginTop: '1rem', fontWeight: '700' }}>{KMS_LOGRADOS} Kilómetros logrados de {KMS_TOTALES} totales</p>
      </section>

      {/* SECCIÓN 1 Y 2: RESUMEN Y PROPÓSITO */}
      <section className="seccion" style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2.2rem', marginBottom: '1.5rem' }}>"El sueño que construiremos juntos en Mendoza"</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
          El Centro Paramita Mendoza es nuestro punto de encuentro físico en Luján de Cuyo, un lugar para la práctica regular, retiros y eventos especiales. Como nos recuerda el Ven. Khenpo Rinchen Gyaltsen, lo importante es que la Sangha cuente con un espacio físico donde fortalecer su práctica en comunidad.
        </p>
      </section>

      {/* SECCIÓN 6: KILÓMETROS DE GENEROSIDAD */}
      <section id="donaciones" style={{ padding: '5rem 1rem', backgroundColor: '#F0FAF9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2.5rem' }}>Kilómetros de Generosidad</h2>
            <p style={{ color: '#7A9898', marginTop: '1rem' }}>Cada kilómetro corresponde a AR$ 1.000</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card">
              <h3 style={{ fontFamily: 'Playfair Display' }}>Compasión</h3>
              <p style={{ color: 'var(--accent-orange)', fontWeight: '700', margin: '1rem 0' }}>De 5 a 100 km</p>
              <button onClick={() => abrirPago('Compasión', 'AR$ 5.000 - 100.000', 'Kilómetros de Compasión')} className="btn-accent">Donar ahora</button>
            </div>
            <div className="card" style={{ border: '2px solid var(--accent-orange)' }}>
              <h3 style={{ fontFamily: 'Playfair Display' }}>Mérito</h3>
              <p style={{ color: 'var(--accent-orange)', fontWeight: '700', margin: '1rem 0' }}>De 101 a 500 km</p>
              <button onClick={() => abrirPago('Mérito', 'AR$ 101.000 - 500.000', 'Kilómetros de Mérito')} className="btn-accent">Donar ahora</button>
            </div>
            <div className="card">
              <h3 style={{ fontFamily: 'Playfair Display' }}>Sabiduría</h3>
              <p style={{ color: 'var(--accent-orange)', fontWeight: '700', margin: '1rem 0' }}>De 501 a 5.000 km</p>
              <button onClick={() => abrirPago('Sabiduría', 'AR$ 501.000+', 'Kilómetros de Sabiduría')} className="btn-accent">Donar ahora</button>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: PREGUNTAS FRECUENTES */}
      <section className="seccion">
        <h2 style={{ fontFamily: 'Playfair Display', textAlign: 'center', marginBottom: '3rem' }}>Preguntas Frecuentes</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <strong>¿El dinero pasa por Fundación Paramita Argentina?</strong>
            <p>Sí, la campaña nacional está alojada en el dominio de la Fundación Paramita Argentina para otorgar total transparencia y respaldo.</p>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <strong>¿Hay otras formas de apoyar?</strong>
            <p>Sí, puedes involucrarte en nuestra área de voluntariado (limpieza, cocina, jardín) o comprar las remeras oficiales.</p>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <footer style={{ background: '#2C3E3E', color: 'white', padding: '4rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
            "Gracias al apoyo constante, hemos llegado hasta aquí. Ahora te invitamos a vos a ser parte del siguiente paso: hacer que la estatua del Buddha llegue nuestro Centro en Mendoza."
          </p>
          <h2 style={{ fontFamily: 'Playfair Display', color: 'var(--accent-orange)' }}>Centro Paramita Mendoza</h2>
          <p style={{ opacity: 0.6, fontSize: '0.9rem', marginTop: '1rem' }}>Fundación Paramita Argentina · Luján de Cuyo</p>
        </div>
      </footer>

      {/* MODAL DE PAGO SIMULADO */}
      {showCheckout && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div style={{ background: 'white', padding: '2.5rem', borderRadius: '12px', maxWidth: '450px', width: '90%', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'Playfair Display' }}>{pagoInfo.descripcion}</h3>
            <p style={{ margin: '1rem 0' }}>Rango de aporte: <strong>{pagoInfo.monto}</strong></p>
            <p style={{ fontSize: '0.8rem', color: '#7A9898', marginBottom: '1.5rem' }}>Sistema tipo carrito de compras para un proceso automático y rápido.</p>
            <button onClick={() => { alert('Redirigiendo a pasarela de pago...'); setShowCheckout(false); }} style={{ background: '#009EE3', color: 'white', width: '100%', padding: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>IR A PAGAR</button>
            <button onClick={() => setShowCheckout(false)} style={{ background: 'none', border: 'none', marginTop: '1rem', color: 'var(--primary)', textDecoration: 'underline', cursor: 'pointer' }}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
