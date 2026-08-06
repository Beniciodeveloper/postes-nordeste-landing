import React, { useState } from 'react';
import { Calendar, MapPin, Building, Factory, ShieldCheck, ChevronRight, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'segments'>('timeline');

  const historyMilestones = [
    {
      year: "1965",
      date: "16 de Novembro de 1965",
      title: "Fundação & Unidade Piloto em Salvador",
      description: "Fundada sob liderança da INDARCO - Engenharia, Indústria e Comércio. Em 1966, iniciou a fábrica piloto em Valéria, periferia de Salvador, produzindo postes de concreto armado para linhas de transmissão e redes elétricas."
    },
    {
      year: "1967",
      date: "Transferência para o CIA (Aratu)",
      title: "Parque Fabril do Centro Industrial de Aratu",
      description: "Devido ao acelerado crescimento e à necessidade de ampliação das instalações, a empresa transferiu-se para o Centro Industrial de Aratu (BA), construindo seu atual e moderno parque fabril."
    },
    {
      year: "1968",
      date: "Fevereiro de 1968",
      title: "Criação da Filial de Moreno - PE",
      description: "Criada para atender à expansão da rede elétrica para o interior do Nordeste, modernizando os sistemas e promovendo a substituição dos antigos postes de madeira por postes de concreto armado."
    },
    {
      year: "1969",
      date: "Ano de 1969",
      title: "Controle Acionário Vera Cruz",
      description: "A Comercial Construtora Vera Cruz Ltda. assumiu o controle acionário da empresa, marcando uma nova fase de investimentos e consolidação no mercado de pré-moldados."
    },
    {
      year: "1979",
      date: "Ano de 1979",
      title: "Filiais em Itabuna - BA & Seabra - BA",
      description: "Criação da filial de Itabuna para abastecer o Sul da Bahia, Espírito Santo e Minas Gerais; e da filial de Seabra para atender com agilidade ao Centro-Oeste baiano."
    },
    {
      year: "1984",
      date: "Julho de 1984",
      title: "Criação da Filial de Fortaleza - CE",
      description: "Inauguração da filial no Ceará com o objetivo de aperfeiçoar a logística e o fornecimento para os estados do septentrião nordestino e Norte do país."
    },
    {
      year: "Atual",
      date: "Presente",
      title: "Liderança Regional & Diversificação",
      description: "Consolidada com matriz e filiais cobrindo todo o Nordeste, fornecendo postes DT e circulares, estruturas para subestações, galpões pré-moldados e soluções rurais."
    }
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background industrial pattern */}
      <div className="company-section"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-postes-red/10 border border-postes-red/20 text-postes-red px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>Nossa Trajetória Institucional</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Pioneirismo, Solidez e <span className="text-postes-red">História desde 1965</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Uma trajetória construída com inovação contínua, rígido padrão de engenharia e compromisso com a infraestrutura das regiões Norte e Nordeste do Brasil.
          </p>
        </div>

        {/* Story Intro Banner */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-10 mb-16 shadow-sm">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Mais de 60 anos impulsionando a eletrificação e o desenvolvimento nacional
            </h3>
            
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              A <strong className="text-postes-red font-semibold">Postes Nordeste S.A.</strong> foi fundada em 16 de novembro de 1965, tendo como empresa líder a INDARCO - Engenharia, Indústria e Comércio. Iniciou suas atividades fabris em Valéria (Salvador) e rapidamente expandiu para o <strong>Centro Industrial de Aratu (CIA)</strong>, construindo um parque fabril de grande capacidade.
            </p>

            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              Ao longo das décadas, implantou estratégicas unidades fabris em <strong>Moreno (PE), Itabuna (BA), Seabra (BA) e Fortaleza (CE)</strong>, além de representantes em São Luís (MA) e Piauí, modernizando o setor elétrico com a substituição histórica de postes de madeira por estruturas pré-moldadas de concreto armado de alta durabilidade.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <Factory className="w-6 h-6 text-postes-red flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Parque Fabril Aratu</h4>
                  <p className="text-xs text-slate-500">Matriz com tecnologia de ponta e ensaios normatizados.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <MapPin className="w-6 h-6 text-postes-red flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Presença Capilarizada</h4>
                  <p className="text-xs text-slate-500">Filiais cobrindo 100% dos estados do Nordeste e vizinhos.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img 
                src="/img-home.png" 
                alt="Estruturas e Unidade Fabril Postes Nordeste" 
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-postes-navy/90 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <p className="text-amber-400 font-extrabold text-3xl font-heading">60+ Anos</p>
                  <p className="text-xs text-slate-200">Fornecedor Homologado nas Maiores Concessionárias do Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* History Timeline */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Marcos da Nossa Expansão Histórica
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              Linha do tempo de marcos e crescimento da Postes Nordeste
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {historyMilestones.slice(0, 4).map((item, index) => (
              <div 
                key={index}
                className="bg-white border border-slate-200 hover:border-postes-red rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-heading text-postes-red bg-postes-red/10 px-3 py-1 rounded-lg">
                    {item.year}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">{item.date}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2 group-hover:text-postes-red transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {historyMilestones.slice(4).map((item, index) => (
              <div 
                key={index}
                className="bg-white border border-slate-200 hover:border-postes-red rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-heading text-postes-red bg-postes-red/10 px-3 py-1 rounded-lg">
                    {item.year}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">{item.date}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2 group-hover:text-postes-red transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
