import './App.css';

import Header from "./components/Header/Header";
import MainBody from "./components/MainBody/MainBody";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;