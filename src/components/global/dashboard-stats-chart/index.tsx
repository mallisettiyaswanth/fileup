"use client";

import { HardDrive, TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [{ month: "january", desktop: 20, mobile: 80 }];

const chartConfig = {
  mobile: {
    label: "Mobile",
    color: "hsl(265, 85%, 60%)",
  },
  desktop: {
    label: "Desktop",
    color: "#eee",
  },
} satisfies ChartConfig;

export default function Component() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square w-full max-w-[250px]"
    >
      <RadialBarChart
        data={chartData}
        startAngle={-30}
        endAngle={210}
        innerRadius={100}
        outerRadius={150}
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <g>
                    <foreignObject
                      x={viewBox.cx - 15}
                      y={viewBox.cy - 35}
                      width="30"
                      height="30"
                      className="flex items-center justify-center"
                    >
                      <HardDrive className="h-6 w-6 text-primary mx-auto" />
                    </foreignObject>

                    {/* Used Storage */}
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy + 5}
                      textAnchor="middle"
                      className="fill-black text-xl font-semibold"
                    >
                      51 GB
                    </text>

                    {/* Total Storage */}
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy + 25}
                      textAnchor="middle"
                      className="fill-gray-500 text-sm"
                    >
                      of 50 GB
                    </text>
                  </g>
                );
              }
            }}
          />
        </PolarRadiusAxis>
        <RadialBar
          dataKey="desktop"
          stackId="a"
          cornerRadius={5}
          fill="var(--color-desktop)"
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="mobile"
          fill="var(--color-mobile)"
          stackId="a"
          cornerRadius={5}
          className="stroke-transparent stroke-2"
        />
      </RadialBarChart>
    </ChartContainer>
  );
}
