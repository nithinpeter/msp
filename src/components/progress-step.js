import React from "react";

const ProgressStep = ({step, action}) => {
    const { index, completed, active, isLastStep } = step;

    return <div className="progress-step-outer"> 
        <div className={ "progress-step " +  (completed ? "progress-step-completed" : "") } onClick={() => action(index)}>
            {index} 
        </div>
        { active && <div className="progress-active-circle"></div> }
        { !isLastStep && <div className={ "progress-line " + (completed ? "progress-line-completed" : "") }><hr/></div> }
    </div>
}  



export default ProgressStep;