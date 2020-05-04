import {combineReducers} from 'redux';
import filterStatusReducer from './filterStatusReducer'
import defaultArrayWords from './arrWordsReducer'

const reducer = combineReducers({
    arrWords: defaultArrayWords,
    filterStatus :filterStatusReducer
});
export default reducer;
