"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const topicData = [
  {
    year: "2020",
    "AI & Machine Learning": 18,
    "Cloud Computing": 15,
    "Web Development": 10,
    "Mobile Apps": 8,
    "Data Science": 6,
    Cybersecurity: 4,
    DevOps: 4,
    Blockchain: 3,
    IoT: 2,
    "AR/VR": 2,
    "Quantum Computing": 1,
    "Edge Computing": 1,
  },
  {
    year: "2021",
    "AI & Machine Learning": 20,
    "Cloud Computing": 16,
    "Web Development": 12,
    "Mobile Apps": 9,
    "Data Science": 7,
    Cybersecurity: 5,
    DevOps: 5,
    Blockchain: 4,
    IoT: 3,
    "AR/VR": 3,
    "Quantum Computing": 2,
    "Edge Computing": 2,
  },
  {
    year: "2022",
    "AI & Machine Learning": 22,
    "Cloud Computing": 18,
    "Web Development": 11,
    "Mobile Apps": 8,
    "Data Science": 8,
    Cybersecurity: 6,
    DevOps: 6,
    Blockchain: 3,
    IoT: 4,
    "AR/VR": 4,
    "Quantum Computing": 3,
    "Edge Computing": 3,
  },
  {
    year: "2023",
    "AI & Machine Learning": 25,
    "Cloud Computing": 17,
    "Web Development": 10,
    "Mobile Apps": 7,
    "Data Science": 9,
    Cybersecurity: 7,
    DevOps: 7,
    Blockchain: 2,
    IoT: 4,
    "AR/VR": 5,
    "Quantum Computing": 4,
    "Edge Computing": 4,
  },
  {
    year: "2024",
    "AI & Machine Learning": 28,
    "Cloud Computing": 16,
    "Web Development": 9,
    "Mobile Apps": 6,
    "Data Science": 10,
    Cybersecurity: 8,
    DevOps: 8,
    Blockchain: 2,
    IoT: 5,
    "AR/VR": 6,
    "Quantum Computing": 5,
    "Edge Computing": 5,
  },
  {
    year: "2025",
    "AI & Machine Learning": 21,
    "Cloud Computing": 15,
    "Web Development": 10,
    "Mobile Apps": 8,
    "Data Science": 6,
    Cybersecurity: 4,
    DevOps: 4,
    Blockchain: 3,
    IoT: 2,
    "AR/VR": 2,
    "Quantum Computing": 2,
    "Edge Computing": 2,
  },
]

const chartConfig = {
  "AI & Machine Learning": {
    label: "AI & Machine Learning",
    color: "#8b5cf6",
  },
  "Cloud Computing": {
    label: "Cloud Computing",
    color: "#10b981",
  },
  "Web Development": {
    label: "Web Development",
    color: "#f59e0b",
  },
  "Mobile Apps": {
    label: "Mobile Apps",
    color: "#ef4444",
  },
  "Data Science": {
    label: "Data Science",
    color: "#3b82f6",
  },
  Cybersecurity: {
    label: "Cybersecurity",
    color: "#06b6d4",
  },
  DevOps: {
    label: "DevOps",
    color: "#84cc16",
  },
  Blockchain: {
    label: "Blockchain",
    color: "#f97316",
  },
  IoT: {
    label: "IoT",
    color: "#ec4899",
  },
  "AR/VR": {
    label: "AR/VR",
    color: "#8b5cf6",
  },
  "Quantum Computing": {
    label: "Quantum Computing",
    color: "#06b6d4",
  },
  "Edge Computing": {
    label: "Edge Computing",
    color: "#84cc16",
  },
}

export default function TopicDistributionChart() {
  return (
    <div className="">
      <Card>
        <CardHeader>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="min-h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={topicData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barCategoryGap="20%"
                maxBarSize={60}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} domain={[0, 30]} />
                <ChartTooltip content={<ChartTooltipContent />} cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} />

                {Object.keys(chartConfig).map((topic) => (
                  <Bar
                    key={topic}
                    dataKey={topic}
                    fill={chartConfig[topic as keyof typeof chartConfig].color}
                    radius={[2, 2, 0, 0]}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
