import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import User from  "../../assets/svg/user_fill.svg"
import Camera from "../../assets/png/camera.png"

import axios from 'axios'
import { IoChevronForwardOutline } from 'react-icons/io5'


const HackathonViewAll = () => {
    const [allHackathons, setAllHackathons] = useState([])
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const getAllHackathons = async () => {
        setLoading(true)
        await axios.get("https://api.hackathon.noa.gov.ng/api/contest/open")
        .then((res) => {
            setLoading(false)
            console.log(res, "azaman")
            setAllHackathons(res?.data?.data)
        })
        .catch((err) => {
            setLoading(false)
            console.log(err, "sample")
        })
    }

    console.log(allHackathons, "allHackathons")

    useEffect(() => {
        getAllHackathons()
    },[])



  return (
    <div  className='p-4 flex flex-col'>
        <div className='bg-[#fff] px-[100px] py-[19px] hidden lg:flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base cursor-pointer' onClick={() => navigate("/")}>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja' onClick={() => navigate("/hackathon")}>Hackathons</p>           
            </div>
        </div>
        <div className='mt-[48px] flex flex-col gap-4 lg:px-[100px] mb-10'>
            <div className='flex justify-between items-center'>
                <p className='font-mont_alt font-bold text-[24px] text-[#070807]'>All Hackathons</p>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                {
                    loading ?
                    // <Skeleton variant="rectangular" width={window.innerWidth < 786 ? 200 : 286} height={350} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} />
                    <p className='text-center font-mont font-medium text-4xl'>Loading....</p>
                    :
                    allHackathons?.length > 0  ? allHackathons?.map((item, index) => (
                        <div className='lg:w-[370px] h-[425px] flex flex-col border border-[#E8F2EA] ' key={index}>
                            <img src={Camera || item?.flier} alt='Flier' />
                            <div className='flex items-center relative -top-4 left-1 gap-4'>
                                <div className='flex items-center justify-center gap-1 bg-[#0A5] rounded-[15px] w-[104px]  p-[6px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.83333 5.33333H3.83333C3.20479 5.33333 2.89052 5.33333 2.69526 5.52859C2.5 5.72385 2.5 6.03812 2.5 6.66666V7.33333C2.5 7.96187 2.5 8.27614 2.69526 8.4714C2.87899 8.65512 3.16807 8.66598 3.72516 8.66662H7.83333V5.33333ZM4.5 9.99995V12.6667C4.5 13.2952 4.5 13.6095 4.69526 13.8047C4.89052 14 5.20479 14 5.83333 14H7.83333V9.99995H4.5ZM9.16667 14H11.1667C11.7952 14 12.1095 14 12.3047 13.8047C12.5 13.6095 12.5 13.2952 12.5 12.6667V9.99995H9.16667V14ZM13.2748 8.66662C13.8319 8.66598 14.121 8.65512 14.3047 8.4714C14.5 8.27614 14.5 7.96187 14.5 7.33333V6.66666C14.5 6.03812 14.5 5.72385 14.3047 5.52859C14.1095 5.33333 13.7952 5.33333 13.1667 5.33333H9.16667V8.66662H13.2748Z" fill="white"/>
                                        <path d="M13.1665 3.0883V2.96689C13.1665 2.16324 12.3792 1.59577 11.6168 1.84991C10.663 2.16782 9.79641 2.70342 9.08554 3.41429L8.49984 3.99999V4.66666H10.9501C11.0934 4.66666 11.2358 4.64356 11.3718 4.59824L12.3016 4.2883C12.8181 4.11613 13.1665 3.63275 13.1665 3.0883Z" fill="white"/>
                                        <path d="M3.8335 3.0883V2.96689C3.8335 2.16324 4.62082 1.59577 5.38323 1.84991C6.33697 2.16782 7.20359 2.70342 7.91446 3.41429L8.50016 3.99999V4.66666H6.04987C5.90656 4.66666 5.76418 4.64356 5.62823 4.59824L4.69841 4.2883C4.18189 4.11613 3.8335 3.63275 3.8335 3.0883Z" fill="white"/>
                                    </svg>
                                    <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>#5,000,000</p>
                                </div>

                                <div className='flex items-center justify-center gap-1 bg-[#33363F] rounded-[15px] w-[104px]  p-[6px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 9.33333C14.5 12.647 11.8137 15.3333 8.5 15.3333C5.18629 15.3333 2.5 12.647 2.5 9.33333C2.5 6.01962 5.18629 3.33333 8.5 3.33333C11.8137 3.33333 14.5 6.01962 14.5 9.33333ZM8.5 12.6666C10.341 12.6666 11.8333 11.1742 11.8333 9.33329C11.8333 7.49234 10.341 5.99995 8.5 5.99995C6.65905 5.99995 5.16667 7.49234 5.16667 9.33329C5.16667 11.1742 6.65905 12.6666 8.5 12.6666ZM8.5 14C11.0773 14 13.1667 11.9106 13.1667 9.33329C13.1667 6.75596 11.0773 4.66662 8.5 4.66662C5.92267 4.66662 3.83333 6.75596 3.83333 9.33329C3.83333 11.9106 5.92267 14 8.5 14ZM9.16667 7.33329C9.16667 6.9651 8.86819 6.66662 8.5 6.66662C8.13181 6.66662 7.83333 6.9651 7.83333 7.33329V9.33329C7.83333 9.70148 8.13181 9.99995 8.5 9.99995C8.86819 9.99995 9.16667 9.70148 9.16667 9.33329L9.16667 7.33329Z" fill="white"/>
                                        <path d="M12.1665 5L13.1665 4" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                        <path d="M7.21226 1.58039C7.28823 1.50951 7.45562 1.44688 7.68848 1.40221C7.92134 1.35754 8.20665 1.33333 8.50016 1.33333C8.79367 1.33333 9.07899 1.35754 9.31184 1.40221C9.5447 1.44688 9.7121 1.50951 9.78806 1.58039" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                    </svg>
                                    <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>20:30:15</p>
                                </div>

                                <div className='flex items-center justify-center gap-1 bg-[#E5E5E5] rounded-[15px] w-[104px]  p-[6px]'>
                                    {
                                        item?.open === 1 ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2244 4.38986C10.4656 4.14899 10.7987 4.00003 11.1665 4.00003C11.9029 4.00003 12.4998 4.59699 12.4998 5.33337C12.4998 5.7012 12.3509 6.03425 12.11 6.27548C11.7158 5.4518 11.0481 4.78404 10.2244 4.38986ZM7.33788 4.17142C7.50769 3.61116 7.79711 3.1029 8.17642 2.67635C5.3815 2.84352 3.1665 5.16311 3.1665 8.00003C3.1665 10.9456 5.55432 13.3334 8.49984 13.3334C11.3368 13.3334 13.6563 11.1184 13.8235 8.32345C13.397 8.70276 12.8887 8.99218 12.3285 9.16199C11.8306 10.8044 10.3049 12 8.49984 12C6.2907 12 4.49984 10.2092 4.49984 8.00003C4.49984 6.19501 5.69543 4.66923 7.33788 4.17142Z" fill="#00AA55"/>
                                            <circle cx="11.1667" cy="5.33334" r="2.66667" fill="#00AA55"/>
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2244 4.38986C10.4656 4.14899 10.7987 4.00003 11.1665 4.00003C11.9029 4.00003 12.4998 4.59699 12.4998 5.33337C12.4998 5.7012 12.3509 6.03425 12.11 6.27548C11.7158 5.4518 11.0481 4.78404 10.2244 4.38986ZM7.33788 4.17142C7.50769 3.61116 7.79711 3.1029 8.17642 2.67635C5.3815 2.84352 3.1665 5.16311 3.1665 8.00003C3.1665 10.9456 5.55432 13.3334 8.49984 13.3334C11.3368 13.3334 13.6563 11.1184 13.8235 8.32345C13.397 8.70276 12.8887 8.99218 12.3285 9.16199C11.8306 10.8044 10.3049 12 8.49984 12C6.2907 12 4.49984 10.2092 4.49984 8.00003C4.49984 6.19501 5.69543 4.66923 7.33788 4.17142Z" fill="#33363F"/>
                                            <circle cx="11.1667" cy="5.33334" r="2.66667" fill="#33363F"/>
                                        </svg>
                                    }
                                    <p className={`${item?.open === 1 ? "text-[#00AA55]" : "text-[#33363F]"}  text-xs font-manja mt-1 font-bold`}>{item?.open === 1 ? "Ongoing" : "Finished" }</p>
                                </div>

                            </div>
                            <div className='flex flex-col gap-2 px-4'>
                                <p className='font-manja text-[20px] font-bold text-[#000000] capitalize'>{item?.title}</p>
                                <p className='opacity-40 text-[#000] font-mont_alt font-medium text-sm'>
                                    {item?.desc}
                                </p>
                                <div className='bg-[#f8a4012e] w-[128px] p-2.5 flex items-center justify-center rounded-xl'>
                                    <p className='text-[#DC6803] text-xs font-mont'>Photo Hackathon</p>
                                </div>
                                <button onClick={() => {navigate("/hackathon/details", { state: item }); window.scroll(0, 0)}} className='bg-[#fff] rounded-[8px] border w-[124px] py-2 px-[15px] border-[#0A5]'>
                                    <p className='font-mont_alt font-semibold text-[#0A5] text-sm '>View Details</p>
                                </button>

                            </div>

                        </div>     
                    ))
                    :
                    <p className='font-mont_alt font-bold text-[24px] text-[#070807]'>No Contest Available</p>  
            
                }

             

            </div>
        </div>

    </div>
  )
}

export default HackathonViewAll