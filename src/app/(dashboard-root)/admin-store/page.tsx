'use client'
import AdminStore from '@/components/admin-store/admin-store'
import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import axios from 'axios'
import LoginNow from '@/components/admin/login/page';
function Page() {
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
    <div>
    <AdminStore/>
    </div>
  )
}

export default Page