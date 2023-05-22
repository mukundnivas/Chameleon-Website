import logo1 from "./images/icsLogoNewMark2.png";
import lo from "./images/Chameleon_Figma.png";
import tree1 from "./images/tree2.png";
import tree3 from "./images/three3.png";
import tree2 from "./images/tree1.png";
import play from "./images/5081358.png";
import av1 from "./images/avatar1.png";
import av2 from "./images/avatar2.png";
import av3 from "./images/avatar4.png";
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
      
        <div id="grad1">
          <h1>Welcome to Chameleon</h1>
          <div className="f">
          <div className="ajy1">
            <div className="abso">
              <h5>Who is Chameleon?</h5>
              <p className="pa">lorem ipsum dolor sit amet consectetssumenda doloremque </p>
              
              <ol>
                
                <li>lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati ipsa assumenda doloremque </li>
                <li>lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati ipsa assumenda doloremque </li>
                <li>lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati ipsa assumenda doloremque </li>
              
              </ol>
            </div>
            <div className="abso1">
              <p className="bo">
                Discover existing information about how to save our planet.</p>
              <di className='fla'>
                <div className="email">email ____________</div>
                <div className="im">I m in</div>
            </di>
            </div>
              <img className="ajy2" src={tree1} alt="logo" />
              <img className="ajy3" src={tree1} alt="logo" />
              
          </div>
          <div className="le">
              <div >
              <img className="ajy11" src={lo} alt="logo" />
            
            <div >
                <di className='fla'>
                  <img className="tree2" src={tree3} alt="logo" /> 
                <h3>Striving to Creat a Smarter World</h3>
                <img className="tree3" src={tree2} alt="logo" />
            </di>
            </div>
             
              
          </div>
            
          </div>
          </div>
        </div>

       
<div class="wrapper22">
<div class="card">
<img className="cardd" src={play} alt="logo" />
          <h4>Introduction to Chameleon</h4>
            
		
          </div>
          <div class="card">
<img className="cardd" src={play} alt="logo" />
		<h4>What we do</h4>
		
          </div>
          <div class="card">
<img className="cardd" src={play} alt="logo" />
		<h4>What next for us</h4>
		
	</div>
	
	
      </div>
      <div class="wrapper22">
        <div class="carddd">
          <h5>Testimoniols</h5>
          <div className="ff">
            <div className="ce">
            <img className="user" src={av1} alt="logo" />
              <p className="c">Introduction to Chameleon lorem <br />lorem ipsum dolor sit amet </p>
              
            </div>
            <div className="ce">
            <img className="user" src={av2} alt="logo" />
          <p className="c">Introduction to Chameleon lorem <br />lorem ipsum dolor sit amet </p>
            </div>
            <div className="ce">
            <img className="user" src={av3} alt="logo" />
          <p className="c">Introduction to Chameleon lorem <br />lorem ipsum dolor sit amet </p>
    </div>
          </div>
		
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
