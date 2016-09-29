import React from "react";
import { connect } from "react-redux";
import Card from "./card";
import { completeStep } from "../store/actions";

const CardsContaner = ({subtopics, dispatch}) => {

    const activeSubtopic = subtopics.find((item) => item.active);

    return <div className="cards-container">
        <Card data={activeSubtopic} action={(index) => {completeStep(index, dispatch)}}/>
    </div>
}  

const mapStateToProps = (state) => {
    return {
        subtopics: state.subtopics
    };
}
export default connect(mapStateToProps)(CardsContaner);