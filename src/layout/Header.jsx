import React, { useState, Fragment } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Listbox, Transition} from '@headlessui/react'
import { useNavigate } from 'react-router-dom'

import Logo from "../assets/svg/logo.svg"

import Search from "../assets/png/search.png"
import Facebook from "../assets/png/facebook.png"
import Twitter from "../assets/png/twitter.png"
import Instagram from "../assets/png/instagram.png"


const agency = [
  { name: 'About Us', link:"/about" },
  { name: 'Management', link:"/management" },
  { name: 'NOA Past Chief Executives', link:"/noa-past-executives" },
  { name: 'State Office Addresses', link:"/state-offices" },
  { name: 'FOI Desk', link:"/foi" },
]

const activities = [
    { name: 'Privacy policy for Mobilizer App', link:"/privacy-policy" },
    { name: 'Voter Education', link:"#" },
    { name: 'The Explainer', link:"#" },
    { name: 'Naira Redesign Campaign', link:"#" },
  ]

const media = [
    { name:"Content Factory", link: "https://content.noa.gov.ng" },
    { name: "Gallery", link: "/gallery"}
]



const Header = () => {
  const [agencySelected, setAgencySelected] = useState(agency[0])
  const [activitiesSelected, setActivitiesSelected] = useState(activities[0])
  const [mediaSelected, setMediaSelected] = useState(media[0])
  const [selected, setSelected] = useState(agency[0])

  const navigate = useNavigate()

  return (
    <div className='flex justify-between px-[40px] py-[22px] items-center bg-[#FFF] w-full h-[67px]'>
      <div className='flex items-center gap-[30px]'>
        <img src={Logo} alt='Logo' className='cursor-pointer' onClick={() => navigate('/')} />
        {/* <div className=' flex items-center border border-l p-2 border-[#0000001A] border-y-0 border-r-0'>
          <input 
            placeholder='Explore'
            type='text'
            className='font-mont text-base w-[70px] h-[24px]'
          />
          <img src={Search} alt='Search' className='w-3 h-3' />
        </div> */}
      </div>
      <div className='flex items-center gap-[23px]'>
        <p className='text-[#222222] cursor-pointer text-sm font-mont font-semibold hover:text-[#00AA55]' onClick={() => navigate("/")}>Home</p>
        <Listbox value={agencySelected} onChange={setAgencySelected}>
            <div className="relative">
                <Listbox.Button className="relative w-[130px] cursor-default flex items-center gap-2 py-2 pl-3 pr-5 text-left outline-none sm:text-sm">
                    <span className="block truncate w-full text-sm text-[#222222] font-semibold hover:text-[#00AA55] font-mont">The Agency</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <IoIosArrowDown
                            className="h-4 w-4 text-[#AAAAAA]"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute z-10 mt-1 w-[200px] max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {agency.map((item, index) => (
                            <Listbox.Option
                                key={index}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-4 pr-4 ${
                                    active ? 'bg-[#E6F6F4] text-[#052011]' : 'text-[#052011]'
                                    }`
                                }
                                value={item}
                            >
                            {({ selected }) => (
                                <>
                                    <span
                                        className={`block truncate text-sm ${
                                        selected ? 'font-medium' : 'font-normal'
                                        } text-[#052011]`}
                                        onClick={() => navigate(item?.link)}
                                    >
                                        {item.name}
                                    </span>
                                </>
                            )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
                <Listbox.Button className="relative w-[150px] cursor-default flex items-center gap-2 py-2 pl-3 pr-5 text-left outline-none sm:text-sm">
                    <span className="block truncate w-full text-[#222222] font-semibold hover:text-[#00AA55] font-mont">Media Center</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <IoIosArrowDown
                            className="h-4 w-4 text-[#AAAAAA]"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute z-10 mt-1 w-[200px] max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {media.map((item, index) => (
                            <Listbox.Option
                                key={index}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-4 pr-4 ${
                                    active ? 'bg-[#E6F6F4] text-[#052011]' : 'text-[#052011]'
                                    }`
                                }
                                value={item}
                            >
                            {({ selected }) => (
                                <>
                                    <span
                                        className={`block truncate text-sm ${
                                        selected ? 'font-medium' : 'font-normal'
                                        } text-[#052011]`}
                                        onClick={() => window.open(item?.link, "_blank")}
                                    >
                                        {item.name}
                                    </span>
                                </>
                            )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>

        <p className='text-[#222222] cursor-pointer text-sm hover:text-[#00AA55] font-semibold font-mont' onClick={() => navigate("/hackathon")}>Hackathon</p>
        <p className='text-[#222222] cursor-pointer text-sm hover:text-[#00AA55] font-semibold font-mont' onClick={() => navigate("/news")}>News</p>
        <p className='text-[#222222] cursor-pointer text-sm hover:text-[#00AA55] font-semibold font-mont' onClick={() => navigate("/contact")}>Contact Us</p>
{/*       
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
                <Listbox.Button className="relative w-[140px] cursor-default flex items-center gap-2 py-2 pl-3 pr-10 text-left outline-none sm:text-sm" onClick={() => navigate("#")}>
                    <span className="block truncate w-full text-[#222222] font-semibold hover:text-[#00AA55] font-mont">Contact Us</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <IoIosArrowDown
                            className="h-4 w-4 text-[#AAAAAA]"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute z-10 mt-1 w-[200px] max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {agency.map((item, index) => (
                            <Listbox.Option
                                key={index}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-4 pr-4 ${
                                    active ? 'bg-[#E6F6F4] text-[#052011]' : 'text-[#052011]'
                                    }`
                                }
                                value={item}
                            >
                            {({ selected }) => (
                                <>
                                    <span
                                        className={`block truncate ${
                                        selected ? 'font-medium' : 'font-normal'
                                        } text-[#052011]`}
                                        onClick={() => navigate(item?.link)}
                                    >
                                        {item.name}
                                    </span>
                                </>
                            )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox> */}
      </div>
      <div className='flex items-center gap-[6px]'>
        <img src={Facebook} alt='Facebook' className='w-6 h-6' />
        <img src={Twitter} alt='Twitter' className='w-6 h-6' />
        <img src={Instagram} alt='Instagram' className='w-6 h-6' />

      </div>

    </div>
  )
}

export default Header