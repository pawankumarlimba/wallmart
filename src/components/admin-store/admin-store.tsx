"use client"
import { SummaryCards } from "./summary-cards/summary-cards"
import { ProductInventoryTable } from "./product-inventory-table/product-inventory-table"
import { products } from "./data/products"
import { Header } from "./header/header"



export default function AdminStore() {
  return (
    <div className="p-6 space-y-6">
    <Header/>
      <main className="flex flex-1 flex-col gap-4  md:gap-8 ">
        <SummaryCards products={products} />
        <ProductInventoryTable products={products} />
      </main>
    </div>
  )
}
