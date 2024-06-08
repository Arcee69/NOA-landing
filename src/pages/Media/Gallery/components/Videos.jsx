import React from 'react'

import Chain from "../../../../assets/png/chain.png"

import ReactPlayer from 'react-player/youtube'

const Videos = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-1'>
        <p className='text-[#222222] font-mont_alt font-bold text-[40px]'>Video gallery</p>
        <img src={Chain} alt='Chain' className='w-[54px] ' />
      </div>

      <div className='mt-[40px] grid grid-cols-2 items-center' style={{ gap: '1.25rem' }}>
        <div className="w-[200px]">
          <ReactPlayer url='https://youtu.be/fASeqCgHEu8' style={{ width: "150px", height:"150px" }} />
        </div>
        <div className="w-[200px]">
          <ReactPlayer url='https://youtu.be/8T7pY9HXRJ4' />
        </div>
        <div className="w-[200px]">
          <ReactPlayer url='https://youtu.be/IcPTW3-yFYU' />
        </div>
        <div className="w-[200px]">
          <ReactPlayer url='https://youtu.be/rzyjksTw38k' />
        </div>
        <div className="w-[200px]">
          <ReactPlayer url='https://youtu.be/HOVX8i3IcNI' />
        </div>
      </div>

    </div>
  )
}

export default Videos