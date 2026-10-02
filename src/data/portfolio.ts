export const SITE = {
  name: "Gabriel Atta",
  firstName: "Gabriel",
  lastName: "Atta",
  monogram: "GA",
  role: "HSE Engineer",
  location: "Dubai, UAE",
  email: "gatta9707@gmail.com",
  phone: "+971 54 319 1697",
  phoneHref: "tel:+971543191697",
  cvHref: "/gabriel-atta-cv.pdf",
  availability: "Open to HSE leadership roles",
  tagline:
    "I direct health, safety, and environment on high-rise, structural steel, and facade programmes — ISO 45001, permit-to-work, and RAMS for workforces above 400.",
} as const;

export const CATEGORIES = ["All", "Governance", "High-rise", "Digital", "Systems"] as const;
export type Category = (typeof CATEGORIES)[number];
export type ProjectCategory = Exclude<Category, "All">;

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  image: string;
  alt: string;
  summary: string;
  role: string;
};

export const PROJECTS: Project[] = [
  {
    id: "steel",
    title: "Steel & Facade Programme",
    category: "Governance",
    year: "2025",
    image: "/images/steel.jpg",
    alt: "High-rise structural steel and facade works under construction at dusk",
    summary:
      "HSE governance across seven concurrent German Steel projects, valued over AED 100 million — high-rise steel, facade, and specialist works, 400+ people, multiple subcontractors.",
    role: "HSE Officer, German Steel Contracting",
  },
  {
    id: "digital",
    title: "Digital Safety Stack",
    category: "Digital",
    year: "2025",
    image: "/images/digital.jpg",
    alt: "Site safety desk with a laptop dashboard, hard hat, and high-visibility vest",
    summary:
      "Digital reporting, live dashboards, and automated workflows for risk assessment — less paper lag, faster hazard close-out, same ISO 45001 discipline.",
    role: "HSE Officer, German Steel Contracting",
  },
  {
    id: "highrise",
    title: "High-rise Residential",
    category: "High-rise",
    year: "2022–25",
    image: "/images/highrise.jpg",
    alt: "Residential tower with climbing formwork and perimeter safety screens",
    summary:
      "Main-contractor HSE from substructure to superstructure at Evan Lim Penta. Dubai Municipality, Civil Defense, and client specifications held across a 400+ peak workforce.",
    role: "Safety Officer, Evan Lim Penta",
  },
  {
    id: "rams",
    title: "High-risk RAMS",
    category: "High-rise",
    year: "2022–25",
    image: "/images/excavation.jpg",
    alt: "Deep foundation excavation with steel shoring at dawn",
    summary:
      "RAMS and field inspections for deep excavations, tower-crane lifts, formwork, post-tensioning, and heavy concrete pours — written for the activity, checked on the ground.",
    role: "Safety Officer, Evan Lim Penta",
  },
  {
    id: "ptw",
    title: "Permit-to-Work",
    category: "Systems",
    year: "2025",
    image: "/images/ptw.jpg",
    alt: "Permit-to-work board and method-statement folder on a site table",
    summary:
      "PTW coordination across project teams and subcontractors. Isolation, authorisation, and close-out held to one register so high-risk work never starts on a verbal.",
    role: "HSE Officer, German Steel Contracting",
  },
  {
    id: "lifting",
    title: "Lifting & Cranes",
    category: "Systems",
    year: "2022–25",
    image: "/images/crane.jpg",
    alt: "Tower crane boom above a steel structure against a clear Gulf sky",
    summary:
      "Lift planning, exclusion zones, and daily checks for tower-crane operations on tight urban plots — the work that makes a zero-LTI record possible.",
    role: "Safety Officer, Evan Lim Penta",
  },
];

export type Skill = {
  index: string;
  name: string;
  detail: string;
};

export const SKILLS: Skill[] = [
  {
    index: "01",
    name: "HSE Governance",
    detail: "ISO 45001, UAE federal rules, client specifications, and the day-to-day that keeps them true on site.",
  },
  {
    index: "02",
    name: "Risk Assessment",
    detail: "RAMS written for the task — excavations, lifts, formwork, post-tensioning — then verified in the field.",
  },
  {
    index: "03",
    name: "Hazard Identification",
    detail: "Inspections that find the issue before it finds the workforce. Close-out tracked, not hoped for.",
  },
  {
    index: "04",
    name: "Construction Safety",
    detail: "High-rise residential, structural steel, and facade programmes. Substructure through topping-out.",
  },
  {
    index: "05",
    name: "Incident Investigation",
    detail: "Root-cause analysis that cut repeated incidents by 40%. Lessons that change the next shift.",
  },
  {
    index: "06",
    name: "Emergency Preparedness",
    detail: "Drills, muster, and Civil Defense alignment so a plan is a habit, not a binder.",
  },
  {
    index: "07",
    name: "Permit-to-Work",
    detail: "Authorisation, isolation, and close-out across subcontractors. No high-risk work on a handshake.",
  },
  {
    index: "08",
    name: "Safety Systems",
    detail: "Documentation, digital reporting, and SMS discipline that survives a third-party audit — 98% compliance.",
  },
];

export type Credential = {
  title: string;
  issuer: string;
  year: string;
};

export const CREDENTIALS: Credential[] = [
  {
    title: "NEBOSH International General Certificate",
    issuer: "NEBOSH IGC · Occupational Health and Safety",
    year: "2024",
  },
  {
    title: "OSHA 30-Hour General Industry",
    issuer: "IASP · Safety and Health Certification",
    year: "2025",
  },
  {
    title: "HSE Engineering Specialisation",
    issuer: "Khalifa University, on Coursera",
    year: "2025",
  },
  {
    title: "Chemical Hazards and Process Safety",
    issuer: "University of California, Davis",
    year: "2025",
  },
  {
    title: "Google Project Management Certificate",
    issuer: "Google, on Coursera",
    year: "2025",
  },
];

export const STATS = [
  { label: "Lost-time injuries", value: "Zero", note: "24+ months" },
  { label: "Audit compliance", value: "98%", note: "Third-party" },
  { label: "Repeat incidents", value: "−40%", note: "After RCA" },
  { label: "Workforce", value: "400+", note: "Peak headcount" },
] as const;

export const NAV = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
] as const;
