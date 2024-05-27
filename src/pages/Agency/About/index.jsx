import React from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'

import Chain from "../../../assets/png/chain.png"
import Event from "../../../assets/png/event.png"
import BigLogo from "../../../assets/png/big_logo.png"

import Play from "../../../assets/svg/play.svg"

const About = () => {
  return (
    <div className='flex flex-col'>
        <div className='bg-[#fff] px-[100px] py-[19px] flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base '>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>About Us</p>
            </div>
        </div>
        <div className='bg-[#222222] px-[100px] w-full flex items-center py-[40px] justify-between'>
            <div className='w-[480px] flex flex-col gap-4 h-[497px]'>
                <img src={Chain} alt='Chain' className='w-[54px] h-[9px]' />
                <p className='text-[#fff] text-[40px] font-mont_alt font-bold'>The major voice of the National Orientation Agency</p>
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
            <div className='w-[670px] h-[406px]'>
                <img src={Event} alt='Event' className='w-[670px] h-[406px]' />
            </div>

        </div>

        <div className='bg-[#fff] w-full px-[100px] pt-[40px] gap-[120px] flex items-center'>
            <img src={BigLogo} alt='Big_logo' className='w-[256px] h-[256px]' />
            <div className='flex items-center gap-[40px] pt-[40px]'>
                <div className='flex flex-col gap-4 w-[411px] h-[337px]'>
                    <img src={Chain} alt='Chain' className='w-[54px] h-[9px]' />
                    <p className='font-mont_alt text-[#222222] font-bold text-[40px]'>Mission</p>
                    <p className='text-[#5F6368] font-medium text-[20px] font-mont_alt'>
                        Lorem ipsum dolor sit amet consectetur. 
                        Vestibulum viverra accumsan euismod fringilla urna orci. 
                        Aliquam tincidunt mattis vitae est tincidunt cras turpis. 
                        Sed turpis
                    </p>
                </div>
                <div className='flex flex-col gap-4 w-[411px] h-[337px]'>
                    <img src={Chain} alt='Chain' className='w-[54px] h-[9px]' />
                    <p className='font-mont_alt text-[#222222] font-bold text-[40px]'>Vision</p>
                    <p className='text-[#5F6368] font-medium text-[20px] font-mont_alt'>
                        Lorem ipsum dolor sit amet consectetur. 
                        Vestibulum viverra accumsan euismod fringilla urna orci. 
                        Aliquam tincidunt mattis vitae est tincidunt cras turpis. 
                        Sed turpis
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About