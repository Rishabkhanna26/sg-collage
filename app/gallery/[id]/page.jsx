import { notFound } from "next/navigation";
import { PageHero } from "@/shared/PageHero";
import { gallerySections } from "../data";
import { GalleryDetailClient } from "./GalleryDetailClient";

export function generateStaticParams() {
  return gallerySections
    .filter((section) => section.type !== "events")
    .map((section) => ({ id: section.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const section = gallerySections.find((s) => s.id === id);
  if (!section || section.type === "events") return { title: "Gallery Not Found" };
  return {
    title: `${section.title} Gallery — SQ Group of Colleges`,
    description: section.description,
  };
}

export default async function GalleryDetailPage({ params }) {
  const { id } = await params;
  const section = gallerySections.find((s) => s.id === id);

  if (!section || section.type === "events") notFound();

  return (
    <>
      <PageHero
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      <GalleryDetailClient section={section} />
    </>
  );
}
