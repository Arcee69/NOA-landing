import React from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'

import Address from "../../../assets/png/addresses.png"
import Zone from "../../../assets/png/zone.png"
import Suggestion from "../../../assets/png/suggestion.png"

import CallB from "../../../assets/svg/call.svg"
import Time from "../../../assets/svg/time.svg"
import Mail from "../../../assets/svg/mail.svg"

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

        <div
            style={{ background: `url(${Suggestion})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"  }}
            className='lg:h-[512px] w-full flex py-10 lg:py-0 items-center gap-[20px] lg:gap-[45px] justify-center flex-col'
        >
            <p className='font-manja font-bold text-[#222222] text-[27px]'>Suggestion and Complaints</p>
            <p className='text-center font-medium font-mont_alt text-[11px] text-[#757575] w-[337px]'>
                Don't hesitate to reach us because we believe that citizens 
                should participate in driving change and development in Nigeria.
            </p>

            <div className='flex flex-col lg:flex-row items-center gap-6'>
                <div className='bg-[#fff] w-[127px] h-[150px] flex flex-col gap-5 items-center justify-center'>
                    <img src={CallB} alt='CallB' className='w-[31px] h-[31px]'/>
                    <div className='flex flex-col items-center gap-[5px]'>
                        <p className='font-manja text-[#222222] font-bold text-[13px]'>Call on</p>
                        <p className='text-[#757575] font-manja text-[11px]'>0703 738 3444</p>
                    </div>
                </div>
                <div className='bg-[#fff] w-[127px] h-[150px] flex flex-col gap-5 items-center justify-center'>
                    <img src={Mail} alt='Mail' className='w-[31px] h-[31px]'/>
                    <div className='flex flex-col items-center gap-[5px]'>
                        <p className='font-manja text-[#222222] font-bold text-[13px]'>Mail at</p>
                        <p className='text-[#757575] font-manja text-[11px]'>admin@noa.gov.ng</p>
                    </div>
                </div>
                <div className='bg-[#fff] w-[127px] h-[150px] flex flex-col gap-5 items-center justify-center'>
                    <img src={Time} alt='Time' className='w-[31px] h-[31px]'/>
                    <div className='flex flex-col items-center gap-[5px]'>
                        <p className='font-manja text-[#222222] font-bold text-[13px]'>Open hrs</p>
                        <p className='text-[#757575] font-manja text-[11px]'>8am to 4pm</p>
                    </div>
                </div>

            </div>


        </div>

    </div>
  )
}

export default StateOffices