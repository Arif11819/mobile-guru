import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <section className="img-slider">
                <div className="slider-container">

                    <div className="slide">
                        <div className='first-slider-img flex flex-col text-start'>
                            <h1 className='text-6xl font-bold text-yellow-400 pl-32 pt-32 text-start'>WE’RE FINDING SOLUTIONS <br /> FOR YOUR PROBLEMS</h1>
                            <h3 className='text-2xl text-white font-semibold text-start pt-4 pl-32'>Our repair technicians have a wealth of experience repairing mobile devices and <br /> diagnosing wealth of great thing experience repairing errors.</h3>
                            <button className='text-start bg-yellow-400 font-semibold mt-6 rounded w-[150px] pl-4 pt-3 pb-3 ml-32'>LEARN MORE</button>
                        </div>
                    </div>

                    <div className="slide">
                        <div className='second-slider-img flex flex-col text-start'>
                            <h1 className='text-6xl font-bold text-yellow-400 pl-32 pt-32 text-start'>WE’RE SERVICESS & <br />
                                BEST CARE 0F YOUR DEVICE</h1>
                            <h3 className='text-2xl text-white font-semibold text-start pt-4 pl-32'>Our repair technicians have a wealth of experience repairing mobile devices and <br /> diagnosing wealth of great thing experience repairing errors.</h3>
                            <button className='text-start bg-yellow-400 font-semibold mt-6 rounded w-[150px] pl-4 pt-3 pb-3 ml-32'>LEARN MORE</button>
                        </div>
                    </div>
                    <div className="slide">
                        <div className='third-slider-img flex flex-col text-start'>
                            <h1 className='text-6xl font-bold text-yellow-400 pl-32 pt-32 text-start'>WE’RE FINDING SOLUTIONS <br /> FOR YOUR MOBILE DEVICE</h1>
                            <h3 className='text-2xl text-white font-semibold text-start pt-4 pl-32'>Our repair technicians have a wealth of experience repairing mobile devices and <br /> diagnosing wealth of great thing experience repairing errors.</h3>
                            <button className='text-start bg-yellow-400 font-semibold mt-6 rounded w-[150px] pl-4 pt-3 pb-3 ml-32'>LEARN MORE</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Banner;