export type NavItem = {
  label: string;
  path: string;
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

export type RegistrationItem = {
  title: string;
  text: string;
  image: string;
};

export type CompanyReview = {
  category: string;
  title: string;
  rating: number;
  text: string;
  impact: string;
};

export type ImpactItem = {
  stat: string;
  title: string;
  text: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export type CareerRole = {
  title: string;
  subtitle: string;
  openings: string;
  meta: string[];
  requirements: string[];
  mailto: string;
};

export type OfficeGalleryPhoto = {
  src: string;
  alt: string;
  label: string;
  expectedFile?: string;
};

export type OfficeGallerySpace = {
  slug: string;
  title: string;
  description: string;
  photos: OfficeGalleryPhoto[];
};

export type SocialPlatformIcon =
  | "facebook"
  | "instagram"
  | "x"
  | "tiktok"
  // | "youtube"
  | "linkedin";

export type SocialPlatform = {
  label: string;
  icon: SocialPlatformIcon;
  description: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Reviews", path: "/reviews" },
  { label: "Culture", path: "/culture" },
  { label: "Leadership", path: "/leadership" },
  { label: "Why Us", path: "/why-us" },
  { label: "Process", path: "/process" },
  { label: "Careers", path: "/careers" },
  { label: "Office Tour", path: "/office-tour" },
  { label: "Contact", path: "/contact" },
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

export const registrationItems: RegistrationItem[] = [
  {
    title: "Cagayan de Oro City ",
    text: "Local government registration supporting Phonipino Corp.'s business presence in Cagayan de Oro City.",
    image: "/lgu.jpg",
  },
  {
    title: "DTI Philippines",
    text: "Department of Trade and Industry registration reflecting compliance with Philippine business registration requirements.",
    image: "/dti.jpg",
  },
  {
    title: "BIR Philippines",
    text: "Bureau of Internal Revenue registration documenting tax compliance and official business registration details.",
    image: "/bir.jpg",
  },
  {
    title: "SEC Philippines",
    text: "Securities and Exchange Commission registration establishing the company's corporate registration in the Philippines.",
    image: "/sec.jpg",
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

export const companyReviews: CompanyReview[] = [
  {
    category: "Client experience",
    title: "Responsive customer support",
    rating: 4.5,
    text: "Clients can expect prompt communication, steady follow-through, and support coverage that helps reduce delays in customer-facing work.",
    impact: "Stronger day-to-day customer trust",
  },
  {
    category: "Sales operations",
    title: "Reliable outreach execution",
    rating: 4.8,
    text: "Sales support efforts are presented as organized and consistent, helping teams keep campaigns moving without losing momentum.",
    impact: "More dependable revenue support",
  },
  {
    category: "Lead generation",
    title: "Consistent prospect handling",
    rating: 4.7,
    text: "Lead generation workflows are positioned to stay structured, giving businesses clearer follow-up and better pipeline discipline.",
    impact: "Healthier sales pipeline flow",
  },
  {
    category: "Reporting",
    title: "Clear performance visibility",
    rating: 4.5,
    text: "Managers benefit from reporting that keeps quality, targets, and service performance easier to track and improve over time.",
    impact: "Better decision-making clarity",
  },
  {
    category: "Scalability",
    title: "Flexible team expansion",
    rating: 4.3,
    text: "The delivery model is framed around scaling with client demand, which helps growing companies avoid service bottlenecks.",
    impact: "Smoother growth readiness",
  },
  {
    category: "Professionalism",
    title: "Polished client-facing support",
    rating: 4.6,
    text: "A strong outsourcing partner needs professionalism at every touchpoint, and PHONIPINO CORP. is positioned around that expectation.",
    impact: "Improved brand perception",
  },
  {
    category: "Training",
    title: "Operational readiness",
    rating: 4.7,
    text: "Training and onboarding support help teams get into production with more confidence and fewer avoidable handoff issues.",
    impact: "Faster launch confidence",
  },
  {
    category: "Coverage",
    title: "24/7 support mindset",
    rating: 4.8,
    text: "Round-the-clock availability gives clients more room to serve different time zones and urgent operational needs.",
    impact: "Wider service-hour coverage",
  },
  {
    category: "Partnership value",
    title: "Competitive service value",
    rating: 4.7,
    text: "Businesses looking for cost-aware support can benefit from a model that balances affordability with operational structure.",
    impact: "Better cost-to-service balance",
  },
  {
    category: "Long-term fit",
    title: "Stable outsourcing partnership",
    rating: 4.0,
    text: "The overall company story emphasizes long-term support relationships rather than one-off transactions, which is valuable for retention-minded clients.",
    impact: "More durable client relationships",
  },
];

export const impactItems: ImpactItem[] = [
  {
    stat: "24/7 support",
    title: "PHONIPINO CORP. helps clients stay available when their customers need them.",
    text: "Always-on support coverage can reduce response gaps, protect customer experience, and give businesses more confidence in time-sensitive operations.",
  },
  {
    stat: "Scalable teams",
    title: "The company gives growing businesses a practical way to expand capacity.",
    text: "Sales, support, and back-office teams can be extended without forcing clients to build every role internally from scratch.",
  },
  {
    stat: "Local jobs",
    title: "PHONIPINO CORP. creates work opportunities and skills growth in its community.",
    text: "Hiring, training, and leadership development contribute to stronger career pathways for people in and around Cagayan de Oro.",
  },
  {
    stat: "Stronger brands",
    title: "Professional service delivery strengthens the reputation of the companies it supports.",
    text: "When customer conversations are handled well, businesses protect loyalty, improve retention, and build a more credible market presence.",
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
    a: "Use the careers page and email the recruitment team directly through the application buttons.",
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
    {
    name: "PAUL OSALLA",
    role: "TRAINOR SUPERVISOR",
    image: "/board-6.jpg",
  },
];

export const whyUsPoints: string[] = [
  "Competitive outsourcing rates with quality-focused delivery.",
  "Expert agents for sales, support, and lead generation operations.",
  "A business image that feels polished and enterprise-ready.",
  "24/7 coverage for time-sensitive and international needs.",
  "Flexible team scaling as campaigns and client requirements grow.",
  "Registered presence in both the United States and the Philippines.",
];

export const recruitmentEmail = "ragheil123@gmail.com";
export const publicContactEmail = "admin@phonipinocorp.com";
export const publicContactPhone = "(088) 565 3995";
export const officeAddress =
  "3rd Floor, HCL Bldg., Kauswagan National Highway (beside Savemore), Cagayan de Oro, Philippines, 9000";
export const officeMapLink =
  "https://www.google.com/maps/place//data=!4m2!3m1!1s0x32fff2da22d937e1:0x182c4708b178b509?entry=s&sa=X&ved=2ahUKEwi_0efZiu-RAxUhafUHHeFKKQkQ4kB6BAgWEAA&hl=en";
export const officeMapEmbedUrl =
  "https://www.google.com/maps?q=8.489673,124.638214&z=16&output=embed";

export const officeGallerySpaces: OfficeGallerySpace[] = [
  {
    slug: "office-front",
    title: "Office Front",
    description:
      "The building exterior gives visitors and applicants a clear first impression before they enter the workspace.",
    photos: [
      {
        src: "/building-front.jpg",
        alt: "Phonipino office front exterior",
        label: "Front View 01",
      },
      {
        src: "/building-front-2.jpg",
        alt: "Second exterior view of the Phonipino office",
        label: "Front View 02",
        expectedFile: "public/building-front-2.jpg",
      },
    ],
  },
  {
    slug: "lobby",
    title: "Lobby",
    description:
      "Use this view to introduce the reception space and the first in-person touchpoint for guests and candidates.",
    photos: [
      {
        src: "/lobby.jpg",
        alt: "Phonipino lobby area",
        label: "Lobby View",
        expectedFile: "public/lobby.jpg",
      },
    ],
  },
  {
    slug: "training-room",
    title: "Training Room",
    description:
      "This room can highlight onboarding, upskilling, and the company commitment to operational readiness.",
    photos: [
      {
        src: "/training-room.jpg",
        alt: "Phonipino training room",
        label: "Training Room",
        expectedFile: "public/training-room.jpg",
      },
    ],
  },
  {
    slug: "board-office",
    title: "Board Office",
    description:
      "A dedicated board room or executive office helps reinforce leadership visibility and decision-making presence.",
    photos: [
      {
        src: "/board-office.jpg",
        alt: "Board of directors office at Phonipino",
        label: "Board Office",
        expectedFile: "public/board-office.jpg",
      },
    ],
  },
  {
    slug: "production-floor",
    title: "Production Floor",
    description:
      "This view is ideal for showing the operating floor, team scale, and live service environment.",
    photos: [
      {
        src: "/production-floor.jpg",
        alt: "Phonipino production floor",
        label: "Production Floor",
        expectedFile: "public/production-floor.jpg",
      },
    ],
  },
  {
    slug: "break-room",
    title: "Break Room",
    description:
      "The break room can add warmth to the brand by showing the space where the team pauses, resets, and connects.",
    photos: [
      {
        src: "/break-room.jpg",
        alt: "Phonipino break room",
        label: "Break Room",
        expectedFile: "public/break-room.jpg",
      },
    ],
  },
];

export const officeFrontPhotos: OfficeGalleryPhoto[] =
  officeGallerySpaces[0]?.photos ?? [];

export const socialPlatforms: SocialPlatform[] = [
  {
    label: "Facebook",
    icon: "facebook",
    description: "Announcements, highlights, and company updates.",
    href: "https://www.facebook.com/phonipinocorp",
  },
  {
    label: "Instagram",
    icon: "instagram",
    description: "Workplace moments, events, and visual stories.",
    href: "https://www.instagram.com/",
  },
  {
    label: "X",
    icon: "x",
    description: "Quick updates, notices, and short-form posts.",
    href: "https://x.com/",
  },
  {
    label: "TikTok",
    icon: "tiktok",
    description: "Short videos featuring the team and office culture.",
    href: "https://www.tiktok.com/",
  },
  // {
  //   label: "YouTube",
  //   icon: "youtube",
  //   description: "Long-form videos, tours, and featured company content.",
  //   href: "https://www.youtube.com/",
  // },
  {
    label: "LinkedIn",
    icon: "linkedin",
    description: "Professional updates, hiring posts, and company news.",
    href: "https://www.linkedin.com/in/phonipino-corp-444255233/",
  },
];

export const careerRoles: CareerRole[] = [
  {
    title: "Call Center Officers",
    subtitle:
      "Sales, support, and outreach roles for fast-growing operations.",
    openings: "30 positions left",
    meta: ["Full-time", "On-site", "Entry to Mid Level"],
    requirements: [
      "Strong communication skills",
      "Customer-facing confidence",
      "Sales or support experience is a plus",
      "Willingness to work shifting schedules if needed",
    ],
    mailto:
      "mailto:ragheil123@gmail.com?subject=Application%20for%20Agent%20Position&body=Full%20Name%3A%0D%0ADesired%20Position%3A%20Agent%0D%0AContact%20Number%3A%0D%0A%0D%0APlease%20attach%20your%20resume%20or%20CV%20in%20PDF%20format%20only.",
  },
  {
    title: "IT Staff",
    subtitle:
      "Hiring IT personnel for technical support, system maintenance, and network operations.",
    openings: "5 positions left",
    meta: ["Full-time", "On-site", "Entry to Mid Level"],
    requirements: [
      "Basic troubleshooting skills",
      "Proven IT experience",
      "Basic networking knowledge",
      "Familiarity with common software and hardware troubleshooting",
    ],
    mailto:
      "mailto:ragheil123@gmail.com?subject=Application%20for%20IT%20Staff%20Position&body=Full%20Name%3A%0D%0ADesired%20Position%3A%20IT%20Staff%0D%0AContact%20Number%3A%0D%0A%0D%0APlease%20attach%20your%20resume%20or%20CV%20in%20PDF%20format%20only.",
  },
  {
    title: "Team Leaders",
    subtitle:
      "Leadership roles focused on coaching, performance, and team guidance.",
    openings: "3 positions left",
    meta: ["Full-time", "Leadership Role", "Operations / Sales / Support"],
    requirements: [
      "Leadership or supervisory experience preferred",
      "Ability to coach and motivate teams",
      "Strong reporting and communication skills",
      "Can help drive accountability and performance",
    ],
    mailto:
      "mailto:ragheil123@gmail.com?subject=Application%20for%20Team%20Leader%20Position&body=Full%20Name%3A%0D%0ADesired%20Position%3A%20Team%20Leader%0D%0AContact%20Number%3A%0D%0A%0D%0APlease%20attach%20your%20resume%20or%20CV%20in%20PDF%20format%20only.",
  },
];
