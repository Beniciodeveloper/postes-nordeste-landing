import React from 'react';
import { Mail, ExternalLink, X, Lock, ShieldCheck, HelpCircle } from 'lucide-react';

interface WebmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WebmailModal: React.FC<WebmailModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in-up">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-slate-200 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-100 hover:bg-postes-red text-slate-700 hover:text-white p-2 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6 text-center">
          <div className="bg-postes-red/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-postes-red">
            <Mail className="w-8 h-8" />
          </div>

          <div>
            <h3 className="text-xl font-bold font-heading text-slate-900">
              Webmail Corporativo Postes Nordeste
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Acesso exclusivo para colaboradores e representantes autorizados.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs text-slate-700 space-y-2">
            <div className="flex items-center space-x-2 text-slate-900 font-bold">
              <Lock className="w-4 h-4 text-postes-red" />
              <span>Instruções de Acesso:</span>
            </div>
            <p>
              Digite seu e-mail corporativo completo (ex: <em>seu.nome@postesnordeste.com.br</em>) e sua senha de rede.
            </p>
            <p className="text-[11px] text-slate-500">
              Em caso de dúvidas de suporte ou redefinição de credenciais, contate o setor de TI da Matriz Aratu.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="https://webmail.postesnordeste.com.br"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full bg-postes-red hover:bg-postes-red-dark text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Ir para a Tela de Login do Webmail</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors"
            >
              Voltar ao Site Institucional
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WebmailModal;
