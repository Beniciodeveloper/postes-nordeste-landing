import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building2, CheckCircle2, MessageCircle } from 'lucide-react';

type LocationData = {
  name: string;
  type: string;
  address: string;
  phones: string[];
  emails: string[];
  whatsapp?: string;
  isPartner?: boolean;
  website?: string;
};

const ContactSection: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("MATRIZ (ARATU - BA)");

  const WHATSAPP_URL = 'https://wa.me/5571981148422?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.';

  const locations: LocationData[] = [
    {
      name: "MATRIZ (ARATU - BA)",
      type: "Matriz Fabril",
      address: "Centro Industrial de Aratu (CIA) - Simões Filho / Salvador - BA",
      phones: ["(71) 3413-8422"],
      emails: ["postesnordeste@postesnordeste.com.br", "vendas@postesnordeste.com.br"],
      whatsapp: "(71) 98114-8422"
    },
    {
      name: "MORENO - PE",
      type: "Filial Fabril Pernambuco",
      address: "Rodovia BR-232, Km 26 - Moreno - PE",
      phones: ["(81) 3073-9050", "(81) 99198-4490"],
      emails: ["moreno.pe@postesnordeste.com.br", "adm.pe@postesnordeste.com.br"]
    },
    {
      name: "FORTALEZA - CE",
      type: "Filial Fabril Ceará",
      address: "Distrito Industrial - Fortaleza / Maracanaú - CE",
      phones: ["(85) 3299-1000", "(85) 98114-0000"],
      emails: ["fortaleza.ce@postesnordeste.com.br"]
    },
    {
      name: "SEABRA - BA",
      type: "Filial Centro-Oeste Baiano",
      address: "Rodovia BR-242, Km 380 - Seabra - BA",
      phones: ["(75) 3331-3166", "(71) 98115-2698"],
      emails: ["seabra.ba@postesnordeste.com.br"]
    },
    {
      name: "ITABUNA - BA (INPRENOR)",
      type: "Parceiro Fabril Sul da Bahia",
      address: "Distrito Industrial - Itabuna - BA",
      phones: ["(71) 98114-3330"],
      emails: ["inprenor@inprenor.com.br", "gerencia@inprenor.com.br"],
      whatsapp: "(73) 98251-0527",
      isPartner: true,
      website: "www.inprenor.com.br"
    },
    {
      name: "LAGOA DO PIAUÍ - PI",
      type: "Unidade Piauí",
      address: "BR-316, Lagoa do Piauí - PI",
      phones: ["(71) 98114-5671"],
      emails: ["adm.piaui@postesnordeste.com.br"]
    },
    {
      name: "SÃO LUÍS - MA",
      type: "Representação Comercial",
      address: "Schalcher Representações - São Luís - MA",
      phones: ["(98) 3227-1169", "(98) 98214-4496", "(98) 99991-0753"],
      emails: ["schalcher@terra.com.br"],
      isPartner: true
    },
  ];

  const currentLoc = locations.find(loc => loc.name === selectedLocation) || locations[0];

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formEl = e.currentTarget as HTMLFormElement;
    const name = (formEl.querySelector('input[type="text"]') as HTMLInputElement)?.value || '';
    const company = (formEl.querySelectorAll('input[type="text"]')[1] as HTMLInputElement)?.value || '';
    const product = (formEl.querySelector('select') as HTMLSelectElement)?.value || '';
    const detail = (formEl.querySelector('textarea') as HTMLTextAreaElement)?.value || '';
    const msg = encodeURIComponent(`Olá, sou ${name} da empresa ${company}. Tenho interesse em: ${product}. Detalhes: ${detail}`);
    window.open(`https://wa.me/5571981148422?text=${msg}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-slate-50 text-slate-800 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#FF2E17]/10 border border-[#FF2E17]/20 text-[#FF2E17] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Canais de Atendimento e Redes de Vendas</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-slate-900">
            Fale com Nossas <span className="text-[#FF2E17]">Unidades & Filiais</span>
          </h2>

          <p className="text-slate-500 text-base leading-relaxed">
            Localize a fábrica ou representante mais próximo para cotações técnicas e atendimento a concessionárias e construtoras.
          </p>
        </div>

        {/* Location Selector Pill Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {locations.map((loc) => (
            <button
              key={loc.name}
              onClick={() => setSelectedLocation(loc.name)}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all ${
                selectedLocation === loc.name
                  ? "bg-[#FF2E17] text-white shadow-lg scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Location Info Box */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-100">
                {currentLoc.type}
              </span>
              <h3 className="text-2xl font-bold font-heading text-slate-900 mt-2">
                {currentLoc.name}
              </h3>
              <p className="text-slate-500 text-xs mt-1 flex items-center">
                <MapPin className="w-3.5 h-3.5 text-[#FF2E17] mr-1.5 flex-shrink-0" />
                {currentLoc.address}
              </p>
            </div>

            <hr className="border-slate-200" />

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-[#FF2E17]/10 p-2.5 rounded-xl text-[#FF2E17] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Telefones de Contato</h4>
                  {currentLoc.phones.map((phone, i) => (
                    <p key={i} className="text-sm font-semibold text-slate-900 mt-0.5">{phone}</p>
                  ))}
                  {currentLoc.whatsapp && (
                    <p className="text-xs text-emerald-600 font-bold mt-1">
                      WhatsApp Comercial: {currentLoc.whatsapp}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-[#FF2E17]/10 p-2.5 rounded-xl text-[#FF2E17] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">E-mail Departamental</h4>
                  {currentLoc.emails.map((email, i) => (
                    <p key={i} className="text-sm font-semibold text-slate-900 mt-0.5">{email}</p>
                  ))}
                  {currentLoc.website && (
                    <p className="text-xs text-slate-500 mt-1">
                      Website: <a href={`https://${currentLoc.website}`} target="_blank" rel="noreferrer" className="text-[#FF2E17] underline">{currentLoc.website}</a>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="rounded-2xl overflow-hidden border border-slate-700 h-64 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7796.657163149982!2d-38.45236454214418!3d-12.807340368284007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71614a7f5fc6339%3A0x62db8f08bfc3df54!2sPostes%20Nordeste!5e0!3m2!1spt-BR!2sbr!4v1714927685103!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title={`Mapa ${currentLoc.name}`}
              ></iframe>
            </div>

          </div>

          {/* Direct Quote / Inquiry Form */}
          <div className="lg:col-span-6 bg-white text-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-200">
            <div className="mb-6 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-postes-red">Atendimento Comercial</span>
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                Solicite uma Cotação para a sua Empresa
              </h3>
              <p className="text-slate-600 text-xs">
                Preencha os dados e receba proposta de nossa equipe técnica e comercial.
              </p>
            </div>

              <form onSubmit={handleWhatsApp} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Nome Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-postes-red"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Razão Social / Empresa</label>
                    <input
                      type="text"
                      required
                      placeholder="Nome da empresa"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-postes-red"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">E-mail Corporativo</label>
                    <input
                      type="email"
                      required
                      placeholder="email@empresa.com.br"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-postes-red"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Telefone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-postes-red"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Linha de Produto ou Projeto</label>
                  <select className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-postes-red">
                    <option>Postes DT e Circulares para Eletrificação</option>
                    <option>Estruturas e Pórticos de Subestações</option>
                    <option>Galpões Pré-Moldados em Concreto</option>
                    <option>Paredes Corta-Fogo e Defensas Viárias</option>
                    <option>Produtos Rurais (Mourões, Cochos, Currais)</option>
                    <option>Outros Pré-Moldados Customizados</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Detalhamento do Pedido / Cidade da Obra</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Descreva a quantidade, especificações, prazos ou localização da obra..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-postes-red"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 text-sm uppercase tracking-wider scale-100 hover:scale-[1.01]"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Falar com Vendas no WhatsApp</span>
                </button>
              </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
