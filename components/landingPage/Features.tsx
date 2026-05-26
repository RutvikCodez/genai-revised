import FeatureCard from "./FeatureCard";
import { features } from "@/constants";

const Features = () => {
  return (
    <section id="features" className="py-20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful Features for Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to ace your interviews
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ Icon, title, description, gradient }) => (
            <FeatureCard
              key={title}
              icon={<Icon className="w-6 h-6" />}
              title={title}
              description={description}
              gradient={gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
