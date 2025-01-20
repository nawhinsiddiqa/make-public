import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic"
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const CreateDonationCampaign = () => {
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
        const imageFile = { image: data.petImage[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }

        })
        if (res.data.success) {
            const petItem = {
                donation: data.donation,
                date:data.date,
        
                petImage: res.data.data.display_url,
                
                shortdescription: data.shortDescription,
                longDescription: data.longDescription

            }
            const petRes = await axiosSecure.post('/donations', petItem)
            console.log(petRes.data)
            if (petRes.data.insertedId) {
                Swal.fire({
                    title: "Good job!",
                    text: "created  Data!",
                    icon: "success"
                });

            }
     
        }
        console.log(res.data)
    }

    return (
        <div>
            <div>
                <h1 className="text-3xl text-red-600 my-7 text-center">Create Donation Campaign</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body w-10/12 mx-auto border bg-orange-200">
                


                        {/* Pet  image */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-tex text-xl font-bold text-lime-500">Pet Image</span>
                            </label>
                            <input type="file" {...register("petImage")} name="petImage" placeholder="Pet Image" className="input input-bordered" required />
                            {errors.petImage && <span className="text-red-600">This field is required</span>}
                        </div>
                        {/* Maximun Donation Amount*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-lime-500">Maximun Donation Amount</span>
                            </label>

                            <input type="number" {...register("donation", { required: true })} name="donation" placeholder="Maximum Donation Amount" className="input input-bordered" required />
                           
                        </div>

                       
                        {/* pet Location */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-tex text-xl font-bold bg-base-200">Last Date</span>
                            </label>
                            <input type="date"  {...register("date", { required: true })} name="date" placeholder="Last Date" className="input input-bordered" required />
                            {errors.lastDate && <span className="text-red-600">This field is required</span>}
                        </div>





                        {/* short Notes */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-lime-500 mx-auto ">Short Notes</span>
                            </label>
                            <input type="text" {...register("shortDescription", { required: true })} name="shortDescription" placeholder="shortDescription" className="input input-bordered" required />
                            {errors.shortDescription && <span className="text-red-600">This field is required</span>}
                        </div>
                        {/* Long description */}
                        <div className="form-control">
                            <label className="label">

                                <textarea className="textarea textarea-ghost w-[600px] mx-auto" {...register("longDescription", { required: true })} name="longDescription" placeholder=" Long Notes"></textarea>
                                {errors.longDescription && <span className="text-red-600">This field is required</span>}
                            </label>


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

export default CreateDonationCampaign;
