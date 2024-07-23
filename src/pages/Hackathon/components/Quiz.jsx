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
import { IoChevronForwardOutline } from 'react-icons/io5'

const Quiz = () => {
    const [text, setText] = useState('');
    const [openPrize, setOpenPrize] = useState(false);
    const [openStart, setOpenStart] = useState(false);
    const [quizDetails, setQuizDetails] = useState(null);
    const [userData, setUserData] = useState([]);
    const [quizLeaderboard, setQuizLeaderboard] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [correctOptionId, setCorrectOptionId] = useState(null);
    const [remainingTime, setRemainingTime] = useState(600); // Initialize with 0 || Example: 10 minutes countdown
    const [timeSpent, setTimeSpent] = useState(0);
    const [userMinutes, setUserMinutes] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    
    
    const { state } = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (state?.duration_of_quiz) {
            setRemainingTime(state?.duration_of_quiz * 60); // Set remaining time
        }
        if (state?.id) {
            getQuiz(state.id);
            getQuizLeaderboard(state.id);
        }
    }, [state]);

   
    useEffect(() => {
        const filled = localStorage.getItem('filled');
        setOpenStart(!filled);
    }, []);
    
    const getQuiz = async (id) => {
        try {
            const res = await axios.get(`https://api.hackathon.noa.gov.ng/api/quizzes/${id}`);
            setQuizDetails(res?.data?.data);
            if (res?.data?.data?.questions) {
                setUserAnswers(Array(res.data.data.questions.length).fill(null));
            }
        } catch (err) {
            console.log(err, 'Error fetching quiz details');
        }
    };
    
    const getQuizLeaderboard = async (id) => {
        try {
            const res = await axios.get(`https://api.hackathon.noa.gov.ng/api/questions/participants/${id}`);
            setQuizLeaderboard(res?.data?.data);
        } catch (err) {
            console.log(err, 'Error fetching leaderboard');
        }
    };
    
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setRemainingTime((prevTime) => {
    //             if (prevTime > 0) {
    //                 setTimeSpent((prevSpent) => prevSpent + 1);
    //                 return prevTime - 1;
    //             } else {
    //                 clearInterval(timer);
    //                 return 0;
    //             }
    //         });
    //     }, 1000);
    //     return () => clearInterval(timer);
    // }, []);

     
    const handleTimeEnd = () => {
        setOpenPrize(true);
        setTimeSpent(600 - remainingTime); // Total time spent
    };
    
    useEffect(() => {
        if (remainingTime > 0) {
            const timerId = setInterval(() => {
                setRemainingTime(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timerId);
        } else {
            handleTimeEnd();
        }
    }, [remainingTime]);    

       
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs =  seconds % 60;
        return {
            minutes: minutes.toString().padStart(2, '0'),
            seconds: secs.toString().padStart(2, '0')
        };
    };
    
    const { minutes, seconds } = formatTime(remainingTime);


    const handleOptionSelect = (option) => {
        setSelectedOption(option.id);
        const correctOption = currentQuestion.options.find(opt => opt.answer === 1);
        setCorrectOptionId(correctOption.id);
        const isAnswerCorrect = option.answer === 1;
        setIsCorrect(isAnswerCorrect);
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestionIndex] = isAnswerCorrect;
        setUserAnswers(updatedAnswers);

        if (isLastQuestion) {
            setOpenPrize(true);
            setTimeSpent(600 - remainingTime); // Total time spent
        } 
    };
    
    if (!quizDetails || !quizDetails.questions || quizDetails.questions.length === 0) {
        return <div className='text-center font-mont font-medium text-4xl my-5'>Loading...</div>;
    }
    
    const sortedLeaderboard = quizLeaderboard.sort((a, b) => {
        if (b.score === a.score) {
            return parseInt(a.time_spent) - parseInt(b.time_spent);
        }
        return b.score - a.score;
    });
    
    const questions = quizDetails?.questions;
    const currentQuestion = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    
    const handleSkip = () => {
        setSelectedOption(null);
        setIsCorrect(null);
        setCorrectOptionId(null);
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    };

    const handleNext = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setIsCorrect(null);
        setCorrectOptionId(null);
    };

    const handleFinish = () => {
        setOpenPrize(true)
    }

    const totalCorrectAnswers = userAnswers?.filter((answer) => answer).length;
 
    
    return (
        // <div className='flex flex-col mt-[32px] mb-[47px] bg-[#fff]'>
        //     <div className='bg-[#fff] px-[100px] py-[19px] hidden lg:flex items-center justify-between '>
        //         <div className='flex gap-1 items-center'>
        //             <p className='text-[#00AA55] font-manja font-bold text-base cursor-pointer' onClick={() => navigate("/")}>National Orientation Agency</p>
        //             <IoChevronForwardOutline className='mb-1'/>
        //             <p className='text-[#222222] font-bold text-base font-manja' onClick={() => navigate("/hackathon")}>Hackathon</p>
        //             <IoChevronForwardOutline className='mb-1'/>
        //             <p className='text-[#222222] font-bold text-base font-manja'>Quizzes</p>
        //         </div>
        //     </div>
            
        //     <div className='flex items-center justify-between mt-10 lg:mt-0 mb-4 px-5 lg:px-[100px]'>
        //         <p className='text-[#222] hidden cursor-pointer lg:flex font-manja text-[32px]' onClick={() => navigate("/hackathon")}>Quiz</p>
        //         <div className='rounded-lg w-full lg:w-[330px] hidden flex items-center h-[48px] border border-[#AAAAAAAA] rounded-[4px]'>
        //             <input 
        //                 type='text'
        //                 value={text}
        //                 className='bg-transparent px-[32px] w-full'
        //                 onChange={(e) => setText(e.target.value)}
        //                 placeholder='Search Contests Or categories '
        //             />
        //             <div className='bg-[#00AA55] w-[48px] h-[48px] rounded-tr-lg rounded-br-lg flex items-center justify-center p-3'>
        //                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        //                     <path d="M16 14H15.21L14.93 13.73C15.9439 12.554 16.5011 11.0527 16.5 9.5C16.5 8.21442 16.1188 6.95772 15.4046 5.8888C14.6903 4.81988 13.6752 3.98676 12.4874 3.49479C11.2997 3.00282 9.99279 2.87409 8.73192 3.1249C7.47104 3.3757 6.31285 3.99477 5.40381 4.90381C4.49477 5.81285 3.8757 6.97104 3.6249 8.23192C3.37409 9.49279 3.50282 10.7997 3.99479 11.9874C4.48676 13.1752 5.31988 14.1903 6.3888 14.9046C7.45772 15.6188 8.71442 16 10 16C11.61 16 13.09 15.41 14.23 14.43L14.5 14.71V15.5L19.5 20.49L20.99 19L16 14ZM10 14C7.51 14 5.5 11.99 5.5 9.5C5.5 7.01 7.51 5 10 5C12.49 5 14.5 7.01 14.5 9.5C14.5 11.99 12.49 14 10 14Z" fill="white" />
        //                 </svg>
        //             </div>
        //         </div>
        //     </div>
            
        //     {openStart && (
        //         <div className='px-10 lg:px-[120px] mt-10 flex flex-col items-center justify-center'>
        //             <p className='text-center text-[24px] font-bold text-[#222222] font-manja'>Quiz</p>
        //             <p className='font-medium text-center text-base lg:text-[24px] leading-6 lg:leading-[36px] text-[#222222]'>Select the correct answer from the options below</p>
        //             <img src={Zone} alt="zone" className='mt-[32px] mb-[68px] rounded-[8px]' />
        //             <div className='flex flex-col items-center gap-[32px]'>
        //                 <button 
        //                     onClick={() => setOpenStart(false)}
        //                     className='rounded-[8px] w-[200px] lg:w-[280px] h-[40px] lg:h-[64px] bg-[#00AA55] text-[#ffffff] font-manja font-bold text-[18px] lg:text-[24px]'
        //                 >
        //                     Start
        //                 </button>
        //             </div>
        //         </div>
        //     )}
            
        //     {!openStart && (
        //         <div className='flex flex-col items-center'>
        //             <div className='flex flex-col items-center gap-6 px-5 lg:px-[100px]'>
        //                 <div className='flex gap-3'>
        //                     <p className='text-[#222] font-manja font-bold text-[20px] lg:text-[32px]'>Question {currentQuestionIndex + 1}:</p>
        //                     <p className='text-[#222] font-manja text-[20px] lg:text-[32px]'>{currentQuestion?.question}</p>
        //                 </div>
        //                 <div className='flex flex-col items-center gap-6'>
        //                     {currentQuestion?.options?.map((option) => (
        //                         <button
        //                             key={option.id}
        //                             onClick={() => handleOptionSelect(option)}
        //                             className={`w-[200px] lg:w-[500px] h-[40px] lg:h-[64px] text-[16px] lg:text-[24px] rounded-[8px] font-manja font-bold ${
        //                                 selectedOption === option.id
        //                                     ? isCorrect
        //                                         ? 'bg-[#00AA55] text-white'
        //                                         : 'bg-[#DA1414] text-white'
        //                                     : 'bg-[#CCCCCC] text-[#222222]'
        //                             }`}
        //                         >
        //                             {option.option}
        //                         </button>
        //                     ))}
        //                 </div>
        //                 <button 
        //                     onClick={handleSkip}
        //                     className='rounded-[8px] w-[100px] lg:w-[200px] h-[30px] lg:h-[40px] bg-[#CCCCCC] text-[#222222] font-manja font-bold text-[16px] lg:text-[20px]'
        //                 >
        //                     Skip
        //                 </button>
        //                 <p className='text-[#222] font-manja font-bold text-[20px] lg:text-[32px]'>
        //                     Time Remaining: {minutes}:{seconds}
        //                 </p>
        //             </div>
                    
        //             {openPrize && (
        //                 <div className='flex flex-col items-center mt-10'>
        //                     <p className='text-[#222] font-manja font-bold text-[24px] lg:text-[32px]'>Congratulations!</p>
        //                     <p className='text-[#222] font-manja font-bold text-[18px] lg:text-[24px]'>You have completed the quiz.</p>
        //                     <button
        //                         onClick={() => navigate('/leaderboard')}
        //                         className='rounded-[8px] w-[200px] lg:w-[280px] h-[40px] lg:h-[64px] bg-[#00AA55] text-[#ffffff] font-manja font-bold text-[18px] lg:text-[24px] mt-5'
        //                     >
        //                         View Leaderboard
        //                     </button>
        //                 </div>
        //             )}
        //         </div>
        //     )}
        // </div>

        <div className='flex flex-col mt-[32px] mb-[47px] bg-[#fff]'>
         <div className='bg-[#fff] px-[100px] py-[19px] hidden lg:flex items-center justify-between '>
             <div className='flex gap-1 items-center'>
                 <p className='text-[#00AA55] font-manja font-bold text-base cursor-pointer' onClick={() => navigate("/")}>National Orientation Agency</p>
                 <IoChevronForwardOutline className='mb-1'/>
                 <p className='text-[#222222] font-bold text-base font-manja' onClick={() => navigate("/hackathon")}>Hackathon</p>
                 <IoChevronForwardOutline className='mb-1'/>
                 <p className='text-[#222222] font-bold text-base font-manja'>Quizzes</p>
             </div>
         </div>
        
        
         <div className='flex items-center justify-between mt-10 lg:mt-0 mb-4 px-5 lg:px-[100px]'>
             <p className='text-[#222] hidden cursor-pointer lg:flex font-manja text-[32px]' onClick={() => navigate("/hackathon")}>Quiz</p>
             <div className='rounded-lg w-full lg:w-[330px] hidden flex items-center h-[48px] border border-[#AAAAAAAA] rounded-[4px]'>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className='hidden'>
                <path d="M7.02343 13.0001C7.02176 11.8146 7.25466 10.6405 7.70871 9.54534C8.16276 8.45021 8.82899 7.45573 9.66903 6.61918C10.5091 5.78263 11.5063 5.12054 12.6033 4.67105C13.7003 4.22156 14.8754 3.99354 16.0609 4.00014C21.0109 4.03764 24.9734 8.15014 24.9734 13.1126V14.0001C24.9734 18.4751 25.9109 21.0751 26.7359 22.5001C26.8235 22.6519 26.8698 22.824 26.8699 22.9993C26.8701 23.1745 26.8242 23.3467 26.7368 23.4986C26.6495 23.6505 26.5237 23.7768 26.3722 23.8648C26.2207 23.9529 26.0487 23.9995 25.8734 24.0001H6.12343C5.94819 23.9995 5.77619 23.9529 5.62467 23.8648C5.47314 23.7768 5.3474 23.6505 5.26005 23.4986C5.1727 23.3467 5.1268 23.1745 5.12695 22.9993C5.12711 22.824 5.17331 22.6519 5.26093 22.5001C6.08593 21.0751 7.02343 18.4751 7.02343 14.0001V13.0001Z" stroke="#344054" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 24V25C12 26.0609 12.4214 27.0783 13.1716 27.8284C13.9217 28.5786 14.9391 29 16 29C17.0609 29 18.0783 28.5786 18.8284 27.8284C19.5786 27.0783 20 26.0609 20 25V24" stroke="#344054" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="23.9996" cy="8.0001" r="5.6" fill="#F04438" stroke="white" stroke-width="1.6"/>
            </svg>
        </div>
        <div className='lg:px-[49px] pt-[74px] bg-[#f6f6f6]'>
            <div className='bg-[#fff] w-full flex flex-col py-[32px] px-[28px] mb-[200px]'>
                <div className='flex flex-col lg:flex-row items-start gap-[34px] w-full mb-[47px]'>
                    <div className='relative w-full lg:w-5/12 h-[377px]'>
                        <img src={quizDetails?.image} alt='Quiz Image' className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col gap-6 w-full lg:w-8/12'>
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
                        </p>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col lg:flex-row w-full items-start mt-[44px] gap-5'>
                    <div className='w-full bg-gradient-to-r from-[#027315] gap-3 p-6 to-[#04D928] to-[#6FD181] lg:hidden flex flex-col rounded-lg'>
                        <p className='text-[#fff]'>Quiz ending in</p>
                        <div className='flex items-center gap-2'>
                            <div className='bg-[#ECF9EE70] w-[123px] rounded-lg h-[52px] flex justify-center items-center'>
                                <p className='font-extrabold text-[23px] font-mont_alt text-[#fff]'>00</p>
                            </div>
                            <div className='bg-[#ECF9EE70] w-[123px] rounded-lg h-[52px] flex justify-center items-center'>
                                <p className='font-extrabold text-[23px] font-mont_alt text-[#fff]'>{minutes}</p>
                            </div>
                            <div className='bg-[#ECF9EE70] w-[123px] rounded-lg h-[52px] flex justify-center items-center'>
                                <p className='font-extrabold text-[23px] font-mont_alt text-[#fff]'>{seconds}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='w-full lg:w-8/12 flex flex-col gap-4'>
                        <div className='flex items-center gap-[9px] lg:gap-6'>
                            {questions?.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-[29px] h-[10px] lg:w-[57px] lg:h-[19px] rounded-[30px] ${index <= currentQuestionIndex ? 'bg-[#00AA55]' : 'bg-[#C4C4C4]'}`}
                                ></div>
                            ))}
                        </div>
                        <div className='bg-[#FAFAFA] w-full rounded-lg flex flex-col py-4 px-5'>
                            <p onClick={handleSkip} className='flex justify-end underline font-mont_alt text-[#00AA55] text-[20px] font-semibold cursor-pointer'>Skip</p>
                            <div className='flex justify-center items-center flex-col'>
                                <p className='font-manja text-[#4A4A4A] font-semibold'>Question {currentQuestionIndex + 1}</p>
                                <p className='text-[#4A4A4A] font-manja text-[19px] mt-[51px] mb-10'>{currentQuestion?.body}</p>
                                <div className='flex flex-col gap-6 w-full'>
                                    {currentQuestion?.options?.map((option) => (
                                        <div
                                            key={option.id}
                                            onClick={() => handleOptionSelect(option)}
                                            className={`border-[#1935CA] w-full rounded-lg border p-5 flex items-center bg-[#FBF9F9] group hover:bg-[#00AA55] hover:border-[#6FD181] cursor-pointer ${
                                                selectedOption === option.id ? (isCorrect ? 'bg-[#D1FAE5]' : 'bg-[#FFCDD2]') : ''
                                            } ${
                                                !isCorrect && correctOptionId === option.id ? 'bg-[#39ff14]' : ''
                                            }`}
                                        >
                                            <p className={`text-[#4A4A4A] font-manja text-[19px] group-hover:text-[#fff] ${selectedOption === option.id ? (isCorrect ? 'text-[#00AA55] ' : 'text-[#D32F2F]') : ''} ${
                                                !isCorrect && correctOptionId === option.id ? 'text-[#00AA55]' : ''
                                            }`}>
                                                {option.body}
                                            </p>
                                        </div>
                                    ))}
                                
                                    {selectedOption && (
                                        <div className='mt-4'>
                                            {isCorrect ? (
                                                <p className='text-[#00AA55] font-manja text-[19px]'>Correct!</p>
                                            ) : (
                                                <p className='text-[#D32F2F] font-manja text-[19px]'>Incorrect. The correct answer is highlighted in green.</p>
                                            )}
                                        </div>
                                    )}
                                 
                                </div>
                            </div>
                            <div className='flex items-center justify-end my-[32px]'>
                                <div
                                    onClick={isLastQuestion ? handleFinish : handleNext}
                                    className='flex cursor-pointer w-[130px] h-[69px] justify-center items-center gap-2 p-3 rounded-lg bg-[#00AA55]'
                                >
                                    <p className='font-poppins text-[#fff] font-semibold text-[20px]'>{isLastQuestion ? 'Finish' : 'Next'}</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className='w-full lg:w-8/12 flex flex-col gap-4'>
                        <div className='flex items-center gap-[9px] lg:gap-6'>
                            {questions?.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-[29px] h-[10px] lg:w-[57px] lg:h-[19px] rounded-[30px] ${index <= currentQuestionIndex ? 'bg-[#00AA55]' : 'bg-[#C4C4C4]'}`}
                                ></div>
                            ))}
                        </div>
                        <div className='bg-[#FAFAFA] w-full rounded-lg flex flex-col py-4 px-5'>
                            <p onClick={handleSkip} className='flex justify-end underline font-mont_alt text-[#00AA55] text-[20px] font-semibold cursor-pointer'>Skip</p>
                            <div className='flex justify-center items-center flex-col'>
                                <p className='font-manja text-[#4A4A4A] font-semibold'>Question {currentQuestionIndex + 1}</p>
                                <p className='text-[#4A4A4A] font-manja text-[19px] mt-[51px] mb-10'>{currentQuestion?.body}</p>
                                <div className='flex flex-col gap-6 w-full'>
                                    {currentQuestion?.options?.map((option) => (
                                        <div
                                            key={option.id}
                                            onClick={() => !selectedOption && handleOptionSelect(option)}
                                            className={`border-[#1935CA] w-full rounded-lg border p-5 flex items-center bg-[#FBF9F9] group hover:bg-[#00AA55] hover:border-[#6FD181] cursor-pointer ${
                                                selectedOption === option.id ? (isCorrect ? 'bg-[#D1FAE5]' : 'bg-[#FFCDD2]') : ''
                                            } ${
                                                selectedOption && !isCorrect && correctOptionId === option.id ? 'bg-[#0f0]' : ' '
                                            }`}
                                        >
                                            <p className={`text-[#4A4A4A] font-manja text-[19px] group-hover:text-[#fff] ${selectedOption === option.id ? (isCorrect ? 'text-[#00AA55] ' : 'text-[#D32F2F]') : ''} ${
                                                selectedOption && !isCorrect && correctOptionId === option.id ? 'text-[#00AA55]' : ''
                                            }`}>
                                                {option.body}
                                            </p>
                                        </div>
                                    ))}
                                
                                    {selectedOption && (
                                        <div className='mt-4'>
                                            {isCorrect ? (
                                                <p className='text-[#00AA55] font-manja text-[19px]'>Correct!</p>
                                            ) : (
                                                <p className='text-[#D32F2F] font-manja text-[19px]'>Incorrect. The correct answer is highlighted in green.</p>
                                            )}
                                        </div>
                                    )}
                                
                                </div>
                            </div>
                            <div className='flex items-center justify-end my-[32px]'>
                                <div
                                    onClick={isLastQuestion ? handleFinish : handleNext}
                                    className='flex cursor-pointer w-[130px] h-[69px] justify-center items-center gap-2 p-3 rounded-lg bg-[#00AA55]'
                                >
                                    <p className='font-poppins text-[#fff] font-semibold text-[20px]'>{isLastQuestion ? 'Finish' : 'Next'}</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='hidden lg:flex flex-col w-4/12'>
                        <div className='bg-gradient-to-r from-[#027315] gap-3 p-6 to-[#04D928] to-[#6FD181] flex flex-col rounded-lg'>
                            <p className='text-[#fff]'>Quiz ending in</p>
                            <div className='flex items-center gap-2'>
                                <div className='bg-[#ECF9EE70] w-[123px] rounded-lg h-[52px] flex justify-center items-center'>
                                    <p className='font-extrabold text-[23px] font-mont_alt text-[#fff]'>00</p>
                                </div>
                                <div className='bg-[#ECF9EE70] w-[123px] rounded-lg h-[52px] flex justify-center items-center'>
                                    <p className='font-extrabold text-[23px] font-mont_alt text-[#fff]'>{minutes}</p>
                                </div>
                                <div className='bg-[#ECF9EE70] w-[123px] rounded-lg h-[52px] flex justify-center items-center'>
                                    <p className='font-extrabold text-[23px] font-mont_alt text-[#fff]'>{seconds}</p>
                                </div>
                            </div>
                        </div>
                        <p className='mt-5 text-center font-mont_alt font-medium text-xl'>Quiz Leaderboard</p>
                        <div className='bg-gradient-to-b from-[#FFFFFF] p-[28px] to-[#ECF9EE] rounded-xl flex flex-col'>
                            {sortedLeaderboard.length > 0 ? (
                                    <div className='flex flex-col'>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex flex-col items-center mt-14 gap-[22px]'>
                                                <img src={Two} alt='Two' className='w-[74px] h-[74px]' />
                                                <p className='text-[#FFBA49] font-bold font-mont_alt text-sm'>{sortedLeaderboard[1]?.name || 'User 2'}</p>
                                            </div>
                                            <div className='flex flex-col items-center gap-[22px]'>
                                                <img src={One} alt='One' className='w-[84px] h-[84px]' />
                                                <p className='text-[#00AA55] font-bold font-mont_alt text-sm'>{sortedLeaderboard[0]?.name || 'User 1'}</p>
                                            </div>
                                            <div className='flex flex-col items-center mt-14 gap-[22px]'>
                                                <img src={Three} alt='Three' className='w-[74px] h-[74px]' />
                                                <p className='text-[#DC6803] font-bold font-mont_alt text-sm'>{sortedLeaderboard[2]?.name || 'User 3'}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col bg-[#fff] mt-5 py-6 px-4 gap-[8px]'>
                                            {sortedLeaderboard?.slice(0, 10)?.map((user, index) => (
                                                <div key={user.id} className='flex justify-between group h-[48px] bg-[#ECF9EE] hover:bg-[#00AA55] rounded-xl items-center p-4'>
                                                    <p className='text-sm text-[#00AA55] font-mont_alt font-bold group-hover:text-[#fff]'>{index + 1} {user.name}</p>
                                                    <div className='flex flex-col'>
                                                        <p className='font-manja font-bold text-sm text-[#00AA55] group-hover:text-[#fff]'>{user.score} pts</p>
                                                        <p className='font-manja text-[#00AA55] text-[9px] group-hover:text-[#fff]'>{Math.round(parseInt(user.time_spent) / 60)} mins</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <p className='text-xl text-[#222] font-mont font-semibold'>No Leaderboard Available</p>
                                )}
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
                userData={userData}
                state={state}
                timeSpent={formatTime(timeSpent)}
            />
        </ModalPop>

        <ModalPop isOpen={openStart}>
            <Start 
                handleClose={() => setOpenStart(false)} 
                setTouched={() => setTouched(true)} 
                setUserData={setUserData}
                quizDetails={quizDetails}
            />
        </ModalPop>
        
    </div>
    );
};

export default Quiz;
