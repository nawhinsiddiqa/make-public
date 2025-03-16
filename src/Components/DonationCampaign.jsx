import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const DonationCampaign = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch('https://assignment-12-five-gamma.vercel.app/donations')
            .then(res => res.json())
            .then(data => setPets(data))
    }, [])

    return (
        <div>
            <h1 className="text-4xl script text-lime-500 text-center my-7">This is Donation Campaign Page:{pets.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-4">
                {
                  pets.map(pet=><DonationCard key={pet._id} pet={pet}></DonationCard>)
                }
            </div>

        </div>
    );
};

export default DonationCampaign;


