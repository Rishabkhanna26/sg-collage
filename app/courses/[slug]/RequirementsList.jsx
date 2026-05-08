import { CheckCircle } from "lucide-react";

export function RequirementsList({ requirements }) {
  if (!requirements || requirements.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No specific requirements listed. Please contact admissions for details.
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {requirements.map((requirement, index) => (
        <li key={index} className="flex gap-3">
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          <span className="text-sm text-foreground">{requirement}</span>
        </li>
      ))}
    </ul>
  );
}
