/**
 * Created by Koleda_D on 30.05.2017.
 */
import axios from 'axios';
import _ from 'lodash';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=hellofrombelarusnicecource';

//action types
const FETCH_POST = 'FETCH_POST';
const CREATE_POST = 'CREATE_POST';

//reduce function
export default function reduce(state = {}, action) {
    const reactOnAction = actionsMap[action.type];
    return reactOnAction ? reactOnAction(state, action) : state;
}

//action creators
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    };
}

export function createPost(values, cb) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then( () => cb() );
    return {
        type: CREATE_POST,
        payload: request
    };
}

const actionsMap = {
    FETCH_POST : (state, action) => _.keyBy(action.payload.data, 'id')
};