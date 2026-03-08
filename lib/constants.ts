import {
  TrendingUp,
  Zap,
  Clock,
  Shield,
  BarChart3,
  Users,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "AltFounders",
  tagline: "AI agents that scale your business",
  description:
    "AltFounders helps founders and operators design, build, and deploy custom AI agents that automate outreach, operations, and customer communication.",
  email: "hello@altfounders.com",
  bookingUrl: "#book-call",
};

export const navItems = [
  { href: "#why", label: "Challenges" },
  { href: "#solutions", label: "Solutions" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
];

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: Zap,
    title: "Lightning-Fast Deployment",
    description:
      "Go from discovery to live AI agent in under 30 days with our proven build process.",
  },
  {
    icon: Clock,
    title: "60+ Hours Saved Monthly",
    description:
      "Automate repetitive outreach, qualification, and follow-up tasks your team handles manually.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Reliability",
    description:
      "Built with redundancy and monitoring so your agents run 24/7 without missing a beat.",
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    description:
      "Track pipeline impact, response rates, and hours saved with built-in analytics dashboards.",
  },
  {
    icon: Users,
    title: "Custom to Your Workflows",
    description:
      "Every agent is designed around your tools, data, and processes — no cookie-cutter templates.",
  },
  {
    icon: TrendingUp,
    title: "Scales With You",
    description:
      "Start with one agent, expand across sales, support, and ops as your business grows.",
  },
];

export const stats = [
  { value: "30-Day", label: "Average Deploy Time" },
  { value: "24/7", label: "Agent Uptime" },
  { value: "60+", label: "Hours Saved / Month" },
];

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We audit your workflows, tools, and goals to identify the highest-impact automation opportunities.",
  },
  {
    step: 2,
    title: "Build",
    description:
      "Our team designs and develops a custom AI agent integrated with your existing stack.",
  },
  {
    step: 3,
    title: "Deploy & Optimize",
    description:
      "We launch your agent, monitor performance, and iterate to maximize results over time.",
  },
];

export interface Solution {
  tag: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
}

export const solutions: Solution[] = [
  {
    tag: "Path 1",
    title: "Pre-Built AI Agents",
    description:
      "Pre-built, tested, and ready to plug into your business today. Each agent is designed to solve a specific founder problem — no setup calls, no waiting. Subscribe, deploy, and let it run.",
    features: [
      "Ready to deploy immediately",
      "Solves specific founder problems",
      "No setup calls or waiting",
      "Subscribe and let it run",
    ],
    cta: "Book a Strategy Call",
    ctaHref: "#book-call",
  },
  {
    tag: "Path 2",
    title: "Custom AI Systems",
    description:
      "No templates. No generic setups. We map your workflows, design your AI infrastructure, and deploy a system built specifically for how your business operates — live in 14 days, fully owned by you.",
    features: [
      "Mapped to your exact workflows",
      "Custom-designed AI infrastructure",
      "Live in 14 days",
      "Fully owned by you",
    ],
    cta: "Book a Strategy Call",
    ctaHref: "#book-call",
    highlighted: true,
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  stat: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "AltFounders built us a sales agent that handles lead research and outreach end-to-end. We booked 3x more demos in the first month.",
    author: "Sarah Chen",
    role: "Head of Growth",
    company: "ScaleStack",
    stat: "3x more demos booked",
  },
  {
    quote:
      "Our voice agent handles 200+ inbound calls per week without missing a single one. It's like having a team that never sleeps.",
    author: "Marcus Rivera",
    role: "COO",
    company: "BrightPath Services",
    stat: "200+ calls handled weekly",
  },
  {
    quote:
      "The chat agent they built integrates perfectly with our CRM. Our support response time dropped from hours to seconds.",
    author: "Priya Patel",
    role: "VP of Customer Success",
    company: "Nuvora",
    stat: "Response time: hours to seconds",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What exactly is a custom AI agent?",
    answer:
      "It's a system designed around your workflows, data, and tools that can take action on your behalf — research, write, respond, and update systems automatically.",
  },
  {
    question: "How fast can we launch?",
    answer:
      "Most deployments go live in under 30 days, including discovery, design, and testing phases.",
  },
  {
    question: "Do we need to be technical to use it?",
    answer:
      "No. We handle the engineering and integrations. Your team interacts with simple workflows and dashboards tailored to your processes.",
  },
  {
    question: "What tools and platforms do you integrate with?",
    answer:
      "We integrate with all major CRMs (Salesforce, HubSpot), communication tools (Slack, Teams), email platforms, calendars, and custom APIs. If your tool has an API, we can connect it.",
  },
  {
    question: "How is this different from off-the-shelf AI tools?",
    answer:
      "Off-the-shelf tools are generic. Our agents are built specifically for your workflows, trained on your data, and integrated into your existing stack — so they actually work the way your team does.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Pricing depends on the scope and complexity of your agent. We start with a free strategy call to understand your needs, then provide a transparent quote. Most projects start in the low five figures.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Every engagement includes a monitoring and optimization period post-launch. We also offer ongoing support plans for teams that want continuous improvements.",
  },
  {
    question: "Can I start with one agent and add more later?",
    answer:
      "Absolutely. Most clients start with a single high-impact agent and expand as they see results. Our architecture is designed to scale with your business.",
  },
];

export const logoCompanies = [
  "ScaleStack",
  "BrightPath",
  "Nuvora",
  "FlowOps",
  "Meridian AI",
  "Catalyst",
  "NexGen",
  "Aether Labs",
];
