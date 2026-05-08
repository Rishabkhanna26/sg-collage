import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/shared/PageHero";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "../data";
import { Calendar, Clock, ArrowLeft, Tag, User, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — SQ Group of Colleges Blog`,
    description: post.excerpt,
  };
}

// Renders the markdown-style blog content into JSX
function renderContent(content) {
  const lines = content.split("\n");
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="mt-10 mb-4 text-2xl font-bold text-foreground">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*(.*)$/);
      if (match) {
        elements.push(
          <li key={i} className="mb-1.5"><strong>{match[1]}</strong>{match[2]}</li>
        );
      } else {
        elements.push(
          <li key={i} className="mb-1.5">{line.replace(/^- /, "")}</li>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="mb-1.5">{line.replace(/^- /, "")}</li>
      );
    } else if (/^\d+\. /.test(line)) {
      const match = line.match(/^\d+\. \*\*(.+?)\*\*(.*)$/);
      if (match) {
        elements.push(
          <li key={i} className="mb-1.5"><strong>{match[1]}</strong>{match[2]}</li>
        );
      } else {
        elements.push(
          <li key={i} className="mb-1.5">{line.replace(/^\d+\. /, "")}</li>
        );
      }
    } else if (line.trim() === "") {
      // blank line — skip
    } else {
      const parts = line.split(/\*\*(.+?)\*\*/g);
      elements.push(
        <p key={i} className="mb-5 text-base leading-relaxed text-muted-foreground">
          {parts.map((part, j) =>
            j % 2 === 1
              ? <strong key={j} className="text-foreground font-semibold">{part}</strong>
              : part
          )}
        </p>
      );
    }
    i++;
  }

  const wrapped = [];
  let listBuffer = [];
  let listType = null;

  elements.forEach((el, idx) => {
    if (el.type === "li") {
      const origLine = lines[idx];
      const isOrdered = /^\d+\. /.test(origLine);
      if (listType === null) listType = isOrdered ? "ol" : "ul";
      listBuffer.push(el);
    } else {
      if (listBuffer.length > 0) {
        const Tag = listType === "ol" ? "ol" : "ul";
        wrapped.push(
          <Tag key={`list-${idx}`} className={`mb-5 pl-6 text-muted-foreground ${listType === "ol" ? "list-decimal" : "list-disc"}`}>
            {listBuffer}
          </Tag>
        );
        listBuffer = [];
        listType = null;
      }
      wrapped.push(el);
    }
  });

  if (listBuffer.length > 0) {
    const Tag = listType === "ol" ? "ol" : "ul";
    wrapped.push(
      <Tag key="list-end" className={`mb-5 pl-6 text-muted-foreground ${listType === "ol" ? "list-decimal" : "list-disc"}`}>
        {listBuffer}
      </Tag>
    );
  }

  return wrapped;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
      />

      <div className="container mx-auto px-4 lg:px-8 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 space-y-8">
              <div className="overflow-hidden rounded-3xl shadow-card">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  <span className="font-medium text-foreground">{post.author}</span>
                  <span className="text-muted-foreground">· {post.authorRole}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>

              <div className="text-base leading-relaxed">
                {renderContent(post.content)}
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-card shadow-card p-6">
                <h3 className="text-base font-bold mb-4">About the Author</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground font-bold text-lg">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.authorRole}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A dedicated member of the SQ Group of Colleges academic community, committed to student success and knowledge sharing.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card shadow-card p-6 space-y-4">
                <h3 className="text-base font-bold">Article Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-primary">
                      <Calendar className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Published</p>
                      <p className="font-medium">{post.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-primary">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Read Time</p>
                      <p className="font-medium">{post.readTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-primary">
                      <Tag className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Category</p>
                      <p className="font-medium">{post.category}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-hero p-6 text-primary-foreground space-y-3">
                <h3 className="text-base font-bold">Ready to Join Us?</h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  Take the first step toward a rewarding career in healthcare.
                </p>
                <Link
                  href="/admissions"
                  className="inline-block rounded-xl bg-primary-foreground/15 hover:bg-primary-foreground/25 px-4 py-2.5 text-sm font-semibold transition-colors"
                >
                  Apply Now →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-gradient-soft py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-10">
              <span className="mb-3 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Keep Reading
              </span>
              <h2 className="text-3xl font-bold md:text-4xl">Related Articles</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:scale-[1.02]"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="rounded-full bg-accent/15 px-2.5 py-1 font-semibold uppercase tracking-wider text-primary">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {item.readTime}
                      </span>
                    </div>
                    <h3 className="text-base font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors flex-1">
                      {item.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
