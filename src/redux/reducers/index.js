import {combineReducers} from 'redux';

import tab from './tab';
import hold from './hold';
import coin from './coin';

const rootReducer = combineReducers({tab, hold, coin});

export default rootReducer;
