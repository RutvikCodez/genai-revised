import { ChartConfig } from "@/components/ui/chart";
import {
  Award,
  Brain,
  MessageSquare,
  Target,
  TrendingUp,
  Zap,
  X,
  Mail,
  BriefcaseBusiness,
  Building2,
  MapPin,
} from "lucide-react";
import z from "zod";

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
      "I used Hirzo to prepare for my Google interview and the AI feedback was incredibly helpful. I got the job!",
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
      "Hirzo's resume builder helped me land 3 interviews at FAANG companies. Best investment!",
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
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Templates", href: "/templates" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export const footerTextLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
];

export const shortFeatures = [
  "No Credit Card Required",
  "AI-Powered Coaching",
  "Cancel Anytime",
];

export const buttonStyles = {
  primary:
    "rounded-full px-5 shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg",

  secondary:
    "rounded-full border-border/60 bg-background/60 backdrop-blur-md hover:bg-muted",

  ghost: "rounded-full px-5 text-sm font-medium",

  outline:
    "h-11 w-full rounded-xl border-border/60 bg-background/60 backdrop-blur-md hover:bg-muted",

  cta: "group h-12 rounded-full px-8 text-sm font-semibold shadow-xl transition-all duration-300 hover:scale-[1.03]",

  pricing:
    "h-12 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:scale-[1.02]",
};

export const trustPoints = ["Secure", "Fast", "AI Powered"];

export const getStartedSteps = [
  {
    title: "Your Dream Job Starts Here",
    description:
      "Step into AI-simulated interviews that mirror real hiring rooms. Build the confidence to walk in prepared — and walk out with an offer.",
    imageUrl: "/interview-prep.jpg",
    tagline: "AI-Powered Interview Preparation",
  },
  {
    title: "A Coach That Knows You",
    description:
      "Hirzo adapts to your unique skill set and target role — delivering laser-focused strategies that turn your weaknesses into winning answers.",
    imageUrl: "/personalized-coaching.jpg",
    tagline: "Hyper-Personalized Coaching",
  },
  {
    title: "Feedback That Actually Moves the Needle",
    description:
      "Get instant, brutally honest analysis of every answer — from clarity and confidence to technical depth — so every session makes you sharper.",
    imageUrl: "/real-time-feedback.jpg",
    tagline: "Real-Time Performance Feedback",
  },
];

export const perosnalInfomrationFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
});

export const contactInformationFormSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address"),

  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{10,15}$/, "Please enter a valid phone number"),

  addressLine1: z
    .string()
    .trim()
    .min(5, "Address Line 1 must be at least 5 characters"),

  addressLine2: z.string().trim().optional(),

  city: z.string().trim().min(2, "City is required"),

  state: z.string().trim().min(2, "State is required"),

  country: z.string().trim().min(2, "Country is required"),

  postalCode: z
    .string()
    .trim()
    .min(3, "Postal code is required")
    .max(10, "Postal code is too long"),
});

export const contactFields: AdressFieldsType[] = [
  { name: "email", label: "Email Address", type: "email" },
  { name: "phone", label: "Phone Number", type: "tel" },
];

export const addressFields: AdressFieldsType[] = [
  { name: "addressLine1", label: "Address Line 1", type: "text" },
  { name: "addressLine2", label: "Address Line 2", type: "text" },
  { name: "city", label: "City", type: "text" },
  { name: "state", label: "State", type: "text" },
  { name: "country", label: "Country", type: "text" },
  { name: "postalCode", label: "Postal Code", type: "text" },
];

