"use client"
import React, { useEffect, useState } from 'react'
import { requestDataArray, RequestType } from './data'

import { FiSearch } from 'react-icons/fi'
import RequestItem from '@/components/admin-feedback/admin-feedback'
import { Header } from '@/components/admin-feedback/header/header'
import { toast } from "react-toastify";
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import axios from 'axios'
import LoginNow from '@/components/admin/login/page'

const filteredfeedback = (type: RequestType, searchQuery: string) => {
  let filteredProjects = requestDataArray;


  if (type !== "All") {
    filteredProjects = filteredProjects.filter((project) => project.type === type);
  }

  if (searchQuery) {
    filteredProjects = filteredProjects.filter((project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return filteredProjects;
};





export default function AdminFeedbacks() {
   const [activeFilter, setActiveFilter] = useState<RequestType>("All");
      const [searchQuery, setSearchQuery] = useState("");
      const [allChecked, setAllChecked] = useState(false);
      const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
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
        window.location.replace('/admin-feedback');
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




    const filters: { label: string; value: RequestType }[] = [
      { label: "All", value: "All" },
        { label: "Feature Request", value: "Feature Request" },
        { label: "Bug Report", value: "Bug Report" },
        { label: "Idea", value: "Idea" },
        { label: "Archive", value: "Archive" },
      ];

      const handleSelectAll = () => {
        setAllChecked(!allChecked);
        if (!allChecked) {
          const allItemsChecked = requestDataArray.reduce((acc, item) => {
            acc[item.id] = true; // Set all checkboxes to true
            return acc;
          }, {} as Record<number, boolean>);
          setCheckedItems(allItemsChecked);
        } else {
          setCheckedItems({});
        }
      };

      const handleCheckboxChange = (id: number) => {
        setCheckedItems((prevCheckedItems) => {
          const updatedCheckedItems = { ...prevCheckedItems, [id]: !prevCheckedItems[id] };
          return updatedCheckedItems;
        });
      };
  return (
    <div className='p-6'>
      
      <div className=' '>
        <Header/>
      <div className="flex flex-col-reverse md:flex-row  w-auto mt-4 gap-4  md:gap-0">
      <div className="flex items-center  justify-start gap-4 px-2 ">
      <div>
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
          checked={allChecked}
          onChange={handleSelectAll}
        />
      </div>
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`text-xs  px-2 py-1 rounded-full ${
              activeFilter === filter.value
                ? "text-blue-600 bg-[#3F66FB]/20 font-semibold  border-[#3F66FB]"
                : "text-gray-500"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="flex ml-auto justify-end  w-full md:w-auto gap-6  md:px-4 items-center">
      <div className="flex  gap-4 md:gap-0 flex-row w-auto ">
        <div className="relative justify-start w-[350px] md:lg-[200px] lg:w-[300px]">
          <input
            type="text"
            placeholder="Search by file"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 pl-10 w-full"
            aria-label="Search Files"
          />
          <FiSearch
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>
      </div>
      </div>
    </div>
      </div>
      <div className="space-y-4 mt-4">
      {filteredfeedback(activeFilter, searchQuery).map((item, index) => (
        <RequestItem key={index} {...item} 
        isChecked={!!checkedItems[item.id]}
        onCheckboxChange={() => handleCheckboxChange(item.id)}
        />
      ))}
    </div>
    </div>
  )
}

 