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
