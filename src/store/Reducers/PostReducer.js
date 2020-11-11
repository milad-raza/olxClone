import { postclick } from '../Actions/ActionTypes';

const initialState = {
    post: null,
}

const PostReducer = (state = initialState, action) => {
    switch(action.type){
        case postclick: 
            return ({
                ...state,
                post: action.click 
            })
        default :
            return state
    }

}

export default PostReducer;