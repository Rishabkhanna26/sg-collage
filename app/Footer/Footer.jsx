"use client";

import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Programs" },
  { href: "/events", label: "Events & News" },
  { href: "/blog", label: "Blog" },
  { href: "/admissions", label: "Admissions" },
  { href: "/faculty", label: "Faculty" },
  { href: "/contact", label: "Contact" },
];

const resources = [
  { href: "/admissions", label: "Prospectus" },
  { href: "/contact", label: "Contact Us" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

const contactItems = [
  { icon: MapPin, text: "GT Road, Jalandhar, Punjab, India" },
  { icon: Phone, text: "+91 98765 43210" },
  { icon: Mail, text: "info@sqcolleges.edu.in" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary-glow/20 blur-3xl" />

      <div className="relative container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary-glow">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-lg font-bold">SQ Group</div>
                <div className="text-xs uppercase tracking-widest opacity-70">of Colleges</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              A premier medical institution dedicated to producing world-class healthcare professionals through excellence in education, research, and clinical practice.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-85">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm opacity-85">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm opacity-85">
              {contactItems.map((item) => (
                <li key={item.text} className="flex gap-3">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between gap-3 text-xs opacity-75">
          <p>© {new Date().getFullYear()} SQ Group of Colleges. All rights reserved.</p>
          <p>Recognized by NMC · Affiliated with INC</p>
        </div>
      </div>
    </footer>
  );
}
