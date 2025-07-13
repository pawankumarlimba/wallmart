"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const warehouseCycleData = [
  { name: "Warehouse 1", avgCycleHours: 28 },
  { name: "Warehouse 2", avgCycleHours: 34 },
  { name: "Warehouse 3", avgCycleHours: 40 },
]

export default function WarehouseCycleGraph() {
  return (
    <Card className="w-full max-w-5xl mx-auto border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          Average Cycle Time (in Hours)
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={warehouseCycleData}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              barCategoryGap={30}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 14, fill: "#374151", fontWeight: 500 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 14, fill: "#374151" }}
                domain={[0, 50]}
                label={{
                  value: "Hours",
                  angle: -90,
                  position: "insideLeft",
                  style: {
                    textAnchor: "middle",
                    fill: "#6b7280",
                    fontSize: 12,
                  },
                }}
              />
              <Tooltip
                wrapperClassName="!text-sm"
                contentStyle={{
                  borderRadius: "0.5rem",
                  fontSize: "0.85rem",
                }}
              />
              <Bar
                dataKey="avgCycleHours"
                fill="#6366F1"
                radius={[6, 6, 0, 0]}
                maxBarSize={60}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
