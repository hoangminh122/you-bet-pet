const LongTimeReducer = (state = '60',action) => {
    if(action.type === 'START_COUNT_TIME') return action.value;
    return state;
}
export default LongTimeReducer;