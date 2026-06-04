"use client";

import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";

export function EventsSection({ section, limit = section.subEvents.length, showViewMore = false }) {
  const totalImages = section.subEvents.reduce(
    (sum, e) => sum + e.years.reduce((s, y) => s + y.images.length, 0),
    0
  );
  const visibleEvents = section.subEvents.slice(0, limit);
  const hasMoreEvents = visibleEvents.length < section.subEvents.length;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="mb-3 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {section.eyebrow}
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">{section.title}</h2>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground leading-relaxed">
              {section.description}
            </p>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Images className="h-4 w-4" />
              <span>{section.subEvents.length} events · {totalImages} total photos</span>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleEvents.map((event) => {
            const eventTotal = event.years.reduce((s, y) => s + y.images.length, 0);
            const latestYear = event.years[0];
            const previewImages = latestYear.images.slice(0, 4);

            return (
              <Link
                key={event.id}
                href={`/gallery/events/${event.id}`}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                {/* 2×2 image mosaic */}
                <div className="grid grid-cols-2 gap-0.5 aspect-[16/9] overflow-hidden">
                  {previewImages.map((img, i) => (
                    <div key={i} className="overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {eventTotal} photos · {event.years.length} years
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      View Gallery <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {showViewMore && hasMoreEvents && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/gallery/events"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              View More Events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
