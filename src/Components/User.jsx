import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from 'sweetalert2'
import axios from "axios";


const User = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users',{
                headers:{
                  authorization:`Bearer ${localStorage.getItem('access-token')}`  
                }
            })
            return res.data
        }
    })

    const makeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Good job!",
                        text: `${user.name} is Admin Now`,
                        icon: "success"
                    });
                }
            })
    }






    const handleDelete = (user) => {
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

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log(res.data)
                        refetch();
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })

            }
        });

    }
    return (
        <div>
            <div className="flex justify-evenly my-5">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users:{users.length}</h2>
                <div className="overflow-x-auto">

                </div>
            </div>

            <div>
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="btn btn-ghost btn-xs text-2xl">
                                    {
                                        user.role ==='admin' ?'Admin' :
                                    
                                <button onClick={() => makeAdmin(user)}><FaUsers></FaUsers></button>}
                                </td>
                                <td><button
                                    onClick={() => handleDelete(user)} className="btn btn-ghost btn-xs text-red-600 text-2xl"><MdDelete /></button></td>
                            </tr>)
                        }



                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default User;