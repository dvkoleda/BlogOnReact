/**
 * Created by Koleda_D on 30.05.2017.
 */


import { combineReducers } from 'redux';
import someWidget from './post-index';

/**
 *  This is the application state combined from all 'ducks' components.
 */

const rootReducer = combineReducers({
    appStateName: someWidget
});

export default rootReducer;

