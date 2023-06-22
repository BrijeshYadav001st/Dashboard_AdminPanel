import React from "react";
import './Pricing.css';
import TicketImg from "../../Components/Assets/images/tick.svg";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Pricing = () => {

    return (
        <div>
            <Header />
            <div id="pricing">
                <h3 className="pricing-heading">Pricing</h3>
                <div className="pricing-sub-heading">Easy.Reliable.Affordable.</div>

                {/* Website Development Pricing */}
                <div className="pricing-body">
                    <div className="pricing-body-start-up">
                        <div className="pricing-header">modified</div>
                        <div className="pricing-body-box">
                            <div className="pricing-body-box-title">Start up</div>
                            <div className="pricing-body-box-price">
                                <span className="box-price">₹2999</span></div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-btn">Get Started</div>
                        </div>
                    </div>


                    <div className="pricing-body-growth">
                        <div className="pricing-header">modified</div>
                        <div className=" pricing-body-box">

                            <div className="pricing-body-box-title">Growth</div>
                            <div className="pricing-body-box-price"><span className="box-price">₹9999</span></div>

                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>

                            <div className="pricing-body-box-btn">Get Started</div>
                        </div>
                    </div>

                    <div className="pricing-body-business">
                        <div className="pricing-header">modified</div>
                        <div className=" pricing-body-box">
                            <div className="pricing-body-box-title">Business</div>
                            <div className="pricing-body-box-price"><span className="box-price">₹29999</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-btn">Get Started</div>
                        </div>
                    </div>
                </div>





                {/* others Deveopment and adversting pricing  */}

                <h3 className="pricing-heading">Others Services Pricing</h3>
                <div className="first-others-pricing-body">
                    <div className="pricing-body-start-up">
                        <div className="others-pricing-header"></div>
                        <div className="pricing-body-box">
                            <div className="pricing-body-box-title">Mobile App Development</div>
                            <div className="pricing-body-box-price">
                                <span className="box-price">₹2999</span></div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-btn">Get Started</div>
                        </div>
                    </div>


                    <div className="pricing-body-growth">
                    <div className="others-pricing-header"></div>
                        <div className=" pricing-body-box">

                            <div className="pricing-body-box-title">Chrome Extension</div>
                            <div className="pricing-body-box-price"><span className="box-price">₹9999</span></div>

                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>

                            <div className="pricing-body-box-btn">Get Started</div>
                        </div>
                    </div>

                    <div className="pricing-body-business">
                    <div className="others-pricing-header"></div>
                        <div className=" pricing-body-box">
                            <div className="pricing-body-box-title">Websites & App Maintenance</div>
                            <div className="pricing-body-box-price"><span className="box-price">₹29999</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-btn">Get Started</div>
                        </div>
                    </div>
                </div>

                {/* second rows of others service pricing */}

                <div className="second-others-pricing-body">
                    <div className="pricing-body-start-up">
                        <div className="others-pricing-header"></div>
                        <div className="pricing-body-box">
                            <div className="pricing-body-box-title">eCommerce & school management system soft. Dev.</div>
                            <div className="pricing-body-box-price">
                                <span className="box-price">₹2999</span></div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-btn">Get Started</div>
                        </div>
                    </div>


                    <div className="pricing-body-growth">
                    <div className="others-pricing-header"></div>
                        <div className=" pricing-body-box">

                            <div className="pricing-body-box-title">Digital Marketing & SEO things</div>
                            <div className="pricing-body-box-price"><span className="box-price">₹9999</span></div>

                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>

                            <div className="pricing-body-box-btn">Get Started</div>
                        </div>
                    </div>

                    <div className="pricing-body-business">
                    <div className="others-pricing-header"></div>
                        <div className=" pricing-body-box">
                            <div className="pricing-body-box-title">StartUp Setups & Other things</div>
                            <div className="pricing-body-box-price"><span className="box-price">₹29999</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-list">
                                <span className="pricing-body-box-list-icon"><img src={TicketImg} alt="tick-img" /></span>
                                <span className="pricing-body-box-list-text">100 Prospects per month</span>
                            </div>
                            <div className="pricing-body-box-btn">Get Started</div>
                        </div>
                    </div>
                </div>




            </div>
            <Footer />
        </div>

    )
};

export default Pricing;