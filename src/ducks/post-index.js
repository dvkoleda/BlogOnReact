/**
 * Created by Koleda_D on 30.05.2017.
 */
import axious from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=hellofrombelarusnicecource';

//action types
const FETCH_POST = 'FETCH_POST';

//reduce function
export default function reduce(state = [], action) {
    const reactOnAction = actionsMap[action.type];
    return reactOnAction ? reactOnAction(state, action) : state;
}

//action creators
export function fetchPosts() {
    const request = axious.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: ACTION_TYPE,
        payload: request
    };
}

const actionsMap = {
    FETCH_POST : (state, action) => state
};