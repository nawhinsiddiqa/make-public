import { useContext } from "react";
import useAdmin from "./src/hooks/useAdmin";
import { AuthContext } from "./src/Provider/AuthProvider";
import { Navigate } from "react-router-dom";

 
 
 const AdminRoute = ({children}) => {
    const[isAdmin,isAdminLoading] = useAdmin();
    const{user,loading}=useContext(AuthContext);

    // if(loading || isAdminLoading){
    //     return  <progress className="progress w-56"></progress>
    // }
    
    if(user && isAdmin){
        return children
    }
    return (
       <Navigate to="/login"></Navigate>
    );
   
 };
 
 export default AdminRoute;  
