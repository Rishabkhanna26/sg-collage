"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "@/shared/SectionHeading";

export function FacultyDirectory({ faculty, depts }) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? faculty : faculty.filter((f) => f.dept === active);

  return (
    <section className="py-20 md:py-28 bg-gradient-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading eyebrow="Faculty Directory" title="Browse by department" />
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {depts.map((d) => (
            <button key={d} onClick={() => setActive(d)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${active === d ? "bg-gradient-brand text-primary-foreground shadow-elegant" : "bg-card border border-border text-foreground hover:bg-accent/15"}`}>
              {d}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div key={p.name} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant transition-all">
                <div className="aspect-square overflow-hidden bg-secondary relative">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-primary/90 to-transparent flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/20 backdrop-blur flex items-center justify-center text-primary-foreground hover:bg-accent transition-colors"><Linkedin className="w-4 h-4" /></a>
                    <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/20 backdrop-blur flex items-center justify-center text-primary-foreground hover:bg-accent transition-colors"><Mail className="w-4 h-4" /></a>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm leading-tight">{p.name}</h3>
                  <p className="text-xs text-accent font-semibold mt-1">{p.role}</p>
                  <p className="text-[11px] text-muted-foreground mt-1">{p.quals}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
