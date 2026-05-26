import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { trustedCompanies } from "@/constants";

import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-muted blur-3xl opacity-40" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/40 blur-3xl opacity-50" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-28 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-2 backdrop-blur-xl">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">
            AI-Powered Interview Preparation
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-5xl space-y-6">
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Crack Your Dream
            <br />
            <span className="text-muted-foreground">
              Interviews with AI
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Practice with realistic AI interviews, receive detailed feedback,
            improve communication skills, and become job-ready faster than ever.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group h-12 rounded-full px-8 text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-[1.03]"
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
            <Link href="/#features">Explore Features</Link>
          </Button>
        </div>

        {/* Social Proof */}
        <div className="mt-20 w-full max-w-4xl rounded-3xl border border-border/50 bg-background/40 p-8 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm font-medium text-muted-foreground">
              Trusted by candidates preparing for interviews at
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {trustedCompanies.map((company) => (
                <div
                  key={company}
                  className="text-sm font-semibold tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;