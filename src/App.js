import React from "react";
import {Routes, Route} from 'react-router-dom';
import Navbar from "./navbar";
import NavbarSec from "./navbarSec";
import Home from "./home";
import Flights from "./flights";
import Carrenal from "./carrenal";
function App() {
  return (
    <div>
      <Navbar/>
      <NavbarSec/>
      <Home />
      <Routes>
      <Route path="/flights" element={<Flights/>} />
      <Route path='/carrental' element={<Carrenal/>}/>
      </Routes>
    </div>
  );
}

export default App;