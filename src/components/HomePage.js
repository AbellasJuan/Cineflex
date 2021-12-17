// import SelectSession from "./SelectSession";
import { useEffect, useState } from "react";
import axios from 'axios';
import SelectMovie from "./SelectMovie";

// import { Link } from "react-router-dom";


export default function HomePage(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const requisicao = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies');

        requisicao.then( resposta => {
            setFilmes(resposta.data);
        });
    }, []);    

    console.log(filmes);

    return(
        <>
            <div className="title-bar" > 
                <p>Selecione o filme</p>
            </div>
            
                
                    {filmes.map((item, index) => 
                        
                        <SelectMovie item={item} key={index} />
                        
                    )}
                

        </>
    )
};