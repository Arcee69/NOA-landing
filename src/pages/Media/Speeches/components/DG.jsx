import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa6'

import Coat from "../../../../assets/png/coat-of-arms.png"

import ModalPop from "../../../../components/modalPop"

import Details from './Details'

const DG = ({ data }) => {
  const [presData, setPresData] = useState([])
  const [openPresModal, setOpenPresModal] = useState(false)

//   const data = [
//       {
//           id: 1,
//           img: Coat,
//           title: "President Bola Ahmed Tinubu’s Democracy Day Address",
//           date: "12.06.2024"
//       },
//       {
//           id: 2,
//           img: Coat,
//           title: "President Bola Ahmed Tinubu’s Democracy Day Address",
//           date: "12.06.2024"
//       },
//       {
//           id: 3,
//           img: Coat,
//           title: "President Bola Ahmed Tinubu’s Democracy Day Address",
//           date: "12.06.2024"
//       },
//       {
//           id: 4,
//           img: Coat,
//           title: "President Bola Ahmed Tinubu’s Democracy Day Address",
//           date: "12.06.2024"
//       },
//       {
//           id: 5,
//           img: Coat,
//           title: "President Bola Ahmed Tinubu’s Democracy Day Address",
//           date: "12.06.2024"
//       },
//       {
//           id: 6,
//           img: Coat,
//           title: "President Bola Ahmed Tinubu’s Democracy Day Address",
//           date: "12.06.2024"
//       },
//       {
//           id: 7,
//           img: Coat,
//           title: "President Bola Ahmed Tinubu’s Democracy Day Address",
//           date: "12.06.2024"
//       },
//       {
//           id: 8,
//           img: Coat,
//           title: "President Bola Ahmed Tinubu’s Democracy Day Address",
//           date: "12.06.2024"
//       },
//       {
//           id: 9,
//           img: Coat,
//           title: "President Bola Ahmed Tinubu’s Democracy Day Address",
//           date: "12.06.2024"
//       },
//   ]

  return (
    <div className={`${data?.length > 0 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" :  "flex items-center justify-center mt-20"}  gap-[48px]`}>
        { 
            data?.length > 0 ?
                data?.map((item) => (
                    <div key={item.id} className='w-full lg:w-[381px] p-3  h-[420px] flex flex-col gap-4'  onClick={() => {setPresData(item), setOpenPresModal(true)}}>
                        <div className='flex flex-col relative'>
                            <div 
                                className='bg-[#052915] rounded-2xl w-full h-[240px] cursor-pointer flex flex-col items-center justify-center'
                            >
                                <img src={Coat} alt='Coat of arms' className='w-[175px] h-[149px]' />
                            </div>
                            <div className='bg-[#fff] rounded-lg flex absolute right-0 -bottom-2 shadow-xl flex-col items-center justify-center p-2'>
                                <FaPlay className='w-5 h-5 text-[#00AA55] text-center' />
                            </div>
                        </div>
                        <div className='bg-[#fff] w-full flex flex-col gap-1'>
                            <p className='font-mont_alt text-sm font-bold'>{item.name}</p>
                            <p className='font-manja text-base text-[#757575]'>{new Date(item.created_at).toLocaleDateString()}</p>
                        </div>
                    </div>
                )) 
                :
            <p className='text-2xl text-[#000] font-mont_alt text-center font-semibold'>No Speech Available</p>
        }

    <ModalPop isOpen={openPresModal}>
        <Details 
            handleClose={() => setOpenPresModal(false)}
            presData={presData}
        />
    </ModalPop>
</div>
  )
}

export default DG