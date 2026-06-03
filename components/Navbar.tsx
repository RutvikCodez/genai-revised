import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { cn } from "@/lib/utils";
import AppButton from "./landingPage/AppButton";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl supports-backdrop-filter:bg-background/60">
      <div className="absolute inset-0 bg-linear-to-b from-muted/20 to-transparent pointer-events-none" />

      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="relative overflow-hidden rounded-xl border border-border/60 bg-muted/40 p-1.5 shadow-sm">
            <Image
              width={1000}
              height={1000}
              src="/hirzo-lockup-transparent.png"
              alt="Hirzo Logo"
              className="h-7 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-1 rounded-full border border-border/60 bg-muted/30 p-1 backdrop-blur-md">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300",
                  "hover:bg-background hover:text-foreground",
                  "after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-foreground after:transition-all after:duration-300",
                  "hover:after:w-5",
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <AppButton href="/signin" variant="ghost" className="max-md:hidden">
            Sign In
          </AppButton>

          <AppButton href="/signup">Get Started</AppButton>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
