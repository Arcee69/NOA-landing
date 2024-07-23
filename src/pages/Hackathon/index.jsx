import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Nigeria from "../../assets/png/nigeria.png"
import Origin from "../../assets/png/origin.png"
import OriginSmall from "../../assets/png/origin_small.png"
import Trophy from "../../assets/png/trophy_large.png"
import Camera from "../../assets/png/camera.png"
import Biker from "../../assets/png/biker.png"
import Zones from "../../assets/png/zones.png"
import Leaf from "../../assets/png/leaf.png"
import QuizCup from "../../assets/png/quiz_cup.png"
import City from "../../assets/png/city.png"
import Group from "../../assets/png/group.png"
import GroupMobile from "../../assets/png/groupMobile.png"
import People from "../../assets/png/people.png"
import GreenTrophy from "../../assets/svg/green_trophy.svg"
import Waves from "../../assets/svg/wave.svg"
import Radio from "../../assets/svg/radio.svg"
import Tv from "../../assets/svg/tv.svg"
import Wheel from "../../assets/svg/wheel.svg"
import Mix from "../../assets/png/mix.png"
import Medal from "../../assets/svg/medal.svg"
import GreenStar from "../../assets/svg/green_star.svg"
import OrangeStar from "../../assets/svg/orange_star.svg"

import User from "../../assets/svg/user_fill.svg"


import { IoChevronForwardOutline } from 'react-icons/io5';



