
const About = () => {
  return (
    <section id="sobre" className="section-padding company-section bg-white relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-postes-gray-dark">
              Sobre a <span className="text-postes-red">Postes Nordeste</span>
            </h2>
            
            <p className="mb-6 text-postes-gray-dark">
              Fundada em 1965, a Postes Nordeste S.A. é uma empresa brasileira especializada 
              na fabricação de artefatos de concreto pré-moldado, com foco nos setores de 
              eletrificação e construção civil.
            </p>
            
            <p className="mb-6 text-postes-gray-dark">
              Com cinco unidades fabris estrategicamente localizadas no Nordeste brasileiro,
              atendemos a concessionárias de energia elétrica, empresas de telecomunicações,
              construtoras e o agronegócio em toda a região e parte do Sudeste.
            </p>
            
            <p className="mb-6 text-postes-gray-dark">
              Nossa história é marcada pela constante busca de inovação, qualidade e excelência
              no atendimento, garantindo produtos que atendem às mais rigorosas normas técnicas
              do setor.
            </p>
          </div>
          
          <div className="md:w-1/2 animate-on-scroll">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-postes-red"></div>
              <div className="relative z-10 bg-postes-gray-light p-10 text-center">
                <h3 className="text-3xl md:text-5xl font-bold mb-4 text-postes-red">50+</h3>
                <p className="text-xl font-montserrat text-postes-gray-dark">
                  Anos inovando em soluções em concreto pré-moldado
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-postes-red"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
