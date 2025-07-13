"use client"

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
import Image from "next/image"
import { TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Product } from "../data/products"

interface ProductInventoryTableProps {
  products: Product[]
}

export function ProductInventoryTable({ products }: ProductInventoryTableProps) {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Product Inventory</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden sm:table-cell">Image</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">Sales %</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => {
              const stock = Number(product.stockKeepingUnit)
              const status =
                stock === 0 ? "Out of Stock" : stock <= 30 ? "Low Stock" : "In Stock"

              const variant =
                status === "In Stock"
                  ? "default"
                  : status === "Low Stock"
                  ? "destructive"
                  : "outline"

              return (
                <TableRow key={product.sku}>
                  <TableCell className="hidden sm:table-cell">
                    <Image
                      alt="Product image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      width="64"
                      src={product.images[0] || "/placeholder.svg"}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.stockKeepingUnit}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    ${product.price.amount.toFixed(2)} {product.price.currency}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {product.salesPercentage.toFixed(1)}%
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant={variant}>{status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <TrendingUp className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
