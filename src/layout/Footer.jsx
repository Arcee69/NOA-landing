import React from 'react'
import Logo from "../assets/svg/noa_green.svg"
import Fellow from "../assets/png/fellow.png"
import Work from "../assets/png/work.png"
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-[#222222] w-full flex flex-col'>
      <div className='flex flex-col items-center py-[37px]'>
        <div className='w-[877px] border border-x-0 border-y-[#fff] border-t-0 flex items-center justify-center py-[18px]'>
          <img src={Logo} alt='Logo' className='w-[111px] h-[39px]'/>
        </div>
        <div className='w-[877px] flex gap-[18px] mt-[45px]'>
          <div className='w-[156px] flex flex-col gap-2.5'>
            <p className='font-bold text-[15px] font-manja text-[#fff]'>National Orientation Agency headquarters</p>
            <div className='flex flex-col'>
              <p className='text-[#fff] font-mont_alt font-medium text-[11px]'>Block B, Fed Secretariat Complex, Area 1, Garki Abuja, Nigeria. PMB 27</p>
              <p className='text-[#fff] font-mont_alt font-medium text-[11px]'>Opening hrs</p>
              <p className='text-[#fff] font-mont_alt font-medium text-[11px]'>Mon-Fri: 8am to 4pm, Sat & Sun:Closed</p>
            </div>
          </div>
          <img src={Fellow} alt='Fellow' className='w-[204px] h-[204px]'/>
          <div className='w-[156px] flex flex-col gap-2.5'>
            <p className='font-bold text-[15px] font-manja text-[#fff]'>Emergency Numbers</p>
            <div className='flex flex-col'>
              <p className='text-[#fff] font-mont_alt font-medium text-[11px]'>Nigeria Police: 0803-200-3913</p>
              <p className='text-[#fff] font-mont_alt font-medium text-[11px]'>Fire Service: 112 or 08032003557</p>
              <p className='text-[#fff] font-mont_alt font-medium text-[11px]'>FRSC: 122 or 0700 – 2255 – 3772</p>
              <p className='text-[#fff] font-mont_alt font-medium text-[11px]'>NCDC Call: 0800 970000 10</p>
            </div>
          </div>
          <img src={Work} alt='Work' />
        </div>
      </div>

      <div className='bg-[#1D1D1D] w-full flex py-[18px]'>
        <div className='w-[877px] mx-auto flex items-center justify-between'>
          <div className='flex items-center  gap-2.5'>
            <p className='text-[#DDDDDD] font-medium text-[11px]'>Connect with:</p>
            <div className='flex items-center gap-2.5'>
              <FaFacebookF className='text-[#fff] text-[10px]' />
              <FaTwitter className='text-[#fff] text-[10px]' />
              <FaInstagram className='text-[#fff] text-[10px]'  />
            </div>
          </div>

          <p className='font-medium text-[11px] font-mont_alt text-[#fff]'>Copyrights <span className='text-[#00AA55]'> © 2020 National Orientation Agency </span> All rights reserved.</p>
          <div className='flex items-center gap-5'>
            <p className='font-medium text-[11px] font-mont_alt text-[#fff]'>Privacy Policy</p>
            <p className='font-medium text-[11px] font-mont_alt text-[#fff]'>Terms of use</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer




