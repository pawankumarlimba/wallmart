"use client"

import { requestRefillDecision } from "@/lib/requestRefillDecision"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface AlertItem {
  warehouse: string
  sku: string
  stock: number
  forecast: number[]
  status: "low" | "out"
}

export default function AlertsPanel() {
  const [alerts, setAlerts] = useState<AlertItem[]>([])
  const [refillAdvice, setRefillAdvice] = useState<{ [sku: string]: string }>({})

  useEffect(() => {
    const fetchAlerts = async () => {
      const res = await fetch("/api/inventory/alerts")
      const data = await res.json()
      setAlerts(data.alerts || [])
    }
    fetchAlerts()
  }, [])

  const handleAskAI = async (sku: string, stock: number, forecast: number[]) => {
    const reply = await requestRefillDecision(sku, stock, forecast)
    console.log(reply)
    setRefillAdvice((prev) => ({ ...prev, [sku]: reply }))
  }

  return (
    <Card className="w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span role="img" aria-label="package">
            📦
          </span>{" "}
          Stock Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        {alerts.length === 0 ? (
          <p className="text-center text-muted-foreground py-4">✅ All products are sufficiently stocked.</p>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>SKU</TableHead>
                  <TableHead>Warehouse</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Forecast (Next 30 Days)</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alerts.map((a) => (
                  <TableRow key={a.sku}>
                    <TableCell className="font-medium">{a.sku}</TableCell>
                    <TableCell>{a.warehouse}</TableCell>
                    <TableCell>{a.stock}</TableCell>
                    <TableCell>{a.forecast.join(", ")}</TableCell>
                    <TableCell>
                      <Badge variant={a.status === "out" ? "destructive" : "secondary"}>

                        {a.status === "out" ? "Out of Stock" : "Low Stock"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleAskAI(a.sku, a.stock, a.forecast)}
                        disabled={!!refillAdvice[a.sku]}
                      >
                        {refillAdvice[a.sku] ? "AI Suggested" : "Ask AI"}
                      </Button>
                      {refillAdvice[a.sku] && (
                        <p className="mt-2 text-xs text-green-700 dark:text-green-400">{refillAdvice[a.sku]}</p>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
