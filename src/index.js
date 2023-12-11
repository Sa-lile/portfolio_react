import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/services" component={<Services />} />
      <Route path="/work"  component={<Work />} />
      <Route path="/contact" component={<Contact />} />
    </Routes>
  </BrowserRouter>
);
