import React from "react"
import { IoChevronForwardOutline } from "react-icons/io5"
import Slider from "react-slick"

import Media from "../../../assets/png/media.png"
import Search from "../../../assets/svg/search_big.svg"
import Industry from "../../../assets/png/industry.png"
import Chain from "../../../assets/png/chain.png"

import Tv from "../../../assets/png/noa_tv.png"
import Radio from "../../../assets/png/noa_radio.png"
import Explainer from "../../../assets/png/noa_explainer.png"

import PicA from "../../../assets/png/picA.png"
import PicB from "../../../assets/png/picB.png"
import PicC from "../../../assets/png/picC.png"
import PicD from "../../../assets/png/picD.png"
import PicE from "../../../assets/png/picE.png"
import PicF from "../../../assets/png/picF.png"
import PicG from "../../../assets/png/picG.png"
import PicH from "../../../assets/png/picH.png"
import User from "../../../assets/png/user.png"

import Folder from "../../../assets/svg/folder.svg"


const ContentFactory = () => {

    const secondData = [
        {
            id: 1,
            img: PicE,
            name: "Deji Oyeleke",
            date: "08.05.2024",
            views: "23 views",
            comment: "4 comments",
            title: "Things to know about the Nigerian Senate"
        },
        {
            id: 2,
            img: PicF,
            name: "Deji Oyeleke",
            date: "08.05.2024",
            views: "23 views",
            comment: "4 comments",
            title: "Top 10 most outrageous laws in the constitution"
        },
        {
            id: 3,
            img: PicG,
            name: "Deji Oyeleke",
            date: "08.05.2024",
            views: "23 views",
            comment: "4 comments",
            title: "Tourist centres in Nigeria you never knew about"
        },
        {
            id: 4,
            img: PicH,
            name: "Deji Oyeleke",
            date: "08.05.2024",
            views: "23 views",
            comment: "4 comments",
            title: "15 citizen benefits you sure didn’t consider"
        },
    ]

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

    const secondSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
        <div className='flex flex-col'>
            <div className='bg-[#fff] px-[100px] py-[19px] hidden  lg:flex items-center justify-between '>
                <div className='flex gap-1 items-center'>
                    <p className='text-[#00AA55] font-manja font-bold text-base '>National Orientation Agency</p>
                    <IoChevronForwardOutline className='mb-1'/>
                    <p className='text-[#222222] font-bold text-base font-manja'>Content Factory</p>
                </div>
            </div>
            <div
                style={{ background:`url(${Media})`, backgroundSize:"cover", backgroundRepeat:"no-repeat" }}
                className="flex items-center justify-center pb-[100px] lg:pb-[160px] pt-[100px] lg:pt-[64px] lg:h-[403px]"
            >
                <div className="flex flex-col items-center gap-[19px]">
                    <p className="font-manja w-[295px] lg:w-[558px] font-bold text-[24px] lg:text-[48px] leading-[32px] lg:leading-[56px] text-center text-[#fff]">Welcome to the NOA content factory</p>
                    <p className="font-mont_alt w-[336px] lg:w-[355px] text-base text-[#fff] text-center">Quality and informative content to the general citizenry is our priority</p>
                </div>
            </div>
            <div className="lg:w-[960px] relative bottom-10 mx-auto shadow-xl flex items-center">
                <div className="lg:w-[864px] flex h-[80px]  bg-[#fff] p-4">
                    <input 
                        className="bg-transparent outline-none font-mont_alt text-base lg:text-[20px] w-full"
                        name="search"
                        type="text"
                        placeholder="Search any radio or video channel"
                    />
                </div>
                <div className="bg-[#00AA55] w-[96px] h-[80px] p-4 flex items-center justify-center">
                    <img src={Search} alt="Search" />
                </div>
            </div>
            <div className='hidden lg:block'>
                <img src={Industry} alt='industry' />
            </div>

            <div className="mt-[80px] flex flex-col gap-[40px] px-5 lg:px-[100px]">
                <div className="flex flex-col gap-2">
                    <p className="font-manja font-bold text-[27px]">Media Platforms</p>
                    <img src={Chain} alt='Chain' className='w-[54px] h-[9px]'/>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-[40px]">
                    <div className="flex flex-col gap-4">
                        <img src={Tv} alt="Tv" className="w-[386px] h-[240px]"/>
                        <p className="text-[20px] font-bold font-manja ">NOA TV</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src={Radio} alt="Radio" className="w-[386px] h-[240px]"/>
                        <p className="text-[20px] font-bold font-manja ">NOA Radio</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src={Explainer} alt="Explainer" className="w-[386px] h-[240px]"/>
                        <p className="text-[20px] font-bold font-manja ">The Explainer</p>
                    </div>
                </div>
            </div>

            <div className="mt-[116px] flex flex-col gap-[40px] px-5 lg:px-[100px]">
                <div className="flex flex-col gap-2">
                    <p className="font-manja font-bold text-[27px]">Top Videos</p>
                    <img src={Chain} alt='Chain' className='w-[54px] h-[9px]'/>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-[40px]">
                    {
                        secondData?.map((item, index) => (
                            <div className='flex flex-col lg:w-[279px]' key={index}>
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
                
            <div className="mt-[144px] mb-[103px] flex flex-col gap-[40px] px-5 lg:px-[100px]">
                <div className="flex flex-col gap-2">
                    <p className="font-manja font-bold text-[27px]">Top Publications</p>
                    <img src={Chain} alt='Chain' className='w-[54px] h-[9px]'/>
                </div>
                <div className="w-full ">
                    <Slider {...secondSettings}>
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
                    </Slider>
                </div>
            </div>


        </div>
    )

}

export default ContentFactory