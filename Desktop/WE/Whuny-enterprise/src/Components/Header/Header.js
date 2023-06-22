import React from "react";
import "./Header.css";
import Logo from '../../Components/Assets/images/Whuny3.png';
import { Link } from "react-router-dom";
import NavBar from '../Core/Navbar/Navbar';

const Header = () => {
    return(
        <>
            <div className="pixelo-digital">
                <nav className="pixelo-navbar">
                    <div className="pixelo-logo">
                        <img  className="logo-img" src={Logo} alt="logo-img" />
                    </div>

                    <div className="pixelo-navigation">
                        <ul className="pixelo-navigation-nav">
                            <li>
                            <Link to="/"   className="nav-links" >Home </Link>
                            </li>
                            <li>
                                <Link to="/pricing" id="pricing" className="nav-links">Pricing</Link>
                            </li>
                            <li>
                            <Link to="/about"  className="nav-links">About Us</Link>
                            </li>
                            <li>
                            <Link to="/contact"   className="nav-links">Contact Us</Link>
                            </li>
                            <li className="pixelo-navigation-btn">
                            <div className="pixelo-nav-signup">Demo</div>
                            </li>
                        </ul>
                        {/* <div className="pixelo-navigation-btn">
                            <div className="pixelo-nav-signup">Demo</div>
                        </div> */}
                         <NavBar />
                    </div>
                   
                </nav>
                
            </div>
        </>
    )
}
export default Header;