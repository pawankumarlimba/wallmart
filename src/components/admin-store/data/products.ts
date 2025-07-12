import type { StaticImageData } from "next/image"

export interface Product {
  id: string
  name: string
  stock: number
  price: number
  salesPercentage: number
  image: string | StaticImageData
  status: "In Stock" | "Low Stock" | "Out of Stock"
}

export const products: Product[] = [
  {
    id: "PROD001",
    name: "Wireless Earbuds",
    stock: 150,
    price: 79.99,
    salesPercentage: 12.5,
    image: "/placeholder.svg?height=64&width=64",
    status: "In Stock",
  },
  {
    id: "PROD002",
    name: "Smartwatch",
    stock: 80,
    price: 199.99,
    salesPercentage: 8.2,
    image: "/placeholder.svg?height=64&width=64",
    status: "In Stock",
  },
  {
    id: "PROD003",
    name: "Portable Bluetooth Speaker",
    stock: 200,
    price: 49.99,
    salesPercentage: 15.0,
    image: "/placeholder.svg?height=64&width=64",
    status: "In Stock",
  },
  {
    id: "PROD004",
    name: "USB-C Hub",
    stock: 10, // Changed to demonstrate 'Low Stock'
    price: 29.99,
    salesPercentage: 5.1,
    image: "/placeholder.svg?height=64&width=64",
    status: "Low Stock",
  },
  {
    id: "PROD005",
    name: "Gaming Mouse",
    stock: 0, // Changed to demonstrate 'Out of Stock'
    price: 59.99,
    salesPercentage: 9.8,
    image: "/placeholder.svg?height=64&width=64",
    status: "Out of Stock",
  },
]
