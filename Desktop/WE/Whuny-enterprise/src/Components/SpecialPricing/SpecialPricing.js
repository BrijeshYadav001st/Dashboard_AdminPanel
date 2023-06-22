import React from "react";
import ToolContactImg from '../../Components/Assets/images/tool-contact.svg'
import './SpecialPricing.css';
const SpecialPricng =() => {
    return(
        <div className="try-tool-free">
                <div className="try-tool-free-body">
                    <div className="try-tool-free-img"><img src={ToolContactImg} alt="tool-contact-img"  className="tool-contact-img"/></div>
                    <div className="try-tool-free-text">
                        <div className="try-tool-free-heading">Try the tool for 5 free contacts</div>
                        <div className="try-tool-free-btn">Install Extension</div>
                    </div>
                </div>
        </div>
    )
}
export default SpecialPricng;