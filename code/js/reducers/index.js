import {combineReducers} from 'redux';
import TwittsReducers from './twitt';

const allReducers = combineReducers({
    twitts: TwittsReducers
})

export default allReducers