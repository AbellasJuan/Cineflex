import {BrowserRouter, Routes, Route} from 'react-router-dom';

import "../css/reset.css";
import "../css/style.css";

import SelectMovie from "./SelectMovie.js";
import SelectSession from "./SelectSession.js";
import SelectSeat from "./SelectSeat.js";
import Success from "./Success.js";
import Header from "./Header.js"


export default function App(){

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
            <Route path="/" element={<SelectMovie/>}/>
            <Route path="/sessoes/:id" element={<SelectSession/>}/>
            <Route path="/assentos" element={<SelectSeat/>}/>
            <Route path="/sucesso" element={<Success/>}/>
            </Routes>
        </BrowserRouter>
    )
};

//path="/assentos/:idSessao"