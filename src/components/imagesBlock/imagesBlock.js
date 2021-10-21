import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {GetAndSendId} from "../useContext/useContext";

function ImagesBlock(){

    const [images, setImages] = useState([]);

    const gettingItemIdCtx = useContext(GetAndSendId);
    const {id} = gettingItemIdCtx;

    useEffect( ()=>{
        getImages()
    },[id])



    function getImages(){
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`)
            .then(resp=>{
            setImages(resp.data);
        }).catch(resp=>{
            console.log(resp);
        })
    }

    return(
        <div className={'main'}>
            {
                images.map((t,index)=>{
                    return(
                        <div key={index}>
                            <img src={t.url} alt="img"/>
                        </div>
                    )
                })
            }
            <div>
                <button onClick={()=>{getImages()}}>Load More</button>
            </div>
        </div>
    )
}

export default ImagesBlock