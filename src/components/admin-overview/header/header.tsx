"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

type HeaderProps = {
  selectedWarehouse: string
  onWarehouseChange: (value: string) => void
}

export function Header({ selectedWarehouse, onWarehouseChange }: HeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Overview Section</h1>
        <p className="text-muted-foreground">Create, manage, and track your email newsletters</p>
      </div>
      <Select onValueChange={onWarehouseChange} value={selectedWarehouse}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="WareHouse" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="warehouse1">Warehouse 1</SelectItem>
          <SelectItem value="warehouse2">Warehouse 2</SelectItem>
          <SelectItem value="warehouse3">Warehouse 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
