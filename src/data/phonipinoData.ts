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
    q: "What does Phonipino Corp. specialize in?",
    a: "Phonipino Corp. specializes in sales outsourcing, lead generation, customer support, and related business process solutions.",
  },
  {
    q: "Do you offer 24/7 support?",
    a: "Yes. The company positions itself as a 24/7 outsourcing and support partner for growing businesses.",
  },
  {
    q: "Where is Phonipino Corp. registered?",
    a: "This website states that Phonipino Corp. is registered in both the United States and the Philippines.",
  },
  {
    q: "Can your services scale as a company grows?",
    a: "Yes. The site presents flexible and scalable team solutions for startups, SMEs, and enterprise clients.",
  },
  {
    q: "How can I apply for work?",
    a: "Use the hiring section and email the recruitment team directly through the application button.",
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
    name: "Core Member 01",
    role: "Operations Leadership",
    image: "/core-team1.jpg",
  },
  {
    name: "Core Member 02",
    role: "Client Success",
    image: "/core-team.jpg",
  },
  {
    name: "Core Member 03",
    role: "Training & Quality",
    image: "/core-team.jpg",
  },
  {
    name: "Core Member 04",
    role: "Growth & Recruitment",
    image: "/core-team.jpg",
  },
];