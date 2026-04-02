import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';

const Layout = () => {
    return (
        <>
            <Header />
            <main className="mainContainer">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;