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

import ZonalA from "../../../assets/png/zonal_a.jpg"
import ZonalB from "../../../assets/png/zonal_b.jpg"
import ZonalC from "../../../assets/png/zonal_c.jpg"
import ZonalD from "../../../assets/png/zonal_d.jpg"
import ZonalE from "../../../assets/png/zonal_e.jpg"
import ZonalF from "../../../assets/png/zonal_f.jpg"

import DirectorA from "../../../assets/png/director_a.png"
import DirectorB from "../../../assets/png/director_b.jpg"
import DirectorC from "../../../assets/png/director_c.jpg"
import DirectorD from "../../../assets/png/director_d.png"
import DirectorE from "../../../assets/png/director_e.jpg"
import DirectorF from "../../../assets/png/director_f.png"
import DirectorG from "../../../assets/png/director_g.jpg"
import DirectorH from "../../../assets/png/director_h.png"
import DirectorI from "../../../assets/png/director_i.png"
import DirectorJ from "../../../assets/png/director_j.jpg"
import DirectorK from "../../../assets/png/director_k.png"
import DirectorL from "../../../assets/png/director_l.png"
import DirectorM from "../../../assets/png/director_m.png"
import DirectorN from "../../../assets/png/director_n.png"
import DirectorO from "../../../assets/png/director_o.png"
import DirectorP from "../../../assets/png/director_p.png"
import DirectorQ from "../../../assets/png/director_q.jpg"
import DirectorR from "../../../assets/png/director_r.png"
import DirectorS from "../../../assets/png/director_s.jpg"
import DirectorT from "../../../assets/png/director_t.png"
import DirectorU from "../../../assets/png/director_u.png"
import DirectorV from "../../../assets/png/director_v.jpg"
import DirectorW from "../../../assets/png/director_w.jpg"
import DirectorZ from "../../../assets/png/director_z.jpg"

import DirectorTwo from "../../../assets/png/director_2.jpg"
import DirectorThree from "../../../assets/png/director_3.jpg"
import DirectorFour from "../../../assets/png/director_4.jpg"
import DirectorFive from "../../../assets/png/director_5.jpg"
import DirectorSix from "../../../assets/png/director_6.png"
import DirectorTen from "../../../assets/png/director_10.jpg"
import DirectorEleven from "../../../assets/png/director_11.jpg"
import DirectorTwelve from "../../../assets/png/director_12.jpg"
import DirectorThirteen from "../../../assets/png/director_13.jpg"
import DirectorFourteen from "../../../assets/png/director_14.jpg"
import DirectorFifteen from "../../../assets/png/director_15.jpg"
import DirectorSixteen from "../../../assets/png/director_16.jpg"
import DirectorSeventeen from "../../../assets/png/director_17.jpg"
import DirectorEighteen from "../../../assets/png/director_18.jpg"

import Suggestion from "../../../assets/png/suggestion.png"

