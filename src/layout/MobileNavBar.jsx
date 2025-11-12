import React, { useState, useEffect } from 'react'
import Vapi from '@vapi-ai/web';
import { useNavigate } from 'react-router-dom'
import { CgSpinner } from 'react-icons/cg';

import Logo from "../assets/svg/logo.svg"
import Close from "../assets/svg/closeIcon.svg"
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


const MobileNavBar = ({ handleClose }) => {
    const [openAgencyDropdown, setOpenAgencyDropdown] = useState(false)
    const [openMediaDropdown, setOpenMediaDropdown] = useState(false)
    const [openContentFactoryDropdown, setOpenContentFactoryDropdown] = useState(false)
    const [openContestDropdown, setOpenContestDropdown] = useState(false)

    const navigate = useNavigate()

    const handleAgency = () => {
      setOpenAgencyDropdown(prev => !prev)
    }

    const handleMedia = () => {
      setOpenMediaDropdown(prev => !prev)
    }

    const handleContentFactory = () => {
      setOpenContentFactoryDropdown(prev => !prev)
    }

    const handleContest = () => {
      setOpenContestDropdown(prev => !prev)
    }





  return (
    <div className="fixed top-0 w-[100%] left-0 h-[100vh] animate__animated  animate__bounceInDown animate__slow" style={{zIndex: 9999}}>
        <div className="bg-[#fff] w-[100%] h-full absolute pl-[29px] pr-[13px] py-[32px] right-0 top-0">
            <div className="flex justify-between items-center">
                <img src={Logo} alt='logo' className='invisible h-[25px]' onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} />
                <img src={Close} alt="close" className="cursor-pointer" onClick={handleClose}/>
            </div>
            <div className="mt-[32px] flex flex-col gap-y-[24px] pb-[16px]">
                <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">Home</p>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center justify-between' onClick={() => handleAgency()}>
                    <p className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">The Agency</p>
                    {openAgencyDropdown ? <IoIosArrowUp className='text-[#ccc] text-[24px]'/> : <IoIosArrowDown className='text-[#ccc] text-[24px]' />}
                  </div> 
                  {
                    openAgencyDropdown && (
                      <div className='flex flex-col gap-3 mt-3 px-3'>
                          <p onClick={() => {navigate("/about"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-sm  text-[#00141B]">About Us</p>
                          <p onClick={() => {navigate("/management"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-sm  text-[#00141B]">Management</p>
                          <p onClick={() => {navigate("/noa-past-executives"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-sm  text-[#00141B]">NOA Past Chief Executives</p>
                          <p onClick={() => {navigate("/state-offices"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-sm  text-[#00141B]">State Office Addresses</p>
                          <p onClick={() => {navigate("/foi"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-sm  text-[#00141B]">FOI Desk</p>
                      </div>
                    )
                  }
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center justify-between' onClick={() => handleMedia()}>
                    <p className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">Media Center</p>
                    {openMediaDropdown ? <IoIosArrowUp className='text-[#ccc] text-[24px]'/> : <IoIosArrowDown className='text-[#ccc] text-[24px]' />}
                  </div>
                  {
                    openMediaDropdown && (
                      <div className='flex flex-col gap-3 mt-3 '>
                        <div className='flex items-center justify-between' onClick={() => handleContentFactory()} >
                          <p className="font-mont  cursor-pointer font-semibold text-sm  text-[#00141B]">Content Factory</p>
                          {openContentFactoryDropdown ? <IoIosArrowUp className='text-[#ccc] text-[24px]'/> : <IoIosArrowDown className='text-[#ccc] text-[24px]' />}
                        </div>
                          {
                            openContentFactoryDropdown && (
                              <div className='flex flex-col gap-3 mt-2 px-3'>
                                <p onClick={() =>  {window.open("https://content.noa.gov.ng"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-sm  text-[#00141B]">Home</p>
                                <p onClick={() =>  {window.open("https://content.noa.gov.ng/live"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-sm  text-[#00141B]">Live videos</p>
                                <p onClick={() => { window.open("https://content.noa.gov.ng/noa-tv"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-sm  text-[#00141B]">NOA TV</p>
                                <p onClick={() => { window.open("https://content.noa.gov.ng/noa-radio"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-sm  text-[#00141B]">NOA RADIO</p>
                                <p onClick={() => { window.open("https://content.noa.gov.ng/explainer"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-sm  text-[#00141B]">EXPLAINER</p>
                              </div>
                            )
                          }
                          <p onClick={() => {navigate("/gallery"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-sm  text-[#00141B]">Gallery</p>
                          <p onClick={() => {navigate("/speeches"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-sm  text-[#00141B]">Speeches</p>
                      </div>
                    )
                  } 
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center justify-between' onClick={() => handleContest()}>
                    <p className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">Contest</p>
                    {openContestDropdown ? <IoIosArrowUp className='text-[#ccc] text-[24px]'/> : <IoIosArrowDown className='text-[#ccc] text-[24px]' />}
                  </div> 
                  {
                    openContestDropdown && (
                      <div className='flex flex-col gap-3 mt-3 px-3'>
                        <p onClick={() => {navigate("/hackathon"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">Hackathon</p>
                        <p onClick={() => {window.open("https://clheean.noa.gov.ng/debate-voting"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">Debate</p>
                      </div>
                    )
                  }
                </div>

                <p onClick={() => {navigate("/news"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">News</p>
                <p onClick={() => {navigate("/contact"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">Contact</p>
               
            </div>

        </div>
    </div>
  )
}

export default MobileNavBar