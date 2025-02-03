
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import Home from './PortfolioContainer/Home/Home'
import { NavbarComponent } from "./PortfolioContainer/Home/Navbar";
import {Skills} from "./PortfolioContainer/Skills/Skills.jsx";
import { Project } from "./PortfolioContainer/Projects/Project.jsx";
import { Contact } from "./PortfolioContainer/ContactMe/Contact.jsx";
function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Home/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
