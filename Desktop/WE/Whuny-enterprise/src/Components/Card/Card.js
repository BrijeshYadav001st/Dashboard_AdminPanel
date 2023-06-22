import React from "react";
import './Card.css';
import WebDevImg from '../../Components/Assets/images/web-dev.png';
import AppDevImg from '../../Components/Assets/images/app-dev.png';
import DigitalMarketImg from '../../Components/Assets/images/online-market.png';
import MaintenaceImg from '../../Components/Assets/images/maintenance.png';
import ChromeImg from '../../Components/Assets/images/chrome.png';
import ManagementImg from '../Components/../Assets/images/management.png';

const Card = () => {
    return (
        <>
            <div className="section-info">

                <div className="single-click-install">

                    <div className="single-click-install-logo"><img src={WebDevImg} alt="download-img"
                        className="web-dev-img" /></div>
                    <div className="single-click-install-header">Web Application Development</div>
                    <div className="single-click-install-body">Install the Chrome Extension with one click. Browse anything.</div>
                    <div className="single-click-install-btn">For more Queries</div>
                </div>
                <div className="direct-contact-numbers">
                    <div className="direct-contact-numbers-logo"><img src={AppDevImg} alt="phone-img"
                        className="app-dev-img" /></div>
                    <div className="direct-contact-numbers-header">Mobile App Development</div>
                    <div className="direct-contact-numbers-body">It's challenging to find Direct Mobile number of prospects. This
                        chrome extension makes it a one click job.</div>
                    <div className="direct-contact-numbers-btn">Get Started</div>
                </div>
                <div className="free-trial">
                    <div className="free-trial-logo"><img src={ChromeImg} alt="free-trial-img"
                        className="digital-market-img" /></div>
                    <div className="free-trial-header">Chrome Extension</div>
                    <div className="free-trial-body">Try the tool with 5 free contacts. Want more? Upgrade to a paid plan with 100%
                        accuracy assurance*</div>
                    <div className="free-trial-btn">Get Started</div>
                </div>

            </div>


            <div className="section-info">
                <div className="single-click-install">

                    <div className="single-click-install-logo"><img src={MaintenaceImg} alt="download-img"
                        className="web-dev-img" /></div>
                    <div className="single-click-install-header">Websites & App Maintenance</div>
                    <div className="single-click-install-body">Install the Chrome Extension with one click. Browse anything anywhere on website. </div>
                    <div className="single-click-install-btn">For more Queries</div>
                </div>
                <div className="direct-contact-numbers">
                    <div className="direct-contact-numbers-logo"><img src={ManagementImg} alt="phone-img"
                        className="app-dev-img" /></div>
                    <div className="direct-contact-numbers-header">eCommerce & school management system software Development</div>
                    <div className="direct-contact-numbers-body">We build eCommerce Store for businesses by providing development.</div>
                    <div className="direct-contact-numbers-btn">Get Started</div>
                </div>
                <div className="free-trial">
                    <div className="free-trial-logo"><img src={DigitalMarketImg} alt="free-trial-img"
                        className="digital-market-img" /></div>
                    <div className="free-trial-header">Digital Marketing & SEO things</div>
                    <div className="free-trial-body">Try the tool with 5 free contacts. Want more? Upgrade to a paid plan with 100%
                        accuracy assurance*</div>
                    <div className="free-trial-btn">Get Started</div>
                </div>
            </div>


        </>
    )
}

export default Card;