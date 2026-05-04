import { ShieldCheck, Building2, Microscope, Users, BookOpen, Award } from "lucide-react";
import { SectionHeading } from "@/shared/SectionHeading";

const features = [
  { icon: ShieldCheck, title: "NMC Recognised", desc: "Fully accredited by the National Medical Commission of India." },
  { icon: Building2, title: "Teaching Hospital", desc: "1000+ bed affiliated tertiary care hospital for clinical training." },
  { icon: Microscope, title: "Modern Labs", desc: "Anatomy, biochemistry, pathology and skill labs with simulation." },
  { icon: Users, title: "Expert Faculty", desc: "PhD and FCPS qualified educators from top institutions." },
  { icon: BookOpen, title: "Digital Library", desc: "Access to international journals, eBooks and research databases." },
  { icon: Award, title: "Scholarships", desc: "Merit and need-based financial aid for deserving students." },
];

export function HomeFeatures() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading eyebrow="Why Choose SQ" title="Built for excellence, designed for you" description="Everything you need to thrive in your medical career — from world-class faculty to immersive clinical exposure." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-5 rounded-2xl border border-border/60 bg-gradient-card p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
