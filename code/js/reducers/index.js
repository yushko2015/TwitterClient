import {combineReducers} from 'redux';
import TwittsReducers from './twitt';
import {routerReducer} from 'react-router-redux';


const allReducers = combineReducers({
    routing: routerReducer,
    twitts: TwittsReducers
})



export default allReducers;