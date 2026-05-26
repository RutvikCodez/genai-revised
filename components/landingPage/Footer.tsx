import { footerLinks, footerTextLinks, socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
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
            <p className="text-sm text-muted-foreground">Hire Ready. Always.</p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="font-semibold text-sm text-foreground">
                {category}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 sm:flex-row items-center justify-between flex flex-col gap-4 sm:mt-0">
          <p className="text-sm text-muted-foreground">
            © 2026 Hirzo. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            {footerTextLinks.map((link, index) => (
              <div key={link} className="flex items-center gap-4">
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  {link}
                </Link>

                {index !== footerTextLinks.length - 1 && <span>•</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
