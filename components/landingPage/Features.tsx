import { features } from "@/constants";

import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-t border-border/50 py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-muted opacity-40 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.08)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-6 justify-center items-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-background/60 px-4 py-2 text-sm font-medium backdrop-blur-md">
            Built for Modern Candidates
          </span>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Everything You Need
            <br />
            <span className="text-muted-foreground">
              To Ace Every Interview
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hirzo combines AI-driven insights, realistic interview simulations,
            and personalized feedback to help you become fully interview-ready.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map(({ Icon, title, description, gradient }, index) => (
            <div
              key={title}
              className="group relative"
            >
              {/* Floating Accent */}
              <div className="absolute -inset-px rounded-3xl bg-linear-to-b from-border/40 to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

              <div
                className={`relative h-full transition-all duration-500 group-hover:-translate-y-2`}
              >
                <FeatureCard
                  icon={
                    <div className="rounded-2xl border border-border/50 bg-background/70 p-3 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-background">
                      <Icon className="h-6 w-6" />
                    </div>
                  }
                  title={title}
                  description={description}
                  gradient={gradient}
                />

                {/* Number */}
                <span className="absolute right-6 top-6 text-5xl font-bold tracking-tight text-muted/40 transition-all duration-300 group-hover:scale-110">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;