import {combineReducers} from 'redux';
import filterStatusReducer from './filterStatusReducer'
import defaultArrayWords from './arrWordsReducer'
import UserIdReducer from './UserIdReducer';
import UserInforReducer from './UserInforReducer'
import LongTimeReducer from './LongTimeReducer';
import KeyLoginedReducer from './KeyLoginedReducer'

const reducer = combineReducers({
    // arrWords: defaultArrayWords,
    // filterStatus :filterStatusReducer,
    userIdReducer:UserIdReducer,
    userInforReducer:UserInforReducer,
    longTimeReducer :LongTimeReducer,
    keyLoginedReducer:KeyLoginedReducer
});
export default reducer;
