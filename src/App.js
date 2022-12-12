import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Encomenda from './components/Encomenda';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rastreio" element={<Encomenda />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;