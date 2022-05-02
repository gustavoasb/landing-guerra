import Home from "../src/pages/Home"
import SimulationPicker from "../src/pages/SimulationPicker"
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulation" element={<SimulationPicker />} />
      </Routes>
    </Router>
  );
}

export default App;
