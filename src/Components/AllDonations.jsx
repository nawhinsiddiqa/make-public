import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineSecurityUpdate } from "react-icons/md";
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const AllDonations = () => {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/payment-collection')
            .then(res => res.json())
            .then(data => setPets(data))
    }, []);
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/payment-collection/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Pet has been deleted.",
                                icon: "success"
                            });
                           
                        }
                    })





            }
        });


    }




    return (
        <div>
            <h2 className="text-4xl font-bold script text-center my-7 text-blue-600">All Donations Page Here</h2>
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
                                pets.map((pet, index) => <tr key={pet._id}>
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
                                        <div className="flex">
                                            <button onClick={() => handleDelete(pet._id)} className="btn btn-sm bg-red-400"><MdDelete />Delete</button>
                                           <Link to={`/paymentCollection/${pet._id}`}> <button className="btn btn-sm bg-green-400"><MdOutlineSecurityUpdate />Edit</button></Link>
                                            <button className="btn btn-sm bg-blue-400"><MdOutlineSecurityUpdate />Pause</button>
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

export default AllDonations;