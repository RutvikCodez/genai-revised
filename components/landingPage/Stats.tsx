import { statsData } from "@/constants";
import Counter from "./Counter";
import SectionWrapper from "./SectionWrapper";

const Stats = () => {
  return (
    <SectionWrapper
      id="stats"
      tagline="Trusted Performance"
      title="Numbers That Speak"
      subtitle="To Help You Stand Out"
      description=" Thousands of candidates trust Hirzo to sharpen their interview skills and land better opportunities."
    >
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {statsData.map(({ end, suffix, label }) => (
          <div
            key={label}
            className="group relative overflow-hidden rounded-3xl border border-border/50 bg-background/50 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-border hover:bg-background/80"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent" />
            </div>

            <div className="relative flex flex-col items-center text-center gap-4">
              <div className="text-5xl font-bold tracking-tight sm:text-6xl">
                <Counter end={end} duration={2} suffix={suffix} />
              </div>

              <div className="h-px w-12 bg-border transition-all duration-300 group-hover:w-20" />

              <p className="text-sm font-medium text-muted-foreground sm:text-base">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Stats;