export function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="bg-gradient-hero pt-28 pb-16 text-primary-foreground md:pt-36 md:pb-20">
      <div className="container mx-auto px-4 text-center lg:px-8">

        {eyebrow && (
          <p className="mb-4 inline-block rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em]">
            {eyebrow}
          </p>
        )}

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 md:text-xl">
            {description}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}

      </div>
    </section>
  );
}
