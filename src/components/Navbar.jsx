import React,{useState} from "react";
import rooster from "./assets/logo.png";
// import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [display, setDisplay] = React.useState(false);
  const [howToBuy, sethowToBuy] = useState(false)
  const [tokenomics, settokenomics] = useState(false)
  const [roadMap, setroadMap] = useState(false)
  const [community, setcommunity] = useState(false)


  const showDropDown=(e) =>{
    console.log(e.target.innerText );
    sethowToBuy(!howToBuy)
    settokenomics(false)
    setroadMap(false)
    setcommunity(false)
  }
  const showTokenomicsDropDown=(e) =>{
    console.log(e.target.innerText );
    settokenomics(!tokenomics)
    sethowToBuy(false)
    setroadMap(false)
    setcommunity(false)

  }
  const showRoadMapDropDown=(e) =>{
    console.log(e.target.innerText );
    setroadMap(!roadMap)
    settokenomics(false)
    sethowToBuy(false)
    setcommunity(false)
  }
  const showComunityDropDown=(e) =>{
    console.log(e.target.innerText );
    setcommunity(!community)
    settokenomics(false)
    sethowToBuy(false)
    setroadMap(false)
    
  }
  
  
  

  return (
    <>
      <nav>
        <input checked={display} id="nav-toggle" type="checkbox" />
        <div class="logo">
          <img src={rooster} id="hulilogo"></img>
          Huli <strong style={{ color: "#00ff00" }}> Huli</strong>
        </div>
        <ul class="links" onClick={() => setDisplay(false)}>
          <li>
            <a href="#" onClick={showDropDown}>How to buy</a>
              <ul class={ howToBuy ? "nav-dropdown active" : "nav-dropdown"}>
                <li>
                  <a href="#">A</a>
                </li>
                <li>
                  <a href="#">B</a>
                </li>
                <li>
                  <a href="#">C</a>
                </li>
              </ul>
          </li>
          <li>
            <a href="#" onClick={showTokenomicsDropDown}>Tokenomics</a>
            <ul class={ tokenomics ? "nav-dropdown active" : "nav-dropdown"}>
                <li>
                  <a href="#">A</a>
                </li>
                <li>
                  <a href="#">B</a>
                </li>
                <li>
                  <a href="#">C</a>
                </li>
              </ul>
          </li>
          {/* <li>
            <a href="#swap">Swap</a>
          </li> */}
          <li>
            <a href="#" onClick={showRoadMapDropDown}>Road Map</a>
            <ul class={ roadMap ? "nav-dropdown active" : "nav-dropdown"}>
                <li>
                  <a href="#">A</a>
                </li>
                <li>
                  <a href="#">B</a>
                </li>
                <li>
                  <a href="#">C</a>
                </li>
              </ul>
          </li>
          <li>
            <a href="#" onClick={showComunityDropDown}>Community</a>
            <ul class={ community ? "nav-dropdown active" : "nav-dropdown"}>
                <li>
                  <a href="#">A</a>
                </li>
                <li>
                  <a href="#">B</a>
                </li>
                <li>
                  <a href="#">C</a>
                </li>
              </ul>
          </li>
          <li>
            <a id="w-node-_6be0c6f3-5804-18a3-23b0-d24feef2e80c-52018772" href="https://dex.hulihuli.finance" target="_blank" className="re-button cta-button is--nav-link w-button">BUY Huli Huli</a>
          </li>
        </ul>

        <label
          for="nav-toggle"
          class="icon-burger"
          onClick={()=>setDisplay(!display)}
        >
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
      </nav>
    </>
  );
};

export default Navbar;
