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
import PetDetails from './Components/PetDetails'
import User from './Components/User'
import UpdataPet from './Components/UpdataPet'
import CreateDonationCampaign from './Components/CreateDonationCampaign'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import DonationCampaign from './Components/DonationCampaign'
import DonateDetails from './Components/DonateDetails'
import MyDonationCamp from './Components/MyDonationCamp'
import Edit from './Components/Edit'
import CreateSection from './Components/CreateSection'
import PageMyDonation from './Components/PageMyDonation'
import One from './Components/One'
import AllPet from './Components/AllPet'
import AllDonations from './Components/AllDonations'
import PageEdit from './Components/PageEdit'
import AdoptationRequrst from './Components/AdoptationRequrst'
import AdminRoute from '../AdminRoute'
import PrivateRoute from './Components/PrivateRoute'




const queryClient = new QueryClient();







const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },

      {
        path: '/callAction',
        element: <CallAction></CallAction>
      },
      {
        path: '/petListing',
        element: <PetListing></PetListing>

      },
      {
        path: '/details/:id',
        element: <PetDetails></PetDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path: '/donate/details/:id',
        element: <DonateDetails></DonateDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/donate/details/${params.id}`)
      },
      {
        path: '/updataPet/:id',
        element: <UpdataPet></UpdataPet>,
        loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path: '/paymentCollection/:id',
        element: <PageEdit></PageEdit>,
        loader:({params}) =>fetch(`http://localhost:5000/payment-collection/${params.id}`)
      },

      {
        path: 'donationCampaignPage',
        element: <DonationCampaign></DonationCampaign>
      },
      {
        path: '/edit/:id',
        element: <Edit></Edit>,
        loader: ({ params }) => fetch(`http://localhost:5000/donate/details/${params.id}`)

      },
      {
        path: '/createSection',
        element: <CreateSection></CreateSection>
      },
      {
        path: '/one',
        element: <One></One>
      },
     
         


    ]
  },
  {
    path: '/dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'addPet',
        element: <AddAPet></AddAPet>
      },
      {
        path: 'myAddedPet',
        element: <MyAddedPet></MyAddedPet>,
        loader: () => fetch('http://localhost:5000/pets')
      },
      {
        path: 'adoptationRequest',
        element: <AdoptationRequest></AdoptationRequest>
      },
      {
        path: 'user',
        element: <AdminRoute><User></User></AdminRoute>
      },
      {
        path: 'createDonationCampaign',
        element: <CreateDonationCampaign></CreateDonationCampaign>
      },
      {
        path: 'myDonationCamp',
        element: <MyDonationCamp></MyDonationCamp>
      },

      {
        path: 'pageMyDonation',
        element: <PageMyDonation></PageMyDonation>
      },
      {
        path: 'allPet',
        element: <AdminRoute><AllPet></AllPet></AdminRoute>
      },
      {
        path: 'allDonations',
        element: <AdminRoute><AllDonations></AllDonations></AdminRoute>
      },
      {
        path:'adoptation',
        element:<AdoptationRequrst></AdoptationRequrst>
      }
    ]

  },



]);



createRoot(document.getElementById('root')).render(
  <StrictMode>


    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
