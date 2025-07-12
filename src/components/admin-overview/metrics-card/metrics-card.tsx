"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, DollarSign, Calendar, TrendingUp } from "lucide-react"

const metrics = [
  {
    title: "BOOKINGS",
    value: "852",
    icon: Briefcase,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "SALES",
    value: "$1,0.00",
    icon: DollarSign,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "CHECK INS",
    value: "6",
    icon: Calendar,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "OCCUPANCY RATE",
    value: "48%",
    icon: TrendingUp,
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
]

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="border-0 shadow-sm">
          <CardContent className="px-2">
            <div className="flex items-center gap-x-2">
              <div className={`p-2 rounded-full ${metric.bgColor}`}>
                <metric.icon className={`h-4 w-4 ${metric.iconColor}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{metric.title}</p>
                <p className="text-lg font-bold text-gray-900">{metric.value}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
