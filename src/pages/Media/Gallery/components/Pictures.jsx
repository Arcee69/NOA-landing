import React from 'react'

import Chain from "../../../../assets/png/chain.png"
import Poster from "../../../../assets/png/poster.png" 
import PosterB from "../../../../assets/png/posterB.png" 

import Folder from "../../../../assets/svg/folder.svg"

const Pictures = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col gap-1'>
            <p className='text-[#222222] font-mont_alt font-bold text-[24px] lg:text-[40px]'>Picture gallery</p>
            <img src={Chain} alt='Chain' className='w-[54px] ' />
        </div>


        <div className='mt-[40px] flex flex-col lg:flex-row items-center gap-20'>
            <div className=' w-full flex flex-col items-start gap-5 '>
                <img src={Poster} alt='Poster' className='lg:w-[592px] lg:h-[350px]'/>
                <div className='flex gap-2 items-center'>
                    <img src={Folder} alt='Folder' className='w-[10px] h-[18px]' />
                    <p className='font-manja font-bold text-[#222] text-xs'>FCT, PICTURE GALLERY</p>
                </div>
            </div>

           

            <div className=' w-full flex flex-col items-start gap-5'>
                <img src={PosterB} alt='PosterB' className='lg:w-[592px] lg:h-[350px]'/>
                <div className='flex gap-2 items-center'>
                    <img src={Folder} alt='Folder' className='w-[10px] h-[18px]' />
                    <p className='font-manja font-bold text-[#222] text-xs'>By NOAAdmin _ Oct 14, 2018</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Pictures