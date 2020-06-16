const keyLoginedReducer = (state = '0',action)=>{
    if(action.type == 'AUCTION_KEY_SAVE') return action.value;
    return state;
}
export default keyLoginedReducer;