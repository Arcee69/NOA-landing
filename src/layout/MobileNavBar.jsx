import React, { useState, useEffect } from 'react'
import Vapi from '@vapi-ai/web';
import { useNavigate } from 'react-router-dom'
import { CgSpinner } from 'react-icons/cg';

import Logo from "../assets/svg/logo.svg"
import Close from "../assets/svg/closeIcon.svg"


const MobileNavBar = ({ handleClose }) => {
    const [userName, setUserName] = useState("")
 

    const navigate = useNavigate()




  return (
    <div className="fixed top-0 w-[100%] left-0 h-[100vh] animate__animated  animate__bounceInDown animate__slow" style={{zIndex: 9999}}>
        <div className="bg-[#fff] w-[100%] h-full absolute pl-[29px] pr-[13px] py-[32px] right-0 top-0">
            <div className="flex justify-between items-center">
                <img src={Logo} alt='logo' className='invisible h-[25px]' onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} />
                <img src={Close} alt="close" className="cursor-pointer" onClick={handleClose}/>
            </div>
            <div className="mt-[32px] flex flex-col gap-y-[24px] pb-[16px]">
                <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">Home</p>
                <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">The Agency</p>
                <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">Activities</p>
                <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">News</p>
                <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">Media Center</p>
                <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">Partnership</p>
               
            </div>
          
            {/* <button type='button' className='bg-[#FF6600] cursor-pointer rounded-lg w-full mt-4 border border-[#000] p-2 flex items-center justify-center h-[67px]' onClick={start}>
              {
                loading ? 
                  <CgSpinner className='animate-spin text-2xl text-[#fff]' /> 
                  : 
                  <p className='text-[#FFF] font-poppins text-[20px] font-medium'>{voxData?.type === "webCall" ? "Conversation Started" : "Try For Free" }</p>
              }
            </button> */}
        </div>
    </div>
  )
}

export default MobileNavBar