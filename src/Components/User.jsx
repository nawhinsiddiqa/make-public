import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";


const User = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

      const handleDelete=(user) =>{

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
                            users.map((user,index) => <tr>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="btn btn-ghost btn-xs text-2xl"><button><FaUsers></FaUsers></button></td>
                                <td><button
                                onClick={()=>handleDelete(user)} className="btn btn-ghost btn-xs text-red-600 text-2xl"><MdDelete /></button></td>
                              </tr>)
                        }



                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default User;