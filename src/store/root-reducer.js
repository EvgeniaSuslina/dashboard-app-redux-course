import {combineReducers} from 'redux';

import { positionReducer } from './postitions/position-reducers';
import {filterReducer} from './filters/filters-reducers'

export const rootReducer = combineReducers({
    positions: positionReducer,
    filters: filterReducer
});