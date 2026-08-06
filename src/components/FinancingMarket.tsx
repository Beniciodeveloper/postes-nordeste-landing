import React, { useState } from 'react';
import { CreditCard, Landmark, LineChart, Globe, Zap, Building2, CheckCircle2, ChevronRight } from 'lucide-react';

const FinancingMarket: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'financiamento' | 'mercado' | 'politicas'>('financiamento');

  return (
    <section id="financiamento" className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-postes-red/10 border border-postes-red/20 text-postes-red px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Landmark className="w-3.5 h-3.5" />
            <span>Condições Comerciais & Visão Estratégica</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Financiamento, Mercado & <span className="text-postes-red">Políticas Públicas</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Facilidades de crédito industrial, presença nos principais segmentos econômicos e alinhamento com a expansão da infraestrutura nacional.
          </p>
        </div>

        {/* Section Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveSection('financiamento')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-heading text-sm font-bold transition-all ${
              activeSection === 'financiamento'
                ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-[1.02]"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <CreditCard className="w-4 h-4 text-postes-red" />
            <span>Linhas de Financiamento</span>
          </button>

          <button
            onClick={() => setActiveSection('mercado')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-heading text-sm font-bold transition-all ${
              activeSection === 'mercado'
                ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-[1.02]"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <LineChart className="w-4 h-4 text-postes-red" />
            <span>Mercado & Atuação</span>
          </button>

          <button
            onClick={() => setActiveSection('politicas')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-heading text-sm font-bold transition-all ${
              activeSection === 'politicas'
                ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-[1.02]"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Globe className="w-4 h-4 text-postes-red" />
            <span>Políticas Públicas & ESG</span>
          </button>
        </div>

        {/* Section Content Display */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          
          {/* 1. Financiamento */}
          {activeSection === 'financiamento' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center animate-fade-in-up">
              <div className="lg:col-span-7 space-y-6">
                <span className="bg-postes-red/10 text-postes-red font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-md">
                  Crédito Industrial & Soluções Financeiras
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900">
                  Facilidade para Grandes Obras e Galpões Pré-Moldados
                </h3>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Oferecemos aos nossos clientes condições diferenciadas de pagamento e suporte para enquadramento nas principais linhas de crédito de fomento industrial e agrícola do país.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">BNDES & FINAME</h4>
                    <p className="text-xs text-slate-500">Cadastrado nas linhas de financiamento de máquinas e infraestrutura.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Banco do Nordeste (BNB)</h4>
                    <p className="text-xs text-slate-500">Linhas FNE para projetos industriais e do agronegócio regional.</p>
                  </div>
                </div>

                <a
                  href="#contato"
                  className="inline-flex items-center space-x-2 text-postes-red font-bold text-sm hover:underline pt-2"
                >
                  <span>Consulte nosso departamento financeiro</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4 shadow-xl border border-slate-800">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-8 h-8 text-amber-400" />
                    <div>
                      <h4 className="font-bold font-heading text-white">Vantagens Financeiras</h4>
                      <p className="text-xs text-slate-400">Flexibilidade para o seu projeto</p>
                    </div>
                  </div>
                  <hr className="border-slate-800" />
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-amber-400 mr-2" /> Faturamento direto para construtoras e consórcios</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-amber-400 mr-2" /> Prazos flexíveis conforme cronograma físico-financeiro</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-amber-400 mr-2" /> Garantia de fábrica estendida para estruturas</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 2. Mercado */}
          {activeSection === 'mercado' && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="max-w-3xl">
                <span className="bg-postes-red/10 text-postes-red font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-md">
                  Presença nos Principais Setores Econômicos
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mt-2">
                  Atendimento Multissetorial no Norte e Nordeste
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                  <Zap className="w-8 h-8 text-postes-red mb-3" />
                  <h4 className="font-bold text-slate-900 text-lg mb-2 font-heading">Eletrificação & Energia</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Concessionárias de energia elétrica, transmissoras, geradoras eólicas/solares e montadoras de subestações de alta e média tensão.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                  <Building2 className="w-8 h-8 text-postes-navy mb-3" />
                  <h4 className="font-bold text-slate-900 text-lg mb-2 font-heading">Construção Civil & Galpões</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Grandes empreiteiras, incorporadoras e empresas que demandam estruturas pré-moldadas pesadas para parques fabris e logística.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                  <Landmark className="w-8 h-8 text-emerald-600 mb-3" />
                  <h4 className="font-bold text-slate-900 text-lg mb-2 font-heading">Setor Rural & Agro</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Propriedades rurais, estábulos, galpões de ordenha, cochos pré-moldados cobertos/descobertos e estacas para cerca e curral.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 3. Políticas Públicas */}
          {activeSection === 'politicas' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center animate-fade-in-up">
              <div className="lg:col-span-8 space-y-4">
                <span className="bg-postes-red/10 text-postes-red font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-md">
                  Alinhamento com Diretrizes de Governo & Infraestrutura
                </span>

                <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900">
                  Contribuição para o Programa Luz para Todos e Transição Energética
                </h3>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  A Postes Nordeste atua como parceira estratégica na execução de políticas públicas federais e estaduais para universalização do acesso à energia elétrica no interior do país, fornecendo milhões de estruturas que levaram luz, dignidade e desenvolvimento às famílias rurais.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center text-xs text-slate-800 bg-white p-3 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-postes-red mr-2 flex-shrink-0" />
                    <span>Fornecimento contínuo para obras de ampliação do Sistema Interligado Nacional (SIN).</span>
                  </div>
                  <div className="flex items-center text-xs text-slate-800 bg-white p-3 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-postes-red mr-2 flex-shrink-0" />
                    <span>Apoio à infraestrutura de conexão de parques eólicos e usinas fotovoltaicas no Nordeste.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-3">
                <Globe className="w-12 h-12 text-postes-red mx-auto" />
                <h4 className="font-bold text-slate-900 font-heading">Compromisso com o Brasil</h4>
                <p className="text-xs text-slate-500">
                  Infraestrutura sólida com sustentabilidade e responsabilidade técnica.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default FinancingMarket;
