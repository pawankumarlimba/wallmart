"use client"
import { useEffect, useState } from "react";
import TopicDistributionChart from "./bar-chart/bar-chart";
import { GraphChart } from "./graph-chart/graph-chart";
import { Header } from "./header/header";
import { MetricsCards } from "./metrics-card/metrics-card";
import { PiChart } from "./pi-chart/pi-chart";
import LoginNow from "../admin/login/page";
import { toast } from "react-toastify";
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import axios from 'axios'

export default function Overview() {
 
const [selectedWarehouse, setSelectedWarehouse] = useState("warehouse1")
const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  useEffect(() => {
    const logintoken = localStorage.getItem('token');
    if (logintoken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    console.log("Calling API for:", selectedWarehouse)
  }, [selectedWarehouse])

   const handleLogin = async (data:{ email: string; password: string }) => {
    try {
      const response = await axios.post('/api/admin/login', data);
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem('token', response.data.user.accessToken);
        window.location.replace('/');
      } else {
        toast.error(response.data.error || 'An error occurred');
      }
    }  catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.error || 'An error occurred');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    }
  };
   if (!isLoggedIn) {
    return (
      <Dialog open={true}>
        <DialogContent className='max-w-[350px] md:max-w-[400px] rounded-2xl'>
          <DialogTitle>
            <LoginNow onRegister={handleLogin} />
          </DialogTitle>
        </DialogContent>
      </Dialog>
    );
  }

    
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Header
        selectedWarehouse={selectedWarehouse}
        onWarehouseChange={setSelectedWarehouse}
      />
       <MetricsCards />
        
          {/* Today and Stay Duration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PiChart/>
             <GraphChart/>
            
          </div>
          <div className="space-y-6">
           <TopicDistributionChart/>
        </div>
      </div>
    </div>
  )
}
