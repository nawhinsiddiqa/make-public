import { NavLink, Outlet } from "react-router-dom";
import { MdPets } from "react-icons/md";

    
            


const Dashboard = () => {
  const isAdmin =true; 
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-lime-400  text-center mt-4">
                <ul className="p-4 mb-3">
                {
                    isAdmin ? <>
                    
            
                    
                    </>  
                        :
                    <>
                        <li className=""><NavLink to="/dashboard/addPet">
                    
                    <p> Add a pet </p>
                     </NavLink></li>
                     <li className="mb-3"><NavLink to="/dashboard/myAddedPet">My Added pet</NavLink></li>
                     <li className="mb-3"><NavLink to="/dashboard/adoptationRequest">Adoptation Request</NavLink></li>
                     <li className="mb-3"><NavLink to="/dashboard/adoptationRequest">Create Donation</NavLink></li>
                     <li className="mb-3"><NavLink to="/dashboard/adoptationRequest">My Donation Campgaigns</NavLink></li>
                     <li className="mb-3"><NavLink to="/dashboard/adoptationRequest">Edit Donation</NavLink></li>
                     <li className="mb-3"><NavLink to="/dashboard/adoptationRequest">My Donation</NavLink></li>
                     <li className="mb-3"><NavLink to="/dashboard/adoptationRequest">Adoptation Request</NavLink></li>
                    
                    
                    </>
                }
                     <div className="divider"></div>
                     <li className="mb-3"><NavLink to="/dashboard/adoptationRequest">Users</NavLink></li>
                </ul>
                
            </div>
            <div className="flex-1">
             <Outlet></Outlet>
            </div>
        </div>
    );
};



export default Dashboard;