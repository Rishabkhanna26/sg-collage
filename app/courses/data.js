
export const courses = [
  {
    slug: "d-pharma",
    title: "D PHARMA",
    category: "Pharmacy",
    icon: "Pill",
    duration: "2 Years",
    seats: 60,
    eligibility: "10+2 (PCB) with minimum 45%",
    fee: "INR 50,000 per year",
    description: "Diploma in Pharmacy program focused on pharmaceutical sciences, drug dispensing, and patient care.",
    detailedDescription: "The Diploma in Pharmacy (D PHARMA) is a comprehensive 2-year program that prepares students for careers in pharmaceutical sciences and healthcare. Students gain hands-on experience in drug formulation, dispensing practices, pharmaceutical chemistry, and patient counseling. The curriculum combines theoretical knowledge with practical training in our state-of-the-art pharmacy labs, preparing graduates to work in hospitals, retail pharmacies, pharmaceutical companies, and regulatory agencies.",
    subjects: [
      "Pharmaceutical Chemistry",
      "Pharmacology",
      "Pharmaceutics",
      "Pharmacognosy",
      "Biochemistry",
      "Human Anatomy & Physiology",
      "Health Education & Community Pharmacy",
      "Hospital & Clinical Pharmacy"
    ],
    requirements: [
      "10+2 with Physics, Chemistry, and Biology/Mathematics",
      "Minimum 45% aggregate marks in qualifying examination",
      "Age: 17 years minimum at the time of admission",
      "Valid score in state pharmacy entrance exam (if applicable)"
    ],
    careerOpportunities: [
      "Community Pharmacist - Work in retail pharmacies serving local communities",
      "Hospital Pharmacist - Manage hospital pharmacy operations and patient medication",
      "Pharmaceutical Sales Representative - Promote pharmaceutical products to healthcare professionals",
      "Drug Inspector - Ensure quality control and regulatory compliance in pharmaceutical industry",
      "Medical Representative - Bridge between pharmaceutical companies and healthcare providers",
      "Quality Control Analyst - Test and verify pharmaceutical product quality"
    ]
  },
  {
    slug: "ba",
    title: "BA",
    category: "Arts",
    icon: "BookOpen",
    duration: "3 Years",
    seats: 100,
    eligibility: "10+2 in any stream with minimum 45%",
    fee: "INR 30,000 per year",
    description: "Bachelor of Arts program offering diverse subjects in humanities, social sciences, and languages.",
    detailedDescription: "The Bachelor of Arts (BA) is a versatile 3-year undergraduate program that provides students with a broad education in humanities, social sciences, and languages. Students can choose from various subject combinations including History, Political Science, Economics, English, Hindi, and Sociology. The program develops critical thinking, communication skills, and cultural awareness, preparing graduates for diverse career paths in education, civil services, media, and social work. Our experienced faculty and comprehensive curriculum ensure students receive a well-rounded education that opens doors to multiple career opportunities.",
    subjects: [
      "History",
      "Political Science",
      "Economics",
      "English Literature",
      "Hindi Literature",
      "Sociology",
      "Psychology",
      "Philosophy"
    ],
    requirements: [
      "10+2 in any stream (Arts, Science, or Commerce)",
      "Minimum 45% aggregate marks in qualifying examination",
      "Age: 17 years minimum at the time of admission",
      "Proficiency in English or Hindi for medium of instruction"
    ],
    careerOpportunities: [
      "Teaching Professional - Pursue B.Ed and teach in schools and coaching institutes",
      "Civil Services - Prepare for UPSC, state PSC, and administrative services",
      "Content Writer - Create content for media, publishing, and digital platforms",
      "Social Worker - Work with NGOs and community development organizations",
      "Journalist - Report and write for newspapers, magazines, and online media",
      "Human Resources - Manage recruitment, training, and employee relations in organizations"
    ]
  },
  {
    slug: "bsc-maths-bio",
    title: "B Sc MATHS/BIO",
    category: "Science",
    icon: "FlaskConical",
    duration: "3 Years",
    seats: 80,
    eligibility: "10+2 (PCM/PCB) with minimum 50%",
    fee: "INR 35,000 per year",
    description: "Bachelor of Science program with specializations in Mathematics or Biology for science enthusiasts.",
    detailedDescription: "The Bachelor of Science (B Sc) in Mathematics/Biology is a rigorous 3-year program designed for students passionate about scientific inquiry and analytical thinking. Students can specialize in Mathematics (with Physics and Chemistry) or Biology (with Chemistry and Zoology/Botany). The program emphasizes laboratory work, research methodology, and practical applications of scientific principles. Our well-equipped labs and experienced faculty provide students with hands-on experience in experiments, data analysis, and scientific research. Graduates are well-prepared for careers in research, education, healthcare, and technology sectors.",
    subjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Zoology",
      "Botany",
      "Statistics",
      "Computer Science"
    ],
    requirements: [
      "10+2 with Physics, Chemistry, and Mathematics (for Maths specialization)",
      "10+2 with Physics, Chemistry, and Biology (for Biology specialization)",
      "Minimum 50% aggregate marks in qualifying examination",
      "Age: 17 years minimum at the time of admission"
    ],
    careerOpportunities: [
      "Research Scientist - Conduct research in academic institutions and research labs",
      "Laboratory Technician - Work in diagnostic labs, research facilities, and hospitals",
      "Data Analyst - Analyze data for businesses, research organizations, and tech companies",
      "Science Teacher - Teach science subjects in schools after completing B.Ed",
      "Biotechnology Professional - Work in biotech companies and pharmaceutical research",
      "Environmental Scientist - Study and protect environmental systems and resources"
    ]
  },
  {
    slug: "bsc-home-science",
    title: "B Sc HOME SCIENCE",
    category: "Science",
    icon: "Home",
    duration: "3 Years",
    seats: 60,
    eligibility: "10+2 in any stream with minimum 45%",
    fee: "INR 32,000 per year",
    description: "Bachelor of Science in Home Science covering nutrition, textiles, child development, and family resource management.",
    detailedDescription: "The Bachelor of Science in Home Science is a comprehensive 3-year program that integrates scientific principles with practical applications in daily life. The curriculum covers nutrition and dietetics, food science, textile and clothing, child development, family resource management, and home management. Students gain practical skills through laboratory work, community projects, and internships. The program prepares graduates for careers in nutrition, fashion design, education, hospitality, and social welfare. Our modern labs for food science, textiles, and child development provide students with hands-on experience in their chosen specializations.",
    subjects: [
      "Nutrition and Dietetics",
      "Food Science and Technology",
      "Textile and Clothing",
      "Child Development",
      "Family Resource Management",
      "Home Management",
      "Human Development",
      "Consumer Studies"
    ],
    requirements: [
      "10+2 in any stream (Science, Arts, or Commerce)",
      "Minimum 45% aggregate marks in qualifying examination",
      "Age: 17 years minimum at the time of admission",
      "Interest in nutrition, textiles, child development, or family welfare"
    ],
    careerOpportunities: [
      "Nutritionist/Dietitian - Provide dietary counseling in hospitals, clinics, and wellness centers",
      "Fashion Designer - Design clothing and textiles for fashion industry and retail",
      "Child Development Specialist - Work in schools, daycare centers, and child welfare organizations",
      "Home Science Teacher - Teach home science in schools after completing B.Ed",
      "Food Technologist - Develop and test food products in food processing industry",
      "Interior Designer - Design residential and commercial spaces with focus on functionality"
    ]
  }
];


export function getCourseBySlug(slug) {
  return courses.find(course => course.slug === slug);
}


export function getSimilarCourses(currentSlug) {
  return courses.filter(course => course.slug !== currentSlug);
}
