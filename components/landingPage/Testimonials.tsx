import { testimonials } from "@/constants";

import TestimonialCard from "./TestimonialCard";
import SectionWrapper from "./SectionWrapper";
import TrustLine from "./TrustLine";

const Testimonials = () => {
  return (
    <SectionWrapper
      id="testimonials"
      tagline="Success Stories"
      title="Loved by"
      subtitle="Ambitious Professionals"
      description="Thousands of candidates trust Hirzo to sharpen their interview skills, boost confidence, and land opportunities faster."
    >
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
      <TrustLine
        title="Join Thousands Preparing Smarter"
        description="From fresh graduates to experienced professionals, Hirzo helps candidates prepare with confidence using AI-powered interview coaching."
      />
    </SectionWrapper>
  );
};

export default Testimonials;
