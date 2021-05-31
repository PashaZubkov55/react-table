import axios from 'axios'

import {DISPLAY_USER, GET_USERS, SORT_USERS, LOADER, SELECT_MODE,ADD_USER } from './types'

export function Loader(value){
  return{
    type: LOADER,
    payload: value
  }
}
export function getUsers(value,) {

       return async dispatch =>{
         dispatch(selectMode(true))
        dispatch(Loader(true))
        const response = await axios.get(value)
        dispatch({
          type: GET_USERS,
          payload: response.data
        })
       dispatch(Loader(false))

    } 

}
export function dataSort(array){

  return{
    type:  SORT_USERS,
    payload: array
  }
  
}
export function displayUser(user) {
  return {
    type: DISPLAY_USER,
    payload: user
  }

}
export function selectMode(value){
  return {
    type: SELECT_MODE,
    payload: value
  }

}
export function addUser(value) {
  return {
    type: ADD_USER,
    payload: value
  }
  
}
  





