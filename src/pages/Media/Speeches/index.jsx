import React, { useEffect, useState } from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'
import axios from 'axios'

import Speech from "../../../assets/png/speech-banner.png"
import Chain from "../../../assets/png/chain.png"


import Search from "../../../assets/svg/search_big.svg"

import Presidential from './components/Presidential'
import Minister from './components/Minister'
import DG from './components/DG'
import More from './components/More'
import SuggestionAndComplaints from '../../../components/SuggestionAndComplaints'


const Speeches = () => {
    const [activeTab, setActiveTab] = useState("Presidential")
    const [speechData, setSpeechData] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    const handleChangeTab = (value) => {
        setActiveTab(value)
    }


    const getSpeeches = async () => {
        setLoading(true);
        try {
            const res = await axios.get("https://api.admin.noa.gov.ng/api/speech");
            setSpeechData(res?.data?.data || []);
        } catch (err) {
            console.error("Error fetching speeches:", err);
        } finally {
            setLoading(false);
        }
    };

    const filteredSpeechData = speechData?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase() || ""))

    useEffect(() => {
        getSpeeches();
    }, [search]);

    // Filter speeches by category
    const getFilteredData = () => {
        switch (activeTab) {
            case "Presidential":
                return filteredSpeechData?.filter((speech) => speech.category === "President");
            case "Minister":
                return filteredSpeechData?.filter((speech) => speech.category === "Minister");
            case "DG":
                return filteredSpeechData?.filter((speech) => speech.category === "Director-General");
            default:
                return [];
        }
    };

    const filteredData = getFilteredData();


  return (
    <div className='flex flex-col'>
        <div className='bg-[#fff] px-[100px] py-[19px] hidden  lg:flex items-center justify-between '>
            <div className='flex gap-1 items-center'>
                <p className='text-[#00AA55] font-manja font-bold text-base '>National Orientation Agency</p>
                <IoChevronForwardOutline className='mb-1'/>
                <p className='text-[#222222] font-bold text-base font-manja'>Presidential Speeches</p>
            </div>
        </div>
        <div
            style={{ background:`url(${Speech})`, backgroundSize:"cover", backgroundRepeat:"no-repeat" }}
            className="flex items-center justify-center pb-[100px] lg:pb-[160px] pt-[100px] lg:pt-[64px] lg:h-[403px]"
        >
            <div className="flex flex-col items-center gap-[19px]">
                <p className="font-manja w-[295px] lg:w-[691px] font-bold text-[24px] lg:text-[40px] leading-[32px] lg:leading-[56px] text-center text-[#fff]">
                    Find Presidential Speeches spanning  over the years and be informed
                </p>
            </div>
        </div>
        <div className="lg:w-[960px] relative bottom-10 mx-auto shadow-xl flex items-center">
            <div className="lg:w-[864px] flex h-[80px]  bg-[#fff] p-4">
                <input 
                    className="bg-transparent outline-none font-mont_alt text-base lg:text-[20px] w-full"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search any national address or president's speech"
                />
            </div>
            <div className="bg-[#00AA55] w-[96px] h-[80px] p-4 flex items-center justify-center">
                <img src={Search} alt="Search" />
            </div>
        </div>

        <div className='flex items-start gap-10 md:gap-0 justify-between overflow-x-auto px-5 lg:px-[100px]'>
            <div className="flex flex-col gap-2">
                <p className="font-mont_alt whitespace-nowrap font-bold text-base lg:text-[32px]">Recent speeches</p>
                <img src={Chain} alt='Chain' className='w-[54px] h-[9px]'/>
            </div>

            <div className='flex items-center mt-1 lg:mt-0 gap-5'>
                <p 
                    className={`${activeTab === "Presidential" ? "text-[#00AA55] font-bold" : "font-semibold text-[#455448]"} font-mont_alt whitespace-nowrap  text-sm cursor-pointer`}
                    onClick={() => handleChangeTab("Presidential")}
                >
                    President
                </p>
                <p 
                    className={`${activeTab === "Minister" ? "text-[#00AA55] font-bold" : "font-semibold text-[#455448]"} font-mont_alt whitespace-nowrap  text-sm cursor-pointer`}
                    onClick={() => handleChangeTab("Minister")}
                >
                    Minister of Information
                </p>
                <p 
                    className={`${activeTab === "DG" ? "text-[#00AA55] font-bold" : "font-semibold text-[#455448]"} font-mont_alt whitespace-nowrap  text-sm cursor-pointer`}
                    onClick={() => handleChangeTab("DG")}
                >
                    Director General
                </p>
                {/* <p 
                    className={`${activeTab === "More" ? "text-[#00AA55] font-bold" : "font-semibold text-[#455448]"} font-mont_alt whitespace-nowrap  text-sm cursor-pointer`}
                    onClick={() => handleChangeTab("More")}
                >
                    See more
                </p> */}

            </div>

        </div>

        <div className='px-5 lg:px-[100px] mt-[32px]'>

            {activeTab === "Presidential" && <Presidential data={filteredData} />}
            {activeTab === "Minister" && <Minister data={filteredData} />}
            {activeTab === "DG" && <DG  data={filteredData} />}
            {/* {activeTab === "More" && <More />} */}

        </div>
     
        <SuggestionAndComplaints />
    </div>
  )
}

export default Speeches