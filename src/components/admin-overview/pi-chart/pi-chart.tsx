"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, LabelList } from "recharts"
import { useMemo } from "react"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

// Define the chart config and extract keys for safe indexing
const chartConfig = {
  perfect: {
    label: "Perfect (On-time, complete, no damage)",
    color: "#4ade80", // Green
  },
  late: {
    label: "Late Delivery",
    color: "#facc15", // Yellow
  },
  incomplete: {
    label: "Incomplete",
    color: "#60a5fa", // Blue
  },
  damaged: {
    label: "Damaged",
    color: "#f87171", // Red
  },
} as const

type CategoryKey = keyof typeof chartConfig

// Warehouse pie data
const warehousePieData: Record<string, { category: CategoryKey; value: number }[]> = {
  warehouse1: [
    { category: "perfect", value: 910 },
    { category: "late", value: 85 },
    { category: "incomplete", value: 60 },
    { category: "damaged", value: 45 },
  ],
  warehouse2: [
    { category: "perfect", value: 780 },
    { category: "late", value: 120 },
    { category: "incomplete", value: 40 },
    { category: "damaged", value: 25 },
  ],
  warehouse3: [
    { category: "perfect", value: 850 },
    { category: "late", value: 50 },
    { category: "incomplete", value: 70 },
    { category: "damaged", value: 30 },
  ],
}

export function PiChart({
  selectedWarehouseId,
  className = "",
}: {
  selectedWarehouseId: string
  className?: string
}) {
  const chartData = useMemo(() => {
    return warehousePieData[selectedWarehouseId] ?? []
  }, [selectedWarehouseId])

  return (
    <Card className={className + " w-full max-w-xl mx-auto"}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">Perfect Order Rate</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-square min-h-[300px] [&_.recharts-wrapper]:pb-10 [&_.recharts-legend-wrapper]:inset-x-0"
        >
          <PieChart key={selectedWarehouseId}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent nameKey="category" />} />
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius="45%"
              outerRadius="70%"
              paddingAngle={2}
              dataKey="value"
              nameKey="category"
              isAnimationActive={true}
              animationDuration={500}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={chartConfig[entry.category].color}
                />
              ))}
              <LabelList
  dataKey="value"
  position="outside"
  className="fill-foreground text-xs"
  formatter={(value: number, entry?: { payload?: { category?: CategoryKey } }) => {
    const category = entry?.payload?.category;
    const label = category ? chartConfig[category].label.split(" ")[0] : "Unknown";
    return `${label}: ${value}`;
  }}
/>

            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="category" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
