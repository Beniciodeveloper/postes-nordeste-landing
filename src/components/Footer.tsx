
const Footer = () => {
  return (
    <footer className="bg-postes-gray-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl mb-4 font-bold">
              <span className="text-postes-red font-black">POSTES</span> NORDESTE S.A.
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Especialistas em artefatos de concreto pré-moldado para os setores de eletrificação e construção civil desde 1965.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg mb-4 font-bold">Unidades</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">Recife - PE (Matriz)</li>
              <li className="text-sm text-gray-300">Fortaleza - CE</li>
              <li className="text-sm text-gray-300">Salvador - BA</li>
              <li className="text-sm text-gray-300">Maceió - AL</li>
              <li className="text-sm text-gray-300">Natal - RN</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg mb-4 font-bold">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-postes-red hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-postes-red hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-postes-red hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Postes Nordeste S.A. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-postes-red transition-colors">
              Política de privacidade
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-postes-red transition-colors">
              Termos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
