import { notFound } from "next/navigation";
import { courses, getCourseBySlug, getSimilarCourses } from "../data";
import { PageHero } from "@/shared/PageHero";
import { SectionHeading } from "@/shared/SectionHeading";
import { CourseInfoGrid } from "./CourseInfoGrid";
import { RequirementsList } from "./RequirementsList";
import { CareerGrid } from "./CareerGrid";
import { SimilarCoursesGrid } from "./SimilarCoursesGrid";
import { SubjectsGrid } from "./SubjectsGrid";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.title} - Course Details`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  const similarCourses = getSimilarCourses(slug);

  return (
    <>
      <PageHero
        eyebrow={course.category}
        title={course.title}
        description={course.description}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Course Overview"
            description={course.detailedDescription}
          />
          <CourseInfoGrid course={course} />
        </div>
      </section>

      <section className="bg-gradient-soft py-16 md:py-24">
        <div className="container mx-auto pl-8 pr-4 lg:pl-20 lg:pr-8">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              title="Requirements to Pursue"
              description="Eligibility criteria for admission to this program"
              align="left"
            />
            <RequirementsList requirements={course.requirements} />
          </div>
        </div>
      </section>

      {course.subjects && course.subjects.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading
              title="Subjects Covered"
              description="Core subjects and curriculum you will study in this program"
            />
            <SubjectsGrid subjects={course.subjects} />
          </div>
        </section>
      )}

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Career Opportunities"
            description="Explore the diverse career paths available after completing this program"
          />
          <CareerGrid opportunities={course.careerOpportunities} />
        </div>
      </section>

      <section className="bg-gradient-soft py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Explore Other Programs"
            description="Discover other courses offered at SQ Group of Colleges"
          />
          <SimilarCoursesGrid courses={similarCourses} />
        </div>
      </section>
    </>
  );
}
