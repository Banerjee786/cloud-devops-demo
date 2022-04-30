import logo from './visuals/EventFlyer.png';
import './App.css';
import React from "react";
import BackgroundImg from './BackgroundImg.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Components/Home";
import Agenda from "./Components/Agenda";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/agenda" element={<Agenda />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
