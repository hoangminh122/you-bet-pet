
const UserInforReducer = (state = '0',action) => {
    if(action == 'USER_INFOR_SAVE') return action.value;
}