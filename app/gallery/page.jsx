import { PageHero } from "@/shared/PageHero";
import { GallerySection } from "./GallerySection";
import { EventsSection } from "./EventsSection";
import { gallerySections } from "./data";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Gallery"
        title="Moments that define us"
        description="A visual journey through campus life, academic milestones, events, and the people who make SQ Group of Colleges what it is."
      />

      {gallerySections.map((section, i) =>
        section.type === "events" ? (
          <EventsSection key={section.id} section={section} />
        ) : (
          <GallerySection key={section.id} section={section} alternate={i % 2 !== 0} />
        )
      )}
    </>
  );
}
