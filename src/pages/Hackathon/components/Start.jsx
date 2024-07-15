import React, { useEffect, useState } from 'react'
import { Form, Formik } from "formik"
import { CgSpinner } from 'react-icons/cg'
import { toast } from 'react-toastify'
import axios from 'axios'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

const Start = ({ handleClose, setTouched }) => {
    const [loading, setLoading] = useState(false)
    const [userImage, setUserImage] = useState(null)
    const [getStates, setGetStates ] = useState()
    const [stateType, setStateType] = useState([])
    const [lgasType, setLgasType] = useState([])
    const [getLgas, setGetLgas] = useState()


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
        const formData = new FormData()
        // formData.append("contest_id", `${data?.id}`)
        formData.append("first_name", values?.firstName)
        formData.append("last_name", values?.lastName)
        formData.append("state_id", values?.state)
      
        await axios.post("https://hackathon.smhptech.com/api/entry/create", formData)
        .then((res) => {
            console.log(res, "fassa")
            toast(`${res?.data?.message}`, { 
                position: "top-right",
                autoClose: 3500,
                closeOnClick: true,
            });
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
            <p className='text-[#000] font-mont text-[24px] lg:text-[32px] font-bold'>How Well Do You Know Nigeria?</p>
            <p className='text-[#475467] font-mont_alt text-base'>
                Are you up to date with the latest news about Nigeria? 
                Can you recall important facts about our country's diverse regions, peoples, and achievements? 
                Put your knowledge to the test and you might just walk away with a valuable prize!
                Get ready to showcase your Nigerian know-how. Good luck!
            </p>
            <div className='mt-2 '>
                <Formik
                    initialValues={{
                        fullName: "",
                        phone: "",
                        state: "",
       
                    }}
                    //   validationSchema={formValidationSchema}
                    onSubmit={(values) => {
                        window.scrollTo(0, 0)
                        console.log(values, "often")
                        // submitForm(values)
                        setTouched()
                        handleClose()
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