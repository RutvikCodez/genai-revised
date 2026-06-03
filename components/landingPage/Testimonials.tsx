import { testimonials } from "@/constants";

import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-border/50 py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-muted opacity-40 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.08)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-6 justify-center items-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-background/60 px-4 py-2 text-sm font-medium backdrop-blur-md">
            Success Stories
          </span>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Loved by
            <span className="block text-muted-foreground">
              Ambitious Professionals
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Thousands of candidates trust Hirzo to sharpen their interview
            skills, boost confidence, and land opportunities faster.
          </p>
        </div>

        {/* Testimonials */}
        <div className="relative">
          {/* Decorative Blur */}
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="transition-all duration-500 hover:-translate-y-2"
              >
                <TestimonialCard
                  {...testimonial}
                  className={
                    index === 1
                      ? "xl:translate-y-10"
                      : index === 2
                        ? "xl:translate-y-4"
                        : ""
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Line */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-border/50 bg-background/50 px-8 py-8 text-center backdrop-blur-xl">
          <h3 className="text-2xl font-semibold tracking-tight">
            Join Thousands Preparing Smarter
          </h3>

          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            From fresh graduates to experienced professionals, Hirzo helps
            candidates prepare with confidence using AI-powered interview
            coaching.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;