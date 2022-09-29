import React from 'react';
import Footer from './Footer/Footer';
import Banner from './Header/Banner';
import Navbar from './Header/Navbar';
import Review from './Review/Review';
import Services from './Services/Services';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <Services></Services>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;