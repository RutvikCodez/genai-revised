"use client";
import { cn } from "@/lib/utils";
import CountUp from "react-countup";

const Counter = ({   end,
  suffix = "",
  duration = 2.5,
  prefix = "",
  decimals = 0,
  className, }: CounterProps) => {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className,
      )}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl opacity-60" />

      {/* Counter */}
      <span className="relative bg-linear-to-b from-foreground to-muted-foreground bg-clip-text font-bold tracking-tight text-transparent">
        <CountUp
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
          enableScrollSpy
          scrollSpyOnce
          useEasing
          separator=","
        />
      </span>
    </div>
  );
};

export default Counter;
