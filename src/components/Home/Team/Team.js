import React from 'react';
import member1 from '../../../images/member1.jpg';
import member2 from '../../../images/member2.jpg';
import member3 from '../../../images/member3.jpg';
import member4 from '../../../images/member4.jpg';

const Team = () => {
    return (
        <div className='mt-32'>
            <h1 className='text-3xl font-semibold text-black'>OUR PROFESSIONALS</h1>
            <p className='text-md pt-5'>There are many valid reasons why you should choose us to take care of your valuable device</p>
            <div className='grid grid-cols-4 px-32 gap-5'>
                <div className='flex flex-col justify-center items-center mt-10 px-4'>
                    <img src={member1} alt="" />
                    <h2 className='text-2xl pt-3'>Nick Rassel</h2>
                    <p className='flex justify-center text-slate-500'>Repairer Manager</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-10 px-4'>
                    <img src={member2} alt="" />
                    <h2 className='text-2xl pt-3'>Pamela Larson</h2>
                    <p className='flex justify-center text-slate-500'>Administrator</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-10 px-4'>
                    <img src={member3} alt="" />
                    <h2 className='text-2xl pt-3'>Jastin Kindel</h2>
                    <p className='flex justify-center text-slate-500'>Repairer Manager</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-10 px-4'>
                    <img src={member4} alt="" />
                    <h2 className='text-2xl pt-3'>Linda Soul</h2>
                    <p className='flex justify-center text-slate-500'>Engineer</p>
                </div>

            </div>
        </div>
    );
};

export default Team;