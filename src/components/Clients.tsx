import React from 'react';
import { Building2 } from 'lucide-react';

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
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#FF2E17]/10 border border-[#FF2E17]/20 text-[#FF2E17] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Confiança Comprovada</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            Clientes & Concessionárias <span className="text-[#FF2E17]">Homologadas</span>
          </h2>

          <p className="text-slate-500 text-base leading-relaxed">
            Parceria de longa data fornecendo estruturas de alto padrão para as maiores empresas de energia, telecomunicações e infraestrutura do país.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              <div className="w-28 h-16 flex items-center justify-center mb-3">
                <img
                  src={client.img}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <span className="text-xs font-bold text-slate-800 font-heading text-center line-clamp-1">
                {client.name}
              </span>
              
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                {client.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;
