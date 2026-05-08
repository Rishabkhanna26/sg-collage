"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen } from "lucide-react";

function SubjectCard({ subject, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setVisible(true), index * 60);
          observer.disconnect();
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm
        transition-all duration-500 ease-out
        hover:border-accent/40 hover:shadow-card hover:-translate-y-1
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="relative mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-primary transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
        <BookOpen className="h-4 w-4" />
      </div>
      <p className="relative text-sm font-semibold text-foreground leading-snug">
        {subject}
      </p>
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-accent to-primary transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

export function SubjectsGrid({ subjects }) {
  if (!subjects || subjects.length === 0) return null;

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {subjects.map((subject, index) => (
        <SubjectCard key={subject} subject={subject} index={index} />
      ))}
    </div>
  );
}
