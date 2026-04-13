import { BarChart3, Package, Shield, WifiOff, Zap } from "lucide-react";
import { Badge } from "./ui/badge";

const features = [
  {
    icon: Zap,
    title: "Rápido no balcão",
    description: "Fluxo direto para vender sem distrações e sem telas desnecessárias.",
  },
  {
    icon: WifiOff,
    title: "Funciona com internet instável",
    description: "Continue vendendo e sincronize quando a conexão voltar.",
  },
  {
    icon: Package,
    title: "Estoque organizado",
    description: "Controle de produtos e quantidades para manter tudo em dia.",
  },
  {
    icon: BarChart3,
    title: "Relatórios claros",
    description: "Acompanhe vendas, desempenho e histórico sem depender de planilhas.",
  },
  {
    icon: Shield,
    title: "Confiável",
    description: "Interface estável e previsível para operação diária com segurança.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-24 lg:px-16">
      <div className="flex flex-col items-start gap-4">
        <Badge>Para formaturas</Badge>
        <h2 className="text-4xl font-heading leading-[1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Tudo no mesmo lugar.
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="liquid-glass rounded-2xl p-6">
              <div className="liquid-glass-strong flex size-10 items-center justify-center rounded-full text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-foreground/60">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
