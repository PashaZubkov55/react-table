import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../redux/actions'
export const Select = ()=>{
    const smalUrl = ' http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    const bigUrl = ' http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
     const dispatch = useDispatch()
     const users = useSelector((state)=>{
         return state.users.users
     })
     const pageSize = useSelector((state)=>{
        return state.users.pageSize
    })
    const currentPage = useSelector((state)=>{
        return state.users.currentPage
    })

        const dispatchData= (url, array, pageSize,currentPage )=>{
        dispatch(getUsers(url, array, pageSize,currentPage))
        
     }
    return(
        <div className='select'>
            <div className='select__wrapper mt-3 text-center'>
        <button className='btn btn btn-primary' onClick={()=>{dispatchData(bigUrl,  pageSize,currentPage )}}>Большой</button>
        <button className='btn btn btn-primary' onClick={()=>{dispatchData(smalUrl, pageSize, currentPage)}}>Маленький</button>
        {
            console.log('users',users)
        }
        </div>
      </div>
    )
}