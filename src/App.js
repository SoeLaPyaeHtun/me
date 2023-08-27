import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import Hire from "./components/Hire";
import First from "./components/First";
import { WavyContainer } from "react-wavy-transitions";
import NavBarL from "./components/NavBarL";

function App() {

  
  
  return (
    <BrowserRouter basename="/me">
      <WavyContainer />
      <Routes>
        <Route exact path="/" element={<NavBarL />}>
          <Route exact path="/" element={<First />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/hire" element={<Hire />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
