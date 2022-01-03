import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Day from './Day.js';
import Footer from './Footer.js';

export default function SelectSession(){
    
    const { idFilme } = useParams();

    const [showtime, setShowtimes] = useState(null);

    useEffect(() => {
        const response = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
          response.then(res => {        
            setShowtimes(res.data)
          })
      }, [idFilme]);

    return(
        <>
            <div className="title-bar"> 
                <p>Selecione o horário</p>
            </div>

            <div className="day-list">
                {
                showtime ?
                showtime.days.map((day, index) => (
                    <Day key={index} day={day} />
                ))
                :  ''
                }
            </div>
   
            {
                showtime ? 
                <Footer showtime={showtime}/>
                :  ''
            }
        </>
    )
};

