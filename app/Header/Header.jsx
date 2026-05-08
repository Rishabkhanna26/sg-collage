"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap } from "lucide-react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/admissions", label: "Admissions" },
  { href: "/faculty", label: "Faculty" },
  { href: "/contact", label: "Contact" },
];

// Shared base styles for every nav link
const BASE = "text-sm font-medium transition-all duration-200";
const ACTIVE = "bg-primary text-primary-foreground shadow-sm";
const IDLE = "text-foreground/70 hover:text-foreground hover:bg-primary/10 active:bg-primary/20 active:text-primary";


function NavLink({ href, label, active, mobile, onClick }) {
  const shape = mobile ? "rounded-xl px-4 py-3" : "rounded-full px-4 py-2";
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${BASE} ${shape} ${active ? ACTIVE : IDLE}`}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" onClick={close} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-card lg:h-12 lg:w-12">
              <GraduationCap className="h-5 w-5 lg:h-6 lg:w-6" />
            </div>
            <div className="leading-tight">
              <p className="text-base font-bold text-foreground lg:text-lg">SQ Group</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground lg:text-xs">of Colleges</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {NAV.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href} />
            ))}
          </nav>

          <Link
            href="/admissions"
            className="hidden lg:inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition hover:opacity-95"
          >
            Apply Now
          </Link>

          <button
            className="rounded-md p-2 text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="pb-4 lg:hidden">
            <nav className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-3 shadow-card">
              {NAV.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href} mobile onClick={close} />
              ))}
              <Link
                href="/admissions"
                onClick={close}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                Apply Now
              </Link>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
