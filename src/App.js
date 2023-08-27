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
    <BrowserRouter basename="/me">
      <WavyContainer />
      <Routes>
        <Route path="/" element={<NavBarL />}>
          <Route path="/" element={<First />} />
          <Route path="*" element={<Navigate to="/me" />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/s" element={<SoeLaPyaeHtun />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
