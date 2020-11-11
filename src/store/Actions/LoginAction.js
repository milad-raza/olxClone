import { changelogin } from './ActionTypes';

const changeLogin = () => {
    return (dispatch)=>{
        dispatch({type: changelogin})
    }
}

export default changeLogin;