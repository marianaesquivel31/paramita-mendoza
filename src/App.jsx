import React, { useState } from 'react';
import { 
  Heart, Users, DollarSign, FileText, 
  MessageSquare, Eye, Instagram, Mail 
} from 'lucide-react';

// LOGO DE PARAMITA (Reconstruido)
const ParamitaLogo = () => (
  <div className="flex flex-col items-center scale-[0.35] origin-left -my-10">
    <svg viewBox="0 0 400 350" className="w-24 h-24" fill="none">
      <circle cx="200" cy="50" r="32" fill="#00D1FF" />
      <path d="M200 80C170 120 160 180 160 220C185 205 215 205 240 220C240 180 230 120 200 80Z" fill="#00D1FF" />
      <path d="M155 105C125 145 110 200 130 240C155 225 180 215 200 215C180 170 175 125 175 125L155 105Z" fill="#009EE0" />
      <path d="M245 105C275 145 290 200 270 240C245 225 220 215 200 215C220 170 225 125 225 125L245 105Z" fill="#009EE0" />
      <path d="M85 175C45 210 40 255 90 275C130 255 170 245 200 245C160 210 145 175 145 175L85 175Z" fill="#0059B2" />
      <path d="M315 175C355 210 360 255 310 275C270 255 230 245 200 245C240 210 255 175 255 175L315 175Z" fill="#0059B2" />
    </svg>
    <div className="text-center mt-[-8px]">
      <h1 className="text-[2.2rem] font-bold text-[#0059B2] leading-none">Paramita</h1>
      <h2 className="text-[1.8rem] font-bold text-[#009EE0] leading-none">Mendoza</h2>
    </div>
  </div>
);

export default function App() {
  const [tab, setTab] = useState('capa1');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans">
      <header className="bg-white border-b border-blue-50 sticky top-0 z-50 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <ParamitaLogo />
          <nav className="flex gap-1 bg-slate-100 p-1 rounded-full">
            {['capa1', 'capa2', 'capa3', 'capa4'].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  tab === item ? 'bg-[#0059B2] text-white shadow-md' : 'text-slate-500 hover:text-[#0059B2]'
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* CAPA 1: PROPÓSITO */}
        {tab === 'capa1' && (
          <div className="animate-in space-y-8">
            <div className="bg-white p-12 rounded-[3rem] border border-blue-50 shadow-sm relative overflow-hidden">
              <h3 className="text-[#009EE0] font-bold text-xs tracking-[0.4em] uppercase mb-8">El Propósito</h3>
              <h2 className="text-4xl font-bold text-[#0059B2] mb-6">"Hogar para la Sangha: Un refugio para la calma."</h2>
              <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
                <p>No financiamos una obra edilicia, sino un entorno para que las enseñanzas florezcan en Mendoza.</p>
                <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-[#00D1FF] italic text-base">
                  "El silencio comunicacional es una decisión estratégica que respeta el espacio mental."
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CAPA 2: COMUNIDAD */}
        {tab === 'capa2' && (
          <div className="animate-in space-y-8 text-center">
            <h2 className="text-3xl font-bold text-[#0059B2]">Humanizar el Proyecto</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-8 rounded-[2.5rem] border border-blue-50 shadow-sm">
                <Eye className="text-[#00D1FF] mb-6" size={32} />
                <h4 className="text-xl font-bold text-[#0059B2] mb-4">Qué sucede en un Centro</h4>
                <p className="text-sm text-slate-500">Contenidos pedagógicos sobre meditación, estudio y apoyo mutuo.</p>
              </div>
              <div className="bg-[#0059B2] p-8 rounded-[2.5rem] text-white shadow-lg">
                <MessageSquare className="text-white mb-6" size={32} />
                <h4 className="text-xl font-bold mb-4">Voz de la Sangha</h4>
                <p className="text-sm text-blue-100 italic">"Contar con un espacio físico local significa estabilidad para nuestra práctica colectiva."</p>
              </div>
            </div>
          </div>
        )}

        {/* CAPA 3: SOSTENIMIENTO */}
        {tab === 'capa3' && (
          <div className="animate-in space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-[#0059B2]">Tu generosidad sostiene el Linaje</h2>
              <p className="text-slate-500 mt-4">Transparencia radical para canalizar nuestra interdependencia.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Bronce', color: '#00D1FF' },
                { name: 'Plata', color: '#009EE0' },
                { name: 'Oro', color: '#0059B2' }
              ].map((tier, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-blue-50 shadow-sm flex flex-col items-center">
                  <Users className="text-[#0059B2] mb-6" size={32} />
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">{tier.name}</h3>
                  <button className="w-full py-4 rounded-2xl font-bold text-xs text-white hover:scale-105 transition-transform" style={{backgroundColor: tier.color}}>
                    SOSTENER
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CAPA 4: CONTINUIDAD */}
        {tab === 'capa4' && (
          <div className="animate-in space-y-8">
            <div className="bg-white p-12 rounded-[3.5rem] border border-blue-50 text-center">
              <Heart className="mx-auto text-red-400 mb-8" size={48} fill="currentColor" />
              <h2 className="text-3xl font-bold text-[#0059B2] mb-6">Continuidad y Cuidado</h2>
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <h4 className="font-bold text-xs uppercase text-slate-400 mb-2">Protocolo de Gratitud</h4>
                  <p className="text-sm text-slate-600">Agradecimiento personalizado por el compromiso con el linaje.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <h4 className="font-bold text-xs uppercase text-slate-400 mb-2">Reporte de Avance</h4>
                  <p className="text-sm text-slate-600">Transparencia total sobre el acondicionamiento del salón.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="text-center py-12 border-t border-slate-100 mt-12">
        <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Fundación Paramita Argentina — 2026</p>
      </footer>
    </div>
  );
}