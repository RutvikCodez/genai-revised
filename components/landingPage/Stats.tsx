import { statsData } from "@/constants";
import Counter from "./Counter";

const Stats = () => {
  return (
    <section className="relative overflow-hidden border-t border-border/50 py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-muted blur-3xl opacity-40" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.08)_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-background/60 px-4 py-2 text-sm font-medium backdrop-blur-md">
            Trusted Performance
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Numbers That Speak
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Thousands of candidates trust Hirzo to sharpen their interview
            skills and land better opportunities.
          </p>
        </div>

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

              <div className="relative flex flex-col items-center text-center">
                <div className="text-5xl font-bold tracking-tight sm:text-6xl">
                  <Counter end={end} duration={2} suffix={suffix} />
                </div>

                <div className="mt-4 h-px w-12 bg-border transition-all duration-300 group-hover:w-20" />

                <p className="mt-4 text-sm font-medium text-muted-foreground sm:text-base">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;