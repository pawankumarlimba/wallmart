"use client"

import { ordersData } from "@/app/(dashboard-root)/order-details/data/order"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { StatsCards } from "./stats-cards/stats-cards"
import { OrderTabs } from "./order-tabs/order-tabs"
import { Header } from "./header/header"


export default function OrderDetails() {
  const [activeTab, setActiveTab] = useState("all")

  // Filter data based on active tab for stats
  const getFilteredData = () => {
    if (activeTab === "all") return ordersData
    return ordersData.filter((item) => item.status === activeTab)
  }

  const filteredData = getFilteredData()

  return (
    <div className="min-h-screen bg-gray-50">

      
      <div className="p-6 space-y-2">
        <Header/>
        <div className="mb-4">
        <StatsCards orders={filteredData} />
        </div>
        <Card>
          <CardContent className="p-6">
            <OrderTabs orders={ordersData} activeTab={activeTab} onTabChange={setActiveTab} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
