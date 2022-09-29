import React from 'react';
import './Footer.css';
import { AiOutlineMail, AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='footer-div'>
            <div className='flex items-center gap-6 pt-6 pl-12 footer-logos'>
                <img src="https://i.ibb.co/z8nkR2r/logo2.png" alt="" />
                <h1 className='text-white text-5xl'>Mobile GuRu</h1>
            </div>
            <div className='flex px-28 pl-64 gap-24 mt-8'>
                <div className='flex flex-col text-white mt-10 gap-3'>
                    <h2 className='text-2xl font-semibold'>Phone Parts</h2>
                    <h2 className='text-sm'>All phone parts</h2>
                    <h2 className='text-sm'>Phone</h2>
                    <h2 className='text-sm'>Chips</h2>
                    <h2 className='text-sm'>Display</h2>
                    <h2 className='text-sm'>Touch</h2>
                </div>
                <div>
                    <div className='flex flex-col text-white mt-10 gap-3'>
                        <h2 className='text-2xl font-semibold'>Laptop Parts</h2>
                        <h2 className='text-sm'>All laptop parts</h2>
                        <h2 className='text-sm'>Display</h2>
                        <h2 className='text-sm'>Keyboard</h2>
                        <h2 className='text-sm'>Ram</h2>
                        <h2 className='text-sm'>CPU</h2>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col text-white mt-10 gap-3'>
                        <h2 className='text-2xl font-semibold'>Data Recovery</h2>
                        <h2 className='text-sm'>All data</h2>
                        <h2 className='text-sm'>Phone</h2>
                        <h2 className='text-sm'>Laptop</h2>
                        <h2 className='text-sm'>Tablets</h2>
                        <h2 className='text-sm'>MAC</h2>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col text-white mt-10 gap-3'>
                        <h2 className='text-2xl font-semibold'>Shopping</h2>
                        <h2 className='text-sm'>Your cart</h2>
                        <h2 className='text-sm'>Your orders</h2>
                        <h2 className='text-sm'>Compared items</h2>
                        <h2 className='text-sm'>Wishlist</h2>
                        <h2 className='text-sm'>Shipping Details</h2>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col text-white mt-10 gap-3'>
                        <h2 className='text-2xl font-semibold'>More links</h2>
                        <h2 className='text-sm'>Blogs</h2>
                        <h2 className='text-sm'>Gift center</h2>
                        <h2 className='text-sm'>Buying guides</h2>
                        <h2 className='text-sm'>New arrivals</h2>
                        <h2 className='text-sm'>Clearence</h2>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className='flex gap-28 items-center justify-center pt-4 text-white mx-auto'>
                <div>Terms & Conditions</div>
                <div>Privacy Policy</div>
                <div className='flex gap-4 text-lg'>
                    <AiOutlineFacebook></AiOutlineFacebook>
                    <AiOutlineInstagram></AiOutlineInstagram>
                    <AiOutlineWhatsApp></AiOutlineWhatsApp>
                    <AiFillTwitterCircle></AiFillTwitterCircle>
                </div>
            </div>
        </div>
    );
};

export default Footer;