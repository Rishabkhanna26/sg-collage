import { notFound } from "next/navigation";
import { PageHero } from "@/shared/PageHero";
import { gallerySections, getSubEventById } from "../../data";
import { EventGalleryClient } from "./EventGalleryClient";

export function generateStaticParams() {
  const eventsSection = gallerySections.find((s) => s.id === "events");
  return (eventsSection?.subEvents ?? []).map((e) => ({ eventId: e.id }));
}

export async function generateMetadata({ params }) {
  const { eventId } = await params;
  const event = getSubEventById(eventId);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} — Gallery — SQ Group of Colleges`,
    description: event.description,
  };
}

export default async function EventGalleryPage({ params }) {
  const { eventId } = await params;
  const event = getSubEventById(eventId);

  if (!event) notFound();

  return (
    <>
      <PageHero
        eyebrow="Event Gallery"
        title={event.title}
        description={event.description}
      />
      <EventGalleryClient event={event} />
    </>
  );
}
