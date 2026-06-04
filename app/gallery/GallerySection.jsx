"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowRight } from "lucide-react";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div
        className="max-h-[85vh] max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current].src}
          alt={images[current].caption}
          className="h-full w-full rounded-2xl object-contain"
        />
        <p className="mt-3 text-center text-sm text-white/70">
          {images[current].caption} &nbsp;·&nbsp; {current + 1} / {images.length}
        </p>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

export function GallerySection({ section, alternate }) {
  const [activeYear, setActiveYear] = useState(section.years[0].label);
  const [lightbox, setLightbox] = useState(null);

  const currentYear = section.years.find((y) => y.label === activeYear);
  const totalImages = section.years.reduce((sum, y) => sum + y.images.length, 0);

  return (
    <section className={`py-16 md:py-24 ${alternate ? "bg-gradient-soft" : ""}`}>
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
          </div>
          <Link
            href={`/gallery/${section.id}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm"
          >
            See All Images
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {section.years.map((year) => (
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
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {currentYear.images.slice(0, 8).map((img, idx) => (
            <button
              key={idx}
              onClick={() => setLightbox(idx)}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-secondary shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-primary/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn className="h-6 w-6 text-white" />
                <span className="px-3 text-center text-xs font-semibold text-white leading-snug">
                  {img.caption}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            Showing {Math.min(8, currentYear.images.length)} of {currentYear.images.length} photos · {activeYear}
          </p>
          <Link
            href={`/gallery/${section.id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            See All Images <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox
          images={currentYear.images}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
