const TrustLine = ({ title, description }: TrustLineProps) => {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-border/50 bg-background/50 px-8 py-8 text-center backdrop-blur-xl">
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>

      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default TrustLine;
