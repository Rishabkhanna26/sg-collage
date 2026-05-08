"use client";

import Link from "next/link";
import {
  BookOpen,
  Clock,
  FlaskConical,
  Home,
  Pill,
  Users,
} from "lucide-react";


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


export function SimilarCoursesGrid({ courses }) {
  if (!courses || courses.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <ProgramCard key={course.slug} program={course} />
      ))}
    </div>
  );
}
