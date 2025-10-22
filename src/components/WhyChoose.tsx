import { Lock, Settings, HandshakeIcon, Sparkles } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Lock,
      title: "Segurança e Confiabilidade",
      description: "Soluções em conformidade com o mercado financeiro. Profissionais de renome no mercado."
    },
    {
      icon: Settings,
      title: "Tecnologia Flexível",
      description: "APIs robustas e escaláveis para integração perfeita."
    },
    {
      icon: HandshakeIcon,
      title: "Suporte Consultivo",
      description: "Acompanhamento técnico e estratégico personalizado."
    },
    {
      icon: Sparkles,
      title: "Soluções Sob Medida",
      description: "Personalização total da experiência de pagamento."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Por que escolher a BP Host</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-lg border border-border hover:border-primary transition-smooth hover:shadow-card">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
