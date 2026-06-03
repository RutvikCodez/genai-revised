import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { trustPoints } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";


const Page = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-muted blur-3xl opacity-50" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.08)_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-md flex flex-col gap-6">
        <div className="overflow-hidden rounded-4xl border border-border/50 bg-background/70 backdrop-blur-2xl shadow-2xl">
          <div className="p-8 sm:p-10 flex flex-col gap-8">
            {/* Logo */}
            <div className="items-center text-center flex flex-col gap-2">
              <div className="flex flex-col items-center gap-6">
                <Link
                  href="/"
                  className="group inline-flex rounded-2xl border border-border/50 bg-background/80 p-3 backdrop-blur-md"
                >
                  <Image
                    width={1000}
                    height={1000}
                    src="/hirzo-lockup-transparent.png"
                    alt="Hirzo Logo"
                    className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </Link>
                <Badge
                  variant={"outline"}
                  className="p-3 text-xs font-medium flex gap-2 items-center"
                >
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Secure Authentication
                </Badge>

                <h1 className="text-3xl font-bold tracking-tight">
                  Welcome Back
                </h1>
              </div>

              <p className="text-sm text-muted-foreground">
                Sign in to continue your interview preparation journey.
              </p>
            </div>

            {/* Social Login */}
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <Button
                type="submit"
                className="h-12 w-full font-medium"
                variant={"outline"}
              >
                <Image src="/google.webp" alt="Google" width={18} height={18} />
                Continue with Google
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Quick Access
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-3 gap-3 text-center">
              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-border/50 bg-background/40 p-3 text-xs font-medium text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground">
          By continuing, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Page;