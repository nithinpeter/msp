import React from "react";
import { connect } from "react-redux";
import ProgressStep from "./progress-step";
import left from "../assets/left.png";
import right from "../assets/right.png";
import { goToStep } from "../store/actions";

const ProgressTracker = ({subtopics, dispatch}) => {
    return <div className="progress-tracker">
        <img src={left} alt="left" className="left"/>
        <div className="steps-container">
            {
                subtopics.map((item) => <ProgressStep step={item} action={(index) => goToStep(index, dispatch)}/>)
            }
        </div>
        <img src={right} alt="right" className="right"/>
    </div>
}  


const mapStateToProps = (state) => {
    return {
        subtopics: state.subtopics
    };
}

export default connect(mapStateToProps)(ProgressTracker);