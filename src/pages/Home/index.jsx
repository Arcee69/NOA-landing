import React, { useState, useEffect } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import Slider from 'react-slick'
import { AiOutlineSend } from 'react-icons/ai'
import "slick-carousel/slick/slick.css";
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward } from 'react-icons/io';
import Vapi from '@vapi-ai/web';
import { CgSpinner } from 'react-icons/cg';

import House from "../../assets/png/house.png"
import Address from "../../assets/png/address.png"
import AddressSmall from "../../assets/png/address_small.png"
import LeftMic from "../../assets/png/left_mic.png"
import Mic from "../../assets/png/mic_b.png"
import Stop from "../../assets/png/stop.png"
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

import MediaChat from "../../assets/vid/media_chat.mp4"
import axios from 'axios';



const Home = () => {
  const [callStatus, setCallStatus] = useState('inactive')
  const [voxData, setVoxData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [allPub, setAllPub] = useState([])

  const navigate = useNavigate()
    
  const vapi = new Vapi('1ca3f817-12e2-42a0-b8ab-f5a76e226baa'); // Public_key

  const start = async () => {
    setCallStatus("loading");
    setLoading(true);
    const response = await vapi.start("e9501112-b0c1-44ad-9849-b075edca90d0"); // Assitant_id
    setLoading(false);
    setVoxData(response)
    console.log(response.status, "brymo")
    return response
  };

  const stop = () => {
    console.log("stop")
    setCallStatus("loading");
    vapi.stop();
  };

  useEffect(() => {
    vapi.on("call-start", () => setCallStatus("active"));
    vapi.on("call-end", () => setCallStatus('inactive'));
    
    return () => vapi.removeAllListeners();
  }, [])

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
    
    const isMobileView = window.innerWidth < 768

    const fetchPublication = async () => {
        await axios.get("https://api.content.noa.gov.ng/api/publication")
        .then((res) => {
            console.log(res, "slo")
            setAllPub(res?.data?.data?.Publications)
        })
        .catch((err) => {
            console.log(err, "malo")
        })
    }

    console.log(allPub, "allPub")

    useEffect(() => {
        fetchPublication()
    }, [])

  return (
    <div className='w-full'>
        <div 
            style={{ background: `url(${House})`, backgroundSize:"cover", backgroundRepeat:"no-repeat" }}
            className=' lg:h-[499px] lg:px-[101px] px-[20px] py-[100px] gap-10 lg:gap-0 flex flex-col lg:flex-row items-center justify-between'
        >
            <div className='lg:w-[600px] h-[268px] flex flex-col gap-5'>
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
            <div className='w-[280px] h-[354px] bg-[#222222] rounded-[8px] mt-28 lg:mt-0 flex flex-col'>
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
                <div className='bg-[#3A6152] w-full flex flex-col mt-0 lg:mt-0 items-center justify-center  h-[238px]'>
                    <div className='px-4 flex flex-col'>
                        <p className='font-manja text-[#fff] text-sm font-medium'>CLHEEAN: Your Friendly AI Voice Assistant from NOA</p>
                        <p className='font-manja text-[#fff] text-sm font-medium'>I can provide you with information on policies, programs and initiatives</p>
                    </div>
                    {/* <button onClick={() => {callStatus === "active" ? stop() : start()}} className='w-[150px] p-4 bg-[#00AA55] flex justify-center items-center rounded-lg'>
                        {
                            loading ? 
                            <CgSpinner className='text-lg animate-spin text-[#FFF]' />
                            :
                            <p className='text-[#fff] text-base font-medium font-mont'>
                                {callStatus === "active" ? "Stop" : "Speak Now"}
                            </p>
                        }
                    </button> */}

                    <div className="w-full flex items-center lg:mt-2">
                        <img src={LeftMic} alt='LeftMic' className='w-[121px] h-[62px]'/>
                        <img src={callStatus === "active" ? Stop : Mic } alt='Mic' className='w-[122px] h-[122px] cursor-pointer' onClick={() => {callStatus === "active" ? stop() : start()}} />
                        <img src={RightMic} alt='RightMic' className='w-[121px] h-[62px]'/>
                    </div> 
                </div>
              
            </div>

        </div>
        <div className='w-full flex items-center bg-[#EBEBEB] h-[72px]'>
            <div className='w-3/12 bg-[#FF0000] h-full flex justify-center items-center'>
                <p className='font-open font-bold text-sm lg:text-[24px] text-[#fff] font-bold'>HEADLINES</p>
            </div>
            <div className='w-9/12'>
                <div className='w-full'>
                    <Slider {...settings}>
                        {
                            allPub?.length > 0 ? allPub?.map((item, index) => (
                                <div className='mx-2 cursor-pointer' key={index} onClick={() => window.open(`https://content.noa.gov.ng/publication/${item?.id}`, "_blank")}>
                                    <p className='font-semibold text-xs lg:text-sm font-mont text-[#222222]'>
                                        {item?.title}
                                    </p>
                                </div>
                            ))
                            :
                            <div className='mx-2'>
                                <p className='font-semibold text-xs lg:text-sm font-mont text-[#222222]'>
                                    No New Updates
                                </p>
                            </div>
                           
                        }
                    </Slider>
                </div>

            </div>

        </div>

        <div
            style={{ 
                background: "#0C3923A6", 
                backgroundRepeat: "no-repeat", 
                backgroundSize: "cover", 
                position: 'relative'
            }}
            className='w-full h-[532px] flex lg:px-[100px] py-[52px]'
        >
            <div className="absolute inset-0 z-0">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/ODmsC4ybmkA?autoplay=1&mute=0&loop=0&playlist=ODmsC4ybmkA" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%' 
                    }}
                ></iframe>
            </div>
            <div className='relative z-10 w-full flex lg:flex-row flex-col gap-5 justify-between mx-auto'>
                <p className='text-[#fff] font-bold font-mont_alt invisible text-[24px]'>The DG's Address</p>
                <div className='w-[395px] h-[423px] bg-[#34FFCE1A] hidden lg:flex flex-col'>
                    <div className='border border-[#fff] p-[20px] border-x-0 border-t-0'>
                        <p className='text-[#fff] font-bold font-manja text-[20px]'>Our Goal</p>
                    </div>
                    <div className='py-6 px-[20px]'>
                        <p className='text-[#fff] text-sm font-mont_alt'> 
                            To consistently raise awareness, positively change attitudes, values and behaviours; 
                            accurately and adequately inform; and sufficiently mobilize citizens to act in ways that promote 
                            peace, harmony.
                            To develop a Nigerian society that is orderly, responsible and discipline, 
                            where citizens demonstrate core values of honesty, hard work and patriotism.
                            The main objectives of the Agency, as provided in Decree 100 of 1993, 
                            are to ensure that Government programmes and policies are better understood by the general 
                            public and: Mobilize favourable public opinion for such programmes and policies;
                        </p>
                    </div>
                </div>
            </div>
        </div>


        {/* <img src={isMobileView ? AddressSmall : Address} alt='Address'/> */}

        <div className='flex flex-col gap-3 p-5 lg:p-[100px]'>
            <p className='font-mont_alt text-[24px] lg:text-[40px] font-bold text-[#222222]'>The explainer</p>
            <div>
                <img src={Chain} alt='Chain' className='w-[54px] h-[9px]' />
            </div>
            {
                allPub?. length > 0 ?
                <div className='w-full mt-[40px]'>
                    <Slider {...secondSettings}>
                        {
                            allPub?.map((item, index) => (
                                <div key={index} className='flex flex-col cursor-pointer' onClick={() => window.open(`https://content.noa.gov.ng/publication/${item?.id}`, "_blank")}>
                                    <img src={item?.thumbnail} alt='Poster' className='w-[279px] h-[200px] rounded-lg' />
                                    <div className='flex items-center gap-1.5 mt-4'>
                                        <img src={Folder} alt='' className='w-[10px] h-[18px]'/>
                                        <p className='font-bold text-[#757575] font-mont'>{item?.desc}</p>
                                    </div>
                                    <p className='font-mont text-base text-[#222222] font-bold'>{item?.title}</p>
                                </div>
                            ))
                        }

                    </Slider>

                </div>
                :
                <p className='font-mont_alt text-[14px] lg:text-[24px] font-bold mt-8 text-[#222222]'>
                    No Publications Avaliable
                </p>

            }

        </div>


        <div className='w-full flex flex-col lg:flex-row '>
            <div className='lg:w-[528px] bg-[#222222] p-5 lg:pt-[117px] lg:pr-[96px] lg:pl-[101px] lg:pb-[164px] flex flex-col gap-[32px]'>
                <p className='font-mont_alt font-bold text-[#FFFFFF] text-[24px] lg:text-[40px]'>NOA Digitization Inititiatives</p>
                <p className='font-mont text-[#FFFFFF] font-medium text-sm lg:text-[20px]'>
                    "Leveraging Technology for Enhanced National Engagement"
                </p>
                <button
                    className='w-[162px] h-[48px] flex items-center justify-center bg-[#00AA55]'
                >
                    <a href='https://forms.gle/d1wgcUATWw3K7Sdz9' target='_blank' className='text-[#fff] font-bold font-manja text-sm'>Take Poll</a>
                </button>
            </div>
            <div className='bg-[#161616] lg:w-[912px] p-5 lg:py-[48px] lg:pr-[100px] lg:pl-[48px]'>
                <div className='lg:w-[764px] flex flex-wrap gap-[30px] lg:py-[97px]'>
                    <div className='bg-[#2E2E2E] w-[367px] overflow-auto h-[200px]  rounded-lg border-[8px] border-y-0 border-x-[#00AA55] flex flex-col gap-[15px] p-5'>
                        <p className='font-mont_alt text-[18px] lg:text-[20px] font-bold text-[#00AA55]'>NOA content factory</p>
                        <p className='font-mont_alt text-sm lg:text-base  text-[#FFFFFF]'>
                            The NOA Content Factory is at the forefront of transforming how we connect 
                            with and inform the Nigerian public. Through The NOA TV, NOA Radio, and The Explainer, 
                            the NOA Content Factory is dedicated to creating and disseminating content that not 
                            only informs but also inspires action and participation among all Nigerians, 
                            building a more informed, inclusive, and engaged society.
                        </p>
                    </div>
                    <div className='bg-[#2E2E2E] w-[367px] overflow-auto h-[200px]  rounded-lg border-[8px] border-y-0 border-x-[#00AA55] flex flex-col gap-[15px] p-5'>
                        <p className='font-mont_alt text-[18px] lg:text-[20px] font-bold text-[#00AA55]'>The Curator</p>
                        <p className='font-mont_alt text-sm lg:text-base text-[#FFFFFF]'>
                            AI-Powered Data Management: 
                            Using AI to maintain and continuously update demographic database, 
                            giving capacity for well-targeted and highly effective strategies and communication.

                        </p>
                    </div>
                    <div className='bg-[#2E2E2E] w-[367px]  rounded-lg border-[8px] border-y-0 border-x-[#00AA55] flex flex-col gap-[15px] p-5'>
                        <p className='font-mont_alt text-[18px] lg:text-[20px]  font-bold text-[#00AA55]'>National hackathons</p>
                        <p className='font-mont_alt text-sm lg:text-base text-[#FFFFFF]'>
                            Virtual Hackathons to engage young Nigerians at home and in diaspora to foster unity among the youths
                        </p>
                    </div>
                    <div className='bg-[#2E2E2E] w-[367px]  rounded-lg border-[8px] border-y-0 border-x-[#00AA55] flex flex-col gap-[15px] p-5'>
                        <p className='font-mont_alt text-[18px] lg:text-[20px] font-bold text-[#00AA55]'>Insight Data</p>
                        <p className='font-mont_alt text-sm lg:text-base  text-[#FFFFFF]'>
                            Tailored to reach the highest number of Nigerians using its 3 major segmentation approach.
                        </p>
                    </div> 
                    <div className='bg-[#2E2E2E] w-[367px] h-[200px] overflow-auto rounded-lg border-[8px] border-y-0 border-x-[#00AA55] flex flex-col gap-[15px] p-5'>
                        <p className='font-mont_alt text-[18px] lg:text-[20px] font-bold text-[#00AA55]'>The Mobilizer App</p>
                        <p className='font-mont_alt text-sm lg:text-base   text-[#FFFFFF]'>
                            Youth Engagement With AI: Launching Virtual Hackathons and involving the younger 
                            demographic and those in diaspora, making government policy making accessible.
                        </p>
                    </div>
                    <div className='bg-[#2E2E2E] w-[367px] h-[200px] overflow-auto rounded-lg border-[8px] border-y-0 border-x-[#00AA55] flex flex-col gap-[15px] p-5'>
                        <p className='font-mont_alt  text-[18px] lg:text-[20px] font-bold text-[#00AA55]'>The Explainer by NOA</p>
                        <p className='font-mont_alt text-sm lg:text-base  text-[#FFFFFF]'>
                            The Explainer is an innovative platform designed by the National Orientation Agency to 
                            simplify and clarify government policies and national developments for the public. 
                            It aims to bridge the gap between government operations and citizen understanding, 
                            ensuring transparency and fostering a well-informed populace.
                        </p>
                    </div>

                </div>
            </div>

        </div>

        <div className='flex flex-col lg:flex-row lg:justify-between items-center p-5 lg:p-[100px] gap-[40px]'>
            <div className='flex flex-col gap-4 lg:w-[480px] '>
                <img src={Chain} alt='Chain' className='w-[54px] h-[9px]'/>
                <p className='font-mont_alt text-[#222222] text-[24px] lg:text-[40px] font-bold'>Our Impact: By Verified Numbers</p>
                <p className='text-[#5F6368] font-mont text-base lg:text-[20px] lg:w-[402px]'>
                    (Empowering Communities, giving them a voice)
                </p>
            </div>
            <div className='w-full flex flex-col gap-[30px]'>
                <div className='w-full lg:w-[720px] lg:h-[159px] py-5  px-5 lg:px-[40px] border-[12px] bg-[#F5F5F5] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <div className='flex items-center gap-5'>
                        <p className='text-[#00AA55] font-mont_alt text-[24px] lg:text-[40px] font-bold'>5k+</p>
                        <p className='text-[#00AA55] font-mont_alt text-[18px] lg:text-[20px] font-medium'>Member Staff</p>
                    </div>
                    <p className='text-sm lg:text-base text-[#222222] font-mont_alt'>
                        With 812 on-site offices, well positioned across all 774 LGAs, 
                        our communities enjoy our presence and direct impact in every corner of Nigeria.
                    </p>
                </div>
                <div className='w-full lg:w-[720px] lg:h-[159px] px-5 py-5 lg:px-[40px] border-[12px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <div className='flex items-center gap-5'>
                        <p className='text-[#00AA55] font-mont_alt text-[24px] lg:text-[40px] font-bold'>12k+</p>
                        <p className='text-[#00AA55] font-mont_alt  text-[18px] lg:text-[20px] font-medium'>Engagement rate</p>
                    </div>
                    <p className='text-sm lg:text-base text-[#fff] font-mont_alt'>
                        The Nigerian public are getting more engaged and well informed. 
                        Our commitment to excellence is clearly seen in our staggering 98% service satisfaction rate.
                    </p>
                </div>
                <div className='w-full lg:w-[720px] lg:h-[159px] py-5 px-5 lg:px-[40px] border-[12px] bg-[#F5F5F5] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <div className='flex items-center gap-5'>
                        <p className='text-[#00AA55] font-mont_alt text-[24px] lg:text-[40px] font-bold'>300+</p>
                        <p className='text-[#00AA55] font-mont_alt text-[18px] lg:text-[20px] font-medium'>MDAs onboarded</p>
                    </div>
                    <p className='text-sm lg:text-base text-[#222222] font-mont_alt'>
                        Our streamlined operations ensures integration of information from 
                        various ministries and departments.
                    </p>
                </div>

            </div>

        </div>

        <div
            style={{ 
                background: "#0C3923A6", 
                backgroundRepeat: "no-repeat", 
                backgroundSize: "cover", 
                position: 'relative'
            }}
            className='w-full h-[532px] flex lg:px-[100px] py-[52px]'
        >
            <div className="absolute inset-0 z-0">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/-fkp4_BGEZg?si=LKr8FjHC6VUMshzJ" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%'  
                    }}
                ></iframe>
            </div>
            <div className='relative z-10 w-full flex lg:flex-row flex-col gap-5 justify-between mx-auto'>
                <p className='text-[#fff] font-bold font-mont_alt invisible text-[24px]'>The DG's Address</p>
                <div className='w-[395px] h-[423px] bg-[#fff] hidden invisible  lg:flex flex-col'> {/* bg-[#34FFCE1A] */}
                    <div className='border border-[#000] p-[20px] border-x-0 border-t-0'>
                        <p className='text-[#000] font-bold font-manja text-[20px]'>Our Goal</p>
                    </div>
                    <div className='py-6 px-[20px]'>
                        <p className='text-[#000] text-sm font-mont_alt'> 
                            To consistently raise awareness, positively change attitudes, values and behaviours; 
                            accurately and adequately inform; and sufficiently mobilize citizens to act in ways that promote 
                            peace, harmony.
                            To develop a Nigerian society that is orderly, responsible and discipline, 
                            where citizens demonstrate core values of honesty, hard work and patriotism.
                            The main objectives of the Agency, as provided in Decree 100 of 1993, 
                            are to ensure that Government programmes and policies are better understood by the general 
                            public and: Mobilize favourable public opinion for such programmes and policies;
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row my-5 lg:my-0 lg:justify-between items-center px-5 lg:p-[100px] gap-[40px]'>
            <div className='flex flex-col gap-4 lg:w-[480px] '>
                <img src={Chain} alt='Chain' className='w-[54px] h-[9px]'/>
                <p className='font-mont_alt text-[#222222] text-[24px] lg:text-[40px] font-bold'>NOA National Hackathons</p>
                <p className='text-[#5F6368] font-mont text-[16px] lg:text-[20px] lg:w-[402px]'>
                    Virtual Hackathons to engage young Nigerians at home and 
                    in diaspora to foster unity among the youths
                </p>
                <button
                    className='w-[162px] h-[48px] flex items-center justify-center bg-[#00AA55]'
                    onClick={() => navigate("/hackathon")}
                >
                    <p className='text-[#fff] font-bold font-manja text-sm'>Learn More</p>
                </button>
            </div>
            <div className='w-full flex flex-col gap-[30px]'>
                <div className='w-full lg:w-[720px] lg:h-[159px] py-5 px-5 lg:px-[40px] border-[12px] bg-[#F5F5F5] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <div className='flex flex-col items-center gap-5 lg:gap-2'>
                        <p className='text-[#00AA55] font-mont_alt text-[24px] lg:text-[40px] font-bold'>5k+</p>
                        <p className='text-[#00AA55] font-mont-alt text-[18px] lg:text-[30px] font-medium'>Participants (nation wide)</p>
                    </div>
                 
                </div>
                <div className='w-full lg:w-[720px] lg:h-[159px] py-5 px-5 lg:px-[40px] border-[12px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <div className='flex flex-col items-center gap-5 lg:gap-2'>
                        <p className='text-[#00AA55] font-mont_alt text-[24px] lg:text-[40px] font-bold'>12k+</p>
                        <p className='text-[#00AA55] font-mont_alt text-[18px] lg:text-[30px] font-medium'>Engagement rate</p>
                    </div>
                 
                </div>
                <div className='lg:w-[720px] lg:h-[159px] py-5 px-5 lg:px-[40px] border-[12px] bg-[#F5F5F5] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <div className='flex flex-col items-center gap-5 lg:gap-2'>
                        <p className='text-[#00AA55] font-mont text-[24px] lg:text-[40px] font-bold'>₦300m+</p>
                        <p className='text-[#00AA55] font-mont_alt text-[18px] lg:text-[30px] font-medium'>prizes won</p>
                    </div>
               
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
            className='lg:h-[512px] w-full py-10 lg:py-0 flex items-center gap-[20px] lg:gap-[45px] justify-center flex-col'
        >
            <p className='font-manja font-bold text-[#FFFFFF] text-[27px]'>Explore Vital Information</p>
            <div className='flex flex-col px-5 lg:px-0 lg:flex-row items-center gap-[22px]'>
                <div className='bg-[#00AA55] w-full lg:w-[216px] flex flex-col h-[248px]'>
                    <div className='w-full cursor-pointer gap-1 border border-x-0 border-t-0 border-b-[#fff] py-[14px] px-[21px] flex items-center'>
                        <a href='https://ipcr.gov.ng/' target='_blank' className='text-[#fff] font-manja text-[13px] font-bold'>Peacebuilding</a>
                        <IoIosArrowRoundForward className='text-[#fff] ' />
                    </div>
                    <div className='w-full cursor-pointer gap-1 border border-x-0 border-t-0 border-b-[#fff] py-[14px] px-[21px] flex items-center'>
                        <a href='https://ncdc.gov.ng/' target='_blank' className='text-[#fff] font-manja text-[13px] font-bold'>COVID-19</a>
                        <IoIosArrowRoundForward className='text-[#fff] ' />
                    </div>
                    <div className='w-full cursor-pointer gap-1 border border-x-0 border-t-0 border-b-[#fff] py-[14px] px-[21px] flex items-center'>
                        <a href='https://www.nigeriarights.gov.ng/' target='_blank' className='text-[#fff] font-manja text-[13px] font-bold'>Citizen Rights</a>
                        <IoIosArrowRoundForward className='text-[#fff] ' /> 
                    </div>
                    <div className='w-full gap-1 cursor-pointer border border-x-0 border-t-0 border-b-[#fff] py-[14px] px-[21px] flex items-center'>
                        <a href='https://ctc.gov.ng/about-ctc/' target='_blank' className='text-[#fff] font-manja text-[13px] font-bold'>Security</a>
                        <IoIosArrowRoundForward className='text-[#fff] ' />
                    </div>
                    <div className='w-full gap-1 cursor-pointer  py-[14px] px-[21px] flex items-center'>
                        <a href='/about' className='text-[#fff] font-manja text-[13px] font-bold'>National Values</a>
                        <IoIosArrowRoundForward className='text-[#fff] ' /> 
                    </div>
                </div>

                {/* <img src={DG} alt='DG' className='lg:w-[400px] h-[248px]' /> */}
                <video
                    controls
                    loop
                    className='lg:w-[400px] h-[248px]'
                >
                    <source src={MediaChat} type="video/mp4"></source>
                </video>

                <div className='bg-[#00AA55] w-full lg:w-[216px] flex flex-col h-[248px]'>
                    <div className='w-full cursor-pointer gap-1 border border-x-0 border-t-0 border-b-[#fff] py-[14px] px-[21px] flex items-center'>
                        <a href='https://www.ncac.gov.ng/' target='_blank' className='text-[#fff] font-manja text-[13px] font-bold'>National Cultures</a>
                        <IoIosArrowRoundForward className='text-[#fff] ' /> 
                    </div>
                    <div className='w-full cursor-pointer gap-1 border border-x-0 border-t-0 border-b-[#fff] py-[14px] px-[21px] flex items-center'>
                        <a href='https://statehouse.gov.ng/' target='_blank' className='text-[#fff] font-manja text-[13px] font-bold'>Government</a>
                        <IoIosArrowRoundForward className='text-[#fff] ' /> 
                    </div>
                    <div className='w-full cursor-pointer gap-1 border border-x-0 border-t-0 border-b-[#fff] py-[14px] px-[21px] flex items-center'>
                        <a href='https://youthandsport.gov.ng/' target="_blank"  className='text-[#fff] font-manja text-[13px] font-bold'>Youth and Nation</a>
                        <IoIosArrowRoundForward className='text-[#fff] ' />
                    </div>
                    <div className='w-full gap-1 cursor-pointer border border-x-0 border-t-0 border-b-[#fff] py-[14px] cursor-pointer px-[21px] flex items-center'>
                        <a href="https://www.nassnig.org/" target='_blank' className='text-[#fff] font-manja text-[13px] font-bold'>Government Policies</a>
                        <IoIosArrowRoundForward className='text-[#fff] ' />
                    </div>
                    <div className='w-full gap-1 cursor-pointer py-[14px] px-[21px] flex items-center'>
                        <a href='#' className='text-[#fff] font-manja text-[13px] font-bold'>Raise complaints</a>
                        <IoIosArrowRoundForward className='text-[#fff] ' />
                    </div>
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

export default Home