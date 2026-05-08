export const featuredEvents = [
  {
    slug: "annual-college-festival-2026",
    date: "May 25, 2026",
    category: "Featured",
    title: "Annual College Festival 2026 - Celebrating Excellence",
    description: "Join us for three days of cultural performances, academic competitions, sports tournaments, and guest lectures. This year's theme is 'Innovation and Tradition' featuring renowned speakers from industry and academia.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    featured: true,
  },
];

export const upcomingEvents = [
  {
    slug: "mbbs-2026-admissions-open",
    date: "May 12, 2026",
    category: "Admissions",
    title: "MBBS 2026 admissions are now open",
    description: "Applications for MBBS program 2026 batch are now being accepted. Submit your application before the June 30 deadline to secure your seat.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=700&q=80",
  },
  {
    slug: "annual-medical-research-symposium",
    date: "June 5, 2026",
    category: "Research",
    title: "Annual Medical Research Symposium",
    description: "Join us for our annual research symposium featuring groundbreaking studies from our faculty and students. Presentations will cover advances in pharmaceutical sciences, clinical research, and healthcare innovation.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
  },
  {
    slug: "white-coat-ceremony-2026",
    date: "July 15, 2026",
    category: "Event",
    title: "White Coat Ceremony for New Medical Students",
    description: "Celebrate the beginning of your medical journey at our traditional White Coat Ceremony. This milestone event welcomes incoming students into the medical profession with the symbolic white coat presentation.",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=700&q=80",
  },
  {
    slug: "clinical-skills-workshop-pharmacy",
    date: "August 20, 2026",
    category: "Workshop",
    title: "Clinical Skills Workshop for Pharmacy Students",
    description: "Hands-on workshop focusing on essential clinical pharmacy skills including patient counseling, medication therapy management, and drug interaction analysis. Open to all D.Pharma and B.Pharma students.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=700&q=80",
  },
  {
    slug: "career-guidance-seminar-final-year",
    date: "September 10, 2026",
    category: "Seminar",
    title: "Career Guidance Seminar for Final Year Students",
    description: "Expert career counselors and industry professionals will guide students on career opportunities, higher education options, and job market trends in healthcare and pharmaceutical sectors.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=80",
  },
  {
    slug: "inter-college-sports-championship",
    date: "October 2, 2026",
    category: "Sports",
    title: "Inter-College Sports Championship",
    description: "Annual sports meet featuring cricket, football, basketball, athletics, and indoor games. Students from all departments compete for the championship trophy.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=700&q=80",
  },
];

export const academicEvents = [
  {
    slug: "guest-lecture-future-pharmaceutical-sciences",
    date: "May 15, 2026",
    category: "Academic",
    title: "Guest Lecture: Future of Pharmaceutical Sciences",
    description: "Renowned pharmaceutical scientist Dr. Rajesh Kumar will discuss emerging trends in drug development and personalized medicine.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80",
  },
  {
    slug: "science-exhibition-project-showcase",
    date: "June 20, 2026",
    category: "Academic",
    title: "Science Exhibition and Project Showcase",
    description: "Students present their innovative research projects and scientific experiments. Open to all departments with prizes for best projects.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=700&q=80",
  },
  {
    slug: "faculty-development-program-teaching-methods",
    date: "July 8, 2026",
    category: "Academic",
    title: "Faculty Development Program on Modern Teaching Methods",
    description: "Three-day workshop for faculty members focusing on innovative teaching methodologies, digital tools, and student engagement strategies.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80",
  },
];

export const campusNews = [
  {
    slug: "students-win-national-science-competition",
    date: "Apr 28, 2026",
    category: "Achievement",
    title: "SQ College Students Win National Science Competition",
    description: "Three students from B.Sc program secured top positions in the National Science Olympiad, bringing laurels to the institution.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80",
  },
  {
    slug: "new-laboratory-inaugurated",
    date: "Apr 20, 2026",
    category: "Infrastructure",
    title: "New State-of-the-Art Laboratory Inaugurated",
    description: "The college inaugurated a modern pharmaceutical research laboratory equipped with advanced instruments and technology for student training.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=700&q=80",
  },
  {
    slug: "record-placement-season-2026",
    date: "Apr 10, 2026",
    category: "Placement",
    title: "Record Placement Season: 95% Students Placed",
    description: "This year's placement drive achieved remarkable success with leading pharmaceutical companies and hospitals recruiting our graduates.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&q=80",
  },
  {
    slug: "mou-signed-pharmaceutical-company",
    date: "Mar 25, 2026",
    category: "Collaboration",
    title: "MoU Signed with Leading Pharmaceutical Company",
    description: "SQ Group of Colleges signed a memorandum of understanding with a major pharmaceutical company for student internships and research collaboration.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80",
  },
];

export const allEvents = [
  ...featuredEvents,
  ...upcomingEvents,
  ...academicEvents,
  ...campusNews,
];

export function getEventBySlug(slug) {
  return allEvents.find((e) => e.slug === slug) ?? null;
}

export function getRelatedEvents(currentSlug) {
  const current = getEventBySlug(currentSlug);
  if (!current) return [];
  return allEvents
    .filter((e) => e.slug !== currentSlug && e.category === current.category)
    .slice(0, 3);
}
