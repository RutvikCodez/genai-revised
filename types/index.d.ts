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

  // Work History
  jobs?: {
    jobTitle: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string;
    currentlyWorking?: boolean;
    description: string;
  }[];

  // Education
  education?: {
    school: string;
    degree: string;
    major: string;
    gpa?: string;
    startDate: string;
    endDate?: string;
  }[];
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

type FormFieldProps<T extends FieldValues> = {
  name: Extract<Path<T>, string>;
  label: string;
  control: Control<T>;
  inputProps?: Omit<InputProps, "name">;
  renderInput?: ComponentType<InputProps & { invalid: boolean }>;
};

type FormStepLayoutProps = {
  icon: LucideIcon;
  title: string;
  onBack?: () => void;
  submitLabel?: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
};

type FormFieldArrayProps<T extends FieldValues> = {
  control: Control<T>;
  name: ArrayPath<T>;
  addLabel: string;
  defaultItem: FieldArray<T, ArrayPath<T>>;
  renderItem: (index: number, remove: (i: number) => void) => React.ReactNode;
};

type FieldGridProps = {
  cols?: 1 | 2;
  children: React.ReactNode;
  className?: string;
};

type FormValues = z.infer<typeof formSchema>;

type AdressFieldsType = {
  name: keyof FormValues;
  label: string;
  type?: string;
};

type WorkHistoryPropsType = {
  name: keyof Omit<FormValues["jobs"][0], "currentlyWorking" | "description">;
  label: string;
  type: string;
};

type EducationHistoryFieldsType = {
  name: keyof FormValues["education"][0];
  label: string;
  type: string;
};

type FormSectionProps = {
  title: string;
  description: string;
};
