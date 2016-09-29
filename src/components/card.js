import React from "react";
import { connect } from "react-redux";
import Button from "./button";
import tick from "../assets/tick@2x.png";

const Card = ({data, action}) => {
    const { index, completed, title } = data;

    const handleLetsGo = (index) => {
        action(index);
    }

    return <div className="card-holder">
        <div className="left-card"></div>
        <div className="active-card">
            <div className="title-container">
                <p className="title">{`${index}. ${title}`}</p>
                <img src={tick} alt="tick-icon" className={ completed ? "status-icon-active" : "" }/>
            </div>
            <div className="slanted-background"></div>
            <div className="button-container">
                <Button text={"Let's Go"} action={handleLetsGo} index={index}/>
            </div>      
        </div>
        <div className="right-card"></div>
    </div>
}  

export default Card;