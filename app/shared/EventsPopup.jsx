"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X, Calendar, Bell } from "lucide-react";

const POPUP_ITEMS = [
  {
    slug: "mbbs-2026-admissions-open",
    category: "Admissions",
    date: "May 12, 2026",
    title: "MBBS 2026 admissions are now open",
  },
  {
    slug: "annual-medical-research-symposium",
    category: "Research",
    date: "June 5, 2026",
    title: "Annual Medical Research Symposium",
  },
  {
    slug: "white-coat-ceremony-2026",
    category: "Event",
    date: "July 15, 2026",
    title: "White Coat Ceremony for New Medical Students",
  },
];

// First show after 3s, then stay user-controlled via minimize/expand
const INITIAL_DELAY = 3000;

export function EventsPopup() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setVisible(true);
      setOpen(true);
    }, INITIAL_DELAY);

    return () => clearTimeout(timerRef.current);
  }, []);

  function handleMinimize() {
    setOpen(false);
    clearTimeout(timerRef.current);
    setVisible(true);
  }

  function handleOpen() {
    clearTimeout(timerRef.current);
    setVisible(true);
    setOpen(true);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div
          className="w-80 transition-all duration-300"
          role="dialog"
          aria-label="Upcoming events"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
            <div className="flex items-center justify-between bg-gradient-hero px-4 py-3 text-primary-foreground">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span className="text-sm font-semibold">Upcoming Events</span>
              </div>
              <button
                onClick={handleMinimize}
                aria-label="Minimize"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/15 transition-colors hover:bg-primary-foreground/30"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <ul className="divide-y divide-border">
              {POPUP_ITEMS.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/events/${item.slug}`}
                    onClick={handleMinimize}
                    className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-muted/50"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-primary">
                      <Calendar className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
                        {item.category} · {item.date}
                      </p>
                      <p className="line-clamp-2 text-sm font-medium leading-snug text-foreground">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-t border-border bg-muted/30 px-4 py-3">
              <Link
                href="/events"
                onClick={handleMinimize}
                className="text-xs font-semibold text-primary hover:underline"
              >
                View all events & news →
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={handleOpen}
          aria-label="Open upcoming events"
          aria-expanded="false"
          className="flex items-center gap-2 rounded-full bg-gradient-hero px-4 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform duration-300 hover:scale-105"
        >
          <Bell className="h-4 w-4" />
          <span>Events</span>
        </button>
      )}
    </div>
  );
}
