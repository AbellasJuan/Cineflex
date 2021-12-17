// import axios from 'axios';
// import { useEffect, useState } from 'react';

export default function SelectSession({key}){

    // const [sessoes, setSessoes] = useState([]);

    // useEffect(() => {
    //     const resposta = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idDoFilme}/showtimes`);

    // })
console.log(key)

    return(
        <>
            <div className="title-bar" style={{'marginBottom': '-20px'}}> 
                <p>Selecione o horário</p>
            </div>
            <div className="session">
                <span>Quinta-feira - 24/06/2021</span>
                
                <div className="times">
                <div className="time-rectangle">
                        <p>15:00</p>
                </div>

                <div className="time-rectangle">
                        <p>19:00</p>
                </div>
                </div>
            </div>
            <div className="session">
                <span>Quinta-feira - 24/06/2021</span>
                
                <div className="times">
                <div className="time-rectangle">
                        <p>15:00</p>
                </div>

                <div className="time-rectangle">
                        <p>19:00</p>
                </div>
                </div>
            </div>

            
            
        </>
    )
};