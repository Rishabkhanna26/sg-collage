import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, GraduationCap, Stethoscope } from "lucide-react";

export function HomeHero() {
  return (
    <section className="bg-gradient-hero pb-16 pt-32 text-primary-foreground md:pb-24 md:pt-40">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em]">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Admissions 2026 Now Open
          </p>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">
            Shaping tomorrow's <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">healthcare leaders</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
            SQ Group of Colleges is a premier medical institution where excellence in education meets compassionate care.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/admissions" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary shadow-card transition hover:opacity-95">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/courses" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10">
              Explore Programs
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-primary-foreground/75">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> NMC Approved</div>
            <div className="flex items-center gap-2"><Award className="h-4 w-4 text-accent" /> INC Recognized</div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-elegant">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80" alt="Medical professionals" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card p-5 text-foreground shadow-card">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-lg">98%</div>
                <div className="text-xs text-muted-foreground">Graduate Placement</div>
              </div>
            </div>
          </div>

          <div className="absolute -right-6 -top-6 rounded-2xl bg-card p-5 text-foreground shadow-card">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-lg">25+</div>
                <div className="text-xs text-muted-foreground">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
