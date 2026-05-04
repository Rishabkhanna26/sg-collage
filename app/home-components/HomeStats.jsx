const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "4,500+", label: "Students Enrolled" },
  { value: "320+", label: "Faculty Members" },
  { value: "12", label: "Affiliated Hospitals" },
];

export function HomeStats() {
  return (
    <section className="py-16 md:py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-border/60 bg-card p-6 text-center shadow-card">
              <div className="text-4xl font-bold text-gradient-brand md:text-5xl">
                {item.value}
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