const Hackathon = () => {
    const [text, setText] = useState("")
    const [allContest, setAllContest] = useState([])
    const [allQuizzes, setAllQuizzes] = useState([])
    

    console.log(allContest, "allContest")

    const targetDate = '2024-06-31T23:59:59';

    const navigate = useNavigate()

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());



    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);


    const handleChange = (e) => {
        setText(e.target.value)
    }

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            // {
            //   breakpoint: 600,
            //   settings: {
            //     slidesToShow: 2,
            //     slidesToScroll: 2,
            //     initialSlide: 2
            //   }
            // },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              }
            }
        ]
    }

    const fetchContest = async () => {
        await axios.get("https://api.hackathon.noa.gov.ng/api/contest/open")
        .then((res) => {
            console.log(res, "faslo")
            setAllContest(res?.data?.data)
        })
        .catch((err) => {
            console.log(err, "malo")
        })
    }

    useEffect(() => {
        fetchContest()
    }, [])

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

    const isMobile = window.innerWidth < 768

  return (
    <div className='flex flex-col mt-[32px] mb-[47px]'>
         <div className='bg-[#fff] px-[100px] py-[19px] hidden lg:flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base cursor-pointer' onClick={() => navigate("/")}>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja cursor-pointer'>Hackathon</p>
            </div>
        </div>
        <div className='flex items-center justify-between mt-10 lg:mt-0 px-5 lg:px-[100px]'>
            {/* <p className='text-[#222] hidden lg:flex font-manja text-[32px]'>Hackathon</p> */}
            <div className='rounded-lg hidden w-full lg:w-[330px] flex items-center h-[48px] border border-[#AAAAAAAA] rounded-[4px]'>
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

        <div className='w-full pb-[20px]'>
            <Slider {...settings}>
                <div className='w-full hidden relative lg:flex h-[317px] lg:h-[552px]'>
                    <img src={People} alt='Background' className='absolute top-0 left-0 w-full h-full object-cover -z-50' />
                    <div className='absolute top-0 left-0 w-full h-full bg-gray-500 opacity-50 -z-40'></div>
                    <div className='flex flex-col w-full px-5 lg:w-[501px] py-14 h-[271px] lg:px-[100px] gap-5'>
                        <p className='text-[#fff] text-[40px] lg:text-[80px] font-bebas leading-[40px] lg:leading-[90px] font-medium'>WELCOME TO NOA QUIZ AND HACKATHON</p>
                        {/* <p className='font-manja text-[16px] font-bold text-[#fff]'>
                            This engaging and informative quiz is designed to test your knowledge while at the same time 
                            educating you on the activities, policies and programmes of Nigerian government.
                        </p> */}
                        <button className='rounded-lg invisible lg:flex-row bg-[#027315] w-[310px] h-[43px] p-3 flex items-center justify-center text-[#fff]'>
                            Take Quiz
                        </button>
                    </div>
                </div>
                <div className='w-full hidden relative lg:flex h-[317px] lg:h-[552px]'>
                    <img src={isMobile ? GroupMobile : Group} alt='Background' className='absolute top-0 left-0 w-full h-full object-cover -z-50' />
                    <div className='absolute top-0 left-0 w-full h-full bg-gray-500 opacity-50 -z-40'></div>
                    <div className='flex flex-col lg:flex-row items-center py-14 px-5 lg:px-[100px] '>
                        <div className='flex flex-col w-full lg:w-[501px] h-[271px] gap-[48px]'>
                            <p className='text-[#fff] text-[40px] lg:text-[80px] font-bebas leading-[40px] lg:leading-[90px] font-medium'>All about NOA Hackathons And Quizzes</p>
                            <button className='rounded-lg invisible bg-[#027315] w-[310px] h-[43px] p-3 flex items-center justify-center text-[#fff]'>
                                Read Article
                            </button>
                        </div>
           
                    </div>

                </div>
            </Slider>
        </div>

        <div className='flex flex-col gap-[32px] mt-[54px] lg:mt-[104px] px-5 lg:px-[100px]'>
            <div className='flex justify-between items-center'>
                <p className='font-bebas font-normal text-[32px] lg:text-[66px] text-[#1D4645]'>Categories</p>
                <img src={GreenStar} alt='GreenStar' className='hidden lg:flex' />
                <img src={OrangeStar} alt='OrangeStar' className='hidden lg:flex' /> 
            </div>
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-[30px] '>
                <div className='flex flex-col gap-[40px] lg:gap-[60px] relative items-center'>
                    <div className='w-full h-[255px] lg:w-[470px] lg:h-[352px] rounded-xl bg-[#FFF5E6] py-[40px] px-[30px] flex flex-col gap-1'>
                        <img src={GreenTrophy} alt='GreenTrophy' className='w-[60px] h-[60px]' />
                        <p className='text-xl text-[#5D5959] font-medium font-mont_alt'>Quizzes</p>
                        <p className='font-manja text-[#004D40] text-base'>Sky was cloudless and of a deep dark blue spectacle before us was indeed </p>
                    </div>
                    <div className='w-full h-[255px] lg:w-[470px] lg:h-[352px] rounded-xl bg-[#FFF5E6] py-[40px] px-[30px] flex flex-col gap-1'>
                        <img src={Waves} alt='Waves' className='w-[60px] h-[60px]' />
                        <p className='text-xl text-[#5D5959] font-medium font-mont_alt'>Essay Hackathon</p>
                        <p className='font-manja text-[#004D40] text-base'>Even the all-powerful Pointing has no control about the blind texts.</p>
                    </div>
                    <img src={Wheel} alt='Wheel' className='w-[201px] h-[202px] absolute hidden lg:flex -bottom-5 -left-20' />
                </div>
                <div className='flex flex-col gap-[40px] relative lg:gap-[60px] mt-[40px] lg:mt-[96px] items-center'>
                    <div className='w-full lg:w-[370px] rounded-xl bg-[#FFF5E6] gap-2 h-[255px] lg:h-[352px] flex flex-col py-[42px] px-4'>
                        <img src={Radio} alt='Radio' className='w-[46px] h-[49px]' />
                        <p className='font-mont_alt font-medium text-[#5D5959] text-[20px]'>Photo Hackathon</p>
                        <p className='font-manja text-[#004D40] text-base'>Even the all-powerful Pointing has no control about the blind texts.</p>
                    </div>
                    <div className='w-full lg:w-[370px] rounded-xl bg-[#FFF5E6] gap-2 h-[255px] lg:h-[352px] flex flex-col py-[42px] px-4'>
                        <img src={Tv} alt='Tv' className='w-[46px] h-[49px]' />
                        <p className='font-mont_alt font-medium text-[#5D5959] text-[20px]'>Video Hackathons</p>
                        <p className='font-manja text-[#004D40] text-base'>Even the all-powerful Pointing has no control about the blind texts.</p>
                    </div>
                    <img src={Wheel} alt='Wheel' className='w-[100px] h-[101px] absolute lg:hidden flex -bottom-14 -left-5' />
                    <img src={OrangeStar} alt='OrangeStar' className='right-0 w-[61px] h-[61px] absolute lg:hidden flex -bottom-9 -z-10' /> 
                </div>
                <img src={Mix} alt='Mix' className='absolute right-0 -z-10 hidden lg:flex' />

            </div>

        </div>

        <div className='flex flex-col mt-[77px] gap-[64px] gap-[0px] lg:mt-[133px] items-center justify-center'>
            <img src={Medal} alt='Medal' className='' />
            <p className='font-mont font-bold text-center text-[32px] lg:text-[48px] text-[#00AA55]'>Let’s get started and have fun !!!!!</p>
        </div>

        <div className='flex flex-col gap-6 mt-[72px]  px-5 lg:px-[100px]'>
            <div className='flex justify-between items-center'>
                <p className='font-mont_alt font-bold text-[24px] text-[#070807]'>Hackathons</p>
                <p className='font-mont_alt font-bold text-[14px] text-[#00AA55] cursor-pointer' onClick={() => navigate("/hackathon/view/all")}>See more</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 items-center'>
                {
                    allContest?.length > 0  ? allContest?.slice(0, 3)?.map((item, index) => (
                        <div className='lg:w-[370px] h-[425px] flex flex-col border border-[#E8F2EA] ' key={index}>
                            <img src={Camera || item?.flier} alt='Flier' />
                            <div className='flex items-center relative -top-4 left-1 gap-4'>
                                <div className='flex items-center justify-center gap-1 bg-[#0A5] rounded-[15px] w-[104px]  p-[6px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.83333 5.33333H3.83333C3.20479 5.33333 2.89052 5.33333 2.69526 5.52859C2.5 5.72385 2.5 6.03812 2.5 6.66666V7.33333C2.5 7.96187 2.5 8.27614 2.69526 8.4714C2.87899 8.65512 3.16807 8.66598 3.72516 8.66662H7.83333V5.33333ZM4.5 9.99995V12.6667C4.5 13.2952 4.5 13.6095 4.69526 13.8047C4.89052 14 5.20479 14 5.83333 14H7.83333V9.99995H4.5ZM9.16667 14H11.1667C11.7952 14 12.1095 14 12.3047 13.8047C12.5 13.6095 12.5 13.2952 12.5 12.6667V9.99995H9.16667V14ZM13.2748 8.66662C13.8319 8.66598 14.121 8.65512 14.3047 8.4714C14.5 8.27614 14.5 7.96187 14.5 7.33333V6.66666C14.5 6.03812 14.5 5.72385 14.3047 5.52859C14.1095 5.33333 13.7952 5.33333 13.1667 5.33333H9.16667V8.66662H13.2748Z" fill="white"/>
                                        <path d="M13.1665 3.0883V2.96689C13.1665 2.16324 12.3792 1.59577 11.6168 1.84991C10.663 2.16782 9.79641 2.70342 9.08554 3.41429L8.49984 3.99999V4.66666H10.9501C11.0934 4.66666 11.2358 4.64356 11.3718 4.59824L12.3016 4.2883C12.8181 4.11613 13.1665 3.63275 13.1665 3.0883Z" fill="white"/>
                                        <path d="M3.8335 3.0883V2.96689C3.8335 2.16324 4.62082 1.59577 5.38323 1.84991C6.33697 2.16782 7.20359 2.70342 7.91446 3.41429L8.50016 3.99999V4.66666H6.04987C5.90656 4.66666 5.76418 4.64356 5.62823 4.59824L4.69841 4.2883C4.18189 4.11613 3.8335 3.63275 3.8335 3.0883Z" fill="white"/>
                                    </svg>
                                    <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>#5,000,000</p>
                                </div>

                                <div className='flex items-center justify-center gap-1 bg-[#33363F] rounded-[15px] w-[104px]  p-[6px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 9.33333C14.5 12.647 11.8137 15.3333 8.5 15.3333C5.18629 15.3333 2.5 12.647 2.5 9.33333C2.5 6.01962 5.18629 3.33333 8.5 3.33333C11.8137 3.33333 14.5 6.01962 14.5 9.33333ZM8.5 12.6666C10.341 12.6666 11.8333 11.1742 11.8333 9.33329C11.8333 7.49234 10.341 5.99995 8.5 5.99995C6.65905 5.99995 5.16667 7.49234 5.16667 9.33329C5.16667 11.1742 6.65905 12.6666 8.5 12.6666ZM8.5 14C11.0773 14 13.1667 11.9106 13.1667 9.33329C13.1667 6.75596 11.0773 4.66662 8.5 4.66662C5.92267 4.66662 3.83333 6.75596 3.83333 9.33329C3.83333 11.9106 5.92267 14 8.5 14ZM9.16667 7.33329C9.16667 6.9651 8.86819 6.66662 8.5 6.66662C8.13181 6.66662 7.83333 6.9651 7.83333 7.33329V9.33329C7.83333 9.70148 8.13181 9.99995 8.5 9.99995C8.86819 9.99995 9.16667 9.70148 9.16667 9.33329L9.16667 7.33329Z" fill="white"/>
                                        <path d="M12.1665 5L13.1665 4" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                        <path d="M7.21226 1.58039C7.28823 1.50951 7.45562 1.44688 7.68848 1.40221C7.92134 1.35754 8.20665 1.33333 8.50016 1.33333C8.79367 1.33333 9.07899 1.35754 9.31184 1.40221C9.5447 1.44688 9.7121 1.50951 9.78806 1.58039" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                    </svg>
                                    <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>20:30:15</p>
                                </div>

                                <div className='flex items-center justify-center gap-1 bg-[#E5E5E5] rounded-[15px] w-[104px]  p-[6px]'>
                                    {
                                        item?.open === 1 ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2244 4.38986C10.4656 4.14899 10.7987 4.00003 11.1665 4.00003C11.9029 4.00003 12.4998 4.59699 12.4998 5.33337C12.4998 5.7012 12.3509 6.03425 12.11 6.27548C11.7158 5.4518 11.0481 4.78404 10.2244 4.38986ZM7.33788 4.17142C7.50769 3.61116 7.79711 3.1029 8.17642 2.67635C5.3815 2.84352 3.1665 5.16311 3.1665 8.00003C3.1665 10.9456 5.55432 13.3334 8.49984 13.3334C11.3368 13.3334 13.6563 11.1184 13.8235 8.32345C13.397 8.70276 12.8887 8.99218 12.3285 9.16199C11.8306 10.8044 10.3049 12 8.49984 12C6.2907 12 4.49984 10.2092 4.49984 8.00003C4.49984 6.19501 5.69543 4.66923 7.33788 4.17142Z" fill="#00AA55"/>
                                            <circle cx="11.1667" cy="5.33334" r="2.66667" fill="#00AA55"/>
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2244 4.38986C10.4656 4.14899 10.7987 4.00003 11.1665 4.00003C11.9029 4.00003 12.4998 4.59699 12.4998 5.33337C12.4998 5.7012 12.3509 6.03425 12.11 6.27548C11.7158 5.4518 11.0481 4.78404 10.2244 4.38986ZM7.33788 4.17142C7.50769 3.61116 7.79711 3.1029 8.17642 2.67635C5.3815 2.84352 3.1665 5.16311 3.1665 8.00003C3.1665 10.9456 5.55432 13.3334 8.49984 13.3334C11.3368 13.3334 13.6563 11.1184 13.8235 8.32345C13.397 8.70276 12.8887 8.99218 12.3285 9.16199C11.8306 10.8044 10.3049 12 8.49984 12C6.2907 12 4.49984 10.2092 4.49984 8.00003C4.49984 6.19501 5.69543 4.66923 7.33788 4.17142Z" fill="#33363F"/>
                                            <circle cx="11.1667" cy="5.33334" r="2.66667" fill="#33363F"/>
                                        </svg>
                                    }
                                    <p className={`${item?.open === 1 ? "text-[#00AA55]" : "text-[#33363F]"}  text-xs font-manja mt-1 font-bold`}>{item?.open === 1 ? "Ongoing" : "Finished" }</p>
                                </div>

                            </div>
                            <div className='flex flex-col gap-2 px-4'>
                                <p className='font-manja text-[20px] font-bold text-[#000000] capitalize'>{item?.title}</p>
                                <p className='opacity-40 text-[#000] font-mont_alt font-medium text-sm'>
                                    {item?.desc}
                                </p>
                                <div className='bg-[#f8a4012e] w-[128px] p-2.5 flex items-center justify-center rounded-xl'>
                                    <p className='text-[#DC6803] text-xs font-mont'>Photo Hackathon</p>
                                </div>
                                <button onClick={() => {navigate("/hackathon/details", { state: item }); window.scroll(0, 0)}} className='bg-[#fff] rounded-[8px] border w-[124px] py-2 px-[15px] border-[#0A5]'>
                                    <p className='font-mont_alt font-semibold text-[#0A5] text-sm '>View Details</p>
                                </button>

                            </div>

                        </div>     
                    ))
                    :
                    <p className='font-mont_alt font-bold text-[24px] text-[#070807]'>No Contest Available</p>  
                }
            </div>
        </div>

        <div className='flex flex-col hidden gap-6 mt-[72px] px-5 lg:px-[100px]'>
            <div className='flex justify-between items-center'>
                <p className='font-mont_alt font-bold text-[24px] text-[#070807]'>Recent Hackathons</p>
                <p className='font-mont_alt font-bold text-[14px] text-[#00AA55]'>Browse all</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 items-center '>
                {
                    allContest?.length > 0  ? allContest?.slice(0, 3)?.map((item, index) => (
                        <div className='lg:w-[370px] h-[425px] flex flex-col border border-[#E8F2EA] ' key={index}>
                            <img src={Camera || item?.flier} alt='Flier' />
                            <div className='flex items-center relative -top-4 left-1 gap-4'>
                                <div className='flex items-center justify-center gap-1 bg-[#0A5] rounded-[15px] w-[104px]  p-[6px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.83333 5.33333H3.83333C3.20479 5.33333 2.89052 5.33333 2.69526 5.52859C2.5 5.72385 2.5 6.03812 2.5 6.66666V7.33333C2.5 7.96187 2.5 8.27614 2.69526 8.4714C2.87899 8.65512 3.16807 8.66598 3.72516 8.66662H7.83333V5.33333ZM4.5 9.99995V12.6667C4.5 13.2952 4.5 13.6095 4.69526 13.8047C4.89052 14 5.20479 14 5.83333 14H7.83333V9.99995H4.5ZM9.16667 14H11.1667C11.7952 14 12.1095 14 12.3047 13.8047C12.5 13.6095 12.5 13.2952 12.5 12.6667V9.99995H9.16667V14ZM13.2748 8.66662C13.8319 8.66598 14.121 8.65512 14.3047 8.4714C14.5 8.27614 14.5 7.96187 14.5 7.33333V6.66666C14.5 6.03812 14.5 5.72385 14.3047 5.52859C14.1095 5.33333 13.7952 5.33333 13.1667 5.33333H9.16667V8.66662H13.2748Z" fill="white"/>
                                        <path d="M13.1665 3.0883V2.96689C13.1665 2.16324 12.3792 1.59577 11.6168 1.84991C10.663 2.16782 9.79641 2.70342 9.08554 3.41429L8.49984 3.99999V4.66666H10.9501C11.0934 4.66666 11.2358 4.64356 11.3718 4.59824L12.3016 4.2883C12.8181 4.11613 13.1665 3.63275 13.1665 3.0883Z" fill="white"/>
                                        <path d="M3.8335 3.0883V2.96689C3.8335 2.16324 4.62082 1.59577 5.38323 1.84991C6.33697 2.16782 7.20359 2.70342 7.91446 3.41429L8.50016 3.99999V4.66666H6.04987C5.90656 4.66666 5.76418 4.64356 5.62823 4.59824L4.69841 4.2883C4.18189 4.11613 3.8335 3.63275 3.8335 3.0883Z" fill="white"/>
                                    </svg>
                                    <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>#5,000,000</p>
                                </div>

                                <div className='flex items-center justify-center gap-1 bg-[#33363F] rounded-[15px] w-[104px]  p-[6px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 9.33333C14.5 12.647 11.8137 15.3333 8.5 15.3333C5.18629 15.3333 2.5 12.647 2.5 9.33333C2.5 6.01962 5.18629 3.33333 8.5 3.33333C11.8137 3.33333 14.5 6.01962 14.5 9.33333ZM8.5 12.6666C10.341 12.6666 11.8333 11.1742 11.8333 9.33329C11.8333 7.49234 10.341 5.99995 8.5 5.99995C6.65905 5.99995 5.16667 7.49234 5.16667 9.33329C5.16667 11.1742 6.65905 12.6666 8.5 12.6666ZM8.5 14C11.0773 14 13.1667 11.9106 13.1667 9.33329C13.1667 6.75596 11.0773 4.66662 8.5 4.66662C5.92267 4.66662 3.83333 6.75596 3.83333 9.33329C3.83333 11.9106 5.92267 14 8.5 14ZM9.16667 7.33329C9.16667 6.9651 8.86819 6.66662 8.5 6.66662C8.13181 6.66662 7.83333 6.9651 7.83333 7.33329V9.33329C7.83333 9.70148 8.13181 9.99995 8.5 9.99995C8.86819 9.99995 9.16667 9.70148 9.16667 9.33329L9.16667 7.33329Z" fill="white"/>
                                        <path d="M12.1665 5L13.1665 4" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                        <path d="M7.21226 1.58039C7.28823 1.50951 7.45562 1.44688 7.68848 1.40221C7.92134 1.35754 8.20665 1.33333 8.50016 1.33333C8.79367 1.33333 9.07899 1.35754 9.31184 1.40221C9.5447 1.44688 9.7121 1.50951 9.78806 1.58039" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                    </svg>
                                    <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>20:30:15</p>
                                </div>

                                <div className='flex items-center justify-center gap-1 bg-[#E5E5E5] rounded-[15px] w-[104px]  p-[6px]'>
                                    {
                                        item?.open === 1 ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2244 4.38986C10.4656 4.14899 10.7987 4.00003 11.1665 4.00003C11.9029 4.00003 12.4998 4.59699 12.4998 5.33337C12.4998 5.7012 12.3509 6.03425 12.11 6.27548C11.7158 5.4518 11.0481 4.78404 10.2244 4.38986ZM7.33788 4.17142C7.50769 3.61116 7.79711 3.1029 8.17642 2.67635C5.3815 2.84352 3.1665 5.16311 3.1665 8.00003C3.1665 10.9456 5.55432 13.3334 8.49984 13.3334C11.3368 13.3334 13.6563 11.1184 13.8235 8.32345C13.397 8.70276 12.8887 8.99218 12.3285 9.16199C11.8306 10.8044 10.3049 12 8.49984 12C6.2907 12 4.49984 10.2092 4.49984 8.00003C4.49984 6.19501 5.69543 4.66923 7.33788 4.17142Z" fill="#00AA55"/>
                                            <circle cx="11.1667" cy="5.33334" r="2.66667" fill="#00AA55"/>
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2244 4.38986C10.4656 4.14899 10.7987 4.00003 11.1665 4.00003C11.9029 4.00003 12.4998 4.59699 12.4998 5.33337C12.4998 5.7012 12.3509 6.03425 12.11 6.27548C11.7158 5.4518 11.0481 4.78404 10.2244 4.38986ZM7.33788 4.17142C7.50769 3.61116 7.79711 3.1029 8.17642 2.67635C5.3815 2.84352 3.1665 5.16311 3.1665 8.00003C3.1665 10.9456 5.55432 13.3334 8.49984 13.3334C11.3368 13.3334 13.6563 11.1184 13.8235 8.32345C13.397 8.70276 12.8887 8.99218 12.3285 9.16199C11.8306 10.8044 10.3049 12 8.49984 12C6.2907 12 4.49984 10.2092 4.49984 8.00003C4.49984 6.19501 5.69543 4.66923 7.33788 4.17142Z" fill="#33363F"/>
                                            <circle cx="11.1667" cy="5.33334" r="2.66667" fill="#33363F"/>
                                        </svg>
                                    }
                                    <p className={`${item?.open === 1 ? "text-[#00AA55]" : "text-[#33363F]"}  text-xs font-manja mt-1 font-bold`}>{item?.open === 1 ? "Ongoing" : "Finished" }</p>
                                </div>

                            </div>
                            <div className='flex flex-col gap-2 px-4'>
                                <p className='font-manja text-[20px] font-bold text-[#000000] capitalize'>{item?.title}</p>
                                <p className='opacity-40 text-[#000] font-mont_alt font-medium text-sm'>
                                    {item?.desc}
                                </p>
                                <div className='bg-[#f8a4012e] w-[128px] p-2.5 flex items-center justify-center rounded-xl'>
                                    <p className='text-[#DC6803] text-xs font-mont'>Photo Hackathon</p>
                                </div>
                                <button onClick={() => {navigate("/hackathon/details", { state: item }); window.scroll(0, 0)}} className='bg-[#fff] rounded-[8px] border w-[124px] py-2 px-[15px] border-[#0A5]'>
                                    <p className='font-mont_alt font-semibold text-[#0A5] text-sm '>View Details</p>
                                </button>

                            </div>

                        </div>     
                    ))
                    :
                    <p className='font-mont_alt font-bold text-[24px] text-[#070807]'>No Contest Available</p>
                }
            </div>
            {/* <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-0 justify-between'>
                <div className='lg:w-[370px] h-[425px] flex flex-col border border-[#E8F2EA] '>
                    <img src={Camera} alt='Camera' />
                    <div className='flex items-center relative -top-4 left-1 gap-4'>
                        <div className='flex items-center justify-center gap-1 bg-[#0A5] rounded-[15px] w-[104px]  p-[6px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.83333 5.33333H3.83333C3.20479 5.33333 2.89052 5.33333 2.69526 5.52859C2.5 5.72385 2.5 6.03812 2.5 6.66666V7.33333C2.5 7.96187 2.5 8.27614 2.69526 8.4714C2.87899 8.65512 3.16807 8.66598 3.72516 8.66662H7.83333V5.33333ZM4.5 9.99995V12.6667C4.5 13.2952 4.5 13.6095 4.69526 13.8047C4.89052 14 5.20479 14 5.83333 14H7.83333V9.99995H4.5ZM9.16667 14H11.1667C11.7952 14 12.1095 14 12.3047 13.8047C12.5 13.6095 12.5 13.2952 12.5 12.6667V9.99995H9.16667V14ZM13.2748 8.66662C13.8319 8.66598 14.121 8.65512 14.3047 8.4714C14.5 8.27614 14.5 7.96187 14.5 7.33333V6.66666C14.5 6.03812 14.5 5.72385 14.3047 5.52859C14.1095 5.33333 13.7952 5.33333 13.1667 5.33333H9.16667V8.66662H13.2748Z" fill="white"/>
                                <path d="M13.1665 3.0883V2.96689C13.1665 2.16324 12.3792 1.59577 11.6168 1.84991C10.663 2.16782 9.79641 2.70342 9.08554 3.41429L8.49984 3.99999V4.66666H10.9501C11.0934 4.66666 11.2358 4.64356 11.3718 4.59824L12.3016 4.2883C12.8181 4.11613 13.1665 3.63275 13.1665 3.0883Z" fill="white"/>
                                <path d="M3.8335 3.0883V2.96689C3.8335 2.16324 4.62082 1.59577 5.38323 1.84991C6.33697 2.16782 7.20359 2.70342 7.91446 3.41429L8.50016 3.99999V4.66666H6.04987C5.90656 4.66666 5.76418 4.64356 5.62823 4.59824L4.69841 4.2883C4.18189 4.11613 3.8335 3.63275 3.8335 3.0883Z" fill="white"/>
                            </svg>
                            <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>#5,000,000</p>
                        </div>

                        <div className='flex items-center justify-center gap-1 bg-[#33363F] rounded-[15px] w-[104px]  p-[6px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 9.33333C14.5 12.647 11.8137 15.3333 8.5 15.3333C5.18629 15.3333 2.5 12.647 2.5 9.33333C2.5 6.01962 5.18629 3.33333 8.5 3.33333C11.8137 3.33333 14.5 6.01962 14.5 9.33333ZM8.5 12.6666C10.341 12.6666 11.8333 11.1742 11.8333 9.33329C11.8333 7.49234 10.341 5.99995 8.5 5.99995C6.65905 5.99995 5.16667 7.49234 5.16667 9.33329C5.16667 11.1742 6.65905 12.6666 8.5 12.6666ZM8.5 14C11.0773 14 13.1667 11.9106 13.1667 9.33329C13.1667 6.75596 11.0773 4.66662 8.5 4.66662C5.92267 4.66662 3.83333 6.75596 3.83333 9.33329C3.83333 11.9106 5.92267 14 8.5 14ZM9.16667 7.33329C9.16667 6.9651 8.86819 6.66662 8.5 6.66662C8.13181 6.66662 7.83333 6.9651 7.83333 7.33329V9.33329C7.83333 9.70148 8.13181 9.99995 8.5 9.99995C8.86819 9.99995 9.16667 9.70148 9.16667 9.33329L9.16667 7.33329Z" fill="white"/>
                                <path d="M12.1665 5L13.1665 4" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                <path d="M7.21226 1.58039C7.28823 1.50951 7.45562 1.44688 7.68848 1.40221C7.92134 1.35754 8.20665 1.33333 8.50016 1.33333C8.79367 1.33333 9.07899 1.35754 9.31184 1.40221C9.5447 1.44688 9.7121 1.50951 9.78806 1.58039" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                            </svg>
                            <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>20:30:15</p>
                        </div>

                        <div className='flex items-center justify-center gap-1 bg-[#E5E5E5] rounded-[15px] w-[104px]  p-[6px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2244 4.38986C10.4656 4.14899 10.7987 4.00003 11.1665 4.00003C11.9029 4.00003 12.4998 4.59699 12.4998 5.33337C12.4998 5.7012 12.3509 6.03425 12.11 6.27548C11.7158 5.4518 11.0481 4.78404 10.2244 4.38986ZM7.33788 4.17142C7.50769 3.61116 7.79711 3.1029 8.17642 2.67635C5.3815 2.84352 3.1665 5.16311 3.1665 8.00003C3.1665 10.9456 5.55432 13.3334 8.49984 13.3334C11.3368 13.3334 13.6563 11.1184 13.8235 8.32345C13.397 8.70276 12.8887 8.99218 12.3285 9.16199C11.8306 10.8044 10.3049 12 8.49984 12C6.2907 12 4.49984 10.2092 4.49984 8.00003C4.49984 6.19501 5.69543 4.66923 7.33788 4.17142Z" fill="#33363F"/>
                                <circle cx="11.1667" cy="5.33334" r="2.66667" fill="#33363F"/>
                            </svg>
                            <p className='text-[#33363F] text-xs font-manja mt-1 font-bold'>Finished</p>
                        </div>

                    </div>
                    <div className='flex flex-col gap-2 px-4'>
                        <p className='font-manja text-[20px] font-bold text-[#000000]'>Photo Hackathon</p>
                        <p className='opacity-40 text-[#000] font-mont_alt font-medium text-sm'>
                            Create an engaging photo contest that showcases your brand and captivates your audience.
                        </p>
                        <div className='bg-[#f8a4012e] w-[128px] p-2.5 flex items-center justify-center rounded-xl'>
                            <p className='text-[#DC6803] text-xs font-mont'>Photo Hackathon</p>
                        </div>
                        <button className='bg-[#fff] rounded-[8px] border w-[124px] py-2 px-[15px] border-[#0A5]'>
                            <p className='font-mont_alt font-semibold text-[#0A5] text-sm '>View Details</p>
                        </button>

                    </div>

                </div>

                <div className='lg:w-[370px] h-[425px] flex flex-col border border-[#E8F2EA] '>
                    <img src={OriginSmall} alt='Camera' />
                    <div className='flex items-center relative -top-4 left-1 gap-4'>
                        <div className='flex items-center justify-center gap-1 bg-[#0A5] rounded-[15px] w-[104px]  p-[6px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.83333 5.33333H3.83333C3.20479 5.33333 2.89052 5.33333 2.69526 5.52859C2.5 5.72385 2.5 6.03812 2.5 6.66666V7.33333C2.5 7.96187 2.5 8.27614 2.69526 8.4714C2.87899 8.65512 3.16807 8.66598 3.72516 8.66662H7.83333V5.33333ZM4.5 9.99995V12.6667C4.5 13.2952 4.5 13.6095 4.69526 13.8047C4.89052 14 5.20479 14 5.83333 14H7.83333V9.99995H4.5ZM9.16667 14H11.1667C11.7952 14 12.1095 14 12.3047 13.8047C12.5 13.6095 12.5 13.2952 12.5 12.6667V9.99995H9.16667V14ZM13.2748 8.66662C13.8319 8.66598 14.121 8.65512 14.3047 8.4714C14.5 8.27614 14.5 7.96187 14.5 7.33333V6.66666C14.5 6.03812 14.5 5.72385 14.3047 5.52859C14.1095 5.33333 13.7952 5.33333 13.1667 5.33333H9.16667V8.66662H13.2748Z" fill="white"/>
                                <path d="M13.1665 3.0883V2.96689C13.1665 2.16324 12.3792 1.59577 11.6168 1.84991C10.663 2.16782 9.79641 2.70342 9.08554 3.41429L8.49984 3.99999V4.66666H10.9501C11.0934 4.66666 11.2358 4.64356 11.3718 4.59824L12.3016 4.2883C12.8181 4.11613 13.1665 3.63275 13.1665 3.0883Z" fill="white"/>
                                <path d="M3.8335 3.0883V2.96689C3.8335 2.16324 4.62082 1.59577 5.38323 1.84991C6.33697 2.16782 7.20359 2.70342 7.91446 3.41429L8.50016 3.99999V4.66666H6.04987C5.90656 4.66666 5.76418 4.64356 5.62823 4.59824L4.69841 4.2883C4.18189 4.11613 3.8335 3.63275 3.8335 3.0883Z" fill="white"/>
                            </svg>
                            <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>#5,000,000</p>
                        </div>

                        <div className='flex items-center justify-center gap-1 bg-[#33363F] rounded-[15px] w-[104px]  p-[6px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 9.33333C14.5 12.647 11.8137 15.3333 8.5 15.3333C5.18629 15.3333 2.5 12.647 2.5 9.33333C2.5 6.01962 5.18629 3.33333 8.5 3.33333C11.8137 3.33333 14.5 6.01962 14.5 9.33333ZM8.5 12.6666C10.341 12.6666 11.8333 11.1742 11.8333 9.33329C11.8333 7.49234 10.341 5.99995 8.5 5.99995C6.65905 5.99995 5.16667 7.49234 5.16667 9.33329C5.16667 11.1742 6.65905 12.6666 8.5 12.6666ZM8.5 14C11.0773 14 13.1667 11.9106 13.1667 9.33329C13.1667 6.75596 11.0773 4.66662 8.5 4.66662C5.92267 4.66662 3.83333 6.75596 3.83333 9.33329C3.83333 11.9106 5.92267 14 8.5 14ZM9.16667 7.33329C9.16667 6.9651 8.86819 6.66662 8.5 6.66662C8.13181 6.66662 7.83333 6.9651 7.83333 7.33329V9.33329C7.83333 9.70148 8.13181 9.99995 8.5 9.99995C8.86819 9.99995 9.16667 9.70148 9.16667 9.33329L9.16667 7.33329Z" fill="white"/>
                                <path d="M12.1665 5L13.1665 4" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                <path d="M7.21226 1.58039C7.28823 1.50951 7.45562 1.44688 7.68848 1.40221C7.92134 1.35754 8.20665 1.33333 8.50016 1.33333C8.79367 1.33333 9.07899 1.35754 9.31184 1.40221C9.5447 1.44688 9.7121 1.50951 9.78806 1.58039" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                            </svg>
                            <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>20:30:15</p>
                        </div>

                        <div className='flex items-center justify-center gap-1 bg-[#E5E5E5] rounded-[15px] w-[104px]  p-[6px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2244 4.38986C10.4656 4.14899 10.7987 4.00003 11.1665 4.00003C11.9029 4.00003 12.4998 4.59699 12.4998 5.33337C12.4998 5.7012 12.3509 6.03425 12.11 6.27548C11.7158 5.4518 11.0481 4.78404 10.2244 4.38986ZM7.33788 4.17142C7.50769 3.61116 7.79711 3.1029 8.17642 2.67635C5.3815 2.84352 3.1665 5.16311 3.1665 8.00003C3.1665 10.9456 5.55432 13.3334 8.49984 13.3334C11.3368 13.3334 13.6563 11.1184 13.8235 8.32345C13.397 8.70276 12.8887 8.99218 12.3285 9.16199C11.8306 10.8044 10.3049 12 8.49984 12C6.2907 12 4.49984 10.2092 4.49984 8.00003C4.49984 6.19501 5.69543 4.66923 7.33788 4.17142Z" fill="#00AA55"/>
                                <circle cx="11.1667" cy="5.33334" r="2.66667" fill="#00AA55"/>
                            </svg>
                            <p className='text-[#00AA55] text-xs font-manja mt-1 font-bold'>On-going</p>
                        </div>

                    </div>
                    <div className='flex flex-col gap-2 px-4'>
                        <p className='font-manja text-[20px] font-bold text-[#000000]'>The Origin of Nigeria Photo Contest</p>
                        <p className='opacity-40 text-[#000] font-mont_alt font-medium text-sm'>
                            Create an engaging photo contest that showcases your brand and captivates your audience.
                        </p>
                        <div className='bg-[#f8a4012e] w-[128px] p-2.5 flex items-center justify-center rounded-xl'>
                            <p className='text-[#DC6803] text-xs font-mont'>Photo Hackathon</p>
                        </div>
                        <button onClick={() => {navigate("/hackathon/details"); window.scroll(0, 0)}} className='bg-[#fff] rounded-[8px] border w-[124px] py-2 px-[15px] border-[#0A5]'>
                            <p className='font-mont_alt font-semibold text-[#0A5] text-sm '>View Details</p>
                        </button>

                    </div>

                </div>

                <div className='lg:w-[370px] h-[425px] flex flex-col border border-[#E8F2EA] '>
                    <img src={Biker} alt='Biker' />
                    <div className='flex items-center relative -top-4 left-1 gap-4'>
                        <div className='flex items-center justify-center gap-1 bg-[#0A5] rounded-[15px] w-[104px]  p-[6px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.83333 5.33333H3.83333C3.20479 5.33333 2.89052 5.33333 2.69526 5.52859C2.5 5.72385 2.5 6.03812 2.5 6.66666V7.33333C2.5 7.96187 2.5 8.27614 2.69526 8.4714C2.87899 8.65512 3.16807 8.66598 3.72516 8.66662H7.83333V5.33333ZM4.5 9.99995V12.6667C4.5 13.2952 4.5 13.6095 4.69526 13.8047C4.89052 14 5.20479 14 5.83333 14H7.83333V9.99995H4.5ZM9.16667 14H11.1667C11.7952 14 12.1095 14 12.3047 13.8047C12.5 13.6095 12.5 13.2952 12.5 12.6667V9.99995H9.16667V14ZM13.2748 8.66662C13.8319 8.66598 14.121 8.65512 14.3047 8.4714C14.5 8.27614 14.5 7.96187 14.5 7.33333V6.66666C14.5 6.03812 14.5 5.72385 14.3047 5.52859C14.1095 5.33333 13.7952 5.33333 13.1667 5.33333H9.16667V8.66662H13.2748Z" fill="white"/>
                                <path d="M13.1665 3.0883V2.96689C13.1665 2.16324 12.3792 1.59577 11.6168 1.84991C10.663 2.16782 9.79641 2.70342 9.08554 3.41429L8.49984 3.99999V4.66666H10.9501C11.0934 4.66666 11.2358 4.64356 11.3718 4.59824L12.3016 4.2883C12.8181 4.11613 13.1665 3.63275 13.1665 3.0883Z" fill="white"/>
                                <path d="M3.8335 3.0883V2.96689C3.8335 2.16324 4.62082 1.59577 5.38323 1.84991C6.33697 2.16782 7.20359 2.70342 7.91446 3.41429L8.50016 3.99999V4.66666H6.04987C5.90656 4.66666 5.76418 4.64356 5.62823 4.59824L4.69841 4.2883C4.18189 4.11613 3.8335 3.63275 3.8335 3.0883Z" fill="white"/>
                            </svg>
                            <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>#5,000,000</p>
                        </div>

                        <div className='flex items-center justify-center gap-1 bg-[#33363F] rounded-[15px] w-[104px]  p-[6px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 9.33333C14.5 12.647 11.8137 15.3333 8.5 15.3333C5.18629 15.3333 2.5 12.647 2.5 9.33333C2.5 6.01962 5.18629 3.33333 8.5 3.33333C11.8137 3.33333 14.5 6.01962 14.5 9.33333ZM8.5 12.6666C10.341 12.6666 11.8333 11.1742 11.8333 9.33329C11.8333 7.49234 10.341 5.99995 8.5 5.99995C6.65905 5.99995 5.16667 7.49234 5.16667 9.33329C5.16667 11.1742 6.65905 12.6666 8.5 12.6666ZM8.5 14C11.0773 14 13.1667 11.9106 13.1667 9.33329C13.1667 6.75596 11.0773 4.66662 8.5 4.66662C5.92267 4.66662 3.83333 6.75596 3.83333 9.33329C3.83333 11.9106 5.92267 14 8.5 14ZM9.16667 7.33329C9.16667 6.9651 8.86819 6.66662 8.5 6.66662C8.13181 6.66662 7.83333 6.9651 7.83333 7.33329V9.33329C7.83333 9.70148 8.13181 9.99995 8.5 9.99995C8.86819 9.99995 9.16667 9.70148 9.16667 9.33329L9.16667 7.33329Z" fill="white"/>
                                <path d="M12.1665 5L13.1665 4" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                                <path d="M7.21226 1.58039C7.28823 1.50951 7.45562 1.44688 7.68848 1.40221C7.92134 1.35754 8.20665 1.33333 8.50016 1.33333C8.79367 1.33333 9.07899 1.35754 9.31184 1.40221C9.5447 1.44688 9.7121 1.50951 9.78806 1.58039" stroke="white" stroke-width="1.33333" stroke-linecap="round"/>
                            </svg>
                            <p className='text-[#fff] text-xs font-manja mt-1 font-bold'>20:30:15</p>
                        </div>

                        <div className='flex items-center justify-center gap-1 bg-[#E5E5E5] rounded-[15px] w-[104px]  p-[6px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2244 4.38986C10.4656 4.14899 10.7987 4.00003 11.1665 4.00003C11.9029 4.00003 12.4998 4.59699 12.4998 5.33337C12.4998 5.7012 12.3509 6.03425 12.11 6.27548C11.7158 5.4518 11.0481 4.78404 10.2244 4.38986ZM7.33788 4.17142C7.50769 3.61116 7.79711 3.1029 8.17642 2.67635C5.3815 2.84352 3.1665 5.16311 3.1665 8.00003C3.1665 10.9456 5.55432 13.3334 8.49984 13.3334C11.3368 13.3334 13.6563 11.1184 13.8235 8.32345C13.397 8.70276 12.8887 8.99218 12.3285 9.16199C11.8306 10.8044 10.3049 12 8.49984 12C6.2907 12 4.49984 10.2092 4.49984 8.00003C4.49984 6.19501 5.69543 4.66923 7.33788 4.17142Z" fill="#00AA55"/>
                                <circle cx="11.1667" cy="5.33334" r="2.66667" fill="#00AA55"/>
                            </svg>
                            <p className='text-[#00AA55] text-xs font-manja mt-1 font-bold'>On-going</p>
                        </div>

                    </div>
                    <div className='flex flex-col gap-2 px-4'>
                        <p className='font-manja text-[20px] font-bold text-[#000000]'>Photo Hackathon</p>
                        <p className='opacity-40 text-[#000] font-mont_alt font-medium text-sm'>
                            Create an engaging photo contest that showcases your brand and captivates your audience.
                        </p>
                        <div className='bg-[#f8a4012e] w-[128px] p-2.5 flex items-center justify-center rounded-xl'>
                            <p className='text-[#DC6803] text-xs font-mont'>Photo Hackathon</p>
                        </div>
                        <button className='bg-[#fff] rounded-[8px] border w-[124px] py-2 px-[15px] border-[#0A5]'>
                            <p className='font-mont_alt font-semibold text-[#0A5] text-sm '>View Details</p>
                        </button>

                    </div>
                </div>

            </div> */}
        </div>

        <div className='flex flex-col gap-6 mt-[72px]  px-5 lg:px-[100px]'>
            <div className='flex justify-between items-center'>
                <p className='font-mont_alt font-bold text-[24px] text-[#070807]'>Quizzes</p>
                <p className='font-mont_alt font-bold text-[14px] text-[#00AA55] cursor-pointer' onClick={() => navigate("/quiz/view/all")}>See more</p>
            </div>
          
            <div  className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 '>
                {
                    // loading ?
                    // <Skeleton variant="rectangular" width={window.innerWidth < 786 ? 200 : 286} height={350} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} />
                    // :
                    allQuizzes?.length > 0 ?
                    allQuizzes?.slice(0, 3).map((item, index) => (
                        <div key={item?.id} className='lg:w-[370px] bg-[#fff] h-[480px]  p-2 flex flex-col border border-[#E8F2EA] rounded-tl-xl rounded-tr-xl'>
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
                                {/* <div className='bg-[#f8a4012e] w-[128px] p-2.5 flex items-center justify-center rounded-xl'>
                                    <p className='text-[#DC6803] text-xs font-mont'>Personality</p>
                                </div> */}
                                <button type='button' onClick={() => {navigate("/quiz", {state: item}); window.scrollTo(0, 0)}} className='bg-[#027315] rounded-[8px] border w-[124px] py-2 px-[15px] border-[#00AA55]'>
                                    <p className='font-mont_alt font-semibold text-[#fff] text-sm '>View Details</p>
                                </button>

                            </div>

                        </div>
                    )) 
                    :
                    <p className='font-mont_alt font-bold text-[24px] text-[#070807]'>No Quiz Available</p>
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

export default Hackathon