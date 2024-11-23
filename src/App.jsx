
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CardFede from "./components/CardFede";
import CardEnzo from "./components/CardEnzo"; 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardfede" element={<CardFede />} />
        <Route path="/cardenzo" element={<CardEnzo />} />
      </Routes>
    </Router>
  );
}
