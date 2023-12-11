import "./App.css";
import "./assets/js/script";
import Header from "./components/Hearder/Header";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div className="App">
      <Header />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
