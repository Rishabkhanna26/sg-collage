import Link from "next/link";
import {
  Award,
  Calendar,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Download,
  FileText,
} from "lucide-react";

import { PageHero } from "@/shared/PageHero";
import { SectionHeading } from "@/shared/SectionHeading";

const steps = [
  {
    icon: FileText,
    title: "Apply Online",
    description: "Fill the application form and upload the required documents.",
  },
  {
    icon: ClipboardList,
    title: "Entry Test",
    description: "Appear for NEET or the college admission test, depending on the program.",
  },
  {
    icon: Calendar,
    title: "Interview",
    description: "Shortlisted students are invited for the interview round.",
  },
  {
    icon: Award,
    title: "Merit List",
    description: "The final merit list is published after evaluation.",
  },
  {
    icon: Download,
    title: "Enrollment",
    description: "Pay the fee and complete the final admission formalities.",
  },
];

const dates = [
  { label: "Application opens", value: "May 1, 2026" },
  { label: "Last date to apply", value: "June 30, 2026" },
  { label: "Entry test", value: "July 15, 2026" },
  { label: "Interviews", value: "August 1-10, 2026" },
  { label: "Merit list", value: "August 20, 2026" },
  { label: "Classes begin", value: "September 5, 2026" },
];

const documents = [
  "10th and 12th certificates with mark sheets",
  "NEET result card where applicable",
  "Aadhaar card or passport copy",
  "Domicile or residence certificate",
  "Four passport-size photographs",
  "Character certificate from previous institution",
  "Medical fitness certificate",
];

const fees = [
  { program: "MBBS", tuition: "1,200,000", admission: "75,000", hostel: "180,000" },
  { program: "BDS", tuition: "1,000,000", admission: "75,000", hostel: "180,000" },
  { program: "Pharm-D", tuition: "350,000", admission: "40,000", hostel: "180,000" },
  { program: "DPT", tuition: "280,000", admission: "35,000", hostel: "180,000" },
  { program: "BS Nursing", tuition: "200,000", admission: "30,000", hostel: "180,000" },
  { program: "11th and 12th Science", tuition: "25,000", admission: "5,000", hostel: "30,000" },
];

const scholarshipPoints = [
  "Merit scholarships up to 100% of tuition",
  "Need-based financial aid",
  "Sports and extracurricular scholarships",
  "Sibling and alumni discounts",
];

const faqs = [
  {
    question: "What is the eligibility for MBBS?",
    answer: "You need 10+2 with Physics, Chemistry, and Biology, at least 60% marks, and a valid NEET score above the required cutoff.",
  },
  {
    question: "Are scholarships available?",
    answer: "Yes. The college offers merit-based and need-based scholarships for eligible students.",
  },
  {
    question: "Is hostel accommodation provided?",
    answer: "Yes. Separate hostels are available for male and female students with mess and security facilities.",
  },
  {
    question: "Can NRI students apply?",
    answer: "Yes. NRI students can apply through the dedicated NRI admissions process.",
  },
  {
    question: "What is the refund policy?",
    answer: "Refunds are processed according to the official rules announced before the start of the academic session.",
  },
];

function StepCard({ icon: Icon, index, title, description }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
        {index}
      </div>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions 2026"
        title="Begin your medical journey"
        description="A clear and simple admission process for students who want to join SQ Group of Colleges."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#apply" className="inline-flex items-center rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary">
            Start Application
          </a>
          <a href="#faq" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold">
            <Download className="h-4 w-4" />
            Download Prospectus
          </a>
        </div>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading eyebrow="Process" title="5 simple steps to enrollment" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <StepCard
                key={step.title}
                icon={step.icon}
                index={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
              <Calendar className="h-7 w-7 text-accent" />
              Important Dates
            </h2>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              {dates.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-4 border-b border-border px-6 py-4 last:border-b-0">
                  <span className="font-medium text-foreground">{item.label}</span>
                  <span className="text-sm font-semibold text-primary">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
              <ClipboardList className="h-7 w-7 text-accent" />
              Required Documents
            </h2>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <ul className="space-y-3">
                {documents.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Fees"
            title="Fee structure"
            description="All values are in Indian Rupees. Hostel charges are optional."
          />

          <div className="overflow-x-auto rounded-2xl border border-border shadow-card">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left">Program</th>
                  <th className="px-6 py-4 text-right">Tuition</th>
                  <th className="px-6 py-4 text-right">Admission Fee</th>
                  <th className="px-6 py-4 text-right">Hostel</th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {fees.map((fee) => (
                  <tr key={fee.program} className="border-b border-border last:border-b-0">
                    <td className="px-6 py-4 font-semibold text-foreground">{fee.program}</td>
                    <td className="px-6 py-4 text-right text-muted-foreground">{fee.tuition}</td>
                    <td className="px-6 py-4 text-right text-muted-foreground">{fee.admission}</td>
                    <td className="px-6 py-4 text-right text-muted-foreground">{fee.hostel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <CreditCard className="mb-5 h-12 w-12 text-accent" />
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Scholarships and financial aid
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/85">
              We support deserving students through different scholarship and support programs.
            </p>
            <ul className="mt-5 space-y-3">
              {scholarshipPoints.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="apply" className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/10 p-8">
            <h3 className="text-2xl font-bold">Ready to apply?</h3>
            <p className="mt-3 text-primary-foreground/85">
              Start your online application today. Our admissions team can guide you through every step.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#faq" className="inline-flex items-center rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary">
                Apply Online
              </a>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold">
                Talk to Counselor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading eyebrow="Help" title="Frequently asked questions" />
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((item) => (
              <details key={item.question} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <summary className="cursor-pointer list-none font-semibold text-foreground">
                  {item.question}
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
