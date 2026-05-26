import Hero from "@/components/landingPage/Hero";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-background text-foreground overflow-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
    </div>
  );
}
