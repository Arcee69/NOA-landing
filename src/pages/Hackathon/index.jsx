import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

import Nigeria from "../../assets/png/nigeria.png"
import Origin from "../../assets/png/origin.png"
import OriginSmall from "../../assets/png/origin_small.png"
import Trophy from "../../assets/png/trophy_large.png"
import Camera from "../../assets/png/camera.png"
import Biker from "../../assets/png/biker.png"
import axios from 'axios';


const Hackathon = () => {
    const [text, setText] = useState("")
    const [allContest, setAllContest] = useState([])

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
        await axios.get("https://hackathon.smhptech.com/api/contest")
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


  return (
    <div className='flex flex-col mt-[32px] mb-[47px]'>
        <div className='flex items-center justify-between mt-10 lg:mt-0 px-5 lg:px-[100px]'>
            <p className='text-[#222] hidden lg:flex font-manja text-[32px]'>Hackathon</p>
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

        <div className='w-full py-[108px]'>
            <Slider {...settings}>
                <div className='w-full'>
                    <div className='flex flex-col lg:flex-row items-center lg:justify-between px-5 lg:px-[100px]'>
                        <div className='flex flex-col lg:flex-row items-center gap-[42px]'>
                            <img src={Nigeria} alt='Nigeria' className='w-[256px] h-[249px]' />
                            <img src={Origin} alt='Origin' className='lg:w-[401px]' />
                        </div>
                        <div className='lg:w-[376px] gap-[43px] h-[348px] mt-10 lg:mt-0 rounded-xl flex flex-col items-center justify-center border border-[#A5A5A5]'>
                            <div className='flex items-center gap-6'>
                                <div className='bg-[#ECF9EE] w-[62px] flex flex-col items-center rounded-lg py-1.5 gap-2.5'>
                                    <p className='font-mont_alt text-[#000000] text-[23px] font-bold'>{timeLeft.days || '0'}</p>
                                    <p className='text-[#686868] text-xs font-mont_alt font-semibold'>Day</p>
                                </div>
                                <div className='bg-[#ECF9EE] w-[62px]  flex flex-col items-center rounded-lg py-1.5 gap-2.5'>
                                    <p className='font-mont_alt text-[#000000] text-[23px] font-bold'>{timeLeft.hours || '0'}</p>
                                    <p className='text-[#686868] text-xs font-mont_alt font-semibold'>Hours</p>
                                </div>
                                <div className='bg-[#ECF9EE] w-[62px]  flex flex-col items-center rounded-lg py-1.5 gap-2.5'>
                                    <p className='font-mont_alt text-[#000000] text-[23px] font-bold'>{timeLeft.minutes || '0'}</p>
                                    <p className='text-[#686868] text-xs font-mont_alt font-semibold'>Mins</p>
                                </div>
                                <div className='bg-[#ECF9EE] w-[62px] flex flex-col items-center rounded-lg py-1.5 gap-2.5'>
                                    <p className='font-mont_alt text-[#000000] text-[23px] font-bold'>{timeLeft.seconds || '0'}</p>
                                    <p className='text-[#686868] text-xs font-mont_alt font-semibold'>Secs</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <button className='w-[310px] flex items-center justify-center h-[51px] bg-[#027315] text-[#FFFFFF] font-manja text-base font-bold rounded-lg'>
                                    Enter Contest
                                </button>
                                <button className='bg-[#1E1E1EB8] rounded-lg w-[310px] flex items-center justify-center h-[51px] text-[#FFFFFF] font-manja text-base font-bold'>
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full'>
                    <div className='flex flex-col lg:flex-row items-center justify-between px-5 lg:px-[100px]'>
                        <div className='flex flex-col w-full lg:w-[501px] h-[271px] gap-[48px]'>
                            <p className='text-[#33363F] text-[40px] lg:text-[90px] font-bebas leading-[40px] lg:leading-[90px] font-medium'>All about NOA Hackathons</p>
                            <button className='rounded-lg bg-[#027315] w-[310px] h-[43px] flex items-center justify-center text-[#fff]'>
                                Read Article
                            </button>
                        </div>
                        <img src={Trophy} alt='Trophy' className='lg:w-[500px] lg:h-[600px]' />
                    </div>

                </div>
            </Slider>
        </div>

        <div className='flex flex-col gap-[32px] px-5 lg:px-[100px]'>
            <div className='flex justify-between items-center'>
                <p className='font-mont_alt font-bold text-[24px] text-[#070807]'>Categories</p>
                <p className='font-mont_alt font-bold text-sm text-[#00AA55]'>Browse Hackathons</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between'>
                <div className='flex flex-col gap-3'>
                    <div className='bg-[#004D40] w-[360px] h-[120px] rounded-[12px] flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="70" viewBox="0 0 71 70" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8327 17.8474L27.9539 13.7262L34.1489 19.9212L42.4031 11.667L46.5185 15.7854L39.3318 22.972H52.9993C54.5464 22.972 56.0302 23.5866 57.1241 24.6806C58.2181 25.7745 58.8327 27.2583 58.8327 28.8054V49.222C58.8327 50.7691 58.2181 52.2528 57.1241 53.3468C56.0302 54.4408 54.5464 55.0554 52.9993 55.0554H17.9993C16.4523 55.0554 14.9685 54.4408 13.8746 53.3468C12.7806 52.2528 12.166 50.7691 12.166 49.222V28.8054C12.166 27.2583 12.7806 25.7745 13.8746 24.6806C14.9685 23.5866 16.4523 22.972 17.9993 22.972H28.9573L23.8327 17.8474ZM52.9993 28.8054H17.9993V49.222H52.9993V28.8054Z" fill="#CFCFCF"/>
                            <path d="M23.832 57.972H47.1654V60.8886H23.832V57.972Z" fill="#CFCFCF"/>
                        </svg>
                    </div>
                    <p className='text-[#5D5959] text-[20px] font-medium font-mont_alt'>Photo Hackathon</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='bg-[#004D40] w-[360px] h-[120px] rounded-[12px] flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="70" viewBox="0 0 71 70" fill="none">
                            <path d="M17.5002 60C16.2168 60 15.1186 59.5434 14.2055 58.6303C13.2924 57.7172 12.8351 56.6182 12.8335 55.3333V27.3333C12.8335 26.3611 13.0964 25.4861 13.6222 24.7083C14.1479 23.9306 14.8573 23.3667 15.7502 23.0167L45.2668 11L46.7835 14.85L27.5335 22.6667H54.8335C56.1168 22.6667 57.2158 23.124 58.1305 24.0387C59.0452 24.9533 59.5017 26.0516 59.5002 27.3333V55.3333C59.5002 56.6167 59.0436 57.7157 58.1305 58.6303C57.2174 59.545 56.1184 60.0015 54.8335 60H17.5002ZM17.5002 55.3333H54.8335V39H17.5002V55.3333ZM26.8335 53C28.4668 53 29.8474 52.4361 30.9752 51.3083C32.1029 50.1805 32.6668 48.8 32.6668 47.1667C32.6668 45.5333 32.1029 44.1528 30.9752 43.025C29.8474 41.8972 28.4668 41.3333 26.8335 41.3333C25.2002 41.3333 23.8196 41.8972 22.6918 43.025C21.5641 44.1528 21.0002 45.5333 21.0002 47.1667C21.0002 48.8 21.5641 50.1805 22.6918 51.3083C23.8196 52.4361 25.2002 53 26.8335 53ZM17.5002 34.3333H45.5002V29.6667H50.1668V34.3333H54.8335V27.3333H17.5002V34.3333Z" fill="#CFCFCF"/>
                        </svg>
                    </div>
                    <p className='text-[#5D5959] text-[20px] font-medium font-mont_alt'>Video Hackathons</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='bg-[#004D40] w-[360px] h-[120px] rounded-[12px] flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="70" viewBox="0 0 71 70" fill="none">
                            <path d="M35.1679 38.8109C37.3425 38.8109 39.1054 37.0481 39.1054 34.8735C39.1054 32.6989 37.3425 30.936 35.1679 30.936C32.9933 30.936 31.2305 32.6989 31.2305 34.8735C31.2305 37.0481 32.9933 38.8109 35.1679 38.8109Z" fill="#CFCFCF"/>
                            <path d="M27.9748 44.2545C27.6347 44.2548 27.2984 44.1831 26.9881 44.0439C26.6778 43.9048 26.4005 43.7015 26.1745 43.4473C24.0754 41.0851 22.916 38.0348 22.916 34.8747C22.916 31.7145 24.0754 28.6642 26.1745 26.302C26.3827 26.0596 26.6371 25.8611 26.9228 25.7181C27.2085 25.575 27.5198 25.4904 27.8386 25.4689C28.1574 25.4475 28.4773 25.4898 28.7795 25.5933C29.0818 25.6969 29.3604 25.8596 29.5992 26.0719C29.8379 26.2843 30.0319 26.5421 30.17 26.8302C30.308 27.1184 30.3873 27.4311 30.4031 27.7502C30.419 28.0694 30.3711 28.3884 30.2624 28.6889C30.1536 28.9893 29.9861 29.2651 29.7696 29.5C28.4538 30.9813 27.727 32.8939 27.727 34.8752C27.727 36.8565 28.4538 38.7691 29.7696 40.2504C30.0775 40.597 30.2787 41.0252 30.349 41.4834C30.4193 41.9417 30.3557 42.4105 30.1659 42.8335C29.9761 43.2565 29.6681 43.6156 29.279 43.8677C28.8899 44.1198 28.4362 44.2541 27.9726 44.2545H27.9748ZM42.3596 44.2545C41.896 44.2541 41.4423 44.1198 41.0532 43.8677C40.6641 43.6156 40.3561 43.2565 40.1663 42.8335C39.9765 42.4105 39.9129 41.9417 39.9832 41.4834C40.0535 41.0252 40.2547 40.597 40.5626 40.2504C41.8784 38.7691 42.6052 36.8565 42.6052 34.8752C42.6052 32.8939 41.8784 30.9813 40.5626 29.5C40.3461 29.2651 40.1786 28.9893 40.0698 28.6889C39.9611 28.3884 39.9132 28.0694 39.9291 27.7502C39.9449 27.4311 40.0242 27.1184 40.1622 26.8302C40.3003 26.5421 40.4943 26.2843 40.733 26.0719C40.9718 25.8596 41.2504 25.6969 41.5527 25.5933C41.8549 25.4898 42.1748 25.4475 42.4936 25.4689C42.8124 25.4904 43.1237 25.575 43.4094 25.7181C43.6951 25.8611 43.9495 26.0596 44.1577 26.302C46.2568 28.6642 47.4162 31.7145 47.4162 34.8747C47.4162 38.0348 46.2568 41.0851 44.1577 43.4473C43.9319 43.7012 43.655 43.9044 43.3451 44.0435C43.0352 44.1826 42.6993 44.2545 42.3596 44.2545Z" fill="#CFCFCF"/>
                            <path d="M22.4028 49.8272C22.0727 49.8275 21.7461 49.7597 21.4435 49.6279C21.1409 49.4962 20.8687 49.3034 20.644 49.0616C17.046 45.2123 15.0444 40.14 15.0444 34.8709C15.0444 29.6019 17.046 24.5295 20.644 20.6803C20.8594 20.4475 21.1186 20.2596 21.4069 20.1274C21.6951 19.9951 22.0066 19.9212 22.3235 19.9098C22.6404 19.8983 22.9565 19.9497 23.2535 20.0608C23.5505 20.1719 23.8226 20.3407 24.0541 20.5573C24.2857 20.774 24.4722 21.0342 24.6028 21.3232C24.7334 21.6121 24.8057 21.9241 24.8153 22.241C24.825 22.558 24.7719 22.8738 24.6592 23.1701C24.5464 23.4665 24.3761 23.7377 24.1582 23.968C21.3939 26.9258 19.8562 30.8231 19.8562 34.8715C19.8562 38.9199 21.3939 42.8172 24.1582 45.7749C24.4776 46.1175 24.69 46.5459 24.7694 47.0076C24.8488 47.4692 24.7918 47.9439 24.6053 48.3736C24.4188 48.8032 24.1109 49.1691 23.7195 49.4264C23.3281 49.6836 22.8701 49.821 22.4017 49.8217L22.4028 49.8272ZM47.9327 49.8272C47.4643 49.8265 47.0063 49.6891 46.6149 49.4318C46.2234 49.1746 45.9156 48.8087 45.7291 48.379C45.5426 47.9494 45.4856 47.4746 45.565 47.013C45.6444 46.5514 45.8568 46.123 46.1762 45.7804C48.9404 42.8226 50.4781 38.9253 50.4781 34.8769C50.4781 30.8285 48.9404 26.9313 46.1762 23.9735C45.9582 23.7431 45.788 23.472 45.6752 23.1756C45.5624 22.8792 45.5094 22.5635 45.519 22.2465C45.5287 21.9295 45.6009 21.6176 45.7316 21.3287C45.8622 21.0397 46.0487 20.7794 46.2802 20.5628C46.5118 20.3461 46.7839 20.1774 47.0809 20.0663C47.3779 19.9551 47.6939 19.9038 48.0108 19.9152C48.3277 19.9267 48.6393 20.0006 48.9275 20.1329C49.2157 20.2651 49.475 20.453 49.6903 20.6857C53.2884 24.535 55.2899 29.6073 55.2899 34.8764C55.2899 40.1455 53.2884 45.2178 49.6903 49.067C49.4653 49.3077 49.1931 49.4994 48.8907 49.6302C48.5883 49.761 48.2622 49.8281 47.9327 49.8272Z" fill="#CFCFCF"/>
                            <path d="M54.0892 54.7794C53.6247 54.7793 53.1702 54.6448 52.7804 54.392C52.3907 54.1393 52.0825 53.7791 51.893 53.3551C51.7034 52.931 51.6407 52.4611 51.7123 52.0022C51.7839 51.5433 51.9868 51.1148 52.2966 50.7687C56.1987 46.3936 58.3551 40.7359 58.3551 34.8735C58.3551 29.011 56.1987 23.3534 52.2966 18.9782C51.8846 18.5008 51.6765 17.8807 51.7171 17.2514C51.7576 16.6221 52.0436 16.0339 52.5135 15.6133C52.9834 15.1927 53.5996 14.9734 54.2295 15.0026C54.8595 15.0317 55.4528 15.307 55.8818 15.7692C60.5735 21.0268 63.1665 27.8269 63.1665 34.8735C63.1665 41.92 60.5735 48.7202 55.8818 53.9777C55.6562 54.2299 55.3799 54.4316 55.071 54.5698C54.7621 54.7079 54.4276 54.7793 54.0892 54.7794ZM16.246 54.7794C15.9072 54.7801 15.5721 54.709 15.2627 54.5708C14.9534 54.4326 14.6768 54.2305 14.4512 53.9777C9.75949 48.7202 7.1665 41.92 7.1665 34.8735C7.1665 27.8269 9.75949 21.0268 14.4512 15.7692C14.8802 15.307 15.4735 15.0317 16.1035 15.0026C16.7334 14.9734 17.3496 15.1927 17.8195 15.6133C18.2894 16.0339 18.5754 16.6221 18.616 17.2514C18.6565 17.8807 18.4484 18.5008 18.0364 18.9782C14.1343 23.3534 11.9779 29.011 11.9779 34.8735C11.9779 40.7359 14.1343 46.3936 18.0364 50.7687C18.3461 51.1147 18.5489 51.5429 18.6206 52.0017C18.6923 52.4604 18.6298 52.9301 18.4405 53.3541C18.2512 53.7781 17.9433 54.1382 17.5539 54.3911C17.1646 54.644 16.7103 54.7789 16.246 54.7794Z" fill="#CFCFCF"/>
                        </svg>
                    </div>
                    <p className='text-[#5D5959] text-[20px] font-medium font-mont_alt'>Essay Hackathon</p>
                </div>

            </div>

        </div>

        <div className='flex flex-col gap-6 mt-[72px]  px-5 lg:px-[100px]'>
            <div className='flex justify-between items-center'>
                <p className='font-mont_alt font-bold text-[24px] text-[#070807]'>Ongoing</p>
                <p className='font-mont_alt font-bold text-[14px] text-[#00AA55]'>See more</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between'>
                {
                    allContest?.length >= 1  ? allContest?.map((item, index) => (
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
                    <>
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
                                <button onClick={() => {navigate("/hackathon/details"); window.scroll(0, 0)}}  className='bg-[#fff] rounded-[8px] border w-[124px] py-2 px-[15px] border-[#0A5]'>
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
                    </>  
                }

            </div>

        </div>

        <div className='flex flex-col gap-6 mt-[72px] px-5 lg:px-[100px]'>
            <div className='flex justify-between items-center'>
                <p className='font-mont_alt font-bold text-[24px] text-[#070807]'>Recent Hackathons</p>
                <p className='font-mont_alt font-bold text-[14px] text-[#00AA55]'>Browse all</p>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-0 justify-between'>
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

            </div>

        </div>


    </div>
  )
}

export default Hackathon