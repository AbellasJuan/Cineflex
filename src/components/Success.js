import styled from "styled-components";

export default function Success(){

    return(
        <>
        <div className="title-bar" style={{
            'marginBottom': '-20px'
        }}> 
            <p style={{
                'color': '#247A6B',
                'text-align': 'center',
                'font-weight': '700',
                'line-height': '28px',
                'letter-spacing': '0.04em'
            }}>Pedido feito<br/> com sucesso!</p>
        </div>
        <FilmeSessao>
            <h1>Filme e sessão</h1>
            <p>Enola Holmes<br/>
            24/06/2021 15:00</p>
        </FilmeSessao>

        <Ingressos>
            <h1>Ingressos</h1>
            <p>Assento 15<br/>
            Assento 16</p>
        </Ingressos>

        <Comprador>
            <h1>Comprador</h1>
            <p>Nome: João da Silva Sauro<br/>
            CPF: 123.456.789-10</p>
        </Comprador>
            
        <button>
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