"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, DollarSign, Calendar, TrendingUp } from "lucide-react"
import type { LucideIcon} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  orderFillRate: Briefcase,
  stockoutRate: DollarSign,
  inventoryTurnover: Calendar,
  occupancyRate: TrendingUp,
};


type WarehouseMetric = {
  warehouseId: string
  orderFillRate: number
  stockoutRate: number
  inventoryTurnover: number
  occupancyRate: string
}

export function MetricsCards({ warehouse }: { warehouse: WarehouseMetric }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
        {Object.entries(warehouse).map(([key, value]) => {
          if (key === "warehouseId") return null

          const Icon = iconMap[key] || Briefcase
          const bgColor =
            key === "orderFillRate"
              ? "bg-blue-50"
              : key === "stockoutRate"
              ? "bg-green-50"
              : key === "inventoryTurnover"
              ? "bg-purple-50"
              : "bg-yellow-50"
          const iconColor =
            key === "orderFillRate"
              ? "text-blue-600"
              : key === "stockoutRate"
              ? "text-green-600"
              : key === "inventoryTurnover"
              ? "text-purple-600"
              : "text-yellow-600"

          return (
            <Card key={key} className="border-0 shadow-sm">
              <CardContent className="px-2 py-4">
                <div className="flex items-center gap-x-2">
                  <div className={`p-2 rounded-full ${bgColor}`}>
                    <Icon className={`h-4 w-4 ${iconColor}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{key}</p>
                    <p className="text-lg font-bold text-gray-900">{value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
