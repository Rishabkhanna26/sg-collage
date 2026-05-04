import Link from "next/link";
import { ArrowRight, Stethoscope, HeartPulse, Pill, Activity, Microscope, FlaskConical } from "lucide-react";
import { SectionHeading } from "@/shared/SectionHeading";

const programs = [
  { icon: Stethoscope, title: "MBBS", duration: "5 Years", desc: "Bachelor of Medicine & Surgery — comprehensive clinical and pre-clinical training." },
  { icon: HeartPulse, title: "BDS", duration: "4 Years", desc: "Bachelor of Dental Surgery with hands-on clinical exposure and modern dental labs." },
  { icon: Pill, title: "Pharm-D", duration: "5 Years", desc: "Doctor of Pharmacy program preparing future pharmaceutical care experts." },
  { icon: Activity, title: "DPT", duration: "5 Years", desc: "Doctor of Physical Therapy — rehabilitation, sports medicine and orthopedics." },
  { icon: Microscope, title: "BS Med Lab Technology", duration: "4 Years", desc: "Diagnostic laboratory science with advanced research-grade equipment." },
  { icon: FlaskConical, title: "BS Nursing", duration: "4 Years", desc: "Generic nursing degree with rotations across our affiliated teaching hospital." },
];

export function HomePrograms() {
  return (
    <section className="py-20 md:py-28 bg-gradient-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Our Programs"
          title="Industry-leading medical degrees"
          description="From undergraduate degrees to advanced specializations, our programs are designed to produce skilled, compassionate healthcare professionals."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div key={program.title} className="h-full rounded-2xl border border-border bg-card p-7 shadow-card transition hover:border-accent/50">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                <program.icon className="h-7 w-7" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold">{program.title}</h3>
                <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-primary">
                  {program.duration}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{program.desc}</p>
              <Link href="/courses" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                View details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
