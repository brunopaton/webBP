import { Button } from "@/components/ui/button";
import { Network } from "lucide-react";

const Partners = () => {
  return (
    <section id="parceiros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary mb-8">
            <Network className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ecossistema que gera valor e resultados</h2>
          <p className="text-xl text-muted-foreground mb-8">
            A BP Host constrói parcerias sólidas com empresas, fintechs, adquirentes e Softwares que impulsionam o mercado de pagamentos. Nosso ecossistema conecta tecnologia, experiência e confiança, gerando oportunidades para todos os envolvidos.
          </p>
          <div className="mt-12">
            <p className="text-xl mb-6 font-medium">Junte-se a um ecossistema que cresce com segurança e inovação.</p>
            <a href="https://wa.me/5511987474707?text=Quero Ser Parceiro BP Host!" target="_blank" rel="noopener noreferrer"> <Button size="lg" variant="accent">Seja parceiro BP Host</Button> </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
