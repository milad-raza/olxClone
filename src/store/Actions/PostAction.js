import { postclick } from './ActionTypes';

const postClick = (click) => {
    return (dispatch)=>{
        dispatch({type: postclick, click: click})
    }
}

export default postClick;