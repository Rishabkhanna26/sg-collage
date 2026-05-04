"use client";

import { PageHero } from "@/shared/PageHero";
import { FacultyHeads } from "./FacultyHeads";
import { FacultyDirectory } from "./FacultyDirectory";
import { faculty, depts } from "./data";

export default function FacultyPage() {
  const heads = faculty.filter((f) => f.head);

  return (
    <>
      <PageHero eyebrow="Our People" title="Meet our faculty" description="A distinguished team of educators, clinicians, and researchers committed to nurturing the next generation of healthcare professionals." />
      <FacultyHeads heads={heads} />
      <FacultyDirectory faculty={faculty} depts={depts} />
    </>
  );
}
