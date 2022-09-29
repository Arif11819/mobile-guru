import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import Banner from './Header/Banner';
import Navbar from './Header/Navbar';
import Review from './Review/Review';
import Services from './Services/Services';
import Team from './Team/Team';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <Services></Services>
            <AboutUs></AboutUs>
            <Team></Team>
            <Review></Review>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;