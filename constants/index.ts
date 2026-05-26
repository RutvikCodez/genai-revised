import {
  Award,
  Brain,
  MessageSquare,
  Target,
  TrendingUp,
  Zap,
  X,
  Mail,
} from "lucide-react";

export const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#testimonials", label: "Testimonials" },
];

export const trustedCompanies = [
  "Google",
  "Amazon",
  "Microsoft",
  "Meta",
  "Apple",
];

export const statsData = [
  {
    end: 10,
    suffix: "K+",
    label: "Interview Questions",
    color: "text-cyan-400",
  },
  {
    end: 50,
    suffix: "K+",
    label: "Users Prepared",
    color: "text-blue-400",
  },
  {
    end: 95,
    suffix: "%",
    label: "Success Rate",
    color: "text-amber-400",
  },
];

export const features = [
  {
    Icon: Brain,
    title: "AI-Powered Feedback",
    description:
      "Get instant, detailed feedback on your answers powered by advanced machine learning",
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    Icon: Zap,
    title: "Real-Time Analysis",
    description:
      "Analyze your communication patterns, confidence, and technical accuracy in real-time",
    gradient: "from-blue-400 to-cyan-600",
  },
  {
    Icon: Target,
    title: "Personalized Coaching",
    description:
      "Get customized interview strategies based on your skills and target roles",
    gradient: "from-cyan-400 to-emerald-600",
  },
  {
    Icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Monitor your improvement with detailed analytics and performance metrics",
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    Icon: Award,
    title: "Interview Library",
    description:
      "Access 10,000+ practice questions across all major tech companies",
    gradient: "from-amber-400 to-orange-600",
  },
  {
    Icon: MessageSquare,
    title: "Resume Builder",
    description:
      "Create an ATS-optimized resume with AI suggestions and real-time feedback",
    gradient: "from-orange-400 to-red-600",
  },
];

export const testimonials = [
  {
    quote:
      "I used InterviewIQ to prepare for my Google interview and the AI feedback was incredibly helpful. I got the job!",
    author: "Sarah Chen",
    role: "Software Engineer",
    company: "Google",
    rating: 5,
  },
  {
    quote:
      "The real-time feedback on my communication skills made all the difference. Highly recommend this tool!",
    author: "James Rodriguez",
    role: "Product Manager",
    company: "Meta",
    rating: 5,
  },
  {
    quote:
      "InterviewIQ's resume builder helped me land 3 interviews at FAANG companies. Best investment!",
    author: "Priya Patel",
    role: "Data Scientist",
    company: "Amazon",
    rating: 5,
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for beginners",
    features: [
      "Unlimited practice interviews",
      "1,000 interview questions",
      "Basic AI feedback",
      "Progress tracking",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "79",
    description: "Most popular plan",
    features: [
      "Everything in Starter",
      "10,000+ interview questions",
      "Advanced AI feedback",
      "Resume builder",
      "Personalized coaching",
      "Priority support",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and organizations",
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Custom training programs",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 priority support",
    ],
    cta: "Contact Sales",
  },
];

export const faqData = [
  {
    question: "How accurate is the AI feedback?",
    answer:
      "Our AI is trained on thousands of successful interviews and provides feedback comparable to professional coaches.",
  },
  {
    question: "Can I use it for non-tech interviews?",
    answer:
      "Yes! InterviewIQ supports interview prep for any industry including consulting, finance, sales, and more.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, you get 7 days free trial with full access to all premium features.",
  },
  {
    question: "How often should I practice?",
    answer:
      "We recommend 3-4 practice interviews per week for optimal improvement.",
  },
];

export const socialLinks = [
  { Icon: X, href: "#", label: "Twitter" },
  { Icon: Mail, href: "#", label: "Email" },
];

export const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Templates', href: '/templates' },
      { label: 'FAQ', href: '#faq' },
    ],
    Company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    Legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Security', href: '#' },
    ],
  }

  export const footerTextLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
];