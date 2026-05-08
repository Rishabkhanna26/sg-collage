import { Clock, Users, CheckCircle, DollarSign } from "lucide-react";

export function CourseInfoGrid({ course }) {
  const infoItems = [
    {
      icon: Clock,
      label: "Duration",
      value: course.duration,
    },
    {
      icon: Users,
      label: "Seats Available",
      value: `${course.seats} seats`,
    },
    {
      icon: CheckCircle,
      label: "Eligibility",
      value: course.eligibility,
    },
    {
      icon: DollarSign,
      label: "Fees",
      value: course.fee,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {infoItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="rounded-lg bg-secondary p-4"
          >
            <Icon className="mb-2 h-5 w-5 text-accent" />
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}
