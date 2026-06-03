import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "../ui/button";
import SectionWrapper from "./SectionWrapper";

const CTA = () => {
  return (
    <SectionWrapper
      id="cta"
      tagline="Start Your Career Journey"
      title="Ready to Master"
      subtitle="Your Interviews?"
      description=" Join thousands of candidates using Hirzo to practice smarter, gain confidence, and land opportunities at top companies."
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row justify-center w-full">
        <Button
          asChild
          size="lg"
          className="group h-12 rounded-full px-8 text-sm font-semibold shadow-xl transition-all duration-300 hover:scale-[1.03]"
        >
          <Link href="/signup">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-12 rounded-full border-border/60 bg-background/60 px-8 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:bg-muted"
        >
          <Link href="/pricing">View Pricing</Link>
        </Button>
      </div>

      {/* Bottom Trust */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        <span>✓ No Credit Card Required</span>
        <span>✓ AI-Powered Coaching</span>
        <span>✓ Cancel Anytime</span>
      </div>
    </SectionWrapper>
  );
};

export default CTA;
