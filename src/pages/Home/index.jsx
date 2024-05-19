import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

import House from "../../assets/png/house.png"
import LeftMic from "../../assets/png/left_mic.png"
import Mic from "../../assets/png/mic_b.png"
import RightMic from "../../assets/png/right_mic.png"
import NoaLogo from "../../assets/svg/noa_logo.svg"
import { AiOutlineSend } from 'react-icons/ai'

const Home = () => {
  return (
    <div className='w-full'>
        <div 
            style={{ background: `url(${House})`, backgroundSize:"cover", backgroundRepeat:"no-repeat" }}
            className='h-[499px] px-[101px] flex items-center justify-between'
        >
            <div className='w-[600px] h-[268px] flex flex-col gap-5'>
                <p className='font-bold text-[#FFFFFF] font-mont text-[32px] leading-[36px]'>
                    Welcome to the official website of The National Orientation Agency
                </p>
                <p className='text-base text-[#FFFFFF] font-mont'>
                    orem ipsum dolor sit amet consectetur. 
                    Vestibulum viverra accumsan euismod fringilla urna orci. 
                    Aliquam tincidunt mattis vitae est tincidunt cras turpis. 
                    Sed turpis massa vitae egestas vitae. In
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

    </div>
  )
}

export default Home