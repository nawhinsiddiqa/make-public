import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic"
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from 'sweetalert2'
import { useLoaderData, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const PageEdit = () => {
    const navigate =useNavigate();
    const { _id, price, date, email, petName, petImage } = useLoaderData();
    
  


    console.log(_id)
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {

        console.log(data)
        const imageFile = { image: data.petImage[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }

        })
        if (res.data.success) {
            const petItem = {
                donation: data.donationAmount,
                email: data.email,
                date: data.date,

                petImage: res.data.data.display_url,
                petName: data.petName,


            }
            fetch(`http://localhost:5000/payment-collection/${_id}`, {

                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(petItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'success!',
                            text: 'Pet Updated successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                      navigate('/dashboard/allDonations')
                    }
                })

        }



    }

    return (
        <div>
            <div>
                <h1 className="text-3xl text-red-600 my-7 text-center">User Edit List</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body w-10/12 mx-auto border bg-blue-400">



                        {/* Pet  image */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-tex text-xl font-bold">Pet Image</span>
                            </label>
                            <input type="file" {...register("petImage")} name="petImage" placeholder="Pet Image" className="input input-bordered" required />
                            {errors.petImage && <span className="text-red-600">This field is required</span>}
                        </div>
                        {/* Pet Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-tex text-xl font-bold">Pet Name</span>
                            </label>
                            <input type="text" {...register("petName")} name="petName" placeholder="Pet Name" className="input input-bordered" required />
                            {errors.petName && <span className="text-red-600">This field is required</span>}
                        </div>
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-tex text-xl font-bold">Email</span>
                            </label>
                            <input type="email" {...register("email")} name="email" placeholder="Email" className="input input-bordered" required />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        {/*  Donation Amount*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-tex text-xl font-bold">Donation Amount</span>
                            </label>
                            <input type="number" {...register("donationAmount")} name="donationAmount" placeholder="DonationAmount" className="input input-bordered" required />
                            {errors.donationAmount && <span className="text-red-600">This field is required</span>}
                        </div>





                        <div className="form-control">
                            <label className="label">
                                <span className="label-tex text-xl font-bold bg-base-200">Date</span>
                            </label>
                            <input type="date"  {...register("date", { required: true })} name="date" placeholder="date" className="input input-bordered" required />
                            {errors.date && <span className="text-red-600">This field is required</span>}
                        </div>







                        <div className="form-control mt-6">
                            <button className="btn bg-yellow-200">Submit Button</button>
                        </div>
                        <div className="border b-2 my-8"></div>
                        <div>


                        </div>
                    </form >
                </div>

            </div>

        </div>
    );
};

export default PageEdit;