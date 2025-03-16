import { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";




const AdoptationRequest = () => {
    const [pets, setPets] = useState([]);



    useEffect(() => {
        fetch('https://assignment-12-five-gamma.vercel.app/adoptation-request')
            .then(res => res.json())
            .then(data => setPets(data))
    }, []);
    return (
        <div>
            <h1 className="text-3xl text-blue-600 my-7 text-center script">Adoptation Reques:{pets.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="mt-10">
                                   Name
                                </th>
                                <div className="flex mt-2"><th></th>
                                    <th>Email</th>
                                </div>
                                <th>Phone Number</th>
                                <th>Location</th>
                                <th>Buttons</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                pets.map((pet, index) => <tr key={pet._id}>
                                    <th>
                                       {pet.name}
                                    </th>
                                    <td>
                                        <div className="items-center gap-3">
                                            <div className="avatar">
                                                
                                            </div>
                                            <div>
                                                <div className="font-bold">{pet.email}</div>
                                              
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    <div className="text-sm opacity-50">{pet.number}</div>
                                        <br />
                                        {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                    </td>
                                    <td>{pet.location}</td>
                                    <th>
                                        <div className="flex">
                                            <Link to="/dashboard/adoptation"><button  className="btn btn-ghost btn-xs">Accept</button></Link>
                                             <button className="btn btn-ghost btn-xs">Reject</button>
                                            
                                        </div>
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

export default AdoptationRequest;
