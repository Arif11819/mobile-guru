import React from 'react';
import { AiFillTrophy, AiOutlineLaptop } from "react-icons/ai";
import { BsEmojiLaughing } from "react-icons/bs";

const AboutUs = () => {
    return (
        <div className='mt-32 px-32'>
            <h1 className='text-4xl text-start font-semibold'>About Us</h1>
            <div className='flex mt-10'>
                <div className=''>
                    <img className='w-[1800px]' src="https://i.ibb.co/ZJywdRc/weare.jpg" alt="" />
                </div>
                <div className='pl-10 text-start'>
                    <h2 className='text-3xl font-semibold'>WE ARE <span className='text-info'>CERTIFIED</span> SPECIALISTS</h2>
                    <p className='pt-4 text-md'>We’re not overly sentimental, but we do what we do because we care about people and their tech. That’s why iRepair works; we put our customers above anything else. Of course we love fixing cracked iPhone screens and broken charge ports, but we get our satisfaction from helping out folks who lost their connection to the outside world.</p>
                    <div className='flex items-center gap-12 text-start pt-6'>
                        <div className='flex flex-col pt-5 font-bold text-info'>
                            <div className='flex items-center gap-2'>
                                <AiFillTrophy className='text-4xl'></AiFillTrophy>
                                <p className='text-4xl'>12 +</p>
                            </div>
                            <p className='text-slate-500 pt-2'>YEARS ON MARKET</p>
                        </div>
                        <div className='flex flex-col pt-5 font-bold text-info'>
                            <div className='flex items-center gap-3'>
                                <BsEmojiLaughing className='text-3xl'></BsEmojiLaughing>
                                <p className='text-4xl'>900 +</p>
                            </div>
                            <p className='text-slate-500 pt-2'>OUR HAPPY CLIENTS
                            </p>
                        </div>
                        <div className='flex flex-col pt-5 font-bold text-info'>
                            <div className='flex items-center gap-3'>
                                <AiOutlineLaptop className='text-4xl'></AiOutlineLaptop>
                                <p className='text-4xl'>8659 +</p>
                            </div>
                            <p className='text-slate-500 pt-2'>ALMOST REPAIRED DEVICE</p>
                        </div>
                    </div>
                    <div className='pt-8'>
                        <img src="https://i.ibb.co/jW7KWkm/sign.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;