export const resumeFormSchema = z.object({
  // Resume (PDF only)
  resume: z.custom<File>(
    (val) => val instanceof File && val.type === "application/pdf",
    { message: "Please upload a valid PDF file" },
  ),

  // Optional links (must be valid URLs if provided)
  linkedin: z
    .string()
    .trim()
    .url("Please enter a valid LinkedIn URL")
    .optional()
    .or(z.literal("")),

  x: z
    .string()
    .trim()
    .url("Please enter a valid X (Twitter) URL")
    .optional()
    .or(z.literal("")),

  github: z
    .string()
    .trim()
    .url("Please enter a valid GitHub URL")
    .optional()
    .or(z.literal("")),

  portfolio: z
    .string()
    .trim()
    .url("Please enter a valid portfolio URL")
    .optional()
    .or(z.literal("")),

  // Skills (max 25)
  skills: z
    .array(z.string().min(1, "Skill cannot be empty"))
    .max(25, "You can add up to 25 skills only")
    .optional(),
});

export const websiteFields: AdressFieldsType[] = [
  { name: "linkedin", label: "LinkedIn" },
  { name: "x", label: "X (Twitter)" },
  { name: "github", label: "GitHub" },
  { name: "portfolio", label: "Personal Portfolio" },
];

export const workHistoryFormSchema = z.object({
  jobs: z.array(
    z.object({
      jobTitle: z.string().min(2),
      company: z.string().min(2),
      location: z.string().min(2),
      startDate: z.string().min(1),
      currentlyWorking: z.boolean().optional(),
      endDate: z.string().optional().or(z.literal("")),
      description: z.string().min(10),
    }),
  ),
});

export const defaultJob: FormValues["jobs"][0] = {
  jobTitle: "",
  company: "",
  location: "",
  startDate: "",
  endDate: "",
  currentlyWorking: false,
  description: "",
};

export const jobInputFields: WorkHistoryPropsType[] = [
  { name: "jobTitle", label: "Job Title", type: "text" },
  { name: "company", label: "Company", type: "text" },
  { name: "location", label: "Location", type: "text" },
  { name: "startDate", label: "Start Date", type: "date" },
  { name: "endDate", label: "End Date", type: "date" },
];

export const educationHistoryFormSchema = z.object({
  education: z.array(
    z.object({
      school: z.string().trim().min(2, "School name is required"),

      degree: z.string().trim().min(2, "Degree is required"),

      major: z.string().trim().min(2, "Major is required"),

      gpa: z.string().trim().optional().or(z.literal("")),

      startDate: z.string().min(1, "Start date is required"),

      endDate: z.string().optional().or(z.literal("")),
    }),
  ),
});

export const defaultEducation: FormValues["education"][0] = {
  school: "",
  degree: "",
  major: "",
  gpa: "",
  startDate: "",
  endDate: "",
};

export const educationInputFields: EducationHistoryFieldsType[] = [
  { name: "school", label: "School", type: "text" },
  { name: "degree", label: "Degree", type: "text" },
  { name: "major", label: "Major", type: "text" },
  { name: "gpa", label: "GPA", type: "text" },
  { name: "startDate", label: "Start Date", type: "date" },
  { name: "endDate", label: "End Date", type: "date" },
];

export const gridColsMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};


export const sections = [
  {
    title: "Contact Details",
    description:
      "We'll use this information to communicate with you and verify your profile.",
    fields: contactFields,
  },
  {
    title: "Address Information",
    description:
      "Provide your current residential address for profile completion.",
    fields: addressFields,
  },
];

export const JobDescriptionFormSchema = z.object({
  jobTitle: z.string().min(2, "Job title is required").optional(),
  company: z.string().min(2, "Company name is required").optional(),
  location: z.string().optional(),
  jobDescription: z.string().min(50, "Please provide a detailed description").optional(),
});

export const JobDescriptionFields = [
  {
    name: "jobTitle" as const,
    label: "Job Title",
    placeholder: "Frontend Developer",
    icon: BriefcaseBusiness,
  },
  {
    name: "company" as const,
    label: "Company",
    placeholder: "Google",
    icon: Building2,
  },
  {
    name: "location" as const,
    label: "Location",
    placeholder: "Ahmedabad, Gujarat",
    icon: MapPin,
  },
];

export const chartConfig = {
  score: {
    label: "Match Score",
    color: "var(--chart-1)",
  },
  remaining: {
    label: "Remaining",
    color: "var(--muted)",
  },
} satisfies ChartConfig;