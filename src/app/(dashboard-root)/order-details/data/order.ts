export interface Order {
  OrderId: string
  customer: string
  customerEmail: string
  status: "Delivered" | "Pending" | "Processing" | "Shipped" | "Cancelled"
  orderDate: Date
  deliveryDate: Date | null
  totalAmount: number  
  customerId: string
}

export const ordersData: Order[] = [
  {
    OrderId: "ORD-001",
    customer: "John Smith",
    customerEmail: "john@example.com",
    status: "Delivered",
    orderDate: new Date("2024-01-15"),
    deliveryDate: new Date("2024-01-18"),
    totalAmount: 299.99,
    customerId: "CUST-001",
  },
  {
    OrderId: "ORD-002",
    customer: "Sarah Johnson",
    customerEmail: "sarah@example.com",
    status: "Pending",
    orderDate: new Date("2024-01-16"),
    deliveryDate: null,
    totalAmount: 199.99,
    customerId: "CUST-002",
  },
  {
    OrderId: "ORD-003",
    customer: "Mike Davis",
    customerEmail: "mike@example.com",
    status: "Processing",
    orderDate: new Date("2024-01-17"),
    deliveryDate: null,
    totalAmount: 89.99,
    customerId: "CUST-003",
  },
  {
    OrderId: "ORD-004",
    customer: "Emily Wilson",
    customerEmail: "emily@example.com",
    status: "Shipped",
    orderDate: new Date("2024-01-14"),
    deliveryDate: null,
    totalAmount: 149.99,
    customerId: "CUST-004",
  },
  {
    OrderId: "ORD-005",
    customer: "David Brown",
    customerEmail: "david@example.com",
    status: "Cancelled",
    orderDate: new Date("2024-01-13"),
    deliveryDate: null,
    totalAmount: 29.99,
    customerId: "CUST-005",
  },
  {
    OrderId: "ORD-006",
    customer: "Lisa Anderson",
    customerEmail: "lisa@example.com",
    status: "Delivered",
    orderDate: new Date("2024-01-12"),
    deliveryDate: new Date("2024-01-16"),
    totalAmount: 79.99,
    customerId: "CUST-006",
  },
  {
    OrderId: "ORD-007",
    customer: "Tom Wilson",
    customerEmail: "tom@example.com",
    status: "Pending",
    orderDate: new Date("2024-01-18"),
    deliveryDate: null,
    totalAmount: 19.99,
    customerId: "CUST-007",
  },
  {
    OrderId: "ORD-008",
    customer: "Anna Taylor",
    customerEmail: "anna@example.com",
    status: "Shipped",
    orderDate: new Date("2024-01-16"),
    deliveryDate: null,
    totalAmount: 59.99,
    customerId: "CUST-008",
  },
]

