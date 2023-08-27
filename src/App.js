import { Route, Routes, BrowserRouter, Navigate, HashRouter } from "react-router-dom";
import "./App.css";
import Hire from "./components/Hire";
import First from "./components/First";
import { WavyContainer } from "react-wavy-transitions";
import NavBarL from "./components/NavBarL";

function App() {

  
  
  return (
    <HashRouter>
      <WavyContainer />
      <Routes>
        <Route path="/me" element={<NavBarL />}>
          <Route path="/me" element={<First />} />
          <Route path="*" element={<Navigate to="/me" />} />
          <Route path="/me/hire" element={<Hire />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
