import {
    ADD_OPERATOR,
    SUB_OPERATOR,
    MULTI_OPERATOR,
    DIVISON_OPERATOR
} from "../Actions/Action";

let initialState = 0

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_OPERATOR:
            let sum = Number(action.payload.numA) + Number(action.payload.numB)
            state = sum;
            return state

        case SUB_OPERATOR:
            let sub = Number(action.payload.numA) - Number(action.payload.numB)
            state = sub;
            return state

        case MULTI_OPERATOR:
            let multiple = Number(action.payload.numA) * Number(action.payload.numB)
            state = multiple;
            return state

        case DIVISON_OPERATOR:
            let divide = Number(action.payload.numA) / Number(action.payload.numB)
            state = divide;
            return state
        default:
            return state;
    }
}