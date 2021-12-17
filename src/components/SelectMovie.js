import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';;

export default function HomePage(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const requisicao = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies');

        requisicao.then( resposta => {
            setFilmes(resposta.data);
        });
    }, []);    

    console.log(filmes);
    console.log(filmes.posterURL)

    return(
        <>
            <div className="title-bar" > 
                <p>Selecione o filme</p>
            </div>
            
                {filmes.map((filme , index) => 
                    <Link to={`/sessoes/${filme.id}`}>
                        <div className="img-rectangle" index={index}>
                            <img src={filme.posterURL} alt=""/>
                        </div>
                    </Link>
                        
                )}
                

        </>
    )
};