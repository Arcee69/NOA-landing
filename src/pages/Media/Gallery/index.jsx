import React, { useState } from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

import NigeriaFlag from "../../../assets/png/nigeria_flag.png"


import Pictures from './components/Pictures'
import Videos from './components/Videos'
import Downloads from './components/Downloads'
import SuggestionAndComplaints from '../../../components/SuggestionAndComplaints'

const Gallery = () => {
    const [activeTab, setActiveTab] = useState("Pictures")

    const handleTabChange = (value) => {
        setActiveTab(value)
    }

    const navigate = useNavigate()

  return (
    <div className='flex flex-col'>
        <div className='bg-[#fff] px-[100px] py-[19px] hidden lg:flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base cursor-pointer' onClick={() => navigate("/")}>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>Gallery</p>
            </div>
        </div>
        <div
            style={{
                background: `url(${NigeriaFlag})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className='w-full h-[212px] lg:h-[290px] mt-10 lg:mt-0 flex items-center justify-center flex-col'
        >
            <p className='w-[210px] lg:w-[558px] text-center font-manja font-bold text-[24px] lg:text-[48px] leading-[32px] lg:leading-[56px] text-[#fff]'>Welcome to the NOA Gallery</p>
        </div>

        <div className='px-5 lg:px-[100px] flex flex-col mt-[56px]'>
            <div className='w-[286px] h-[40px] flex items-center border rounded-lg'>
                <div className={`${activeTab === "Pictures" ? "bg-[#00AA55]" : "bg-[#fff]"} cursor-pointer w-[90px] px-4 py-[9px] flex items-center`} onClick={() => handleTabChange("Pictures")}>
                    <p className={`${activeTab === "Pictures" ? "text-[#fff]" : "text-[#344054]"} font-mont_alt font-medium text-sm`}>Pictures</p>
                </div>
                <div className={`${activeTab === "Videos" ? "bg-[#00AA55]" : "bg-[#fff]"} cursor-pointer w-[90px] border border-y-0 px-4 py-[9px] flex items-center`} onClick={() => handleTabChange("Videos")}>
                    <p className={`${activeTab === "Videos" ? "text-[#fff]" : "text-[#344054]"} font-mont_alt font-medium text-sm`}>Videos</p>
                </div>
                <div className={`${activeTab === "Downloads" ? "bg-[#00AA55]" : "bg-[#fff]"} cursor-pointer w-full px-4 py-[9px] flex items-center`} onClick={() => handleTabChange("Downloads")}>
                    <p className={`${activeTab === "Downloads" ? "text-[#fff]" : "text-[#344054]"} font-mont_alt font-medium text-sm`}>Downloads</p>
                </div>
            </div>

            <div className='mt-[64px]'>
                {activeTab === "Pictures" && <Pictures />}
                {activeTab === "Videos" && <Videos />}
                {activeTab === "Downloads" && <Downloads />}
            </div>

        </div>

        <SuggestionAndComplaints />

    </div>
  )
}

export default Gallery