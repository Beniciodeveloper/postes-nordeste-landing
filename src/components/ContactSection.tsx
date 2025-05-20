import { MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

type LocationData = {
  name: string;
  address?: string;
  phones: string[];
  emails: string[];
  isPartner?: boolean;
  website?: string;
};

const ContactSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("MATRIZ");
  
  const locations: LocationData[] = [
    {
      name: "MATRIZ",
      phones: ["(71) 3413-8422"],
      emails: ["postesnordeste@postesnordeste.com.br", "vendas@postesnordeste.com.br"],
      address: "Av. Principal, 1234 - Recife, PE",
    },
    {
      name: "SEABRA - BA",
      phones: ["(75) 3331-3166", "(71) 98115-2698"],
      emails: ["seabra.ba@postesnordeste.com.br"],
    },
    {
      name: "PARCEIRO ITABUNA - BA",
      phones: ["(71) 98114-3330", "WhatsApp: (73) 98251-0527"],
      emails: ["inprenor@inprenor.com.br", "gerencia@inprenor.com.br"],
      isPartner: true,
      website: "www.inprenor.com.br",
    },
    {
      name: "MORENO - PE",
      phones: ["(81) 3073-9050", "(81) 99198-4490"],
      emails: ["moreno.pe@postesnordeste.com.br", "adm.pe@postesnordeste.com.br", "rh.moreno@postesnordeste.com.br"],
    },
    {
      name: "LAGOA DO PIAUÍ - PI",
      phones: ["(71) 98114-5671"],
      emails: ["adm.piaui@postesnordeste.com.br"],
    },
    {
      name: "SÃO LUÍS - MA",
      phones: ["(98) 3227-1169", "(98) 98214-4496", "(98) 99991-0753"],
      emails: ["schalcher@terra.com.br"],
      isPartner: true,
      address: "Representação: Schalcher Representações",
    },
  ];

  return (
    <section id="contato" className="section-padding bg-white py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-postes-gray-dark">
              Entre em <span className="text-postes-red">Contato</span>
            </h2>
            <p className="mb-8 text-postes-gray-dark">
              Encontre-nos em nossa matriz e unidades regionais ou entre em contato 
              através dos nossos canais de atendimento.
            </p>
            
            {/* Location selector */}
            <div className="flex flex-wrap gap-2 mb-8">
              {locations.map((location) => (
                <button
                  key={location.name}
                  onClick={() => setSelectedLocation(location.name)}
                  className={`py-1 px-3 text-sm rounded-full transition-all ${
                    selectedLocation === location.name
                      ? "bg-postes-red text-white"
                      : "bg-gray-100 text-postes-gray-dark hover:bg-gray-200"
                  }`}
                >
                  {location.name}
                </button>
              ))}
            </div>
            
            {/* Selected location details */}
            {locations.find(loc => loc.name === selectedLocation) && (
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-postes-red/10 p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-postes-red" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-postes-gray-dark">Telefone</h3>
                    {locations.find(loc => loc.name === selectedLocation)?.phones.map((phone, index) => (
                      <p key={index} className="text-postes-gray-dark">{phone}</p>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-postes-red/10 p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5 text-postes-red" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-postes-gray-dark">Email</h3>
                    {locations.find(loc => loc.name === selectedLocation)?.emails.map((email, index) => (
                      <p key={index} className="text-postes-gray-dark">{email}</p>
                    ))}
                    {locations.find(loc => loc.name === selectedLocation)?.website && (
                      <p className="text-postes-gray-dark mt-1">
                        Site: {locations.find(loc => loc.name === selectedLocation)?.website}
                      </p>
                    )}
                  </div>
                </div>
                
                {locations.find(loc => loc.name === selectedLocation)?.address && (
                  <div className="flex items-start">
                    <div className="bg-postes-red/10 p-3 rounded-full mr-4">
                      <MapPin className="w-5 h-5 text-postes-red" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-postes-gray-dark">
                        {locations.find(loc => loc.name === selectedLocation)?.isPartner ? "Endereço" : "Matriz"}
                      </h3>
                      <p className="text-postes-gray-dark">
                        {locations.find(loc => loc.name === selectedLocation)?.address}
                      </p>
                    </div>
                  </div>
                )}

                {locations.find(loc => loc.name === selectedLocation)?.isPartner && (
                  <div className="mt-2 text-xs bg-gray-100 p-2 rounded">
                    <p className="text-postes-gray-dark">* Parceiro/Representante Autorizado</p>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="animate-on-scroll h-[300px] md:h-[500px] flex justify-center items-center w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7796.657163149982!2d-38.45236454214418!3d-12.807340368284007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71614a7f5fc6339%3A0x62db8f08bfc3df54!2sPostes%20Nordeste!5e0!3m2!1spt-BR!2sbr!4v1714927685103!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '8px', maxWidth: '100%', display: 'block' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Postes Nordeste"
              className="shadow-md w-full max-w-full h-full mx-auto"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
