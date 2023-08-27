import {
  Route,
  Routes,
  BrowserRouter,
  Navigate
} from "react-router-dom";
import "./App.css";
import Hire from "./components/Hire";
import First from "./components/First";
import { WavyContainer } from "react-wavy-transitions";
import NavBarL from "./components/NavBarL";
import SoeLaPyaeHtun from "./components/SoeLaPyaeHtun";


function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
        <Route path="/me" element={<NavBarL />}>
          <Route path="/me" element={<First />} />
          <Route path="*" element={<Navigate to="/me" />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/s" element={<SoeLaPyaeHtun />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
