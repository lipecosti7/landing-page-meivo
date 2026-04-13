import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const rows = [
  {
    title: "Agilidade no balcão",
    body: "Finalize vendas em poucos toques com uma interface clara e focada no essencial — sem enrolação.",
    cta: "Quero ver na prática",
    href: "#contato",
    image: "/brand/mascot/mascote.png",
    imageAlt: "Mascote da Meivo",
  },
  {
    title: "Estoque e relatórios sem dor",
    body: "Controle de estoque, histórico e relatórios para acompanhar o que está vendendo e o que precisa repor.",
    cta: "Pedir demonstração",
    href: "#contato",
    image: "/brand/logo/meivo-mark-blue.svg",
    imageAlt: "Símbolo Meivo",
    reverse: true,
  },
];

export function FeaturesChess() {
  return (
    <section id="recursos" className="mx-auto max-w-6xl px-8 py-24 lg:px-16">
      <div className="flex flex-col items-start gap-4">
        <Badge>Recursos</Badge>
        <h2 className="text-4xl font-heading leading-[1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Feito para vender rápido.
        </h2>
        <p className="max-w-2xl text-sm font-medium text-foreground/65 md:text-base">
          A experiência é pensada para o dia a dia: simples, confiável e com foco em
          execução.
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-20">
        {rows.map((row) => (
          <div key={row.title} className="grid items-center gap-12 md:grid-cols-2">
            <div className={row.reverse ? "md:order-2" : "md:order-1"}>
              <h3 className="text-3xl font-heading text-foreground md:text-4xl">
                {row.title}
              </h3>
              <p className="mt-4 text-sm font-medium text-foreground/65 md:text-base">
                {row.body}
              </p>
              <Button asChild variant="glass" className="mt-6">
                <a href={row.href} aria-label={row.cta}>
                  {row.cta}
                  <ArrowUpRight data-icon="inline-end" />
                </a>
              </Button>
            </div>

            <div className={row.reverse ? "md:order-1" : "md:order-2"}>
              <div className="liquid-glass overflow-hidden rounded-3xl p-10">
                <img
                  src={row.image}
                  alt={row.imageAlt}
                  className="h-[240px] w-full object-contain sm:h-[320px] md:h-[340px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
