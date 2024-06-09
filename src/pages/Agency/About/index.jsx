import React from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

import Chain from "../../../assets/png/chain.png"
import ChainWhite from "../../../assets/png/chain_white.png"
import Event from "../../../assets/png/event.png"
import BigLogo from "../../../assets/png/big_logo.png"

import Pic1 from "../../../assets/png/pic_1.png"
import Pic2 from "../../../assets/png/pic_2.png"
import Pic3 from "../../../assets/png/pic_3.png"
import Pic4 from "../../../assets/png/pic_4.png"
import Pic5 from "../../../assets/png/pic_5.png"
import Pic6 from "../../../assets/png/pic_6.png"
import Pic7 from "../../../assets/png/pic_7.png"
import Pic8 from "../../../assets/png/pic_8.png"

import Pic9 from "../../../assets/png/pic_9.png"
import Pic10 from "../../../assets/png/pic_10.png"
import Pic11 from "../../../assets/png/pic_11.png"
import Pic12 from "../../../assets/png/pic_12.png"
import Pic13 from "../../../assets/png/pic_13.png"
import Pic14 from "../../../assets/png/pic_14.png"
import Pic15 from "../../../assets/png/pic_15.png"
import Pic16 from "../../../assets/png/pic_16.png"
import Pic17 from "../../../assets/png/pic_17.png"
import Suggestion from "../../../assets/png/suggestion.png"

import CallB from "../../../assets/svg/call.svg"
import Time from "../../../assets/svg/time.svg"
import Mail from "../../../assets/svg/mail.svg"

import Play from "../../../assets/svg/play.svg"

