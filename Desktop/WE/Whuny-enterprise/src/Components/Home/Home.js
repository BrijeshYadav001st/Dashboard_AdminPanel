import React from "react";
import './Home.css';
import Header from '../Header/Header';
import Card from '../Card/Card';
import Work from '../Work/Work';
import SpecialPricing from '../SpecialPricing/SpecialPricing';
import Projects from "../Project/Project";
import Accordian from '../Accordian/Accordian';
import Footer from '../Footer/Footer';
import FrontImage from '../../Components/Assets/images/front-img2.png';

const Home = () => {
       
    return (
        <div>
            <section className="home-navbar-body">
                <Header />
            </section>

            <section>
                <div className="section-front">
                    <div className="front-text">
                        <h1 className="front-text-heading">Welcome to Whuny Enterprise </h1>
                        <p className="co-heading">
                            Flexible, agile & experienced technology development team.
                        </p>
                        <div className="front-text-subheading">We are developing products and many software for our clients. Whuny Enterprise is a
                            startup which is working on Development , Maintain Web and Mobile Application and APP developing (OS and Android).
                        </div>
                        <div className="front-text-btns">
                            <div className="install-btn">

                                <div className="install-btn-text">Request For Demo</div>
                            </div>
                        </div>
                    </div>

                    <div className="front-img">
                        <img src={FrontImage} alt="front-header-img" className="front-header-img" />
                    </div>
                </div>
            </section>

            <div className="info-our-service">What We OFFER
                <div className="info-our-service-exp" style={{paddingRight:75}}>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                </div>
            </div>

            <section>
                <Card />
            </section>
            
            <section>
                <Work />
            </section>

            <section>
                <SpecialPricing />
            </section>

            <section id="project" className="pricing-parent">
                <Projects />
            </section>

            <div className="faq-header">
                Frequently Asked Questions
            </div>

            <section className="accordian-body"> 
                <Accordian />
            </section>

            <section>
                <Footer />
            </section>
            <h4 className='copy'>
                @copyright 2022 - Whuny Enterprise.  All rights reserved.
            </h4>
        </div>
    )
};

export default Home;