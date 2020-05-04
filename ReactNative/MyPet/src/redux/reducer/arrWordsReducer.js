
const defaultArrayWords = [
    {id:1, en: 'action', vn:'hành động', memorized:true, isShow: false},
    {id:2, en: 'actor', vn:'diễn viên', memorized:false, isShow: false},
    {id:3, en: 'activity', vn:'hoạt động', memorized:true, isShow: false},
    {id:4, en: 'active', vn:'chủ động', memorized:true, isShow: false},
    {id:5, en: 'bath', vn:'tắm', memorized:true, isShow: false},
    {id:6, en: 'bedroom', vn:'phòng ngủ', memorized:false, isShow: false},
    {id:7, en: 'yard', vn:'sân', memorized:true, isShow: false},
    {id:8, en: 'yesterday', vn:'Hôm qua', memorized:true, isShow: false},
    {id:9, en: 'young', vn:'trẻ', memorized:true, isShow: false},
    {id:10, en: 'zero', vn:'hành động', memorized:false, isShow: false},
    {id:11, en: 'abandon', vn:'từ bỏ', memorized:false, isShow: false},
    {id:12, en: 'above', vn:'ở trên', memorized:true, isShow: false},
    {id:13, en: 'against', vn:'phản đối', memorized:false, isShow: false},
    {id:14, en: 'arrange', vn:'sắp xếp', memorized:true, isShow: false}

];
const arrWordsReducer = (state = defaultArrayWords,action)=>{
     return state;
}
export default arrWordsReducer;