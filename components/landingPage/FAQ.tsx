import { faqData } from "@/constants";
import { Plus } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const FAQ = () => {
  return (
    <SectionWrapper
      id="faq"
      tagline="Support & Answers"
      title="Frequently Asked"
      subtitle="Questions"
      description=" Everything you need to know about Hirzo, interview preparation, plans, and AI-powered coaching."
    >
      <div className="flex flex-col gap-5">
        {faqData.map(({ answer, question }, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-border/50 bg-background/50 backdrop-blur-xl transition-all duration-500 hover:border-border hover:bg-background/80 hover:shadow-xl"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.05)_1px,transparent_1px)] bg-size-[28px_28px]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-4 p-8">
              {/* Question */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold leading-relaxed tracking-tight">
                  {question}
                </h3>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-background/70 backdrop-blur-md transition-transform duration-500 group-hover:rotate-90">
                  <Plus className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-12 bg-border transition-all duration-500 group-hover:w-24" />

              {/* Answer */}
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-border/50 bg-background/50 px-8 py-8 text-center backdrop-blur-xl">
        <h3 className="text-2xl font-semibold tracking-tight">
          Still Have Questions?
        </h3>

        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Our team is here to help you with anything related to interview
          preparation, plans, or platform support.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default FAQ;
