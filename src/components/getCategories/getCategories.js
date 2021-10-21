import React, {useEffect, useState} from "react";
import axios from "axios";
import CategoryItem from '../items/CategoryItem';


function GetCategories(){

    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        sendRequest()
    },[])

    function sendRequest(){
        axios.get('https://api.thecatapi.com/v1/categories').then(resp=>{
            setCategories( resp.data );
        }).catch(resp=>{
            console.log(resp);
        })
    }

    return(
        <>
            {
                categories.map((t)=>{
                    return(
                        <CategoryItem id={t.id} name={t.name}  key={t.id} />
                    )
                })
            }
        </>
    )
}

export default GetCategories