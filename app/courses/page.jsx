"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  BookMarked,
  Briefcase,
  Clock,
  FlaskConical,
  HeartPulse,
  Microscope,
  Pill,
  ScanLine,
  Stethoscope,
  Users,
} from "lucide-react";

import { PageHero } from "@/shared/PageHero";
import { SectionHeading } from "@/shared/SectionHeading";

const programs = [
  {
    category: "Undergraduate",
    icon: Stethoscope,
    title: "MBBS",
    duration: "5 Years",
    seats: 150,
    eligibility: "10+2 (PCB) with minimum 60% and NEET",
    fee: "INR 120,000 per year",
    description: "Our flagship medical degree focused on strong academics, clinical rotations, and patient care.",
  },
  {
    category: "Undergraduate",
    icon: HeartPulse,
    title: "BDS",
    duration: "4 Years",
    seats: 80,
    eligibility: "10+2 (PCB) with minimum 55% and NEET",
    fee: "INR 100,000 per year",
    description: "Dental surgery program with practical training in modern labs and clinics.",
  },
  {
    category: "Undergraduate",
    icon: Pill,
    title: "Pharm-D",
    duration: "5 Years",
    seats: 100,
    eligibility: "10+2 (PCB) with minimum 50%",
    fee: "INR 60,000 per year",
    description: "Doctor of Pharmacy program for students interested in medication science and patient care.",
  },
  {
    category: "Undergraduate",
    icon: Activity,
    title: "DPT",
    duration: "5 Years",
    seats: 80,
    eligibility: "10+2 (PCB) with minimum 50%",
    fee: "INR 50,000 per year",
    description: "Physical therapy program covering rehabilitation, movement, and recovery support.",
  },
  {
    category: "Allied Health",
    icon: FlaskConical,
    title: "B.Sc Nursing",
    duration: "4 Years",
    seats: 100,
    eligibility: "10+2 (PCB) with minimum 45%",
    fee: "INR 40,000 per year",
    description: "Nursing degree with hospital-based training and patient-focused learning.",
  },
  {
    category: "Allied Health",
    icon: Microscope,
    title: "B.Sc Medical Lab Technology",
    duration: "4 Years",
    seats: 60,
    eligibility: "10+2 (PCB) with minimum 45%",
    fee: "INR 35,000 per year",
    description: "Laboratory science program focused on diagnostics, testing, and research tools.",
  },
  {
    category: "Allied Health",
    icon: ScanLine,
    title: "B.Sc Radiology and Imaging",
    duration: "4 Years",
    seats: 60,
    eligibility: "10+2 (PCB) with minimum 45%",
    fee: "INR 35,000 per year",
    description: "Imaging program covering X-ray, MRI, CT, and other diagnostic technologies.",
  },
  {
    category: "Pre-Medical",
    icon: BookMarked,
    title: "11th and 12th Science",
    duration: "2 Years",
    seats: 200,
    eligibility: "10th science with minimum 60%",
    fee: "INR 25,000 per year",
    description: "Foundation program that helps students prepare for medical entrance exams.",
  },
];

const careerPaths = [
  {
    title: "Hospital Practice",
    description: "Graduates join public and private hospitals across India and abroad.",
  },
  {
    title: "Specialization",
    description: "Many students continue into MD, MS, FCPS, and other advanced studies.",
  },
  {
    title: "Research and Academia",
    description: "Students build careers in teaching, medical research, and clinical studies.",
  },
  {
    title: "Public Health",
    description: "Graduates also work with NGOs, government projects, and community health programs.",
  },
];

const categories = ["All", ...new Set(programs.map((program) => program.category))];

function ProgramCard({ program }) {
  const Icon = program.icon;

  return (
    <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-card">
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

      <Link href="/admissions" className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
        Apply for {program.title}
      </Link>
    </div>
  );
}

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visiblePrograms =
    activeCategory === "All"
      ? programs
      : programs.filter((program) => program.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="Academic Programs"
        title="Find your medical pathway"
        description="Choose from undergraduate, allied health, and pre-medical programs built around practical learning."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card"
                    : "rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground"
                }
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visiblePrograms.map((program) => (
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
