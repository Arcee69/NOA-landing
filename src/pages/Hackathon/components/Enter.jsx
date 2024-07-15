import React, { useEffect, useState } from 'react'
import { Form, Formik } from "formik"
import { CgSpinner } from 'react-icons/cg'
import { toast } from 'react-toastify'
import axios from 'axios'
import { IoClose } from "react-icons/io5";

import UploadIcon from "../../../assets/png/upload_icon.png"


const Enter = ({ setOpenSuccess, handleClose, data }) => {
    const [loading, setLoading] = useState(false)
    const [userImage, setUserImage] = useState(null)
    const [getStates, setGetStates ] = useState()
    const [stateType, setStateType] = useState([])
    const [lgasType, setLgasType] = useState([])
    const [getLgas, setGetLgas] = useState()

    const openCloseModal = () => {
        setOpenSuccess(true)
        handleClose()
    }

    const handleFileUpload = (event) => {
        const selectedFile = event.target.files[0];
        setUserImage(selectedFile)
    };

    console.log(getStates, "getStates")
    console.log(stateType, "getStates")
    
    const fetchStates = async () => {
        await axios.get("https://hackathon.smhptech.com/api/state")
        .then((res) => {
            console.log(res, "dodo")
            setStateType(res?.data?.data?.states)
        })
        .catch((err) => {
            console.log(err, "asun")
        })
    }

    useEffect(() => {
        fetchStates()
    }, [])

    const fetchLgas = async () => {
        await axios.get(`https://hackathon.smhptech.com/api/lga/state/${getStates}`)
        .then((res) => {
            console.log(res, "dodo")
            setLgasType(res?.data?.data?.lgas)
        })
        .catch((err) => {
            console.log(err, "asun")
        })
    }

    useEffect(() => {
        fetchLgas()
    }, [getStates])


    const submitForm = async (values) => {
        const formData = new FormData()
        formData.append("contest_id", `${data?.id}`)
        formData.append("first_name", values?.firstName)
        formData.append("last_name", values?.lastName)
        formData.append("email", values?.email)
        formData.append("phone_number", values?.phone)
        formData.append("nin", values?.identification)
        formData.append("dob", values?.dob)
        formData.append("state_id", values?.state)
        formData.append("lga_id", values?.lga)
        formData.append("file", userImage)

        await axios.post("https://hackathon.smhptech.com/api/entry/create", formData)
        .then((res) => {
            console.log(res, "fassa")
            toast(`${res?.data?.message}`, { 
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            });
            openCloseModal()
        })
        .catch((err) => {
            console.log(err, "lassa")
            toast(`${err?.response?.data?.message}`, { 
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            });
        })
    }


  return (
    <div className='bg-[#fff] rounded-lg flex flex-col p-5 mt-[50px] lg:p-[64px] overflow-x-hidden overflow-y-auto lg:w-[750px] lg:h-[500px]'>
        <div className='flex flex-col gap-4  h-[834px]'>
            <p className='text-[#000] font-mont text-[24px] lg:text-[32px] font-bold'>{data?.title}</p>
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
                        phone: "",
                        email: "",
                        state: "",
                        lga: "",
                        // residence: "",
                        identification: ""
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
                                type="date" 
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
                            {/* <div className="flex flex-col w-full">
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
                            </div> */}
                            <div className='flex flex-col w-full'>
                                <label htmlFor='State of origin' className="font-bold font-manja text-sm text-[#101928]">State of origin</label>
                                <select 
                                    name="state"
                                    placeholder="State of origin"
                                    onChange={(e) => {
                                        const selectedState = e.target.value;
                                        setGetStates(selectedState);
                                        setFieldValue("state", selectedState)
                                        setGetLgas(""); // Reset sector when changing industry
                                      }}
                                    value={values?.state}
                                   
                                    className="rounded-lg border-[#D0D5DD] w-full outline-none mt-1.5 h-[51px] border-solid  p-3 border"
                                >
                                    <option value="">Select State</option>
                                    {
                                        stateType.map((item, index) => {
                                            return (
                                                <option key={item?.id} value={item?.id}>{item?.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                {errors.state && touched.state ? (
                                <div className='text-RED-_100'>{errors.state}</div>
                                ) : null}
                            </div>

                            {/* <div className="w-full flex flex-col ">
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
                            </div> */}

                            <div className='flex flex-col w-full'>
                            <label htmlFor='LGA' className="font-bold font-manja text-sm text-[#101928]">LGA </label>
                            <select 
                                    name="lga"
                                    placeholder="Select Lga"
                                    onChange={(e) => {
                                        const selectedLgas = e.target.value;
                                        setGetLgas(selectedLgas);
                                        setFieldValue("lga", selectedLgas)
                                      }}
                                    value={values?.lga}
                                   
                                    className="rounded-lg border-[#D0D5DD] w-full outline-none mt-1.5 h-[51px] border-solid  p-3 border"
                                >
                                    <option value="">Select Lgas</option>
                                    {
                                        lgasType.map((item, index) => {
                                            return (
                                                <option key={item?.id} value={item?.id}>{item?.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                    {errors.lga && touched.lga ? (
                                    <div className="text-RED-_100 text-xs">
                                        {errors.lga}
                                    </div>
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
                                        <div className='flex flex-col gap-1 relative'>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-[15px] font-hanken text-[#858585]'>{userImage?.name}</p>
                                                <p className='text-[#000] text-[11px]'>Completed</p>
                                            </div>
                                            <div className='w-[266px] h-[5px] bg-[#51E38B] rounded-lg'></div>
                                            <div className='absolute -right-24 -top-7 cursor-pointer' onClick={() => setUserImage(null)}>
                                                <IoClose className='text-[20px] text-[#666]' />
                                            </div>
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