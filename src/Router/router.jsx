import React, { Children } from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../Pages/Home/Home';
import MainLayout from '../MainLayout/MainLayout';
import About from '../Pages/About/About';
import Skills from '../Pages/Skills/Skills';
import Education from '../Pages/Education/Education';
import Projects from '../Pages/Projects/Projects';
import Contacts from '../Pages/Contacts/Contacts';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children : [
        {
          path:'/',
          element: <Home></Home>  
        },
        {
            path:'/about',
            element: <About></About> 
          },
          {
            path:'/skills',
            element: <Skills></Skills> 
          },
          {
            path:'/education',
            element: <Education></Education>
          },
          {
            path:'/projects',
            element: <Projects></Projects>
          },
          {
            path:'/contacts',
            element: <Contacts></Contacts>
          },
      ]
    },
  ]);

export default router;