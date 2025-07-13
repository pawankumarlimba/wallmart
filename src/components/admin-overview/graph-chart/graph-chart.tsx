"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useMemo } from "react"

const deliveryDelayData: Record<string, { range: string; count: number }[]> = {
  warehouse1: [
    { range: "0-1 hrs", count: 50 },
    { range: "1-3 hrs", count: 40 },
    { range: "3-6 hrs", count: 25 },
    { range: "6-12 hrs", count: 10 },
    { range: "12+ hrs", count: 5 },
  ],
  warehouse2: [
    { range: "0-1 hrs", count: 30 },
    { range: "1-3 hrs", count: 50 },
    { range: "3-6 hrs", count: 20 },
    { range: "6-12 hrs", count: 15 },
    { range: "12+ hrs", count: 10 },
  ],
  warehouse3: [
    { range: "0-1 hrs", count: 40 },
    { range: "1-3 hrs", count: 30 },
    { range: "3-6 hrs", count: 15 },
    { range: "6-12 hrs", count: 10 },
    { range: "12+ hrs", count: 5 },
  ],
}

export function GraphChart({
  selectedWarehouseId,
}: {
  selectedWarehouseId: string
}) {
  const chartData = useMemo(() => {
    return deliveryDelayData[selectedWarehouseId] ?? []
  }, [selectedWarehouseId])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-700">
          Delivery Delay Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
              barCategoryGap={25}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="range"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: "#6b7280" }}
              />
              <YAxis
                allowDecimals={false}
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: "#6b7280" }}
              />
              <Tooltip
                wrapperClassName="!text-sm"
                contentStyle={{
                  borderRadius: "0.5rem",
                  fontSize: "0.85rem",
                }}
              />
              <Bar dataKey="count" fill="#4f46e5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
