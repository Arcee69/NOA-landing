import React from 'react'
import CloseIcon from "../assets/svg/closeIcon.svg"

const Terms = ({ handleClose }) => {
    return (
        <div className='bg-[#fff] w-[600px] h-[500px] flex flex-col gap-4 overflow-y-scroll  mt-[100px] rounded-lg p-4'>
            <div className='flex items-center justify-between'>
                <p className='font-medium font-Hat text-[#3F434A]  text-[24px] text-[#000]'>Terms of Use</p>
                <button className="flex justify-center items-center" onClick={handleClose}>
                    <img src={CloseIcon} alt='close' />
                </button>
            </div>
            <div className='mt-[15px]'>
                <p className='font-mont_alt text-[#000] text-base'>
                    Introduction
                    Welcome to the official website of the Nigeria National Orientation Agency (NOA). By accessing or using this website, you agree to comply with and be bound by the following terms and conditions of use. Please read them carefully before using this site. If you do not agree with any part of these terms, you must not use this website.

                    1. Definitions
                    "NOA" refers to the Nigeria National Orientation Agency.
                    "Website" refers to the official NOA website.
                    "User" or "You" refers to any individual or entity accessing or using the website.
                    "Content" refers to all text, images, multimedia, and other materials available on the website.
                    2. Acceptance of Terms
                    By accessing and using the NOA website, you agree to abide by these terms of use, all applicable laws, and any additional policies and guidelines that NOA may establish.

                    3. Changes to Terms
                    NOA reserves the right to modify these terms of use at any time. Any changes will be effective immediately upon posting on the website. Your continued use of the website following the posting of changes will constitute your acceptance of such changes.

                    4. Use of Website
                    4.1. Permitted Use
                    You may use the website for lawful purposes only. You agree not to:

                    Use the website in any way that violates any applicable local, national, or international law or regulation.
                    Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website, or which may harm NOA or users of the website.
                    4.2. Prohibited Use
                    You agree not to:

                    Use the website in any manner that could disable, overburden, damage, or impair the site.
                    Introduce any viruses, trojans, worms, logic bombs, or other material that is malicious or technologically harmful.
                    Attempt to gain unauthorized access to the website, the server on which the website is stored, or any server, computer, or database connected to the website.
                    5. Intellectual Property Rights
                    5.1. Ownership
                    The website and its entire contents, features, and functionality are owned by NOA, its licensors, or other providers of such material and are protected by Nigerian and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.

                    5.2. Limited License
                    NOA grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the website for personal, non-commercial use.

                    6. User Contributions
                    6.1. Responsibility
                    You are responsible for any content you post, submit, or otherwise make available on the website. You agree that your contributions do not violate any law or the rights of any third party.

                    6.2. License
                    By posting content on the website, you grant NOA a non-exclusive, worldwide, royalty-free, perpetual, and irrevocable right to use, reproduce, modify, adapt, publish, translate, distribute, and display such content.

                    7. Disclaimer of Warranties
                    The website is provided on an "as is" and "as available" basis. NOA makes no representations or warranties of any kind, express or implied, as to the operation of the website, the content, or the materials included on the website.

                    8. Limitation of Liability
                    To the fullest extent permitted by law, NOA shall not be liable for any damages of any kind arising from the use of or inability to use the website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.

                    9. Indemnification
                    You agree to defend, indemnify, and hold harmless NOA, its affiliates, and their respective officers, directors, employees, contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these terms of use or your use of the website.

                    10. Governing Law and Jurisdiction
                    These terms of use are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any legal action or proceeding arising under or related to these terms of use shall be brought exclusively in the courts of Nigeria.


                    11. Miscellaneous
                    11.1. Entire Agreement
                    These terms of use constitute the entire agreement between you and NOA regarding your use of the website and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral.

                    11.2. Waiver and Severability
                    No waiver of any term or condition set forth in these terms of use shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition. If any provision of these terms of use is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the terms of use will continue in full force and effect.

                    11.3. Assignment
                    You may not assign any of your rights or delegate any of your obligations under these terms of use without NOA's prior written consent. NOA may assign its rights and delegate its obligations under these terms of use at any time without notice to you.

                    By using the NOA website, you acknowledge that you have read, understood, and agree to be bound by these terms of use.
                </p>
            </div>
        </div>
    )
}

export default Terms