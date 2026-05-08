import Link from "next/link";
import { PageHero } from "@/shared/PageHero";
import { SectionHeading } from "@/shared/SectionHeading";
import { featuredEvents, upcomingEvents, academicEvents, campusNews } from "./data";
import { Calendar, Star, GraduationCap, Newspaper } from "lucide-react";

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Stay Updated"
        title="Events & News"
        description="Discover upcoming events, academic activities, and the latest news from SQ Group of Colleges"
      />

      {/* Section 1: Featured Event */}
      {featuredEvents.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading
              eyebrow="Don't Miss"
              title="Featured Event"
              description="Highlighted event you won't want to miss"
            />

            {featuredEvents.map((event) => (
              <Link
                key={event.slug}
                href={`/events/${event.slug}`}
                className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform hover:scale-[1.005]"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4 flex items-center gap-3 text-sm">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1.5 font-semibold uppercase tracking-wider text-primary">
                        <Star className="h-4 w-4" />
                        {event.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors">
                      {event.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Section 2: Upcoming Events */}
      <section className="bg-gradient-soft py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Coming Soon"
            title="Upcoming Events"
            description="Mark your calendar for these exciting upcoming events and activities"
          />

          {upcomingEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No events scheduled at this time. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:scale-[1.02] block"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="rounded-full bg-accent/15 px-2.5 py-1 font-semibold uppercase tracking-wider text-primary">
                        {event.category}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Academic Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Learning & Growth"
            title="Academic Events"
            description="Workshops, seminars, and educational programs to enhance your learning experience"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicEvents.map((event) => (
              <Link
                key={event.slug}
                href={`/events/${event.slug}`}
                className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:scale-[1.02] block"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 font-semibold uppercase tracking-wider text-primary">
                      <GraduationCap className="h-3.5 w-3.5" />
                      {event.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Campus News */}
      <section className="bg-gradient-soft py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Latest Updates"
            title="Campus News"
            description="Stay informed about achievements, announcements, and developments at our college"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {campusNews.map((news) => (
              <Link
                key={news.slug}
                href={`/events/${news.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:scale-[1.01] block"
              >
                <div className="grid sm:grid-cols-5 gap-0">
                  <div className="sm:col-span-2 aspect-[16/10] sm:aspect-auto overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="sm:col-span-3 p-6">
                    <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 font-semibold uppercase tracking-wider text-primary">
                        <Newspaper className="h-3.5 w-3.5" />
                        {news.category}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {news.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {news.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
