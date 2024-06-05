import React from 'react'

import Chain from "../../../../assets/png/chain.png"
import Poster from "../../../../assets/png/poster.png" 
import PosterB from "../../../../assets/png/posterB.png" 

import Folder from "../../../../assets/svg/folder.svg"

const Pictures = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col gap-1'>
            <p className='text-[#222222] font-mont_alt font-bold text-[40px]'>Picture gallery</p>
            <img src={Chain} alt='Chain' className='w-[54px] ' />
        </div>

        <div className='mt-[40px] flex flex-col'>
            <div className='bg-[#222222] w-full justify-between flex items-center p-[40px] '>
                <div className='flex items-start gap-4 flex-col w-[480px]'>
                    <div className='flex gap-2 items-center'>
                        <img src={Folder} alt='Folder' className='w-[10px] h-[18px]' />
                        <p className='font-manja font-bold text-[#fff] text-xs'>FCT, PICTURE GALLERY</p>
                    </div>
                    <p className='font-mont_alt font-bold text-[24px] leading-[32px] text-[#fff]'>
                        Fireside Chat: Role of the Youth in Peacemaking & Peace Sustenance
                    </p>
                    <p className='font-mont_alt text-[18px] text-[#F9F8F8]'>
                        The main objectives of the Agency, as provided in Decree 100 of 1993, 
                        are to ensure that government programmes and policies are better understood 
                        by the general public.
                    </p>
                    <button className='bg-[#00AA55] w-[117px] h-[48px] flex items-center justify-center flex-col'>
                        <p className='font-manja font-bold text-[14px] text-[#fff]'>Read more</p>
                    </button>
                </div>
                <img src={Poster} alt='Poster' className='w-[592px] '/>

            </div>
            <div className='bg-[#F5F5F5] w-full justify-between flex items-center p-[40px]'>
                <img src={PosterB} alt='PosterB' className='w-[592px] '/>
                <div className='flex items-start gap-4 flex-col w-[480px]'>
                    <div className='flex gap-2 items-center'>
                        <img src={Folder} alt='Folder' className='w-[10px] h-[18px]' />
                        <p className='font-manja font-bold text-[#757575] text-xs'>By NOAAdmin _ Oct 14, 2018</p>
                    </div>
                    <p className='font-mont_alt font-bold text-[24px] leading-[32px] text-[#222222]'>
                        SMSGAfrica FiresideChat: Role of Media in Developing Spirit of Nationalism
                    </p>
                    <p className='font-mont_alt text-[18px] text-[#564949]'>
                        #SMSGAfrica Fireside chat session on the topic. The Role of Media in developing the Spirit 
                        of Patriotism & Nationalism with Dr. Garba Abari Director General National Orientation 
                        Agency, Nigeria (NOA) […]
                    </p>
                    <button className='bg-[#00AA55] w-[117px] h-[48px] flex items-center justify-center flex-col'>
                        <p className='font-manja font-bold text-[14px] text-[#fff]'>Read more</p>
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Pictures