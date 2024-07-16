import React, { useEffect, useState } from 'react'
import { Form, Formik } from "formik"
import { CgSpinner } from 'react-icons/cg'
import { toast } from 'react-toastify'
import axios from 'axios'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import * as Yup from "yup"

import CloseIcon from "../../../assets/svg/closeIcon.svg"

const Start = ({ handleClose, setTouched, setUserData, quizDetails }) => {
    const [loading, setLoading] = useState(false)
    const [userImage, setUserImage] = useState(null)
    const [getStates, setGetStates ] = useState()
    const [stateType, setStateType] = useState([])
    const [lgasType, setLgasType] = useState([])
    const [getLgas, setGetLgas] = useState()

    const formValidationSchema = Yup.object().shape({
        fullName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        state: Yup.string().required("Required"),
    })

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

    const submitForm = async (values) => {
        localStorage.setItem("filled", true)
        setUserData(values)
        handleClose()
    }

  return (
    <div className='bg-[#fff] rounded-lg flex flex-col p-5 mt-[50px] lg:p-[64px] overflow-x-hidden overflow-y-auto lg:w-[750px] lg:h-[500px]'>
         <button className="flex justify-end mb-5 items-center"  onClick={() => handleClose()}> 
                <img src={CloseIcon} alt='close' />
            </button>
          <div className='flex flex-col gap-4  h-[834px]'>
            <p className='text-[#000] font-mont text-[24px] lg:text-[32px] font-bold'>{quizDetails?.title}</p>
            <p className='text-[#475467] font-mont_alt text-base'>
                {quizDetails?.desc}
                {/* Are you up to date with the latest news about Nigeria? 
                Can you recall important facts about our country's diverse regions, peoples, and achievements? 
                Put your knowledge to the test and you might just walk away with a valuable prize!
                Get ready to showcase your Nigerian know-how. Good luck! */}
            </p>
            <div className='mt-2 '>
                <Formik
                    initialValues={{
                        fullName: "",
                        // phone: "",
                        email: "",
                        state: "",
       
                    }}
                    validationSchema={formValidationSchema}
                    onSubmit={(values) => {
                        window.scrollTo(0, 0)
                        console.log(values, "often")
                        submitForm(values)
                        setTouched()
           
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

       
                        <div className="flex flex-col w-full">
                            <label htmlFor='fullName' className="font-bold font-manja text-sm text-[#101928]">Full Name</label>
                            <input
                                name="fullName"
                                placeholder="Full Name"
                                type="text" 
                                value={values.fullName}
                                onChange={handleChange}
                                className="rounded-lg border-[#D0D5DD] w-full outline-none mt-1.5 h-[51px] border-solid  p-3 border"
                            />
                            {errors.fullName && touched.fullName ? (
                            <div className='text-RED-_100'>{errors.fullName}</div>
                            ) : null}
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor='email' className="font-bold font-manja text-sm text-[#101928]">Email</label>
                            <input
                                name="email"
                                placeholder="example@mail.com"
                                type="text" 
                                value={values.email}
                                onChange={handleChange}
                                className="rounded-lg border-[#D0D5DD] w-full outline-none mt-1.5 h-[51px] border-solid  p-3 border"
                            />
                            {errors.email && touched.email ? (
                            <div className='text-RED-_100'>{errors.email}</div>
                            ) : null}
                        </div>


                        <div className='w-full flex items-center gap-2.5'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor='State of residence' className="font-bold font-manja text-sm text-[#101928]">State of residence</label>
                                <select 
                                    name="state"
                                    placeholder="State of residence"
                                    onChange={(e) => {
                                        const selectedState = e.target.value;
                                        setGetStates(selectedState);
                                        setFieldValue("state", selectedState)
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
                   

                        </div>
                       
                        <button 
                            className= " bg-[#027315] mt-5 xs:w-full lg:w-[219px] items-center gap-5 text-[#fff] rounded-lg p-3 cursor-pointer w-full h-[52px] flex justify-center mb-10"
                            type="submit"
                        >
                            <p className='text-[#fff] text-base  text-center  font-mont_alt font-semibold'>{loading ? <CgSpinner className=" animate-spin text-lg  " /> : 'Start Quiz'}</p>
                            <FaArrowRightLong className='text-base font-mont_alt text-[#fff] font-semibold'/>
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

export default Start