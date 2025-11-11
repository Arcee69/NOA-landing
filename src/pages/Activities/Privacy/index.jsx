import React from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'

import Suggestion from "../../../assets/png/suggestion.png"

import CallB from "../../../assets/svg/call.svg"
import Time from "../../../assets/svg/time.svg"
import Mail from "../../../assets/svg/mail.svg"

const Privacy = () => {
  return (
    <div className='flex flex-col'>

        <div className='bg-[#fff] px-[100px] py-[19px] flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base '>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>Privacy policy</p>
            </div>
        </div>

        <div 
            className='bg-[#F5F5F5] h-[450px] flex flex-col gap-[40px] py-[56px] items-center justify-center'
        >
            <p className='w-[687px] text-[#222222] text-center leading-[44px] font-bold font-mont_alt text-[40px]'>
                Privacy policy
            </p>
            <p className='font-mont text-[18px] font-normal w-[485px] h-[196px]'>
                The main objectives of the Agency, as provided in Decree 100 of 1993, 
                are to ensure that government programmes and policies are better understood by the general public.
                <br /> <br />
                The main objectives of the Agency, as provided in Decree 100 of 1993, 
                are to ensure that government programmes and policies are better understood by the general public.
            </p>
        </div>

        <div className='bg-[#fff] w-full pt-[100px] pb-[77px] flex flex-col gap-4 px-[225px]'>
            <div className='flex flex-col gap-2'>
                <p className='text-[#000] font-mont_alt font-semibold text-[26px]'>Who we are</p>
                <p className='text-[#5F6368] font-mont_alt font-normal leading-[32px] text-[20px] '>
                    The National Orientation Agency, is an agency under the Ministry of Information and National Orientation,
                    Nigeria. Our website address is: <a className='underline cursor-pointer text-[#00f] '>https://noa.gov.ng</a>
                </p>
            </div>
            <p className='text-[#000] font-mont_alt font-semibold text-[26px]'>What personal data we collect and why we collect it:</p>
            <div className='flex flex-col mt-3 gap-2'>
                <p className='text-[#000] font-mont_alt font-semibold text-[26px]'>Comments</p>
                <p className='text-[#5F6368] font-mont_alt font-normal leading-[32px] text-[20px] '>
                    When visitors leave comments on the site, we collect the data shown in the comments form, 
                    and also the visitor’s IP address and browser user agent string to help spam detection.
                </p>
            </div>
            <div className='flex flex-col mt-3 gap-2'>
                <p className='text-[#000] font-mont_alt font-semibold text-[26px]'>Media</p>
                <p className='text-[#5F6368] font-mont_alt font-normal leading-[32px] text-[20px] '>
                    If you upload images to the website, you should avoid uploading images with embedded 
                    location data (EXIF GPS) included. Visitors to the website can download and extract 
                    any location data from images on the website.
                </p>
            </div>
            <p className='text-[#000] font-mont_alt font-semibold text-[26px]'>Contact forms</p>
            <div className='flex flex-col mt-3 gap-2'>
                <p className='text-[#000] font-mont_alt font-semibold text-[26px]'>Cookies</p>
                <p className='text-[#5F6368] font-mont_alt font-normal leading-[32px] text-[20px] '>
                    If you leave a comment on our site you may opt-in to saving your name, email address and 
                    website in cookies. These are for your convenience so that you do not have to fill in your 
                    details again when you leave another comment. These cookies will last for one year.
                    <br /> <br />
                    If you have an account and you log in to this site, we will set a temporary cookie to determine 
                    if your browser accepts cookies. This cookie contains no personal data and is discarded when 
                    you close your browser.
                    <br /> <br />
                    When you log in, we will also set up several cookies to save your login information and your screen 
                    display choices. Login cookies last for two days, and screen options cookies last for a year. 
                    If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, 
                    the login cookies will be removed.
                    <br /> <br />
                    If you edit or publish an article, an additional cookie will be saved in your browser. 
                    This cookie includes no personal data and simply indicates the post ID of the article 
                    you just edited. It expires after 1 day.
                    <br /> <br />
                </p>
            </div>
            <div className='flex flex-col mt-3 gap-2'>
                <p className='text-[#000] font-mont_alt font-semibold text-[26px]'>Embedded content from other websites</p>
                <p className='text-[#5F6368] font-mont_alt font-normal leading-[32px] text-[20px] '>
                    Articles on this site may include embedded content (e.g. videos, images, articles, etc.). 
                    Embedded content from other websites behaves in the exact same way as if the visitor has 
                    visited the other website.
                    <br /> <br />
                    These websites may collect data about you, use cookies, embed additional third-party tracking, 
                    and monitor your interaction with that embedded content, including tracing your interaction with 
                    the embedded content if you have an account and are logged in to that website.
                </p>
            </div>
            <p className='text-[#000] font-mont_alt font-semibold text-[26px]'>Analytics</p>
            <div className='flex flex-col mt-3 gap-2'>
                <p className='text-[#000] font-mont_alt font-semibold text-[26px]'>Who we share your data with</p>
                <p className='text-[#5F6368] font-mont_alt font-normal leading-[32px] text-[20px] '>
                    Some information shared may be collected anonymously via third party tools such as Google 
                    Analytics and may be used for additional data processing such as analytics.
                </p>
            </div>
            <div className='flex flex-col mt-3 gap-2'>
                <p className='text-[#000] font-mont_alt font-semibold text-[26px]'>How long we retain your data</p>
                <p className='text-[#5F6368] font-mont_alt font-normal leading-[32px] text-[20px] '>
                    If you leave a comment, the comment and its metadata are retained indefinitely. 
                    This is so we can recognize and approve any follow-up comments automatically 
                    instead of holding them in a moderation queue.
                    <br /> <br />
                    For users that register on our website (if any), we also store the personal information they 
                    provide in their user profile. All users can see, edit, or delete their personal information 
                    at any time (except they cannot change their username). 
                    Website administrators can also see and edit that information.
                </p>
            </div>
            <div className='flex flex-col mt-3 gap-2'>
                <p className='text-[#000] font-mont_alt font-semibold text-[26px]'>What rights you have over your data</p>
                <p className='text-[#5F6368] font-mont_alt font-normal leading-[32px] text-[20px] '>
                    If you have an account on this site, or have left comments, 
                    you can request to receive an exported file of the personal data we hold about you, 
                    including any data you have provided to us. You can also request that we erase any 
                    personal data we hold about you. This does not include any data we are obliged to 
                    keep for administrative, legal, or security purposes.
                </p>
            </div>
            <div className='flex flex-col mt-3 gap-2'>
                <p className='text-[#000] font-mont_alt font-semibold text-[26px]'>Where we send your data</p>
                <p className='text-[#5F6368] font-mont_alt font-normal leading-[32px] text-[20px] '>
                    Visitor comments may be checked through an automated spam detection service.
                </p>
            </div>
            <div className='flex flex-col mt-3 gap-2'>
                <p className='text-[#000] font-mont_alt font-semibold text-[26px]'>The Mobiliser app</p>
                <p className='text-[#5F6368] font-mont_alt font-normal leading-[32px] text-[20px] '>
                    Our Mobiliser app is built to help the agency communicate government policies, 
                    programmes and activities to Nigerians and get feedback from Nigerians on how 
                    the government can better serve them.
                </p>
                <p className='text-[#5F6368] font-mont_alt font-normal leading-[32px] text-[20px] '>
                    When Nigerians/users of the app send messages or information to the app, 
                    as an agency of government that has the mandate of communicating feedback from the people on 
                    government policies, programmes and activities back to the government, 
                    we relate this information we receive on the app to government so that through the feedback, 
                    the government can make decisions that better serve the people. 
                </p>
            </div>
            <div className='flex flex-col mt-3 gap-2'>
                <p className='text-[#000] font-mont_alt font-semibold text-[26px]'>Users’ rights over personal data on Mobiliser</p>
                <p className='text-[#5F6368] font-mont_alt font-normal leading-[32px] text-[20px] '>
                    If you have an account on this app, or have left comments, you can request to receive an exported 
                    file of the personal data we hold about you, including any data you have provided to us. 
                    You can also request that we erase any personal data we hold about you. 
                    This does not include any data we are obliged to keep for administrative, 
                    legal, or security purposes.
                </p>
            </div>
            <div className='flex flex-col mt-3 gap-2'>
                <p className='text-[#000] font-mont_alt font-semibold text-[26px]'>How long we retain user data on Mobiliser</p>
                <p className='text-[#5F6368] font-mont_alt font-normal leading-[32px] text-[20px] '>
                    If you send information to the app, the information is retained indefinitely. 
                    This is so we can recognize and approve any follow-up information automatically 
                    instead of holding them in a moderation queue.
                </p>
                <p className='text-[#5F6368] font-mont_alt font-normal leading-[32px] text-[20px] '>
                    For users that register on our Mobiliser, we store the personal information they provide in 
                    their user profile. All users can see, edit, or delete their personal information at any time 
                    (except they cannot change their username). The app administrators can also see and edit that 
                    information.
                </p>
            </div>
          
          
        </div>

        <div
            style={{ background: `url(${Suggestion})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"  }}
            className='lg:h-[512px] w-full flex py-10 lg:py-0 items-center gap-[20px] lg:gap-[45px] justify-center flex-col'
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

export default Privacy