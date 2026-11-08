import { Program, Facility, GalleryItem } from '../types';

export const CAMPUS_INFO = {
  name: "Aspire College Taunsa Campus",
  shortName: "Aspire Taunsa",
  boardAffiliation: "Board of Intermediate & Secondary Education (BISE) Dera Ghazi Khan",
  centerCode: "4210",
  address: "Kot Adu Road, Near College Chowk, Taunsa Sharif, District Taunsa, Punjab, Pakistan",
  phoneNumbers: ["+92 64 2601234", "+92 300 1234567"],
  mobileHelpline: "+92 300 1234567",
  email: "taunsa@aspirecolleges.edu.pk",
  admissionsEmail: "admissions.taunsa@aspirecolleges.edu.pk",
  visitingHours: "Monday to Saturday: 08:00 AM – 03:30 PM (Friday Break: 12:30 PM – 02:00 PM)",
  principal: {
    name: "Prof. M. Tariq Javaid",
    role: "Campus Principal",
    credentials: "M.Phil Education, 22+ Yrs Experience",
    quote: "At Aspire College Taunsa, our ambition is not merely to prepare young minds for examinations, but to ignite curiosity, instill unwavering ethical discipline, and open pathways to premier universities across Pakistan and beyond.",
    badge: "Verified Campus Leadership"
  }
};

export const QUICK_STATS = [
  {
    icon: "workspace_premium",
    value: "100%",
    label: "BISE Board Pass Rate"
  },
  {
    icon: "science",
    value: "15+",
    label: "Modern Labs & Halls"
  },
  {
    icon: "military_tech",
    value: "95%",
    label: "Merit Distinction Holders"
  },
  {
    icon: "security",
    value: "24/7",
    label: "CCTV & State Security"
  }
];

export const PROGRAMS: Program[] = [
  {
    id: "fsc-pre-med",
    name: "F.Sc Pre-Medical",
    badge: "HIGHEST MERIT TRACK",
    duration: "2 Years",
    category: "intermediate",
    description: "Core pathway for Medical Colleges (MBBS, BDS, Allied Health Sciences) through rigorous MDCAT preparation alongside board syllabus.",
    subjects: ["Physics", "Chemistry", "Biology"],
    eligibility: "Matric Science (Min 65% Marks)",
    careerPath: "MBBS, BDS, Pharm-D, DVM, Biotechnology & Biomedical Engineering",
    evaluationScheme: [
      "Daily Morning Quizzes & Chapter Tests",
      "Monthly Comprehensive Send-Up Examinations",
      "Board Standard Pre-Board Simulation (Dec - Jan)",
      "Hands-on Laboratory Practical Notebooks & Vivas"
    ]
  },
  {
    id: "fsc-pre-eng",
    name: "F.Sc Pre-Engineering",
    badge: "DISCOUNTED MERIT",
    duration: "2 Years",
    category: "intermediate",
    description: "Gateway to top-tier engineering institutes (UET, NUST, GIKI, PIEAS) along with ECAT analytical problem-solving modules.",
    subjects: ["Physics", "Mathematics", "Chemistry"],
    eligibility: "Matric Science (Min 60% Marks)",
    careerPath: "Electrical, Mechanical, Civil, Mechatronics, Aerospace, Software & Chemical Engineering",
    evaluationScheme: [
      "Daily Problem-Solving Quizzes",
      "Weekly ECAT Mathematical Analytical Tests",
      "Pre-Board BISE Mock Examinations",
      "Comprehensive Physics & Chemistry Practical Labs"
    ]
  },
  {
    id: "ics",
    name: "ICS (Computer Science)",
    badge: "HIGH-GROWTH FIELD",
    duration: "2 Years",
    category: "intermediate",
    description: "Designed for tomorrow's Software Engineers, Data Scientists, and AI innovators with hands-on laboratory computing & algorithmic principles.",
    subjects: ["Comp. Science", "Maths", "Physics / Stats"],
    eligibility: "Matric Science / Comp (Min 55% Marks)",
    careerPath: "BS Computer Science, BS Software Engineering, AI & Machine Learning, Data Science, Cyber Security",
    evaluationScheme: [
      "Hands-on Coding & Algorithm Assignments",
      "C++ & Database Laboratory Practical Sessions",
      "Monthly Theory & Practical Assessments",
      "Final BISE Model Pre-Board Testing"
    ]
  },
  {
    id: "icom",
    name: "I.Com (Commerce)",
    badge: "CAREER FOCUSED",
    duration: "2 Years",
    category: "intermediate",
    description: "Foundational stepping stone for Chartered Accountancy (CA, ACCA), Banking, BBA, and Financial Technologies.",
    subjects: ["Principles of Accounting", "Economics", "Banking"],
    eligibility: "Matric Science / Arts (Min 50% Marks)",
    careerPath: "CA, ACCA, BBA, BS Finance, Banking & Corporate Business Management",
    evaluationScheme: [
      "Ledger & Journal Practical Case Exercises",
      "Business Mathematics Problem Drill",
      "Send-Up Examinations according to Board Format",
      "Commercial Geography & Banking Projects"
    ]
  },
  {
    id: "fa",
    name: "FA (Humanities & Arts)",
    badge: "DIVERSE PROFILES",
    duration: "2 Years",
    category: "intermediate",
    description: "Premier springboard for aspiring lawyers, Civil Servants (CSS/PMS), journalists, social scientists, and humanists.",
    subjects: ["Civics", "Education", "Islamic Studies", "Psychology"],
    eligibility: "Matric Arts / Science (Min 45% Marks)",
    careerPath: "Law (LLB), CSS / PMS Civil Services, International Relations, Mass Comm, Social Sciences",
    evaluationScheme: [
      "Essay Writing & Analytical Reasoning Workshops",
      "Monthly Objective & Subjective Testing",
      "BISE D.G. Khan Standard Pre-Board Examinations",
      "Presentation & Debating Skills Integration"
    ]
  }
];

