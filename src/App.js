import { Route, Routes, BrowserRouter, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Hire from "./components/Hire";
import First from "./components/First";

import NavBarL from "./components/NavBarL";
import { useEffect, useState } from "react";
import "./styles.css";

function App() {


  
  return (
 
     
    <BrowserRouter>
    <div>
      <NavBarL/>
    </div>
  </BrowserRouter>

  );
}



export default App;
