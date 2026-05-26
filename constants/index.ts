import { Award, Brain, MessageSquare, Target, TrendingUp, Zap } from "lucide-react";

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
