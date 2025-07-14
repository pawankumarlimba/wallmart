'use client'
import AlertsPanel from "@/components/alert-panal/alert-panal";
import { Header } from "./header/header";
import { toast } from "react-toastify";
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import axios from 'axios'
import LoginNow from '@/components/admin/login/page';
import { useEffect, useState } from "react";

export default function HomePage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  useEffect(() => {
    const logintoken = localStorage.getItem('token');
    //console.log(logintoken);
    if (logintoken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [])

   const handleLogin = async (data:{ email: string; password: string }) => {
    try {
      const response = await axios.post('/api/admin/login', data);
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem('token', response.data.user.accessToken);
        window.location.replace('/admin-store');
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
    <main  className=" P-6">
       <div className="max-w-7xl mx-auto space-y-8">
      <Header/>
      <AlertsPanel />
      </div>
    </main>
  )
}
