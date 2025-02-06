import React from 'react';
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
    return (
        <div className='bg-gray-500'>
            <Header></Header>
            <div >
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;