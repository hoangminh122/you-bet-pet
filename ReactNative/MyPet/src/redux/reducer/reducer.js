import {combineReducers} from 'redux';
import filterStatusReducer from './filterStatusReducer'
import defaultArrayWords from './arrWordsReducer'
import UserIdReducer from './UserIdReducer';
import UserInforReducer from './UserInforReducer'

const reducer = combineReducers({
    // arrWords: defaultArrayWords,
    // filterStatus :filterStatusReducer,
    userIdReducer:UserIdReducer,
    userInforReducer:UserInforReducer
});
export default reducer;
