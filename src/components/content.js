import React from "react";
import ProgressTracker from "./progress-tracker";
import CardsContainer from "./cards-container";

const Content = () => {
    return <div className="content">
        <ProgressTracker />
        <CardsContainer /> 
    </div>
}  

export default Content;