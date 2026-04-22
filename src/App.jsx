import React, { useState, useEffect } from 'react';

function App() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [pagoInfo, setPagoInfo] = useState({ nivel: '', monto: '' });

  const abrirPago = (nivel, monto) => {
    setPagoInfo({ nivel, monto });
    setShowCheckout(true);
  };

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: '#2C3E3E' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Lato:wght@300;400;700&display=swap');
        :root {
          --primary: #4BA8A2;
          --accent-orange: #F4A340;
          --bg: #F0FAF9;
        }
        .btn-accent {
          background: var(--accent-orange);
          color: white;
          padding: 1rem 2rem;
          border-radius: 4px;
          text-transform: uppercase;
          font-weight: bold;
          border: none;
          cursor: pointer;
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'fixed', width: '100%', padding: '1rem 3rem', background: 'white', borderBottom: '1px solid #D4E8E7', zIndex: 10 }}>
        <span style={{ fontFamily: 'Playfair Display', fontWeight: '700', color: '#3A8A85' }}>Centro Paramita Mendoza</span>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #F0FAF9 0%, #EAF2FA 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '5rem 1rem' }}>
        <div>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: '3.5rem' }}>De los <span style={{color: '#4BA8A2', fontStyle: 'italic'}}>Himalayas</span> a los Andes</h1>
          <p style={{ margin: '2rem 0', fontSize: '1.2rem' }}>Hagamos posible la llegada del Buddha Shakyamuni a Mendoza.</p>
          <button onClick={() => abrirPago('General', 'Donación Voluntaria')} className="btn-accent">Quiero participar</button>
        </div>
      </section>

      {/* TIERS */}
      <section style={{ padding: '5rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {['Compasión', 'Mérito', 'Sabiduría'].map((nivel, index) => (
            <div key={nivel} style={{ border: '1px solid #D4E8E7', padding: '2rem', textAlign: 'center', borderRadius: '8px' }}>
              <h3 style={{ fontFamily: 'Playfair Display' }}>{nivel}</h3>
              <p style={{ color: '#F4A340', fontWeight: 'bold', margin: '1rem 0' }}>{index === 0 ? '$5.000' : index === 1 ? '$15.000' : '$50.000'} ARS</p>
              <button onClick={() => abrirPago(nivel, index === 0 ? '$5.000' : index === 1 ? '$15.000' : '$50.000')} className="btn-accent">Elegir</button>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL DE PAGO */}
      {showCheckout && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', maxWidth: '400px', width: '90%', textAlign: 'center' }}>
            <h3>Nivel {pagoInfo.nivel}</h3>
            <p>Monto: {pagoInfo.monto}</p>
            <input type="text" placeholder="Nombre en la tarjeta" style={{ width: '100%', padding: '0.8rem', margin: '1rem 0', border: '1px solid #D4E8E7' }} />
            <input type="text" placeholder="Número de tarjeta" style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', border: '1px solid #D4E8E7' }} />
            <button onClick={() => { alert('¡Gracias!'); setShowCheckout(false); }} style={{ background: '#009EE3', color: 'white', width: '100%', padding: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>PAGAR AHORA</button>
            <button onClick={() => setShowCheckout(false)} style={{ background: 'none', border: 'none', marginTop: '1rem', color: '#4BA8A2', textDecoration: 'underline', cursor: 'pointer' }}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
