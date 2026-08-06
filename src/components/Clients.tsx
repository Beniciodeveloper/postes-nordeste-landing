import React from 'react';
import { Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Clients: React.FC = () => {
  const clients = [
    { name: "Neoenergia Coelba", img: "/Coelba.png", category: "Energia" },
    { name: "Neoenergia Celpe", img: "/Celpe.png", category: "Energia" },
    { name: "Equatorial Energia", img: "/Equatorial_logo.png", category: "Energia" },
    { name: "Grupo Energisa", img: "/energisa.png", category: "Energia" },
    { name: "Enel Brasil", img: "/enel.webp", category: "Energia" },
    { name: "Petrobras", img: "/petrobras.png", category: "Infraestrutura" },
    { name: "CHESF", img: "/chesf.png", category: "Transmissão" },
    { name: "Oi Telecomunicações", img: "/oi.jpg", category: "Telecom" },
    { name: "Vivo Telefônica", img: "/vivo.png", category: "Telecom" },
    { name: "Odebrecht / Novonor", img: "/oderbrecht.svg", category: "Construção Civil" },
  ];

  return (
    <section id="clientes" className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-postes-red/10 border border-postes-red/20 text-postes-red px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Confiança Comprovada</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Clientes & Concessionárias <span className="text-postes-red">Homologadas</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Parceria de longa data fornecendo estruturas de alto padrão para as maiores empresas de energia, telecomunicações e infraestrutura do país.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-white hover:border-postes-red hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-24 h-16 flex items-center justify-center mb-3">
                <img
                  src={client.img}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <span className="text-xs font-bold text-slate-800 font-heading text-center line-clamp-1 group-hover:text-postes-red transition-colors">
                {client.name}
              </span>
              
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                {client.category}
              </span>
            </div>
          ))}
        </div>

        {/* Homologation Trust Banner */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="flex items-center space-x-4">
            <div className="bg-amber-500/20 p-3 rounded-xl text-amber-400 flex-shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-lg font-heading text-white">Cadastramento e Homologação Técnica Garantida</h4>
              <p className="text-xs text-slate-300 mt-1">
                Todas as especificações seguem estritamente as diretrizes técnicas das concessionárias de energia elétrica e da ABNT.
              </p>
            </div>
          </div>

          <a
            href="#contato"
            className="w-full md:w-auto bg-postes-red hover:bg-postes-red-dark text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider transition-colors text-center whitespace-nowrap"
          >
            Solicitar Atestados de Capacidade
          </a>
        </div>

      </div>
    </section>
  );
};

export default Clients;
