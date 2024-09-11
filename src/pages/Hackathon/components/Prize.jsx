import React, { Fragment, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import axios from 'axios'
import * as Yup from "yup"
import { toast } from 'react-toastify'
import { Listbox, Transition } from '@headlessui/react'
import { Form, Formik } from 'formik'
import { IoIosArrowDown } from 'react-icons/io'

import Cup from "../../../assets/png/green_cup.png"
import { useNavigate } from 'react-router-dom'
import { CgSpinner } from 'react-icons/cg'


const airtimeOption = [
    { name: '' },
    { name: "GLO" },
    { name: 'MTN' },
    { name: '9MOBILE' },
    { name: "AIRTEL" },
  ]

const Prize = ({ handleClose, totalCorrectAnswers, questions, userData, state, timeSpent }) => {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    // console.log(userData, "zamper")
    // console.log(timeSpent, "timeSpent")

    const timeToSeconds = (minutes, seconds) => {
        return (parseInt(minutes) * 60) + parseInt(seconds);
    };
    
    // Example usage:
    const totalSeconds = timeToSeconds(timeSpent?.minutes, timeSpent?.seconds);
    console.log(totalSeconds); // Output: 52

    const formValidationSchema = Yup.object().shape({
        airtime: Yup.string().required("Required"),
        phone: Yup.number().required("Required"),
    })

    const amountWon = totalCorrectAnswers * 25

    const submitForm = async (values, actions) => {
        setLoading(true)
        const data = {
            "quiz_id": state?.id,
            "state_id": userData?.state,
            "name": userData?.fullName,
            "phone": `${values?.phone}`,
            "email": userData?.email,
            "score": totalCorrectAnswers,
            "amount_won": amountWon,
            "time_spent": totalSeconds,
            "network": values?.airtime === "MTN" ? "mtn_custom" : values?.airtime === "AIRTEL" ? "airtel_custom" : values?.airtime === "GLO" ? "glo_custom" : values?.airtime === "9MOBILE" ? "9mobile_custom" : ""
        }
        // console.log(data, "xzna")
        // handleClose()
        // return
        await axios.post("https://api.hackathon.noa.gov.ng/api/participants/create", data)
        .then((res) => {
            console.log(res, "fast")
            setLoading(false)
            toast("Your will recieve your Airtime shortly", {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            })
            localStorage.removeItem("filled")
            handleClose()
            navigate("/hackathon")
        })
        .catch((err) => {
            console.log(err, "zanku")
            setLoading(false)
            toast(`${err?.response?.data?.message || err?.message}`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            })
            localStorage.removeItem("filled")
            handleClose()
            navigate("/hackathon")
        })
    }
    
  return (
    <div className='bg-[#fff] rounded-lg flex flex-col p-5 lg:p-[64px] gap-2 mt-[50px] items-center overflow-auto lg:w-[750px] h-[650px] lg:h-[500px]'>
        <img src={Cup} alt='Cup' className='w-[120px] h-[197px]'/>
        <p className='font-mont font-bold text-[#F8A401] text-[24px] lg:text-[80px]'>{totalCorrectAnswers}/{questions?.length}</p>
        <div className='flex flex-col gap-1'>
            <p className='text-[#00AA55] font-mont text-center text-[32px] font-extrabold'>
                Congratulations
            </p>
            <p className='text-[#00AA55] font-mont text-center text-xl font-bold'>
                you won a special price
            </p>
        </div>
        <p className='text-[#475467] text-base font-mont_alt text-center'> 
            Looks like you know about Nigeria very well and to reward you will be sending you an airtime
            to the number you registered with don't spend it all in one place!!!
        </p>
        <div className='w-full '>
            <Formik
                initialValues={{
                    phone: "",
                    airtime: ""
                }}
                    validationSchema={formValidationSchema}
                    onSubmit={(values, actions) => {
                    window.scrollTo(0, 0);
                    console.log(values, "market")
                  
                    submitForm(values, actions);
                    actions.resetForm()
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
                    <Form onSubmit={handleSubmit} className="flex">
                        <div className="w-full flex flex-col gap-6">

                            <div className="w-full flex flex-col ">
                                <label htmlFor='Phone' className="font-bold font-manja text-sm text-[#101928]">Phone No</label>
                                <input
                                    name="phone"
                                    placeholder="Phone"
                                    type="number" 
                                    value={values?.phone}
                                    onChange={handleChange}
                                    className="rounded-lg border-[#D0D5DD] w-full outline-none mt-1.5 h-[51px] border-solid  p-3 border"
                                />
                                {errors.phone && touched.phone ? (
                                <div className="text-RED-_100 text-xs">
                                    {errors.phone}
                                </div>
                                ) : null}
                            </div>

                            
                            <div className='flex flex-col gap-1'>
                                <label htmlFor='Airtime Network' className='font-mont font-medium  text-[#00141B] text-[15px]' >Airtime Network</label>

                                <Listbox value={values.airtime} onChange={(value) => setFieldValue('airtime', value)}>
                                    <div className="relative">
                                        <Listbox.Button className="outline-none w-full flex items-center justify-between  rounded-lg bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid"> {/* lg:w-[420px] */}
                                            <span className="block truncate w-full text-left text-[#222222] font-medium  font-mont">{values?.airtime || "Network"}</span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 pr-2  flex items-center">
                                                <IoIosArrowDown
                                                    className="h-5 w-5 text-[#AAAAAA]"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Listbox.Button>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute z-10 mt-1 w-[300px] max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                {airtimeOption.map((item, index) => (
                                                    <Listbox.Option
                                                        key={index}
                                                        className={({ active }) =>
                                                            `relative cursor-default select-none py-2 pl-4 pr-4 ${
                                                            active ? 'bg-[#E6F6F4] text-[#052011]' : 'text-[#052011]'
                                                            }`
                                                        }
                                                        value={item.name}
                                                    >
                                                    {({ selected }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${
                                                                selected ? 'font-medium' : 'font-normal'
                                                                } text-[#052011]`}
                                                                onChange={() => setFieldValue("airtime", item?.name)}
                                                            >
                                                                {item.name}
                                                            </span>
                                                        </>
                                                    )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </Listbox>
                                {errors.airtime && touched.airtime ? (
                                <div className="text-RED-_100 text-xs">
                                    {errors.airtime}
                                </div>
                                ) : null}
                            </div>

                            <button 
                                className= "bg-[#027315] mt-8 xs:w-full lg:w-[219px] gap-5 mx-auto text-[#fff] rounded-lg p-3 cursor-pointer w-full h-[52px] flex items-center justify-center"
                                type="submit"
                            >
                                {
                                    loading ? 
                                    <CgSpinner className='animate-spin text-lg' />
                                    :
                                    <div className='flex items-center gap-5'>
                                        <p className='text-[#fff] text-base font-mont_alt  text-center  font-semibold'>Claim your prize</p>
                                        <FaArrowRightLong className='text-[#fff] text-base' />
                                    </div>
                                }
                            </button>

                        </div>

                    </Form>
                )}
            </Formik>
        </div>

    </div>
  )
}

export default Prize