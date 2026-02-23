import React, { useState } from 'react';
import { 
  Heart, Users, DollarSign, FileText, 
  MessageSquare, Eye, Instagram, Mail 
} from 'lucide-react';

// === COMPONENTE DEL LOGO (Usa tu imagen de Canva) ===
const ParamitaLogo = () => (
  <img 
    src="/logo.png" 
    alt="Logo Paramita Mendoza" 
    className="h-16 w-auto object-contain" 
    onError={(e) => e.target.src = "https://via.placeholder.com/150?text=Subir+Logo"} 
  />
);

export default function App() {
  // Estado para controlar qué capa se muestra
  const [tab, setTab] = useState('capa1');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans">
      
      {/* HEADER / MENÚ DE NAVEGACIÓN */}
      <header className="bg-white border-b border-blue-50 sticky top-0 z-50 p-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <ParamitaLogo />
          
          <nav className="flex gap-1 bg-slate-100 p-1 rounded-full shadow-inner">
            {['capa1', 'capa2', 'capa3', 'capa4'].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest transition-all ${
                  tab === item 
                    ? 'bg-[#0059B2] text-white shadow-md' 
                    : 'text-slate-400 hover:text-[#0059B2]'
                }`}
              >
                {item === 'capa1' && "PROPÓSITO"}
                {item === 'capa2' && "COMUNIDAD"}
                {item === 'capa3' && "APOYO"}
                {item === 'capa4' && "AVANCES"}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL DINÁMICO */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        
        {/* CAPA 1: EL CORAZÓN DEL PROYECTO */}
        {tab === 'capa1' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-10 rounded-[3rem] border border-blue-50 shadow-sm relative overflow-hidden">
              <h3 className="text-[#00D1FF] font-bold text-xs tracking-[0.4em] uppercase mb-6">Capa 1</h3>
              <h2 className="text-4xl font-bold text-[#0059B2] mb-6 leading-tight">
                "Hogar para la Sangha: <br/>Un refugio para la calma."
              </h2>
              <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
                <p>No financiamos una obra edilicia, sino un entorno para que las enseñanzas florezcan en Mendoza.</p>
                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-[#00D1FF] italic text-base">
                  "El silencio comunicacional es una decisión estratégica que respeta el espacio mental."
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CAPA 2: HUMANIZACIÓN */}
        {tab === 'capa2' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#0059B2]">Humanizar el Proyecto</h2>
              <p className="text-slate-500 mt-2 text-lg">Preparación del terreno cognitivo y emocional de nuestra sangha.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[2.5rem] border border-blue-50 shadow-sm hover:border-blue-200 transition-colors">
                <Eye className="text-[#00D1FF] mb-6" size={32} />
                <h4 className="text-xl font-bold text-[#0059B2] mb-4">Qué sucede en un Centro</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Contenidos pedagógicos sobre meditación, estudio y el impacto de tener un espacio propio para la práctica colectiva.</p>
              </div>
              <div className="bg-[#0059B2] p-8 rounded-[2.5rem] text-white shadow-lg relative overflow-hidden">
                <MessageSquare className="text-blue-200 mb-6" size={32} />
                <h4 className="text-xl font-bold mb-4">Voz de la Sangha</h4>
                <p className="text-sm text-blue-50 italic leading-relaxed">"Contar con un espacio físico local significa estabilidad para nuestra práctica y un faro de calma para la ciudad."</p>
                <div className="absolute -bottom-4 -right-4 opacity-10">
                  <MessageSquare size={120} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CAPA 3: SOSTENIMIENTO (TRANSPARENCIA RADICAL) */}
        {tab === 'capa3' && (
          <div className="space-y-12 animate-in fade-in duration-500">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-[#0059B2]">Tu generosidad sostiene el Linaje</h2>
              <p className="text-slate-500 mt-4">Un canal transparente para nuestra interdependencia.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Socio Bronce', color: 'bg-[#00D1FF]', icon: <Users size={24}/> },
                { name: 'Socio Plata', color: 'bg-[#009EE0]', icon: <Users size={24}/> },
                { name: 'Socio Oro', color: 'bg-[#0059B2]', icon: <Users size={24}/> }
              ].map((tier, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-blue-50 shadow-sm flex flex-col items-center text-center group hover:shadow-xl transition-all">
                  <div className={`p-4 rounded-full ${tier.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {tier.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-6">{tier.name}</h3>
                  <button className={`w-full py-4 rounded-2xl font-bold text-[10px] tracking-widest text-white ${tier.color} opacity-90 hover:opacity-100 transition-opacity`}>
                    QUIERO APOYAR
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CAPA 4: CONTINUIDAD */}
        {tab === 'capa4' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-12 rounded-[3.5rem] border border-blue-50 text-center shadow-sm">
              <div className="inline-block p-6 bg-red-50 rounded-full mb-8">
                <Heart className="text-red-400" size={48} fill="currentColor" />
              </div>
              <h2 className="text-3xl font-bold text-[#0059B2] mb-6">Continuidad y Cuidado</h2>
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h4 className="font-black text-[10px] uppercase text-slate-400 tracking-[0.2em] mb-3">Gratitud</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Protocolo de agradecimiento personalizado por el compromiso con el mantenimiento del espacio.</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h4 className="font-black text-[10px] uppercase text-slate-400 tracking-[0.2em] mb-3">Transparencia</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Reportes trimestrales sobre el uso de los fondos y los avances en el acondicionamiento del salón.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="text-center py-12 border-t border-slate-100 bg-white/50">
        <div className="flex justify-center gap-6 mb-4">
           <Instagram size={18} className="text-slate-400 cursor-pointer hover:text-[#009EE0]" />
           <Mail size={18} className="text-slate-400 cursor-pointer hover:text-[#009EE0]" />
        </div>
        <p className="text-[10px] text-slate-400 font-black tracking-[0.3em] uppercase">Fundación Paramita Argentina — 2026</p>
      </footer>
    </div>
  );
}
