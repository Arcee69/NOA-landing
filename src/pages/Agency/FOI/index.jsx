import React from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'

import BigChain from "../../../assets/png/big_chain.png"
import BigLogo from "../../../assets/png/big_logo_b.png"
import Opg from "../../../assets/png/opg.png"
import Foi from "../../../assets/png/foi_a.png"
import Culture from "../../../assets/png/culture.png"
import Chain from "../../../assets/png/chain.png"
import Suggestion from "../../../assets/png/suggestion.png"

import CallB from "../../../assets/svg/call.svg"
import Time from "../../../assets/svg/time.svg"
import Mail from "../../../assets/svg/mail.svg"

import Download from "../../../assets/svg/download.svg"

const FOI = () => {
  return (
    <div className='flex flex-col'>

        <div className='px-[100px] py-[19px] flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base '>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>Management</p>
            </div>
        </div>

        <div className='flex flex-col mx-auto items-center justify-center w-[564px] mt-[62px] mb-[70px] gap-[15px] '>
            <p className='text-[#222] font-manja text-[36px] font-bold text-center'>
                PUBLICISING THE FREEDOM OF INFORMATION ACT, 2011 (FOIA) AND THE NOA FoI UNIT
            </p>
            <img src={BigChain} alt='BigChain' className='w-[118px] h-[12px]' />
        </div>

        <div className='flex flex-col gap-5 mb-[85px] px-[210px]'>
            <div className='flex items-start gap-[30px]'>
                <div className='flex flex-col gap-[15px] w-[639px]'>
                    <p className='text-[#7A7A7A] font-medium text-[15px] font-mont_alt'>
                        Prior to the enactment of the Freedom of Information Act (FOI Act) in 2011 and
                        several months after that, not many Nigerians could authoritatively discuss the
                        content and import of the Act as well as its relevance to our affairs as citizens of
                        Nigeria. Regrettably, this situation has continued to prevail. It is true that laws
                        remain dormant and only come to life when their provisions are give.
                    </p>
                    <p className='text-[#7A7A7A] font-medium text-[15px] font-mont_alt'>
                        It is in this connection that the National Orientation Agency (NOA), in
                        collaboration with Project ‘Right to Know’ (R2K), supported by the Democratic
                        Governance for Development Project (DGD Project II) of the UNDP and her
                        partners namely: European Union (EU), Canadian International Development
                        Agency and the United Kingdom Department For International Development
                        (DFID) has found it compelling to publicise the provisions of the FOI Act at the
                        grassroots.n effect.
                    </p>
                    <p className='text-[#7A7A7A] font-medium text-[15px] font-mont_alt'>
                        The Freedom of Information Act is no exception. For provisions of the law to be
                        given effect, it is necessary that those for whom the law is meant, are sufficiently
                        educated on what the provisions of the law are; the rationale for such a law; its
                        ultimate objective(s); what benefits accrue to them from complying with
                        provisions of the law; what do they lose by their non-compliance; and what
                        specific roles are expected of them.
                    </p>

                </div>
                <img src={Foi} alt='Foi' className='w-[319px] h-[425px]' />
            </div>

            <div className='flex items-start mt-[40px] gap-[30px]'>
                <img src={Culture} alt='Culture' className='w-[319px] h-[425px]' />
                <div className='flex flex-col gap-[15px] w-[639px]'>
                    <p className='text-[#7A7A7A] font-medium text-[15px] font-mont_alt'>
                        To achieve this, it is reasoned that it is necessary to train trainers on the
                        provisions of the Act, who would, in turn step down the training for field officers
                        at the state and local government levels. To this effect, the programme is
                        designed in two segments. The first is a multi-level training for the Agency staff,
                        beginning with the State Directors and Programme Officers in Twelve (12) Pilot
                        States (Borno, Gombe, Plateau, Benue, Kaduna, Kebbi, Lagos, Oyo, Ebonyi,
                        Enugu, Rivers, Delta) and the Federal Capital Territory (FCT).
                    </p>
                    <p className='text-[#7A7A7A] font-medium text-[15px] font-mont_alt'>
                        The first leg of the training which, focused on six states from the North (Borno,
                        Gombe, Kaduna, Plateau, Benue, Kebbi) and the FCT took place in Abuja on
                        December 20-21, 2013; while the second leg which, focused on the six southern
                        states (Rivers, Delta, Lagos, Oyo, Enugu and Ebonyi) took place in Lagos on
                        January 11-12, 2013. The trained officers at the national level are to step down the
                        training to the Chief Orientation and Mobilisation Officers (COMOs) in Seven (7)
                        Pilot States namely: Kaduna, Plateau, Gombe, Lagos, Oyo, Ebonyi, Rivers and
                        the FCT. The final stepped- down training is for officers of the Agency and the
                        Citizens’ Responsibility Volunteers at the Local Government level.
                    </p>
                    <p className='text-[#7A7A7A] font-medium text-[15px] font-mont_alt'>
                        The second segment of the programme is the grassroots public sensitisation on
                        provisions of the FOIA, which took place in each of the 146 Local Government
                        Areas in the Seven (7) Pilot States and the FCT. Theatre for Development and
                        Community Dialogue Sessions was used to engage citizens and Local
                        Government Authorities. Meanwhile, the FOI Act has already been simplified
                        and translated into Hausa, Igbo and Yoruba for mass distribution at the
                        grassroots during the sensitisation drive.
                    </p>

                </div>
                
            </div>

        </div>

        <div className='bg-[#F5F5F5] flex flex-col py-[56px] items-center gap-3 justify-center px-[100px]'>
            <div className='flex flex-col items-center justify-center gap-4 w-[480px] h-[217px]'>
                <img src={Chain} alt='Chain' className='w-[54px] h-[9px]' />
                <p className='text-[#222222] font-mont_alt font-bold text-[40px] leading-[56px] text-center'>Download resources from NOA</p>
            </div>
            <div className='flex flex-wrap gap-[30px]'>
                <div className='w-full lg:w-[605px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#FFFFFF] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#222] font-mont_alt text-base '>NOA 2023 Budget</p>
                    <img src={Download} alt='Download' className='w-6 h-6' /> 
                </div>
                <div className='w-full lg:w-[605px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#FFFFFF] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#222] font-mont_alt text-base '>Capital Project Release 2022</p>
                    <img src={Download} alt='Download' className='w-6 h-6' /> 
                </div>
                <div className='w-full lg:w-[605px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#FFFFFF] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#222] font-mont_alt text-base '>2022 FOI Annual Budget</p>
                    <img src={Download} alt='Download' className='w-6 h-6' /> 
                </div>
                <div className='w-full lg:w-[605px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#FFFFFF] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#222] font-mont_alt text-base '>2022 Procurement Plan</p>
                    <img src={Download} alt='Download' className='w-6 h-6' /> 
                </div>
                <div className='w-full lg:w-[605px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#FFFFFF] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#222] font-mont_alt text-base '>2021 Procurement Plan</p>
                    <img src={Download} alt='Download' className='w-6 h-6' /> 
                </div>
                <div className='w-full lg:w-[605px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#FFFFFF] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#222] font-mont_alt text-base '>MGt Report on Finanacial Sidelines 2028</p>
                    <img src={Download} alt='Download' className='w-6 h-6' /> 
                </div>
                <div className='w-full lg:w-[605px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#FFFFFF] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#222] font-mont_alt text-base '>2023 Procurement Plan</p>
                    <img src={Download} alt='Download' className='w-6 h-6' /> 
                </div>
                <div className='w-full lg:w-[605px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#FFFFFF] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#222] font-mont_alt text-base '>Voter Education towards the 2023 General Election</p>
                    <img src={Download} alt='Download' className='w-6 h-6' /> 
                </div>
                <div className='w-full lg:w-[605px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#FFFFFF] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#222] font-mont_alt text-base '>Summary of 2021 Contract Awards</p>
                    <img src={Download} alt='Download' className='w-6 h-6' /> 
                </div>
                <div className='w-full lg:w-[605px] lg:h-[64px] py-5 px-5 lg:px-[40px] flex items-center justify-between border-[8px] bg-[#FFFFFF] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#222] font-mont_alt text-base '>Financial Statements for 2018</p>
                    <img src={Download} alt='Download' className='w-6 h-6' /> 
                </div>

            </div>

        </div>

        <div className='flex flex-col gap-[40px] px-[100px] pt-[82px] pb-[52px]'>
            <div className='flex flex-col gap-1'>
                <p className='text-[#222] font-bold text-[27px] font-mont_alt'>Relevant information</p>
                <img src={Chain} alt='Chain' className='w-[54px] h-[9px]' />
            </div>
            <div className='flex items-center gap-[40px]'>
                <div className='flex gap-6 flex-col items-center justify-center w-[386px]'>
                    <img src={BigLogo} alt='BigLogo' className='w-[386px] h-[200px] ' />
                    <p className='text-[#222] font-manja font-bold text-base'>
                        OPEN GOVERNMENT PARTNERSHIP (OGP) NAP III DOCUMENT FOR PUBLIC REVIEW: REQUEST FOR INPUTS
                    </p>
                </div>
                <div className='flex gap-6 flex-col items-center justify-center w-[386px]'>
                    <img src={Opg} alt='Opg' className='w-[386px]  h-[200px]' />
                    <p className='text-[#222] font-manja font-bold text-base'>
                        DOCUMENT: Draft Open Government Partnership – National Action Plan III
                    </p>
                </div>
                <div className='flex gap-6 flex-col items-center justify-center w-[386px]'>
                    <img src={BigLogo} alt='BigLogo' className='w-[386px] h-[200px] ' />
                    <p className='text-[#222] font-manja font-bold text-base'>
                        2021 ANNUAL REPORT (NATIONAL ORIENTATION AGENCY)
                    </p>
                </div>

            </div>

        </div>

        <div className='bg-[#222222] flex flex-col  py-[56px] items-center gap-3 justify-center px-[100px] '>
            <div className='flex flex-col items-center justify-center gap-4 w-[480px] h-[217px]'>
                <img src={Chain} alt='Chain' className='w-[54px] h-[9px]' />
                <p className='text-[#fff] font-mont_alt font-bold text-[40px] leading-[56px] text-center'>The freedom of information unit</p>
            </div>
            <div className='flex flex-wrap gap-[30px]'>
                <div className='w-full lg:w-[604px] lg:h-[63px] py-[8px] px-5 lg:px-[40px] flex flex-col border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#fff] font-manja font-bold text-base '>Umoru Ibrahim</p>
                    <p className='text-[#00AA55] font-manja text-sm font-bold'>08039676638</p> 
                </div>
                <div className='w-full lg:w-[604px] lg:h-[63px] py-[8px] px-5 lg:px-[40px] flex flex-col border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#fff] font-manja font-bold text-base '>JESSICA AKIGA</p>
                    <p className='text-[#00AA55] font-manja text-sm font-bold'>08114566777</p> 
                </div>
                <div className='w-full lg:w-[604px] lg:h-[63px]  py-[8px] px-5 lg:px-[40px] flex flex-col border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#fff] font-manja font-bold text-base '>Tope Adewunmi</p>
                    <p className='text-[#00AA55] font-manja text-sm font-bold'>08036444820</p> 
                </div>
                <div className='w-full lg:w-[604px] lg:h-[63px]  py-[8px] px-5 lg:px-[40px] flex flex-col border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#fff] font-manja font-bold text-base '>Marcellinus Ekwebelam</p>
                    <p className='text-[#00AA55] font-manja text-sm font-bold'>08138968795, 08074295714</p> 
                </div>
                <div className='w-full lg:w-[604px] lg:h-[63px]  py-[8px] px-5 lg:px-[40px] flex flex-col border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#fff] font-manja font-bold text-base '>Obiageli Kechere</p>
                    <p className='text-[#00AA55] font-manja text-sm font-bold'>08033392369</p> 
                </div>
                <div className='w-full lg:w-[604px] lg:h-[63px]  py-[8px] px-5 lg:px-[40px] flex flex-col border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#fff] font-manja font-bold text-base '>Henry Obisesan (Secretary)</p>
                    <p className='text-[#00AA55] font-manja text-sm font-bold'>07066667880</p> 
                </div>
                <div className='w-full lg:w-[604px] lg:h-[63px]  py-[8px] px-5 lg:px-[40px] flex flex-col border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#fff] font-manja font-bold text-base '>Umaru Ibrahim</p>
                    <p className='text-[#00AA55] font-manja text-sm font-bold'>08039676638</p> 
                </div>
                <div className='w-full lg:w-[604px] lg:h-[63px] py-[8px] px-5 lg:px-[40px] flex flex-col border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#fff] font-manja font-bold text-base '>Helen Babalola</p>
                    <p className='text-[#00AA55] font-manja text-sm font-bold'>08065420252</p> 
                </div>
                <div className='w-full lg:w-[604px] lg:h-[63px] py-[8px] px-5 lg:px-[40px] flex flex-col border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#fff] font-manja font-bold text-base '>David Ofurum</p>
                    <p className='text-[#00AA55] font-manja text-sm font-bold'>08038767991, 08038767991</p> 
                </div>
                <div className='w-full lg:w-[604px] lg:h-[63px] py-[8px] px-5 lg:px-[40px] flex flex-col border-[8px] bg-[#2E2E2E] border-y-0 border-x-[#00AA55] rounded-lg'>
                    <p className='text-[#fff] font-manja font-bold text-base '>Abiodun Olayeni-Alli</p>
                    <p className='text-[#00AA55] font-manja text-sm font-bold'>08036280194</p> 
                </div>

            </div>
        </div>
        
        <div className='bg-[#fff] w-full py-[80px]'>
            <div className='w-[554px] mx-auto flex flex-col items-center gap-6'>
                <p className='font-bold text-[#222222] font-mont_alt text-[32px] leading-[40px] text-center'>
                    While some information have been proactively disclosed on this website, 
                    you can request for information
                </p>
                <button className='bg-[#00AA55] w-[122px] h-[48px] flex items-center justify-center flex-col'>
                    <p className='font-manja text-[#fff] text-sm font-bold'>Contact Us</p>
                </button>
            </div>
        </div>

        <div
            style={{ background: `url(${Suggestion})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"  }}
            className='lg:h-[512px] w-full flex py-10 lg:py-0 items-center gap-[20px] lg:gap-[45px] justify-center flex-col '
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

export default FOI