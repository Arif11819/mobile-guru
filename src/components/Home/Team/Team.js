import React from 'react';

const Team = () => {
    return (
        <div className='mt-32'>
            <h1 className='text-3xl font-semibold text-black'>OUR PROFESSIONALS</h1>
            <p className='text-md pt-5'>There are many valid reasons why you should choose us to take care of your valuable device</p>
            <div className='grid grid-cols-4 px-32 gap-5'>
                <div className='flex flex-col justify-center items-center mt-10 px-4'>
                    <img src="https://i.ibb.co/KVm0fdv/4-2.jpg" alt="" />
                    <h2 className='text-2xl pt-3'>Nick Rassel</h2>
                    <p className='flex justify-center text-slate-500'>Repairer Manager</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-10 px-4'>
                    <img src="https://i.ibb.co/sq6jW1v/3-2.jpg" alt="" />
                    <h2 className='text-2xl pt-3'>Pamela Larson</h2>
                    <p className='flex justify-center text-slate-500'>Administrator</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-10 px-4'>
                    <img src="https://i.ibb.co/68QtjDL/2-2.jpg" alt="" />
                    <h2 className='text-2xl pt-3'>Jastin Kindel</h2>
                    <p className='flex justify-center text-slate-500'>Repairer Manager</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-10 px-4'>
                    <img src="https://i.ibb.co/M94hcQZ/1-3.jpg" alt="" />
                    <h2 className='text-2xl pt-3'>Linda Soul</h2>
                    <p className='flex justify-center text-slate-500'>Engineer</p>
                </div>

            </div>
        </div>
    );
};

export default Team;