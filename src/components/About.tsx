import { Shield, Zap, Users, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Subadquirência",
      description: "Soluções completas em subadquirência"
    },
    {
      icon: Zap,
      title: "White Label's",
      description: "Plataformas personalizadas"
    },
    {
      icon: Users,
      title: "Softwares",
      description: "Desenvolvimento customizado"
    },
    {
      icon: Rocket,
      title: "Consultoria",
      description: "Estruturação estratégica"
    }
  ];

  return (
    <section id="sobre" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Quem Somos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Somos especialistas em consultoria desde 2009, tecnologia e operação de meios de pagamento. Ajudamos fintechs, plataformas e empresas a se tornarem subadquirentes completas, com marca própria, estrutura regulatória e infraestrutura moderna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
