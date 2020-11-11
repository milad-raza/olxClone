import { adduser } from './ActionTypes';

const addUser = (user) => {
    return (dispatch)=>{
        dispatch({type: adduser, user: user})
    }
}

export default addUser;