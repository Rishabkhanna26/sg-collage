import { Quote } from "lucide-react";
import { SectionHeading } from "@/shared/SectionHeading";

const testimonials = [
  { name: "Dr. Ayesha Khan", role: "MBBS Alumna, 2019", quote: "SQ shaped me into the doctor I am today. The clinical exposure and faculty mentorship were exceptional." },
  { name: "Hamza Raza", role: "Pharm-D, Final Year", quote: "World-class labs, supportive teachers, and a campus culture that truly values learning and research." },
  { name: "Dr. Sana Malik", role: "BDS Alumna, 2020", quote: "From day one, SQ felt like home. The hands-on dental training prepared me for international practice." },
];

export function HomeTestimonials() {
  return (
    <section className="py-20 md:py-28 bg-gradient-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading eyebrow="Voices of SQ" title="What our students say" />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="h-full rounded-2xl border border-border/60 bg-card p-7 shadow-card">
              <Quote className="mb-4 h-8 w-8 text-accent" />
              <p className="leading-relaxed text-foreground">"{testimonial.quote}"</p>
              <div className="mt-6 border-t border-border pt-5">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
