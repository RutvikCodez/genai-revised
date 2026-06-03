import { pricingPlans } from "@/constants";
import PricingCard from "./PricingCard";
import SectionWrapper from "./SectionWrapper";
import TrustLine from "./TrustLine";

const Pricing = () => {
  return (
    <SectionWrapper
      id="pricing"
      tagline="Flexible Pricing"
      title="Simple Pricing,"
      subtitle="Powerful Results"
      description="Whether you are preparing for your first interview or aiming for top-tier companies, Hirzo has a plan tailored for your journey."
    >
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
      <TrustLine
        title="No Hidden Charges"
        description="Transparent pricing with flexible plans. Upgrade, downgrade, or cancel anytime as your interview preparation evolves."
      />
    </SectionWrapper>
  );
};

export default Pricing;
