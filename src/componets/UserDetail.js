import React from 'react'
import {useSelector} from 'react-redux'
export const UserDetail = ()=>{
    const user = useSelector((state)=>{
        return state.users.user
    })
   
  
        if (user.address) {
            return (
                <div className="card text-center">
                <div className="card-body">
                  <p> Выбран пользователь <b>{user.firstName} {user.lastName}</b></p>  
               <p>Описание:</p>
               <p>
               <textarea defaultValue={user.description}></textarea>
               </p>
                
               
           <p>Адрес проживания: <b>{user.address.streetAddress}</b></p> 
           <p> Город: <b>{user.address.city}</b></p>
           <p>Провинция/штат: <b>{user.address.state}</b></p>
           <p>Индекс: <b>{user.address.zip}</b></p>
            </div>
            </div>
            )        
        }
        return(
            <div style={{color: 'red'}}>Не все данные заполнины!</div>
        )
       
    
    
        
}