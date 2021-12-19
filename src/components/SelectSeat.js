import Footer from "./Footer";

export default function SelectSeat(){

    return(
        <>
        <div className="title-bar" style={{'marginBottom': '-20px'}}> 
            <p>Selecione o(s) assento(s)</p>
        </div>

        <div className="comprador-dados">
            <p>Nome do comprador:</p>
            <input type="text"  placeholder="Digite seu nome..." />
            <p>Nome do comprador:</p>
            <input type="text"  placeholder="Digite seu CPF... " />
        </div>
        
        <button>
            <p>Reservar assento(s)</p>
        </button>

        <Footer/>
        </>
    )
};