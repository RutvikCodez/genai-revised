import Image from "next/image";
import Link from "next/link";

import {
  footerLinks,
  footerTextLinks,
  socialLinks,
} from "@/constants";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-background/60">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-100 w-100 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-muted opacity-40 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.06)_1px,transparent_1px)] bg-size-[48px_48px]" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-8">
           <div className="flex flex-col gap-6">
             <Link
              href="/"
              className="group inline-flex items-center transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="rounded-2xl border border-border/50 bg-background/70 p-2 backdrop-blur-md">
                <Image
                  width={1000}
                  height={1000}
                  src="/hirzo-lockup-transparent.png"
                  alt="Hirzo Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
              AI-powered interview preparation platform helping candidates
              practice smarter, gain confidence, and land better opportunities.
            </p>
           </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-border/50 bg-background/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-border hover:bg-background"
                >
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
                {category}
              </h3>

              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-muted-foreground transition-all duration-300 hover:text-foreground"
                    >
                      <span className="relative">
                        {link.label}

                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-border/50 pt-8 sm:flex-row">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 Hirzo. All rights reserved.
          </p>

          {/* Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            {footerTextLinks.map((link, index) => (
              <div
                key={link}
                className="flex items-center gap-4"
              >
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-foreground"
                >
                  {link}
                </Link>

                {index !== footerTextLinks.length - 1 && (
                  <span className="text-border">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;