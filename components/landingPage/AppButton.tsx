import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { buttonStyles } from "@/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AppButton = ({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
  arrow = false,
}: AppButtonProps) => {
  return (
    <Button
      asChild
      size={size}
      variant={
        variant === "ghost"
          ? "ghost"
          : variant === "outline" || variant === "secondary"
            ? "outline"
            : "default"
      }
      className={cn(
        buttonStyles[variant],
        className,
        "flex gap-2 items-center",
      )}
    >
      <Link href={href}>
        {children}

        {arrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </Link>
    </Button>
  );
};

export default AppButton;
