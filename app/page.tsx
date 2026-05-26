import Features from "@/components/landingPage/Features";
import Hero from "@/components/landingPage/Hero";
import Pricing from "@/components/landingPage/Pricing";
import Stats from "@/components/landingPage/Stats";
import Testimonials from "@/components/landingPage/Testimonials";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full bg-background text-foreground overflow-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Stats Section */}
      <Stats />
      {/* Features Section */}
      <Features />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Pricing Section */}
      <Pricing />
    </div>
  );
}
