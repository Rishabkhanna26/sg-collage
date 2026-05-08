"use client";

import Link from "next/link";
import {
  BookOpen,
  Briefcase,
  Clock,
  FlaskConical,
  Home,
  Pill,
  Users,
} from "lucide-react";

import { PageHero } from "@/shared/PageHero";
import { SectionHeading } from "@/shared/SectionHeading";
import { courses } from "./data";

const careerPaths = [
  {
    title: "Teaching and Education",
    description: "Graduates pursue teaching careers in schools, colleges, and coaching institutes.",
  },
  {
    title: "Government Services",
    description: "Many students prepare for civil services, banking, and administrative roles.",
  },
  {
    title: "Healthcare Support",
    description: "Pharmacy graduates work in hospitals, clinics, and pharmaceutical companies.",
  },
  {
    title: "Research and Development",
    description: "Science graduates contribute to research labs and academic institutions.",
  },
];

const iconMap = {
  Pill,
  BookOpen,
  FlaskConical,
  Home,
};

function ProgramCard({ program }) {
  const Icon = iconMap[program.icon] || BookOpen;

  return (
    <Link 
      href={`/courses/${program.slug}`}
      className="block h-full rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
          <Icon className="h-7 w-7" />
        </div>
        <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
          {program.category}
        </span>
      </div>

      <h2 className="text-xl font-bold">{program.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{program.description}</p>

      <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
        <div className="flex items-center gap-2 rounded-lg bg-secondary p-2.5">
          <Clock className="h-4 w-4 text-accent" />
          <span>{program.duration}</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-secondary p-2.5">
          <Users className="h-4 w-4 text-accent" />
          <span>{program.seats} seats</span>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
        <p>
          <span className="font-semibold text-foreground">Eligibility:</span> {program.eligibility}
        </p>
        <p>
          <span className="font-semibold text-foreground">Fee:</span> {program.fee}
        </p>
      </div>

      <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
        View Details
      </span>
    </Link>
  );
}

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Academic Programs"
        title="Find your medical pathway"
        description="Choose from undergraduate, allied health, and pre-medical programs built around practical learning."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((program) => (
              <ProgramCard key={program.title} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Career Pathways"
            title="Where our graduates go"
            description="SQ graduates move into hospitals, advanced studies, research, and public health roles."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {careerPaths.map((path) => (
              <div key={path.title} className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                <Briefcase className="mb-3 h-8 w-8 text-accent" />
                <h3 className="text-lg font-bold">{path.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{path.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
