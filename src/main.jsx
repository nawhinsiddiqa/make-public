import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Root from './Components/Root'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import ErrorElement from './Components/ErrorElement'
import Login from './Components/Login'
import Register from './Components/Register'
import Banner from './Components/Banner'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider'







const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
    },
   {
        path:'/login',
        element:<Login></Login>
   },
   {
    path:'/register',
    element:<Register></Register>
   }





  ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
