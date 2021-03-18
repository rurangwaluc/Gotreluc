import React from 'react'
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function AboutPage() {
    return (
        <div className="AboutPage">
           
      <div className="about-section">
        <div className="inner-container">
          <Roll top cascade>
            <h1>ABOUT US</h1>
          </Roll>
          <Zoom cascade>
            <p className="inner-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
            </p>
          </Zoom>
          <Fade left cascade>

            <div className="inner-skills">
              <span>Web Design</span>
              <span>Photoshop & Illustrator</span>
              <span>Coding</span>
            </div>
          </Fade>
        </div>
      </div>
 
        </div>
    )
}

export default AboutPage;
