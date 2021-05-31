
import {GET_USERS, SORT_USERS, DISPLAY_USER, PAGITATION_USERS,SELECT_MODE, ADD_USER} from './types'
const initialState = {
    users:[],
    user:null,
    mode:false,
    

    
}
export const users = (state = initialState, action)=>{
    switch (action.type) {
        case GET_USERS :
            return {...state ,users : action.payload}
            case SORT_USERS:
                return {...state, users: action.payload}
        case DISPLAY_USER:
            return {...state, user: action.payload}
           
            case SELECT_MODE:
                return {...state, mode: action.payload}
                case  ADD_USER:
                    return {...state, users: [action.payload, ...state.users]}
                case PAGITATION_USERS:
                    return {...state, changeUsers: action.payload}
                 default:
                     return state
    }

}