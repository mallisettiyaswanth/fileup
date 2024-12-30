"use client";

import { Bar, BarChart, XAxis, YAxis, Legend } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  {
    category: "Storage",
    documents: 350,
    images: 220,
    video: 150,
    audio: 100,
    zip: 50,
    gap: 5,
  },
];

const chartConfig = {
  documents: {
    label: "Documents",
    color: "hsl(225, 85%, 60%)",
    width: 100,
  },
  images: {
    label: "Images",
    color: "hsl(265, 85%, 60%)",
    width: 100,
  },
  video: {
    label: "Video",
    color: "hsl(265, 85%, 80%)",
    width: 100,
  },
  audio: {
    label: "Audio",
    color: "hsl(35, 85%, 65%)",
    width: 100,
  },
  other: {
    label: "ZIP",
    color: "hsl(0, 85%, 60%)",
    width: 100,
  },
  gap: {
    width: 20,
    color: "#fff",
  },
};

export default function DashboardChart() {
  return (
    <div className="w-full space-y-4 hidden lg:inline-block">
      <ChartContainer config={chartConfig} className="h-[60px] w-full">
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          barSize={35}
          barCategoryGap={16}
        >
          <YAxis type="category" dataKey="category" hide />
          <XAxis type="number" hide />
          {/* <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent className="z-10" />}
          /> */}

          <Bar
            background={{ fill: "#eee" }}
            dataKey="documents"
            stackId="a"
            fill="var(--color-documents)"
            radius={[4, 4, 4, 4]}
          />
          <Bar
            dataKey="gap"
            stackId="a"
            fill="var(--color-gap)"
            radius={[4, 4, 4, 4]}
          />

          <Bar
            dataKey="images"
            stackId="a"
            fill="var(--color-images)"
            radius={[4, 4, 4, 4]}
          />
          <Bar
            dataKey="gap"
            stackId="a"
            fill="var(--color-gap)"
            radius={[4, 4, 4, 4]}
          />

          <Bar
            dataKey="video"
            stackId="a"
            fill="var(--color-video)"
            radius={[4, 4, 4, 4]}
          />
          <Bar
            dataKey="gap"
            stackId="a"
            fill="var(--color-gap)"
            radius={[4, 4, 4, 4]}
          />

          <Bar
            dataKey="audio"
            stackId="a"
            fill="var(--color-audio)"
            radius={[4, 4, 4, 4]}
          />
          <Bar
            dataKey="gap"
            stackId="a"
            fill="var(--color-gap)"
            radius={[4, 4, 4, 4]}
          />

          <Bar
            dataKey="other"
            stackId="a"
            fill="var(--color-zip)"
            radius={[4, 4, 4, 4]}
          />
          <Bar
            dataKey="gap"
            stackId="a"
            fill="var(--color-gap)"
            radius={[4, 4, 4, 4]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

8;