const About = () => {

    const navigate = useNavigate()

  return (
    <div className='flex flex-col'>
        <div className='bg-[#fff] px-[100px] py-[19px] hidden lg:flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base '>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>About Us</p>
            </div>
        </div>

        <div className='bg-[#222222] px-5 lg:px-[100px] mt-[40px] lg:mt-0 w-full flex flex-col lg:flex-row items-center py-[40px] justify-between'>
            <div className='block lg:hidden w-full'>
                <img src={Event} alt='Event' className='w-full h-[203px] md:h-full' />
            </div>
            <div className='w-full lg:w-[480px] flex flex-col gap-4 h-[497px]'>
                <img src={Chain} alt='Chain' className='w-[54px] h-[9px]' />
                <p className='text-[#fff] text-[24px] lg:text-[40px] font-mont_alt font-bold'>The major voice of the National Orientation Agency</p>
                <div className='flex flex-col '>
                    <p className='text-[#fff] font-manja text-sm font-bold'>MALLAM LANRE ISSA-ONILU</p>
                    <p className='text-base text-[#C4C0C0] font-mont_alt '>Director General, since 23 Oct 2023</p>
                </div>
                <p className='text-[18px] font-mont_alt text-[#F9F8F8]'>
                    The main objectives of the Agency, 
                    as provided in Decree 100 of 1993, 
                    are to ensure that government programmes and policies 
                    are better understood by the general public.
                </p>
                <button className='w-[226px] h-[48px] gap-1 flex items-center justify-center bg-[#00AA55] py-4 px-6'>
                    <img src={Play} alt='Play' className='w-6 h-6'/>
                    <p className='font-manja text-sm mt-1 font-bold text-[#fff]'>History Of The Agency</p>
                </button>

            </div>
            <div className='hidden lg:flex w-[670px] h-[406px]'>
                <img src={Event} alt='Event' className='w-[670px] h-[406px]' />
            </div>

        </div>

        <div className='bg-[#fff] w-full px-5 lg:px-[100px] pt-[40px] gap-[40px] lg:gap-[120px] flex flex-col lg:flex-row items-center'>
            <img src={BigLogo} alt='Big_logo' className='w-[256px] h-[256px]' />
            <div className='flex flex-col lg:flex-row items-center lg:gap-[40px] pt-[40px]'>
                <div className='flex flex-col items-center lg:items-start gap-4 lg:w-[411px] h-[337px]'>
                    <img src={Chain} alt='Chain' className='w-[54px] h-[9px]' />
                    <p className='font-mont_alt text-[#222222] font-bold text-[24px] lg:text-[40px]'>Mission</p>
                    <p className='text-[#5F6368] text-center lg:text-left font-medium text-sm lg:text-base font-mont_alt'>
                        To consistently raise awareness, provide timely and credible feedback; 
                        positively change attitudes, values and behaviours; accurately and adequately inform; 
                        and sufficiently mobilize citizens to act in ways that promote peace, harmony; and national 
                        development.
                    </p>
                </div>
                <div className='flex flex-col gap-4 items-center lg:items-start lg:w-[411px] h-[337px]'>
                    <img src={Chain} alt='Chain' className='w-[54px] h-[9px]' />
                    <p className='font-mont_alt text-[#222222] font-bold text-[24px] lg:text-[40px]'>Vision</p>
                    <p className='text-[#5F6368] text-center lg:text-left font-medium text-sm lg:text-base font-mont_alt'>
                        To consistently raise awareness, provide timely and credible feedback; 
                        positively change attitudes, values and behaviours; accurately and adequately inform; 
                        and sufficiently mobilize citizens to act in ways that promote peace, harmony; 
                        and national development.
                    </p>
                </div>
            </div>
        </div>

        <div className='bg-[#222222] w-full flex items-center justify-center px-5 lg:px-0'>
            <div className='flex flex-col items-center py-[56px]'>
                <div className='w-full lg:w-[480px] h-[220px] lg:h-[305px] flex flex-col items-start lg:items-center gap-4'>
                    <img src={Chain} alt='Chain'  className='w-[54px] h-[9px]' />
                    <p className='font-mont_alt font-bold text-[24px] lg:text-[40px] text-[#fff]'>Objectives</p>
                    <p className='font-mont_alt font-medium text-sm lg:text-[20px] text-left lg:text-center text-[#fff] leading-[22px] lg:leading-[32px]'>
                        The main objectives of the Agency, as provided in Decree 100 of 1993, 
                        are to ensure that Government programmes and policies are better understood by 
                        the general public and:
                    </p>
                </div>

                <div className='flex items-center justify-center flex-wrap gap-[32px]'>
                    <div className='w-full lg:w-[604px] bg-[#2E2E2E] flex items-center lg:justify-center  py-[8px] pl-5 lg:pl-[60px] pr-4 rounded-lg lg:h-[100px] border border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#D6E3E6] text-base leading-[28px] font-medium font-mont_alt'>
                            Mobilize favourable public opinion for such programmes and policies
                        </p>
                    </div>
                    <div className='w-full lg:w-[604px] bg-[#2E2E2E] flex items-center justify-center  py-[8px] pl-5 lg:pl-[60px] pr-4 rounded-lg lg:h-[100px] border border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#D6E3E6] text-base leading-[28px] font-medium font-mont_alt'>
                            Establish feedback channels to Government on all aspects of Nigerian national life;
                        </p>
                    </div>
                    <div className='w-full lg:w-[604px] bg-[#2E2E2E] flex items-center justify-center  py-[8px] pl-5 lg:pl-[60px] pr-4 rounded-lg lg:h-[100px] border border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#D6E3E6] text-base leading-[28px] font-medium font-mont_alt'>
                            Encourage informal education through public enlightenment activities and publications
                        </p>
                    </div>
                    <div className='w-full lg:w-[604px] bg-[#2E2E2E] flex items-center justify-center  py-[8px] pl-5 lg:pl-[60px] pr-4 rounded-lg lg:h-[100px] border border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#D6E3E6] text-base leading-[28px] font-medium font-mont_alt'>
                            Fostering Respect For Constituted Authority; And Instilling In The
                            Citizens A Sense Of Loyalty To The Fatherland.
                        </p>
                    </div>
                    <div className='w-full lg:w-[604px] bg-[#2E2E2E] flex items-center justify-center  py-[8px] pl-5 lg:pl-[60px] pr-4 rounded-lg lg:h-[100px] border border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#D6E3E6] text-base leading-[28px] font-medium font-mont_alt'>
                            Establish appropriate national framework for educating, 
                            orientating and indoctrinating Nigerians towards attitudes, 
                            values and culture which project individual’s national pride 
                        </p>
                    </div>
                    <div className='w-full lg:w-[604px] bg-[#2E2E2E] flex items-center justify-center  py-[8px] pl-5 lg:pl-[60px] pr-4 rounded-lg lg:h-[100px] border border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#D6E3E6] text-base leading-[28px] font-medium font-mont_alt'>
                            Awaken the consciousness of Nigerians to their responsibilities to the promotion of 
                            national unity, citizens’ commitment to their human rights to build a free, 
                            just and progressive society;
                        </p>
                    </div>
                    <div className='w-full lg:w-[604px] bg-[#2E2E2E] flex items-center   py-[8px] pl-5 lg:pl-[60px] pr-4 rounded-lg lg:h-[100px] border border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#D6E3E6] text-base leading-[28px] font-medium font-mont_alt'>
                            Ensure and uphold leadership by example;
                        </p>
                    </div>
                    <div className='w-full lg:w-[604px] bg-[#2E2E2E] flex items-center justify-center  py-[8px] pl-5 lg:pl-[60px] pr-4 rounded-lg lg:h-[100px] border border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#D6E3E6] text-base leading-[28px] font-medium font-mont_alt'>
                            Develop among Nigerians of all ages and sex, social and cultural values and awareness 
                            which will inculcate the spirit of patriotism, nationalism, self-discipline and 
                            self-reliance;
                        </p>
                    </div>
                    <div className='w-full lg:w-[604px] bg-[#2E2E2E] flex items-center justify-center  py-[8px] pl-5 lg:pl-[60px] pr-4 rounded-lg lg:h-[100px] border border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#D6E3E6] text-base leading-[28px] font-medium font-mont_alt'>
                            Encourage the people to actively and freely participate in discussions and 
                            decisions on matters affecting their general welfare;
                        </p>
                    </div>
                    <div className='w-full lg:w-[604px] bg-[#2E2E2E] flex items-center justify-center  py-[8px] pl-5 lg:pl-[60px] pr-4 rounded-lg lg:h-[100px] border border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#D6E3E6] text-base leading-[28px] font-medium font-mont_alt'>
                            Promote new sets of attitudes and culture for the attainment of the goals and objectives 
                            of a united Nigeria State;
                        </p>
                    </div>
                    {/* <div className='w-[604px] bg-[#2E2E2E] flex items-center justify-center  py-[8px] h-[100px] pl-[60px] pr-4 rounded-lg h-[100px] border border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#D6E3E6] text-base leading-[28px] font-medium font-mont_alt'>
                            Fostering Respect For Constituted Authority; And Instilling In The
                            Citizens A Sense Of Loyalty To The Fatherland.
                        </p>
                    </div>
                    <div className='w-[604px] bg-[#2E2E2E] flex items-center justify-center  py-[8px] h-[100px] pl-[60px] pr-4 rounded-lg h-[100px] border border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#D6E3E6] text-base leading-[28px] font-medium font-mont_alt'>
                            Fostering Respect For Constituted Authority; And Instilling In The
                            Citizens A Sense Of Loyalty To The Fatherland.
                        </p>
                    </div> */}
                
                </div>

            </div>
        </div>

        <div className='bg-[#F5F5F5] w-full flex items-center justify-center px-5 lg:px-0'>
            <div className='flex flex-col items-center py-[56px]'>
                <div className='w-full lg:w-[480px] h-[161px] lg:h-[305px] flex flex-col items-start lg:items-center gap-4'>
                    <img src={Chain} alt='Chain'  className='w-[54px] h-[9px]' />
                    <p className='font-mont_alt font-bold whitespace-nowrap text-[24px] lg:text-[40px] text-[#222222]'>Functions of the Agency</p>
                    <p className='font-mont_alt font-medium text-sm lg:text-[20px] text-left lg:text-center text-[#222222] leading-[32px]'>
                        Specifically, the Agency performs the following functions:
                    </p>
                </div>

                <div className='flex items-center justify-center flex-wrap gap-[30px]'>

                    <div className='w-full lg:w-[605px] bg-[#FFFFFF] flex items-center justify-center  py-[8px] lg:h-[99px] pl-5 lg:pl-[60px] pr-4 rounded-lg border-[8px] border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#222] text-base leading-[28px] font-medium font-mont_alt'>
                            Enlightenment of the general public on Government policies, programmes and activities;
                            programmes and activities;
                        </p>
                    </div>
                    <div className='w-full lg:w-[605px] bg-[#FFFFFF] flex items-center justify-center  py-[8px] lg:h-[99px] pl-5 lg:pl-[60px] pr-4 rounded-lg border-[8px] border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#222] text-base leading-[28px] font-medium font-mont_alt'>
                            Propagate and promote the spirit of dignity of labour, honesty and commitment to 
                            qualitative production, promotion and consumption of home produced commodities and 
                            services;
                        </p>
                    </div>
                    <div className='w-full lg:w-[605px] bg-[#FFFFFF] flex items-center justify-center  py-[8px] lg:h-[99px] pl-5 lg:pl-[60px] pr-4 rounded-lg border-[8px] border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#222] text-base leading-[28px] font-medium font-mont_alt'>
                            Mobilization of favourable public opinion and support for Government policies, 
                            programmes and activities;
                        </p>
                    </div>
                    <div className='w-full lg:w-[605px] bg-[#FFFFFF] flex items-center justify-center  py-[8px] lg:h-[99px] pl-5 lg:pl-[60px] pr-4 rounded-lg border-[8px] border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#222] text-base leading-[28px] font-medium font-mont_alt'>
                            Re-orientate the populace about power, its use and proper role of Government in serving 
                            the collective interest of Nigerians;
                        </p>
                    </div>
                    <div className='w-full lg:w-[605px] bg-[#FFFFFF] flex items-center justify-center  py-[8px] lg:h-[99px] pl-5 lg:pl-[60px] pr-4 rounded-lg border-[8px] border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#222] text-base leading-[28px] font-medium font-mont_alt'>
                            Collection, collation, analysis and provision of feedback from the public to 
                            Government on its policies, programmes and activities;
                        </p>
                    </div>
                    <div className='w-full lg:w-[605px] bg-[#FFFFFF] flex items-center justify-center  py-[8px] lg:h-[99px] pl-5 lg:pl-[60px] pr-4 rounded-lg border-[8px] border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#222] text-base leading-[28px] font-medium font-mont_alt'>
                            Propagate the need to eschew all vices in public life including corruption, 
                            dishonesty, electoral and census malpractice, ethnic parochial and religious bigotry;
                        </p>
                    </div>
                    <div className='w-full lg:w-[605px] bg-[#FFFFFF] flex items-center justify-center  py-[8px] lg:h-[99px] pl-5 lg:pl-[60px] pr-4 rounded-lg border-[8px] border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#222] text-base leading-[28px] font-medium font-mont_alt'>
                            Establish social institutions and framework for deliberate exposure of Nigerians to 
                            democratic norms and values for a virile, peaceful, united, progressive and disciplined 
                            society;
                        </p>
                    </div>
                    <div className='w-full lg:w-[605px] bg-[#FFFFFF] flex items-center justify-center  py-[8px] lg:h-[99px] pl-5 lg:pl-[60px] pr-4 rounded-lg border-[8px] border-y-0 border-x-[#00AA55]'>
                        <p className='text-[#222] text-base leading-[28px] font-medium font-mont_alt'>
                            Arouse the consciousness of all categories of Nigerians to their rights and privileges, 
                            responsibilities and obligations as citizens of Nigeria;
                        </p>
                    </div>
                  
                
                </div>

            </div>
        </div>

        <div className='flex flex-col gap-[40px] bg-[#fff] pt-[112px] pb-[72px] px-5 lg:px-[150px] lg:items-center'>
            <div className='flex flex-col lg:items-center lg:justify-center lg:w-[440px] lg:mx-auto'>
                <img src={Chain} alt='Chain'  className='w-[54px] h-[9px]' />
                <p className='font-mont_alt font-bold text-[24px] lg:text-[40px] text-[#222222]'>Collaborating MDAs</p>
            </div>
            <div className='flex gap-5 flex-col'>
                <div className=' lg:h-[142px] flex flex-wrap gap-5 items-center justify-center lg:justify-start'>
                    <img src={Pic1} alt='MDAs' className='w-[122px] h-[122px]' />
                    <img src={Pic2} alt='MDAs' className='w-[122px] h-[122px]' />
                    <img src={Pic3} alt='MDAs' className='w-[122px] h-[122px]' />
                    <img src={Pic4} alt='MDAs' className='w-[122px] h-[122px]' />
                    <img src={Pic5} alt='MDAs' className='w-[122px] h-[122px]' />
                    <img src={Pic6} alt='MDAs' className='w-[122px] h-[122px]' />
                    <img src={Pic7} alt='MDAs' className='w-[122px] h-[122px]' />
                    <img src={Pic8} alt='MDAs' className='w-[122px] h-[122px]' />
                   
                </div>

                <div className=' lg:h-[142px] flex flex-wrap gap-5 items-center justify-center lg:justify-start'>
                    <img src={Pic9} alt='MDAs' className='w-[106px] h-[106px]' />
                    <img src={Pic10} alt='MDAs' className='w-[106px] h-[106px]' />
                    <img src={Pic11} alt='MDAs' className='w-[106px] h-[106px]' />
                    <img src={Pic12} alt='MDAs' className='w-[106px] h-[106px]' />
                    <img src={Pic13} alt='MDAs' className='w-[106px] h-[106px]' />
                    <img src={Pic14} alt='MDAs' className='w-[106px] h-[106px]' />
                    <img src={Pic15} alt='MDAs' className='w-[106px] h-[106px]' />
                    <img src={Pic16} alt='MDAs' className='w-[106px] h-[106px]' />
                    <img src={Pic17} alt='MDAs' className='w-[106px] h-[106px]' />
                </div>
            </div>

        </div>

        <div className='bg-[#00783C] flex flex-col items-center px-5 lg:px-0 gap-[20px] lg:gap-[40px] justify-center pt-[40px] pb-[80px]'>
            <img src={ChainWhite} alt='Chain' className='w-[54px] h-[9px]' />
            <p className='font-bold lg:w-[936px] text-center text-[24px] lg:text-[40px] font-mont_alt text-[#fff]'>You should be part of the change and development in Nigeria</p>
            <p className='font-mont_alt font-medium text-sm lg:text-[20px] text-[#fff] leading-[32px]'>Want to promote programmes and policies?</p>
            <button
                className='w-[135px] h-[48px] bg-[#00AA55] rounded flex items-center justify-center'
                onClick={() => navigate("/contact")}
            >
                <p className='font-manja text-[#fff] font-bold text-sm'>Contact Us</p>
            </button>
        </div>

        <div
            style={{ background: `url(${Suggestion})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"  }}
            className='lg:h-[512px] w-full flex py-10 lg:py-0 items-center gap-[20px] lg:gap-[45px] justify-center flex-col'
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

export default About