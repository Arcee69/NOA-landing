import React, { useState } from 'react'

import Cup from "../../../assets/png/green_cup.png"
import { FaArrowRightLong } from 'react-icons/fa6'

const Prize = ({ handleClose, totalCorrectAnswers, questions }) => {
    const [phone, setPhone] = useState("")
    
  return (
    <div className='bg-[#fff] rounded-lg flex flex-col p-5 lg:p-[64px] gap-2 mt-[50px] items-center overflow-auto lg:w-[750px] h-[650px] lg:h-[500px]'>
        <img src={Cup} alt='Cup' className='w-[120px] h-[197px]'/>
        <p className='font-mont font-bold text-[#F8A401] text-[24px] lg:text-[80px]'>{totalCorrectAnswers}/{questions?.length}</p>
        <div className='flex flex-col gap-1'>
            <p className='text-[#00AA55] font-mont text-center text-[32px] font-extrabold'>
                Congratulations
            </p>
            <p className='text-[#00AA55] font-mont text-center text-xl font-bold'>
                you won a special price
            </p>
        </div>
        <p className='text-[#475467] text-base font-mont_alt text-center'> 
            Looks like you know about Nigeria very well and to reward you will be sending you an airtime
            to the number you registered with don't spend it all in one place!!!
        </p>
        <div className="w-full flex flex-col ">
            <label htmlFor='Phone' className="font-bold font-manja text-sm text-[#101928]">Phone No</label>
            <input
                name="phone"
                placeholder="Phone"
                type="number" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-lg border-[#D0D5DD] w-full outline-none mt-1.5 h-[51px] border-solid  p-3 border"
            />
        </div>
        <button 
            className= "bg-[#027315] mt-8 xs:w-full lg:w-[219px] gap-5 text-[#fff] rounded-lg p-3 cursor-pointer w-full h-[52px] flex items-center justify-center"
            type="button"
            onClick={() => handleClose()}
        >
            <p className='text-[#fff] text-base font-mont_alt  text-center  font-semibold'>Claim your prize</p>
            <FaArrowRightLong className='text-[#fff] text-base' />
        </button>
    </div>
  )
}

export default Prize