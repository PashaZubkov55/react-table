import {LOADER } from './types' 
const initialState= {
    loading : false
}
export const loader =(state = initialState, action)=>{
    switch (action.type) {
        case LOADER:
            return {...state, loading: action.payload}
        
        default: return state;
    }
}