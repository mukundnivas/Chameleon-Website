import logo1 from "./images/icsLogoNewMark2.png";
import lo from "./images/EV_AdoptionTools_Evoleon_logo.png";
import mop from "./images/MOP - White.png";
import m from "./images/download (5).png";
import playstor from "./images/app download.png";
import fb from "./images/facebook.png";
import insta from "./images/instragram.png";
import twitteer from "./images/twitter.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App ">
      <ul>
        <li>
          <img className="img" src={logo1} alt="logo" />
        </li>
        <li className="a">
          <a href="#contact">Login</a>
        </li>
        <li className="a">
          <a class="active" href="#about">
            About Us
          </a>
        </li>
        <li className="a">
          <a href="#contact">Portfolio</a>
        </li>
        <li className="a">
          <a href="#home">Oue Services</a>
        </li>
        <li className="a">
          <a href="#news">Blog</a>
        </li>
        <li className="a">
          <a href="#news">Resources</a>
        </li>
        <li className="a">
          <a href="#news">Home</a>
        </li>
      </ul>
      <div>
        <h3 className="h">Project Progress Report: Trimester 1,2023</h3>
      </div>
      <div className="wrapper">
        <div className="m columns">
          <div class="container horizontal flat column">
            <div className="f">
              {" "}
              <div className="b">
                <p>70%</p>{" "}
              </div>
              <progress className="f1" value="70" max="100"></progress>
            </div>
            <div className="f">
              <div className="b ">
                <p>65%</p>{" "}
              </div>
              <progress
                className="f1 progress1"
                value="65"
                max="100"
              ></progress>
            </div>
            <div className="f fl">
              <div className="b">
                <p>55%</p>{" "}
              </div>
              <progress
                className="f1 progress2"
                value="55"
                max="100"
              ></progress>
            </div>
          </div>

          <div class="container1 horizontal flat column1">
            <div className="f">
              {" "}
              <div className="b1">
                <img className="img12" src={lo} alt="logo" />
              </div>
              <div className="k">
                <h2>EV Charger</h2>
              </div>
            </div>
            <div className="f">
              {" "}
              <div className="b1">
                <img className="img1" src={logo1} alt="logo" />
              </div>
              <div className="k">
                <h2>Chameleon Website</h2>
              </div>
            </div>
            <div className="f">
              {" "}
              <div className="b1">
                <img className="img1" src={mop} alt="logo" />
              </div>
              <div className="k">
                <h2>Melbourne Open Data</h2>
              </div>
            </div>
          </div>

          {/* <div className="c2">
aaa
</div> */}
        </div>
      </div>

      <div className="wrapper1">
        <div className="m columns">
          <div class="container horizontal flat column2">
            <img className="img123" src={m} alt="logo" />
          </div>

          <div class="container1 horizontal flat column2">
            <center>
              <h4 className="w">Contact us</h4>
              <p></p>
              <div className="w">
                <BsFillTelephoneFill /> 03 5975 6586
              </div>
              <br />
              <div className="w">
                <FaRegEnvelope size={27} /> customer.service@chameieon.com.au
              </div>
              <div className="flx w">
                <p>Privacy Notice</p>
                <p className="sp">About Us</p>
              </div>
              <div className="o w">2023 Copyrighty reserved by Chameleon</div>
            </center>
          </div>
          <div class="container1 horizontal flat column2">
            <div className="w j"> download our app here</div>
            <img className="img1234" src={playstor} alt="logo" />
            <br />
            <div className="w j"> find us on</div>
            <div className="flx1">
              <img className="img12345" src={fb} alt="logo" />
              <img className="img12345" src={twitteer} alt="logo" />
              <img className="img12345" src={insta} alt="logo" />
            </div>
          </div>

          {/* <div className="c2">
aaa
</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
