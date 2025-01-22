import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";

const PageMyDonation = () => {
    

    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/pets')
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
                            <th className="mt-10">
                               Serial Number
                            </th>
                            <div className="flex mt-2"><th>Image</th>
                            <th>Name</th>
                            </div>
                            <th> Adoptation Status</th>
                            <th>Pet Age</th>
                            <th>Buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            pets.map((pet,index)=><tr key={pet._id}>
                                <th>
                                 {index+1}
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
                                            <div className="text-sm opacity-50">{pet.petLocation}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {pet.status}
                                    <br />
                                    {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                </td>
                                <td>{pet.petAge}</td>
                                <th>
                                   
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