export const SCHOLARSHIPS = {
  title: "Aspire Scholarships",
  badge: "MERIT POLICIES",
  headline: "Up to 100% Free Education for high achievers.",
  description: "Special financial aid and concession schemes for siblings, kinship, and wards of teachers & civil service heroes.",
  categories: [
    { title: "Kinship & Teacher Children Discounts", desc: "Special concession for brothers/sisters and children of respected school & college educators." },
    { title: "Top Marks & Admissions Top-3 Merit Honors", desc: "100% free tuition waivers for district position holders and students scoring 1000+ marks." },
    { title: "Hafiz-e-Quran & Need-Based Waivers", desc: "Dedicated financial support ensuring no deserving scholar in Taunsa Sharif is left behind." }
  ]
};

export const FACILITIES: Facility[] = [
  {
    id: "fac-1",
    title: "Qualified & Experienced Faculty",
    subtitle: "Subject specialists with M.Phil/Ph.D. credentials and proven reputations in BISE DG Khan board exam paper checking.",
    icon: "school",
    description: "Over 40 full-time professors and senior lecturers dedicated to individual mentoring and academic progress.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-2",
    title: "Multimedia Classrooms",
    subtitle: "Spacious, climate-controlled lecture rooms equipped with smart interactive projectors for 3D diagrammatic pedagogy.",
    icon: "co_present",
    description: "Acoustically treated lecture halls designed to foster interactive dialogues and focused lecture attention.",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-3",
    title: "Advanced Science Laboratories",
    subtitle: "Fully stocked Physics, Chemistry, and Biology apparatus strictly following the BISE intermediate practical manual.",
    icon: "biotech",
    description: "Equipped with state-of-the-art apparatus, precision digital scales, and safety-certified work tables.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-4",
    title: "High-Tech Computer Labs",
    subtitle: "Core i7 workstations with high-speed fiber internet, C++ compilers, and dedicated power backup units.",
    icon: "computer",
    description: "60+ networked workstations with high-speed internet, coding IDEs, and round-the-clock UPS generator backup.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-5",
    title: "Comprehensive Central Library",
    subtitle: "Over 8,000 reference books, 10-year past paper archives, international periodicals, and quiet study alcoves.",
    icon: "local_library",
    description: "Quiet study zones, past paper solutions, research books, and digital access terminals for self-paced study.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-6",
    title: "Sports & MDCAT Counseling",
    subtitle: "Cricket ground, badminton court, and weekly guidance round-the-clock seminar sessions for MDCAT/ECAT.",
    icon: "fitness_center",
    description: "Balanced personality grooming through athletic fixtures, cricket matches, and systematic career roadmapping.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
  }
];

