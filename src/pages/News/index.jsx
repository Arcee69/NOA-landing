import React, { useEffect, useState } from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'

import Chain from "../../assets/png/chain.png"
import Suggestion from "../../assets/png/suggestion.png"

import CallB from "../../assets/svg/call.svg"
import Time from "../../assets/svg/time.svg"
import Mail from "../../assets/svg/mail.svg"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const News = () => {
    const [newsData, setNewsData] = useState([])
    const [loading, setLoading] = useState(false)
    const [prevPageUrl, setPrevPageUrl] = useState(null);
    const [nextPageUrl, setNextPageUrl] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
  

    const navigate = useNavigate()

    
  const fetchNews = async (url = "https://api.admin.noa.gov.ng/api/post") => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      console.log(res, "addict")
      const data = res.data;

      setNewsData(data?.data || []);
      setPrevPageUrl(data.pagination?.prev_page_url);
      setNextPageUrl(data.pagination?.next_page_url);
      setCurrentPage(data.pagination?.current_page);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handlePrevPage = () => {
    if (prevPageUrl) fetchNews(prevPageUrl);
  };

  const handleNextPage = () => {
    if (nextPageUrl) fetchNews(nextPageUrl);
  };



  return (
    <div className='flex flex-col'>
        <div className='bg-[#fff] px-[100px] py-[19px] hidden lg:flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base cursor-pointer' onClick={() => navigate("/")}>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>News</p>
            </div>
        </div>
        <div className='flex flex-col gap-1 px-5 mt-20 lg:mt-0 lg:px-[100px]'>
            {/* <div className='flex flex-col gap-1'>
                <p className='text-[#222222] font-mont_alt font-bold text-[24px] lg:text-[40px]'>NOA NEWS</p>
                <img src={Chain} alt='Chain' className='w-[54px] ' />
            </div> */}
            {
               loading 
               ?
               <p  className='text-2xl text-[#000] text-center font-semibold'>Loading...</p>
               :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-[40px]'>
                    {
                        newsData?.length > 0 ? newsData?.map((item, index) => (
                            <div key={index} className='flex flex-col cursor-pointer' onClick={() => navigate(`/news/${item?.id}`, { state: item})}>
                                <img src={item?.image} alt='Poster' className='lg:w-[279px] lg:h-[200px]' />
                                <div className='flex flex-col mt-4 w-64'>
                                    <p className='font-bold text-[#222222] '>{item?.title}</p>
                                    {/* <div className='flex items-center gap-1.5'>
                                        <p className='text-[#928B8B] font-bold text-xs'>{item?.views}</p>
                                        <p className='text-[#928B8B] font-bold text-xs'>{item?.comment}</p>
                                    </div> */}
                                </div>
                                {/* <div className='flex items-center mt-[8px] gap-[11px]'>
                                    <img src={User} alt='User' className='w-[37px] h-[37px]' />
                                    <div className='flex flex-col gap-1'>
                                        <p className='font-mont font-bold text-[#585353]'>{item?.name}</p>
                                        <p className='text-xs text-[#757575] font-mont'>{item?.date}</p>
                                    </div>
                                </div> */}
                            </div>
                        )) 
                        :
                        <p className='text-2xl text-[#000] text-center font-semibold'>No News Available</p>
                    }
                </div>
            }

            <div className="flex justify-center items-center gap-4 mt-10">
                <button
                    onClick={handlePrevPage}
                    disabled={!prevPageUrl}
                    className={`px-4 py-2 bg-[#00AA55] text-white font-bold rounded ${
                    !prevPageUrl && "opacity-50 cursor-not-allowed"
                    }`}
                >
                    Previous
                </button>
                <p className="text-[#222222] font-bold">Page {currentPage}</p>
                <button
                    onClick={handleNextPage}
                    disabled={!nextPageUrl}
                    className={`px-4 py-2 bg-[#00AA55] text-white font-bold rounded ${
                    !nextPageUrl && "opacity-50 cursor-not-allowed"
                    }`}
                >
                    Next
                </button>
            </div>

        </div>

        <div
            style={{ background: `url(${Suggestion})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"  }}
            className='lg:h-[512px] w-full flex py-10 lg:py-0 items-center gap-[20px] lg:gap-[45px] justify-center flex-col mt-[100px]'
        >
            <p className='font-manja font-bold text-[#222222] text-[27px]'>Suggestion and Complaints</p>
            <p className='text-center font-medium font-mont_alt text-[11px] text-[#757575] w-[337px]'>
                Don't hesitate to reach us because we believe that citizens 
                should participate in driving change and development in Nigeria.
            </p>

            <div className='flex flex-col lg:flex-row items-center gap-6'>
                <div className='bg-[#fff] w-[127px] h-[150px] flex flex-col gap-5 items-center justify-center'>
                    <img src={CallB} alt='CallB' className='w-[31px] h-[31px]'/>
                    <div className='flex flex-col items-center gap-[5px]'>
                        <p className='font-manja text-[#222222] font-bold text-[13px]'>Call on</p>
                        <p className='text-[#757575] font-manja text-[11px]'>0703 738 3444</p>
                    </div>
                </div>
                <div className='bg-[#fff] w-[127px] h-[150px] flex flex-col gap-5 items-center justify-center'>
                    <img src={Mail} alt='Mail' className='w-[31px] h-[31px]'/>
                    <div className='flex flex-col items-center gap-[5px]'>
                        <p className='font-manja text-[#222222] font-bold text-[13px]'>Mail at</p>
                        <p className='text-[#757575] font-manja text-[11px]'>admin@noa.gov.ng</p>
                    </div>
                </div>
                <div className='bg-[#fff] w-[127px] h-[150px] flex flex-col gap-5 items-center justify-center'>
                    <img src={Time} alt='Time' className='w-[31px] h-[31px]'/>
                    <div className='flex flex-col items-center gap-[5px]'>
                        <p className='font-manja text-[#222222] font-bold text-[13px]'>Open hrs</p>
                        <p className='text-[#757575] font-manja text-[11px]'>8am to 4pm</p>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default News
