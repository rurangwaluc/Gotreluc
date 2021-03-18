import React from 'react';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';


import icon1 from '../img/icon3.svg';

const ServicesPage = () => {
  return (
    <div id='services' className="containeer services-container m-3">
      <Roll top cascade>
        <h1 className='text-center'>WHAT WE DO</h1>
      </Roll>
      <Slide left cascade>
        <div className="row  mb-5">

          <div className="col-lg-4 col-md-4 col-sm-9 mt-3">
            <div className="main-service">
              <div className="service">
                <div className="service-logo">
                  <img src={icon1} alt="" />

                </div>
                <h4>App Design</h4>

                <Zoom cascade>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat molestiae ducimus laborum voluptate quisquam adipisci aut tempore cum iste nesciunt repudiandae sapiente, et suscipit.</p>
                </Zoom>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-9 mt-3">
            <div className="main-service">

              <div className="service">
                <div className="service-logo">
                  <img src={icon1} alt="" />
                </div>
                <h4>Development</h4>

                <Zoom cascade>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat molestiae ducimus laborum voluptate quisquam adipisci aut tempore cum iste nesciunt repudiandae sapiente, et suscipit.</p>
                </Zoom>
                </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-9 mt-3">
            <div className="main-service">
              <div className="service">
                <div className="service-logo">
                  <img src={icon1} alt="" />
                </div>
                <h4>Marketing</h4>
                <Zoom cascade>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat molestiae ducimus laborum voluptate quisquam adipisci aut tempore cum iste nesciunt repudiandae sapiente, et suscipit.</p>
                </Zoom>              
                </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide right cascade>

        <div className="row  mb-5">

          <div className="col-lg-4 col-md-4 col-sm-9 mt-3">
            <div className="main-service">
              <div className="service">
                <div className="service-logo">
                  <img src={icon1} alt="" />

                </div>
                <h4>App Design</h4>
                <Zoom cascade>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat molestiae ducimus laborum voluptate quisquam adipisci aut tempore cum iste nesciunt repudiandae sapiente, et suscipit.</p>
                </Zoom>
                 </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-9 mt-3">
            <div className="main-service">

              <div className="service">
                <div className="service-logo">
                  <img src={icon1} alt="" />
                </div>
                <h4>Development</h4>
                <Zoom cascade>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat molestiae ducimus laborum voluptate quisquam adipisci aut tempore cum iste nesciunt repudiandae sapiente, et suscipit.</p>
                </Zoom>             
                 </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-9 mt-3">
            <div className="main-service">
              <div className="service">
                <div className="service-logo">
                  <img src={icon1} alt="" />
                </div>
                <h4>Marketing</h4>
                <Zoom cascade>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat molestiae ducimus laborum voluptate quisquam adipisci aut tempore cum iste nesciunt repudiandae sapiente, et suscipit.</p>
                </Zoom>              
                </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  )
}
export default ServicesPage;