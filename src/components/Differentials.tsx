import { Award, Building, Factory, MapPin, Users, ShieldCheck } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: <Award className="w-8 h-8 text-postes-red" />,
      title: "+50 anos de mercado",
      description: "Experiência sólida e confiável no setor de concreto pré-moldado"
    },
    {
      icon: <MapPin className="w-8 h-8 text-postes-red" />,
      title: "Ampla cobertura regional",
      description: "Presença no Norte, Nordeste e parte do Sudeste do Brasil"
    },
    {
      icon: <Factory className="w-8 h-8 text-postes-red" />,
      title: "5 unidades fabris",
      description: "Capacidade produtiva estrategicamente distribuída pela região"
    },
    {
      icon: <Building className="w-8 h-8 text-postes-red" />,
      title: "Cadastro em concessionárias",
      description: "Homologação nas principais concessionárias de energia"
    },
    {
      icon: <Users className="w-8 h-8 text-postes-red" />,
      title: "Soluções completas",
      description: "Atendimento a projetos urbanos, rurais e industriais"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-postes-red" />,
      title: "Garantia de qualidade",
      description: "Produtos certificados e testados conforme normas técnicas"
    }
  ];

  return (
    <section id="diferenciais" className="section-padding bg-white company-section">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-postes-gray-dark">
            Nossos <span className="text-postes-red">Diferenciais</span>
          </h2>
          <p className="max-w-2xl mx-auto text-postes-gray-dark">
            O que faz da Postes Nordeste uma referência nacional no fornecimento de 
            soluções em concreto pré-moldado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <div 
              key={index} 
              className="border border-gray-200 p-6 rounded-md transition-all duration-300 
                       hover:shadow-lg hover:border-postes-red animate-on-scroll"
            >
              <div className="mb-4">
                {differential.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-postes-gray-dark">
                {differential.title}
              </h3>
              <p className="text-postes-gray-dark">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
