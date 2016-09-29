import React from "react";

const Button = ({text, action, index}) => {
    const handleClick = (index) => {
        action(index);
    } 

    return <div className="msp-button" onClick={() => handleClick(index)}>
        <div className="left-button-half"></div>
        <div className="button-middle">{text}</div>
        <div className="right-button-half"></div>
    </div>
}  

export default Button;