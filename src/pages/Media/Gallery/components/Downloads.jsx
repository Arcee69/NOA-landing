import React from 'react'

import Chain from "../../../../assets/png/chain.png"

import Download from "../../../../assets/svg/download.svg"


const Downloads = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-1'>
        <p className='text-[#222222] font-mont_alt font-bold text-[40px]'>Download</p>
        <img src={Chain} alt='Chain' className='w-[54px] ' />
      </div>

      <div className='flex flex-wrap  lg:grid lg:grid-cols-2 gap-[30px] mt-[50px]'>
        <div className='w-full lg:w-[505px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
            <p className='text-[#fff] font-mont_alt text-base '>NOA 2023 Budget</p>
            <img src={Download} alt='Download' className='w-6 h-6' /> 
        </div>
        <div className='w-full lg:w-[505px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
            <p className='text-[#fff] font-mont_alt text-base '>Capital Project Release 2022</p>
            <img src={Download} alt='Download' className='w-6 h-6' /> 
        </div>
        <div className='w-full lg:w-[505px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
            <p className='text-[#fff] font-mont_alt text-base '>2022 FOI Annual Budget</p>
            <img src={Download} alt='Download' className='w-6 h-6' /> 
        </div>
        <div className='w-full lg:w-[505px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
            <p className='text-[#fff] font-mont_alt text-base '>2022 Procurement Plan</p>
            <img src={Download} alt='Download' className='w-6 h-6' /> 
        </div>
        <div className='w-full lg:w-[505px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
            <p className='text-[#fff] font-mont_alt text-base '>2021 Procurement Plan</p>
            <img src={Download} alt='Download' className='w-6 h-6' /> 
        </div>
        <div className='w-full lg:w-[505px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
            <p className='text-[#fff] font-mont_alt text-base '>MGt Report on Finanacial Sidelines 2028</p>
            <img src={Download} alt='Download' className='w-6 h-6' /> 
        </div>
        <div className='w-full lg:w-[505px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
            <p className='text-[#fff] font-mont_alt text-base '>2023 Procurement Plan</p>
            <img src={Download} alt='Download' className='w-6 h-6' /> 
        </div>
        <div className='w-full lg:w-[505px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
            <p className='text-[#fff] font-mont_alt text-base '>Voter Education towards the 2023 General Election</p>
            <img src={Download} alt='Download' className='w-6 h-6' /> 
        </div>
        <div className='w-full lg:w-[505px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
            <p className='text-[#fff] font-mont_alt text-base '>Summary of 2021 Contract Awards</p>
            <img src={Download} alt='Download' className='w-6 h-6' /> 
        </div>
        <div className='w-full lg:w-[505px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
            <p className='text-[#fff] font-mont_alt text-base '>Financial Statements for 2018</p>
            <img src={Download} alt='Download' className='w-6 h-6' /> 
        </div>

            </div>


    </div>
  )
}

export default Downloads