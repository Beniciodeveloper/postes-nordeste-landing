import React from 'react';
import { Award, MapPin, Factory, ShieldCheck, Users, Building2, CheckCircle } from 'lucide-react';

const Differentials: React.FC = () => {
  const differentials = [
    {
      icon: <Award className="w-8 h-8 text-postes-red" />,
      title: "60+ Anos de Tradição",
      description: "Fundada em 1965, é referência absoluta e pioneira na fabricação de artefatos de concreto pré-moldado no Brasil."
    },
    {
      icon: <MapPin className="w-8 h-8 text-postes-red" />,
      title: "Presença Estratégica Regional",
      description: "Atendimento ágil a todos os estados do Nordeste, Norte e conexões com o Sudeste (MG e ES)."
    },
    {
      icon: <Factory className="w-8 h-8 text-postes-red" />,
      title: "5+ Parques Fabris",
      description: "Unidades industriais estrategicamente posicionadas em Aratu (BA), Moreno (PE), Itabuna (BA), Seabra (BA) e Fortaleza (CE)."
    },
    {
      icon: <Building2 className="w-8 h-8 text-postes-red" />,
      title: "Homologação em Concessionárias",
      description: "Produtos 100% aprovados na Neoenergia (Coelba/Celpe), Equatorial, Energisa, Enel, CHESF e grandes indústrias."
    },
    {
      icon: <Users className="w-8 h-8 text-postes-red" />,
      title: "Soluções Engenheiradas",
      description: "Engenharia dedicada para projetos customizados de galpões, subestações e artefatos sob medida."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-postes-red" />,
      title: "Certificação ISO 9001",
      description: "Rigoroso controle tecnológico do concreto e ensaios de lote mecânicos conforme normas ABNT."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-postes-navy/10 border border-postes-navy/20 text-postes-navy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-postes-red" />
            <span>Por que escolher a Postes Nordeste</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Nossos <span className="text-postes-red">Diferenciais Competitivos</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            A combinação de escala produtiva, excelência técnica e tradição que garante o sucesso da sua obra.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-postes-red transition-all duration-300 group"
            >
              <div className="bg-postes-red/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {diff.icon}
              </div>
              
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3 group-hover:text-postes-red transition-colors">
                {diff.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Differentials;
