import Link from "next/link";
import { PageHero } from "@/shared/PageHero";
import { SectionHeading } from "@/shared/SectionHeading";
import { blogPosts, categories } from "./data";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const featured = blogPosts.filter((p) => p.featured);
const regular = blogPosts.filter((p) => !p.featured);

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Blog & Insights"
        description="Stories, guides, and perspectives from the SQ Group of Colleges community"
      />

      {/* Featured posts */}
      {featured.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading
              eyebrow="Editor's Pick"
              title="Featured Articles"
              description="In-depth reads handpicked for you"
            />

            <div className="grid lg:grid-cols-2 gap-8">
              {featured.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform hover:scale-[1.015] block"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="rounded-full bg-accent/15 px-3 py-1 font-semibold uppercase tracking-wider text-primary">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold leading-snug mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                      Read Article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All posts */}
      <section className="bg-gradient-soft py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="All Articles"
            title="More from the Blog"
            description="Browse our full collection of articles, guides, and stories"
          />

          {/* Category pills */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground cursor-default"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regular.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:scale-[1.02]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-accent/15 px-2.5 py-1 font-semibold uppercase tracking-wider text-primary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
