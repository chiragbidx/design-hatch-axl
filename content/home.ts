// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// (Type definitions unchanged...)

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "CRM", // Brand switch
    badgeOuter: "Welcome to DealNest",
    titleBefore: "The Smart CRM for",
    titleHighlight: "Growing Teams",
    titleAfter: "",
    subtitle:
      "DealNest helps you organize contacts, manage deals, and keep your sales pipeline moving—all in one place.",
    primaryCta: { label: "Get Started Free", href: "/auth#signup" },
    secondaryCta: { label: "Book a Demo", href: "#contact" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "DealNest dashboard preview",
  },

  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // DealNest Value Propositions
  benefits: {
    eyebrow: "Why DealNest",
    heading: "A smarter CRM for your growing team",
    description:
      "DealNest centralizes contacts, manages deals, and accelerates sales—all from one simple, secure dashboard.",
    items: [
      {
        icon: "UserPlus",
        title: "All Your Contacts in One Place",
        description: "Centralize your leads and clients for effortless access and collaboration.",
      },
      {
        icon: "LineChart",
        title: "Pipeline at a Glance",
        description: "Track deals, monitor progress, and focus on what matters most to your business.",
      },
      {
        icon: "ShieldCheck",
        title: "Fast, Secure, and Reliable",
        description: "Built for teams that value simplicity, privacy, and speed.",
      },
    ],
  },

  // Use features unchanged for now (could update later)
  features: {
    eyebrow: "Features",
    heading: "What makes DealNest different",
    subtitle:
      "Focus your team on moving deals forward, not fighting clunky tools. DealNest puts usability and visibility at the core.",
    items: [
      { icon: "Users", title: "Team Collaboration", description: "Invite your teammates and work together to close more deals." },
      { icon: "BookOpen", title: "Unified Contact Database", description: "All your contacts and organizations organized in one place." },
      { icon: "KanbanSquare", title: "Deal Pipeline Tracking", description: "Visualize every deal's stage and never lose track." },
      { icon: "Activity", title: "Activity Logging", description: "Track calls, meetings, and updates for each contact and deal." },
      { icon: "Search", title: "Instant Filtering & Search", description: "Find what you need fast so you can take action quickly." },
      { icon: "Rocket", title: "Secure Cloud Platform", description: "Your CRM data is private, fast, and always available." }
    ],
  },

  // Services section can remain as a placeholder for now, re-word slightly
  services: {
    eyebrow: "Services",
    heading: "Sales workflow essentials",
    subtitle:
      "DealNest is built for sales teams who want to spend less time on admin and more time closing.",
    items: [
      { title: "Contacts & Organization Management", description: "Add, update, and group prospects and clients easily.", pro: false },
      { title: "Pipeline & Deal Tracking", description: "Track opportunities and progress at a glance.", pro: false },
      { title: "Roles & Team Collaboration", description: "Assign teams to organizations and deals securely.", pro: false },
      { title: "Activity Logging Timeline", description: "See all important sales activities in one place.", pro: true },
    ],
  },

  testimonials: {
    eyebrow: "Testimonials",
    heading: "Teams accelerating with DealNest",
    reviews: [
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "Sales Manager, FinchFlow", comment: "DealNest made our sales process transparent and our onboarding a breeze! The pipeline board is a true game changer.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Maya Patel", role: "Product Lead, OrbitDesk", comment: "We brought our contact base under control immediately and our team collaborates way faster.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Nikhil Rao", role: "Operations, TeamForge", comment: "Simple, fast, and no training required—DealNest fits our scale perfectly.", rating: 4.9 },
    ],
  },

  team: {
    eyebrow: "Team",
    heading: "Meet the DealNest Team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product Architect"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Elizabeth",
        lastName: "Moore",
        positions: ["Product Designer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
        ],
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "Simple Pricing",
    subtitle: "Start free, scale when ready. No sales calls, no lengthy demos.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: true,
        price: 0,
        description: "Organize contacts and manage your sales pipeline with no friction.",
        buttonText: "Get Started Free",
        benefits: ["Unlimited contacts", "Basic pipeline", "Self-service onboarding", "Email support"],
      },
      {
        title: "Growth",
        popular: false,
        price: 39,
        description: "For teams ready to accelerate their sales process.",
        buttonText: "Start Growing",
        benefits: ["Team roles", "Advanced pipelines", "Reporting dashboards", "Priority support"],
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Get in touch with DealNest",
    description:
      "Want a demo or have questions? Let us know how DealNest can help your team’s sales workflow.",
    mailtoAddress: "hi@chirag.co",
    info: {
      address: { label: "Find us", value: "Remote-first • India" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "hi@chirag.co" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 7PM IST"] },
    },
    formSubjects: ["Demo Request", "Pricing", "Integration", "Other"],
    formSubmitLabel: "Send message",
  },

  faq: {
    eyebrow: "FAQ",
    heading: "DealNest, explained",
    items: [
      { question: "Is DealNest free to start?", answer: "Yes. You can start with unlimited contacts and no time limit." },
      { question: "Can I manage both contacts and organizations?", answer: "Absolutely! Link contacts and companies for a complete sales view." },
      { question: "Does DealNest offer deal tracking?", answer: "Yes, you get a board view for all pipeline stages." },
      { question: "Where is my data stored?", answer: "All your CRM data is securely hosted in the cloud." },
    ],
  },

  footer: {
    brandName: "DealNest",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "hi@chirag.co", href: "mailto:hi@chirag.co" }
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "X", href: "https://x.com" },
        ],
      },
    ],
    copyright: "© 2026 DealNest CRM. All rights reserved.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  navbar: {
    brandName: "DealNest",
    routes: [
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "DealNest preview" },
    features: [
      { title: "Contacts & Orgs", description: "Manage people and organizations in one place." },
      { title: "Deal Pipeline", description: "Track every deal from lead to close with ease." },
      { title: "Dashboard Board", description: "See everything that matters in a single view." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}