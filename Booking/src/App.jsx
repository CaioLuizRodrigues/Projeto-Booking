import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Nav";
import Card from "./components/Card/Card";


function App() {
  return (
    <>
    <nav>
      <Navbar/>
    </nav>
    <div>
      <Card></Card>
    </div>
    </>
  );
}

export default App;
