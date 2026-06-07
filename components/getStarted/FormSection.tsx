// components/form/FormSection.tsx
export function FormSection({ title, description }: FormSectionProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm font-medium">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
