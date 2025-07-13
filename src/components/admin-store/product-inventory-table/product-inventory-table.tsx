"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { products as initialProducts } from "../data/products"

interface ProductInventoryTableProps {
  warehouseId: string;
  products: {
    sku: string;
    stockKeepingUnit: string;
    price: {
      amount: number;
      currency: string;
    };
    salesPercentage: number;
    forecast: number[];
  }[];
}


export function ProductInventoryTable({ warehouseId }: ProductInventoryTableProps) {
  const [localProducts, setLocalProducts] = useState(initialProducts)
  const [editSku, setEditSku] = useState<string | null>(null)
  const [editedForecast, setEditedForecast] = useState<number[]>([0, 0, 0])
  const [editedStockUnit, setEditedStockUnit] = useState<string>("")

  const warehouseData = localProducts.find((w) => w.warehouseId === warehouseId)
  if (!warehouseData) return <p className="text-center text-gray-500">No data found for {warehouseId}</p>

  const handleEditOpen = (sku: string, forecast: number[], stock: string) => {
    setEditSku(sku)
    setEditedForecast([...forecast])
    setEditedStockUnit(stock)
  }

  const handleEditSave = () => {
    const updated = localProducts.map((warehouse) => {
      if (warehouse.warehouseId === warehouseId) {
        return {
          ...warehouse,
          skuForecasts: warehouse.skuForecasts.map((skuItem) =>
            skuItem.sku === editSku
              ? {
                  ...skuItem,
                  forecast: editedForecast,
                  stockKeepingUnit: editedStockUnit,
                }
              : skuItem
          ),
        }
      }
      return warehouse
    })

    setLocalProducts(updated)
    setEditSku(null)
  }

  const handleDelete = (sku: string) => {
    const updated = localProducts.map((warehouse) => {
      if (warehouse.warehouseId === warehouseId) {
        return {
          ...warehouse,
          skuForecasts: warehouse.skuForecasts.filter((skuItem) => skuItem.sku !== sku),
        }
      }
      return warehouse
    })

    setLocalProducts(updated)
  }

  return (
    <>
      <Card className="mt-6">
        <CardHeader className="px-7">
          <CardTitle>Product Inventory - {warehouseId.toUpperCase()}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SKU</TableHead>
                <TableHead>Stock Unit</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="hidden md:table-cell">1st Month</TableHead>
                <TableHead className="hidden md:table-cell">2nd Month</TableHead>
                <TableHead className="hidden md:table-cell">last Month</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
             {warehouseData.skuForecasts.map((skuItem) => {
  const stock = Number(skuItem.stockKeepingUnit)

  const status =
    stock === 0 ? "Out of Stock" : stock <= 30 ? "Low Stock" : "In Stock"

  const variant =
    status === "In Stock"
      ? "default"
      : status === "Low Stock"
      ? "destructive"
      : "outline"


                return (
                  <TableRow key={skuItem.sku}>
                    <TableCell>{skuItem.sku}</TableCell>
                    <TableCell>{skuItem.stockKeepingUnit}</TableCell>
                    <TableCell>
                      ₹{skuItem.price.amount} {skuItem.price.currency}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{skuItem.forecast[0]}</TableCell>
                    <TableCell className="hidden md:table-cell">{skuItem.forecast[1]}</TableCell>
                    <TableCell className="hidden md:table-cell">{skuItem.forecast[2]}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Badge variant={variant}>{status}</Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="ghost">
                              <TrendingUp className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                              onClick={() =>
                                handleEditOpen(
                                  skuItem.sku,
                                  skuItem.forecast,
                                  skuItem.stockKeepingUnit
                                )
                              }
                            >
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDelete(skuItem.sku)}>
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={!!editSku} onOpenChange={() => setEditSku(null)}>
        <DialogContent className="max-w-md">
          <DialogTitle>Edit SKU</DialogTitle>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Stock Unit"
              value={editedStockUnit}
              onChange={(e) => setEditedStockUnit(e.target.value)}
            />
            {editedForecast.map((val, i) => (
              <Input
                key={i}
                type="number"
                placeholder={`Forecast ${i + 1}`}
                value={val}
                onChange={(e) => {
                  const updated = [...editedForecast]
                  updated[i] = Number(e.target.value)
                  setEditedForecast(updated)
                }}
              />
            ))}
            <Button onClick={handleEditSave} className="w-full">
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
