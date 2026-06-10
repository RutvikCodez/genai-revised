const Title = ({ title, description, children }: TitleProps) => {
  return (
    <section className="rounded-2xl border border-border/50 p-6 flex flex-col gap-6">
      <div>
        <h2 className="font-medium">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {children}
    </section>
  );
};

export default Title;
