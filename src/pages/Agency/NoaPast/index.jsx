import React, { useRef } from 'react'
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
import DgEleven from "../../../assets/png/dg_11.png"
import BigChain from "../../../assets/png/big_chain.png"

import SuggestionAndComplaints from '../../../components/SuggestionAndComplaints';



const NoaPast = () => {

    const sliderRef = useRef(null);

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const data = [
        {
            id: 1,
            pic: DgEleven,
            name: "Dr. Garba Abari",
            date: "May 2016- October 2023", 
            position: "Director General"
        },
        {
            id: 2,
            pic: DgTen,
            name: "Mrs. Ngozi Ekeoba",
            date: "February 2016- May 2016", 
            position: "Acting Director General"
        },
        {
            id: 3,
            pic: DgNine,
            name: "Mr. Mike Omeri",
            date: "January 2012 - February 2016",
            position: "Director General"
        },
        {
            id: 4,
            pic: DgEight,
            name: "Alhaji Idi M. Faruk",
            date: "June 2003 - January 2012",
            position: "Director General"
        },
        {
            id: 5,
            pic: DgSeven,
            name: "Dr. Tonnie Ireadia ",
            date: "April 2002- June 2003",
            position: "Director General"
        },
        {
            id: 6,
            pic: DgSix,
            name: "Dr. Ifeanyi Chukwuka ",
            date: "July 2001 - March 2002",
            position: "Director General"
        },
        {
            id: 7,
            pic: DgFive,
            name: "Professor Aloy Ejiogu ",
            date: "June 2000 - July 2001",
            position: "Director General"
        },
        {
            id: 8,
            pic: DgFour,
            name: "Professor Elochuku C. Amucheazi ",
            date: "August 1993 - November 1999",
            position: "Director General"
        },
        {
            id: 9,
            pic: DgThree,
            name: "Professor Tunde Adeniran ",
            date: "January 1993- August 1993",
            position: "Chairman"
        },
        {
            id: 10,
            pic: DgTwo,
            name: "Alhaji Mohammed Gambo Jimeta",
            date: "April 1992- January 1993",
            position: "Chairman"
        },
        {
            id: 11,
            pic: DgOne,
            name: "Professor Jerry Gana",
            date: "September 1987- April 1992",
            position: "Chairman"
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
        <div className='hidden px-[100px] py-[19px] lg:flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base '>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>NOA past execitives</p>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-[17px] mt-[80px] lg:mt-[40px]'>
            <p className='text-[24px] lg:text-[36px] font-mont_alt  font-bold text-[#222222]'>NOA Past Chief Executives</p>
            <img src={BigChain} alt='BigChain' className='w-[118px] h-[12px]' />
            <p className='font-manja text-[#757575] text-center text-[15px]'>PAST DIRECTORS OF MAMSER & DIRECTOR GENERALS OF THE AGENCY</p>
        </div>

        <div className='w-full mt-[24px] lg:mt-[66px] px-5 lg:px-[100px]'>
            <Slider ref={sliderRef} {...settings}>
                {
                    data?.map((item) => (
                        <div className='flex flex-col items-center justify-center gap-5'>
                            <img src={item?.pic} alt='Profile_photo' className='lg:h-[340px] mx-auto h-[340px]' />
                            <p className='font-manja text-base lg:text-[32px] text-center mt-4 text-[#222222] font-bold'>{item?.name}</p>
                            <p className='font-manja text-[#00AA55] text-center text-sm lg:text-xl font-bold'>{item?.date}</p>
                            <p className='font-manja text-[#00AA55] text-center  text-sm lg:text-xl font-bold'>{item?.position}</p>

                        </div>
                    ))
                }

            </Slider>
        </div>
        <div className='flex items-center justify-center gap-[200px] px-[100px] w-full mt-[56px]'>
            <div className='flex items-center gap-2 cursor-pointer' onClick={handlePrev}>
                <FaArrowLeftLong className='text-[#00AA55]  text-sm' />
                <p className='uppercase font-manja text-[#00AA55] mt-1.5 text-sm'>Prev</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer' onClick={handleNext}>
                <p className='uppercase font-manja text-[#00AA55] mt-1.5 text-sm'>Next</p>
                <FaArrowRightLong className='text-[#00AA55] text-sm' />
            </div>
        </div>
        
      <SuggestionAndComplaints />

    </div>
  )
}

export default NoaPast