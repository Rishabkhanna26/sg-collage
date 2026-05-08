import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { upcomingEvents, campusNews } from "@/events/data";

const homeNewsItems = [
  ...upcomingEvents.slice(0, 2),
  ...campusNews.slice(0, 1),
];

export function HomeNews() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-accent/15 text-primary mb-3">
              Latest Updates
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">News & Events</h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline shrink-0"
          >
            View all events <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {homeNewsItems.map((item) => (
            <Link
              key={item.slug}
              href={`/events/${item.slug}`}
              className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:scale-[1.02] block"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-accent/15 px-2.5 py-1 font-semibold uppercase tracking-wider text-primary">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
