import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">BP Host</h3>
              <p className="text-background/80">
                Consultoria e Soluções em Meios de Pagamento.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-background/80">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contato@bphost.com.br" className="hover:text-background transition-smooth">
                    contato@bphost.com.br
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="https://wa.me/5511987474707" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-smooth">
                    (11) 98747-4707
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <nav className="space-y-2 text-background/80">
                <a href="#sobre" className="block hover:text-background transition-smooth">Sobre</a>
                <a href="#solucoes" className="block hover:text-background transition-smooth">Soluções</a>
                <a href="#parceiros" className="block hover:text-background transition-smooth">Parceiros</a>
                <a href="#contato" className="block hover:text-background transition-smooth">Contato</a>
              </nav>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>BP Host © 2025 – Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
