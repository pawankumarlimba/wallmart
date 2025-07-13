"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Package, Percent } from "lucide-react"
import { Product } from "../data/products"

interface SummaryCardsProps {
  warehouseId: string
  products: Product[]
}

export function SummaryCards({ warehouseId, products }: SummaryCardsProps) {
  const warehouse = products.find((p) => p.warehouseId === warehouseId)

  if (!warehouse) {
    return (
      <div className="text-center text-red-500 font-semibold">
        No data found for warehouse ID: {warehouseId}
      </div>
    )
  }

  const totalProducts = warehouse.skuForecasts.length

  const totalStockValue = warehouse.skuForecasts.reduce((sum, skuItem) => {
    if (skuItem?.price && !isNaN(Number(skuItem.stockKeepingUnit))) {
      return sum + Number(skuItem.stockKeepingUnit) * skuItem.price.amount
    }
    return sum
  }, 0)

  const averageSalesPercentage = warehouse.skuForecasts.reduce((sum, skuItem) => {
    const avgForecast =
      skuItem.forecast.length > 0
        ? skuItem.forecast.reduce((a, b) => a + b, 0) / skuItem.forecast.length
        : 0
    return sum + avgForecast
  }, 0) / totalProducts

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Products</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalProducts}</div>
          <p className="text-xs text-muted-foreground">+10 new products this month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Stock Value</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₹{totalStockValue.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">+5.2% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Sales Forecast</CardTitle>
          <Percent className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{averageSalesPercentage.toFixed(1)}%</div>
          <p className="text-xs text-muted-foreground">+1.1% from last quarter</p>
        </CardContent>
      </Card>
    </div>
  )
}
