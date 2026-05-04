import { Calendar } from "lucide-react";

const news = [
  { date: "May 12, 2026", category: "Admissions", title: "MBBS 2026 admissions are now open — apply before June 30." },
  { date: "Apr 28, 2026", category: "Research", title: "Our pathology dept publishes breakthrough cancer biomarker study." },
  { date: "Apr 15, 2026", category: "Event", title: "Annual Health Awareness Week kicks off across all campuses." },
];

export function HomeNews() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-accent/15 text-primary mb-3">Latest Updates</span>
            <h2 className="text-3xl md:text-5xl font-bold">News & Events</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <article key={item.title} className="h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${["1532938911079-1b06ac7ceec7", "1559757175-08f3d3c1b9bd", "1576091160399-112ba8d25d1d"][index]}?w=700&q=80`}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-accent/15 px-2.5 py-1 font-semibold uppercase tracking-wider text-primary">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
