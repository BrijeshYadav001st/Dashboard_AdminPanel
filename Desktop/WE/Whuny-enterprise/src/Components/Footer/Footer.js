import React from 'react';
import './Footer.css';
import FooterLogo from '../../Components/Assets/images/footer-logo1.png';
import { FaPinterest } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <>

            <div className="pixelo-footer">
                <div className="web-footer-logo">
                    <img src={FooterLogo} alt="footer-logo-img" className="footer-logo-img" />
                </div>

                <div className='categroies-parent-body'>

                    <div className="categories-one">
                        Users
                        <div className='categories1'>
                            Our Team
                        </div>
                        <div className='categories2'>
                            ContactUs
                        </div>
                        {/* <div className='categories3'>
                        Forgot Password
                        </div> */}
                    </div>


                    <div className="categories-two">Company
                        <div className='categories1'>
                            Privacy  Policy
                        </div>
                        <div className='categories2'>
                            Terms And Conditions
                        </div>
                        {/* <div className='categories3'>
                        Our Team
                    </div> */}
                    </div>


                    <div className="categories-three">Contact With Us

                        <div className='categories-social-one'>
                            <div className='social-categories1'>
                            <FaLinkedin />
                            </div>
                            <div className='social-categories2'>
                            <FaFacebook />
                            </div>
                            <div className='social-categories3'>
                            <FaInstagram />
                            </div>
                        </div>
                        <div className='categories-social-two'>
                            <div className='social-categories1'>
                            <FaYoutube />
                            </div>
                            <div className='social-categories2'>
                            <FaTwitter />
                            </div>
                            <div className='social-categories3'>
                            <FaPinterest />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer;