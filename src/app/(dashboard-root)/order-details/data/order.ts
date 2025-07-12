export interface Order {
  id: string
  productName: string
  customer: string
  customerEmail: string
  status: "delivered" | "pending" | "processing" | "shipped" | "cancelled"
  orderDate: string
  deliveryDate: string
  amount: string
  trackingNumber: string
}

export const ordersData: Order[] = [
  {
    id: "ORD-001",
    productName: "Wireless Headphones",
    customer: "John Smith",
    customerEmail: "john@example.com",
    status: "delivered",
    orderDate: "2024-01-15",
    deliveryDate: "2024-01-18",
    amount: "$299.99",
    trackingNumber: "TRK123456789",
  },
  {
    id: "ORD-002",
    productName: "Smart Watch",
    customer: "Sarah Johnson",
    customerEmail: "sarah@example.com",
    status: "pending",
    orderDate: "2024-01-16",
    deliveryDate: "2024-01-20",
    amount: "$199.99",
    trackingNumber: "TRK987654321",
  },
  {
    id: "ORD-003",
    productName: "Laptop Stand",
    customer: "Mike Davis",
    customerEmail: "mike@example.com",
    status: "processing",
    orderDate: "2024-01-17",
    deliveryDate: "2024-01-22",
    amount: "$89.99",
    trackingNumber: "TRK456789123",
  },
  {
    id: "ORD-004",
    productName: "Bluetooth Speaker",
    customer: "Emily Wilson",
    customerEmail: "emily@example.com",
    status: "shipped",
    orderDate: "2024-01-14",
    deliveryDate: "2024-01-19",
    amount: "$149.99",
    trackingNumber: "TRK789123456",
  },
  {
    id: "ORD-005",
    productName: "Phone Case",
    customer: "David Brown",
    customerEmail: "david@example.com",
    status: "cancelled",
    orderDate: "2024-01-13",
    deliveryDate: "-",
    amount: "$29.99",
    trackingNumber: "-",
  },
  {
    id: "ORD-006",
    productName: "Gaming Mouse",
    customer: "Lisa Anderson",
    customerEmail: "lisa@example.com",
    status: "delivered",
    orderDate: "2024-01-12",
    deliveryDate: "2024-01-16",
    amount: "$79.99",
    trackingNumber: "TRK321654987",
  },
  {
    id: "ORD-007",
    productName: "USB-C Cable",
    customer: "Tom Wilson",
    customerEmail: "tom@example.com",
    status: "pending",
    orderDate: "2024-01-18",
    deliveryDate: "2024-01-23",
    amount: "$19.99",
    trackingNumber: "TRK654987321",
  },
  {
    id: "ORD-008",
    productName: "Wireless Charger",
    customer: "Anna Taylor",
    customerEmail: "anna@example.com",
    status: "shipped",
    orderDate: "2024-01-16",
    deliveryDate: "2024-01-21",
    amount: "$59.99",
    trackingNumber: "TRK147258369",
  },
]
