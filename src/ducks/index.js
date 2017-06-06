/**
 * Created by Koleda_D on 30.05.2017.
 */


import { combineReducers } from 'redux';
import postReducer from './post';

/**
 *  This is the application state combined from all 'ducks' components.
 */

const rootReducer = combineReducers({
    posts: postReducer
});

export default rootReducer;

