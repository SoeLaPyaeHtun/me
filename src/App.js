import { BrowserRouter } from "react-router-dom";
import "./App.css";

import NavBarL from "./components/NavBarL";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBarL />
      </div>
    </BrowserRouter>
  );
}

export default App;
