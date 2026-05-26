import Link from "next/link";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="py-20 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Master Your Interviews?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of professionals who have landed their dream jobs
          </p>
        </div>
        <Link href={"/signup"}>
          <Button className="px-8 py-4 font-semibold text-lg">
            Start Your Free Trial
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
