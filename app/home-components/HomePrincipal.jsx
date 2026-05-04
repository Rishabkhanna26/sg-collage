import { Quote } from "lucide-react";

export function HomePrincipal() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary-glow/30 blur-3xl" />
      <div className="relative container mx-auto px-4 lg:px-8 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
          <div className="mx-auto aspect-square max-w-sm overflow-hidden rounded-3xl shadow-glow">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80" alt="Principal" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-3">
          <Quote className="mb-5 h-12 w-12 text-accent" />
          <p className="text-2xl font-medium leading-snug md:text-3xl">
            "At SQ, we don't just train doctors - we nurture healers, researchers, and leaders who will transform healthcare for generations to come."
          </p>
          <div className="mt-8">
            <div className="text-lg font-bold">Prof. Dr. Sajid Qureshi</div>
            <div className="text-sm opacity-75">Principal, SQ Group of Colleges</div>
          </div>
        </div>
      </div>
    </section>
  );
}
