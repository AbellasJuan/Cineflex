import {BrowserRouter, Routes, Route} from 'react-router-dom';

import "../css/reset.css";
import "../css/style.css";

import SelectMovie from "./SelectMovie.js";
import SelectSession from "./SelectSession.js";
import SelectSeat from "./SelectSeat.js";
import Success from "./Success.js";
import HomePage from './HomePage';
import Header from "./Header.js"


export default function App(){

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/selectMovie" element={<SelectMovie/>}/>
            <Route path="/sessoes" element={<SelectSession/>}/>
            <Route path="/assentos" element={<SelectSeat/>}/>
            <Route path="/asfdadsd" element={<Success/>}/>
            </Routes>
        </BrowserRouter>
    )
};