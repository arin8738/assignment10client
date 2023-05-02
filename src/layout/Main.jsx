import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../componends/header/nav';
import Footer from '../componends/footer/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;