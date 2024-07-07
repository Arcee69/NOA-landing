import React, { useState } from 'react'
import Logo from "../assets/svg/noa_green.svg"
import Fellow from "../assets/png/fellow.png"
import Work from "../assets/png/work.png"
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'
import ModalPop from '../components/modalPop'
import Privacy from './Privacy'
import Terms from './Terms'

const Footer = () => {
  const [openPrivacy, setOpenPrivacy] = useState(false)
  const [openTerms, setOpenTerms] = useState(false)

  const navigate = useNavigate()


  return (
    <div className='bg-[#222222] w-full flex flex-col'>
      <div className='flex flex-col items-center py-[37px]'>
        <div className='w-full lg:w-[877px] border border-x-0 border-y-[#fff] border-t-0 flex items-center justify-center py-[18px]'>
          <img src={Logo} alt='Logo' className='w-[111px] h-[39px]'/>
        </div>
        <div className='w-full lg:w-[877px] px-5 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start gap-[18px] mt-[45px]'>
          <div className='w-full lg:w-[156px] flex flex-col gap-2.5'>
            <p className='font-bold text-xl lg:text-[15px] font-manja text-[#fff]'>National Orientation Agency headquarters</p>
            <div className='flex flex-col'>
              <p className='text-[#fff] font-mont_alt font-medium text-sm lg:text-[11px]'>Block B, Fed Secretariat Complex, Area 1, Garki Abuja, Nigeria. PMB 27</p>
              <p className='text-[#fff] font-mont_alt font-medium text-sm lg:text-[11px]'>Opening hrs</p>
              <p className='text-[#fff] font-mont_alt font-medium text-sm lg:text-[11px]'>Mon-Fri: 8am to 4pm, Sat & Sun:Closed</p>
            </div>
          </div>
          <ReactPlayer url='https://youtu.be/wcAbTmhuUBg' width={204} height={204} />
          {/* <img src={Fellow} alt='Fellow' className='lg:w-[204px] lg:h-[204px]'/> */}
          <div className='w-full lg:w-[206px] flex flex-col gap-2.5'>
            <p className='font-bold text-xl lg:text-[15px] font-manja text-[#fff]'>Emergency Numbers</p>
            <div className='flex flex-col'>
              <p className='text-[#fff] font-mont_alt whitespace-nowrap font-medium text-sm lg:text-[11px]'>Nigeria Police: 0803-200-3913</p>
              <p className='text-[#fff] font-mont_alt whitespace-nowrap font-medium text-sm lg:text-[11px]'>Fire Service: 112 or 08032003557</p>
              <p className='text-[#fff] font-mont_alt whitespace-nowrap font-medium text-sm lg:text-[11px]'>FRSC: 122 or 0700 – 2255 – 3772</p>
              <p className='text-[#fff] font-mont_alt whitespace-nowrap font-medium text-sm lg:text-[11px]'>NCDC Call: 0800 970000 10</p>
            </div>
          </div>
          <img src={Work} alt='Work' className='w-full lg:w-[267px] cursor-pointer' onClick={() => {navigate("/gallery"); window.scrollTo(0, 0)}}/>
        </div>
      </div>

      <div className='bg-[#1D1D1D] w-full flex py-[18px]'>
        <div className='w-full lg:w-[877px] px-5 lg:px-0 gap-5 lg:gap-0 mx-auto flex flex-col items-start lg:flex-row lg:items-center justify-between'>
          <div className='flex items-center  gap-2.5'>
            <p className='text-[#DDDDDD] font-medium text-base lg:text-[11px]'>Connect with:</p>
            <div className='flex items-center gap-2.5'>
              <a href='https://www.facebook.com/nationalorientationagency/' target='_blank' className='cursor-pointer'><FaFacebookF className='text-[#fff] text-sm lg:text-[10px]'/></a>
              <a href='https://x.com/NOA_Nigeria' target='_blank' className='cursor-pointer'><FaTwitter className='text-[#fff] text-sm lg:text-[10px]' /></a>
              <a href='https://www.instagram.com/noa_nigeria/?hl=en' target='_blank' className='cursor-pointer'><FaInstagram className='text-[#fff] text-sm lg:text-[10px]'  /></a>
              <a href='https://www.linkedin.com/in/national-orientation-agency-71435b2a2/' target='_blank' className='cursor-pointer'><FaLinkedin className='text-[#fff] text-sm lg:text-[10px]'  /></a>
            </div>
          </div>

          <p className='font-medium text-base lg:text-[11px] font-mont_alt text-[#fff]'>Copyrights <span className='text-[#00AA55]'> © 2024 National Orientation Agency </span> All rights reserved.</p>
          <div className='flex items-center gap-5'>
            <p className='font-medium text-base lg:text-[11px]  font-mont_alt text-[#fff]' onClick={() => setOpenPrivacy(true)}>Privacy Policy</p>
            <p className='font-medium text-base lg:text-[11px]  font-mont_alt text-[#fff]'  onClick={() => setOpenTerms(true)}>Terms of use</p>
          </div>
        </div>

      </div>

      <div className='bg-[#1d1d1d] w-full flex justify-center'>
        <p className='text-[#fff] cursor-pointer text-base mb-2 lg:text-[11px] font-mont_alt text-center font-medium'>
          <a href='https://cihanmediacomms.com' target='_blank'>Powered by Cihan</a>
        </p>
      </div>
      <ModalPop isOpen={openPrivacy}>
        <Privacy handleClose={() => setOpenPrivacy(false)} />
      </ModalPop>

      <ModalPop isOpen={openTerms}>
        <Terms handleClose={() => setOpenTerms(false)} />
      </ModalPop>

    </div>
  )
}

export default Footer




