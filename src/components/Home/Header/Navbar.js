import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='flex items-center gap-4 bg-white h-[100px] navbar'>
            <div className='w-[200px] h-[90px] ml-[10px]'>
                <img src="https://i.ibb.co/wpDTRss/logo.png" alt="" />
            </div>
            <div className='pl-10'>
                <Link className='pr-8 font-bold text-lg' to='/men'>HOME</Link>
                <Link className='pr-8 font-bold text-lg' to='/women'>ABOUT US</Link>
                <Link className='pr-8 font-bold text-lg' to='/kids'>SERVICES</Link>
                <Link className='pr-8 font-bold text-lg' to='/shop'>LATEST NEWS</Link>
                <Link className='pr-8 font-bold text-lg' to='/contactus'>CONTACT US</Link>
            </div>
            <div className='flex flex-row-reverse items-center pl-4'>
                <p className='absolute pr-6 text-lg'><AiOutlineSearch></AiOutlineSearch></p>
                <input className='bg-slate-100 border rounded w-[280px] h-[30px] pl-5' type="text" placeholder='Search here' />
            </div>
            <div className='flex items-center gap-6 pl-3'>
                <img className='w-[26px] h-[23px]' src="https://i.ibb.co/hDGy7s8/Vector-2.png" alt="" />
                <img className='w-[25px] h-[19px]' src="https://i.ibb.co/QNB5cNf/Vector-3.png" alt="" />
                <img className='w-[39px] h-[39px]' src="https://i.ibb.co/4F1VxBZ/Ellipse-1.png" alt="" />
                <p className='font-bold text-lg'>Anne Doe</p>
            </div>
        </div>
    );
};

export default Navbar;