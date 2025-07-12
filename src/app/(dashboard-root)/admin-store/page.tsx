"use client"
import React from 'react'
import { Box,ChartLine,ShoppingBag , Pencil,Eye,EyeOff} from 'lucide-react';
import {ProductData, productData } from './data'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Switch } from '@/components/ui/switch'
import Image from 'next/image';
import { Header } from './header/header';

export const columns: ColumnDef<ProductData>[] = [
  {
    accessorKey: "product", 
    header: "Product",
    cell: ({ row }) => {
      const product = row.getValue("product") as { src: string; review: string }; // Explicitly type the product
      return (
        <div className="flex items-center space-x-4">
          <Image width={40} height={40} src={product.src} alt="Product Image" className="h-12 w-12" />
          <h1 className='text-[626262] text-[15px]'>Review <span>{product.review}★</span></h1>
        </div>
      );
    },
  },
  {
    accessorKey: "performance", 
    header: "Performance",
    cell: ({ row }) => {
      const performance = row.getValue("performance") as {number:number, description: string }; 
      return (
        <div className='flex gap-4'>
      <div className='flex gap-1 items-center'>
        <ChartLine className='text-[B5B5B5]'/>
        {performance.number}</div>
        <div className='flex gap-1 items-center'>
        <ShoppingBag className='text-[B5B5B5]'/>
        {performance.description}</div>
      </div>)
    },
  },
  {
    accessorKey: "productPrice", // Direct access to product price
    header: "Product Price",
    cell: ({ row }) => {
      const productPrice = row.getValue("productPrice"); // Ensure it's a number
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(Number(productPrice)); // Explicitly cast to Number
      return <div className=" font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "stock", // Direct access to stock
    header: "Stock",
    cell: ({ row }) => <div className='flex gap-2 items-center'><Box /> 
            {row.getValue("stock")}
    </div>,
  },
  {
    accessorKey: "visibility", // Placeholder for visibility toggle
    header: "Visibility",
    cell: ({ row }) => (
      <div>
        <Switch id={`visibility-${row.id}`} /> {/* Unique ID for each switch */}
      </div>
    ),
  },
  
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const [isVisible, setIsVisible] = React.useState(true); // State for each row's Eye toggle
  
      return (
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="h-8 w-8 p-0">
            <Pencil />
          </Button>
  
          {/* Eye/EyeOff toggle */}
          <Button
            variant="ghost"
            className="h-8 w-8 p-0"
            onClick={() => setIsVisible(!isVisible)} // Toggle visibility state
          >
            {isVisible ? <Eye /> : <EyeOff />} {/* Conditionally render icon */}
          </Button>
  
          {/* Dropdown for more actions */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(row.original.id)}
              >
                Copy product ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View product</DropdownMenuItem>
              <DropdownMenuItem>View details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  }
]

export default function AdminStore() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data: productData, // Correct data prop
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full  p-6 border-t-[1px]  flex flex-col justify-center   max-w-screen-xl mx-auto ">
      <Header/>
      <div className="rounded-md border mt-8 overflow-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between py-4">
  <Button
    onClick={() => table.previousPage()}
    disabled={!table.getCanPreviousPage()}
    className="bg-[#4353FF] hover:bg-[#4353FF] text-white px-4 py-2 rounded-lg disabled:opacity-50"
  >
    Previous
  </Button>

  <div className="flex items-center gap-2 text-gray-700 font-medium">
    <h1>
      Page {table.getState().pagination.pageIndex + 1} to {table.getPageCount()}
    </h1>
  </div>

  <Button
    onClick={() => table.nextPage()}
    disabled={!table.getCanNextPage()}
    className="bg-[#4353FF] hover:bg-[#4353FF] text-white px-4 py-2 rounded-lg disabled:opacity-50"
  >
    Next
  </Button>
</div>

    </div>
  )
}
