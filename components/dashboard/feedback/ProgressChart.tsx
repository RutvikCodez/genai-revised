"use client";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { chartConfig } from "@/constants";

export default function ProgressChart({ matchScore }: { matchScore: number }) {
  const chartData = [
    {
      name: "match",
      value: matchScore,
      fill: "var(--chart-1)",
    },
    {
      name: "remaining",
      value: 100 - matchScore,
      fill: "var(--muted)",
    },
  ];
  return (
    <ChartContainer config={chartConfig} className="w-55 h-55 mx-auto">
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="value"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={3}
          cornerRadius={6}
          isAnimationActive
          animationDuration={1500}
          animationEasing="ease-out"
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {matchScore}%
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
