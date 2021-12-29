import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import Footer from "./Footer";

export default function SelectSeat({ setOrder }){

    const { idSessao } = useParams();

    const navigate = useNavigate();

    const [showtime, setShowtime] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    useEffect(() => {
      
      const response = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        response.then(res => {
          setShowtime(res.data)
        })
    }, [idSessao]);
  
  
    function selectingSeats(seat) {
      if (!seat.isAvailable) {
        return alert("Esse assento não está disponível");
      };
  
      seat.isSelected = true;
  
      if(selectedSeats.includes(seat)) {
        const filteredSeats = selectedSeats.filter(s => s !== seat);
        setSelectedSeats(filteredSeats)
      } else {
        setSelectedSeats([...selectedSeats, seat])
      };
    };
  
    function bookingSession() {
      const body = 
      {
        ids: selectedSeats.map(s => s.id),
        name,
        cpf,
      }
    
      if (name && cpf && selectedSeats.length > 0) {
        const sending = axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many', body);
        sending.then(console.log('done'));
        navigate('/sucesso');
      };
  
      setOrder({ showtime, selectedSeats, name, cpf });
    };

    return(
        <>
        <div className="title-bar" style={{'marginBottom': '-20px'}}> 
            <p>Selecione o(s) assento(s)</p>
        </div>

        <div className="seat-list">
        {
          showtime ?
          showtime.seats.map(s => (
            <div className={`seat ${s.isAvailable ? '' : 'unavailable'}
              ${selectedSeats.find((seat) => seat.id === s.id) ? 'selected' : ''}`}
              onClick={() => selectingSeats(s)}>
                {s.name}
            </div>
          ))
          :
          ''
        }
        </div>

        <div className="seat-legend">
            <div className="legend">
                <div className="seat selected"></div>
                <span>Selecionado</span>
            </div>

            <div className="legend">
                <div className="seat"></div>
                Disponível
            </div>

            <div className="legend">
                <div className="seat unavailable"></div>
                Indisponível
            </div>
        </div>

        <div className="client-info">
            <p>Nome do comprador:</p>
            <input type="text" placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)} value={name}/>
            <p>CPF do comprador:</p>
            <input type="text" placeholder="Digite seu CPF..." onChange={(e) => setCpf(e.target.value)} value={cpf}/>
        </div>
        
        <button onClick={() => bookingSession()}>
            <p>Reservar assento(s)</p>
        </button>

        {
        showtime ?
        <Footer showtime={showtime.movie} weekday={showtime.day.weekday} name={showtime.name}/>
        :
        ''
        }
        </>
    )
};