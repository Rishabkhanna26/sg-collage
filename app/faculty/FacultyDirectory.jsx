"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "@/shared/SectionHeading";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.35, delay: i * 0.04 } }),
  exit: { opacity: 0 },
};

const socialBtn = "w-8 h-8 rounded-full bg-primary-foreground/20 backdrop-blur flex items-center justify-center text-primary-foreground hover:bg-accent transition-colors";

export function FacultyDirectory({ faculty, depts }) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? faculty : faculty.filter((f) => f.dept === active);

  return (
    <section className="bg-gradient-soft py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading eyebrow="Faculty Directory" title="Browse by department" />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {depts.map((d) => (
            <button
              key={d}
              onClick={() => setActive(d)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                active === d
                  ? "bg-gradient-brand text-primary-foreground shadow-elegant"
                  : "border border-border bg-card text-foreground hover:bg-accent/15"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.name}
                layout
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:shadow-elegant"
              >
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex gap-2 bg-gradient-to-t from-primary/90 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                    <a href="#" aria-label="LinkedIn" className={socialBtn}><Linkedin className="h-4 w-4" /></a>
                    <a href="#" aria-label="Email" className={socialBtn}><Mail className="h-4 w-4" /></a>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold leading-tight">{p.name}</h3>
                  <p className="mt-1 text-xs font-semibold text-accent">{p.role}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">{p.quals}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
