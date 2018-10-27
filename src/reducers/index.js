import { combineReducers } from 'redux';
import progressBarsReducer from './progressBars';

export default combineReducers({
  progressBars: progressBarsReducer,
});
