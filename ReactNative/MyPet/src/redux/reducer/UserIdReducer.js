const UserIdReducer = (state = '0',action)=>{
    if(action.type == 'USER_ID_SAVE') return action.value;
    return state;
}
export default UserIdReducer;