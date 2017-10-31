import {combineReducers} from 'redux';
import TwittsReducers from './twitt';
import {routerReducer} from 'react-router-redux';
import dataReducer from './dataReducer';


const allReducers = combineReducers({
    routing: routerReducer,
    twitts: TwittsReducers,
    dataReducer: dataReducer
})



export default allReducers;