import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle, FileText, Download, X, Microscope, Scale, Building2 } from 'lucide-react';

const IsoQualitySection: React.FC = () => {
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  return (
    <section id="qualidade" className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          
          {/* Subtle red accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF2E17] rounded-l-3xl"></div>

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* ISO Badge Visual */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 p-1 shadow-xl flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded-full p-6 flex flex-col items-center justify-center text-center space-y-2 border border-amber-200">
                    <Award className="w-12 h-12 text-amber-500" />
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">Certificação Internacional</p>
                    <p className="text-3xl font-extrabold font-heading text-slate-900 tracking-wider">ISO 9001</p>
                    <div className="w-12 h-0.5 bg-amber-400/60 my-1"></div>
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">Sistema de Gestão da Qualidade</p>
                  </div>
                </div>

                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                  Garantia de Padrão Normativo
                </div>
              </div>
            </div>

            {/* Quality Details */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Gestão da Qualidade & Controle Tecnológico</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
                Certificação <span className="text-[#FF2E17]">ISO 9001</span> e Política de Qualidade
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                A Postes Nordeste opera sob rigoroso Sistema de Gestão da Qualidade certificado pela ISO 9001. Nossos parques fabris contam com laboratórios próprios para caracterização de materiais e ensaios de tração/carga em 100% dos lotes produzidos.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start space-x-3">
                  <Microscope className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Laboratórios de Controle</h4>
                    <p className="text-xs text-slate-500">Rompimento de corpos de prova e controle de tração dos aços.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start space-x-3">
                  <Scale className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Normas ABNT / NBR</h4>
                    <p className="text-xs text-slate-500">Conformidade com NBR 8451, NBR 9062 e requisitos das concessionárias.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => setShowPolicyModal(true)}
                  className="bg-[#FF2E17] hover:bg-[#d42512] text-white font-bold px-6 py-3 rounded-xl shadow-md transition-colors flex items-center space-x-2 text-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Política de Qualidade</span>
                </button>

                <a
                  href="#contato"
                  className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3 rounded-xl border border-slate-300 transition-colors flex items-center space-x-2 text-sm"
                >
                  <Building2 className="w-4 h-4 text-[#FF2E17]" />
                  <span>Solicitar Certificados de Lote</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Quality Policy Modal */}
      {showPolicyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in-up">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setShowPolicyModal(false)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-postes-red text-slate-700 hover:text-white p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-amber-500/10 p-3 rounded-xl text-amber-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">
                    Política de Qualidade Postes Nordeste S.A.
                  </h3>
                  <p className="text-xs text-slate-500">Documento de Diretrizes Institucionais • ISO 9001</p>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-slate-700 text-sm space-y-3 leading-relaxed">
                <p>
                  A <strong>Postes Nordeste S.A.</strong> estabelece como compromisso fundamental de sua Política de Qualidade:
                </p>
                <ul className="space-y-2 list-disc list-inside text-xs text-slate-700">
                  <li><strong>Satisfação do Cliente:</strong> Fornecer artefatos e estruturas pré-moldadas de concreto que atendam plenamente às especificações técnicas e expectativas dos nossos clientes.</li>
                  <li><strong>Melhoria Contínua:</strong> Aperfeiçoar continuamente a eficácia do Sistema de Gestão da Qualidade e os processos produtivos.</li>
                  <li><strong>Conformidade Normativa:</strong> Assegurar o cumprimento de todos os requisitos legais, normas ABNT e diretrizes das concessionárias homologadas.</li>
                  <li><strong>Capacitação Profissional:</strong> Investir no treinamento e valorização de nossos colaboradores para um ambiente seguro e de alta performance.</li>
                </ul>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setShowPolicyModal(false)}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-5 rounded-xl text-sm transition-colors"
                >
                  Entendido
                </button>
                
                <span className="text-xs text-slate-400 italic">Revisão Vigente • Diretoria Executiva</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IsoQualitySection;
