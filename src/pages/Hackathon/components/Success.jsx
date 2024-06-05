import React from 'react'

import Cup from "../../../assets/png/confetti_cup.png"

const Success = ({ handleClose }) => {
  return (
    <div className='bg-[#fff] rounded-lg flex flex-col p-[64px] gap-6 mt-[50px] items-center overflow-auto w-[750px] h-[500px]'>
        <p className='font-mont font-bold text-[32px] capitalize'>Nice!! Entry submitted</p>
        <p className='text-[#475467] font-mont_alt text-center text-base leading-[24px]'>
            Your entry has been submitted successfully, you will be contacted with further instructions
        </p>
        <img src={Cup} alt='Cup' className='w-[305px] h-[305px]'/>
        <button 
            className= " bg-[#027315] mt-8 xs:w-full lg:w-[219px] text-[#fff] rounded-lg p-3 cursor-pointer w-full h-[52px] flex justify-center"
            type="button"
            onClick={() => handleClose()}
        >
            <p className='text-[#fff] text-sm  text-center  font-medium'>Close</p>
        </button>
    </div>
  )
}

export default Success