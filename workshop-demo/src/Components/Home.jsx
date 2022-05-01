
import React from "react";
import BackgroundImg from '../visuals/EventFlyer.png';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
    <Link to="/agenda">
        <img src={BackgroundImg} className="App-logo" alt="logo" />
    </Link>
    </div>
  );
};

export default Home;