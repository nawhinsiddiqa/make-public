import { useEffect } from "react";
import { useState } from "react";

const usePet =()=>{
    const[pet,setPet] =useState([]);
    const[loading,setLoading] =useState(true);
    useEffect(()=>{
        fetch('https://assignment-12-five-gamma.vercel.app/pets')
        .then(res =>res.json())
        .then(data =>{
            setPet(data);
            setLoading(false)
        })
    },[])
    return[pet,loading]

}
export default usePet;