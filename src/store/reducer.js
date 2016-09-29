import { COMPLETE_STEP, GO_TO_STEP } from "./actions";

const defaultState = {
    topic: {
        title: "Geometry"
    },
    subtopics: [
        { index: 1, title: "Triangles", completed: false, active: true },
        { index: 2, title: "Angle Sum", completed: false, active: false },
        { index: 3, title: "Similar Triangles", completed: false, active: false },
        { index: 4, title: "Congruence", completed: false, active: false },
        { index: 5, title: "Enlargements", completed: false, active: false },
        { index: 6, title: "Parallel Lines", completed: false, active: false },
        { index: 7, title: "Pythagoras Theorem", completed: false, active: false },
        { index: 8, title: "Revision", completed: false, active: false },
        { index: 9, title: "Topic Test", completed: false, active: false, isLastStep: true }
    ]
};

export default function todos(state = defaultState, action) {
    switch (action.type) {
        case COMPLETE_STEP:
            let subtopics = [...state.subtopics];
            subtopics.map((item) => {
                if(item.index === action.index) 
                    item.completed = true;

                return item;
            });

            return {
                topic: state.topic,
                subtopics: subtopics,
            };
        case GO_TO_STEP:
            let items = [...state.subtopics];
            items.map((item) => {
                if(item.index === action.index) 
                    item.active = true;
                else
                    item.active = false;

                return item;
            }); 

            return {
                topic: state.topic,
                subtopics: items,
            };
        default:
            return state;
    }
}