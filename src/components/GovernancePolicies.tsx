import React, { useState } from 'react';
import { 
  ShieldCheck, Lock, FileText, Heart, Leaf, CloudSun, 
  Scale, Users, Download, ExternalLink, X, Building2, AlertTriangle, Eye 
} from 'lucide-react';

interface PolicyItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  summary: string;
  details: string;
  pdfUrl?: string;
}

const GovernancePolicies: React.FC = () => {
  const [selectedPolicy, setSelectedPolicy] = useState<PolicyItem | null>(null);

  const policies: PolicyItem[] = [
    {
      id: "anticorrupcao",
      title: "Política Contra Corrupção e Fraudes",
      category: "Compliance & Integridade",
      icon: <ShieldCheck className="w-6 h-6 text-postes-red" />,
      summary: "Diretrizes de tolerância zero a suborno, propina, conflito de interesses e fraudes em todas as operações e contratações.",
      details: "A Postes Nordeste adota postura de estrita integridade e tolerância zero a qualquer ato de corrupção ou suborno. Nossos colaboradores, fornecedores e parceiros comerciais são orientados pelo rigor da Lei Anticorrupção (Lei nº 12.846/2013) e por práticas éticas auditáveis."
    },
    {
      id: "compras-sustentaveis",
      title: "Política de Compras Sustentáveis",
      category: "ESG & Suprimentos",
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
      summary: "Critérios socioambientais para seleção e homologação de fornecedores de insumos, cimento, aço e agregados.",
      details: "Incentivamos e priorizamos parceiros e fornecedores que demonstrem responsabilidade ambiental, rastreabilidade de matérias-primas (areia, brita, cimento e aço) e respeito integral aos direitos trabalhistas e normas ambientais."
    },
    {
      id: "responsabilidade-social",
      title: "Política de Responsabilidade Social Corporativa",
      category: "Impacto Social",
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      summary: "Compromisso com o desenvolvimento das comunidades no entorno de nossas fábricas, segurança do trabalho e cidadania.",
      details: "A empresa promove o engajamento contínuo com as comunidades locais de Salvador/Aratu, Moreno, Itabuna, Seabra e Fortaleza, investindo em ações de capacitação, inclusão social, saúde e bem-estar no trabalho."
    },
    {
      id: "protecao-dados",
      title: "Política de Proteção de Dados (LGPD)",
      category: "Privacidade & Segurança",
      icon: <Lock className="w-6 h-6 text-blue-600" />,
      summary: "Regras de privacidade, confidencialidade e segurança no tratamento de dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD).",
      details: "Asseguramos o tratamento ético, transparente e seguro dos dados de colaboradores, clientes, representantes e parceiros comerciais, garantindo os direitos dos titulares e a segurança da informação."
    },
    {
      id: "mudancas-climaticas",
      title: "Política de Mudanças Climáticas",
      category: "Sustentabilidade",
      icon: <CloudSun className="w-6 h-6 text-sky-600" />,
      summary: "Iniciativas de eficiência energética, redução da pegada de carbono na produção de concreto e reciclagem de resíduos.",
      details: "Nossa engenharia trabalha para otimizar o consumo de combustíveis na frota de transporte, reaproveitar água de lavagem de betoneiras e adotar misturas de concreto de alto desempenho com menor pegada de carbono."
    },
    {
      id: "combate-assedio",
      title: "Política de Prevenção e Combate ao Assédio",
      category: "Cultura & Respeito",
      icon: <Scale className="w-6 h-6 text-purple-600" />,
      summary: "Mecanismos de prevenção, canal de denúncias e combate rigoroso ao assédio moral, sexual e qualquer forma de discriminação.",
      details: "Promovemos um ambiente corporativo seguro, respeitoso e inclusivo. Repudiamos veementemente qualquer comportamento hostil, discriminatório ou intimidador, disponibilizando canal confidencial para apuração."
    }
  ];

  return (
    <section id="governanca" className="py-20 md:py-28 bg-slate-100 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-[#FF2E17]" />
            <span>Governança Corporativa & Compliance</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            Políticas Corporativas e <span className="text-[#FF2E17]">Código de Ética</span>
          </h2>

          <p className="text-slate-500 text-base leading-relaxed">
            Transparência, integridade e responsabilidade socioambiental norteiam nossa liderança de 60 anos no mercado nacional.
          </p>
        </div>

        {/* Ethics Banner */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 mb-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="bg-postes-red/10 p-4 rounded-2xl text-postes-red flex-shrink-0">
              <Scale className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Código de Ética e Conduta Postes Nordeste
              </h3>
              <p className="text-slate-600 text-xs md:text-sm mt-1">
                Conjunto de princípios e normas que regem nossas relações com colaboradores, clientes, fornecedores e sociedade.
              </p>
            </div>
          </div>

          <button
            onClick={() => setSelectedPolicy({
              id: "codigo-etica",
              title: "Código de Ética e Conduta",
              category: "Integridade Corporativa",
              icon: <Scale className="w-6 h-6 text-postes-red" />,
              summary: "Manual completo de diretrizes éticas e conduta empresarial.",
              details: "O Código de Ética da Postes Nordeste reflete nossa história de respeitabilidade e honra às obrigações legais, contratuais e morais. Define o padrão de conduta esperado em todas as frentes de negócios e operações fabris."
            })}
            className="w-full md:w-auto bg-postes-navy hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors flex items-center justify-center space-x-2 whitespace-nowrap"
          >
            <Eye className="w-4 h-4 text-postes-red" />
            <span>Consultar Código de Ética</span>
          </button>
        </div>

        {/* 6 Policies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((policy) => (
            <div
              key={policy.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-postes-red/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:scale-105 transition-transform">
                    {policy.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {policy.category}
                  </span>
                </div>

                <h4 className="text-lg font-bold font-heading text-slate-900 group-hover:text-postes-red transition-colors">
                  {policy.title}
                </h4>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {policy.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedPolicy(policy)}
                  className="text-postes-red hover:text-postes-red-dark text-xs font-bold font-heading flex items-center space-x-1"
                >
                  <span>Ver Diretrizes</span>
                  <Eye className="w-3.5 h-3.5" />
                </button>

                <div className="text-[11px] text-slate-400 font-medium flex items-center space-x-1">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Documento Oficial</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Policy Modal Details */}
      {selectedPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in-up">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setSelectedPolicy(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-postes-red text-slate-700 hover:text-white p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-slate-100 p-3 rounded-xl">
                  {selectedPolicy.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-postes-red bg-postes-red/10 px-2 py-0.5 rounded">
                    {selectedPolicy.category}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-slate-900 mt-1">
                    {selectedPolicy.title}
                  </h3>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-slate-700 text-sm leading-relaxed">
                <p className="font-medium text-slate-900 mb-2">Visão Geral & Diretrizes:</p>
                <p>{selectedPolicy.details}</p>
              </div>

              {/* PDF Document Placeholder Action */}
              <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl flex items-center justify-between text-xs text-amber-900">
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-amber-700" />
                  <span>Documento em formato PDF pronto para download</span>
                </div>
                <button
                  onClick={() => alert("Link para o documento PDF oficial será integrado em breve.")}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Baixar PDF</span>
                </button>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedPolicy(null)}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GovernancePolicies;
