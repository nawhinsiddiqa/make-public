import { useEffect, useState } from "react";
import usePet from "../hooks/usePet";

import ShowCard from "./ShowCard";


const PetListing = () => {
    const[pet,setPet] =useState([]);
        const[loading,setLoading] =useState(true);
        const[search,setSearch] =useState('');
        useEffect(()=>{
            fetch('http://localhost:5000/all-pets?search=$(search)')
            .then(res =>res.json())
            .then(data =>{
                setPet(data);
                setLoading(false)
            })
        },[])
      
    
    const total = pet.filter(item => item.status === 'Not-adopted')
    return (
        <div>
            <h2 className="text-5xl font-bold text-center script text-red-600 my-6">Pet Listing Sectins Here</h2>
            <div className="flex justify-between">
               <form>
               <label className="input input-bordered flex items-center gap-2 w-72 mx-auto mb-3">
                    <input type="text" name="search" 
                    onChange={e=>setSearch(e.target.value)}
                    className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
               </form>
                <div className="mx-auto mb-10">
                    <select name="petCategory" className="select select-bordered w-72">
                        <option disabled selected>Pet Category do you like?</option>
                        <option>Cat</option>
                        <option>Dog</option>
                        <option>Rabbit</option>
                        <option>Bird</option>
                        <option>Fish</option>


                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto">
                {
                    pet.map(item => <ShowCard item={item}></ShowCard>)
                }
            </div>
        </div>
    );
};

export default PetListing;
