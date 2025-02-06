import React, { Children } from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../Pages/Home/Home';
import MainLayout from '../MainLayout/MainLayout';
import About from '../Pages/About/About';

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
        
        
      ]
    },
  ]);

export default router;