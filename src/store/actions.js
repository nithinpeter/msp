export const COMPLETE_STEP = "COMPLETE_STEP";
export const GO_TO_STEP = "GO_TO_STEP";

export function completeStep(index, dispatch) {
    dispatch({
        type: COMPLETE_STEP,
        index: index
    })
} 

export function goToStep(index, dispatch) {
    dispatch({
        type: GO_TO_STEP,
        index: index
    })
} 