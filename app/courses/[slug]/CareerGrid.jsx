import { Briefcase } from "lucide-react";

export function CareerGrid({ opportunities }) {
  if (!opportunities || opportunities.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        Career opportunities information will be updated soon. Please contact our career counseling office for guidance.
      </p>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {opportunities.map((opportunity, index) => (
        <div
          key={index}
          className="rounded-lg border border-border bg-card p-4 shadow-sm"
        >
          <Briefcase className="mb-3 h-5 w-5 text-accent" />
          <p className="text-sm font-medium text-foreground">
            {opportunity}
          </p>
        </div>
      ))}
    </div>
  );
}
