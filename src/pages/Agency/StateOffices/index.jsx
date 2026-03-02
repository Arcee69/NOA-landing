import React from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'

import Address from "../../../assets/png/addresses.png"
import Zone from "../../../assets/png/zone.png"

import SuggestionAndComplaints from '../../../components/SuggestionAndComplaints'

const StateOffices = () => {
  return (
    <div className='flex flex-col'>
        <div className='bg-[#fff] px-[100px] py-[19px] hidden lg:flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base '>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>State Office Addresses</p>
            </div>
        </div>
        <div
            className='bg-[#222222] h-[80px] mt-[80px] lg:mt-0 flex items-center justify-center'
        >
            <p className='font-mont_alt font-semibold text-[#00AA55] text-base lg:text-[24px]'>ZONAL OFFICES AND ADDRESSES</p>
        </div>
        <div className='mt-[65px] mb-[96px] mx-5 lg:mx-0'>
            <img src={Zone} alt='Address' className='w-full lg:w-[575px] mx-auto' />
        </div>
        <div
            className='bg-[#222222] h-[80px] mt-[80px] lg:mt-0 flex items-center justify-center'
        >
            <p className='font-mont_alt font-semibold text-[#00AA55] text-base lg:text-[24px]'>STATE DIRECTORATE OFFICE ADDRESSES</p>
        </div>
        <div className='mt-[21px] mb-[96px] mx-5 lg:mx-0'>
            <img src={Address} alt='Address' className='w-full lg:w-[575px] mx-auto' />
        </div>

       <SuggestionAndComplaints />

    </div>
  )
}

export default StateOffices