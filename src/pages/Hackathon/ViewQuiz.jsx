import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { IoChevronForwardOutline } from 'react-icons/io5'

import User from "../../assets/svg/user_fill.svg"

import City from "../../assets/png/city.png"
import People from "../../assets/png/people.png"



const ViewQuiz = () => {
    const [text, setText] = useState("")
    const [allQuizzes, setAllQuizzes] = useState([])

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const navigate = useNavigate()

    const getAllQuiz = async () => {
        // setLoading(true)
        await axios.get("https://api.hackathon.noa.gov.ng/api/quizzes")
        .then((res) => {
            // setLoading(false)
            console.log(res, "azaman")
            setAllQuizzes(res?.data?.data)
        })
        .catch((err) => {
            // setLoading(false)
            console.log(err, "sample")
        })
    }

    useEffect(() => {
        getAllQuiz() 
    },[])

  return (
    <div className='flex flex-col mt-[32px] mb-[47px]'>
        <div className='bg-[#fff] px-[100px] py-[19px] hidden lg:flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base cursor-pointer' onClick={() => navigate("/")}>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja cursor-pointer' onClick={() => navigate("/hackathon")}>Hackathon</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>Quizzes</p>
            </div>
        </div>
        <div className='flex items-center justify-between mt-10 lg:mt-0 pb-5 px-5 lg:px-[100px]'>
            <p className='text-[#222] hidden lg:flex font-manja text-[32px] cursor-pointer' onClick={() => navigate("/hackathon")}>Quiz</p>
            <div className='rounded-lg w-full lg:w-[330px] flex hidden items-center h-[48px] border border-[#AAAAAAAA] rounded-[4px]'>
                <input 
                    type='text'
                    value={text}
                    className='bg-transparent px-[32px] w-full'
                    onChange={(e) => handleChange(e)}
                    placeholder='Search Quizzes Or categories '
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
        <div 
            style={{
                background: `url(${People})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            className='h-[500px] relative '
        >
            <div
                style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the color and opacity as needed
                zIndex: 1
                }}
            />
            <div className='flex flex-col  py-14 px-5 lg:px-[100px] '  style={{ position: 'relative', zIndex: 2 }}>
                <div className='flex flex-col w-full lg:w-[501px] h-[271px] gap-5'>
                    <p className='text-[#fff] text-[40px] lg:text-[80px] font-bebas leading-[40px] lg:leading-[90px] font-medium'>WELCOME TO NOA QUIZ</p>
                    <p className='font-manja text-[20px] font-bold text-[#fff]'>
                        This engaging and informative quiz is designed to test your knowledge while at the same time 
                        educating you on the activities, policies and programmes of Nigerian government.
                    </p>
                    <button className='rounded-lg invisible lg:flex-row bg-[#027315] w-[310px] h-[43px] p-3 flex items-center justify-center text-[#fff]'>
                        Take Quiz
                    </button>
                </div>
    
            </div>
        </div>
     
        <div className='pt-[76px] px-[95px] flex flex-col gap-[31px]'>
            <p className='text-[#027315] font-bold font-mont text-[28px]'>About NOA Quiz</p>
            <p className='font-manja text-[#33363F] text-lg'>
                This quiz offers a fantastic opportunity to deepen your understanding of what government is doing through 
                various government bodies and institutions. It explores key topics such as infrastructural development, 
                environment, education, defence, health, economy and much more. Each question is crafted to provide 
                valuable insights and broaden your knowledge about your government and country. You will be instantly 
                credited with N25.00 for each question you get right. Remember you can always consult CLHEEAN to assist 
                you with any of the questions.
            </p>
            <p className='font-manja text-[#33363F] text-lg'>
                Huge amount of airtime await our top participants! Test your knowledge, challenge your friends, 
                and see how well you know the workings of the Nigerian government. Don’t miss this chance to learn and win. 
                Join us in this exciting journey of learning and discovery. Let’s get started and have fun while 
                enhancing our civic understanding and competing for this fantastic reward!
            </p>
        </div>
        <div className='flex flex-col gap-6 mt-[72px]  px-5 lg:px-[100px]'>
            <div className='flex justify-between items-center'>
                <p className='font-mont_alt font-bold text-[24px] text-[#070807]'>Quizzes</p>
                <p className='font-mont_alt font-bold text-[14px] text-[#00AA55]' onClick={() => navigate("/quiz/view/all")}>See more</p>
            </div>
          
            <div  className='grid grid-cols-1 lg:grid-cols-3 items-center gap-5 '>
                {
                    // loading ?
                    // <Skeleton variant="rectangular" width={window.innerWidth < 786 ? 200 : 286} height={350} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} />
                    // :
                    allQuizzes?.length > 0 ?
                    allQuizzes?.slice(0, 3).map((item, index) => (
                        <div key={item?.id} className='lg:w-[370px] bg-[#fff] h-auto p-2 flex flex-col border border-[#E8F2EA] rounded-tl-xl rounded-tr-xl'>
                            <div className='bg-[#add8e6] p-2 flex items-center justify-center'>
                                <img src={`${item?.image}`} alt='Zones' className='h-[211px]'/>
                            </div>
                            <div className='flex items-center relative -top-4 left-1 gap-4'>

                                <div className='flex items-center justify-center gap-1 bg-[#33363F] rounded-[15px] w-[104px]  p-[6px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 9.33333C14.5 12.647 11.8137 15.3333 8.5 15.3333C5.18629 15.3333 2.5 12.647 2.5 9.33333C2.5 6.01962 5.18629 3.33333 8.5 3.33333C11.8137 3.33333 14.5 6.01962 14.5 9.33333ZM8.5 12.6666C10.341 12.6666 11.8333 11.1742 11.8333 9.33329C11.8333 7.49234 10.341 5.99995 8.5 5.99995C6.65905 5.99995 5.16667 7.49234 5.16667 9.33329C5.16667 11.1742 6.65905 12.6666 8.5 12.6666ZM8.5 14C11.0773 14 13.1667 11.9106 13.1667 9.33329C13.1667 6.75596 11.0773 4.66662 8.5 4.66662C5.92267 4.66662 3.83333 6.75596 3.83333 9.33329C3.83333 11.9106 5.92267 14 8.5 14ZM9.16667 7.33329C9.16667 6.9651 8.86819 6.66662 8.5 6.66662C8.13181 6.66662 7.83333 6.9651 7.83333 7.33329V9.33329C7.83333 9.70148 8.13181 9.99995 8.5 9.99995C8.86819 9.99995 9.16667 9.70148 9.16667 9.33329L9.16667 7.33329Z" fill="white"/>
                                        <path d="M12.1665 5L13.1665 4" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                        <path d="M7.21226 1.58039C7.28823 1.50951 7.45562 1.44688 7.68848 1.40221C7.92134 1.35754 8.20665 1.33333 8.50016 1.33333C8.79367 1.33333 9.07899 1.35754 9.31184 1.40221C9.5447 1.44688 9.7121 1.50951 9.78806 1.58039" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                    </svg>
                                    <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>{item.duration_of_quiz} mins</p>
                                </div>

                                <div className='flex items-center justify-center gap-1 bg-[#020D73] rounded-[15px] w-[104px]  p-[6px]'>
                                    <img src={User} alt='User' />
                                    <p className='text-[#FFF] text-xs font-manja mt-1 font-bold'>{item.total_partakers || 0} takers</p>
                                </div>

                            </div>
                            <div className='flex flex-col gap-2 px-4'>
                                <p className='font-manja text-[20px] font-bold text-[#000000]'>{item.title}</p>
                                <p className='opacity-40 text-[#000] font-mont_alt font-medium text-sm'>
                                    {item?.desc?.slice(0, 20)}
                                </p>
                                <div className='bg-[#f8a4012e] w-[128px] p-2.5 flex items-center justify-center rounded-xl'>
                                    <p className='text-[#DC6803] text-xs font-mont'>Personality</p>
                                </div>
                                <button type='button' onClick={() => {navigate("/quiz", {state: item}); window.scrollTo(0, 0)}} className='bg-[#027315] rounded-[8px] border w-[124px] py-2 px-[15px] border-[#00AA55]'>
                                    <p className='font-mont_alt font-semibold text-[#fff] text-sm '>View Details</p>
                                </button>

                            </div>

                        </div>
                    )) 
                    :
                    <p className='text-xs font-mont text-[#000] text-center font-semibold text-5xl'>No Quiz Available</p>
                }


                {/* <div className='lg:w-[370px] h-[425px] flex flex-col relative border border-[#E8F2EA] rounded-tl-xl rounded-tr-xl '>
                    <div className='absolute top-0 left-0 w-full z-50 h-full bg-[#222222A6] rounded-xl flex items-center justify-center'>
                        <button className='bg-[#00AA55] rounded-[8px] w-[292px] border py-2 px-4 border-[#0A5]'>
                            <p className='font-mont_alt font-semibold text-[#fff] text-sm '>Coming Soon</p>
                        </button>
                    </div>
                    <img src={Leaf} alt='Leaf' />
                    <div className='flex items-center relative -top-4 left-1 gap-4'>

                        <div className='flex items-center justify-center gap-1 bg-[#33363F] rounded-[15px] w-[104px]  p-[6px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 9.33333C14.5 12.647 11.8137 15.3333 8.5 15.3333C5.18629 15.3333 2.5 12.647 2.5 9.33333C2.5 6.01962 5.18629 3.33333 8.5 3.33333C11.8137 3.33333 14.5 6.01962 14.5 9.33333ZM8.5 12.6666C10.341 12.6666 11.8333 11.1742 11.8333 9.33329C11.8333 7.49234 10.341 5.99995 8.5 5.99995C6.65905 5.99995 5.16667 7.49234 5.16667 9.33329C5.16667 11.1742 6.65905 12.6666 8.5 12.6666ZM8.5 14C11.0773 14 13.1667 11.9106 13.1667 9.33329C13.1667 6.75596 11.0773 4.66662 8.5 4.66662C5.92267 4.66662 3.83333 6.75596 3.83333 9.33329C3.83333 11.9106 5.92267 14 8.5 14ZM9.16667 7.33329C9.16667 6.9651 8.86819 6.66662 8.5 6.66662C8.13181 6.66662 7.83333 6.9651 7.83333 7.33329V9.33329C7.83333 9.70148 8.13181 9.99995 8.5 9.99995C8.86819 9.99995 9.16667 9.70148 9.16667 9.33329L9.16667 7.33329Z" fill="white"/>
                                <path d="M12.1665 5L13.1665 4" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                <path d="M7.21226 1.58039C7.28823 1.50951 7.45562 1.44688 7.68848 1.40221C7.92134 1.35754 8.20665 1.33333 8.50016 1.33333C8.79367 1.33333 9.07899 1.35754 9.31184 1.40221C9.5447 1.44688 9.7121 1.50951 9.78806 1.58039" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                            </svg>
                            <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>20 mins</p>
                        </div>

                        <div className='flex items-center justify-center gap-1 bg-[#020D73] rounded-[15px] w-[104px]  p-[6px]'>
                            <img src={User} alt='User' />
                            <p className='text-[#FFF] text-xs font-manja mt-1 font-bold'>6.3k takers</p>
                        </div>

                    </div>
                    <div className='flex flex-col gap-2 px-4'>
                        <p className='font-manja text-[20px] font-bold text-[#000000]'> National icon</p>
                        <p className='opacity-40 text-[#000] font-mont_alt font-medium text-sm'>
                            How many of these national icons do you recognize  Take this quiz to find out!!
                        </p>
                        <div className='bg-[#f8a4012e] w-[128px] p-2.5 flex items-center justify-center rounded-xl'>
                            <p className='text-[#DC6803] text-xs font-mont'>Personality</p>
                        </div>
                        <button className='bg-[#027315] rounded-[8px] border w-[124px] py-2 px-[15px] border-[#00AA55]'>
                            <p className='font-mont_alt font-semibold text-[#fff] text-sm '>Take Quiz</p>
                        </button>

                    </div>

                </div> */}

                

            </div>

          
            
        </div>

        <div
            style={{
                background: `url(${City})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            className='flex items-center justify-center h-[400px] mt-[128px]'
        >
            <div className='flex flex-col w-[453px] h-[208px] gap-[8px]'>
                <p className='font-bold font-manja text-[32px] text-[#fff] text-center'>Informative content tailored to your preferences</p>
                <p className='font-mont_alt font-semibold text-base text-[#fff] text-center'>
                    Quality and informative content to the general citizenry is our priority
                </p>
                <button className='bg-[#00AA55] rounded flex items-center h-[48px] p-2 w-[162px] mx-auto justify-center'>
                    <p className='text-[#fff] font-manja font-bold text-sm'>Browse programs</p>
                </button>
            </div>

        </div>

    </div>
  )
}

export default ViewQuiz