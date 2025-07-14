import { NextResponse } from "next/server";
import { products } from "@/components/admin-store/data/products";

export async function GET() {
  const alerts: {
    warehouse: string;
    sku: string;
    stock: number;
    forecast: number[];
    status: "low" | "out";
  }[] = [];

  for (const warehouse of products) {
    for (const item of warehouse.skuForecasts) {
      const stock = parseInt(item.stockKeepingUnit);
      if (stock === 0) {
        alerts.push({
          warehouse: warehouse.warehouseId,
          sku: item.sku,
          stock,
          forecast: item.forecast,
          status: "out",
        });
      } else if (stock < 10) {
        alerts.push({
          warehouse: warehouse.warehouseId,
          sku: item.sku,
          stock,
          forecast: item.forecast,
          status: "low",
        });
      }
    }
  }

  return NextResponse.json({ alerts });
}
