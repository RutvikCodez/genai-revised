"use client";

import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";

import { navLinks } from "@/constants";

import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import AppButton from "./landingPage/AppButton";

const MobileNavbar = () => {
  return (
    <Drawer direction="right">
      {/* Trigger */}
      <DrawerTrigger asChild className="md:hidden">
        <Button
          size="icon"
          variant="outline"
          className="rounded-xl border-border/60 bg-background/60 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-muted"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </DrawerTrigger>

      {/* Drawer */}
      <DrawerContent className="ml-auto h-screen max-w-sm border-l border-border/50 bg-background/95 backdrop-blur-2xl">
        <div className="flex h-full flex-col">
          {/* Top */}
          <DrawerHeader className="border-b border-border/50 px-6 py-5 text-left">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <DrawerTitle className="text-2xl font-bold tracking-tight">
                  Hirzo
                </DrawerTitle>

                <DrawerDescription className="text-sm text-muted-foreground">
                  Hire Ready. Always.
                </DrawerDescription>
              </div>

              <DrawerClose asChild>
                <Button size="icon" variant="ghost" className="rounded-full">
                  ✕
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          {/* Navigation */}
          <div className="flex flex-1 flex-col px-4 py-6">
            <div className="flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <DrawerClose asChild key={href}>
                  <Link
                    href={href}
                    className="group flex items-center justify-between rounded-2xl border border-transparent bg-muted/40 px-4 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-border hover:bg-background"
                  >
                    <span>{label}</span>

                    <ArrowRight className="h-4 w-4 translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                </DrawerClose>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto flex flex-col gap-3 border-t border-border/50 pt-6">
              <AppButton href="/signin" variant="outline">
                Sign In
              </AppButton>

              <AppButton href="/signup" size="lg" className="rounded-xl h-11">
                Get Started
              </AppButton>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavbar;
