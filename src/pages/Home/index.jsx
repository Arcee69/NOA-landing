import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import Slider from 'react-slick'
import { AiOutlineSend } from 'react-icons/ai'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward } from 'react-icons/io';


import House from "../../assets/png/house.png"
import Address from "../../assets/png/address.png"
import LeftMic from "../../assets/png/left_mic.png"
import Mic from "../../assets/png/mic_b.png"
import RightMic from "../../assets/png/right_mic.png"
import Chain from "../../assets/png/chain.png"
import PicA from "../../assets/png/picA.png"
import PicB from "../../assets/png/picB.png"
import PicC from "../../assets/png/picC.png"
import PicD from "../../assets/png/picD.png"
import PicE from "../../assets/png/picE.png"
import PicF from "../../assets/png/picF.png"
import PicG from "../../assets/png/picG.png"
import PicH from "../../assets/png/picH.png"
import User from "../../assets/png/user.png"
import Info from "../../assets/png/info.png"
import Suggestion from "../../assets/png/suggestion.png"
import Industry from "../../assets/png/industry.png"
import Call from "../../assets/png/call.png"
import DG from "../../assets/png/dg.jpg"


import NoaLogo from "../../assets/svg/noa_logo.svg"
import Folder from "../../assets/svg/folder.svg"
import CallB from "../../assets/svg/call.svg"
import Time from "../../assets/svg/time.svg"
import Mail from "../../assets/svg/mail.svg"


