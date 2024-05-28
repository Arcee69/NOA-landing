import React from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'

import Suggestion from "../../../assets/png/suggestion.png"

import CallB from "../../../assets/svg/call.svg"
import Time from "../../../assets/svg/time.svg"
import Mail from "../../../assets/svg/mail.svg"

const Privacy = () => {
  return (
    <div className='flex flex-col'>

        <div className='bg-[#fff] px-[100px] py-[19px] flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base '>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>Privacy policy for Mobilizer App</p>
            </div>
        </div>

        <div 
            className='bg-[#F5F5F5] h-[450px] flex flex-col gap-[40px] py-[56px] items-center justify-center'
        >
            <p className='w-[687px] text-[#222222] leading-[44px] font-bold font-mont_alt text-[40px]'>
                Privacy policy for Mobilizer App
            </p>
            <p className='font-mont text-[18px] font-normal w-[485px] h-[196px]'>
                The main objectives of the Agency, as provided in Decree 100 of 1993, 
                are to ensure that government programmes and policies are better understood by the general public.
                <br /> <br />
                The main objectives of the Agency, as provided in Decree 100 of 1993, 
                are to ensure that government programmes and policies are better understood by the general public.
            </p>
        </div>

        <div className='bg-[#fff] w-full pt-[100px] pb-[77px] flex flex-col items-center justify-center px-[225px]'>
            <p className='text-[#5F6368] font-mont_alt font-normal leading-[32px] text-[20px] '>
                Lorem ipsum dolor sit amet consectetur. Vestibulum viverra accumsan euismod fringilla urna orci. 
                Aliquam tincidunt mattis vitae est tincidunt cras turpis. Sed turpis. 
                Lorem ipsum dolor sit amet consectetur. Vestibulum viverra accumsan euismod fringilla urna orci. 
                Aliquam tincidunt mattis vitae est tincidunt cras turpis. Sed turpis. 
                Lorem ipsum dolor sit amet consectetur. Vestibulum viverra accumsan euismod fringilla urna orci. 
                Aliquam tincidunt mattis vitae est tincidunt cras turpis. Sed turpis. 
                Lorem ipsum dolor sit amet consectetur. Vestibulum viverra accumsan euismod fringilla urna orci. 
                Aliquam tincidunt mattis vitae est tincidunt cras turpis. Sed turpis Sed turpis
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur. 
                Vestibulum viverra accumsan euismod fringilla urna orci. 
                Aliquam tincidunt mattis vitae est tincidunt cras turpis. Sed turpis. 
                Lorem ipsum dolor sit amet consectetur. Vestibulum viverra accumsan euismod fringilla urna orci. 
                Aliquam tincidunt mattis vitae est tincidunt cras turpis. Sed turpis
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur. 
                Vestibulum viverra accumsan euismod fringilla urna orci. 
                Aliquam tincidunt mattis vitae est tincidunt cras turpis. Sed turpis. 
                Lorem ipsum dolor sit amet consectetur. Vestibulum viverra accumsan euismod fringilla urna orci. 
                Aliquam tincidunt mattis vitae est tincidunt cras turpis. Sed turpis
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur. Vestibulum viverra accumsan euismod fringilla urna orci. 
                Aliquam tincidunt mattis vitae est tincidunt cras turpis. Sed turpis. 
                Lorem ipsum dolor sit amet consectetur. Vestibulum viverra accumsan euismod fringilla urna orci. 
                Aliquam tincidunt mattis vitae est tincidunt cras turpis. Sed turpis
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur. Vestibulum viverra accumsan euismod fringilla urna orci. 
                Aliquam tincidunt mattis vitae est tincidunt cras turpis. Sed turpis. 
                Lorem ipsum dolor sit amet consectetur. Vestibulum viverra accumsan euismod fringilla urna orci. 
                Aliquam tincidunt mattis vitae est tincidunt cras turpis. Sed turpis
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur. Vestibulum viverra accumsan euismod fringilla urna orci. 
                Aliquam tincidunt mattis vitae est tincidunt cras turpis. Sed turpis. 
                Lorem ipsum dolor sit amet consectetur. Vestibulum viverra accumsan euismod fringilla urna orci. 
                Aliquam tincidunt mattis vitae est tincidunt cras turpis. Sed turpis
            </p>
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

export default Privacy