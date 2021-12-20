import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import "../css/reset.css";
import "../css/style.css";

import SelectMovie from "./SelectMovie.js";
import SelectSession from "./SelectSession.js";
import SelectSeat from "./SelectSeat.js";
import Success from "./Success.js";
import Header from "./Header.js"


export default function App(){

    const [order, setOrder] = useState(null);

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
            <Route path="/" element={<SelectMovie/>}/>
            <Route path="/sessoes/:idFilme" element={<SelectSession/>}/>
            <Route path="/assentos/:idSessao" element={<SelectSeat setOrder={setOrder} />}/>
            <Route path="/sucesso" element={<Success order={order} setOrder={setOrder} />}/>
            </Routes>
        </BrowserRouter>
    )
};