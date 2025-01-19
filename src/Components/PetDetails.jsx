import { useLoaderData, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const PetDetails = () => {

    const { _id, petImage, petName, petAge, date, status, petCategory, petLocation, shortDescription, longDescription } = useLoaderData();

    const handleClick = () => {
        document.getElementById('my_modal_5').showModal()

    }


    return (
        <div>
            <h2 className="text-4xl font-bold text-center script text-orange-500"> Pet Details Here</h2>
            <div>
                <div className="card card-compact bg-base-100 w-96  mx-auto shadow-xl my-6">
                    <figure>
                        <img
                            src={petImage}
                            alt="pets" />
                    </figure>
                    <div className="card-body">
                        {/* <h2 className="card-title">{petName}</h2> */}
                        {/* <p>{petCategory}</p> */}
                        <div className="card-actions justify-end">
                            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p>
                                    {/* Pet Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold text-lime-500">Pet Name</span>
                        </label>
                        <input type="text" defaultValue={petName} placeholder="Pet Name" className="input input-bordered" required />
                      
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold text-lime-500">Pet ID</span>
                        </label>
                        <input type="text" defaultValue= {_id} placeholder="Pet Id" className="input input-bordered" required />
                      
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold text-lime-500">Pet Image</span>
                        </label>
                        <input type="text" defaultValue={petImage} placeholder="Pet Image" className="input input-bordered" required />
                      
                    </div>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>

                            <button onClick={handleClick} className="btn btn-primary">Adopt Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;