import { productclick } from '../Actions/ActionTypes';

const initialState = {
    product: "null",
}

const ProductClickReducer = (state = initialState, action) => {
    switch(action.type){
        case productclick: 
            return ({
                ...state,
                product: action.product
            })
        default :
            return state
    }

}

export default ProductClickReducer;