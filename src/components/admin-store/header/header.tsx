"use client"

import * as React from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type ProductInput = {
  sku: string
  stockKeepingUnit: string
  priceAmount: number
  priceCurrency: string
}

type HeaderProps = {
  selectedWarehouse: string
  onWarehouseChange: (value: string) => void
  onAddProduct: (newProduct: {
    warehouseId: string
    message: string
    skuForecasts: {
      sku: string
      stockKeepingUnit: string
      price: {
        amount: number
        currency: string
      }
      forecast: number[]
    }
  }) => void
}

export function Header({ selectedWarehouse, onWarehouseChange, onAddProduct }: HeaderProps) {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = React.useState(false)
  const [formData, setFormData] = React.useState<ProductInput>({
    sku: "",
    stockKeepingUnit: "",
    priceAmount: 0,
    priceCurrency: "INR",
  })

  const handleAddProduct = () => {
    if (!formData.sku || !formData.stockKeepingUnit || !formData.priceAmount) return

    const newProduct = {
      warehouseId: selectedWarehouse,
      message: "Added via Admin Panel",
      skuForecasts: {
        sku: formData.sku,
        stockKeepingUnit: formData.stockKeepingUnit,
        price: {
          amount: formData.priceAmount,
          currency: formData.priceCurrency,
        },
        forecast: [0, 0, 0],
      },
    }

    onAddProduct(newProduct)
    setFormData({ sku: "", stockKeepingUnit: "", priceAmount: 0, priceCurrency: "INR" })
    setIsCreateDialogOpen(false)
  }

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Store Section</h1>
        <p className="text-muted-foreground">Create, manage, and track warehouse products</p>
      </div>
      <div className="flex gap-2">
        {/* Warehouse Select Section */}
        <Select onValueChange={onWarehouseChange} value={selectedWarehouse}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Warehouse" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="warehouse1">Warehouse 1</SelectItem>
            <SelectItem value="warehouse2">Warehouse 2</SelectItem>
            <SelectItem value="warehouse3">Warehouse 3</SelectItem>
          </SelectContent>
        </Select>

        {/* Add Product Dialog */}
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>Fill in the product details for the selected warehouse.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>SKU</Label>
                <Input
                  value={formData.sku}
                  onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                  placeholder="SKU-WX-001"
                />
              </div>
              <div className="grid gap-2">
                <Label>Stock Keeping Unit</Label>
                <Input
                  value={formData.stockKeepingUnit}
                  onChange={(e) => setFormData({ ...formData, stockKeepingUnit: e.target.value })}
                  placeholder="WX-ITEM-001"
                />
              </div>
              <div className="grid gap-2">
                <Label>Price Amount</Label>
                <Input
                  type="number"
                  value={formData.priceAmount}
                  onChange={(e) => setFormData({ ...formData, priceAmount: parseFloat(e.target.value) })}
                  placeholder="120"
                />
              </div>
              <div className="grid gap-2">
                <Label>Price Currency</Label>
                <Input
                  value={formData.priceCurrency}
                  onChange={(e) => setFormData({ ...formData, priceCurrency: e.target.value })}
                  placeholder="INR"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleAddProduct}>Add Product</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
