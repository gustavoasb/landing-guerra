import Home from "../src/pages/Home";
import SimulationPage from "../src/pages/SimulationPage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulation" element={<SimulationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
