import { NavLink, Outlet } from "react-router-dom";
import { MdPets } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";





const Dashboard = () => {
    const [isAdmin ]= useAdmin();
    return (

        <div className="flex">
            <div className="w-64 min-h-full bg-lime-400  text-center mt-4">
                <ul className="p-4 mb-3">
                    {
                        isAdmin ? <>
                            <li className="mb-3"><NavLink to="/dashboard/user">Users</NavLink></li>
                            <li className="mb-3"><NavLink to="/dashboard/allPet">All Pet</NavLink></li>
                            <li className="mb-3"><NavLink to="/dashboard/allDonations">All Donations</NavLink></li>
                        </>
                            :
                            <>

                                <li className=""><NavLink to="/dashboard/addPet">

                                    <p> Add a pet </p>
                                </NavLink></li>
                                <li className="mb-3"><NavLink to="/dashboard/myAddedPet">My Added pet</NavLink></li>
                                <li className="mb-3"><NavLink to="/dashboard/adoptationRequest">Adoptation Request</NavLink></li>
                                <li className="mb-3"><NavLink to="/dashboard/adoptation">Adoptation Requrst</NavLink></li>
                                
                                <li className="mb-3"><NavLink to="/dashboard/createDonationCampaign">Create Donation Campgaigns</NavLink></li>
                       
                                <li className="mb-3"><NavLink to="/dashboard/pageMyDonation">PageMyDonation</NavLink></li>
                       
                           
                       
                                
                            </>
                    }


                    <div className="divider"></div>

























                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};



export default Dashboard;