import { SectionHeading } from "@/shared/SectionHeading";
import { Reveal } from "@/shared/Reveal";

export function FacultyHeads({ heads }) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading eyebrow="Leadership" title="Heads of Department" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {heads.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant transition-all">
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg leading-tight">{p.name}</h3>
                  <p className="text-sm text-accent font-semibold mt-1">{p.role}</p>
                  <p className="text-xs text-muted-foreground mt-2">{p.quals}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
