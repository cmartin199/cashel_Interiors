import React from 'react';
import NavBar from '../../Components/AppBar';
import logo from '../../resources/cashelBackground.png';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <NavBar />
      <h1>
        New Website Under Development coming Soon
      </h1>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Home;
