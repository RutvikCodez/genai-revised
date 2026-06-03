import { pricingPlans } from "@/constants";

import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-border/50 py-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-muted opacity-40 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.08)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-6 justify-center items-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-background/60 px-4 py-2 text-sm font-medium backdrop-blur-md">
            Flexible Pricing
          </span>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Simple Pricing,
            <span className="block text-muted-foreground">
              Powerful Results
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whether you are preparing for your first interview or aiming for
            top-tier companies, Hirzo has a plan tailored for your journey.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="relative grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {/* Background Glow */}
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name ?? index}
              className={`relative transition-all duration-500 hover:-translate-y-3 ${
                index === 1 ? "xl:-translate-y-6" : ""
              }`}
            >
              {/* Popular Badge Wrapper */}
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2">
                  <div className="rounded-full border border-border/50 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-xl">
                    Most Popular
                  </div>
                </div>
              )}

              <PricingCard {...plan} />
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-border/50 bg-background/50 px-8 py-8 text-center backdrop-blur-xl">
          <h3 className="text-2xl font-semibold tracking-tight">
            No Hidden Charges
          </h3>

          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Transparent pricing with flexible plans. Upgrade, downgrade, or
            cancel anytime as your interview preparation evolves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
