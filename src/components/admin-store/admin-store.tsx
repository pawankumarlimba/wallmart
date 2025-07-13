"use client";

import { SummaryCards } from "./summary-cards/summary-cards";
import { ProductInventoryTable } from "./product-inventory-table/product-inventory-table";
import { products as initialProducts } from "./data/products";
import { Header } from "./header/header";
import { useEffect, useState } from "react";

export default function AdminStore() {
  const [selectedWarehouseId, setSelectedWarehouseId] = useState("warehouse1");
  const [productData, setProductData] = useState(initialProducts);

  const handleAddProduct = (newProduct: {
    warehouseId: string;
    message: string;
    skuForecasts: {
      sku: string;
      stockKeepingUnit: string;
      price: {
        amount: number;
        currency: string;
      };
      forecast: number[];
    };
  }) => {
    setProductData((prev) => {
      const updated = [...prev];
      const index = updated.findIndex((p) => p.warehouseId === newProduct.warehouseId);

      if (index !== -1) {
        updated[index].skuForecasts.push(newProduct.skuForecasts);
      } else {
        updated.push({
          warehouseId: newProduct.warehouseId,
          message: newProduct.message,
          skuForecasts: [newProduct.skuForecasts],
        });
      }

      return updated;
    });
  };

  useEffect(() => {
    console.log("Calling API for:", selectedWarehouseId);
  }, [selectedWarehouseId]);

  const filteredSKUs =
    productData.find((p) => p.warehouseId === selectedWarehouseId)?.skuForecasts.map((sku) => ({
      ...sku,
      stockKeepingUnit: sku.stockKeepingUnit,
      price: sku.price,
      salesPercentage: sku.forecast.reduce((a, b) => a + b, 0) / 3, // Simple avg for demo
    })) ?? [];

  return (
    <div className="p-6 space-y-6">
      <Header
        selectedWarehouse={selectedWarehouseId}
        onWarehouseChange={setSelectedWarehouseId}
        onAddProduct={handleAddProduct}
      />
      <main className="flex flex-1 flex-col gap-4 md:gap-8">
       <SummaryCards warehouseId={selectedWarehouseId} products={productData} />

        <ProductInventoryTable warehouseId={selectedWarehouseId} products={filteredSKUs} />
      </main>
    </div>
  );
}
