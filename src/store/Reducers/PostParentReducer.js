import { postparent } from '../Actions/ActionTypes';

const initialState = {
    parent: null,
}

const PostParentReducer = (state = initialState, action) => {
    switch(action.type){
        case postparent: 
            return ({
                ...state,
                parent: action.parent 
            })
        default :
            return state
    }

}

export default PostParentReducer;