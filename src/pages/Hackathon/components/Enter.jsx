import React, { useState } from 'react'
import { Form, Formik } from "formik"
import { CgSpinner } from 'react-icons/cg'

import UploadIcon from "../../../assets/png/upload_icon.png"

const Enter = ({ setOpenSuccess, handleClose }) => {
    const [loading, setLoading] = useState(false)
    const [userImage, setUserImage] = useState(null)

    const openCloseModal = () => {
        setOpenSuccess(true)
        handleClose()
    }

    const handleFileUpload = (event) => {
        const selectedFile = event.target.files[0];
        setUserImage(selectedFile)
    };



  return (
    <div className='bg-[#fff] rounded-lg flex flex-col p-[64px] overflow-x-hidden overflow-y-auto w-[750px] h-[500px]'>
        <div className='flex flex-col gap-4  h-[834px] '>
            <p className='text-[#000] font-mont text-[32px] font-bold'>The Origin of Nigeria Photo Contest</p>
            <p className='text-[#475467] font-mont_alt text-base'>
                Enter our photo contest for a chance to showcase your creativity and win cash prizes. 
                Submit your best photos in any category and impress our judges with your technical skills, 
                originality, and emotional impact. The top three winners will be featured on our website and social 
                media. Good luck!
            </p>
            <div className='mt-2 '>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        dob: "",
                        email: "",
                        state: "",
                        residence: "",
                        identification: ""
                    }}
                    //   validationSchema={formValidationSchema}
                    onSubmit={(values) => {
                        window.scrollTo(0, 0)
                        console.log(values, "often")
                        // submitForm(values)
                        openCloseModal()
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
                    <div className='flex flex-col gap-6 lg:items-center  h-[47px]'>

                        <div className='w-full flex items-center gap-2.5'>
                            <div className="flex flex-col w-full">
                                <label htmlFor='firstName' className="font-bold font-manja text-sm text-[#101928]">First Name</label>
                                <input
                                    name="firstName"
                                    placeholder="First Name"
                                    type="text" 
                                    value={values.firstName}
                                    onChange={handleChange}
                                    className="rounded-lg border-[#D0D5DD] w-full outline-none mt-1.5 h-[51px] border-solid  p-3 border"
                                />
                                {errors.firstName && touched.firstName ? (
                                <div className='text-RED-_100'>{errors.firstName}</div>
                                ) : null}
                            </div>

                            <div className="w-full flex flex-col ">
                                <label htmlFor='Last Name' className="font-bold font-manja text-sm text-[#101928]">Last Name</label>
                                <input
                                    name="lastName"
                                    placeholder="Last Name"
                                    type="text" 
                                    value={values.lastName}
                                    onChange={handleChange}
                                    className="rounded-lg border-[#D0D5DD] w-full outline-none mt-1.5 h-[51px] border-solid  p-3 border"
                                />
                                {errors.lastName && touched.lastName ? (
                                <div className='text-RED-_100'>{errors.lastName}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className="w-full flex flex-col ">
                            <label htmlFor='Date of Birth' className="font-bold font-manja text-sm text-[#101928]">Date of Birth</label>
                            <input
                                name="dob"
                                placeholder="Date of Birth"
                                type="text" 
                                value={values.dob}
                                onChange={handleChange}
                                className="rounded-lg border-[#D0D5DD] w-full outline-none mt-1.5 h-[51px] border-solid  p-3 border"
                            />
                            {errors.dob && touched.dob ? (
                            <div className='text-RED-_100'>{errors.dob}</div>
                            ) : null}
                        </div>

                        <div className='w-full flex items-center gap-2.5'>
                            <div className="flex flex-col w-full">
                                <label htmlFor='email' className="font-bold font-manja text-sm text-[#101928]">Email</label>
                                <input
                                    name="email"
                                    placeholder="Email"
                                    type="text" 
                                    value={values.email}
                                    onChange={handleChange}
                                    className="rounded-lg border-[#D0D5DD] w-full outline-none mt-1.5 h-[51px] border-solid  p-3 border"
                                />
                                {errors.email && touched.email ? (
                                <div className='text-RED-_100'>{errors.email}</div>
                                ) : null}
                            </div>

                            <div className="w-full flex flex-col ">
                                <label htmlFor='Phone' className="font-bold font-manja text-sm text-[#101928]">Phone</label>
                                <input
                                    name="phone"
                                    placeholder="Phone"
                                    type="number" 
                                    value={values.phone}
                                    onChange={handleChange}
                                    className="rounded-lg border-[#D0D5DD] w-full outline-none mt-1.5 h-[51px] border-solid  p-3 border"
                                />
                                {errors.phone && touched.phone ? (
                                <div className='text-RED-_100'>{errors.phone}</div>
                                ) : null}
                            </div>
                        </div>


                        <div className='w-full flex items-center gap-2.5'>
                            <div className="flex flex-col w-full">
                                <label htmlFor='State of origin' className="font-bold font-manja text-sm text-[#101928]">State of origin</label>
                                <input
                                    name="state"
                                    placeholder="State of origin"
                                    type="text" 
                                    value={values.state}
                                    onChange={handleChange}
                                    className="rounded-lg border-[#D0D5DD] w-full outline-none mt-1.5 h-[51px] border-solid  p-3 border"
                                />
                                {errors.state && touched.state ? (
                                <div className='text-RED-_100'>{errors.state}</div>
                                ) : null}
                            </div>

                            <div className="w-full flex flex-col ">
                                <label htmlFor='State of residence' className="font-bold font-manja text-sm text-[#101928]">State of residence</label>
                                <input
                                    name="residence"
                                    placeholder="State of residence"
                                    type="text" 
                                    value={values.residence}
                                    onChange={handleChange}
                                    className="rounded-lg border-[#D0D5DD] w-full outline-none mt-1.5 h-[51px] border-solid  p-3 border"
                                />
                                {errors.residence && touched.residence ? (
                                <div className='text-RED-_100'>{errors.residence}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className="w-full flex flex-col ">
                            <label htmlFor='National Identification No. or Bank Verification No.' className="font-bold font-manja text-sm text-[#101928]">National Identification No. or Bank Verification No.</label>
                            <input
                                name="identification"
                                placeholder="National Identification No. or Bank Verification No."
                                type="number" 
                                value={values.identification}
                                onChange={handleChange}
                                className="rounded-lg border-[#D0D5DD] w-full outline-none mt-1.5 h-[51px] border-solid  p-3 border"
                            />
                            {errors.identification && touched.identification ? (
                            <div className='text-RED-_100'>{errors.identification}</div>
                            ) : null}
                        </div>

                        <div className='flex flex-col lg:mx-auto  bg-transparent rounded-xl items-center lg:w-[504px] border-dashed border-[#D0D5DD] border px-6 py-[28px]  gap-[16px]'>
                            <div className='p-[9px] w-full cursor-pointer flex justify-center gap-[16px] '>
                                {  
                                    userImage?.name ? 
                                        <div className='flex flex-col gap-1'>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-[15px] font-hanken text-[#858585]'>{userImage?.name}</p>
                                                <p className='text-[#000] text-[11px]'>Completed</p>
                                            </div>
                                            <div className='w-[266px] h-[5px] bg-[#51E38B] rounded-lg'></div>
                                        </div> 
                                        :
                                        <div className='flex flex-col items-center gap-[16px]'>
                                            <img src={UploadIcon} alt='upload' className='w-6 h-6' />
                                            
                                            <label htmlFor="fileInput" className='cursor-pointer flex  items-center text-[#000] text-sm '>
                                                Click to upload <span className='text-[#475367] ml-1'>or drag and drop</span>
                                                <input
                                                    type="file"
                                                    id="fileInput"
                                                    style={{ display: 'none' }}
                                                    onChange={(e) => handleFileUpload(e)}
                                                />
                                            </label>
                                        </div>
                                }
                            </div>
                        </div>
                       

                        <button 
                            className= " bg-[#027315] mt-5 xs:w-full lg:w-[219px] text-[#fff] rounded-lg p-3 cursor-pointer w-full h-[52px] flex justify-center"
                            type="submit"
                        >
                            <p className='text-[#fff] text-sm  text-center  font-medium'>{loading ? <CgSpinner className=" animate-spin text-lg  " /> : 'Enter Contest'}</p>
                        </button>
                    
                    </div>
                    

                </Form>
            )}
                </Formik>
            </div>

        </div>
    </div>
  )
}

export default Enter