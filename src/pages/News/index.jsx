import React from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'

import PicA from "../../assets/png/picA.png"
import PicB from "../../assets/png/picB.png"
import PicC from "../../assets/png/picC.png"
import PicD from "../../assets/png/picD.png"
import User from "../../assets/png/user.png"
import Chain from "../../assets/png/chain.png"
import Suggestion from "../../assets/png/suggestion.png"

import CallB from "../../assets/svg/call.svg"
import Time from "../../assets/svg/time.svg"
import Mail from "../../assets/svg/mail.svg"



const News = () => {


    const data = [
        {
            id: 1,
            img: PicA,
            dept: "HEADQUARTERS",
            name: "Deji Oyeleke",
            date: "08.05.2024",
            views: "23 views",
            comment: "4 comments",
            title: "Pressing for Change: Ministries Unite to Address Environmental Crises"
        },
        {
            id: 2,
            img: PicB,
            dept: "HEADQUARTERS",
            name: "Deji Oyeleke",
            date: "08.05.2024",
            views: "23 views",
            comment: "4 comments",
            title: "Pressing for Change: Ministries Unite to Address Environmental Crises"
        },
        {
            id: 3,
            img: PicC,
            dept: "HEADQUARTERS",
            name: "Deji Oyeleke",
            date: "08.05.2024",
            views: "23 views",
            comment: "4 comments",
            title: "Pressing for Change: Ministries Unite to Address Environmental Crises"
        },
        {
            id: 4,
            img: PicD,
            dept: "HEADQUARTERS",
            name: "Deji Oyeleke",
            date: "08.05.2024",
            views: "23 views",
            comment: "4 comments",
            title: "Pressing for Change: Ministries Unite to Address Environmental Crises"
        },
    ]

  return (
    <div className='flex flex-col'>
        <div className='bg-[#fff] px-[100px] py-[19px] hidden lg:flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base '>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>News</p>
            </div>
        </div>
        <div className='flex flex-col gap-1 px-5 mt-20 lg:mt-0 lg:px-[100px]'>
            <div className='flex flex-col gap-1'>
                <p className='text-[#222222] font-mont_alt font-bold text-[24px] lg:text-[40px]'>NOA NEWS</p>
                <img src={Chain} alt='Chain' className='w-[54px] ' />
            </div>

            <div className='flex flex-col lg:flex-row gap-5  items-center mt-[40px]'>
                {
                    data?.map((item, index) => (
                        <div key={index} className='flex flex-col '>
                            <img src={item?.img} alt='Poster' className='lg:w-[279px] lg:h-[200px]' />
                            <div className='flex flex-col mt-4'>
                                <p className='font-bold text-[#222222] '>{item?.title}</p>
                                <div className='flex items-center gap-1.5'>
                                    <p className='text-[#928B8B] font-bold text-xs'>{item?.views}</p>
                                    <p className='text-[#928B8B] font-bold text-xs'>{item?.comment}</p>
                                </div>
                            </div>
                            <div className='flex items-center mt-[8px] gap-[11px]'>
                                <img src={User} alt='User' className='w-[37px] h-[37px]' />
                                <div className='flex flex-col gap-1'>
                                    <p className='font-mont font-bold text-[#585353]'>{item?.name}</p>
                                    <p className='text-xs text-[#757575] font-mont'>{item?.date}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='flex flex-col lg:flex-row gap-5 items-center mt-[40px]'>
                {
                    data?.map((item, index) => (
                        <div key={index} className='flex flex-col '>
                            <img src={item?.img} alt='Poster' className='lg:w-[279px] lg:h-[200px]' />
                            <div className='flex flex-col mt-4'>
                                <p className='font-bold text-[#222222] '>{item?.title}</p>
                                <div className='flex items-center gap-1.5'>
                                    <p className='text-[#928B8B] font-bold text-xs'>{item?.views}</p>
                                    <p className='text-[#928B8B] font-bold text-xs'>{item?.comment}</p>
                                </div>
                            </div>
                            <div className='flex items-center mt-[8px] gap-[11px]'>
                                <img src={User} alt='User' className='w-[37px] h-[37px]' />
                                <div className='flex flex-col gap-1'>
                                    <p className='font-mont font-bold text-[#585353]'>{item?.name}</p>
                                    <p className='text-xs text-[#757575] font-mont'>{item?.date}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
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

export default News
