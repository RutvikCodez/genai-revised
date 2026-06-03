import { features } from "@/constants";

import FeatureCard from "./FeatureCard";
import SectionWrapper from "./SectionWrapper";

const Features = () => {
  return (
    <SectionWrapper
      id="features"
      tagline="Built for Modern Candidates"
      title="Everything You Need"
      subtitle="To Ace Every Interview"
      description="Hirzo combines AI-driven insights, realistic interview simulations, and personalized feedback to help you become fully interview-ready."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map(({ Icon, title, description, gradient }, index) => (
          <div key={title} className="group relative">
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
              <span className="absolute right-6 top-6 text-5xl font-bold tracking-tight text-muted/40 transition-all duration-300 group-hover:scale-110">
                0{index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Features;