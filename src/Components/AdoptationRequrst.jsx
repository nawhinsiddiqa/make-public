import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic"

import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AdoptationRequrst = () => {
    const navigate = useNavigate()
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
        // const imageFile = { image: data.petImage[0] }
        // const res = await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }

        // })
        if (data) {
            const item = {
                name: data.name,
                email: data.email,
                number: data.number,

                location: data.location,


            }
            const result= await axiosSecure.post('/adoptation-request', item)
            console.log(result.data)
            if (result.data.insertedId) {
                Swal.fire({
                    title: "Good job!",
                    text: "You Added Data!",
                    icon: "success"
                });

            }
           
        }
    }

    return (
        <div>
            <h2></h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body w-10/12 mx-auto border bg-base-200">
                    {/* Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-boldbg-base-200">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" required />
                        {errors.name && <span className="text-red-600">This field is required</span>}
                    </div>



                    {/* Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold bg-base-200">Email</span>
                        </label>

                        <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" required />
                        {errors.email && <span className="text-red-600">This field is required</span>}
                    </div>


                    {/*  Location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-tex text-xl font-bold bg-base-200">Location</span>
                        </label>
                        <input type="text"  {...register("location", { required: true })} name="location" placeholder=" location" className="input input-bordered" required />
                        {errors.location && <span className="text-red-600">This field is required</span>}
                    </div>
                    {/*  phone Number */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-tex text-xl font-bold bg-base-200">Phone Number</span>
                        </label>
                        <input type="number"  {...register("number", { required: true })} name="number" placeholder="number" className="input input-bordered" required />
                        {errors.number && <span className="text-red-600">This field is required</span>}
                    </div>









                    <div className="form-control mt-6">
                        <button className="btn bg-yellow-200">Submit Button</button>
                    </div>
                    <div className="border b-2 my-8"></div>
                    <div>


                    </div>
                </form >
            </div>

        </div >
    );
};

export default AdoptationRequrst;