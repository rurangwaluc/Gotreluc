import React, {useEffect, useState} from 'react'
import avatar from '../img/avatar.png';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import {NavLink} from 'react-router-dom';

function Navbar() {
    
    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, []);

    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
            <Zoom>
                    <img src={avatar} alt=""/>
               </Zoom> 
                 </div>
                <ul className="nav-items">
                <Slide left cascade>
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    </Slide>
                <Slide right cascade>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    </Slide> 
                    <Slide left cascade>  
                    <li className="nav-item">
                        <NavLink to="/services" exact activeClassName="active">
                            Services
                        </NavLink>
                    </li>
                    </Slide> 
                    <Slide right cascade>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    </Slide> 
                    {/* <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li> */}
                    <Slide left cascade>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                    </Slide>
                </ul>

                <footer className="footer">
                    <p>
                         &copy;{date} Gotreluc
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
