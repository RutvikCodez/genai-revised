import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl group"
          >
            <Image
              width={1000}
              height={1000}
              src="/hirzo-lockup-transparent.png"
              alt="Logo"
              className="w-32 h-8"
            />
          </Link>

          {/* Menu */}
          <div className="md:flex items-center gap-8 hidden">
            {navLinks.map(({ href, label }, index) => (
              <Link
                key={index}
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button asChild variant="outline">
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
            {/* Mobile Menu */}
            <MobileNavbar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
