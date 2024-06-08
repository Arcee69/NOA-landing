import React, { useState } from 'react'
import { IoChevronForwardOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5'
import { FiPhone } from 'react-icons/fi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BG from "../../../assets/png/dg_full_pic.png"
import Chain from "../../../assets/png/chain.png"
import ManagementA from "../../../assets/png/management_pic_a.png"
import ManagementB from "../../../assets/png/management_pic_b.png"
import ManagementC from "../../../assets/png/management_pic_c.png"
import ManagementD from "../../../assets/png/management_pic_d.png"
import DirectorA from "../../../assets/png/director_a.png"
import DirectorB from "../../../assets/png/director_b.png"
import DirectorC from "../../../assets/png/director_c.png"
import DirectorD from "../../../assets/png/director_d.png"
import Suggestion from "../../../assets/png/suggestion.png"

import CallB from "../../../assets/svg/call.svg"
import Time from "../../../assets/svg/time.svg"
import Mail from "../../../assets/svg/mail.svg"

const Management = () => {
    const [openBackgroundDropdown, setOpenBackgroundDropdown] = useState(false);
    const [openEducationDropdown, setOpenEducationDropdown] = useState(false);

    const handleBackgroundDropDown = () => {
        setOpenBackgroundDropdown(prev => !prev)
    }

    const handleEducationDropDown = () => {
        setOpenEducationDropdown(prev => !prev)
    }

    const data = [
        {
            id: 1,
            pic: DirectorA,
            name: "Chibuogu Egede",
            duty: "Special duties and state operations (SDSO)"
        },
        {
            id: 2,
            pic: DirectorB,
            name: "Mohammed Bashir",
            duty: "Special duties and state operations (SDSO)"
        },
        {
            id: 3,
            pic: DirectorC,
            name: "Mrs Esther Solomon",
            duty: "Special duties and state operations (SDSO)"
        },
        {
            id: 4,
            pic: DirectorD,
            name: "Joseph Obioma Uchendu",
            duty: "Special duties and state operations (SDSO)"
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
    <div className='flex flex-col'>
        <div className=' px-[100px] py-[19px] flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base '>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>Management</p>
            </div>
        </div>

        <div className='px-[100px] flex flex-col gap-[72px]  mb-[72px] relative mt-5'>
            <div 
                style={{ background: `url(${BG})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}        
                className='flex flex-col h-[590px]'
            >
                <div className='flex justify-end w-full'>
                    <div className='bg-[#014322] flex flex-col w-[326px] mt-4 gap-6 p-5 h-[234px]'>
                        <div className='flex gap-3'>
                            <IoLocationOutline className='text-[#fff] w-[32px] h-[32px]' />
                            <p className='font-mont_alt font-medium w-[242px] text-[#fff] text-[18px]'>
                                Block B, Fed Secretariat Complex, Area !, Garki Abuja, Nigeria. PMB 7
                            </p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <IoMailOutline className='text-[#fff] w-[32px] h-[32px]' />
                            <p className='font-mont_alt font-medium w-[242px] text-[#fff] text-[18px]'>
                                DG@mail.com
                            </p>
                        </div>
                        <div className='flex gap-3'>
                            <FiPhone  className='text-[#fff] w-[32px] h-[32px]' />
                            <p className='font-mont_alt font-medium w-[242px] text-[#fff] text-[18px]'>
                                07034567744
                            </p>
                        </div>

                    </div>

                </div>
                <div className='flex-grow'></div> {/* This div will take up the remaining space */}
                <div
                    className='bg-[#01432233] w-full flex flex-col h-[92px] py-5 px-6'
                >
                    <p className='font-mont_alt font-bold text-[20px] text-[#fff]'>Lanre Issa-Onilu</p>
                    <p className='font-mont_alt font-medium text-[18px] text-[#fff]'>Director General</p>
                </div>
            </div>

            <div className='flex flex-col gap-4 w-full  p-5 border border-[#ccc] rounded-xl'>
                <div className='flex items-center justify-between' onClick={() => handleBackgroundDropDown()}>
                    <p className='text-[24px] font-mont_alt font-bold text-[#222]'>Professional Background</p>
                    {openBackgroundDropdown ? <IoIosArrowUp className='text-[#ccc] text-[32px]'/> : <IoIosArrowDown className='text-[#ccc] text-[32px]' />}
                </div>
                {openBackgroundDropdown && (
                    <p className='font-mont_alt text-[#5F6368] text-[20px]'>
                        A specialist in strategic public communication planning, with vast experience in corporate and political communication, crisis communication, policy
                        analysis and development issues. Did courses in Advanced Public Relations and Media Audience Research at the New York University, United States, and attended several seminars and conferences in the US and UK, including at the prestigious World Advertising Research Council (WARC) in London, UK.
                        Associate Member of the Public Relations Society of America (PRSA) and member of the Public Relations Society of New York. A Corporate Member of
                        the International Communications Conference (ICC) at the Baruch College, State University of New York, U.S.A. Member of Council of Nigeria Institute of
                        Public Relations (NIPR), and an associate member of the Advertising Practitioners Council of Nigeria (APCON). Worked variously as a media
                        relations executive and journalist and as a policy and development issues strategist, public perception analyst and communication planner in the last 33
                        years. Joined the Comet Newspapers in Lagos as a News Editor and later Thisday Newspapers as Assistant Editor, Sunday Thisday. Resigned as Group
                        Politics Editor, Thisday Newspapers. Worked for the World Investment News(Winne), France, for the production of a special report on Nigeria's democratization process, published in the June 1999 edition of FORBES International Business magazine.
                    </p>
                )}
            </div>

            <div className='flex flex-col gap-4 w-full p-5 border border-[#ccc] rounded-xl'>
                <div className='flex items-center justify-between' onClick={() => handleEducationDropDown()}>
                    <p className='text-[24px] font-mont_alt font-bold text-[#222]'>Education</p>
                    {openEducationDropdown ? <IoIosArrowUp className='text-[#ccc] text-[32px]'/> : <IoIosArrowDown className='text-[#ccc] text-[32px]' />}
                </div>
                {openEducationDropdown && (
                    <p className='font-mont_alt text-[#5F6368] text-[20px]'>
                       Graduated with a BSc. Mass Communication degree from the University of Lagos and 
                       MS Certificate in Integrated Marketing Communication from West
                       Virginia University, Virginia, U.S.A.
                    </p>
                )}
            </div>

            <div 
                className='flex flex-col gap-[40px]'
            >
                <div className='flex flex-col gap-2'>
                    <p className='font-mont_alt font-bold text-[40px] text-[#222]'>Headquaters team</p>
                    <img src={Chain} alt='BigChain' className='w-[54px] h-[9px]' />
                </div>

                <div className='flex gap-[40px] items-center'>
                    <div className='flex flex-col gap-4 w-[279px] '>
                        <img src={ManagementA} alt='ManagementA' />
                        <p className='font-manja text-[#222] text-base font-bold'>David Akoji</p>
                        <p className='w-[250px] text-[#00AA55] font-manja font-bold text-sm uppercase'>Special duties and state operations (SDSO)</p>
                    </div>

                    <div className='flex flex-col gap-4 w-[279px] '>
                        <img src={ManagementB} alt='ManagementB' />
                        <p className='font-manja text-[#222] text-base font-bold'>Mrs Adeola Adelaja</p>
                        <p className='w-[250px] text-[#00AA55] font-manja font-bold text-sm uppercase'>political, ethics, civic and values (Pcev)</p>
                    </div>

                    <div className='flex flex-col gap-4 w-[279px] '>
                        <img src={ManagementC} alt='ManagementC' />
                        <p className='font-manja text-[#222] text-base font-bold'>John Doe</p>
                        <p className='w-[250px] text-[#00AA55] font-manja font-bold text-sm uppercase'>human resources management (hrm)</p>
                    </div>

                    <div className='flex flex-col gap-4 w-[279px] '>
                        <img src={ManagementD} alt='ManagementD' />
                        <p className='font-manja text-[#222] text-base font-bold'>Mrs Theresa Madueke</p>
                        <p className='w-[250px] text-[#00AA55] font-manja font-bold text-sm uppercase'>political, ethics, civic and values (Pcev)</p>
                    </div>

                </div>

            </div>

            
            <div 
                className='flex flex-col gap-[40px]'
            >
                <div className='flex flex-col items-center justify-center  gap-2'>
                    <img src={Chain} alt='BigChain' className='w-[54px] h-[9px]' />
                    <p className='font-mont_alt font-bold text-[40px] text-[#222]'>Meet our State Directors</p>
                    <p className='w-[522px] text-center text-[20px] text-[#5F6368] font-mont_alt '>
                        State Directorates are responsible for implementing the Agency’s programmes 
                        at the State level. They also supervise and monitor
                        programmes implementation by the Local Government Offices.
                    </p>
                </div>

                <div className='w-full'>
                    <Slider {...settings}>
                        {
                            data?.map((item, index) => (
                                <div className='mx-5' key={item?.id}>
                                    <div className='flex flex-col gap-4 w-[279px] '>
                                        <img src={item?.pic} alt="State Director" />
                                        <p className='font-manja text-[#222] text-base font-bold'>{item?.name}</p>
                                        <p className='w-[250px] text-[#00AA55] font-manja font-bold text-sm uppercase'>{item?.duty}</p>
                                    </div>

                                </div>
                            ))
                        }

                    </Slider>

                </div>
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

export default Management