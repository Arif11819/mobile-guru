import React from 'react';
import './Services.css';
import services1 from '../../../images/services1.jpg';
import services2 from '../../../images/services2.jpg';
import services3 from '../../../images/services3.jpg';
import services4 from '../../../images/services4.jpg';
import services5 from '../../../images/services5.jpg';
import services6 from '../../../images/services6.jpg';

const Services = () => {
    return (
        <div className='mt-32'>
            <h1 className='text-3xl font-semibold text-black'>OUR SERVICES</h1>
            <p className='text-md pt-5'>There are many valid reasons why you should choose us to take care of your valuable device</p>
            <div className='grid grid-cols-3 px-32 gap-5'>
                <div className='flex flex-col text-start gap-4 single-card mt-10'>
                    <img src={services1} alt="" />
                    <h2 className='text-2xl'>PC & MAC Computers</h2>
                    <p className='pb-5'>We develop and design new procedures, tools systems for agricultural products environments.</p>
                </div>
                <div className='flex flex-col text-start gap-4 single-card mt-10'>
                    <img src={services2} alt="" />
                    <h2 className='text-2xl'>Laptop Macbook Repair</h2>
                    <p className='pb-5'>Chemical Research expertise in producing and manipulating chemicals to energy properties.</p>
                </div>
                <div className='flex flex-col text-start gap-4 single-card mt-10'>
                    <img src={services3} alt="" />
                    <h2 className='text-2xl'>Smartphone Repair</h2>
                    <p className='pb-5'>Materials Engineering should include scientific and engineering strength relationships of materials.</p>
                </div>
                <div className='flex flex-col text-start gap-4 single-card mt-10'>
                    <img src={services4} alt="" />
                    <h2 className='text-2xl'>Tablet – IPad Repair</h2>
                    <p className='pb-5'>Creating a dynamic company for the continuous exploration and develop opportunities.</p>
                </div>
                <div className='flex flex-col text-start gap-4 single-card mt-10'>
                    <img src={services5} alt="" />
                    <h2 className='text-2xl'>Data Recovery</h2>
                    <p className='pb-5'>Petroleum Engineers are concerned with the exploration, discovery and production.</p>
                </div>
                <div className='flex flex-col text-start gap-4 single-card mt-10'>
                    <img src={services6} alt="" />
                    <h2 className='text-2xl'>Console Repair</h2>
                    <p className='pb-5'>Ensuring high reliability and optimal performance of rotating power equipment.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;