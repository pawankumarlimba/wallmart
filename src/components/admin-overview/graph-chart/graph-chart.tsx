"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const salesData = [
  { date: "May 25", totalSales: 1200, extrasSales: 200 },
  { date: "May 26", totalSales: 5500, extrasSales: 300 },
  { date: "May 27", totalSales: 1050, extrasSales: 0 },
  { date: "May 28", totalSales: 7800, extrasSales: 150 },
  { date: "May 29", totalSales: 4200, extrasSales: 250 },
  { date: "May 30", totalSales: 2800, extrasSales: 400 },
  { date: "May 31", totalSales: 11000, extrasSales: 1200 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border rounded-lg shadow-lg">
        <p className="font-medium">{label}</p>
        <p className="text-blue-600">Total sales: {payload[0]?.value}$</p>
        <p className="text-green-600">Extras sales: {payload[1]?.value}$</p>
      </div>
    )
  }
  return null
}

export function GraphChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-700">Sales from May 25 2023 — May 31 2023</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={salesData}>
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6b7280" }}
                tickFormatter={(value) => `${value}$`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="totalSales"
                stroke="#6366f1"
                fill="#6366f1"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Area type="monotone" dataKey="extrasSales" stroke="#10b981" fill="transparent" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
