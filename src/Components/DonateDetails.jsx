import { useLoaderData } from "react-router-dom";


const DonateDetails = () => {
    const { _id, petImage,maximunDonation, donation, date, shortDescription, longDescription } = useLoaderData();
    const handleClick=()=>{
        document.getElementById('my_modal_3').showModal()
    }

    return (
        <div>
            <h1 className="text-4xl script text-lime-500 text-center my-7">Donation Details here{ }</h1>
            <div className="card bg-base-100 w-96 shadow-xl mx-auto">
                <figure>
                    <img className="h-[300px] w-full object-cover"
                        src={petImage}
                        alt="pets" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">ID:{_id}</h2>

                    <p>Donation:{donation}</p>
                    <p>MaximunDonation:{maximunDonation}</p>
                    <p>Date:{date}</p>
                    <p>ShortDescription:{shortDescription}</p>
                    <p>LongDescription:{longDescription}</p>
                    <div className="card-actions justify-end">

                        {/* You can open the modal using document.getElementById('ID').showModal() method
                        <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Donate!</h3>
                                <p className="py-4"></p>
                            </div>
                        </dialog>
                        <button onClick={handleClick} className="btn btn-primary">Donate Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DonateDetails;
