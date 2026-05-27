import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="relative overflow-hidden border-t border-border/50 py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-muted opacity-40 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.08)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl border border-border/50 bg-background/60 px-6 py-16 text-center backdrop-blur-2xl sm:px-12">
          {/* Inner Glow */}
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          </div>

          {/* Decorative Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.05)_1px,transparent_1px)] bg-size-[32px_32px]" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm font-medium backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              Start Your Career Journey
            </div>

            {/* Heading */}
            <h2 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Ready to Master
              <span className="block text-muted-foreground">
                Your Interviews?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Join thousands of candidates using Hirzo to practice smarter,
              gain confidence, and land opportunities at top companies.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
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
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span>✓ No Credit Card Required</span>
              <span>✓ AI-Powered Coaching</span>
              <span>✓ Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;