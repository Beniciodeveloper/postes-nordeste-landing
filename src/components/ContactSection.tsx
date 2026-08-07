import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building2, MessageCircle, ArrowUpRight } from 'lucide-react';

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

  const WHATSAPP_URL = 'https://wa.me/5571981148422?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.';

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

  return (
    <section id="contato" className="py-20 md:py-28 bg-slate-50 text-slate-800 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#FF2E17]/10 border border-[#FF2E17]/20 text-[#FF2E17] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Canais de Atendimento e Redes de Vendas</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-slate-900">
            Fale Conosco no <span className="text-[#25D366]">WhatsApp</span> ou com Nossas Unidades
          </h2>

          <p className="text-slate-500 text-base leading-relaxed">
            Atendimento comercial agilizado diretamente via WhatsApp, além dos contatos das nossas fábricas e representantes no Norte e Nordeste.
          </p>
        </div>

        {/* WhatsApp Direct Hero Card */}
        <div className="max-w-4xl mx-auto mb-16 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 px-3 py-1 rounded-full">
              Atendimento Comercial Rápido
            </span>
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Precisa de Cotação ou Informações Técnicas?
            </h3>
            <p className="text-sm text-slate-500 max-w-xl">
              Fale diretamente com nossa equipe de vendas pelo WhatsApp e receba suporte para orçamentos, prazos de entrega e especificações.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all flex items-center space-x-3 text-base shrink-0 scale-100 hover:scale-[1.02]"
          >
            <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
            <span>Chamar no WhatsApp</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* Location Selector Pill Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {locations.map((loc) => (
            <button
              key={loc.name}
              onClick={() => setSelectedLocation(loc.name)}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all ${
                selectedLocation === loc.name
                  ? "bg-[#FF2E17] text-white shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>

        {/* Location Info Grid */}
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
                    <p className="text-xs text-[#25D366] font-bold mt-1">
                      WhatsApp Local: {currentLoc.whatsapp}
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

            <div className="pt-2">
              <a
                href={`https://wa.me/5571981148422?text=Olá!%20Contato%20referente%20à%20unidade%20${encodeURIComponent(currentLoc.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 text-xs uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Enviar Mensagem no WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-3 shadow-sm h-[420px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7796.657163149982!2d-38.45236454214418!3d-12.807340368284007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71614a7f5fc6339%3A0x62db8f08bfc3df54!2sPostes%20Nordeste!5e0!3m2!1spt-BR!2sbr!4v1714927685103!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1.25rem' }}
              allowFullScreen={false}
              loading="lazy"
              title={`Mapa ${currentLoc.name}`}
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
