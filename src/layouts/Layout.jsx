import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

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