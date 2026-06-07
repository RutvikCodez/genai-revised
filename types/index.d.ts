type CounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
  prefix?: string;
  decimals?: number;
  className?: string;
};

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  gradient?: string;
  className?: string;
};

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  className?: string;
};

type PricingCardProps = {
  name: string;
  price: string | number;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  icon?: ReactNode;
  className?: string;
};

type SectionWrapperProps = {
  id: string;
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  children: ReactNode;
  sparkles?: boolean;
};

type TrustLineProps = {
  title: string;
  description: string;
};

type GetStartedCardProps = TrustLineProps & {
  imageUrl: string;
  tagline: string;
};

type AppButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "cta" | "pricing";
  size?: "default" | "lg";
  className?: string;
  arrow?: boolean;
};

type WizardSteps = {
  element: React.JSX.Element;
};

type typesforWizardForm = {
  Steps: WizardSteps[];
  currentStep: number;
};

type WizardFormData = {
  // Personal Information
  firstName?: string;
  lastName?: string;

  // Contact Information
  email?: string;
  phone?: string;

  // Address Information
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;

  // Resume & Profiles
  resume?: File | null;

  linkedin?: string;
  x?: string;
  github?: string;
  portfolio?: string;

  // Skills
  skills?: string[];

  // Work History (UPDATED)
  jobs?: {
    jobTitle: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string;
    currentlyWorking?: boolean;
    description: string;
  }[];
};