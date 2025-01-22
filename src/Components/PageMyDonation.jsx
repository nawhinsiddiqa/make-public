import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";

const PageMyDonation = () => {
    

    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/payment-collection')
            .then(res => res.json())
            .then(data => setPets(data))
    }, []);
    return (
        <div>
           <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                           <th className="font-bold">Email</th>
                            <div className="flex mt-2"><th>Image</th>
                           
                            <th> Name</th>
                            </div>

                            
                            <th className="mt-3">Date</th>
                            
                            <th>Donated Amount</th>
                            <th>Button</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            pets.map((pet,index)=><tr key={pet._id}>
                                <th>
                                 {pet.email}
                                </th>
                                <td>
                                    <div className="items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={pet.petImage}
                                                    alt="petImage" />
                                            </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">{pet.petName}</div>
                                        
                                        </div>
                                       
                                    </div>
                                   
                                        <div>

                                        </div>
                                       
                                        
                                </td>
                                <td>{pet.date}</td>
                                <td>
                                <td>{pet.price}</td>
                                
                                
                                    <br />
                                    {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                </td>
                             
                                <th>
                                   <button>refund</button>
                                </th>
                            </tr>)
                        }
                             
                    </tbody>
                    
                </table>
            </div>

        </div> 
        </div>
    );
};

export default PageMyDonation;