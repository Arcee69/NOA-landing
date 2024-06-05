import React, { useState } from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { CgSpinner } from 'react-icons/cg'
import { Form, Formik} from "formik"
import * as Yup from "yup"

import Sanitation from "../../assets/png/sanitation.png"
import Radio from "../../assets/png/radio.png"
import Chain from "../../assets/png/chain.png"
import MapBig from "../../assets/png/map_big.png"
import Suggestion from "../../assets/png/suggestion.png"

import Landline from "../../assets/svg/landline.svg"
import Email from "../../assets/svg/email.svg"
import Map from "../../assets/svg/map.svg"
import CallB from "../../assets/svg/call.svg"
import Time from "../../assets/svg/time.svg"
import Mail from "../../assets/svg/mail.svg"


const Contact = () => {
    const [loading, setLoading] = useState(false)


  return (
    <div className='flex flex-col'>
        <div className='bg-[#fff] px-[100px] py-[19px] flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base '>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>Contact</p>
            </div>
        </div>
        <div className='bg-[#F5F5F5] mt-[40px] py-[56px] flex w-full items-center justify-center px-[100px]'>
            <div className='bg-[#fff] w-[90%] px-[15px] py-[110px] flex justify-between relative'>
                <div className='flex flex-col'>
                    <img src={Sanitation} alt='Sanitation' className='w-[330px] h-[247px]' />
                    <img src={Radio} alt='Radio' className='w-[330px] h-[247px]' />
                </div>

                <div className='w-[300px] h-[460px] top-48 bg-[#fff] flex flex-col gap-[40px] left-44 shadow-xl absolute px-[30px] py-[40px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <p className='font-arimo text-[#222222] font-bold text-[18px]'>Quick contact</p>
                        <div className='flex items-start gap-[22px]'>
                            <img src={Landline} alt='Landline' className='w-[40px] h-[40px]' />
                            <div className='flex flex-col gap-1.5'>
                                <p className='font-manja text-[#757575] text-[15px]'>Call on</p>
                                <p className='font-manja text-[#757575] text-[15px]'>+2348069714003</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[10px]'>
                        <p className='font-arimo text-[#222222] font-bold text-[18px]'>Email address</p>
                        <div className='flex items-start gap-[22px]'>
                            <img src={Email} alt='Email' className='w-[40px] h-[40px]' />
                            <div className='flex flex-col gap-1.5'>
                                <p className='font-manja text-[#757575] text-[15px]'>Mail to</p>
                                <p className='font-manja text-[#757575] text-[15px]'>admin@noa.gov.ng</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[10px]'>
                        <p className='font-arimo text-[#222222] font-bold text-[18px]'>Visit our office</p>
                        <div className='flex items-start gap-[22px]'>
                            <img src={Map} alt='Map' className='w-[40px] h-[40px]' />
                            <div className='flex flex-col gap-1.5'>
                                <p className='font-manja text-[#757575] text-[15px]'>
                                    Block B, Fed Secretariat Complex, Area 1, Garki Abuja, Nigeria. PMB 27
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col gap-[29px] w-[500px]'>
                    <div className='flex flex-col gap-[11px]'>
                        <p className='font-manja text-[36px] font-bold'>We're Here to Help You</p>
                        <img src={Chain} alt='Chain' className='w-[54px] ' />
                        <p className='font-mont_alt text-[#757575] text-[15px] w-[444px]'>
                            Send us a message if you have any question, we’re here to help!.
                        </p>
                    </div>
                    <div>
                        <Formik
                            initialValues={{
                                fullName: "",
                                email: "",
                                message: ""
                            }}
                            //   validationSchema={formValidationSchema}
                            onSubmit={(values) => {
                                window.scrollTo(0, 0)
                                console.log(values, "often")
                                submitForm(values)
                            }}
                        >
                        {({
                            handleSubmit,
                            handleChange,
                            dirty,
                            isValid,
                            setFieldValue,
                            errors,
                            touched,
                            // setFieldTouched,
                            values,
                        }) => (
                            <Form onSubmit={handleSubmit} className="flex flex-col ">
                                <div className='flex flex-col gap-6  h-[47px]'>
                        
                                    <div className="flex flex-col ">
                                        <input
                                            name="fullName"
                                            placeholder="your name*"
                                            type="text" 
                                            value={values.fullName}
                                            onChange={handleChange}
                                            className="rounded border-[#D0D5DD] font-mont_alt xs:w-full outline-none w-full mt-1.5 h-[51px] border-solid  p-3 border"
                                        />
                                        {errors.fullName && touched.fullName ? (
                                        <div className='text-RED-_100'>{errors.fullName}</div>
                                        ) : null}
                                    </div>

                                    <div className="flex flex-col ">
                                        <input
                                            name="email"
                                            placeholder="Email"
                                            type="text" 
                                            value={values.email}
                                            onChange={handleChange}
                                            className="rounded border-[#D0D5DD] xs:w-full outline-none w-full mt-1.5 h-[51px] border-solid  p-3 border"
                                        />
                                        {errors.email && touched.email ? (
                                        <div className='text-RED-_100'>{errors.email}</div>
                                        ) : null}
                                    </div>

                                    <div className="flex flex-col ">
                                        <textarea
                                            name="message"
                                            type="text" 
                                            value={values.message}
                                            onChange={handleChange}
                                            className="rounded border-[#D0D5DD]  outline-none w-full mt-1.5 h-[140px] border-solid  p-3 border"
                                        ></textarea>
                                        {errors.message && touched.message ? (
                                        <div className='text-RED-_100'>{errors.message}</div>
                                        ) : null}
                                    </div>
                               

                                    <button 
                                        className= " bg-[#00AA55] mt-5 w-full text-[#fff] rounded p-3  w-full h-[54px] flex justify-center"
                                        type="submit"
                                    >
                                        <p className='text-[#fff] text-sm  text-center  font-medium'>{loading ? <CgSpinner className=" animate-spin text-lg  " /> : 'Send Message'}</p>
                                    </button>
                                
                                </div>
                                

                            </Form>
                        )}
                        </Formik>
                    </div>

                </div>

            </div>
        </div>

        <img src={MapBig} alt='MapBig' />

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

export default Contact