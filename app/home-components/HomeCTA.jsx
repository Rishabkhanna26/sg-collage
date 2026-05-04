import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeCTA() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-hero p-10 text-primary-foreground shadow-elegant md:p-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight md:text-5xl">Your medical career starts here.</h2>
              <p className="mt-4 text-lg opacity-85">Admissions for academic year 2026 are now open. Limited seats - secure yours today.</p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link href="/admissions" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition hover:opacity-95">
                Start Application <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10">
                Talk to Counselor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
