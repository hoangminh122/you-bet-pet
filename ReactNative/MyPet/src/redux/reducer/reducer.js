import {combineReducers} from 'redux';
import filterStatusReducer from './filterStatusReducer'
import defaultArrayWords from './arrWordsReducer'
import UserIdReducer from './UserIdReducer';

const reducer = combineReducers({
    // arrWords: defaultArrayWords,
    // filterStatus :filterStatusReducer,
    userIdReducer:UserIdReducer
});
export default reducer;
