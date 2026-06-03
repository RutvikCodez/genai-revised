import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "../ui/button";
import SectionWrapper from "./SectionWrapper";
import { shortFeatures } from "@/constants";
import AppButton from "./AppButton";

const CTA = () => {
  return (
    <SectionWrapper
      id="cta"
      tagline="Start Your Career Journey"
      title="Ready to Master"
      subtitle="Your Interviews?"
      description=" Join thousands of candidates using Hirzo to practice smarter, gain confidence, and land opportunities at top companies."
      sparkles={true}
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row justify-center w-full">
        <AppButton href="/signup" variant="cta" size="lg" arrow>
          Start Free Trial
        </AppButton>

        <AppButton
          href="/pricing"
          variant="secondary"
          size="lg"
          className="h-12 px-8"
        >
          View Pricing
        </AppButton>
      </div>

      {/* Bottom Trust */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        {shortFeatures.map((feature) => (
          <span key={feature}>✓ {feature}</span>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CTA;
