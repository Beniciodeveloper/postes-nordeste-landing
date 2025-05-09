
import { useState } from 'react';
import Button from './Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the data to your backend
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-postes-gray-dark">
              Entre em <span className="text-postes-red">Contato</span>
            </h2>
            <p className="mb-8 text-postes-gray-dark">
              Preencha o formulário e nossa equipe entrará em contato para atender sua necessidade 
              com agilidade e profissionalismo.
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
          
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="bg-postes-gray-light p-8 rounded-md shadow-sm">
              <div className="mb-4">
                <label htmlFor="name" className="block text-postes-gray-dark mb-2 font-medium">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-postes-red"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-postes-gray-dark mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-postes-red"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-postes-gray-dark mb-2 font-medium">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-postes-red"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block text-postes-gray-dark mb-2 font-medium">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-postes-red"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-postes-gray-dark mb-2 font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-postes-red"
                  required
                ></textarea>
              </div>
              
              <Button type="submit">
                Solicitar orçamento
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
