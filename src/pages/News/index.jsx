import React, { useEffect, useState } from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Chain from "../../assets/png/chain.png"

import SuggestionAndComplaints from '../../components/SuggestionAndComplaints'


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
                                <img src={item?.image} alt='Poster' className='lg:w-[279px] object-fill lg:h-[200px]' />
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

            <div className="flex justify-center items-center gap-4 my-10">
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

        <SuggestionAndComplaints />

    </div>
  )
}

export default News
