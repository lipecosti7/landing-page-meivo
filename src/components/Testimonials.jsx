import { Badge } from "./ui/badge";

const faqs = [
  {
    q: "O Meivo PDV funciona sem internet?",
    a: "Sim. Você consegue continuar operando com internet instável e sincroniza quando a conexão voltar.",
  },
  {
    q: "É mobile-first mesmo?",
    a: "Sim. O foco é operação rápida no celular (PWA), com UI clara e toques mínimos para vender.",
  },
  {
    q: "Consigo controlar estoque e categorias?",
    a: "Sim. Dá para organizar produtos, categorias e acompanhar quantidades e histórico.",
  },
  {
    q: "Como eu peço uma demonstração?",
    a: "Clique em “Pedir demo” e fale com a gente. A gente entende seu fluxo e configura o melhor caminho.",
  },
];

export function Testimonials() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-8 py-24 lg:px-16">
      <div className="flex flex-col items-start gap-4">
        <Badge>FAQ</Badge>
        <h2 className="text-4xl font-heading leading-[1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Perguntas frequentes.
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {faqs.map((item) => (
          <div key={item.q} className="liquid-glass rounded-2xl p-8">
            <div className="text-base font-semibold text-foreground">{item.q}</div>
            <p className="mt-3 text-sm font-medium text-foreground/65">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
