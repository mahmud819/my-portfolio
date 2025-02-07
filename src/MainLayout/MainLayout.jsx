import React from 'react';
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import { Outlet } from 'react-router-dom';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import Skills from '../Pages/Skills/Skills';
import Education from '../Pages/Education/Education';
import Projects from '../Pages/Projects/Projects';
import Contacts from '../Pages/Contacts/Contacts';


const MainLayout = () => {
    return (
        <div className=' bg-[#281350] '>
            <Header></Header>
            <div className='pt-24'>
                <Outlet></Outlet>
            </div>
            
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    );
};
// bg-[#281350] to from-[#01003a]
export default MainLayout;