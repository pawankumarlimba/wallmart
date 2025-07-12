import { Users, BarChart, FileText, Settings } from "lucide-react";

export const adminInfoData = [
  {
    title: "Active Product",
    description: "45",
    icon: Users, 
  },
  {
    title: "Avg Performance",
    description: "45",
    icon: BarChart,
  },
  {
    title: "Product Sold",
    description: "45",
    icon: FileText,
  },
  {
    title: "Returned",
    description: "45",
    icon: Settings,
  },
];


 interface Performance {
  number: number;  
  description: string;  
}

interface Product {
  src: string;  
  review: string;  
}

export interface ProductData {
  id: string;  
  product: Product;  
  performance: Performance;  
  stock: number; 
  productPrice: string;  
}


export const productData: ProductData[] = [
  {
    id: "1",
    product: {
      src: "/AdminDashbaordStore/industry.svg",  // Example product image
      review: "5",
    },
    performance: {
      number: 33,
      description: "33k",
    },
    stock: 100,
    productPrice: "29.99",  // Price of the product
  },
  {
    id: "2",
    product: {
      src: "/AdminDashbaordStore/industry.svg",
      review: "5",
    },
    performance: {
      number: 45,
      description: "45k",
    },
    stock: 200,
    productPrice: "49.99",
  },
  {
    id: "3",
    product: {
      src: "/AdminDashbaordStore/industry.svg",
      review: "5",
    },
    performance: {
      number: 55,
      description: "55k",
    },
    stock: 150,
    productPrice:" 19.99",
  },
  {
    id: "4",
    product: {
      src: "/AdminDashbaordStore/industry.svg",
      review: "4",
    },
    performance: {
      number: 22,
      description: "22k",
    },
    stock: 50,
    productPrice: "15.99",
  },
  {
    id: "5",
    product: {
      src: "/AdminDashbaordStore/industry.svg",
      review: "5",
    },
    performance: {
      number: 60,
      description: "60k",
    },
    stock: 300,
    productPrice: "39.99",
  },
  {
    id: "6",
    product: {
      src: "/AdminDashbaordStore/industry.svg",
      review: "5",
    },
    performance: {
      number: 120,
      description: "120k",
    },
    stock: 450,
    productPrice:" 99.99",
  },
  {
    id: "7",
    product: {
      src: "/AdminDashbaordStore/industry.svg",
      review: "5",
    },
    performance: {
      number: 10,
      description: "10k",
    },
    stock: 75,
    productPrice:" 9.99",
  },
  {
    id: "8",
    product: {
      src: "/AdminDashbaordStore/industry.svg",
      review: "5",
    },
    performance: {
      number: 80,
      description: "80k",
    },
    stock: 120,
    productPrice: "24.99",
  },
  {
    id: "9",
    product: {
      src: "/AdminDashbaordStore/industry.svg",
      review: "5",
    },
    performance: {
      number: 5,
      description: "5k",
    },
    stock: 30,
    productPrice: "12.99",
  },
  {
    id: "10",
    product: {
      src: "/AdminDashbaordStore/industry.svg",
      review: "5",
    },
    performance: {
      number: 150,
      description: "150k",
    },
    stock: 600,
    productPrice:" 59.99",
  },
  {
    id: "6",
    product: {
      src: "/AdminDashbaordStore/industry.svg",
      review: "5",
    },
    performance: {
      number: 120,
      description: "120k",
    },
    stock: 450,
    productPrice:" 99.99",
  },
  {
    id: "7",
    product: {
      src: "/AdminDashbaordStore/industry.svg",
      review: "5",
    },
    performance: {
      number: 10,
      description: "10k",
    },
    stock: 75,
    productPrice:" 9.99",
  },
  {
    id: "8",
    product: {
      src: "/AdminDashbaordStore/industry.svg",
      review: "5",
    },
    performance: {
      number: 80,
      description: "80k",
    },
    stock: 120,
    productPrice: "24.99",
  },
  {
    id: "9",
    product: {
      src: "/AdminDashbaordStore/industry.svg",
      review: "5",
    },
    performance: {
      number: 5,
      description: "5k",
    },
    stock: 30,
    productPrice: "12.99",
  },
  {
    id: "10",
    product: {
      src: "/AdminDashbaordStore/industry.svg",
      review: "5",
    },
    performance: {
      number: 150,
      description: "150k",
    },
    stock: 600,
    productPrice:" 59.99",
  },
];
