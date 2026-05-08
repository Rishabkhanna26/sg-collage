import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  FlaskConical,
  Globe,
  GraduationCap,
  Heart,
  Microscope,
  Quote,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { PageHero } from "@/shared/PageHero";
import { SectionHeading } from "@/shared/SectionHeading";

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "4,500+", label: "Students Enrolled" },
  { value: "320+", label: "Faculty Members" },
  { value: "12", label: "Affiliated Hospitals" },
  { value: "98%", label: "Graduate Placement" },
  { value: "40+", label: "Research Publications" },
];

const milestones = [
  {
    year: "2001",
    title: "Founded",
    desc: "SQ Group of Colleges was established in Jalandhar with a vision to make quality medical education accessible across Punjab.",
  },
  {
    year: "2005",
    title: "NMC Recognition",
    desc: "Received full recognition from the National Medical Commission, cementing our standing as a premier medical institution.",
  },
  {
    year: "2009",
    title: "Teaching Hospital",
    desc: "Inaugurated our 1,000-bed affiliated teaching hospital, giving students direct clinical exposure from year one.",
  },
  {
    year: "2013",
    title: "Research Centre",
    desc: "Launched the SQ Centre for Medical Research, now home to over 40 published studies in national and international journals.",
  },
  {
    year: "2018",
    title: "International Tie-ups",
    desc: "Signed MoUs with universities in the UK, UAE, and Malaysia for student exchange and collaborative research programs.",
  },
  {
    year: "2024",
    title: "Digital Campus",
    desc: "Completed a full digital transformation — smart classrooms, e-library, and AI-assisted simulation labs across all departments.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    desc: "We train healthcare professionals who lead with empathy and put patients at the centre of every decision.",
  },
  {
    icon: FlaskConical,
    title: "Innovation",
    desc: "From AI-assisted diagnostics to cutting-edge simulation labs, we embrace technology that improves outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Academic honesty, ethical practice, and transparent governance are non-negotiable at every level.",
  },
  {
    icon: Globe,
    title: "Inclusivity",
    desc: "We welcome students from every background and believe diversity makes better doctors and better science.",
  },
  {
    icon: BookOpen,
    title: "Excellence",
    desc: "We hold ourselves to the highest academic and clinical standards — because our graduates will hold lives in their hands.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Our responsibility extends beyond the campus. We run free health camps, rural outreach, and public awareness drives.",
  },
];

const accreditations = [
  { name: "National Medical Commission", short: "NMC", icon: ShieldCheck },
  { name: "Indian Nursing Council", short: "INC", icon: Award },
  { name: "Pharmacy Council of India", short: "PCI", icon: FlaskConical },
  { name: "University Grants Commission", short: "UGC", icon: GraduationCap },
  { name: "NAAC Accredited", short: "NAAC", icon: Star },
  { name: "ISO 9001:2015 Certified", short: "ISO", icon: Building2 },
];

const leadership = [
  {
    name: "Prof. Dr. Sajid Qureshi",
    role: "Founder & Principal",
    quals: "MBBS, MS (Surgery), FRCS (London)",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
    quote: "We don't just train doctors — we nurture healers who will transform healthcare for generations.",
  },
  {
    name: "Prof. Dr. Aisha Rahman",
    role: "Vice Principal (Academics)",
    quals: "MBBS, M.Phil, PhD (Anatomy)",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    quote: "Academic rigour and clinical compassion are two sides of the same coin.",
  },
  {
    name: "Dr. Imran Hashmi",
    role: "Dean, Clinical Affairs",
    quals: "MBBS, FCPS (Medicine), MRCP",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
    quote: "Every patient encounter is a lesson. We make sure our students never stop learning.",
  },
];

