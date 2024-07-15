import React from 'react'
import CloseIcon from "../assets/svg/closeIcon.svg"

const Privacy = ({ handleClose }) => {
    return (
        <div className='bg-[#fff] w-[600px] h-[500px] flex flex-col gap-4 overflow-y-scroll  mt-[50px] rounded-lg p-4'>
            <div className='flex items-center justify-between'>
                <p className='font-medium font-Hat text-[#3F434A]  text-[24px] text-[#000]'>Privacy Policy</p>
                <button className="flex justify-center items-center" onClick={handleClose}>
                    <img src={CloseIcon} alt='close' />
                </button>
            </div>
            <div className='mt-[15px] flex flex-col gap-5'>
                <div className="flex flex-col gap-3">
                    <p className='font-mont_alt text-[#000] text-base font-semibold'>Who we are</p>
                    <p className='font-mont_alt text-[#000] text-sm'>
                        The National Orientation Agency, 
                        is an agency under the Ministry of Information and National Orientation, 
                        Nigeria. Our website address is: https://noa.gov.ng
                    </p>
                </div>
                <p className='font-mont_alt text-[#000] font-bold text-sm'>What personal data we collect and why we collect it</p>
                <div className="flex flex-col gap-3">
                    <p className='font-mont_alt text-[#000] text-base font-semibold'>Comments</p>
                    <p className='font-mont_alt text-[#000] text-sm'>
                        When visitors leave comments on the site we collect the data shown in the comments form, 
                        and also the visitor’s IP address and browser user agent string to help spam detection.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className='font-mont_alt text-[#000] text-base font-semibold'>Media</p>
                    <p className='font-mont_alt text-[#000] text-sm'>
                        If you upload images to the website, you should avoid uploading images with embedded 
                        location data (EXIF GPS) included. Visitors to the website can download and 
                        extract any location data from images on the website.
                    </p>
                </div>
                <p className='font-mont_alt text-[#000] font-bold text-sm'>Contact forms</p>
                <div className="flex flex-col gap-3">
                    <p className='font-mont_alt text-[#000] text-base font-semibold'>Cookies</p>
                    <p className='font-mont_alt text-[#000] text-sm'>
                        If you leave a comment on our site you may opt-in to saving your name, 
                        email address and website in cookies. These are for your convenience so that you do not 
                        have to fill in your details again when you leave another comment. 
                        These cookies will last for one year.
                    </p>
                    <p className='font-mont_alt text-[#000] text-sm'>
                        If you have an account and you log in to this site, 
                        we will set a temporary cookie to determine if your browser accepts cookies. 
                        This cookie contains no personal data and is discarded when you close your browser.
                    </p>
                    <p className='font-mont_alt text-[#000] text-sm'>
                        When you log in, we will also set up several cookies to save your login 
                        information and your screen display choices. Login cookies last for two days, 
                        and screen options cookies last for a year. If you select “Remember Me”, your 
                        login will persist for two weeks. If you log out of your account, the login cookies will 
                        be removed.
                    </p>
                    <p className='font-mont_alt text-[#000] text-sm'>
                        If you edit or publish an article, an additional cookie will be saved in your browser. 
                        This cookie includes no personal data and simply indicates the post ID of the article you 
                        just edited. It expires after 1 day.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className='font-mont_alt text-[#000] text-base font-semibold'>Embedded content from other websites</p>
                    <p className='font-mont_alt text-[#000] text-sm'>
                        Articles on this site may include embedded content (e.g. videos, images, articles, etc.). 
                        Embedded content from other websites behaves in the exact same way as if the visitor has 
                        visited the other website.
                    </p>
                    <p className='font-mont_alt text-[#000] text-sm'>
                        These websites may collect data about you, use cookies, 
                        embed additional third-party tracking, and monitor your interaction with that embedded content, 
                        including tracing your interaction with the embedded content if you have an account and are 
                        logged in to that website.
                    </p>
                </div>
                <p className='font-mont_alt text-[#000] font-bold text-sm'>Analytics</p>
                <div className="flex flex-col gap-3">
                    <p className='font-mont_alt text-[#000] text-base font-semibold'>Who we share your data with</p>
                    <p className='font-mont_alt text-[#000] text-sm'>
                        Some information shared may be collected anonymously via third party tools such as 
                        Google Analytics and may be used for additional data processing such as analytics.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className='font-mont_alt text-[#000] text-base font-semibold'>How long we retain your data</p>
                    <p className='font-mont_alt text-[#000] text-sm'>
                        If you leave a comment, the comment and its metadata are retained indefinitely. 
                        This is so we can recognize and approve any follow-up comments automatically instead 
                        of holding them in a moderation queue.
                    </p>
                    <p className='font-mont_alt text-[#000] text-sm'>
                        For users that register on our website (if any), 
                        we also store the personal information they provide in their user profile. 
                        All users can see, edit, or delete their personal information at any time 
                        (except they cannot change their username). Website administrators can also see and edit 
                        that information.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className='font-mont_alt text-[#000] text-base font-semibold'>What rights you have over your data</p>
                    <p className='font-mont_alt text-[#000] text-sm'>
                        If you have an account on this site, or have left comments, 
                        you can request to receive an exported file of the personal data we hold about you, 
                        including any data you have provided to us. 
                        You can also request that we erase any personal data we hold about you. 
                        This does not include any data we are obliged to keep for administrative, 
                        legal, or security purposes.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className='font-mont_alt text-[#000] text-base font-semibold'>Where we send your data</p>
                    <p className='font-mont_alt text-[#000] text-sm'>
                        Visitor comments may be checked through an automated spam detection service.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Privacy