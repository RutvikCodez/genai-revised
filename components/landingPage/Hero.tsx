import Link from "next/link";
import { Button } from "../ui/button";
import { trustedCompanies } from "@/constants";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-8 items-center">
        <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold w-fit">
          AI-Powered Interview Preparation
        </span>
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Master Your Interviews with AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get real-time feedback, personalized coaching, and practice with
            1000+ interview questions powered by advanced AI
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={"/signup"}>
            <Button className="py-6 px-8"> Start Free Trial</Button>
          </Link>
          <Link href={"/#features"}>
           <Button className="py-6 px-8" variant={"outline"}>Learn More</Button>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-border/50 flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            Trusted by professionals from leading companies
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {trustedCompanies.map(
              (company) => (
                <div
                  key={company}
                  className="text-xs font-semibold text-muted-foreground/70"
                >
                  {company}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
