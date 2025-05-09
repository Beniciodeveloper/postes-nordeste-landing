
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contato" className="section-padding bg-white">
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
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-postes-red/10 p-3 rounded-full mr-4">
                  <Phone className="w-5 h-5 text-postes-red" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-postes-gray-dark">Telefone</h3>
                  <p className="text-postes-gray-dark">(XX) XXXX-XXXX</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-postes-red/10 p-3 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-postes-red" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-postes-gray-dark">Email</h3>
                  <p className="text-postes-gray-dark">contato@postesnordeste.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-postes-red/10 p-3 rounded-full mr-4">
                  <MapPin className="w-5 h-5 text-postes-red" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-postes-gray-dark">Matriz</h3>
                  <p className="text-postes-gray-dark">Av. Principal, 1234 - Recife, PE</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll h-[400px] md:h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7796.657163149982!2d-38.45236454214418!3d-12.807340368284007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71614a7f5fc6339%3A0x62db8f08bfc3df54!2sPostes%20Nordeste!5e0!3m2!1spt-BR!2sbr!4v1714927685103!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Postes Nordeste"
              className="shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
