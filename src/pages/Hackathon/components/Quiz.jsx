import React, { useEffect, useState } from 'react'
import Zone from "../../../assets/png/zones.png"
import One from "../../../assets/svg/one.svg"
import Two from "../../../assets/svg/two.svg"
import Three from "../../../assets/svg/three.svg"
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import ModalPop from '../../../components/modalPop'
import Prize from './Prize'
import Start from './Start'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Quiz = () => {
    const [text, setText] = useState("")
    const [openPrize, setOpenPrize] = useState(false)
    const [openStart, setOpenStart] = useState(false)
    const [quizDetails, setQuizDetails] = useState([])
    const [touched, setTouched] = useState(false)

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]);

    const navigate = useNavigate()

    const checkTouched = () => {
        if (!touched) {
            setOpenStart(true)
        } else {
            return null
        }
    }

    useEffect(() => {
        checkTouched()
    }, [touched])

    const { state } = useLocation()
    console.log(state, "apamu")

    const getQuiz = async () => {
        try {
            const res = await axios.get(`https://api.hackathon.noa.gov.ng/api/quizzes/${state?.id}`)
            console.log(res, "Somb")
            setQuizDetails(res?.data?.data)
        } catch (err) {
          console.log(err, "Massive")
        }
    }

    useEffect(() => {
        getQuiz()
      }, [state?.id])

      const questions = quizDetails?.questions;
      console.log(questions, "mask")
    
        // Ensure questions is defined and not empty
        if (!questions || questions.length === 0) {
          return <div>Loading...</div>;
        }
    
    
      const currentQuestion = questions[currentQuestionIndex];
      const isLastQuestion = currentQuestionIndex === questions?.length - 1;
    
      const handleSkip = () => {
        setSelectedOption(null);
        setIsCorrect(null);
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions?.length);
      };
    
      const handleOptionSelect = (option) => {
        setSelectedOption(option.id);
        setIsCorrect(option.answer === 1);
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestionIndex] = option.answer === 1;
        setUserAnswers(updatedAnswers);
      };
    
      const handleNext = () => {
       if (isLastQuestion) {
      setOpenPrize(true);
    } else {
      setSelectedOption(null);
      setIsCorrect(null);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
      };


  const totalCorrectAnswers = userAnswers.filter((answer) => answer).length;

    //   const targetDate = '2024-06-31T23:59:59';


    //   const calculateTimeLeft = () => {
    //     const difference = +new Date(targetDate) - +new Date();
    //     let timeLeft = {};

    //     if (difference > 0) {
    //         timeLeft = {
    //             days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    //             hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    //             minutes: Math.floor((difference / 1000 / 60) % 60),
    //             seconds: Math.floor((difference / 1000) % 60),
    //         };
    //     }

    //     return timeLeft;
    // };

    // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTimeLeft(calculateTimeLeft());
    //     }, 1000);

    //     return () => clearInterval(timer);
    // }, [targetDate]);

  return (
    <div className='flex flex-col mt-[32px] mb-[47px] bg-[#fff]'>
        <div className='flex items-center justify-between mt-10 lg:mt-0 mb-4 px-5 lg:px-[100px]'>
            <p className='text-[#222] hidden lg:flex font-manja text-[32px]' onClick={() => navigate("/hackathon")}>Hackathon</p>
            <div className='rounded-lg w-full lg:w-[330px] flex items-center h-[48px] border border-[#AAAAAAAA] rounded-[4px]'>
                <input 
                    type='text'
                    value={text}
                    className='bg-transparent px-[32px] w-full'
                    onChange={(e) => handleChange(e)}
                    placeholder='Search Contests Or categories '
                />
                <div className='bg-[#00AA55] w-[48px] h-[48px] rounded-tr-lg rounded-br-lg flex items-center justify-center p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M16 14H15.21L14.93 13.73C15.9439 12.554 16.5011 11.0527 16.5 9.5C16.5 8.21442 16.1188 6.95772 15.4046 5.8888C14.6903 4.81988 13.6752 3.98676 12.4874 3.49479C11.2997 3.00282 9.99279 2.87409 8.73192 3.1249C7.47104 3.3757 6.31285 3.99477 5.40381 4.90381C4.49477 5.81285 3.8757 6.97104 3.6249 8.23192C3.37409 9.49279 3.50282 10.7997 3.99479 11.9874C4.48676 13.1752 5.31988 14.1903 6.3888 14.9046C7.45772 15.6188 8.71442 16 10 16C11.61 16 13.09 15.41 14.23 14.43L14.5 14.71V15.5L19.5 20.49L20.99 19L16 14ZM10 14C7.51 14 5.5 11.99 5.5 9.5C5.5 7.01 7.51 5 10 5C12.49 5 14.5 7.01 14.5 9.5C14.5 11.99 12.49 14 10 14Z" fill="white"/>
                    </svg>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className='hidden lg:flex'>
                <path d="M7.02343 13.0001C7.02176 11.8146 7.25466 10.6405 7.70871 9.54534C8.16276 8.45021 8.82899 7.45573 9.66903 6.61918C10.5091 5.78263 11.5063 5.12054 12.6033 4.67105C13.7003 4.22156 14.8754 3.99354 16.0609 4.00014C21.0109 4.03764 24.9734 8.15014 24.9734 13.1126V14.0001C24.9734 18.4751 25.9109 21.0751 26.7359 22.5001C26.8235 22.6519 26.8698 22.824 26.8699 22.9993C26.8701 23.1745 26.8242 23.3467 26.7368 23.4986C26.6495 23.6505 26.5237 23.7768 26.3722 23.8648C26.2207 23.9529 26.0487 23.9995 25.8734 24.0001H6.12343C5.94819 23.9995 5.77619 23.9529 5.62467 23.8648C5.47314 23.7768 5.3474 23.6505 5.26005 23.4986C5.1727 23.3467 5.1268 23.1745 5.12695 22.9993C5.12711 22.824 5.17331 22.6519 5.26093 22.5001C6.08593 21.0751 7.02343 18.4751 7.02343 14.0001V13.0001Z" stroke="#344054" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 24V25C12 26.0609 12.4214 27.0783 13.1716 27.8284C13.9217 28.5786 14.9391 29 16 29C17.0609 29 18.0783 28.5786 18.8284 27.8284C19.5786 27.0783 20 26.0609 20 25V24" stroke="#344054" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="23.9996" cy="8.0001" r="5.6" fill="#F04438" stroke="white" stroke-width="1.6"/>
            </svg>
        </div>
        <div className='px-[49px] pt-[74px] bg-[#f6f6f6]'>
            <div className='bg-[#fff] w-full flex flex-col py-[32px] px-[28px] mb-[200px]'>
                <div className='flex items-start gap-[34px] w-full mb-[47px]'>
                    <div className='relative w-5/12 h-[377px]'>
                        <img src={Zone || quizDetails?.image} alt='Quiz Image' className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col gap-6 w-8/12'>
                        <div className='flex flex-col gap-1'>
                            <p className='font-mont font-bold text-[32px] text-[#000]'>{quizDetails?.title}</p>
                            <div className='flex items-center gap-2'>
                                <p className='text-base text-[#DC6803] font-manja font-bold'>{quizDetails?.total_partakers || 0} Takers</p>
                                <p className='text-base text-[#5F647C] font-manja font-bold'>{quizDetails?.questions?.length || 0} Questions</p>
                                <p className='text-base text-[#F0C046] font-manja font-bold'>{quizDetails?.duration_of_quiz} mins</p>
                                <p className='text-base text-[#00AA55] font-manja font-bold'>Airtime</p>
                            </div>
                        </div>
                        <p className='font-mont_alt text-[#475467] text-base '>
                            {quizDetails?.desc}
                            {/* Test your knowledge of Nigeria in this exciting quiz! Answer 16 questions about our great nation for a chance to win free airtime. 
                            From geography and history to culture and current events, 
                            this quiz will challenge your understanding of Nigeria's rich heritage and modern developments. <br />
                            Are you up to date with the latest news about Nigeria? 
                            Can you recall important facts about our country's diverse regions, peoples, and achievements? Put your knowledge to the test and you might just walk away with a valuable prize!
                            Get ready to showcase your Nigerian know-how. Good luck! */}
                        </p>
                    </div>
                </div>
                <hr />
                <div className='flex w-full items-start mt-[44px] gap-5'>
                    <div className='w-8/12 flex flex-col gap-4'>
                        <div className='flex items-center gap-6'>
                        {questions?.map((_, index) => (
                            <div
                            key={index}
                            className={`w-[57px] h-[19px] rounded-[30px] ${index <= currentQuestionIndex ? 'bg-[#00AA55]' : 'bg-[#C4C4C4]'}`}
                            ></div>
                        ))}
                        </div>
                        <div className='bg-[#FAFAFA] w-full rounded-lg flex flex-col py-4 px-5'>
                        <p onClick={handleSkip} className='flex justify-end underline font-mont_alt text-[#00AA55] text-[20px] font-semibold cursor-pointer'>Skip</p>
                        <div className='flex justify-center items-center flex-col'>
                            <p className='font-manja text-[#4A4A4A] font-semibold'>Question {currentQuestionIndex + 1}</p>
                            <p className='text-[#4A4A4A] font-manja text-[19px] mt-[51px] mb-10'>{currentQuestion.body}</p>
                            <div className='flex flex-col gap-6 w-full'>
                            {currentQuestion.options.map((option) => (
                                <div
                                key={option.id}
                                onClick={() => handleOptionSelect(option)}
                                className={`border-[#1935CA] w-full rounded-lg border p-5 flex items-center bg-[#FBF9F9] group hover:bg-[#00AA55] hover:border-[#6FD181] cursor-pointer ${
                                    selectedOption === option.id ? (isCorrect ? 'bg-[#D1FAE5]' : 'bg-[#FFCDD2]') : ''
                                }`}
                                >
                                <p className={`text-[#4A4A4A] font-manja text-[19px] group-hover:text-[#fff] ${selectedOption === option.id ? (isCorrect ? 'text-[#00AA55]' : 'text-[#D32F2F]') : ''}`}>
                                    {option.body}
                                </p>
                                </div>
                            ))}
                            {selectedOption && (
                                <div className='mt-4'>
                                {isCorrect ? (
                                    <p className='text-[#00AA55] font-manja text-[19px]'>Correct!</p>
                                ) : (
                                    <p className='text-[#D32F2F] font-manja text-[19px]'>Incorrect. Please try again.</p>
                                )}
                                </div>
                            )}
                            </div>
                        </div>
                        <div className='flex items-center justify-between my-[32px]'>
                            {currentQuestionIndex > 0 && (
                            <div
                                onClick={() => setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0))}
                                className='flex items-center w-[130px] cursor-pointer h-[69px] rounded-lg p-3 gap-2 bg-[#D1FAE5]'
                            >
                                <FaArrowLeftLong className='text-[#00AA55] text-[20px]' />
                                <p className='font-poppins text-[#00AA55] font-semibold text-[20px]'>Previous</p>
                            </div>
                            )}
                            <div
                            onClick={handleNext}
                            className='flex cursor-pointer w-[130px] h-[69px] justify-center items-center gap-2 p-3 rounded-lg bg-[#00AA55]'
                            >
                            <p className='font-poppins text-[#fff] font-semibold text-[20px]'>{isLastQuestion ? 'Finish' : 'Next'}</p>
                            <FaArrowRightLong className='text-[#fff] text-[20px]' /> 
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* <div className='w-8/12 flex flex-col gap-4'>
                        <div className='flex items-center gap-6'>
                            <div className='w-[57px] h-[19px] bg-[#00AA55] rounded-[30px]'></div>
                            <div className='w-[57px] h-[19px] bg-[#C4C4C4] rounded-[30px]'></div>
                            <div className='w-[57px] h-[19px] bg-[#C4C4C4] rounded-[30px]'></div>
                            <div className='w-[57px] h-[19px] bg-[#C4C4C4] rounded-[30px]'></div>
                            <div className='w-[57px] h-[19px] bg-[#C4C4C4] rounded-[30px]'></div>
                            <div className='w-[57px] h-[19px] bg-[#C4C4C4] rounded-[30px]'></div>
                            <div className='w-[57px] h-[19px] bg-[#C4C4C4] rounded-[30px]'></div>
                            <div className='w-[57px] h-[19px] bg-[#C4C4C4] rounded-[30px]'></div>
                            <div className='w-[57px] h-[19px] bg-[#C4C4C4] rounded-[30px]'></div>
                            <div className='w-[57px] h-[19px] bg-[#C4C4C4] rounded-[30px]'></div>
                        </div>
                        <div className='bg-[#FAFAFA] w-full rounded-lg flex flex-col py-4 px-5'>
                            <p className='flex justify-end underline font-mont_alt text-[#00AA55] text-[20px] font-semibold'>Skip</p>
                            <div className='flex justify-center items-center flex-col'>
                                <p className='font-manja text-[#4A4A4A] font-semibold'>Question 1</p>
                                <p className='text-[#4A4A4A] font-manja text-[19px] mt-[51px] mb-10'>
                                    You see a non-familiar face in the access-controlled areas of our office, 
                                    the person does not have the MGL ID/Visitor/Staff/Vendor tag with him. 
                                    What would you do?
                                </p>
                                <div className='flex flex-col gap-6 w-full'>
                                    <div className='border-[#1935CA] w-full  rounded-lg border p-5 flex items-center bg-[#FBF9F9] hover:bg-[#00AA55] group hover:border-[#6FD181]'>
                                        <p className='text-[#4A4A4A] font-manja text-[19px] group-hover:text-[#fff]'>None of my business, let some body else take care of it</p>
                                    </div>
                                    <div className='border-[#1935CA] w-full  rounded-lg border p-5 flex items-center bg-[#FBF9F9] group hover:bg-[#00AA55] hover:border-[#6FD181]'>
                                        <p className='text-[#4A4A4A] font-manja text-[19px] group-hover:text-[#fff]'>Ask the person to leave the facility</p>
                                    </div>
                                    <div className='border-[#1935CA] w-full  rounded-lg border p-5 flex items-center bg-[#FBF9F9] group hover:bg-[#00AA55] hover:border-[#6FD181]'>
                                        <p className='text-[#4A4A4A] font-manja text-[19px] group-hover:text-[#fff]'>Escort the person to the security and raise a security incident</p>
                                    </div>
                                    <div className='border-[#1935CA] w-full  rounded-lg border p-5 flex items-center bg-[#FBF9F9] group hover:bg-[#00AA55] hover:border-[#6FD181]'>
                                        <p className='text-[#4A4A4A] font-manja text-[19px] group-hover:text-[#fff]'>Raise a security incident and go back doing your work</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between my-[32px] '>
                                <div className='flex items-center w-[130px] cursor-pointer h-[69px] rounded-lg p-3 gap-2 bg-[#D1FAE5]'>
                                    <FaArrowLeftLong className="text-[#00AA55] text-[20px]" />
                                    <p className='font-poppins text-[#00AA55] font-semibold text-[20px] '>Previous</p>
                                </div>
                                <div onClick={() => setOpenPrize(true)} className='flex cursor-pointer w-[130px] h-[69px] justify-center items-center gap-2 p-3 rounded-lg bg-[#00AA55]'>
                                    <p className='font-poppins text-[#fff] font-semibold text-[20px] '>Next</p>
                                    <FaArrowRightLong className="text-[#fff] text-[20px]" />
                                </div>

                            </div>

                        </div>
                    </div> */}

                    <div className='flex flex-col w-4/12'>
                        <div className='bg-gradient-to-r from-[#027315] gap-3 p-6 to-[#04D928] to-[#6FD181] flex flex-col rounded-lg'>
                            <p className='text-[#fff]'>Quiz ending in</p>
                            <div className='flex items-center gap-2'>
                                <div className='bg-[#ECF9EE70] w-[123px] rounded-lg h-[52px] flex justify-center items-center'>
                                    <p className='font-extrabold text-[23px] font-mont_alt text-[#fff]'>{0}</p>
                                </div>
                                <div className='bg-[#ECF9EE70] w-[123px] rounded-lg h-[52px] flex justify-center items-center'>
                                    <p className='font-extrabold text-[23px] font-mont_alt text-[#fff]'>{0}</p>
                                </div>
                                <div className='bg-[#ECF9EE70] w-[123px] rounded-lg h-[52px] flex justify-center items-center'>
                                    <p className='font-extrabold text-[23px] font-mont_alt text-[#fff]'>00</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-gradient-to-b from-[#FFFFFF] p-[28px] to-[#ECF9EE] rounded-xl flex flex-col'>
                            {
                                <p className='text-xl text-[#222] font-mont font-semibold'>No Leaderboard Available</p>
                            }
                            <div className='flex items-center hidden justify-between'>
                                <div className='flex flex-col mt-14 gap-[22px]'>
                                    <img src={Two} alt='Two' className='w-[74px] h-[74px]' />
                                    <p className='text-[#FFBA49] font-bold font-mont_alt text-sm'>Meghan Jes...</p>
                                </div>
                                <div className='flex flex-col gap-[22px]'>
                                    <img src={One} alt='One' className='w-[84px] h-[84px]' />
                                    <p className='text-[#00AA55] font-bold font-mont_alt text-sm'>Bryan Wolf</p>
                                </div>
                                <div className='flex flex-col mt-14 gap-[22px]'>
                                    <img src={Three} alt='Three' className='w-[74px] h-[74px]' />
                                    <p className='text-[#DC6803] font-bold font-mont_alt text-sm'>Alex Turner</p>
                                </div>
                            </div>
                            <div className='flex flex-col hidden bg-[#fff] mt-5 py-6 px-4 gap-[8px]'>
                                <div className='flex justify-between group h-[48px] bg-[#ECF9EE] hover:bg-[#00AA55] rounded-xl items-center p-4'>
                                    <p className='text-sm text-[#00AA55] font-mont_alt font-bold group-hover:text-[#fff]'>4  Marsha Fisher</p>
                                    <div className='flex flex-col'>
                                        <p className='font-manja font-bold text-sm text-[#00AA55] group-hover:text-[#fff]'>35 pts</p>
                                        <p className='font-manja text-[#00AA55] text-[9px] group-hover:text-[#fff]'>2:00 mins</p>
                                    </div>
                                </div>
                                <div className='flex justify-between group h-[48px] bg-[#ECF9EE] hover:bg-[#00AA55] rounded-xl items-center p-4'>
                                    <p className='text-sm text-[#00AA55] font-mont_alt font-bold group-hover:text-[#fff]'>5 Juanita Cormier</p>
                                    <div className='flex flex-col'>
                                        <p className='font-manja font-bold text-sm text-[#00AA55] group-hover:text-[#fff]'>35 pts</p>
                                        <p className='font-manja text-[#00AA55] text-[9px] group-hover:text-[#fff]'>2:00 mins</p>
                                    </div>
                                </div>
                                <div className='flex justify-between group h-[48px] bg-[#ECF9EE] hover:bg-[#00AA55] rounded-xl items-center p-4'>
                                    <p className='text-sm text-[#00AA55] font-mont_alt font-bold group-hover:text-[#fff]'>6 You</p>
                                    <div className='flex flex-col'>
                                        <p className='font-manja font-bold text-sm text-[#00AA55] group-hover:text-[#fff]'>35 pts</p>
                                        <p className='font-manja text-[#00AA55] text-sm text-[9px] group-hover:text-[#fff]'>2:00 mins</p>
                                    </div>
                                </div>
                                <div className='flex justify-between group h-[48px] bg-[#ECF9EE] hover:bg-[#00AA55] rounded-xl items-center p-4'>
                                    <p className='text-sm text-[#00AA55] font-mont_alt font-bold group-hover:text-[#fff]'>7 Tamara Schmidt</p>
                                    <div className='flex flex-col'>
                                        <p className='font-manja font-bold text-sm text-[#00AA55] group-hover:text-[#fff]'>35 pts</p>
                                        <p className='font-manja text-[#00AA55] text-sm text-[9px] group-hover:text-[#fff]'>2:00 mins</p>
                                    </div>
                                </div>
                                <div className='flex justify-between group bg-[#ECF9EE] h-[48px] hover:bg-[#00AA55] rounded-xl items-center p-4'>
                                    <p className='text-sm text-[#00AA55] font-mont_alt font-bold group-hover:text-[#fff]'>8 Ricardo Veum</p>
                                    <div className='flex flex-col'>
                                        <p className='font-manja font-bold text-sm text-[#00AA55] group-hover:text-[#fff]'>35 pts</p>
                                        <p className='font-manja text-[#00AA55] text-sm text-[9px] group-hover:text-[#fff]'>2:00 mins</p>
                                    </div>
                                </div>
                                <div className='flex justify-between group bg-[#ECF9EE] h-[48px] hover:bg-[#00AA55] rounded-xl items-center p-4'>
                                    <p className='text-sm text-[#00AA55] font-mont_alt font-bold group-hover:text-[#fff]'>9 Gary Sanford</p>
                                    <div className='flex flex-col'>
                                        <p className='font-manja font-bold text-sm text-[#00AA55] group-hover:text-[#fff]'>35 pts</p>
                                        <p className='font-manja text-[#00AA55] text-sm text-[9px] group-hover:text-[#fff]'>2:00 mins</p>
                                    </div>
                                </div>
                                <div className='flex justify-between group h-[48px] bg-[#ECF9EE] hover:bg-[#00AA55] rounded-xl items-center p-4'>
                                    <p className='text-sm text-[#00AA55] font-mont_alt font-bold group-hover:text-[#fff]'>10 Becky Bartell</p>
                                    <div className='flex flex-col'>
                                        <p className='font-manja font-bold text-sm text-[#00AA55] group-hover:text-[#fff]'>35 pts</p>
                                        <p className='font-manja text-[#00AA55] text-sm text-[9px] group-hover:text-[#fff]'>2:00 mins</p>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>
            </div>

        </div>
        <ModalPop isOpen={openPrize}>
            <Prize 
                handleClose={() => setOpenPrize(false)} 
                totalCorrectAnswers={totalCorrectAnswers}
                questions={questions} 
            />
        </ModalPop>

        <ModalPop isOpen={openStart}>
            <Start handleClose={() => setOpenStart(false)} setTouched={() => setTouched(true)} />
        </ModalPop>
        
    </div>
  )
}

export default Quiz