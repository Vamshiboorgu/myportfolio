export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  role: string;
  duration: string;
  team: string;
  tools: string[];
  challenge: string;
  overview: string;
  solution: string;
  features: string[];
  results: string[];
  learnings: string;
  images?: string[];
}

export interface Project {
  id: number;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  caseStudySlug?: string;
  comingSoon?: boolean;
}

export const PROJECTS_LIST: Project[] = [
  {
    id: 1,
    number: "PROJECT 01",
    title: "QATTS",
    category: "Cloud Automation Tool",
    description: "Cloud-based software testing and automation tool for web and mobile. Manages test cases, milestones, and real-time insights.",
    tags: ["Dashboard", "Automation", "SaaS"],
    image: "https://picsum.photos/seed/qatts/1200/800",
    caseStudySlug: "qatts",
    comingSoon: true,
  },
  {
    id: 2,
    number: "PROJECT 02",
    title: "CORTEX",
    category: "Car Insurance",
    description: "UK-based car insurance provider. Delivered UI/UX and front-end development for responsive, user-friendly insurance interfaces.",
    tags: ["UI/UX", "React", "FinTech"],
    image: "https://picsum.photos/seed/cortex/1200/800",
    caseStudySlug: "cortex",
    comingSoon: true,
  },
  {
    id: 3,
    number: "PROJECT 03",
    title: "AarowStream",
    category: "Supply Chain Tech",
    description: "Foodservice supply chain technology platform optimizing efficiency for restaurant operators, distributors, and manufacturers.",
    tags: ["Supply Chain", "Data", "Logistics"],
    image: "https://picsum.photos/seed/aarowstream/1200/800",
    comingSoon: true,
    caseStudySlug: "aarowstream",
  },
  {
    id: 4,
    number: "PROJECT 04",
    title: "GenieConvert",
    category: "File Conversion Tool",
    description: "Community-centric file conversion tool designed to simplify and improve user experience for file management.",
    tags: ["Angular", "Figma", "Web App"],
    image: "https://picsum.photos/seed/genieconvert/1200/800",
    comingSoon: true,
    caseStudySlug: "genieconvert",
  },
  {
    id: 5,
    number: "PROJECT 05",
    title: "ENVOY",
    category: "Enterprise Platform",
    description: "Enterprise platform for hiring and managing a global workforce, visa sponsorship, and immigration policy mobilization.",
    tags: ["Figma", "Angular", "Workforce"],
    image: "https://picsum.photos/seed/envoy/1200/800",
    caseStudySlug: "envoy",
    comingSoon: true,
  },
  {
    id: 6,
    number: "PROJECT 06",
    title: "e-Lovu",
    category: "Healthcare Support",
    description: "Real-time chat support platform for expectant mothers, providing immediate assistance from dedicated navigators.",
    tags: ["React", "Healthcare", "Mobile"],
    image: "https://picsum.photos/seed/elovu/1200/800",
    comingSoon: true,
    caseStudySlug: "elovu",
  },
  {
    id: 7,
    number: "PROJECT 07",
    title: "bdazlai",
    category: "Beauty Marketplace",
    description: "Beauty product showcase platform simplifying shopping by redirecting users to trusted platforms like Amazon and Nykaa.",
    tags: ["Angular", "Ionic", "E-commerce"],
    image: "https://picsum.photos/seed/bdazlai/1200/800",
    comingSoon: true,
    caseStudySlug: "bdazlai",
  },
];

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  qatts: {
    slug: "qatts",
    title: "QATTS Cloud Automation",
    subtitle: "Centralizing test automation, suite execution, and milestone tracking into a unified dashboard.",
    heroImage: "https://picsum.photos/seed/qatts/1200/800",
    role: "UI/UX Designer & React Developer",
    duration: "6 Months",
    team: "2 UI Designers, 5 Backend Engineers",
    tools: ["Figma", "React", "TypeScript", "Tailwind CSS"],
    overview: "QATTS is a cloud-based software testing automation suite built to manage automated web and mobile test cases, schedule milestone runs, and generate real-time execution telemetry.",
    challenge: "Test engineers and QA leads had to navigate through fractured tools to view test execution status, leading to missed regression alerts and slow debugging cycles.",
    solution: "Architected a unified dashboard featuring live websocket execution logs, visual pass/fail graphs, and one-click test case scheduling.",
    features: [
      "Real-time WebSockets Log Telemetry",
      "Milestone & Sprint Coverage Analytics",
      "Visual Test Step Builder",
      "Automated PDF & Slack Report Dispatch",
    ],
    results: [
      "Adopted by 12 internal & client QA teams",
      "Cut daily triage time by 40%",
      "Unified 5 disparate testing tools into 1 dashboard",
    ],
    learnings: "High-density data dashboards require strict visual hierarchy and subtle color-coding to prevent cognitive fatigue during extended monitoring.",
  },
  cortex: {
    slug: "cortex",
    title: "Cortex Car Insurance",
    subtitle: "Streamlining car insurance quotes & policy management for UK drivers with minimal cognitive load.",
    heroImage: "https://picsum.photos/seed/cortex/1200/800",
    role: "UI/UX Designer & Frontend Developer",
    duration: "4 Months",
    team: "Product Manager, 3 Developers, QA Lead",
    tools: ["Figma", "React", "Tailwind CSS", "TypeScript"],
    overview: "Cortex is a UK-based car insurance platform focused on delivering transparent, rapid policy quotes and intuitive claim management. The goal was to replace an outdated, multi-step portal with a streamlined digital experience.",
    challenge: "UK drivers faced high drop-off rates on conventional insurance forms due to repetitive inputs, complex jargon, and non-responsive mobile layouts. Over 45% of users abandoned quotes mid-way.",
    solution: "I designed and engineered a progressive disclosure quote flow with smart auto-filling, dynamic policy previews, and a responsive UI system built in React.",
    features: [
      "3-Step Progressive Quote Calculator",
      "Real-time Premium Adjuster Slider",
      "Instant Policy Document Generator",
      "Responsive Dark/Accent Theme System",
    ],
    results: [
      "Increased quote completion rate by 34%",
      "Reduced average time-to-quote from 8 minutes to 2.5 minutes",
      "Delivered a 100% component-driven design system in React",
    ],
    learnings: "Progressive disclosure paired with live inline validation significantly reduces form anxiety in complex financial products.",
  },
  envoy: {
    slug: "envoy",
    title: "Envoy Enterprise Workforce",
    subtitle: "Simplifying global visa sponsorship and immigration policy mobilization for enterprise HR teams.",
    heroImage: "https://picsum.photos/seed/envoy/1200/800",
    role: "UI/UX Designer",
    duration: "5 Months",
    team: "Designer, Product Manager, Legal Tech Team",
    tools: ["Figma", "Adobe XD", "Angular"],
    overview: "Envoy is an enterprise hiring platform facilitating visa sponsorship, legal mobilization, and cross-border workforce compliance.",
    challenge: "Managing international visas involves strict compliance deadlines and complex document workflows. Enterprise HR managers struggled with tracking status across hundreds of candidates.",
    solution: "Designed a candidate tracking kanban board with automated compliance alerts, document upload vaults, and real-time attorney messaging.",
    features: [
      "Candidate Visa Stage Kanban",
      "Secure Legal Document Vault",
      "Automated Expiration Alert Triggers",
      "Attorney Chat & Consultation Booking",
    ],
    results: [
      "Reduced legal document submission errors by 50%",
      "Accelerated candidate onboarding time by 3 weeks",
    ],
    learnings: "Designing for compliance requires clear status indicators and upfront confirmation steps to ensure zero user error.",
  },
};
