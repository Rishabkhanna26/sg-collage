import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/shared/PageHero";
import { EventsSection } from "../EventsSection";
import { getEventsSection } from "../data";

export const metadata = {
  title: "All Events — Gallery — SQ Group of Colleges",
  description:
    "Explore every campus event gallery from SQ Group of Colleges, including celebrations, festivals, sports, and convocation moments.",
};

export default function GalleryEventsPage() {
  const eventsSection = getEventsSection();

  if (!eventsSection) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Event Galleries"
        title="All Campus Events"
        description="Browse every celebration, annual function, and campus gathering captured across the academic years."
      />

      <div className="container mx-auto px-4 pt-8 lg:px-8">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Gallery
        </Link>
      </div>

      <EventsSection section={eventsSection} />
    </>
  );
}
