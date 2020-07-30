
const UserInforReducer = (state = '0',action) => {
    if(action.type == 'USER_INFOR_SAVE') return action.value;
    return state;
}
export default UserInforReducer;