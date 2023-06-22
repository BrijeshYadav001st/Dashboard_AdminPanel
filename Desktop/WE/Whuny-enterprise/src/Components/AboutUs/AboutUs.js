import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import aboutUs from '../Assets/images/aboutUS.jpeg';
import "./AboutUs.css";

const AboutUs = () => {
    return(
        <div>
            <Header />
            <div className="about-us">
                <div className="about-us-right">
                    <img src={aboutUs} alt="about-us-img" className="about-us-img" />
                </div>
                <div className="about-us-left">
                Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.
                </div>
            </div>

            <Footer />
            
        </div>
    )
}
export default AboutUs;