const Home = () => {

    const data = [
        {
            id: 1,
            img: PicA,
            dept: "HEADQUARTERS",
            title: "Pressing for Change: Ministries Unite to Address Environmental Crises"
        },
        {
            id: 2,
            img: PicB,
            dept: "HEADQUARTERS",
            title: "Pressing for Change: Ministries Unite to Address Environmental Crises"
        },
        {
            id: 3,
            img: PicC,
            dept: "HEADQUARTERS",
            title: "Pressing for Change: Ministries Unite to Address Environmental Crises"
        },
        {
            id: 4,
            img: PicD,
            dept: "HEADQUARTERS",
            title: "Pressing for Change: Ministries Unite to Address Environmental Crises"
        },
    ]

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

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    }

    
    const secondSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    }
    
  return (
    <div className='w-full'>
        <div 
            style={{ background: `url(${House})`, backgroundSize:"cover", backgroundRepeat:"no-repeat" }}
            className='h-[499px] px-[101px] flex items-center justify-between'
        >
            <div className='w-[600px] h-[268px] flex flex-col gap-5'>
                <p className='font-bold text-[#FFFFFF] font-mont text-[32px] leading-[36px]'>
                    Welcome to the Official Website of the National Orientation Agency (NOA)
                </p>
                <p className='text-base text-[#FFFFFF] font-mont'>
                    The National Orientation Agency (NOA) is dedicated to fostering national unity and development 
                    by enlightening and engaging citizens with accurate and timely information. 
                    As a central institution, we drive Nigeria toward harmony and progress through 
                    strategic public education and advocacy.
                </p>
            </div>
            <div className='w-[280px] h-[354px] bg-[#222222] rounded-[8px] flex flex-col'>
                <div className='flex items-start justify-between p-4'>
                    <div className='w-[117px] h-[50px] flex items-center'>
                        <img src={NoaLogo} alt='Logo' className='w-[40px] h-[40px]' />
                        <div className='flex flex-col gap-1'>
                            <p className='font-mont text-[#FFFFFF]'>CLHEEAN</p>
                            <p className='font-mont text-xs text-[#8F9F94]'>Online</p>
                        </div>
                    </div>
                    <IoCloseOutline className='text-[24px] text-[#A3B2AA]' />
                </div>
                <div className='bg-[#3A6152] w-full flex flex-col  h-[238px]'>
                    <div className='flex items-center p-4'>
                        <img src={NoaLogo} alt='Logo' className='w-[18px] h-[20px]' />
                        <p className='font-mont text-xs text-[#FFFFFF]'>CLHEEAN</p>
                    </div>
                    <div className='bg-[#fff] p-2 w-[248px] h-[44px] rounded-xl mx-auto'>
                        <p className='font-mont text-[10px] text-[#353D4D] w-[203px]'>Hi, how would you like me to help you today?</p>
                    </div>
                    <div className="w-full flex items-center mt-2">
                        <img src={LeftMic} alt='LeftMic' className='w-[121px] h-[62px]'/>
                        <img src={Mic} alt='Mic' className='w-[122px] h-[122px]'/>
                        <img src={RightMic} alt='RightMic' className='w-[121px] h-[62px]'/>
                    </div>
                </div>
                <div className='flex w-[247px] justify-between items-center mx-auto py-3'>
                    <input 
                        className='w-full font-mont text-xs bg-transparent' 
                        type='text'
                        name='message'
                        placeholder='Your voice message wil appear here'
                    />
                    <AiOutlineSend className='text-[#AFADAD] text-[24px] ' />
                </div>
            </div>

        </div>
        <div className='w-full flex items-center bg-[#EBEBEB] h-[72px]'>
            <div className='w-3/12 bg-[#FF0000] h-full flex justify-center items-center'>
                <p className='font-open font-bold text-[24px] text-[#fff] font-bold'>HEADLINES</p>
            </div>
            <div className='w-9/12'>
                <div className='w-full'>
                    <Slider {...settings}>
                        <div className='mx-2'>
                            <p className='font-semibold text-sm font-mont text-[#222222]'>
                                Pressing for Change: Ministries Unite to Address Environmental....
                            </p>
                        </div>
                        <div className='mx-2'>
                            <h3 className='font-semibold text-sm font-mont text-[#222222]'>
                                Pressing for Change: Ministries Unite to Address Environmental....
                            </h3>
                        </div>
                    </Slider>
                </div>

            </div>

        </div>
        <img src={Address} alt='Address'/>

        <div className='flex justify-between items-center p-[100px] gap-[40px]'>
            <div className='flex flex-col gap-4 w-[480px] '>
                <img src={Chain} alt='Chain' className='w-[54px] h-[9px]'/>
                <p className='font-mont_alt text-[#222222] text-[40px] font-bold'>Our Impact: By Verified Numbers</p>
                <p className='text-[#5F6368] font-mont text-[20px] w-[402px]'>
                    (Empowering Communities, giving them a voice)
                </p>
            </div>
            <div className='flex flex-col gap-[30px]'>
                <div className='w-[720px] h-[159px] py-5 px-[40px] border-[12px] bg-[#F5F5F5] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <div className='flex items-center gap-5'>
                        <p className='text-[#00AA55] font-mont_alt text-[40px] font-bold'>5k+</p>
                        <p className='text-[#00AA55] font-mont_alt text-[20px] font-medium'>Member Staff</p>
                    </div>
                    <p className='text-base text-[#222222] font-mont_alt'>
                        With 812 on-site offices, well positioned across all 774 LGAs, 
                        our communities enjoy our presence and direct impact in every corner of Nigeria.
                    </p>
                </div>
                <div className='w-[720px] h-[159px] py-5 px-[40px] border-[12px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <div className='flex items-center gap-5'>
                        <p className='text-[#00AA55] font-mont_alt text-[40px] font-bold'>12k+</p>
                        <p className='text-[#00AA55] font-mont_alt text-[20px] font-medium'>Engagement rate</p>
                    </div>
                    <p className='text-base text-[#fff] font-mont_alt'>
                        The Nigerian public are getting more engaged and well informed. 
                        Our commitment to excellence is clearly seen in our staggering 98% service satisfaction rate.
                    </p>
                </div>
                <div className='w-[720px] h-[159px] py-5 px-[40px] border-[12px] bg-[#F5F5F5] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <div className='flex items-center gap-5'>
                        <p className='text-[#00AA55] font-mont_alt text-[40px] font-bold'>300+</p>
                        <p className='text-[#00AA55] font-mont_alt text-[20px] font-medium'>MDAs onboarded</p>
                    </div>
                    <p className='text-base text-[#222222] font-mont_alt'>
                        Our streamlined operations ensures integration of information from 
                        various ministries and departments.
                    </p>
                </div>

            </div>

        </div>

        <div className='w-full flex'>
            <div className='w-[528px] bg-[#222222] pt-[117px] pr-[96px] pl-[101px] pb-[164px] flex flex-col gap-[32px]'>
                <p className='font-mont_alt font-bold text-[#FFFFFF] text-[40px]'>NOA Digitization Inititiatives</p>
                <p className='font-mont text-[#FFFFFF] font-medium text-[20px]'>
                    "Leveraging Technology for Enhanced National Engagement"
                    The Curator:
                    AI-Powered Data Management: 
                    Using AI to maintain and continuously update demographic database, 
                    giving capacity for well-targeted and highly effective strategies and communication.

                </p>
            </div>
            <div className='bg-[#161616] w-[912px] py-[48px] pr-[100px] pl-[48px]'>
                <div className='w-[764px] flex flex-wrap gap-[30px] py-[97px]'>
                    <div className='bg-[#2E2E2E] w-[367px] overflow-auto h-[200px]  rounded-lg border-[8px] border-y-0 border-x-[#00AA55] flex flex-col gap-[15px] p-5'>
                        <p className='font-mont_alt text-[20px] font-bold text-[#00AA55]'>NOA content factory</p>
                        <p className='font-mont_alt text-base  text-[#FFFFFF]'>
                            The NOA Content Factory is at the forefront of transforming how we connect 
                            with and inform the Nigerian public. Through The NOA TV, NOA Radio, and The Explainer, 
                            the NOA Content Factory is dedicated to creating and disseminating content that not 
                            only informs but also inspires action and participation among all Nigerians, 
                            building a more informed, inclusive, and engaged society.
                        </p>
                        <p className='text-[#00AA55] font-mont font-bold'>Learn more </p>
                    </div>
                    <div className='bg-[#2E2E2E] w-[367px]  rounded-lg border-[8px] border-y-0 border-x-[#00AA55] flex flex-col gap-[15px] p-5'>
                        <p className='font-mont_alt text-[20px] font-bold text-[#00AA55]'>Collaboration tool for MDAs</p>
                        <p className='font-mont_alt text-base  text-[#FFFFFF]'>
                            Tailored to reach the highest number of Nigerians using its 3 major segmentation approach.
                        </p>
                        <p className='text-[#00AA55] font-mont font-bold'>Learn more </p>
                    </div>
                    <div className='bg-[#2E2E2E] w-[367px]  rounded-lg border-[8px] border-y-0 border-x-[#00AA55] flex flex-col gap-[15px] p-5'>
                        <p className='font-mont_alt text-[20px] font-bold text-[#00AA55]'>National hackathons</p>
                        <p className='font-mont_alt text-base  text-[#FFFFFF]'>
                            Tailored to reach the highest number of Nigerians using its 3 major segmentation approach.
                        </p>
                        <p className='text-[#00AA55] font-mont font-bold'>Learn more </p>
                    </div>
                    <div className='bg-[#2E2E2E] w-[367px]  rounded-lg border-[8px] border-y-0 border-x-[#00AA55] flex flex-col gap-[15px] p-5'>
                        <p className='font-mont_alt text-[20px] font-bold text-[#00AA55]'>Insight Data</p>
                        <p className='font-mont_alt text-base  text-[#FFFFFF]'>
                            Tailored to reach the highest number of Nigerians using its 3 major segmentation approach.
                        </p>
                        <p className='text-[#00AA55] font-mont font-bold'>Learn more </p>
                    </div> 
                    <div className='bg-[#2E2E2E] w-[367px] h-[200px] overflow-auto rounded-lg border-[8px] border-y-0 border-x-[#00AA55] flex flex-col gap-[15px] p-5'>
                        <p className='font-mont_alt text-[20px] font-bold text-[#00AA55]'>The Mobilizer App</p>
                        <p className='font-mont_alt text-base  text-[#FFFFFF]'>
                            Youth Engagement With AI: Launching Virtual Hackathons and involving the younger 
                            demographic and those in diaspora, making government policy making accessible.
                        </p>
                        <p className='text-[#00AA55] font-mont font-bold'>Learn more </p>
                    </div>
                    <div className='bg-[#2E2E2E] w-[367px] h-[200px] overflow-auto rounded-lg border-[8px] border-y-0 border-x-[#00AA55] flex flex-col gap-[15px] p-5'>
                        <p className='font-mont_alt text-[20px] font-bold text-[#00AA55]'>The Explainer by NOA</p>
                        <p className='font-mont_alt text-base  text-[#FFFFFF]'>
                            The Explainer is an innovative platform designed by the National Orientation Agency to 
                            simplify and clarify government policies and national developments for the public. 
                            It aims to bridge the gap between government operations and citizen understanding, 
                            ensuring transparency and fostering a well-informed populace.
                        </p>
                        <p className='text-[#00AA55] font-mont font-bold'>Learn more </p>
                    </div>

                </div>
            </div>

        </div>

        <div className='flex flex-col gap-3 p-[100px]'>
            <p className='font-mont_alt text-[40px] font-bold text-[#222222]'>The explainer</p>
            <div>
                <img src={Chain} alt='Chain' className='w-[54px] h-[9px]' />
            </div>
            <div className='w-full mt-[40px]'>
                <Slider {...secondSettings}>
                    {
                        data?.map((item, index) => (
                            <div key={index} className='flex flex-col '>
                                <img src={item?.img} alt='Poster' className='w-[279px] h-[200px]' />
                                <div className='flex items-center gap-1.5 mt-4'>
                                    <img src={Folder} alt='' className='w-[10px] h-[18px]'/>
                                    <p className='font-bold text-[#757575] font-mont'>{item?.dept}</p>
                                </div>
                                <p className='font-mont text-base text-[#222222] font-bold'>{item?.title}</p>
                            </div>
                        ))
                    }

                </Slider>

            </div>

        </div>

        <div>
            <img src={Industry} alt='industry' />
        </div>

        <div className='flex justify-between items-center p-[100px] gap-[40px]'>
            <div className='flex flex-col gap-4 w-[480px] '>
                <img src={Chain} alt='Chain' className='w-[54px] h-[9px]'/>
                <p className='font-mont_alt text-[#222222] text-[40px] font-bold'>NOA National Hackathons</p>
                <p className='text-[#5F6368] font-mont text-[20px] w-[402px]'>
                    Virtual Hackathons to engage young Nigerians at home and 
                    in diaspora to foster unity among the youths
                </p>
                <button
                    className='w-[162px] h-[48px] flex items-center justify-center bg-[#00AA55]'
                >
                    <p className='text-[#fff] font-bold font-manja text-sm'>Learn More</p>
                </button>
            </div>
            <div className='flex flex-col gap-[30px]'>
                <div className='w-[720px] h-[159px] py-5 px-[40px] border-[12px] bg-[#F5F5F5] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <div className='flex items-center gap-5'>
                        <p className='text-[#00AA55] font-mont_alt text-[40px] font-bold'>5k+</p>
                        <p className='text-[#00AA55] font-mont-alt text-[20px] font-medium'>Participants (nation wide)</p>
                    </div>
                    <p className='text-base text-[#222222] font-mont_alt'>
                        Tailored to reach the highest number of Nigerians using its 3 major segmentation approach.
                    </p>
                </div>
                <div className='w-[720px] h-[159px] py-5 px-[40px] border-[12px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <div className='flex items-center gap-5'>
                        <p className='text-[#00AA55] font-mont_alt text-[40px] font-bold'>12k+</p>
                        <p className='text-[#00AA55] font-mont_alt text-[20px] font-medium'>Engagement rate</p>
                    </div>
                    <p className='text-base text-[#fff] font-mont_alt'>
                        Tailored to reach the highest number of Nigerians using its 3 major segmentation approach.
                    </p>
                </div>
                <div className='w-[720px] h-[159px] py-5 px-[40px] border-[12px] bg-[#F5F5F5] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <div className='flex items-center gap-5'>
                        <p className='text-[#00AA55] font-mont text-[40px] font-bold'>₦300m+</p>
                        <p className='text-[#00AA55] font-mont_alt text-[20px] font-medium'>prizes won</p>
                    </div>
                    <p className='text-base text-[#222222] font-mont_alt'>
                        Tailored to reach the highest number of Nigerians using its 3 major segmentation approach.
                    </p>
                </div>

            </div>

        </div>

        {/* <div className='flex flex-col gap-3 p-[100px]'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-1'>
                    <p className='font-mont_alt text-[40px] font-bold text-[#222222]'>More from the content factory</p>
                    <img src={Chain} alt='Chain' className='w-[54px] h-[9px]' />
                </div>
                <p className='text-[#00AA55] text-base font-mont font-bold'>Visit the content factory</p>
            </div>
            <div className='w-full mt-[40px]'>
                <Slider {...secondSettings}>
                    {
                        secondData?.map((item, index) => (
                            <div className='flex flex-col w-[279px]' key={index}>
                                <img src={item?.img} alt='Poster' className='w-[279px] h-[200px]' />
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
          
        </div> */}

        <div
            style={{ background: `url(${Info})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"  }}
            className='h-[512px] w-full flex items-center gap-[45px] justify-center flex-col'
        >
            <p className='font-manja font-bold text-[#FFFFFF] text-[27px]'>Explore Vital Information</p>
            <div className='flex items-center gap-[22px]'>
                <div className='bg-[#00AA55] w-[216px] flex flex-col h-[248px]'>
                    <div className='w-full gap-1 border border-x-0 border-t-0 border-b-[#fff] py-[14px] px-[21px] flex items-center'>
                        <p className='text-[#fff] font-manja text-[13px] font-bold'>Peacebuilding</p>
                        <IoIosArrowRoundForward className='text-[#fff] ' />
                    </div>
                    <div className='w-full gap-1 border border-x-0 border-t-0 border-b-[#fff] py-[14px] px-[21px] flex items-center'>
                        <p className='text-[#fff] font-manja text-[13px] font-bold'>COVID-19</p>
                        <IoIosArrowRoundForward className='text-[#fff] ' />
                    </div>
                    <div className='w-full gap-1 border border-x-0 border-t-0 border-b-[#fff] py-[14px] px-[21px] flex items-center'>
                        <p className='text-[#fff] font-manja text-[13px] font-bold'>Citizen Rights</p>
                        <IoIosArrowRoundForward className='text-[#fff] ' />
                    </div>
                    <div className='w-full gap-1 border border-x-0 border-t-0 border-b-[#fff] py-[14px] px-[21px] flex items-center'>
                        <p className='text-[#fff] font-manja text-[13px] font-bold'>Security</p>
                        <IoIosArrowRoundForward className='text-[#fff] ' />
                    </div>
                    <div className='w-full gap-1  py-[14px] px-[21px] flex items-center'>
                        <p className='text-[#fff] font-manja text-[13px] font-bold'>National Values</p>
                        <IoIosArrowRoundForward className='text-[#fff] ' />
                    </div>
                </div>

                <img src={DG} alt='DG' className='w-[400px] h-[248px]' />

                <div className='bg-[#00AA55] w-[216px] flex flex-col h-[248px]'>
                    <div className='w-full gap-1 border border-x-0 border-t-0 border-b-[#fff] py-[14px] px-[21px] flex items-center'>
                        <p className='text-[#fff] font-manja text-[13px] font-bold'>National Cultures</p>
                        <IoIosArrowRoundForward className='text-[#fff] ' />
                    </div>
                    <div className='w-full gap-1 border border-x-0 border-t-0 border-b-[#fff] py-[14px] px-[21px] flex items-center'>
                        <p className='text-[#fff] font-manja text-[13px] font-bold'>Government</p>
                        <IoIosArrowRoundForward className='text-[#fff] ' />
                    </div>
                    <div className='w-full gap-1 border border-x-0 border-t-0 border-b-[#fff] py-[14px] px-[21px] flex items-center'>
                        <p className='text-[#fff] font-manja text-[13px] font-bold'>Youth and Nation</p>
                        <IoIosArrowRoundForward className='text-[#fff] ' />
                    </div>
                    <div className='w-full gap-1 border border-x-0 border-t-0 border-b-[#fff] py-[14px] px-[21px] flex items-center'>
                        <p className='text-[#fff] font-manja text-[13px] font-bold'>Government Policies</p>
                        <IoIosArrowRoundForward className='text-[#fff] ' />
                    </div>
                    <div className='w-full gap-1  py-[14px] px-[21px] flex items-center'>
                        <p className='text-[#fff] font-manja text-[13px] font-bold'>Raise complaints</p>
                        <IoIosArrowRoundForward className='text-[#fff] ' />
                    </div>
                </div>

            </div>

        </div>

        <div
            style={{ background: `url(${Suggestion})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"  }}
            className='h-[512px] w-full flex items-center gap-[45px] justify-center flex-col mt-[100px]'
        >
            <p className='font-manja font-bold text-[#222222] text-[27px]'>Suggestion and Complaints</p>
            <p className='text-center font-medium font-mont_alt text-[11px] text-[#757575] w-[337px]'>
                Don't hesitate to reach us because we believe that citizens 
                should participate in driving change and development in Nigeria.
            </p>

            <div className='flex items-center gap-6'>
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

export default Home