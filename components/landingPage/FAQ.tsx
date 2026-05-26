import { faqData } from "@/constants";

const FAQ = () => {
  return (
    <section id="faq" className="py-20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map(({ answer, question }, index) => (
            <div
              key={index}
              className="rounded-lg border border-border/50 bg-muted/30 p-6 hover:border-border transition-all flex flex-col gap-2"
            >
              <h3 className="font-semibold text-foreground">{question}</h3>
              <p className="text-muted-foreground">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
