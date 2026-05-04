export function SectionHeading({ eyebrow, title, description, align = "center", light, className }) {
  return (
    <div className={["mb-12 max-w-3xl", align === "center" ? "mx-auto text-center" : "", className].filter(Boolean).join(" ")}>
      {eyebrow && (
        <span
          className={["mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]", light ? "bg-primary-foreground/10 text-primary-foreground" : "bg-accent/15 text-primary"].join(" ")}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={["text-3xl font-bold leading-tight md:text-5xl", light ? "text-primary-foreground" : "text-foreground"].join(" ")}>
        {title}
      </h2>
      {description && (
        <p className={["mt-4 text-base leading-relaxed md:text-lg", light ? "text-primary-foreground/80" : "text-muted-foreground"].join(" ")}>
          {description}
        </p>
      )}
    </div>
  );
}
