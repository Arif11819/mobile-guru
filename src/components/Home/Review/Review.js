import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Review = () => {
    return (
        <div className='px-32 mt-32'>
            <h1 className='text-4xl font-semibold pb-32 text-start'>See What Our Customer Says</h1>
            <div className='flex gap-6'>
                <div className='flex flex-col gap-4 justify-center items-center w-[400px] h-[240px] mx-auto review-card'>
                    <img className='w-[100px] h-[100px]' src="https://i.ibb.co/PYxf0zK/Ellipse-60.png" alt="" />
                    <h2 className='font-bold'>Linna Gomez</h2>
                    <div className='flex items-center gap-3'>
                        <div className='flex'>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiOutlineStar></AiOutlineStar>
                        </div>
                        <p>4.4</p>
                    </div>
                    <p className='flex justify-center items-center mx-auto pl-5'>Not really a website, but the private community of doers, not wantrepreneurs. Here you can leverage the business strategy, share and get knowledge of 1,000 high-revenue store owners.</p>
                </div>
                <div className='flex flex-col gap-4 justify-center items-center w-[400px] h-[240px] mx-auto review-card'>
                    <img className='w-[100px] h-[100px]' src="https://i.ibb.co/PYxf0zK/Ellipse-60.png" alt="" />
                    <h2 className='font-bold'>Linna Gomez</h2>
                    <div className='flex items-center gap-3'>
                        <div className='flex'>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiOutlineStar></AiOutlineStar>
                        </div>
                        <p>4.4</p>
                    </div>
                    <p className='flex justify-center items-center mx-auto pl-5'>Not really a website, but the private community of doers, not wantrepreneurs. Here you can leverage the business strategy, share and get knowledge of 1,000 high-revenue store owners.</p>
                </div>
                <div className='flex flex-col gap-4 justify-center items-center w-[400px] h-[240px] mx-auto review-card'>
                    <img className='w-[100px] h-[100px]' src="https://i.ibb.co/PYxf0zK/Ellipse-60.png" alt="" />
                    <h2 className='font-bold'>Linna Gomez</h2>
                    <div className='flex items-center gap-3'>
                        <div className='flex'>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiOutlineStar></AiOutlineStar>
                        </div>
                        <p>4.4</p>
                    </div>
                    <p className='flex justify-center items-center mx-auto pl-5'>Not really a website, but the private community of doers, not wantrepreneurs. Here you can leverage the business strategy, share and get knowledge of 1,000 high-revenue store owners.</p>
                </div>
            </div>
        </div>
    );
};

export default Review;