import TeamA from "../../../assets/png/team_a.png"
import TeamB from "../../../assets/png/team_b.png"
import TeamC from "../../../assets/png/team_c.png"
import TeamD from "../../../assets/png/team_d.png"
import TeamE from "../../../assets/png/team_e.png"
import TeamF from "../../../assets/png/team_f.png"
import TeamG from "../../../assets/png/team_g.jpg"
import TeamH from "../../../assets/png/team_h.png"
import TeamI from "../../../assets/png/team_i.png"
import TeamJ from "../../../assets/png/team_j.png"
import TeamK from "../../../assets/png/team_k.png"
import TeamL from "../../../assets/png/team_l.png"
import TeamM from "../../../assets/png/team_m.jpg"
import TeamN from "../../../assets/png/team_n.jpg"
import TeamO from "../../../assets/png/team_o.jpg"
import TeamP from "../../../assets/png/team_p.jpg"
import TeamQ from "../../../assets/png/team_q.jpg"

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
            name: "Mrs Tracy Omamode Basil-Ikolomi",
            state: "Delta State",
            phone: "07034220750"
        },
        {
            id: 2,
            pic: DirectorB,
            name: "Mr. Dewua Mark Ucha",
            state: "Benue State",
            phone: "08080836612"
        },
        {
            id: 3,
            pic: DirectorC,
            name: "Mrs. Osinfowokan Adeola Olufunke",
            state: "Ogun State",
            phone: "07068123477"
        },
        {
            id: 4,
            pic: DirectorD,
            name: "Mr. Nwokpor Theophilus Nwafor",
            state: "Ebonyi State",
            phone: "08033614522"
        },
        {
            id: 5,
            pic: DirectorE,
            name: "Mrs. Olobio Grace Ebiakpo",
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
            name: "Mrs. Akomolede Funmilayo Oluwakemi",
            state: "Ekiti State",
            phone: "08039409190"
        },
        {
            id: 8,
            pic: DirectorH,
            name: "Mr. Adekunle James Ajayi",
            state: "Ondo State",
            phone: "08034956789"
        },
        {
            id: 9,
            pic: DirectorI,
            name: "Ms. Stellamaris Demian-Igwe",
            state: "Imo State",
            phone: "08033160751"
        },
        {
            id: 9,
            pic: DirectorJ,
            name: "Mr. Dare, Abdulganiyu Olurotimi",
            state: "Kwara State",
            phone: "08061223921"
        },
        {
            id: 10,
            pic: DirectorK,
            name: "Ms. Adaline Waye Patari",
            state: "Gombe State",
            phone: "08038262341, 08023747546"
        },
        {
            id: 11,
            pic: DirectorL,
            name: "Mr. Ahmed Tijani Ibrahim",
            state: "Jigawa State",
            phone: "08038387561, 07088829639"
        },
        {
            id: 12,
            pic: DirectorM,
            name: "Kenang Tabitha Pamhworo",
            state: "Plateau State",
            phone: "08064270708, 08052633616"
        },
        {
            id: 13,
            pic: DirectorN,
            name: "Mkpoutom Ufot Mkpoutom ",
            state: "Akwa ibom State",
            phone: "08136286409"
        },
        {
            id: 14,
            pic: DirectorO,
            name: "Mr. Richard Bala Dangari",
            state: "Adamawa State",
            phone: "08025711516"
        },
        {
            id: 15,
            pic: DirectorP,
            name: "Mr. Zakari Muhammad Kasimu",
            state: "Taraba State",
            phone: "07063547963, 08024124340"
        },
        {
            id: 16,
            pic: DirectorQ,
            name: "Mrs. Acharu Opaluwa",
            state: "FCT",
            phone: "08037861237"
        },
        {
            id: 17,
            pic: DirectorR,
            name: "Mrs. Nwachukwu Chinyere Clara",
            state: "Enugu State",
            phone: "08055262679, 08135594221"
        },
        {
            id: 18,
            pic: DirectorS,
            name: "Mr. Danjuma Makama",
            state: "Kaduna State",
            phone: "08023355620"
        },
        {
            id: 19,
            pic: DirectorV,
            name: "Ibrahim Aminu",
            state: "Zamfara State",
            phone: "08102966516, 08025728091"
        },
        {
            id: 20,
            pic: DirectorU,
            name: "Dr. Tukur Adedeji Mustafa",
            state: "Lagos State",
            phone: "08080700003"
        },
        {
            id: 21,
            pic: DirectorThirteen,
            name: "Mr. Asanye, John Mfon",
            state: "Cross-River State",
            phone: " 08035818141, 08055830056"
        },
        {
            id: 22,
            pic: DirectorEighteen,
            name: "Mr. Mohammed Nasir Karofi",
            state: "Kebbi State",
            phone: "08031511930, 08056044744"
        },
        {
            id: 23,
            pic: DirectorSeventeen,
            name: "Mr Aderogba Akanbi",
            state: "Oyo State",
            phone: "08033587532"
        },
        {
            id: 24,
            pic: DirectorZ,
            name: "Mr. Rabiu Ado",
            state: "Kano State",
            phone: "08066433301"
        },
        {
            id: 25,
            pic: DirectorFifteen,
            name: "Mr. Michael Daniel Bdliya",
            state: "Borno State",
            phone: "07032220001, 08027790071"
        },
        {
            id: 26,
            pic: DirectorTwo,
            name: "Mr. Augustine Akwe",
            state: "Nasarawa State",
            phone: "08138647953"
        },
        {
            id: 27,
            pic: DirectorThree,
            name: "Mr. Muhammad Nasiru Mahe",
            state: "Bauchi State",
            phone: "08065486676"
        },
        {
            id: 28,
            pic: DirectorFour,
            name: "Mr. Mohd Ali Tikau",
            state: "Yobe State",
            phone: "08036150794"
        },
        {
            id: 29,
            pic: DirectorFive,
            name: "Mr. Edogbanya Patrick Yusuf",
            state: "Kogi State",
            phone: " 08035880711"
        },
        {
            id: 30,
            pic: DirectorSix,
            name: "Mr Yahaya Ibrahim Gbongbo",
            state: "Niger State",
            phone: "08063740598"
        },
        {
            id: 31,
            pic: DirectorEleven,
            name: "Mr. Muntari Lawal Tsagem",
            state: "Katsina State",
            phone: "08036225610"
        },
        {
            id: 32,
            pic: DirectorFourteen,
            name: "Mr. Adebiyi Stephen Adefarasin",
            state: "Osun State",
            phone: "09057838299, 08035638191"
        },
        {
            id: 33,
            pic: DirectorSixteen,
            name: "Mr. Ajaegbu Edozie Sunday ",
            state: "Anambra State",
            phone: "07034953894"
        },
        {
            id: 34,
            pic: DirectorTen,
            name: "Dr. Edward Amonia Banigo",
            state: "Rivers State",
            phone: "08032634749"
        },
        {
            id: 35,
            pic: DirectorTwelve,
            name: "Barr. Osahon B. Woghiren",
            state: "Edo State",
            phone: "08056114012"
        },
        {
            id: 36,
            pic: DirectorW,
            name: "Mr. Orji, Victor Onyeanwuna",
            state: "Abia State",
            phone: "08068403377"
        },
       
    ]

    const headquarterData = [
        {
            id: 1,
            pic: TeamA,
            name: "Mrs. Thessy Nnalue",
            duty: "Director, Community Safety Awareness and Compliance"
        },
        {
            id: 2,
            pic: TeamB,
            name: "Mr. Kenneth Onyejepu",
            duty: "Director, Procurement"
        },
        {
            id: 3,
            pic: TeamC,
            name: "Mrs. Theresa Maduekwe",
            duty: "Director, Abuse Rights and Narcotics"
        },
        {
            id: 4,
            pic: TeamD,
            name: "Mr. David Akoji",
            duty: "Director, Special Duties and Zonal Operations"
        },
        {
            id: 5,
            pic: TeamF,
            name: "Barr. Williams Dogo",
            duty: "Director, Legal"
        },
        {
            id: 7,
            pic: TeamH,
            name: "Mr. Sule Haruna",
            duty: "Director, Finance & Accounts (F&A)"
        },
        {
            id: 8,
            pic: TeamI,
            name: "Mrs. Rebecca Nasamu",
            duty: "Director, General Services (GS)"
        },
        {
            id: 9,
            pic: TeamJ,
            name: "Mrs. Ayisola Olowoyo",
            duty: "Director, Human Resources Management (HRM)"
        },
        {
            id: 10,
            pic: TeamK,
            name: "Mrs. Olubukola Olorunfemi",
            duty: "Director, Community Outreach and Development"
        },
        {
            id: 11,
            pic: TeamL,
            name: "Mr. Nura Kobi",
            duty: "Director, Planning, Research & Strategy (PRS)"
        },
        {
            id: 12,
            pic: TeamG,
            name: "Mr. John Bala Asate",
            duty: "Director, Reform Coordination and Service"
        },
        {
            id: 13,
            pic: TeamM,
            name: "Dr. Ayoola Abiodun Olufemi",
            duty: "Director, Health and Social Care"
        },
        {
            id: 14,
            pic: TeamN,
            name: "Mrs Blessing Oyem",
            duty: "Director, Youth Engagement and Inclusion"
        },
        {
            id: 15,
            pic: TeamO,
            name: "Mrs. Olukemi Afolayan Ph.D",
            duty: "Director, Civic Values and Democracy"
        },
        {
            id: 16,
            pic: TeamP,
            name: "Mr. Bala Musa",
            duty: "Director, Communications and Media"
        },
        {
            id: 17,
            pic: TeamQ,
            name: "Mr. Emeka Egbugara",
            duty: "Director, Environment Climate and Energy"
        },
        
    ]

    const zonalData = [
        {
            id: 1,
            pic: ZonalA,
            name: "Mr. Ali Audu",
            zone: "Director North-East",
            phone: "08036150794"
        },
        {
            id: 2,
            pic: ZonalB,
            name: "Mrs. Iroha Regina Oyidiya",
            zone: "Director South-East",
            phone: "08038749734"
        },
        {
            id: 3,
            pic: ZonalC,
            name: "Mrs Priscilla Mrumun Gondoaluor",
            zone: "Director North-Central",
            phone: "08035894322"
        },
        {
            id: 4,
            pic: ZonalD,
            name: "Mr. Hamisu Abubakar",
            zone: "Director North-West",
            phone: "08034527431"
        },
        {
            id: 5,
            pic: ZonalE,
            name: "Mr. Ibor I.",
            zone: "Director South-South",
            phone: " 08134149822"
        },
        {
            id: 6,
            pic: ZonalF,
            name: "Mrs. Salako Olufunke Fransisca",
            zone: "Director South-West",
            phone: "08067369770"
        },
    ]

    const settings = {
        dots: false,
        arrows: true,
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
                                        <img src={item?.pic} alt="State Director" className="h-[300px]" />
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
                    <p className='font-mont_alt font-bold text-[20px] lg:text-[40px] text-[#222]'>Zonal Directors</p>
                </div>

                <div className='w-full'>
                    <Slider {...settings}>
                        {
                            zonalData?.map((item, index) => (
                                <div className='mx-5' key={item?.id}>
                                    <div className='flex flex-col gap-2 w-[279px] '>
                                        <img src={item?.pic} alt="Zonal Director" className="h-[300px]"  />
                                        <p className='font-manja text-[#222] text-base font-bold'>{item?.name}</p>
                                        <p className='font-manja text-[#00AA55] text-base font-bold'>{item?.zone}</p>
                                        <p className='w-[250px] text-[#00AA55] font-manja font-bold text-sm uppercase'>{item?.phone}</p>
                                    </div>

                                </div>
                            ))
                        }

                    </Slider>

                </div>
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
                                        <img src={item?.pic} alt="State Director" className="h-[300px]" />
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