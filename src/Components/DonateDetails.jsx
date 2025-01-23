import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { useState } from "react";
import Swal from 'sweetalert2'

const stripePromise = loadStripe(import.meta.env.VITE_Payment__Gateway_Pk);
const DonateDetails = () => {
    const[price,setPrice]=useState(10)
    const[check,setCheck]=useState(false)
    const { _id, petImage,maximunDonation, donation, date, shortDescription, longDescription } = useLoaderData();
    const handleClick=()=>{
       setCheck(!check)
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
                               
                                    <Elements stripe={stripePromise}>
                                        <CheckOutForm price={price} check={check} setCheck={setCheck}></CheckOutForm>
                                    </Elements>
                                
                                <h3 className="font-bold text-lg"></h3>
                                <p className="py-4"></p>
                            </div>
                        </dialog>
                        <input onChange={(e)=>setPrice(parseFloat(e.target.value))}type="number" placeholder="price" ></input>
                        <button onClick={(e)=>handleClick(e,price)} className="btn btn-primary">Donate Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DonateDetails;
