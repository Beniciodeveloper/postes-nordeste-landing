import React from 'react';
import { MapPin, Factory, Building } from 'lucide-react';

const historyMilestones = [
  { year: "1965", title: "Fundação em Salvador", text: "Criada sob liderança da INDARCO, com fábrica piloto em Valéria, Bahia." },
  { year: "1967", title: "CIA – Aratu", text: "Transferência para o Centro Industrial de Aratu, com parque fabril de grande escala." },
  { year: "1968", title: "Filial Moreno – PE", text: "Expansão para Pernambuco, modernizando redes elétricas do interior nordestino." },
  { year: "1969", title: "Novo Controle Acionário", text: "A Comercial Construtora Vera Cruz Ltda. assume e amplia os investimentos." },
  { year: "1979", title: "Itabuna & Seabra – BA", text: "Abertura de duas unidades para o Sul e Centro-Oeste da Bahia." },
  { year: "1984", title: "Filial Fortaleza – CE", text: "Polo estratégico para atender ao septentrião nordestino e o Norte do país." },
  { year: "Hoje", title: "Liderança Nacional", text: "Presença em todo o Nordeste, galpões, subestações, setor rural e energia." },
];

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#FF2E17]/10 border border-[#FF2E17]/20 text-[#FF2E17] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>Trajetória Institucional</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            Pioneirismo e Solidez <span className="text-[#FF2E17]">desde 1965</span>
          </h2>

          <p className="text-slate-500 text-base leading-relaxed">
            Uma trajetória construída com inovação contínua e padrão rigoroso de engenharia — impulsionando a eletrificação e a construção no Norte e Nordeste do Brasil.
          </p>
        </div>

        {/* Story + Photo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-5 text-slate-600 text-sm leading-relaxed">
            <p>
              A <strong className="text-slate-900">Postes Nordeste S.A.</strong> foi fundada em 16 de novembro de 1965, tendo como empresa líder a <strong className="text-slate-900">INDARCO - Engenharia, Indústria e Comércio</strong>. Iniciou suas atividades em Valéria (Salvador) e rapidamente expandiu para o Centro Industrial de Aratu, construindo um parque fabril de grande capacidade.
            </p>
            <p>
              Ao longo das décadas, implantou unidades estratégicas em <strong className="text-slate-900">Moreno (PE), Itabuna (BA), Seabra (BA) e Fortaleza (CE)</strong>, além de representantes em São Luís (MA) e Piauí — modernizando o setor elétrico e a construção civil com estruturas pré-moldadas de alto padrão.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Factory className="w-5 h-5 text-[#FF2E17] mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Parque Fabril CIA</p>
                  <p className="text-xs text-slate-500">Tecnologia de ponta em Aratu, Simões Filho – BA</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <MapPin className="w-5 h-5 text-[#FF2E17] mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Cobertura Regional</p>
                  <p className="text-xs text-slate-500">Filiais em 5 estados do Norte/Nordeste</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <img
              src="/img-home.png"
              alt="Unidade Fabril Postes Nordeste"
              className="w-full h-72 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="text-[#FF2E17] font-extrabold text-4xl font-heading">60+</p>
                <p className="text-xs text-slate-200 mt-0.5">Anos fornecendo às maiores concessionárias do Brasil</p>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Timeline */}
        <div className="border-t border-slate-100 pt-12">
          <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
            Marcos de Expansão
          </h3>

          <div className="relative">
            {/* Horizontal line for desktop */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-slate-200"></div>

            <div className="grid grid-cols-2 md:grid-cols-7 gap-6 md:gap-4">
              {historyMilestones.map((m, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-3">
                  {/* Year circle */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold font-heading border-2 z-10 ${i === historyMilestones.length - 1 ? 'bg-[#FF2E17] text-white border-[#FF2E17]' : 'bg-white text-[#FF2E17] border-[#FF2E17]'}`}>
                    {m.year === 'Hoje' ? '●' : m.year.slice(2)}
                  </div>
                  {/* Content */}
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-slate-900 uppercase tracking-wide leading-tight">{m.title}</p>
                    <p className="text-[10px] text-slate-500 leading-snug hidden md:block">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
