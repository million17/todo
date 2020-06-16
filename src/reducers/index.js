import {combineReducers} from 'redux';
import taskReducers from './taskReduceres';

const allReducers = combineReducers({
    taskReducers,
});


export default allReducers;