export const WHY_CHOOSE_PILLARS = [
  {
    number: "01",
    title: "Quality Education & Pedagogy",
    description: "Structured academic calendars that ensure thorough conceptual mastery, analysis sharpening, and board-standard exam technique."
  },
  {
    number: "02",
    title: "Board-Vetted Faculty",
    description: "A seasoned cadre of distinguished educators that combine pedagogical rigor and genuine mentorship to elevate every pupil's score."
  },
  {
    number: "03",
    title: "Personality Development",
    description: "Annual debate contests, science fairs, community leadership initiatives, and character workshops groom confident citizens."
  },
  {
    number: "04",
    title: "Medical & Engg Guidance",
    description: "Early foundation tracks for MDCAT, ECAT, UET and university entry requirements built seamlessly into daily lectures."
  },
  {
    number: "05",
    title: "Consistent Merit Positions",
    description: "Year after year, Aspire Taunsa students secure top board positions and admission in leading Pakistani medical and tech universities."
  },
  {
    number: "06",
    title: "Safe & Disciplined Campus",
    description: "Strict biometric security, round-the-clock CCTV cameras, zero tolerance for raging policy, and separate buses on all routes."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Academic Block & Main Entrance",
    subtitle: "Modern Campus Architecture",
    category: "campus",
    categoryLabel: "Campus Building",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-2",
    title: "Hands-On Chemistry Experimentation",
    subtitle: "Advanced Science Practical Labs",
    category: "labs",
    categoryLabel: "Classrooms & Labs",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-3",
    title: "Collegiate Scholars & Study Circles",
    subtitle: "Student Life & Mentorship",
    category: "students",
    categoryLabel: "Students",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-4",
    title: "Annual All-Punjab Debate Championship",
    subtitle: "Co-curricular Excellence",
    category: "events",
    categoryLabel: "Events & Sports",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-5",
    title: "Annual Sports Gala & Trophy Ceremony",
    subtitle: "Athletic Competitions & Team Spirit",
    category: "events",
    categoryLabel: "Events & Sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-6",
    title: "Advanced Computer Science Lab",
    subtitle: "Networked Core i7 Systems",
    category: "labs",
    categoryLabel: "Classrooms & Labs",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
  }
];

export const ADMISSION_SCHEDULE = [
  {
    phase: "Submission of Admission Forms",
    status: "Ongoing",
    isHighlight: true
  },
  {
    phase: "1st Merit List Display",
    status: "Within 3 Days",
    isHighlight: false
  },
  {
    phase: "Commencement of Regular Classes (Orientation Session for 1st Year)",
    status: "Aug 2024",
    isHighlight: false
  }
];

export const REQUIRED_DOCUMENTS = [
  "Matriculation Result Card / Certificate (3 Attested Copies)",
  "Character Certificate from School Head / Principal (Original)",
  "Student Bay-Form / CNIC Copy & Father/Guardian CNIC Copy",
  "4 Recent Passport-sized Photographs (Blue background)"
];
