import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../componends/header/nav';
import Footer from '../componends/footer/Footer';
import Banner from '../componends/header/banner';
import Aboutus from '../componends/about us/Aboutus';
import ChefsSection from '../componends/chefSection/ChefsSection';
import Picture from '../componends/pic/Picture';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner> 
            <ChefsSection></ChefsSection>  
            <Outlet></Outlet> 
            <Picture></Picture>
            <Aboutus></Aboutus>
            <Footer></Footer>
        </div>
    );
};

export default Main;