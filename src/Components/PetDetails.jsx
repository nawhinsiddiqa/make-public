import { useLoaderData, useParams } from "react-router-dom";


const PetDetails = () => {

        const { _id,petImage, petName, petAge, date, status, petCategory, petLocation, shortDescription, longDescription }= useLoaderData();
   
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
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;