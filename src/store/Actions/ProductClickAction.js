import { productclick } from './ActionTypes';

const productClick = (product) => {
    return (dispatch)=>{
        dispatch({type: productclick, product: product})
    }
}

export default productClick;