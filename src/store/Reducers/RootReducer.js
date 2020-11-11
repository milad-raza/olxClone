import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import PostReducer from './PostReducer';
import UserReducer from './UserReducer';
import PostParentReducer from './PostParentReducer';
import CategoriesReducer from './CategoriesReducer';
import ProductClickReducer from './ProductClickReducer';

const Reducers = combineReducers({
    Login: LoginReducer,
    Post: PostReducer,
    User: UserReducer,
    Parent: PostParentReducer,
    Categories: CategoriesReducer,
    Product: ProductClickReducer,
})

export default Reducers;