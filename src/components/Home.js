import React from 'react';
import { Link } from "react-router-dom";
import vh from '../components/images/pic1.jpg'
import './Home.css'

function Home() {
  return(
    <div>
        <div className="homest">
        <img src={vh} alt="laugh circle"></img>
     <span><h1>WELCOME TO LAUGH FACTORY</h1></span>
      <h2>The best way to generate memes</h2>
       
      <Link to="/generator">
          <button>Generator</button>
        </Link>
    </div>
    </div>
)
}
export default Home;
