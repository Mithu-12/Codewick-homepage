import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Features from '../Features/Features';
import Phone from '../Phone/Phone';
import Testimonial from '../Testimonial/Testimonial';
import Subscribe from '../Subscribe/Subscribe';
import Tryfree from '../Tryfree/Tryfree';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Features></Features>
            <Phone></Phone>
            <Testimonial></Testimonial>
            <Subscribe></Subscribe>
            <Tryfree></Tryfree>
            <Footer></Footer>
        </div>
    );
};

export default Home;