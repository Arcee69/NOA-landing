import React from 'react'
import CloseIcon from "../assets/svg/closeIcon.svg"

const Privacy = ({ handleClose }) => {
    return (
        <div className='bg-[#fff] w-[600px] h-[500px] flex flex-col gap-4 overflow-y-scroll  mt-[100px] rounded-lg p-4'>
            <div className='flex items-center justify-between'>
                <p className='font-medium font-Hat text-[#3F434A]  text-[24px] text-[#000]'>Privacy Policy</p>
                <button className="flex justify-center items-center" onClick={handleClose}>
                    <img src={CloseIcon} alt='close' />
                </button>
            </div>
            <div className='mt-[15px]'>
                <p className='font-mont_alt text-[#000] text-base'>
                    1. Introduction
                    The Nigeria National Orientation Agency (NOA) is committed to protecting the privacy of individuals who interact with us. This Privacy Policy outlines the types of personal information we collect, how we use, share, and protect this information, and your rights regarding your personal data.

                    2. Information We Collect
                    We may collect the following types of personal information:

                    Personal Identification Information: Name, address, email address, phone number, and other contact details.
                    Demographic Information: Age, gender, occupation, and other relevant demographic details.
                    Usage Data: Information on how you interact with our website, services, and communications.
                    Technical Data: IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system, and platform.
                    3. How We Collect Information
                    We collect personal information through:

                    Direct Interactions: When you provide information by filling in forms, subscribing to our services, or contacting us.
                    Automated Technologies: As you interact with our website, we may automatically collect technical data about your equipment, browsing actions, and patterns.
                    Third Parties: We may receive personal data about you from various third parties, including analytics providers and search information providers.
                    4. Use of Information
                    We use personal information to:

                    Provide and improve our services.
                    Respond to inquiries and provide customer support.
                    Send promotional materials and updates (with your consent).
                    Conduct research and analysis to better understand user needs.
                    Ensure the security of our website and services.
                    Comply with legal obligations and protect our legal rights.
                    5. Sharing of Information
                    We may share your personal information with:

                    Service Providers: Third-party vendors who provide services on our behalf, such as IT and system administration services.
                    Legal Authorities: When required by law or to protect our rights, property, or safety, or that of others.
                    Business Transfers: In the event of a merger, acquisition, or any form of sale of some or all of our assets.
                    6. Data Security
                    We implement appropriate technical and organizational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.

                    7. Data Retention
                    We retain personal information only as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.

                    8. Your Rights
                    You have the following rights regarding your personal data:

                    Access: You can request access to your personal data and receive a copy.
                    Correction: You can request correction of any inaccurate or incomplete data.
                    Deletion: You can request deletion of your personal data, subject to certain exceptions.
                    Objection: You can object to the processing of your personal data in certain circumstances.
                    Restriction: You can request the restriction of processing your personal data.
                    Portability: You can request to receive your personal data in a structured, commonly used, and machine-readable format.
                    
                    9. Third-Party Links
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of these websites.

                    10. Changes to This Privacy Policy
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website. You are advised to review this policy periodically for any changes.
                </p>
            </div>
        </div>
    )
}

export default Privacy