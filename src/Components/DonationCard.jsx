import { Link } from "react-router-dom";

const DonationCard = ({ pet}) => {
    const { _id, petImage,maximunDonation, donation, date} = pet;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img className="h-[300px] w-full object-cover"
                        src={petImage}
                        alt="pets" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">ID:{_id}</h2>
                    <p>MaximunDonation:{maximunDonation}</p>
                    <p>Donation:{donation}</p>
                    <p>Date:{date}</p>
                   
                   
                    <div className="card-actions justify-end">
                    <Link to={`/donate/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DonationCard;
