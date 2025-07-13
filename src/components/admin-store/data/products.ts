
export interface Product {
  sku: string
  name: string
  stockKeepingUnit: string
  price: {
    amount: number
    currency: string
  }
  salesPercentage: number
  images: string[]
}

export const products: Product[] = [
  {
    sku: "PROD001",
    name: "Wireless Earbuds",
    stockKeepingUnit: "0",
    price: {
      amount: 79.99,
      currency: "USD",
    },
    salesPercentage: 12.5,
    images: ["/placeholder.svg?height=64&width=64"],
  },
  {
    sku: "PROD002",
    name: "Smartwatch",
    stockKeepingUnit: "2",
    price: {
      amount: 199.99,
      currency: "USD",
    },
    salesPercentage: 8.2,
    images: ["/placeholder.svg?height=64&width=64"],
  },
  {
    sku: "3000",
    name: "Portable Bluetooth Speaker",
    stockKeepingUnit: "3",
    price: {
      amount: 49.99,
      currency: "USD",
    },
    salesPercentage: 15.0,
    images: ["/placeholder.svg?height=64&width=64"],
  },
  {
    sku: "40",
    name: "USB-C Hub",
    stockKeepingUnit: "PROD004",
    price: {
      amount: 29.99,
      currency: "USD",
    },
    salesPercentage: 5.1,
    images: ["/placeholder.svg?height=64&width=64"],
  },
  {
    sku: "50",
    name: "Gaming Mouse",
    stockKeepingUnit: "PROD005",
    price: {
      amount: 59.99,
      currency: "USD",
    },
    salesPercentage: 9.8,
    images: ["/placeholder.svg?height=64&width=64"],
  },
]

