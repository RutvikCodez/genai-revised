type CounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
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
