import { StrictMode } from 'react'
// import { createRoot } from 'react-dom'
import './index.css'

import {
 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Router/router.jsx';
import { createRoot } from 'react-dom/client';


  createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


