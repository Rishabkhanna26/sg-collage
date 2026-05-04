import Link from "next/link";
import { ArrowRight } from "lucide-react";

const points = [
  "NMC and INC accredited curriculum",
  "State-of-the-art simulation labs",
  "International collaborations and exchange programs",
  "Vibrant research culture with funded grants",
];

export function HomeAbout() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-elegant">
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80" alt="College campus" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden h-48 w-48 overflow-hidden rounded-3xl border-4 border-background shadow-elegant md:block lg:-right-12">
            <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&q=80" alt="Lab" className="h-full w-full object-cover" />
          </div>
        </div>

        <div>
          <p className="mb-4 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About SQ
          </p>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            A legacy of medical excellence since 2001
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            For over two decades, SQ Group of Colleges has been at the forefront of medical education in India. We blend rigorous academics with hands-on clinical training across our network of teaching hospitals.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-foreground">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Link href="/admissions" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition hover:opacity-95">
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
