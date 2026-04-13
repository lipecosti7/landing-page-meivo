const stats = [
  { value: "PWA", label: "Mobile-first" },
  { value: "Offline", label: "Vende sem internet" },
  { value: "Estoque", label: "Controle por produto" },
  { value: "Relatórios", label: "Vendas e desempenho" },
];

export function Stats() {
  return (
    <section id="offline" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_30%_30%,rgba(43,157,238,0.2),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_70%_60%,rgba(26,86,255,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-8 lg:px-16">
        <div className="liquid-glass rounded-3xl p-12 md:p-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-heading font-extrabold tracking-tight text-foreground md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-foreground/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
