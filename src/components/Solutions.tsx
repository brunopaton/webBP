import { CreditCard, Split, Code, TrendingUp, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  const solutions = [
    {
      icon: CreditCard,
      title: "Subadquirência",
      description: "Crie sua própria operação de pagamentos com marca própria. Estrutura técnica e consultiva completa para implantação e gestão."
    },
    {
      icon: Split,
      title: "Split de Pagamentos",
      description: "Automatize o repasse de valores entre múltiplos recebedores. Ideal para marketplaces e plataformas de serviços."
    },
    {
      icon: Code,
      title: "API de Integração",
      description: "Conecte sistemas de forma simples e segura. API robusta para pagamentos, conciliação e relatórios em tempo real."
    },
    {
      icon: TrendingUp,
      title: "Liquidação e Relacionamento",
      description: "Gerencie liquidações de forma automática e transparente. Parceria com as principais adquirentes do mercado."
    },
    {
      icon: MessageSquare,
      title: "Consultoria Especializada",
      description: "Consultoria estratégica e técnica para estruturação de subadquirência. Inclui mapeamento regulatório, tecnologia e compliance."
    }
  ];

  return (
    <section id="solucoes" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Soluções completas para seu ecossistema de pagamentos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Da estruturação à operação, a BP Host oferece tudo o que sua empresa precisa para atuar no mercado de pagamentos com autonomia, segurança e eficiência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {solutions.map((solution, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl mb-6">Da consultoria à operação, a BP Host é o seu parceiro completo no universo dos meios de pagamento.</p>
            <Button size="lg" variant="default">Fale com um especialista</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
