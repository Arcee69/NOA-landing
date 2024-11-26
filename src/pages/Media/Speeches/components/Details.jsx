import React from 'react'
import { MdOutlineDownload } from "react-icons/md";

import AudioThumb from "../../../../assets/png/audio_thumbnail.png"

const Details = ({ presData, handleClose }) => {

    const downloadFile = (url, filename) => {
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = filename;
        anchor.click();
      };
    
      const downloadTranscript = (content, filename) => {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        downloadFile(url, filename);
        URL.revokeObjectURL(url);
      };


  return (
    <div className='bg-[#fff] rounded-xl  lg:w-[650px] h-[500px] mt-[100px] overflow-y-auto flex flex-col gap-[34px]'>
        <div className='flex items-center w-full ' >
            <div className='bg-[#F2F4F8] hidden w-4/12 h-[193px] md:flex items-center flex-col justify-center p-2'>
                <img src={AudioThumb} alt='AudioThumb' className='' />
            </div>
            <div className='flex flex-col w-full lg:w-8/12 h-[193px] bg-[#052915] p-[32px] gap-2'>
                <p className='font-mont_alt text-[#fff] font-bold text-sm'>{presData.name}</p>
                <p className='font-manja text-base text-[#E4E2E2]'>{new Date(presData.created_at).toLocaleDateString()}</p>
                <audio controls >
                    <source  src={presData.audio} type="audio/wav"  />
                </audio>
            </div>
        </div>
        <div className='flex flex-col gap-5 px-5'>
            <div className='flex items-center gap-10  justify-between overflow-x-auto lg:overflow-x-hidden overflow-y-hidden'>
                <p className='font-bold text-[#222222] font-mont_alt text-base lg:text-[24px]'>Transcript</p>
                <div className='flex items-center gap-2'>
                    <div 
                        className='flex items-center cursor-pointer gap-1' 
                        onClick={() => downloadFile(presData.audio, 'speech.wav')}
                    >
                        <MdOutlineDownload className='text-[#757575] w-5 h-5' />
                        <p className='font-mont_alt text-xs font-bold whitespace-nowrap text-[#757575]'>Download speech</p>
                    </div>
                    <div 
                        className='flex items-center cursor-pointer gap-1' 
                        onClick={() => downloadTranscript(presData.body, 'transcript.txt')}
                    >
                        <MdOutlineDownload className='text-[#757575] w-5 h-5' />
                        <p className='font-mont_alt text-xs font-bold  whitespace-nowrap text-[#757575]'>Download transcript</p>
                    </div>
                </div>
            </div>
            <p className='font-mont_alt text-sm bg-clip-text text-transparent bg-gradient-to-t from-[#000000] to-[#C9C9C9] '>
                {presData?.body}
            </p>

            <div className='flex justify-end'>
                <button
                    type='button'
                    onClick={handleClose}
                    className='w-[85px] h-[48px] bg-[#00AA55] p-2 flex flex-col items-center justify-center'
                >
                    <p className='text-[#fff] font-manja font-bold text-sm '>Close</p>
                </button>
            </div>

        </div>

    </div>
  )
}

export default Details