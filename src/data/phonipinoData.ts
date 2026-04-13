export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  text: string;
  icon: string;
};

export type HighlightItem = {
  stat: string;
  text: string;
  icon: string;
};

export type ProcessStep = {
  title: string;
  text: string;
};

export type FaqItem = {
  q: string;
  a: string;
  keywords?: string[];
};

export type ShowcaseItem = {
  title: string;
  text: string;
  image: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Culture", href: "#culture" },
  { label: "Leadership", href: "#leadership" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
{ label: "Careers", href: "#careers" },
  { label: "FAQ Bot", href: "#faq-bot" },
  { label: "Contact", href: "#contact" },
];

export const services: ServiceItem[] = [
  {
    icon: "📞",
    title: "Sales Outsourcing",
    text: "Dedicated sales teams built to improve conversion, strengthen outreach, and support revenue growth.",
  },
  {
    icon: "🎯",
    title: "Lead Generation",
    text: "Structured prospecting, appointment setting, and pipeline support tailored for business expansion.",
  },
  {
    icon: "🎧",
    title: "Customer Support",
    text: "24/7 customer assistance across channels designed to improve retention and service experience.",
  },
  {
    icon: "🗂️",
    title: "Back Office Support",
    text: "Reliable admin and operational support that keeps workflows efficient behind the scenes.",
  },
  {
    icon: "📊",
    title: "Performance Reporting",
    text: "Clear visibility into KPIs, service metrics, and growth opportunities through structured reporting.",
  },
  {
    icon: "🤝",
    title: "Dedicated Team Solutions",
    text: "Flexible support models for startups, SMEs, and enterprise-level organizations.",
  },
];

export const highlights: HighlightItem[] = [
  {
    icon: "👥",
    stat: "Expert Agents",
    text: "Teams trained for sales, support, lead generation, and business process operations.",
  },
  {
    icon: "🕒",
    stat: "24/7 Service",
    text: "Round-the-clock support for clients operating across different time zones.",
  },
  {
    icon: "🌏",
    stat: "PH + US Presence",
    text: "Positioned as a registered company in both the United States and the Philippines.",
  },
  {
    icon: "🛡️",
    stat: "Reliable Delivery",
    text: "Built around structure, professionalism, and long-term client partnerships.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    text: "We understand your goals, team needs, customer requirements, and growth priorities.",
  },
  {
    title: "Solution Design",
    text: "We define the right staffing model, service workflow, and communication process.",
  },
  {
    title: "Deployment",
    text: "We align people, tools, and processes to launch smoothly and professionally.",
  },
  {
    title: "Optimization",
    text: "We improve delivery over time using feedback, reporting, and performance insights.",
  },
];

export const faqs: FaqItem[] = [
  {
    q: "What services does Phonipino Corp. offer?",
    a: "Phonipino Corp. offers sales outsourcing, lead generation, customer support, back-office support, performance reporting, and dedicated team solutions for growing businesses.",
    keywords: [
      "services",
      "offer",
      "outsourcing",
      "sales",
      "lead generation",
      "customer support",
      "back office",
      "reporting",
      "dedicated team",
    ],
  },
  {
    q: "Do you offer 24/7 support?",
    a: "Yes. The website presents Phonipino Corp. as a 24/7 outsourcing and support partner for businesses that need dependable coverage across time zones.",
    keywords: ["24/7", "support hours", "round the clock", "all day", "always open"],
  },
  {
    q: "Where is Phonipino Corp. located?",
    a: "The office listed on the site is in the HCL building on Kauswagan National Highway, beside Savemore, Cagayan de Oro, Philippines.",
    keywords: ["location", "address", "office", "cagayan de oro", "kauswagan", "savemore"],
  },
  {
    q: "Where is Phonipino Corp. registered?",
    a: "This website states that Phonipino Corp. is registered in both the United States and the Philippines.",
    keywords: [
      "registered",
      "registration",
      "legal",
      "united states",
      "us",
      "philippines",
      "sec",
      "bir",
      "dti",
      "lgu",
    ],
  },
  {
    q: "Can your services scale as my company grows?",
    a: "Yes. Phonipino Corp. presents flexible team solutions for startups, SMEs, and enterprise clients, so support can grow with changing demand.",
    keywords: ["scale", "scalable", "grow", "startup", "sme", "enterprise", "expand"],
  },
  {
    q: "Do you provide dedicated teams or agents?",
    a: "Yes. The site highlights dedicated team solutions and staffing models designed around each client's goals, workflow, and communication process.",
    keywords: ["dedicated", "agents", "team", "staffing", "custom team", "outsourcing team"],
  },
  {
    q: "What kind of businesses can work with Phonipino Corp.?",
    a: "The company presents its services for startups, SMEs, and enterprise-level organizations that need sales, support, lead generation, or back-office help.",
    keywords: ["businesses", "clients", "industries", "startup", "sme", "enterprise"],
  },
  {
    q: "How do you launch a new client program?",
    a: "The process shown on the site starts with discovery, then solution design, deployment, and ongoing optimization so teams can launch in a structured way.",
    keywords: ["start", "launch", "onboarding", "deployment", "how it works", "process"],
  },
  {
    q: "Do you provide reporting and performance visibility?",
    a: "Yes. Performance reporting is one of the listed services, and the site highlights clear KPI visibility, service metrics, and growth insights.",
    keywords: ["reporting", "kpi", "metrics", "performance", "visibility", "reports"],
  },
  {
    q: "What support channels do you help with?",
    a: "The website describes customer assistance across channels and positions the company as a partner for customer-facing and operational support work.",
    keywords: [
      "channels",
      "multichannel",
      "customer service",
      "support channel",
      "customer assistance",
    ],
  },
  {
    q: "How can I apply for work?",
    a: "You can apply through the careers page by using the application buttons and emailing the recruitment team with your resume or CV.",
    keywords: ["apply", "career", "job", "hiring", "recruitment", "vacancy"],
  },
  {
    q: "What should I send when I apply?",
    a: "Applicants are asked to send a resume or CV in PDF format and include their full name, desired position, and contact number in the email.",
    keywords: ["resume", "cv", "pdf", "requirements", "what to send", "application requirements"],
  },
  {
    q: "Are your jobs on-site?",
    a: "The careers listings shown on the site describe the current openings as full-time and on-site roles.",
    keywords: ["on-site", "onsite", "office-based", "work arrangement", "remote"],
  },
  {
    q: "How can I contact Phonipino Corp.?",
    a: "You can use the contact page form, email admin@phonipinocorp.com, call (088) 565 3995, or visit the office in Cagayan de Oro.",
    keywords: ["contact", "email", "phone", "call", "reach", "inquiry", "admin"],
  },
  {
    q: "What makes Phonipino Corp. different?",
    a: "The site emphasizes competitive rates, trained agents, 24/7 coverage, scalable teams, a polished client-facing brand, and registered presence in both the US and the Philippines.",
    keywords: ["different", "why choose", "advantage", "benefit", "best", "why phonipino"],
  },
];

export const showcaseItems: ShowcaseItem[] = [
  {
    title: "Team Building",
    text: "Moments that reflect collaboration, energy, and unity across the organization.",
    image: "/team-building.jpg",
  },
  {
    title: "Community Donations",
    text: "A visible commitment to giving back and supporting meaningful causes.",
    image: "/donation.jpg",
  },
  {
    title: "Best Employee of the Week",
    text: "Recognizing short-term excellence, consistency, and contribution.",
    image: "/employee-week.jpg",
  },
  {
    title: "Best Employee of the Month",
    text: "Celebrating long-term impact, leadership, and standout performance.",
    image: "/employee-month.jpg",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "JOR-EL INSO",
    role: "CHIEF OPERATIONS OFFICER",
    image: "/board-1.jpg",
  },
  {
    name: "MARILYN ORBE INSO",
    role: "CHIEF EXECUTIVE OFFICER",
    image: "/board-2.jpg",
  },
  {
    name: "JULIELYN ORBE",
    role: "HUMAN RESOURCE OFFICER",
    image: "/board-3.jpg",
  },
  {
    name: "ATTY. KAREN SEMILLANO",
    role: "CHIEF MARKETING OFFICER",
    image: "/board-4.jpg",
  },
    {
    name: "ATTY. MIPPS SEMILLANO",
    role: "CHIEF FINANCE OFFICER",
    image: "/board-5.jpg",
  },
];
