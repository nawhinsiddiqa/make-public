import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic"
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from 'sweetalert2'
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdataPet = () => {
    const navigate = useNavigate()
    const pet = useLoaderData();
    console.log(pet)
     const { _id,petImage, petName, petAge, petCategory, petLocation, shortDescription, longDescription } =pet;
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
                petName: data.petName,
                petCategory: data.petCategory,
                petAge: parseFloat(data.petAge),
                petImage: res.data.data.display_url,
                petLocation: data.petLocation,
                shortdescription: data.shortDescription,
                longDescription: data.longDescription

            }
            // const updatedPet ={petName,petImage,petLocation,petAge,status,shortDescription,longDescription}
             console.log(_id)
            fetch(`https://assignment-12-five-gamma.vercel.app/pets/${_id}`,{
                
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(petItem)
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'success!',
                        text: 'Pet Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                      
                  navigate('/dashboard/myAddedPet')

                    }

            })
           
       
        }
        console.log(res.data)
    }
    return (
        <div>
            <div>
                <h1 className="text-3xl text-red-600 my-7 text-center">Update A Pet page{}</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body w-10/12 mx-auto border bg-lime-200">
                        {/* Pet Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-lime-500">Pet Name</span>
                            </label>
                            <input type="text" {...register("petName", { required: true })} name="petName" defaultValue={petName} placeholder="Pet Name" className="input input-bordered" required />
                            {errors.petName && <span className="text-red-600">This field is required</span>}
                        </div>


                        {/* Pet  image */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-tex text-xl font-bold text-lime-500">Pet Image</span>
                            </label>
                            <input type="file" {...register("petImage")} name="petImage"placeholder="Pet Image" className="input input-bordered" required />
                            {errors.petImage && <span className="text-red-600">This field is required</span>}
                        </div>
                        {/* pet age */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-lime-500">Pet Age</span>
                            </label>

                            <input type="number" {...register("petAge", { required: true })} name="petAge"defaultValue={petAge} placeholder="Pet Age" className="input input-bordered" required />
                            {errors.petAge && <span className="text-red-600">This field is required</span>}
                        </div>

                        {/* Pet Category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-lime-500">Pet Category</span>
                            </label>
                            <select name="petCategory" defaultValue={petCategory} {...register("petCatrgory", { required: true })} className="select select-bordered w-full my-6">
                                <option disabled selected>Pet Category do you like?</option>
                                <option>Cat</option>
                                <option>Dog</option>
                                <option>Rabbit</option>
                                <option>Bird</option>
                                <option>Fish</option>


                            </select>

                            {errors.petCategory && <span className="text-red-600">This field is required</span>}
                        </div>
                        {/* pet Location */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-tex text-xl font-bold text-lime-500">Pet Location</span>
                            </label>
                            <input type="text"  {...register("petLocation", { required: true })} name="petLocation" defaultValue={petLocation}
                            placeholder="Pet Location" className="input input-bordered" required />
                            {errors.petLocation && <span className="text-red-600">This field is required</span>}
                        </div>





                        {/* short Notes */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-lime-500 mx-auto ">Short Notes</span>
                            </label>
                            <input type="text" {...register("shortDescription", { required: true })} name="shortDescription"defaultValue={shortDescription} placeholder="shortDescription" className="input input-bordered" required />
                            {errors.shortDescription && <span className="text-red-600">This field is required</span>}
                        </div>
                        {/* Long description */}
                        <div className="form-control">
                            <label className="label">

                                <textarea className="textarea textarea-ghost w-[600px] mx-auto" {...register("longDescription", { required: true })} name="longDescription" defaultValue={longDescription}placeholder=" Long Notes"></textarea>
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

export default UpdataPet;
