import React from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'
import DOMPurify from 'dompurify';

import PicA from "../../../assets/png/picA.png"
import PicB from "../../../assets/png/picB.png"
import PicC from "../../../assets/png/picC.png"
import PicD from "../../../assets/png/picD.png"
import User from "../../../assets/png/user.png"
import Chain from "../../../assets/png/chain.png"

import SuggestionAndComplaints from '../../../components/SuggestionAndComplaints'

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

            <div className='flex flex-col gap-5 mt-[40px]'>
                <img src={state?.image} alt='News Image' className='w-full h-[40rem]'/>
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

       <SuggestionAndComplaints />

    </div>
  )
}

export default NewsDetails