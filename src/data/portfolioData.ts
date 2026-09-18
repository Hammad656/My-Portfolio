export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  category: 'Full-Stack' | 'AI & ML' | 'Web App';
  description: string;
  longDescription: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'Production Live' | 'Completed' | 'Open Source';
  featured: boolean;
  architectureHighlights: string[];
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  name: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    featured?: boolean;
    tag?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string;
  score?: string;
  courses?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  badgeType: 'Gold' | 'Cloud' | 'Dev';
  description: string;
  skillsCovered: string[];
  verifyText: string;
}

export const PERSONAL_INFO = {
  name: "Hammad Saleem",
  role: "Software Engineer",
  subRole: "Full Stack Web Developer & AI Solutions Enthusiast",
  email: "hammad467saleem@gmail.com",
  secondaryEmail: "hammadsaleem2003@gmail.com",
  phone: "0306-4659520",
  formattedPhone: "+92 306 4659520",
  address: "79 B1, P&D Society, Lahore, Pakistan",
  city: "Lahore, Pakistan",
  linkedin: "https://linkedin.com/in/hammad-saleem-a64276290/",
  github: "https://github.com/Hammad656",
  whatsapp: "https://wa.me/923064659520",
  summary: `Computer Science graduate with hands-on experience in React.js, Next.js, JavaScript, Tailwind CSS, MongoDB, and MySQL through academic and personal projects. Skilled in developing responsive full-stack web applications, REST API integration, secure authentication, and database management. Familiar with AWS Cloud and Machine Learning, including AI model training and chatbot integration. Passionate about building scalable, user-focused applications and eager to contribute as a Software Engineer or Full Stack Developer.`,
  stats: [
    { label: "Degree & Major", value: "BS Computer Science" },
    { label: "Graduation CGPA", value: "3.03 / 4.00" },
    { label: "Flagship Project", value: "PakResidencyLaw" },
    { label: "Core Focus", value: "Full Stack & AI" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "pak-residency-law",
    title: "PakResidencyLaw",
    subtitle: "AI-Powered Legal Assistance Platform",
    role: "Lead Full-Stack & AI Integration Developer",
    category: "AI & ML",
    description: "An intelligent legal assistance platform leveraging trained machine learning models, Next.js, and MongoDB to deliver automated, instant legal guidance and consultation.",
    longDescription: `PakResidencyLaw was developed to bridge the gap between complex Pakistani residency and legal documentation procedures and citizens who need instant, accurate advice. Hammad architected the platform using Next.js App Router for optimal rendering, crafted responsive and accessible interfaces with Tailwind CSS, built robust REST API endpoints, and trained and integrated machine learning models into an interactive legal chatbot.`,
    highlights: [
      "Built PakResidencyLaw, an AI-powered legal assistance platform using Next.js, MongoDB, REST APIs, and AI chatbot integration.",
      "Designed responsive user interfaces with React.js, Next.js, and Tailwind CSS, ensuring a seamless user experience across all devices.",
      "Developed backend APIs, optimized database operations, and applied best practices in scalability, security, and performance.",
      "Trained and integrated machine learning models to provide intelligent, automated legal assistance and query resolution."
    ],
    technologies: ["Next.js", "React.js", "MongoDB", "REST APIs", "AI Chatbot Integration", "Tailwind CSS", "JavaScript", "Machine Learning"],
    liveUrl: "https://pakresidencylaw.space",
    status: "Production Live",
    featured: true,
    architectureHighlights: [
      "Server-side rendering (SSR) and client components for sub-second page loads",
      "NoSQL document schemas in MongoDB tuned for legal advisory queries and chat logs",
      "NLP/ML model inference integration with rate limiting and prompt safety guards",
      "Production deployment with custom domain configuration and HTTPS encryption"
    ],
    metrics: [
      { label: "Deployment", value: "pakresidencylaw.space" },
      { label: "Architecture", value: "Next.js + MongoDB" },
      { label: "Intelligence", value: "Custom ML Chatbot" }
    ]
  },
  {
    id: "lms-project",
    title: "Learning Management System (LMS)",
    subtitle: "Enterprise Academic & Course Management Platform",
    role: "Backend & Full-Stack Developer",
    category: "Full-Stack",
    description: "A feature-rich academic management platform built with ASP.NET on MVC architecture, delivering secure authentication, role-based access control, and complete CRUD operations.",
    longDescription: `Designed and engineered to streamline academic administration, coursework distribution, and student progress tracking. The system adheres strictly to the Model-View-Controller architectural pattern in ASP.NET, enforcing separation of business logic, database transactions, and user view presentation. It incorporates role-based authorization for administrators, instructors, and students.`,
    highlights: [
      "Developed a complete Learning Management System using ASP.NET on MVC architecture.",
      "Implemented secure role-based authentication and authorization mechanisms for staff and students.",
      "Engineered comprehensive CRUD operations for courses, user enrollments, assignments, and grades.",
      "Structured and optimized relational database schemas for high integrity and rapid query execution."
    ],
    technologies: ["ASP.NET", "C#", "MVC Architecture", "SQL / Relational DB", "Authentication & Authorization", "CRUD Operations"],
    githubUrl: "https://github.com/Hammad656/LMS-Project",
    status: "Completed",
    featured: true,
    architectureHighlights: [
      "Strict MVC architectural tier decoupling presentation from relational data logic",
      "Secure password hashing, session state handling, and anti-CSRF token verification",
      "Normalized relational database schemas preventing anomalous modifications",
      "Automated role-based access control guards on controller routes"
    ],
    metrics: [
      { label: "Code Repository", value: "Hammad656/LMS-Project" },
      { label: "Pattern", value: "MVC Architecture" },
      { label: "Security", value: "Role-Based Auth" }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend Development",
    description: "Modern, responsive, performant user interfaces and component design",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: 92, experience: "Primary framework", featured: true, tag: "Expertise" },
      { name: "Next.js", level: 90, experience: "SSR, App Router & Static Generation", featured: true, tag: "Core" },
      { name: "Tailwind CSS", level: 95, experience: "Utility-first design & animations", featured: true, tag: "Proficient" },
      { name: "JavaScript (ES6+)", level: 92, experience: "Modern asynchronous JS", featured: true },
      { name: "TypeScript", level: 85, experience: "Typed application logic", featured: false },
      { name: "Responsive Web Design", level: 95, experience: "Mobile-first & adaptive layouts", featured: true }
    ]
  },
  {
    name: "Backend & APIs",
    description: "Robust server endpoints, business logic, and security",
    iconName: "Server",
    skills: [
      { name: "Next.js API Routes", level: 88, experience: "Serverless endpoints & handlers", featured: true, tag: "Core" },
      { name: "RESTful APIs", level: 90, experience: "REST architecture, JSON, HTTP codes", featured: true, tag: "Proficient" },
      { name: "Authentication & Authorization", level: 88, experience: "Session, JWT, RBAC security", featured: true },
      { name: "Node.js / Express", level: 85, experience: "Microservices & middleware" },
      { name: "ASP.NET (MVC)", level: 82, experience: "Enterprise MVC architecture", featured: true }
    ]
  },
  {
    name: "Databases & Storage",
    description: "Relational and document data modeling, indexing, and optimization",
    iconName: "Database",
    skills: [
      { name: "MongoDB", level: 88, experience: "Document models, aggregation, NoSQL", featured: true, tag: "Primary NoSQL" },
      { name: "MySQL", level: 92, experience: "HackerRank Certified, queries & joins", featured: true, tag: "Certified" },
      { name: "Database Design & CRUD", level: 90, experience: "Schema normalization & integrity" }
    ]
  },
  {
    name: "Machine Learning & AI",
    description: "Chatbot engineering, model training, and AI tool integration",
    iconName: "Bot",
    skills: [
      { name: "AI Chatbot Integration", level: 90, experience: "Conversational workflows & UI", featured: true, tag: "Production" },
      { name: "Machine Learning Fundamentals", level: 84, experience: "Supervised learning & algorithms", featured: true },
      { name: "AI Model Training", level: 82, experience: "Dataset preparation & fine-tuning" },
      { name: "LLM & Prompt Integration", level: 88, experience: "API integration & context piping" }
    ]
  },
  {
    name: "Cloud & Dev Tools",
    description: "Version control, cloud infrastructure, and deployment pipelines",
    iconName: "Cloud",
    skills: [
      { name: "AWS (Cloud Fundamentals)", level: 85, experience: "Certified fundamentals, EC2, S3", featured: true, tag: "Certified" },
      { name: "Git & GitHub", level: 92, experience: "Version control, branching, PRs", featured: true },
      { name: "Vercel Deployment", level: 90, experience: "Continuous deployment & custom domains", featured: true, tag: "DevOps" },
      { name: "Postman", level: 88, experience: "API debugging, testing & documentation" }
    ]
  },
  {
    name: "Software Engineering & ERP",
    description: "Architectural patterns, enterprise workflows, and problem solving",
    iconName: "Cpu",
    skills: [
      { name: "Full-Stack Web Development", level: 92, experience: "End-to-end web architectures", featured: true },
      { name: "Problem Solving", level: 90, experience: "Algorithmic thinking & debugging" },
      { name: "CRUD Operations", level: 95, experience: "Full lifecycle data operations" },
      { name: "ERP Systems & Modules", level: 82, experience: "Understanding of ERP workflows & modules" }
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: "University of Central Punjab",
    degree: "Bachelor of Science in Computer Science",
    period: "2022 – 2026",
    location: "Lahore, Pakistan",
    score: "CGPA: 3.03 / 4.00",
    details: "In-depth coursework in Data Structures, Algorithms, Object-Oriented Programming, Database Systems, Web Engineering, Software Architecture, Machine Learning, and Cloud Computing.",
    courses: ["Data Structures & Algorithms", "Database Management Systems", "Software Engineering", "Web Technologies", "Machine Learning", "Cloud Computing"]
  },
  {
    institution: "Punjab Group of Colleges",
    degree: "FSC (Pre-Engineering)",
    period: "2020 – 2022",
    location: "Lahore, Pakistan",
    score: "Intermediate Diploma",
    details: "Strong foundational curriculum in Advanced Mathematics, Physics, and Analytical Problem Solving that formed the bedrock for computational engineering."
  },
  {
    institution: "Unique School System",
    degree: "Matriculation (Science)",
    period: "2007 – 2020",
    location: "Lahore, Pakistan",
    score: "Secondary Certificate",
    details: "Graduated with academic distinction, focusing on foundational science, mathematics, and introductory computer studies."
  }
];

export const CERTIFICATIONS_LIST: Certification[] = [
  {
    id: "hackerrank-mysql",
    name: "MySQL Advanced Certificate",
    issuer: "HackerRank",
    year: "Credential Verified",
    badgeType: "Gold",
    description: "Demonstrated advanced proficiency in complex SQL query design, multi-table joins, subqueries, indexing techniques, stored procedures, and database performance optimization.",
    skillsCovered: ["Complex Joins", "Subquery Optimization", "Aggregations & Grouping", "Schema Indexing", "Performance Tuning"],
    verifyText: "Verified by HackerRank"
  },
  {
    id: "aws-cloud",
    name: "AWS Certificate — Cloud Fundamentals",
    issuer: "Amazon Web Services (AWS)",
    year: "Credential Verified",
    badgeType: "Cloud",
    description: "Validation of foundational cloud computing expertise, covering AWS core architecture, compute (EC2), scalable storage (S3), identity & access management (IAM), and cloud security principles.",
    skillsCovered: ["AWS Core Services", "Cloud Architecture", "Identity & Access Management", "Cloud Security", "Cost & Scalability"],
    verifyText: "Verified AWS Cloud Knowledge"
  }
];

export const CV_PLAIN_TEXT = `HAMMAD SALEEM
Software Engineer | Full Stack Developer
Location: 79 B1, P&D Society, Lahore, Pakistan
Phone: 0306-4659520 | +92 306 4659520
Email: hammad467saleem@gmail.com
LinkedIn: linkedin.com/in/hammad-saleem-a64276290/
GitHub: github.com/Hammad656

SUMMARY:
Computer Science graduate with hands-on experience in React.js, Next.js, JavaScript, Tailwind CSS, MongoDB, and MySQL through academic and personal projects. Skilled in developing responsive full-stack web applications, REST API integration, secure authentication, and database management. Familiar with AWS Cloud and Machine Learning, including AI model training and chatbot integration. Passionate about building scalable, user-focused applications and eager to contribute as a Software Engineer or Full Stack Developer.

EDUCATION:
- University of Central Punjab (2022 – 2026)
  Bachelor of Science in Computer Science • CGPA: 3.03
- Punjab Group of Colleges (2020 – 2022)
  FSC (Pre-Engineering)
- Unique School System (2007 – 2020)
  Matriculation

TECHNICAL SKILLS:
- Frontend: React.js, Next.js, Tailwind CSS, Responsive Web Design, JavaScript, TypeScript
- Backend: Next.js API Routes, RESTful APIs, Authentication & Authorization, Javascript, ASP.NET MVC
- Databases: MongoDB, MySQL
- Cloud & Dev Tools: AWS (Cloud Fundamentals), Git, GitHub, Vercel
- Machine Learning & AI: Machine Learning Fundamentals, AI Model Training, AI Chatbot Integration
- Software Development: Full-Stack Web Development, API Integration, CRUD Operations, Database Design, Problem Solving
- ERP Systems: Good understanding of ERP systems and modules

PROJECT EXPERIENCE:
1. PakResidencyLaw — AI-Powered Legal Assistance Platform (pakresidencylaw.space)
   Tech: Next.js, MongoDB, REST APIs, AI Chatbot Integration, Tailwind CSS
   - Built PakResidencyLaw, an AI-powered legal assistance platform using Next.js, MongoDB, REST APIs, and AI chatbot integration.
   - Designed responsive user interfaces with React.js, Next.js, and Tailwind CSS, ensuring a seamless user experience.
   - Developed backend APIs, optimized database operations, and applied best practices in scalability, security, and performance.
   - Trained and integrated machine learning models to provide intelligent, automated legal assistance.

2. Learning Management System (LMS) (github.com/Hammad656/LMS-Project)
   Tech: ASP.NET (MVC Architecture)
   - Developed a Learning Management System using ASP.NET on MVC architecture.
   - Implemented secure authentication, CRUD operations, and efficient database management.

CERTIFICATIONS:
- HackerRank — MySQL Advanced Certificate
- AWS Certificate — Cloud Fundamentals
`;
