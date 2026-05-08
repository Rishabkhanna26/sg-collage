import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/shared/PageHero";
import { allEvents, getEventBySlug, getRelatedEvents } from "../data";
import { Calendar, Tag, ArrowLeft, Share2, Clock } from "lucide-react";

export function generateStaticParams() {
  return allEvents.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} — SQ Group of Colleges`,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) notFound();

  const related = getRelatedEvents(slug);

  return (
    <>
      <PageHero
        eyebrow={event.category}
        title={event.title}
        description={event.date}
      />

      <div className="container mx-auto px-4 lg:px-8 pt-8">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events &amp; News
        </Link>
      </div>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="overflow-hidden rounded-3xl shadow-card">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>

              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  This event is organized by SQ Group of Colleges as part of our ongoing commitment to academic excellence, student development, and community engagement. All students, faculty, and guests are warmly invited to participate and make the most of this opportunity.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  For more information or to register your interest, please contact the college office or reach out through our official communication channels. We look forward to seeing you there.
                </p>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-card shadow-card p-6 space-y-5">
                <h3 className="text-lg font-bold">Event Details</h3>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-primary">
                    <Calendar className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Date</p>
                    <p className="mt-0.5 font-medium">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-primary">
                    <Tag className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Category</p>
                    <p className="mt-0.5 font-medium">{event.category}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-primary">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Venue</p>
                    <p className="mt-0.5 font-medium">SQ Group of Colleges Campus</p>
                  </div>
                </div>

                <hr className="border-border" />

                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                  <Share2 className="h-4 w-4" />
                  Share This Event
                </button>
              </div>

              <div className="rounded-2xl bg-gradient-hero p-6 text-primary-foreground space-y-3">
                <h3 className="text-lg font-bold">Interested in Joining?</h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  Explore our programs and take the first step toward your future in healthcare.
                </p>
                <Link
                  href="/admissions"
                  className="inline-block rounded-xl bg-primary-foreground/15 hover:bg-primary-foreground/25 px-4 py-2.5 text-sm font-semibold transition-colors"
                >
                  Apply Now →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-gradient-soft py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-10">
              <span className="mb-3 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                More Like This
              </span>
              <h2 className="text-3xl font-bold md:text-4xl">Related Events</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/events/${item.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:scale-[1.02]"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="rounded-full bg-accent/15 px-2.5 py-1 font-semibold uppercase tracking-wider text-primary">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-base font-bold leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
