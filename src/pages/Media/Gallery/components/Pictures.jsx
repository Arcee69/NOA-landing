import React, { useEffect, useState } from 'react'

import Chain from "../../../../assets/png/chain.png"
import Poster from "../../../../assets/png/poster.png" 
import PosterB from "../../../../assets/png/posterB.png" 

import Folder from "../../../../assets/svg/folder.svg"
import axios from 'axios'


const Pictures = () => {
    const [picData, setPicData] = useState([])
    const [loading, setLoading] = useState(false)

    
    const getImages = async () => {
        setLoading(true)
        await axios.get("https://api.admin.noa.gov.ng/api/gallery")
        .then((res) => {
              console.log(res, "res")
              setLoading(false)
              setPicData(res?.data?.data?.gallery)
        })
        .catch((err) => {
          setLoading(false)
          console.log(err, "err")
        })
      }
    
      useEffect(() => {
        getImages()
      }, [])

  return (
    <div className='flex flex-col'>
        <div className='flex flex-col gap-1'>
            <p className='text-[#222222] font-mont_alt font-bold text-[24px] lg:text-[40px]'>Picture gallery</p>
            <img src={Chain} alt='Chain' className='w-[54px] ' />
        </div>

        <div className='mt-[40px] flex flex-col lg:flex-row items-center gap-20'>
        {
            loading 
            ?
            <p  className='text-2xl text-[#000] text-center font-semibold'>Loading...</p>
            :
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-5 mt-[40px]'>
                {
                    picData?.length > 0 ? picData?.map((item, index) => (
                        <div className=' w-full flex flex-col items-start gap-5' key={index}>
                            <img src={item?.path} alt='Poster' className='lg:w-[592px] lg:h-[350px]'/>
                            <div className='flex gap-2 items-center'>
                                <img src={Folder} alt='Folder' className='w-[10px] h-[18px]' />
                                <p className='font-manja font-bold text-[#222] text-xs'>{item?.title}</p>
                            </div>
                        </div>
                    )) 
                    :
                    <p className='text-2xl text-[#000] text-center font-semibold'>No News Available</p>
                }
            </div>
        }
        </div>

    </div>
  )
}

export default Pictures