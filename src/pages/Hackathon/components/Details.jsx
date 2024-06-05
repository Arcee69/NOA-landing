import React, { useState, useEffect } from 'react'

import Nigeria from "../../../assets/png/nigeria.png"
import Origin from "../../../assets/png/origin.png"

const Details = () => {

    const targetDate = '2024-06-31T23:59:59';

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

  return (
    <div className='bg-[#F5F5F5] w-full px-[49px] py-[71px]'>
        <div className='bg-[#fff] w-[90%] mx-auto px-[46px] gap-[42px] pt-[81px] pb-[115px] flex flex-col'>
            <div 
                className='flex w-full rounded-lg items-center py-[14px] justify-center gap-[48px]'
                style={{ background: "linear-gradient(84deg, #F8A401 -20.27%, #70C217 20.45%, rgba(112, 194, 23, 0.69) 75.32%, #FFF 102.87%)"}}
            >
                <img src={Nigeria} alt='Nigeria' className='w-[256px]' />
                <img src={Origin} alt='Origin' className='w-[501px]'/>
            </div>

            <div className='border border-[#E6E6E6] rounded-[13px] pl-5 pt-[26px] pb-[14px] flex flex-col gap-3'>
                <p className='text-[#027315] text-base font-manja font-bold'>PRIZES</p>
                <div className='flex items-center gap-12'>
                    <div className='flex flex-col  gap-3'>
                        <p className='font-mont_alt text-xs text-[#686868] font-semibold'>1st Place</p>
                        <p className='font-manja text-[#DC6803] font-bold text-[23px]'>Sony DSLR Camera 360s</p>
                    </div>
                    <div className='flex flex-col  gap-3'>
                        <p className='font-mont_alt text-xs text-[#686868] font-semibold'>2nd Place</p>
                        <p className='font-manja text-[#DC6803] font-bold text-[23px]'>iPhone 12 pro 500gb</p>
                    </div>
                    <div className='flex flex-col  gap-3'>
                        <p className='font-mont_alt text-xs text-[#686868] font-semibold'>3rd Place</p>
                        <p className='font-manja text-[#DC6803] font-bold text-[23px]'>200,000 Naira</p>
                    </div>

                </div>

            </div>

            <div className='flex items-start justify-between w-full'>
                <div className='w-[700px] flex flex-col gap-6'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-[#000000] font-mont font-bold text-[32px] capitalize'>The Origin of Nigeria Photo Contest</p>
                        <p className='text-[#5F647C] text-base font-manja font-bold'>0 participants</p>
                    </div>
                    <p className='text-[#475467] font-mont_alt text-base leading-[24px] capitalize'>
                        Enter our photo contest for a chance to showcase your creativity and win cash prizes. 
                        Submit your best photos in any category and impress our judges with your technical skills, 
                        originality, and emotional impact. The top three winners will be featured on our website and 
                        social media. Good luck!
                    </p>
                    <p className='text-[#000000] font-manja text-[24px] font-bold'>Theme: <span className='text-base font-mont_alt font-normal' >“The Origin of Nigeria”</span></p>
                    <div className='flex flex-col'>
                        <p className='text-[#000000] font-manja text-[24px] font-bold'>Eligibility:</p>
                        <ul className='list-disc ml-10'>
                            <li className='text-base font-mont_alt font-normal'> Open to all Nigerian citizens and residents.</li>
                            <li className='text-base font-mont_alt font-normal'>Participants must be at least 18 years old.</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[#000000] font-manja text-[24px] font-bold'>Submission Requirements:</p>
                        <ul className='list-disc ml-10'>
                            <li className='text-base font-mont_alt font-normal'>Submit a high-resolution photograph that captures the essence of Nigeria’s history, culture, or heritage.</li>
                            <li className='text-base font-mont_alt font-normal'>Photos can be in color or black-and-white.</li>
                            <li className='text-base font-mont_alt font-normal'>Each participant can submit up to three entries.</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[#000000] font-manja text-[24px] font-bold'>Judging Criteria:</p>
                        <ul className='list-disc ml-10'>
                            <li className='text-base font-mont_alt font-normal'>Creativity and originality</li>
                            <li className='text-base font-mont_alt font-normal'>Relevance to the theme</li>
                            <li className='text-base font-mont_alt font-normal'>Technical quality (composition, lighting, focus)</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[#000000] font-manja text-[24px] font-bold'>Prizes:</p>
                        <ul className='list-disc ml-10'>
                            <li className='text-base font-mont_alt font-normal'>First Place: ₦50,000 cash prize</li>
                            <li className='text-base font-mont_alt font-normal'>Second Place: ₦30,000 cash prize</li>
                            <li className='text-base font-mont_alt font-normal'>Third Place: ₦20,000 cash prize</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[#000000] font-manja text-[24px] font-bold'>Submission Deadline:</p>
                        <ul className='list-disc ml-10'>
                            <li className='text-base font-mont_alt font-normal'>All entries must be submitted by [deadline date].</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[#000000] font-manja text-[24px] font-bold'>How to Submit:</p>
                        <ul className='list-disc ml-10'>
                            <li className='text-base font-mont_alt font-normal'>Email your photo(s) to [contest email address].</li>
                            <li className='text-base font-mont_alt font-normal'>Include your full name, contact information, and a brief description of each photo.</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[#000000] font-manja text-[24px] font-bold'>Rights and Usage:</p>
                        <ul className='list-disc ml-10'>
                            <li className='text-base font-mont_alt font-normal'>By submitting your photo, you grant the Nigerian Orientation Agency the right to use it for promotional purposes.</li>
                            <li className='text-base font-mont_alt font-normal'>You retain ownership of your work.</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[#000000] font-manja text-[24px] font-bold'>Winners Announcement:</p>
                        <ul className='list-disc ml-10'>
                            <li className='text-base font-mont_alt font-normal'>Winners will be announced on [announcement date] via the agency’s website and social media channels.</li>
                        </ul>
                    </div>
                </div>
                <div className='w-[376px] flex flex-col gap-[56px]'>
                    <div className='w-full h-[51px] rounded-xl bg-[#ECFDF3] flex items-center justify-center '>
                        <p className='font-manja text-base font-bold text-[#027315]'>View Submissions (0)</p>
                    </div>

                    <div className='w-full gap-[43px] h-[348px] rounded-xl flex flex-col items-center justify-center border border-[#A5A5A5]'>
                        <div className='gap-4 flex flex-col'>
                            <p className='font-manja text-[#027315] text-base font-bold'>Contest ending in</p>
                            <div className='flex items-center gap-6'>
                                <div className='bg-[#ECF9EE] w-[62px] flex flex-col items-center rounded-lg py-1.5 gap-2.5'>
                                    <p className='font-mont_alt text-[#000000] text-[23px] font-bold'>{timeLeft.days || '0'}</p>
                                    <p className='text-[#686868] text-xs font-mont_alt font-semibold'>Day</p>
                                </div>
                                <div className='bg-[#ECF9EE] w-[62px]  flex flex-col items-center rounded-lg py-1.5 gap-2.5'>
                                    <p className='font-mont_alt text-[#000000] text-[23px] font-bold'>{timeLeft.hours || '0'}</p>
                                    <p className='text-[#686868] text-xs font-mont_alt font-semibold'>Hours</p>
                                </div>
                                <div className='bg-[#ECF9EE] w-[62px]  flex flex-col items-center rounded-lg py-1.5 gap-2.5'>
                                    <p className='font-mont_alt text-[#000000] text-[23px] font-bold'>{timeLeft.minutes || '0'}</p>
                                    <p className='text-[#686868] text-xs font-mont_alt font-semibold'>Mins</p>
                                </div>
                                <div className='bg-[#ECF9EE] w-[62px] flex flex-col items-center rounded-lg py-1.5 gap-2.5'>
                                    <p className='font-mont_alt text-[#000000] text-[23px] font-bold'>{timeLeft.seconds || '0'}</p>
                                    <p className='text-[#686868] text-xs font-mont_alt font-semibold'>Secs</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <button className='w-[310px] flex items-center justify-center h-[51px] bg-[#027315] text-[#FFFFFF] font-manja text-base font-bold rounded-lg'>
                                Enter Contest
                            </button>
                            <button className='bg-[#88BD91] rounded-lg w-[310px] flex items-center justify-center h-[51px] text-[#FFFFFF] font-manja text-base font-bold'>
                                Vote
                            </button>
                        </div>
                    </div>

                    <div className='px-[19px] py-[26px] bg-[#E8F2EA] rounded-[13px] w-[375px] mx-auto flex flex-col gap-[7px]'>
                        <p className='text-[#000000] font-manja text-[24px] font-bold'>Contact Information:</p>
                        <p className='font-mont_alt text-[#000] text-base '>For inquiries, email [contact email address] or call [contact phone number].</p>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Details