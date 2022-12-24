import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Encomenda from './components/Encomenda/Encomenda';
import Home from './components/Home/Home';
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