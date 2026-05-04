"use client";

import { useState } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";

import { PageHero } from "@/shared/PageHero";

const contactCards = [
  { icon: MapPin, title: "Visit Us", lines: ["GT Road, Jalandhar", "Punjab, India"] },
  { icon: Phone, title: "Call Us", lines: ["+91 98765 43210", "Admissions: +91 98765 43211"] },
  { icon: Mail, title: "Email Us", lines: ["info@sqcolleges.edu.in", "admissions@sqcolleges.edu.in"] },
  { icon: Clock, title: "Office Hours", lines: ["Mon - Fri: 8:30 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"] },
];

const programOptions = [
  "MBBS",
  "BDS",
  "Pharm-D",
  "DPT",
  "B.Sc Nursing",
  "B.Sc Medical Lab Technology",
  "11th and 12th Science",
  "Other",
];

function Field({ label, as = "input", className = "", ...props }) {
  const Component = as;
  const baseClassName =
    "w-full rounded-xl border border-input bg-background px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-foreground">{label}</label>
      <Component className={`${baseClassName} ${className}`.trim()} {...props} />
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="We'd love to hear from you"
        description="Whether you have questions about admissions, programs, or campus life, our team is ready to help."
      />

      <section className="relative z-10 -mt-10 py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <card.icon className="h-7 w-7" />
                </div>
                <h2 className="text-lg font-bold">{card.title}</h2>
                <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {card.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <h2 className="text-3xl font-bold">Send us a message</h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full Name" name="name" placeholder="Your name" required />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Phone" name="phone" placeholder="+91 98765 43210" />
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">Program of Interest</label>
                  <select
                    name="program"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    defaultValue="MBBS"
                  >
                    {programOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Field
                as="textarea"
                label="Message"
                name="message"
                rows={5}
                placeholder="How can we help?"
                className="resize-none"
                required
              />

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>

            {submitted ? (
              <div className="mt-5 flex items-center gap-2 rounded-2xl bg-accent/10 px-4 py-3 text-sm text-foreground">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                Message sent. This demo form currently shows local confirmation only.
              </div>
            ) : null}
          </div>

          <div className="min-h-[500px] overflow-hidden rounded-3xl border border-border shadow-card">
            <iframe
              title="SQ Group of Colleges location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.0!2d75.5762!3d31.3260!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDE5JzMzLjYiTiA3NcKwMzQnMzQuMyJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 500 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
