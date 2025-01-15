import { useEffect } from "react";
import { useState } from "react";

const usePet =()=>{
    const[pet,setPet] =useState([]);
    const[loading,setLoading] =useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/pets')
        .then(res =>res.json())
        .then(data =>{
            setPet(data);
            setLoading(false)
        })
    },[])
    return[pet,loading]

}
export default usePet;