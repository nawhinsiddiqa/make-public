

const PetCard = ({item}) => {
    const{petImage,petName,petAge,date,status,petCategory,petLocation,shortDescription,longDescription}=item;
    return (
        <div>
            <div className="card bg-base-100 w-[400px]  rounded-lg shadow-xl my-6">
                <figure>
                    <img className="h-[400px] w-full object-cover"
                        src={petImage}
                        alt="pet" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{petName}</h2>
                    <p>{shortDescription}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetCard;