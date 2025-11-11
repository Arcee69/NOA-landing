import React from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'

import PicA from "../../../assets/png/picA.png"
import PicB from "../../../assets/png/picB.png"
import PicC from "../../../assets/png/picC.png"
import PicD from "../../../assets/png/picD.png"
import User from "../../../assets/png/user.png"
import Chain from "../../../assets/png/chain.png"
import Suggestion from "../../../assets/png/suggestion.png"

import CallB from "../../../assets/svg/call.svg"
import Time from "../../../assets/svg/time.svg"
import Mail from "../../../assets/svg/mail.svg"
import { useLocation, useNavigate } from 'react-router-dom'
import DOMPurify from 'dompurify';

const NewsDetails = () => {

    const { state } = useLocation()
    console.log(state, 'alubarika')

    const navigate = useNavigate()

    const sanitizedContent = DOMPurify.sanitize(state?.body);

  return (
    <div className='flex flex-col'>
        <div className='bg-[#fff] px-[100px] py-[19px] hidden lg:flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base '>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja cursor-pointer' onClick={() => navigate("/news")}>News</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>Details</p>
            </div>
        </div>

        <div className='flex flex-col gap-1 px-5 mt-20 lg:mt-0 lg:px-[100px]'>
            <div className='flex flex-col gap-1'>
                <p className='text-[#222222] font-mont_alt font-bold text-[24px] lg:text-[40px]'>NOA NEWS</p>
                <img src={Chain} alt='Chain' className='w-[54px] ' />
            </div>

            <div className='flex flex-col lg:flex-row gap-5 mt-[40px]'>
                <img src={state?.image} alt='News Image' className='w-[400px]'/>
                <div className='flex flex-col gap-5'>
                    <p className='text-[#222222] font-mont_alt font-bold text-[24px]'>{state?.title}</p>
                    <div
                        className="text-[#222222] font-mont_alt font-medium text-[16px]"
                        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                    />
                    {/* <p className='text-[#222222] font-mont_alt font-medium text-[16px]'>{state?.body}</p> */}
                </div>
            </div>
        </div>

        <div
        style={{ background: `url(${Suggestion})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"  }}
        className='lg:h-[512px] w-full flex py-10 lg:py-0 items-center gap-[20px] lg:gap-[45px] justify-center flex-col mt-[100px]'
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

export default NewsDetails