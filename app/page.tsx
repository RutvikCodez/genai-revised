import Hero from "@/components/landingPage/Hero";
import Stats from "@/components/landingPage/Stats";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-background text-foreground overflow-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Stats Section */}
      <Stats />
    </div>
  );
}
