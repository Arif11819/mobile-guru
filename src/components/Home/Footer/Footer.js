import React from 'react';
import './Footer.css';
import { AiOutlineMail, AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='footer-div'>
            <div className='flex items-center gap-6 pt-6 pl-12 footer-logo'>
                <img src="https://i.ibb.co/wpDTRss/logo.png" alt="" />
                <h1 className='text-white text-5xl'>Mobile GuRu</h1>
            </div>
            <div className='flex px-28 pl-40 gap-24 mt-8'>
                <div className='flex flex-col text-white mt-10 gap-3'>
                    <h2 className='text-2xl font-semibold'>Women</h2>
                    <h2 className='text-sm'>All Women</h2>
                    <h2 className='text-sm'>Skirts</h2>
                    <h2 className='text-sm'>T-Shirts</h2>
                    <h2 className='text-sm'>Tops</h2>
                    <h2 className='text-sm'>Jackets</h2>
                </div>
                <div>
                    <div className='flex flex-col text-white mt-10 gap-3'>
                        <h2 className='text-2xl font-semibold'>Men</h2>
                        <h2 className='text-sm'>All Men</h2>
                        <h2 className='text-sm'>Skirts</h2>
                        <h2 className='text-sm'>T-Shirts</h2>
                        <h2 className='text-sm'>Shorts</h2>
                        <h2 className='text-sm'>Jackets</h2>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col text-white mt-10 gap-3'>
                        <h2 className='text-2xl font-semibold'>Kids</h2>
                        <h2 className='text-sm'>All Kids</h2>
                        <h2 className='text-sm'>Skirts</h2>
                        <h2 className='text-sm'>T-Shirts</h2>
                        <h2 className='text-sm'>Shorts</h2>
                        <h2 className='text-sm'>Jackets</h2>
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
                <div>
                    <div className='flex flex-col text-white mt-10 gap-3 text-start'>
                        <h2 className='text-2xl font-semibold'>Stay In Touch</h2>
                        <h2 className='text-sm'>Stay in touch to get special offers,free giveaways <br /> and once in a lifetime deals</h2>
                        <div className='flex flex-row items-center pt-2'>
                            <p className='absolute pr-6 pl-4 text-lg'><AiOutlineMail></AiOutlineMail></p>
                            <input className='border rounded w-[320px] h-[30px] pl-12 footer-input' type="text" placeholder='Enter your email' />
                        </div>
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