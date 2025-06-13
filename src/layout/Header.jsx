import React, { useState, Fragment } from 'react'
import { IoIosArrowDown, IoIosArrowForward, IoMdArrowDropright } from 'react-icons/io'
import { Listbox, Transition} from '@headlessui/react'
import { useNavigate } from 'react-router-dom'

import Logo from "../assets/svg/logo.svg"

import Search from "../assets/png/search.png"
import Facebook from "../assets/png/facebook.png"
import Twitter from "../assets/png/twitter.png"
import Instagram from "../assets/png/instagram.png"
import LoginHeaderNavComponent from '../components/LoginHeaderNavComponent'
import { Dropdown, DropdownMenuItem, DropdownNestedMenuItem } from '../components/Dropdown'


const agency = [
  { name: 'About Us', link:"/about" },
  { name: 'Management', link:"/management" },
  { name: 'NOA Past Chief Executives', link:"/noa-past-executives" },
  { name: 'Zonal & State Offices', link:"/zonal-and-state-offices" },
  { name: 'FOI Desk', link:"/foi" },
]

const activities = [
    { name: 'Privacy policy for Mobilizer App', link:"/privacy-policy" },
    { name: 'Voter Education', link:"#" },
    { name: 'The Explainer', link:"#" },
    { name: 'Naira Redesign Campaign', link:"#" },
  ]

// const media = [
//     { name:"Content Factory", link: "https://content.noa.gov.ng" },
//     { name: "Gallery", link: "/gallery"}
// ]

// const media = [
//     {
//         name: "Content Factory",
//         link: "#",
//         subNav: [
//             { name: "Live TV", link: "https://content.noa.gov.ng/live" },
//             { name: "NOA TV", link: "https://content.noa.gov.ng/noa-tv" },
//             { name: "NOA Radio", link: "https://content.noa.gov.ng/noa-radio" },
//             { name: "Explainer", link: "https://content.noa.gov.ng/explainer" }
//         ]
//     },
//     { name: "Gallery", link: "/gallery" }
// ];

const redirect = (body) => {
    window.location.href = body;
  };

let array = [
    {
      name: (
        <LoginHeaderNavComponent
          text2="Media Center"
        />
      ),
      children: [
        {
          name: "Content Factory",
          link: "",
          children: [
            {
              name: "HOME",
              link: "https://content.noa.gov.ng",
            },
            {
              name: "LIVE VIDEOS",
              // link: "#",
              link: "https://content.noa.gov.ng/live",
            },
            {
              name: "NOA TV",
              link: "https://content.noa.gov.ng/noa-tv",
            },

            {
              name: "NOA RADIO",
              link: "https://content.noa.gov.ng/noa-radio",
            },
            {
              name: "EXPLAINER",
              link: "https://content.noa.gov.ng/explainer",
            },
          ],
        },
        {
          name: "Gallery",
          link: "/gallery" ,
        },
        {
          name: "Speeches",
          link: "/speeches" ,
        },

      ],
    },
  ];



const Header = () => {
  const [agencySelected, setAgencySelected] = useState(agency[0])
  const [activitiesSelected, setActivitiesSelected] = useState(activities[0])
//   const [mediaSelected, setMediaSelected] = useState(media[0])
  const [selected, setSelected] = useState(agency[0])

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const navigate = useNavigate()

  return (
    <div className='flex justify-between px-[40px] py-[22px] items-center bg-[#FFF] w-full h-[67px]'>
      <div className='flex items-center gap-[30px]'>
        <img src={Logo} alt='Logo' className='cursor-pointer' onClick={() => navigate('/')} />
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

        <div
              class="flex gap-[4px] items-center justify-center bg-white font-bold cursor-pointer hover:text-[#00AA55] text-[16px]"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              // onClick={handleClick}
            >
              {/* Create New */}
              {array?.map((item) =>
                item?.children?.length ? (
                  <Dropdown
                    trigger={
                      <p className="bg-white text-[#222222] cursor-pointer text-sm font-semibold hover:text-[#00AA55] font-mont">
                        {item?.name}
                      </p>
                    }
                    menu={item?.children.map((nestedItem) =>
                      nestedItem?.children?.length ? (
                        <DropdownNestedMenuItem
                          label={nestedItem?.name}
                          rightIcon={<IoMdArrowDropright />}
                          menu={
                            nestedItem?.children && [
                              ...nestedItem?.children.map((thirdStep) => (
                                <DropdownMenuItem
                                  onClick={
                                    () => redirect(thirdStep.link)
                                    // console.log(thirdStep.link);
                                    // history(thirdStep.link);
                                  }
                                >
                                  {thirdStep?.name}
                                </DropdownMenuItem>
                              )),

                          
                            ]
                          }
                          
                        />
                      ) : (
                        <DropdownMenuItem
                          onClick={() => {
                            navigate(nestedItem.link);
                          }}
                        >
                          {nestedItem?.name}
                        </DropdownMenuItem>
                      )
                    )}
                  />
                ) : (
                  ""
                 
                )
              )}

              <IoIosArrowDown  />
            </div>

        {/* <Listbox value={selected} onChange={setSelected}>
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
        </Listbox>  */}

        <p className='text-[#222222] cursor-pointer text-sm hover:text-[#00AA55] font-semibold font-mont' onClick={() => navigate("/hackathon")}>Hackathon</p>
        <p className='text-[#222222] cursor-pointer text-sm hover:text-[#00AA55] font-semibold font-mont' onClick={() => navigate("/news")}>News</p>
        <p className='text-[#222222] cursor-pointer text-sm hover:text-[#00AA55] font-semibold font-mont' onClick={() => navigate("/contact")}>Contact Us</p>

      </div>
      <div className='flex items-center gap-[6px]'>
        <img onClick={() => window.open("https://www.facebook.com/nationalorientationagency/")} src={Facebook} alt='Facebook' className='w-6 cursor-pointer h-6' />
        <img onClick={() => window.open("https://x.com/NOA_Nigeria")} src={Twitter} alt='Twitter' className='w-6 h-6 cursor-pointer' />
        <img onClick={() => window.open("https://www.instagram.com/noa_nigeria/?hl=en")} src={Instagram} alt='Instagram' className='w-6 h-6 cursor-pointer' />

      </div>

    </div>
  )
}

export default Header


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