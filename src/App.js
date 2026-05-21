import "./App.css";
import Header from "./components/Header/Header";
import MainBody from "./components/MainBody/MainBody";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

// Service Pages
import WebDevelopment from "./components/Services/WebDevelopment";
import MobileApps from "./components/Services/MobileApps";
import DevOps from "./components/Services/DevOps";
import UIUX from "./components/Services/UIUX";
import ArtificialIntelligence from "./components/Services/ArtificialIntelligence";
import Maintenance from "./components/Services/Maintenance";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Individual Service Pages */}
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/mobile-apps" element={<MobileApps />} />
        <Route path="/services/devops" element={<DevOps />} />
        <Route path="/services/ui-ux" element={<UIUX />} />
        <Route path="/services/ai-ml" element={<ArtificialIntelligence />} />
        <Route path="/services/maintenance" element={<Maintenance />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;