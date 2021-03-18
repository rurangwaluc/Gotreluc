import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Jump from 'react-reveal/Jump';

import icm from '../img/undraw_feeling_proud_qne1.svg';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
        <Fade/>
            <div className="homeContainer">
               
               <div className="side-bar ">
                 <div className="social-links">
                    <Jump>
                      <Link to="/#"> <i className="fab fa-twitter"></i></Link>
                      <Link to="/#"><i className="fab fa-instagram"></i></Link>
                      <Link to="/#"><i className="fab fa-facebook-f"></i></Link>
                    </Jump>
                 </div>
              </div>


              <div className="socialB">
                <div className="socialLinks">
                  <Slide left>
                  <Link to="/#"> <i className="fab fa-twitter"></i></Link>
                  <Link to="/#"><i className="fab fa-instagram"></i></Link>
                  <Link to="/#"><i className="fab fa-facebook-f"></i></Link>
                  </Slide>
                </div>
            </div>


      <div className="hometext">
          <div className="heady">
             
            <Bounce top cascade>
              <h2>Gotreluc</h2>
            </Bounce>
            <span></span>
          </div>
          <div className="flexD">

            <div className="hometitle">
              <h1>
                <LightSpeed left cascade>
                  Web Design 
                  Solutions
                </LightSpeed>

              </h1>
              <p>
                <Zoom cascade>
                  We create new technologies for your business thanks to our wonderful team of professionals.
                </Zoom>
              </p>
              <Bounce>
              <button>Reach Us</button>
              </Bounce>
            </div>
            <Tada>
              <div className="icm">
                <img src={icm} alt="" />
              </div>
            </Tada>
          </div>

        </div>

           </div> 
        </div>
    )
}

export default HomePage;
