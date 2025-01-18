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
import Dashboard from './Layout/Dashboard'
import AddAPet from './Components/AddAPet'
import MyAddedPet from './Components/MyAddedPet'
import AdoptationRequest from './Components/AdoptationRequest'
import CallAction from './Components/CallAction'
import PetListing from './Components/PetListing'







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
   },

   {
    path:'/callAction',
    element:<CallAction></CallAction>
   },
   {
    path:'/petListing',
    element:<PetListing></PetListing>

   }




  ]
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
       {
        path:'addPet',
        element:<AddAPet></AddAPet>
       },
       {
        path:'myAddedPet',
        element:<MyAddedPet></MyAddedPet>,
        loader:() =>fetch('http://localhost:5000/pets')
       },
       {
        path:'adoptationRequest',
        element:<AdoptationRequest></AdoptationRequest>
       },
    
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
