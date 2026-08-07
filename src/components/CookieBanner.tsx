import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, X, Check } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('postes_nordeste_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }

    const handleOpenCookies = () => setVisible(true);
    window.addEventListener('open_cookie_banner', handleOpenCookies);
    return () => window.removeEventListener('open_cookie_banner', handleOpenCookies);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('postes_nordeste_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('postes_nordeste_cookie_consent', 'necessary_only');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-xl z-50 animate-fade-in-up">
      <div className="bg-slate-900/95 text-white p-5 md:p-6 rounded-2xl border border-slate-700 shadow-2xl backdrop-blur-xl space-y-4">
        
        <div className="flex items-start space-x-3">
          <div className="bg-postes-red/20 p-2.5 rounded-xl text-postes-red-light flex-shrink-0">
            <Cookie className="w-6 h-6" />
          </div>

          <div className="space-y-1 pr-6">
            <h4 className="font-bold font-heading text-sm text-white flex items-center gap-1.5">
              <span>Privacidade & Cookies (LGPD)</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Utilizamos cookies estritamente necessários e tecnologias analíticas para melhorar a navegação, analisar o desempenho do site e garantir conformidade com a LGPD (Lei nº 13.709/2018).
            </p>
          </div>

          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            title="Fechar banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-800">
          <button
            onClick={handleAccept}
            className="flex-1 bg-postes-red hover:bg-postes-red-dark text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors flex items-center justify-center space-x-1 shadow-md"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Aceitar Todos os Cookies</span>
          </button>

          <button
            onClick={handleDecline}
            className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium py-2 px-4 rounded-xl text-xs border border-slate-700 transition-colors"
          >
            <span>Apenas Necessários</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default CookieBanner;
