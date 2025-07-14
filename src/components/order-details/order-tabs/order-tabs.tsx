"use client"


import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Package, Clock, CheckCircle, Truck, XCircle } from "lucide-react"

import { Order } from "@/app/(dashboard-root)/order-details/data/order"
import { OrderTable } from "../order-table/order-table"


interface OrderTabsProps {
  orders: Order[]
  activeTab: string
  onTabChange: (value: string) => void
}

export function OrderTabs({ orders, activeTab, onTabChange }: OrderTabsProps) {
  const getFilteredOrders = () => {
    if (activeTab === "all") return orders
    return orders.filter((item) => item.status === activeTab)
  }

  const filteredOrders = getFilteredOrders()

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Product Deliveries</h2>
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search orders, customers..." className="pl-10" />
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-6 mb-6">
          <TabsTrigger value="all" className="flex items-center gap-2">
            <Package className="w-4 h-4" />
            All ({orders.length})
          </TabsTrigger>
          <TabsTrigger value="Pending" className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Pending ({orders.filter((item) => item.status === "Pending").length})
          </TabsTrigger>
          <TabsTrigger value="Delivered" className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Delivered ({orders.filter((item) => item.status === "Delivered").length})
          </TabsTrigger>
          <TabsTrigger value="Processing" className="flex items-center gap-2">
            <Package className="w-4 h-4" />
            Processing ({orders.filter((item) => item.status === "Processing").length})
          </TabsTrigger>
          <TabsTrigger value="Shipped" className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            Shipped ({orders.filter((item) => item.status === "Shipped").length})
          </TabsTrigger>
          <TabsTrigger value="Cancelled" className="flex items-center gap-2">
            <XCircle className="w-4 h-4" />
            Cancelled ({orders.filter((item) => item.status === "Cancelled").length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <OrderTable orders={filteredOrders} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
