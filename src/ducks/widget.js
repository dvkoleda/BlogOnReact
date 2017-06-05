/**
 * Created by Koleda_D on 30.05.2017.
 */

//action types
const ACTION_TYPE = 'ACTION_TYPE';

//reduce function
export default function reduce(state = [], action) {
    const reactOnAction = actionsMap[action.type];
    return reactOnAction ? reactOnAction(state, action) : state;
}

//action creators
export function someActionCreator() {
    return {
        type: ACTION_TYPE,
        payload: {}
    };
}

const actionsMap = {
    ACTION_TYPE : (state, action) => state
};