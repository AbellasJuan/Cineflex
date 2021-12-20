import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Success({ order , setOrder }){

    const { cpf, name, selectedSeats, showtime } = order;

    const navigate = useNavigate();

    function backToHome() {
        setOrder(null);
        navigate('/');
    };

    return(
        <>
        <div className="title-bar" style={{
            'marginBottom': '-20px'
        }}> 
            <p style={{
                'color': '#247A6B',
                'textAlign': 'center',
                'fontWeight': '700',
                'lineHeight': '28px',
                'letterSpacing': '0.04em'
            }}>Pedido feito<br/> com sucesso!</p>
        </div>
        <FilmeSessao>
            <h1>Filme e sessão</h1>
            <p>{showtime.movie.title}<br/>
            {showtime.day.date}  {showtime.name}</p>
        </FilmeSessao>

        <Ingressos>
            <h1>Ingressos</h1>
            {
                selectedSeats.map((seat, index) => (
                    <p key={index}>Assento {seat.name}<br/></p>
                ))
            }
        </Ingressos>

        <Comprador>
            <h1>Comprador</h1>
            <p>{name}<br/>
            CPF: {cpf}</p>
        </Comprador>
            
        <button onClick={backToHome}>
            <p>Voltar para Home</p>
        </button>
        </>
    )
};

const FilmeSessao = styled.div`
    font-size: 24px;
    font-family: Roboto;
    font-weight: 700;
    margin-left: 29px;
    margin-bottom: 10px;
    margin-top: 40px;
    letter-spacing: 0.04em;

    p{
        font-weight: 400;
        font-size: 22px;
        margin-top: 10px;
        line-height: 28px;
    }
`

const Ingressos = styled.div`
    font-size: 24px;
    font-family: Roboto;
    font-weight: 700;
    margin-left: 29px;
    margin-bottom: 15px;
    margin-top: 40px;
    letter-spacing: 0.04em;

    p{
        font-weight: 400;
        font-size: 22px;
        margin-top: 10px;
        line-height: 28px;
    }
`

const Comprador = styled.div`
    font-size: 24px;
    font-family: Roboto;
    font-weight: 700;
    margin-left: 29px;
    margin-bottom: 10px;
    margin-top: 40px;
    letter-spacing: 0.04em;

    p{
        font-weight: 400;
        font-size: 22px;
        margin-top: 10px;
        line-height: 28px;
    }
`