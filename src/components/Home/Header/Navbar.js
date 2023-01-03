import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import './Navbar.css';
import logo from '../../../images/logo.png';
import vector2 from '../../../images/Vector (2).png';
import vector3 from '../../../images/Vector (3).png';
import ellipse from '../../../images/Ellipse 1.png';

const Navbar = () => {
    return (
        <div className='flex items-center gap-4 bg-white h-[100px] navbar'>
            <div className='w-[200px] h-[90px] pl-[30px]'>
                <img src={logo} alt="" />
            </div>
            <div className='pl-10'>
                <Link className='pr-8 font-bold text-md' to='/men'>HOME</Link>
                <Link className='pr-8 font-bold text-md' to='/women'>ABOUT US</Link>
                <Link className='pr-8 font-bold text-md' to='/kids'>SERVICES</Link>
                <Link className='pr-8 font-bold text-md' to='/shop'>LATEST NEWS</Link>
                <Link className='pr-8 font-bold text-md' to='/contactus'>CONTACT US</Link>
            </div>
            <div className='flex flex-row-reverse items-center pl-4'>
                <p className='absolute pr-6 text-lg'><AiOutlineSearch></AiOutlineSearch></p>
                <input className='bg-slate-100 border rounded w-[300px] h-[30px] pl-5' type="text" placeholder='Search here' />
            </div>
            <div className='flex items-center gap-6 pl-3'>
                <img className='w-[26px] h-[23px]' src={vector2} alt="" />
                <img className='w-[25px] h-[19px]' src={vector3} alt="" />
                <img className='w-[39px] h-[39px]' src={ellipse} alt="" />
                <p className='font-bold text-lg'>Anne Doe</p>
            </div>
        </div>
    );
};

export default Navbar;