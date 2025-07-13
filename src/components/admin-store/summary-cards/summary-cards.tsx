import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Package, Percent } from "lucide-react"
import { Product } from "../data/products"


interface SummaryCardsProps {
  products: Product[]
}

export function SummaryCards({ products }: SummaryCardsProps) {
  const totalProducts = products.length
 const totalStockValue = products.reduce(
  (sum, product) => sum + Number(product.stockKeepingUnit) * product.price.amount,
  0
);

  const averageSalesPercentage = products.reduce((sum, product) => sum + product.salesPercentage, 0) / totalProducts

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
          <div className="text-2xl font-bold">${totalStockValue.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">+5.2% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Sales Percentage</CardTitle>
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
