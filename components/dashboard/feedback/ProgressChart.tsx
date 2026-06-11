"use client";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function ProgressChart({
  matchScore,
}: {
  matchScore: number;
}) {
  const safeScore = Math.min(100, Math.max(0, matchScore));
  const remaining = 100 - safeScore;

  const chartData = [
    {
      name: "match",
      value: safeScore,
      fill: "var(--chart-1)",
    },
    {
      name: "remaining",
      value: remaining,
      fill: "var(--muted)",
    },
  ];

  const getLabel = (score: number) => {
    if (score >= 85) return "Excellent";
    if (score >= 70) return "Strong";
    if (score >= 50) return "Moderate";
    return "Low";
  };

  return (
    <div className="relative">
      <ChartContainer
        config={{}}
        className="h-56 w-56"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent hideLabel />
            }
          />

          <Pie
            data={chartData}
            dataKey="value"
            innerRadius={70}
            outerRadius={95}
            paddingAngle={4}
            cornerRadius={8}
            isAnimationActive
            animationDuration={1200}
            animationEasing="ease-out"
          >
            <Label
              content={({ viewBox }) => {
                if (
                  viewBox &&
                  "cx" in viewBox &&
                  "cy" in viewBox
                ) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {/* Score */}
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy as number) - 8}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {safeScore}%
                      </tspan>

                      {/* Label */}
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy as number) + 16}
                        className="fill-muted-foreground text-xs"
                      >
                        {getLabel(safeScore)} Match
                      </tspan>
                    </text>
                  );
                }
                return null;
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>

      {/* subtle outer glow ring effect */}
      <div className="absolute inset-0 rounded-full border border-border/40" />
    </div>
  );
}