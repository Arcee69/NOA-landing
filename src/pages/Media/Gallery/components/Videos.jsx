import React from 'react'
import ReactPlayer from 'react-player/youtube'

import Chain from "../../../../assets/png/chain.png"

const Videos = () => {

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-1'>
        <p className='text-[#222222] font-mont_alt font-bold text-[24px] lg:text-[40px]'>Video gallery</p>
        <img src={Chain} alt='Chain' className='w-[54px] ' />
      </div>

      <div className='mt-[40px] grid grid-cols-1 lg:grid-cols-3 gap-2 items-center '>
        <div className="w-[200px]">
          <ReactPlayer url='https://youtu.be/fASeqCgHEu8' width={350} />
        </div>
        
        <div className="w-[200px]">
          <ReactPlayer url='https://youtu.be/8T7pY9HXRJ4' width={350} />
        </div>
        <div className="w-[200px]">
          <ReactPlayer url='https://youtu.be/IcPTW3-yFYU'  width={350} />
        </div>
        <div className="w-[200px]">
          <ReactPlayer url='https://youtu.be/rzyjksTw38k'  width={350} />
        </div>
        <div className="w-[200px]">
          <ReactPlayer url='https://youtu.be/HOVX8i3IcNI' width={350}/>
        </div>
        <div className="w-[200px]">
          <ReactPlayer url='https://youtu.be/1I7Y7U3yPFI' width={350}/>
        </div>
      </div>

    </div>
  )
}

export default Videos