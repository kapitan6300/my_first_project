const ADD_NEWS='ADD-NEWS';
const SET_USERS='SET-USERS';
let initialState={
    news: [ ]
}
const newsReduser = (state= initialState,action)=>{
    switch(action.type){
        case ADD_NEWS: 
        return{...state,
        news:[...state.news]
    }
    case SET_USERS:
        return {...state, news:action.news}
    default:
        return state;
    }
}

export const addNews=()=>({type:ADD_NEWS})
export const setUsers=(news)=>({type:SET_USERS,news})
export default newsReduser;