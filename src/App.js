import "./App.css";
import "./assets/js/script";
import Header from "./components/Hearder/Header";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
