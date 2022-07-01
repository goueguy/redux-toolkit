import ActionTypes from './../constants/actions-type';
const initialize = {
    posts:[
        {
            id:1,
            name:"My first post",
            content:"lorem ipsum"
        }
    ]
}

const rootReducer = (state=initialize,action)=>{
    switch (action.type) {
        case ActionTypes.ADD_ARTICLE:
            return {
                posts:[
                    ...state.posts,action.payload
                ]
            }
        break;
        
        default:
            return state;
    }
}

export default rootReducer;