import { combineReducers } from "redux";
import {users} from './users'
import {loader} from './loader'

export const  rootReducer = combineReducers({
    users,
    loader

})