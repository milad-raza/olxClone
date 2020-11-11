import { postparent } from './ActionTypes';

const postParent = (click) => {
    return (dispatch)=>{
        dispatch({type: postparent, parent: click})
    }
}

export default postParent;