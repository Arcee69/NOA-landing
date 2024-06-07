import React from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DgOne from "../../../assets/png/dg_1.png"
import DgTwo from "../../../assets/png/dg_2.png"
import DgThree from "../../../assets/png/dg_3.png"
import DgFour from "../../../assets/png/dg_4.png"
import DgFive from "../../../assets/png/dg_5.png"
import DgSix from "../../../assets/png/dg_6.png"
import DgSeven from "../../../assets/png/dg_7.png"
import DgEight from "../../../assets/png/dg_8.png"
import DgNine from "../../../assets/png/dg_9.png"
import DgTen from "../../../assets/png/dg_10.png"
import BigChain from "../../../assets/png/big_chain.png"
import Suggestion from "../../../assets/png/suggestion.png"

import CallB from "../../../assets/svg/call.svg"
import Time from "../../../assets/svg/time.svg"
import Mail from "../../../assets/svg/mail.svg"



const NoaPast = () => {

    const data = [
        {
            id: 1,
            pic: DgTen,
            name: "Ngozi Ekeoba mni (Acting DG)",
            date: "15TH FEB, 2016 - 25th may, 2016", 
            position: "10th DG"
        },
        {
            id: 2,
            pic: DgNine,
            name: "Ngozi Ekeoba mni (Acting DG)",
            date: "January 2012 - 15th February 2016",
            position: "9th DG"
        },
        {
            id: 3,
            pic: DgEight,
            name: "Dr Mike Omeri",
            date: "June 2003 - 17th January 2012",
            position: "8th DG"
        },
        {
            id: 4,
            pic: DgSeven,
            name: "Alh. Idi M. Faruk",
            date: "15TH FEB, 2016- 25th May, 2016",
            position: "7th DG"
        },
        {
            id: 5,
            pic: DgSix,
            name: "Dr Toni Iredia",
            date: "July 2001 - March 2002",
            position: "6th DG"
        },
        {
            id: 6,
            pic: DgFive,
            name: "Dr Ifeanyi Chukwuka",
            date: "June 2000 - July 2001",
            position: "5th DG"
        },
        {
            id: 7,
            pic: DgFour,
            name: "Prof Aloy Ejiogu",
            date: "August 1993 - November 1999",
            position: "4th DG"
        },
        {
            id: 8,
            pic: DgThree,
            name: "Prof Elochukwu C. Amucheazi",
            date: "Jan 1993 - Aug 1993",
            position: "3rd DG"
        },
        {
            id: 9,
            pic: DgTwo,
            name: "Prof Tunde Adeniran",
            date: "April 1992 - Jan 1993",
            position: "2nd DG"
        },
        {
            id: 10,
            pic: DgOne,
            name: "Alh Mohammed Gambo Jimeta",
            date: "September 1987 - April 1992",
            position: " 1st DG"
        },

    ]

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            // {
            //   breakpoint: 600,
            //   settings: {
            //     slidesToShow: 2,
            //     slidesToScroll: 2,
            //     initialSlide: 2
            //   }
            // },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              }
            }
          ]
    }

  return (
    <div className='flex flex-col bg-[#F5F5F5]'>
        <div className=' px-[100px] py-[19px] flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base '>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>NOA past execitives</p>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-[17px] mt-[40px]'>
            <p className='text-[36px] font-mont_alt  font-bold text-[#222222]'>NOA Past Chief Executives</p>
            <img src={BigChain} alt='BigChain' className='w-[118px] h-[12px]' />
            <p className='font-manja text-[#757575] text-[15px]'>PAST DIRECTORS OF MAMSER & DIRECTOR GENERALS OF THE AGENCY</p>
        </div>

        <div className='w-full mt-[99px] px-[100px]'>
            <Slider {...settings}>
                {
                    data?.map((item) => (
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <img src={item?.pic} alt='Profile_photo' className='h-[640px]' />
                            <p className='font-manja text-[32px] text-center mt-4 text-[#222222] font-bold'>{item?.name}</p>
                            <p className='font-manja text-[#00AA55] text-center text-xl font-bold'>{item?.date}</p>
                            <p className='font-manja text-[#00AA55] text-center  text-xl font-bold'>{item?.position}</p>

                        </div>
                    ))
                }

            </Slider>
        </div>
        <div className='flex items-center justify-between px-[100px] w-full mt-[56px]'>
            <div className='flex items-center gap-2'>
                <FaArrowLeftLong className='text-[#00AA55]  text-sm' />
                <p className='uppercase font-manja text-[#00AA55] mt-1.5 text-sm'>Prev</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='uppercase font-manja text-[#00AA55] mt-1.5 text-sm'>Next</p>
                <FaArrowRightLong className='text-[#00AA55] text-sm' />
            </div>
        </div>
        
        <div
            style={{ background: `url(${Suggestion})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"  }}
            className='lg:h-[512px] w-full flex py-10 lg:py-0 items-center gap-[20px] lg:gap-[45px] justify-center flex-col mt-[50px]'
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

export default NoaPast