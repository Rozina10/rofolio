
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import "./App.css";

import Home from './PortfolioContainer/Home/Home'
import { NavbarComponent } from "./PortfolioContainer/Home/Navbar";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Home/>
    </div>
  );
}

export default App;
