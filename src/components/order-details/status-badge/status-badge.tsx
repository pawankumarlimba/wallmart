import { Order } from "@/app/(dashboard-root)/order-details/data/order"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Package, Truck, XCircle } from "lucide-react"


interface StatusBadgeProps {
  status: Order["status"]
}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
    case "Delivered":
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          <CheckCircle className="w-3 h-3 mr-1" />
          Delivered
        </Badge>
      )
    case "Pending":
      return (
        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
          <Clock className="w-3 h-3 mr-1" />
          Pending
        </Badge>
      )
    case "Processing":
      return (
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
          <Package className="w-3 h-3 mr-1" />
          Processing
        </Badge>
      )
    case "Shipped":
      return (
        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
          <Truck className="w-3 h-3 mr-1" />
          Shipped
        </Badge>
      )
    case "Cancelled":
      return (
        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
          <XCircle className="w-3 h-3 mr-1" />
          Cancelled
        </Badge>
      )
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}