const facilities = [
  {
    icon: Microscope,
    title: "Advanced Simulation Labs",
    desc: "High-fidelity mannequins, virtual reality surgical trainers, and OSCE stations prepare students for real clinical scenarios before they ever see a patient.",
    img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80",
  },
  {
    icon: Building2,
    title: "1,000-Bed Teaching Hospital",
    desc: "Our affiliated tertiary care hospital handles over 500 OPD patients daily, giving students unmatched exposure across all specialties.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    icon: BookOpen,
    title: "Digital Library & Research Hub",
    desc: "Access to 50,000+ e-books, PubMed, Cochrane, and UpToDate — plus dedicated research mentors for every department.",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SQ Group"
        title="Shaping healthcare leaders since 2001"
        description="A premier medical institution built on the belief that great doctors are made through rigorous education, compassionate values, and relentless clinical practice."
      />

      {/* Stats strip */}
      <section className="bg-gradient-soft py-14 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border/60 bg-card p-5 text-center shadow-card">
                <div className="text-3xl font-bold text-gradient-brand md:text-4xl">{s.value}</div>
                <div className="mt-1.5 text-xs font-medium text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-elegant">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80"
                  alt="SQ College campus"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 hidden h-52 w-52 overflow-hidden rounded-3xl border-4 border-background shadow-elegant md:block lg:-right-10">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80"
                  alt="Students in lab"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div>
              <span className="mb-4 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Our Story
              </span>
              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                Two decades of building India's healthcare workforce
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                SQ Group of Colleges was founded in 2001 by Prof. Dr. Sajid Qureshi with a single conviction — that world-class medical education should not be confined to metropolitan cities. Starting with a single MBBS batch of 100 students in Jalandhar, we have grown into a multi-faculty institution serving over 4,500 students across medicine, dentistry, pharmacy, nursing, and allied health sciences.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Today, our graduates practice in hospitals across India and in over 20 countries. They lead research labs, run rural health clinics, and hold senior positions in pharmaceutical companies. Every one of them carries the SQ ethos: clinical excellence grounded in human compassion.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition hover:opacity-95"
                >
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:bg-secondary"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Purpose"
            title="Mission & Vision"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground">
                <Heart className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To provide accessible, high-quality medical and health sciences education that equips graduates with the clinical skills, ethical grounding, and research mindset needed to serve communities across India and beyond.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Patient-centred clinical training from year one",
                  "Evidence-based curriculum updated annually",
                  "Mentorship from practising clinicians and researchers",
                  "Affordable education without compromising quality",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-hero p-8 text-primary-foreground shadow-elegant">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/15">
                <Globe className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/85">
                To be recognised as South Asia's most trusted medical institution — one that produces not just competent clinicians, but compassionate leaders who drive innovation in healthcare delivery, policy, and research.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Top-ranked medical institution in North India by 2030",
                  "Global research partnerships across 30+ countries",
                  "Free healthcare access for 100,000 rural patients annually",
                  "Alumni network spanning every continent",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-primary-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="History"
            title="Our journey so far"
            description="From a single batch of 100 students to a multi-faculty institution — here are the milestones that shaped us."
          />
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex gap-8 md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="hidden md:flex md:w-1/2" />
                  <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-brand text-xs font-bold text-primary-foreground shadow-card md:left-1/2">
                    {i + 1}
                  </div>
                  <div className="ml-12 md:ml-0 md:w-1/2">
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                      <span className="mb-2 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-primary">
                        {m.year}
                      </span>
                      <h3 className="text-lg font-bold">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our core values"
            description="These aren't words on a wall. They're the principles our faculty model every day and our students carry into their careers."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-primary transition-all duration-300 group-hover:bg-accent/25 group-hover:scale-110">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="The people who lead us"
            description="Our leadership team brings together decades of clinical, academic, and administrative experience."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {leadership.map((person) => (
              <div key={person.name} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:shadow-elegant">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{person.name}</h3>
                  <p className="text-sm font-semibold text-accent">{person.role}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{person.quals}</p>
                  <div className="mt-4 border-t border-border pt-4">
                    <Quote className="mb-2 h-5 w-5 text-accent/60" />
                    <p className="text-sm italic leading-relaxed text-muted-foreground">"{person.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Infrastructure"
            title="Built for the best learning"
            description="Our campus is designed to give students every advantage — from day one to graduation."
          />
          <div className="space-y-8">
            {facilities.map((f, i) => (
              <div
                key={f.title}
                className={`grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-card lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-primary">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{f.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Recognition"
            title="Accreditations & affiliations"
            description="Our programs are recognised and regulated by the highest national bodies in medical and health sciences education."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {accreditations.map((a) => (
              <div
                key={a.name}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <a.icon className="h-6 w-6" />
                </div>
                <div className="text-lg font-bold text-primary">{a.short}</div>
                <div className="text-[11px] leading-tight text-muted-foreground">{a.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal quote */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="relative container mx-auto grid items-center gap-12 px-4 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <div className="mx-auto aspect-square max-w-xs overflow-hidden rounded-3xl shadow-glow">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80"
                alt="Prof. Dr. Sajid Qureshi"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <Quote className="mb-5 h-12 w-12 text-accent" />
            <p className="text-2xl font-medium leading-snug md:text-3xl">
              "At SQ, we don't just train doctors — we nurture healers, researchers, and leaders who will transform healthcare for generations to come. Every student who walks through our doors carries the potential to change a life."
            </p>
            <div className="mt-8">
              <div className="text-lg font-bold">Prof. Dr. Sajid Qureshi</div>
              <div className="text-sm opacity-75">Founder & Principal, SQ Group of Colleges</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-hero p-10 text-primary-foreground shadow-elegant md:p-16">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                  Be part of the SQ story.
                </h2>
                <p className="mt-4 text-lg opacity-85">
                  Admissions for 2026 are open. Join a community that has been shaping healthcare leaders for over two decades.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition hover:opacity-95"
                >
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
