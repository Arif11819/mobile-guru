import React from 'react';
import './WhyChooseUs.css';
import { FcBusinessman } from "react-icons/fc";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GiCutDiamond } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";
import { MdLaptopMac } from "react-icons/md";

const WhyChooseUs = () => {
    return (
        <div className='mt-64'>
            <h1 className='text-3xl font-semibold text-black'>WHY CHOOSE US</h1>
            <p className='text-md pt-5'>There are many valid reasons why you should choose us to take care of your valuable device</p>
            <div className='grid grid-cols-3 px-32 gap-5'>
                <div className='flex flex-col justify-center items-center gap-4 card mt-10 px-4 py-8'>
                    <FcBusinessman className='w-48 h-28 text-info'></FcBusinessman>
                    <h2 className='text-2xl'>Experienced Professionals</h2>
                    <p className='flex justify-center'>Our business has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 card mt-10 px-4 py-8'>
                    <BsFillTelephoneOutboundFill className='w-32 h-20 text-info'></BsFillTelephoneOutboundFill>
                    <h2 className='text-2xl'>Expert Technical Skills</h2>
                    <p className='flex justify-center'>Our Technical has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 card mt-10 px-4 py-8'>
                    <AiOutlineMail className='w-48 h-28 text-info'></AiOutlineMail>
                    <h2 className='text-2xl'>Trustworthy See Reviews</h2>
                    <p className='flex justify-center'>Our Technical has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 card mt-10 px-4 py-8'>
                    <GiCutDiamond className='w-48 h-28 text-info'></GiCutDiamond>
                    <h2 className='text-2xl'>Friendly Service</h2>
                    <p className='flex justify-center'>Our Technical has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 card mt-10 px-4 py-8'>
                    <HiLocationMarker className='w-48 h-28 text-info'></HiLocationMarker>
                    <h2 className='text-2xl'>Excellent Reputation</h2>
                    <p className='flex justify-center'>Our business has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 card mt-10 px-4 py-8'>
                    <MdLaptopMac className='w-48 h-28 text-info'></MdLaptopMac>
                    <h2 className='text-2xl'>Affordable Diagnosis</h2>
                    <p className='flex justify-center'>Our business has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;