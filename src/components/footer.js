import React from "react";
import linegraph from "../assets/linegraph.png";
import piechart from "../assets/piechart.png";
import tick from "../assets/tick.png"

const Footer = () => {
    return <div className="footer">
        <div className="tab active-tab">
            <img src={tick} alt="tick"/>
        </div>
        <div className="tab">
            <img src={piechart} alt="piechart"/>
        </div>
        <div className="tab">
            <img src={linegraph} alt="linegraph"/>
        </div>
    </div>
}  

export default Footer;

