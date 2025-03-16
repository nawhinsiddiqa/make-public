import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const MyDonationCamp = () => {

    const navigate = useNavigate();
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch('https://assignment-12-five-gamma.vercel.app/donations')
            .then(res => res.json())
            .then(data => setPets(data))
    }, []);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="mt-10">
                                Serial Number
                            </th>
                            <div className="flex mt-2"><th>Image</th>
                               
                            </div>
                            <th>Maximun Donation Amount </th>
                            <th>Donation Progress Bar</th>
                            
                            <th>Buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            pets.map((pet, index) => <tr key={pet._id}>
                                <th>
                                    {index + 1}
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
                                            
                                        
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {pet.maximunDonation}
                                    <br />
                                    {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                </td>
                                <td>{}</td>
                                <th>
                                    <div className="flex">
                                    
                                        <button className="btn btn-ghost btn-xs">Pause</button>
                                        <Link to={`/edit/${pet._id}`}><button  className="btn btn-ghost btn-xs text-red-600">Edit</button></Link>
                                        <button className="btn btn-ghost btn-xs">View Donators</button>
                                    </div>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyDonationCamp;


