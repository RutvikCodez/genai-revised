"use client";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { navLinks } from "@/constants";
import Link from "next/link";

const MobileNavbar = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild className="md:hidden">
        <Button variant="outline">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="md:hidden justify-between flex flex-col items-center">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Hirzo</DrawerTitle>
            <DrawerDescription>Hire Ready. Always.</DrawerDescription>
          </DrawerHeader>
          <div className="border-t border-border/50 bg-muted/50 backdrop-blur-sm p-4 flex flex-col gap-2">
            {navLinks.map(({ href, label }, index) => (
              <Link
                key={index}
                href={href}
                className="px-4 py-2 rounded hover:bg-muted text-sm text-foreground cursor-pointer"
              >
                {label}
              </Link>
            ))}
          </div>
          <DrawerFooter>
            <Button asChild variant="outline">
              <Link href="/signin">Sign In</Link>
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavbar;
