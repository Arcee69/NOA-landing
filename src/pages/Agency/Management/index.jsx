import React, { useState } from 'react'
import { IoChevronForwardOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5'
import { FiPhone } from 'react-icons/fi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import BG from "../../../assets/png/dg_full_pic.png"
import BG from "../../../assets/png/dg.jpg"
import Chain from "../../../assets/png/chain.png"
import ManagementA from "../../../assets/png/management_pic_a.png"
import ManagementB from "../../../assets/png/management_pic_b.png"
import ManagementC from "../../../assets/png/management_pic_c.png"
import ManagementD from "../../../assets/png/management_pic_d.png"

import DirectorA from "../../../assets/png/director_a.png"
import DirectorB from "../../../assets/png/director_b.png"
import DirectorC from "../../../assets/png/director_c.png"
import DirectorD from "../../../assets/png/director_d.png"
import DirectorE from "../../../assets/png/director_e.png"
import DirectorF from "../../../assets/png/director_f.png"
import DirectorG from "../../../assets/png/director_g.png"
import DirectorH from "../../../assets/png/director_h.png"
import DirectorI from "../../../assets/png/director_i.png"
import DirectorJ from "../../../assets/png/director_j.png"
import DirectorK from "../../../assets/png/director_k.png"
import DirectorL from "../../../assets/png/director_l.png"
import DirectorM from "../../../assets/png/director_m.png"
import DirectorN from "../../../assets/png/director_n.png"
import DirectorO from "../../../assets/png/director_o.png"
import DirectorP from "../../../assets/png/director_p.png"
import DirectorQ from "../../../assets/png/director_q.png"
import DirectorR from "../../../assets/png/director_r.png"
import DirectorS from "../../../assets/png/director_s.png"
import DirectorT from "../../../assets/png/director_t.png"
import DirectorU from "../../../assets/png/director_t.png"
import DirectorZ from "../../../assets/png/director_t.png"

import DirectorTwo from "../../../assets/png/director_2.png"
import DirectorThree from "../../../assets/png/director_3.png"
import DirectorFour from "../../../assets/png/director_4.png"
import DirectorFive from "../../../assets/png/director_5.png"
import DirectorSix from "../../../assets/png/director_6.png"
import DirectorTen from "../../../assets/png/director_10.png"

import Suggestion from "../../../assets/png/suggestion.png"

import TeamA from "../../../assets/png/team_a.png"
import TeamB from "../../../assets/png/team_b.png"
import TeamC from "../../../assets/png/team_c.png"
import TeamD from "../../../assets/png/team_d.png"
import TeamE from "../../../assets/png/team_e.png"
import TeamF from "../../../assets/png/team_f.png"
import TeamG from "../../../assets/png/team_g.png"
import TeamH from "../../../assets/png/team_h.png"
import TeamI from "../../../assets/png/team_i.png"
import TeamJ from "../../../assets/png/team_j.png"
import TeamK from "../../../assets/png/team_k.png"
import TeamL from "../../../assets/png/team_l.png"

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
            name: "Tracy Ikolomi",
            state: "Delta State",
            phone: "07034220750"
        },
        {
            id: 2,
            pic: DirectorB,
            name: "Audu Bitrus Idoko",
            state: "Benue State",
            phone: "08133363143"
        },
        {
            id: 3,
            pic: DirectorC,
            name: "Salako Olufunke Fransisca",
            state: "Ogun State",
            phone: "08067369770"
        },
        {
            id: 4,
            pic: DirectorD,
            name: "Theophilus Nwokpor",
            state: "Ebonyi State",
            phone: "08033614522"
        },
        {
            id: 5,
            pic: DirectorE,
            name: "Dr Banigo Edward",
            state: "Bayelsa State",
            phone: "08022546092"
        },
        {
            id: 6,
            pic: DirectorF,
            name: "Babangida Kurfi",
            state: "Sokoto State",
            phone: "07066857906"
        },
        {
            id: 7,
            pic: DirectorG,
            name: "Akin Adeyemi",
            state: "Ekiti State",
            phone: "08077441547"
        },
        {
            id: 8,
            pic: DirectorH,
            name: "Adefolalu Adelayo",
            state: "Ondo State",
            phone: "08034719169"
        },
        {
            id: 9,
            pic: DirectorI,
            name: "Maureen Oparaji",
            state: "Imo State",
            phone: "08037760450"
        },
        {
            id: 9,
            pic: DirectorJ,
            name: "Adeyemi Olusegun",
            state: "Kwara State",
            phone: "08036667682"
        },
        {
            id: 10,
            pic: DirectorK,
            name: "Adaline Waye",
            state: "Gombe State",
            phone: "08023747546"
        },
        {
            id: 11,
            pic: DirectorL,
            name: "Ahmed Tijani Ibrahim",
            state: "Jigawa State",
            phone: "08038387561"
        },
        {
            id: 12,
            pic: DirectorM,
            name: "Kenang Tabitha Pamhworo",
            state: "Plateau State",
            phone: "08064270708"
        },
        {
            id: 13,
            pic: DirectorN,
            name: "Mkpouto Mkpouto Ufot",
            state: "Akwaibom State",
            phone: "08136286409"
        },
        {
            id: 14,
            pic: DirectorO,
            name: "Richard Dangari",
            state: "Adamawa State",
            phone: "08136286409"
        },
        {
            id: 15,
            pic: DirectorP,
            name: "Zakari Muhammad",
            state: "Taraba State",
            phone: "07063547963"
        },
        {
            id: 16,
            pic: DirectorQ,
            name: "Ijeoma Agbanusi",
            state: "FCT",
            phone: "08033012380"
        },
        {
            id: 17,
            pic: DirectorR,
            name: "Clara Nwachukwu",
            state: "Enugu State",
            phone: "08055262679"
        },
        {
            id: 18,
            pic: DirectorS,
            name: "Hamisu Abubakra",
            state: "Kaduna State",
            phone: "08034527431"
        },
        {
            id: 19,
            pic: DirectorT,
            name: "Ibrahim Aminu",
            state: "Zamfara State",
            phone: "08102966516"
        },
        {
            id: 20,
            pic: DirectorU,
            name: "Tukur Adedeji Mustafa",
            state: "Lagos State",
            phone: "08080700003"
        },
        {
            id: 21,
            pic: DirectorT,
            name: "Ibor Ibor Otu",
            state: "Cross-River State",
            phone: "08134149822"
        },
        {
            id: 22,
            pic: DirectorT,
            name: "Joseph Yaro Machika",
            state: "Kebbi State",
            phone: "08025701046"
        },
        {
            id: 23,
            pic: DirectorT,
            name: "Olukemi Afolayan",
            state: "Oyo State",
            phone: "08135607164"
        },
        {
            id: 24,
            pic: DirectorZ,
            name: "Garba Salisu",
            state: "Kano State",
            phone: "08034104904"
        },
        {
            id: 25,
            pic: DirectorT,
            name: "Zainab Muhammed Jiddah",
            state: "Borno State",
            phone: "08038568365"
        },
        {
            id: 26,
            pic: DirectorTwo,
            name: "Gondo Aluo Priscilla",
            state: "Nasarawa State",
            phone: "08035894322"
        },
        {
            id: 27,
            pic: DirectorThree,
            name: "Theresa Omaga",
            state: "Bauchi State",
            phone: "08035466704"
        },
        {
            id: 28,
            pic: DirectorFour,
            name: "Ali Audu",
            state: "Yobe State",
            phone: "08036150794"
        },
        {
            id: 29,
            pic: DirectorFive,
            name: "Abdulganiyu Dare",
            state: "Kogi State",
            phone: "08061223921"
        },
        {
            id: 30,
            pic: DirectorSix,
            name: "Gbongbo Ibrahim Yahaya Takum",
            state: "Niger State",
            phone: "08063740598"
        },
        {
            id: 31,
            pic: DirectorT,
            name: "Muktar Tsagem",
            state: "Katsina State",
            phone: "08036225610"
        },
        {
            id: 32,
            pic: DirectorT,
            name: "Bola Morgan",
            state: "Osun State",
            phone: "09123191568"
        },
        {
            id: 33,
            pic: DirectorT,
            name: "Edozie Ajaegbu",
            state: "Anambra State",
            phone: "07034953894"
        },
        {
            id: 34,
            pic: DirectorTen,
            name: "Ayo Tamuno Young",
            state: "Rivers State",
            phone: "08035536896"
        },
        {
            id: 35,
            pic: DirectorT,
            name: "Osahon Woghiren",
            state: "Edo State",
            phone: "08056114012"
        },
        {
            id: 36,
            pic: DirectorT,
            name: "Regina Iroha",
            state: "Abia State",
            phone: "08038749734"
        },
    ]

    const headquarterData = [
        {
            id: 1,
            pic: TeamA,
            name: "Tessy Nnalue",
            duty: "Director, Orientation & Behaviour Modification (OBM)"
        },
        {
            id: 2,
            pic: TeamB,
            name: "Kenneth Onyejepu",
            duty: "Director, Procurement"
        },
        {
            id: 3,
            pic: TeamC,
            name: "Mrs. Theresa Maduekwe",
            duty: "Director, Public-Education/Mass Mobilization (PEMM)"
        },
        {
            id: 4,
            pic: TeamD,
            name: "David Akoji",
            duty: "Director, Special Duties & State Operations (SDSO)"
        },
        {
            id: 5,
            pic: TeamE,
            name: "Mrs. Adeola Adelaja",
            duty: "Director, Political, Civic, Ethics and Values (PCEV)"
        },
        {
            id: 6,
            pic: TeamF,
            name: "Williams Dogo",
            duty: "Director, Legal"
        },
        {
            id: 7,
            pic: TeamG,
            name: "John Bala Asata",
            duty: "Director, Documentation, Translation & Publication (DTP)"
        },
        {
            id: 8,
            pic: TeamH,
            name: "Sule Haruna",
            duty: "Director, Finance & Accounts (F&A)"
        },
        {
            id: 9,
            pic: TeamI,
            name: "Mrs. Rebecca Nasamu",
            duty: "Director, General Services (GS)"
        },
        {
            id: 10,
            pic: TeamJ,
            name: "Mrs. Ayisola Olowoyo",
            duty: "Director, Human Resources Management (HRM)"
        },
        {
            id: 11,
            pic: TeamK,
            name: "Mrs, Olubukola Olorunfemi",
            duty: "Director, Reform, Coordination and Service Improvement (RCSI)"
        },
        {
            id: 12,
            pic: TeamL,
            name: "Mr. Nura Kobi",
            duty: "Director, Planning, Research & Strategy (PRS)"
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
        <div className='hidden  px-[100px] py-[19px] lg:flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base '>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>Management</p>
            </div>
        </div>

        <div className='lg:px-[100px] flex flex-col gap-[72px]  mb-[72px] relative mt-10 lg:mt-5'>
            <div className="bg-[#00000033]">
                <div 
                    style={{ background: `url(${BG}) no-repeat center center`,  backgroundSize: "contain"}}        
                    className='flex flex-col h-[507px] lg:h-[590px] w-full'
                >
                    <div className='lg:hidden flex-grow'></div>
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
                    <div className='hidden lg:flex flex-grow'></div> {/* This div will take up the remaining space */}
                    <div
                        className='bg-[#01432233] w-full flex flex-col h-[92px] py-5 px-6'
                    >
                        <p className='font-mont_alt font-bold text-[20px] text-[#fff]'>Lanre Issa-Onilu</p>
                        <p className='font-mont_alt font-medium text-[18px] text-[#fff]'>Director General</p>
                    </div>
                </div>
            </div>

            <div className='px-3 w-full lg:px-0'>
                <div className='flex flex-col gap-4 w-full p-5 border border-[#ccc] rounded-xl'>
                    <div className='flex items-center justify-between' onClick={() => handleBackgroundDropDown()}>
                        <p className='text-base lg:text-[24px] font-mont_alt font-bold text-[#222]'>Professional Background</p>
                        {openBackgroundDropdown ? <IoIosArrowUp className='text-[#ccc] text-[32px]'/> : <IoIosArrowDown className='text-[#ccc] text-[32px]' />}
                    </div>
                    {openBackgroundDropdown && (
                        <p className='font-mont_alt text-[#5F6368] text-sm lg:text-[20px]'>
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
            </div>

            <div className='px-3 w-full lg:px-0'>
                <div className='flex flex-col gap-4 w-full p-5 border border-[#ccc] rounded-xl'>
                    <div className='flex items-center justify-between' onClick={() => handleEducationDropDown()}>
                        <p className='text-base lg:text-[24px] font-mont_alt font-bold text-[#222]'>Education</p>
                        {openEducationDropdown ? <IoIosArrowUp className='text-[#ccc] text-[32px]'/> : <IoIosArrowDown className='text-[#ccc] text-[32px]' />}
                    </div>
                    {openEducationDropdown && (
                        <p className='font-mont_alt text-[#5F6368] text-sm lg:text-[20px]'>
                        Graduated with a BSc. Mass Communication degree from the University of Lagos and 
                        MS Certificate in Integrated Marketing Communication from West
                        Virginia University, Virginia, U.S.A.
                        </p>
                    )}
                </div>
            </div>

            <div className='flex flex-col gap-[40px] px-3 lg:px-0'>
                <div className='flex flex-col gap-2'>
                    <p className='font-mont_alt font-bold text-[24px] lg:text-[40px] text-[#222]'>Headquaters team</p>
                    <img src={Chain} alt='BigChain' className='w-[54px] h-[9px]' />
                </div>

                <div className='w-full'>
                    <Slider {...settings}>
                        {
                            headquarterData?.map((item, index) => (
                                <div className='mx-5' key={item?.id}>
                                    <div className='flex flex-col gap-2 w-[279px] '>
                                        <img src={item?.pic} alt="State Director" />
                                        <p className='font-manja text-[#222] text-base font-bold'>{item?.name}</p>
                                        <p className='w-[250px] text-[#00AA55] font-manja font-bold text-sm uppercase'>{item?.duty}</p>
                                    </div>

                                </div>
                            ))
                        }

                    </Slider>

                </div>

                {/* <div className='flex flex-col lg:flex-row gap-5 lg:gap-[40px] lg:items-center'>
                    <div className='flex flex-col gap-4 w-full lg:w-[279px] '>
                        <img src={ManagementA} alt='ManagementA' />
                        <p className='font-manja text-[#222] text-base font-bold'>David Akoji</p>
                        <p className='w-[250px] text-[#00AA55] font-manja font-bold text-sm uppercase'>Special duties and state operations (SDSO)</p>
                    </div>

                    <div className='flex flex-col gap-4 w-full lg:w-[279px] '>
                        <img src={ManagementB} alt='ManagementB' />
                        <p className='font-manja text-[#222] text-base font-bold'>Mrs Adeola Adelaja</p>
                        <p className='w-[250px] text-[#00AA55] font-manja font-bold text-sm uppercase'>political, ethics, civic and values (Pcev)</p>
                    </div>

                    <div className='flex flex-col gap-4 w-full lg:w-[279px] '>
                        <img src={ManagementC} alt='ManagementC' />
                        <p className='font-manja text-[#222] text-base font-bold'>John Doe</p>
                        <p className='w-[250px] text-[#00AA55] font-manja font-bold text-sm uppercase'>human resources management (hrm)</p>
                    </div>

                    <div className='flex flex-col gap-4 w-full lg:w-[279px] '>
                        <img src={ManagementD} alt='ManagementD' />
                        <p className='font-manja text-[#222] text-base font-bold'>Mrs Theresa Madueke</p>
                        <p className='w-[250px] text-[#00AA55] font-manja font-bold text-sm uppercase'>political, ethics, civic and values (Pcev)</p>
                    </div>

                </div> */}

            </div>

            
            <div className='flex flex-col gap-[40px]'>
                <div className='flex flex-col gap-2 px-3 lg:px-0'>
                    <img src={Chain} alt='BigChain' className='w-[54px] h-[9px]' />
                    <p className='font-mont_alt font-bold text-[20px] lg:text-[40px] text-[#222]'>Meet our State Directors</p>
                    <p className='lg:w-[522px] text-sm lg:text-[20px] text-[#5F6368] font-mont_alt '>
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
                                    <div className='flex flex-col gap-2 w-[279px] '>
                                        <img src={item?.pic} alt="State Director" />
                                        <p className='font-manja text-[#222] text-base font-bold'>{item?.name}</p>
                                        <p className='font-manja text-[#00AA55] text-base font-bold'>{item?.state}</p>
                                        <p className='w-[250px] text-[#00AA55] font-manja font-bold text-sm uppercase'>{item?.phone}</p>
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