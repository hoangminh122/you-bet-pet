import { createStore } from 'redux';
import reducer from './reducer/reducer.js'


 
  

// const reducer = (state=defaultState, action) => {
//   switch(action.type){
//     case 'FILTER_SHOW_ALL':
//       return { ...state, filterStatus:'SHOW_ALL'};
//     case 'FILTER_MEMORIZED':
//       return { ...state, filterStatus:'MEMORIZED'}
//     case 'FILTER_NEED_PRACTICE':
//       return {...state, filterStatus:'NEED_PRACTICE'}
//     default:
//         break;
//   }

//   return state;
// }


const store = createStore(reducer);
export default store;