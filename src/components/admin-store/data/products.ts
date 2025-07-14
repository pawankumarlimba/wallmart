
/*export interface Product {
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
]*/

export interface Product {
   warehouseId: string;
  message: string;
  skuForecasts: {
    sku: string;
    stockKeepingUnit:string;
    price: {
    amount: number
    currency: string
  }
    forecast: number[];
  }[];
}


export const products = [
  {
    warehouseId: "warehouse1",
    message: "Forecast using Prophet model",
    skuForecasts: [
      { sku: "SKU-W1-001", stockKeepingUnit: "25", price: { amount: 120, currency: "INR" }, forecast: [98.5, 102.2, 97.9] },
      { sku: "SKU-W1-002", stockKeepingUnit: "3",  price: { amount: 150, currency: "INR" }, forecast: [45.1, 49.3, 52.0] },
      { sku: "SKU-W1-003", stockKeepingUnit: "14", price: { amount: 200, currency: "INR" }, forecast: [80.0, 83.5, 77.2] },
      { sku: "SKU-W1-004", stockKeepingUnit: "0",  price: { amount: 95,  currency: "INR" }, forecast: [61.2, 66.0, 59.8] },
      { sku: "SKU-W1-005", stockKeepingUnit: "6",  price: { amount: 175, currency: "INR" }, forecast: [33.4, 36.7, 39.1] },
      { sku: "SKU-W1-006", stockKeepingUnit: "19", price: { amount: 220, currency: "INR" }, forecast: [72.1, 75.3, 70.6] },
      { sku: "SKU-W1-007", stockKeepingUnit: "1",  price: { amount: 90,  currency: "INR" }, forecast: [48.8, 52.0, 50.5] },
      { sku: "SKU-W1-008", stockKeepingUnit: "12", price: { amount: 130, currency: "INR" }, forecast: [66.6, 70.4, 69.2] },
      { sku: "SKU-W1-009", stockKeepingUnit: "0",  price: { amount: 110, currency: "INR" }, forecast: [54.3, 58.1, 56.0] },
      { sku: "SKU-W1-010", stockKeepingUnit: "20", price: { amount: 140, currency: "INR" }, forecast: [91.5, 95.0, 92.2] },
    ],
  },
  {
    warehouseId: "warehouse2",
    message: "Forecast using Prophet model",
    skuForecasts: [
      { sku: "SKU-W2-001", stockKeepingUnit: "18", price: { amount: 100, currency: "INR" }, forecast: [85.0, 87.5, 83.9] },
      { sku: "SKU-W2-002", stockKeepingUnit: "7",  price: { amount: 160, currency: "INR" }, forecast: [47.6, 50.2, 46.1] },
      { sku: "SKU-W2-003", stockKeepingUnit: "16", price: { amount: 190, currency: "INR" }, forecast: [75.3, 78.0, 73.4] },
      { sku: "SKU-W2-004", stockKeepingUnit: "5",  price: { amount: 210, currency: "INR" }, forecast: [65.1, 67.9, 64.2] },
      { sku: "SKU-W2-005", stockKeepingUnit: "0",  price: { amount: 180, currency: "INR" }, forecast: [39.9, 42.5, 40.1] },
      { sku: "SKU-W2-006", stockKeepingUnit: "13", price: { amount: 135, currency: "INR" }, forecast: [70.2, 73.8, 69.4] },
      { sku: "SKU-W2-007", stockKeepingUnit: "2",  price: { amount: 115, currency: "INR" }, forecast: [50.0, 53.3, 51.6] },
      { sku: "SKU-W2-008", stockKeepingUnit: "11", price: { amount: 145, currency: "INR" }, forecast: [62.7, 65.0, 63.2] },
      { sku: "SKU-W2-009", stockKeepingUnit: "0",  price: { amount: 155, currency: "INR" }, forecast: [58.3, 60.9, 57.1] },
      { sku: "SKU-W2-010", stockKeepingUnit: "21", price: { amount: 125, currency: "INR" }, forecast: [89.1, 92.0, 88.7] },
    ],
  },
  {
    warehouseId: "warehouse3",
    message: "Forecast using Prophet model",
    skuForecasts: [
      { sku: "SKU-W3-001", stockKeepingUnit: "23", price: { amount: 130, currency: "INR" }, forecast: [92.0, 95.3, 90.1] },
      { sku: "SKU-W3-002", stockKeepingUnit: "4",  price: { amount: 170, currency: "INR" }, forecast: [52.6, 56.0, 53.9] },
      { sku: "SKU-W3-003", stockKeepingUnit: "0",  price: { amount: 200, currency: "INR" }, forecast: [81.5, 84.7, 80.0] },
      { sku: "SKU-W3-004", stockKeepingUnit: "17", price: { amount: 90,  currency: "INR" }, forecast: [68.2, 70.9, 67.0] },
      { sku: "SKU-W3-005", stockKeepingUnit: "8",  price: { amount: 160, currency: "INR" }, forecast: [41.3, 43.5, 40.8] },
      { sku: "SKU-W3-006", stockKeepingUnit: "19", price: { amount: 140, currency: "INR" }, forecast: [73.0, 76.4, 72.2] },
      { sku: "SKU-W3-007", stockKeepingUnit: "6",  price: { amount: 110, currency: "INR" }, forecast: [53.7, 57.0, 54.8] },
      { sku: "SKU-W3-008", stockKeepingUnit: "0",  price: { amount: 120, currency: "INR" }, forecast: [64.4, 67.1, 63.3] },
      { sku: "SKU-W3-009", stockKeepingUnit: "10", price: { amount: 105, currency: "INR" }, forecast: [59.9, 62.5, 60.7] },
      { sku: "SKU-W3-010", stockKeepingUnit: "22", price: { amount: 150, currency: "INR" }, forecast: [87.0, 90.2, 85.6] },
    ],
  },
];
