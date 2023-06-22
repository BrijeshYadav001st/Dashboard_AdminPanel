import React from "react";
import './Work.css';

const Work =() =>{
    return (
        <div>
            <h3 className="how-it-works-heading">How do we work on your project?</h3>
            <div className="how-it-works-body">
                <div className="how-it-works-body-left">
                    <div className="how-it-works-body-left-top-text">
                        <h4 className="how-it-works-body-left-heading">Book a Demo</h4>
                        <div className="how-it-works-body-text">Book a demo with our team and purchase a domain name for your website.</div>
                    </div>
                    <div className="how-it-works-body-left-bottom-text">
                        <h4 className="how-it-works-body-left-heading-second">GO ONLINE</h4>
                        <div className="how-it-works-body-text-second">Our dedicated team of web developers, SEO Experts, and Content writers will deliver a fully functional dynamic website in on time..</div>
                    </div>
                </div>
                <div className="how-it-works-body-line">
                    <div className="how-it-works-body-line-circle"></div>
                    <div className="how-it-works-body-line-straight"></div>
                    <div className="how-it-works-body-line-circle"></div>
                    <div className="how-it-works-body-line-straight"></div>
                    <div className="how-it-works-body-line-circle"></div>
                </div>
                <div className="how-it-works-body-right">
                    <div className="how-it-works-body-right-text">
                        <h4 className="how-it-works-body-left-heading">SEND US THE BRIEF</h4>
                        <div className="how-it-works-body-text">Tell us about your school, share some images along with some important details that should be on your website.</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Work;