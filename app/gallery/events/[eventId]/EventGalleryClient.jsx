"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowLeft, Images } from "lucide-react";

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  function prev() {
    setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function next() {
    setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <div
        className="flex max-h-[88vh] max-w-5xl w-full flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current].src}
          alt={images[current].caption}
          className="max-h-[78vh] w-full rounded-2xl object-contain"
        />
        <p className="mt-4 text-center text-sm text-white/70">
          {images[current].caption}
          <span className="ml-3 text-white/40">{current + 1} / {images.length}</span>
        </p>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}

export function EventGalleryClient({ event }) {
  const [activeYear, setActiveYear] = useState(null);
  const [lightbox, setLightbox] = useState({ yearIdx: null, imgIdx: null });

  const totalImages = event.years.reduce((sum, y) => sum + y.images.length, 0);
  const visibleYears = activeYear
    ? event.years.filter((y) => y.label === activeYear)
    : event.years;

  const lightboxImages =
    lightbox.yearIdx !== null ? event.years[lightbox.yearIdx].images : [];

  return (
    <>
      <div className="container mx-auto px-4 lg:px-8 pt-8">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Gallery
        </Link>
      </div>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <span className="mb-3 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Event Gallery
            </span>
            <h1 className="text-3xl font-bold md:text-4xl">{event.title}</h1>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground leading-relaxed">
              {event.description}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Images className="h-4 w-4" />
              <span>{totalImages} photos across {event.years.length} academic years</span>
            </div>
          </div>

          {/* Year filter pills */}
          <div className="mb-10 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveYear(null)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeYear === null
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border bg-card text-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              All Years
            </button>
            {event.years.map((year) => (
              <button
                key={year.label}
                onClick={() => setActiveYear(year.label)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  activeYear === year.label
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border bg-card text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {year.label}
                <span className="ml-1.5 text-xs opacity-60">({year.images.length})</span>
              </button>
            ))}
          </div>

          {/* Year grids */}
          <div className="space-y-14">
            {visibleYears.map((year) => {
              const realYearIdx = event.years.findIndex((y) => y.label === year.label);
              return (
                <div key={year.label}>
                  <div className="mb-5 flex items-center gap-4">
                    <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">
                      {year.label}
                    </span>
                    <span className="text-sm text-muted-foreground">{year.images.length} photos</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {year.images.map((img, imgIdx) => (
                      <button
                        key={imgIdx}
                        onClick={() => setLightbox({ yearIdx: realYearIdx, imgIdx })}
                        className="group relative aspect-square overflow-hidden rounded-xl bg-secondary shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-primary/65 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <ZoomIn className="h-5 w-5 text-white" />
                          <span className="px-2 text-center text-[11px] font-semibold text-white leading-snug">
                            {img.caption}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {lightbox.yearIdx !== null && (
        <Lightbox
          images={lightboxImages}
          startIndex={lightbox.imgIdx}
          onClose={() => setLightbox({ yearIdx: null, imgIdx: null })}
        />
      )}
    </>
  );
}
