// import SelectSession from "./SelectSession";
// import { useEffect, useState } from "react";
// import axios from 'axios';
// import { Link } from "react-router-dom"

export default function SelectMovie({item , key}){

    console.log(key);

    return(
        <div className="img-rectangle">
            <img src={item.posterURL} alt="" key={key}/>
        </div>
    )
};