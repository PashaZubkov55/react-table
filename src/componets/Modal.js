import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { addUser } from '../redux/actions'

export const Modal = ()=>{
    const dispatch = useDispatch()
    const [modalActive,setModalActive] = useState(false)
    // value
    const[lastName,setLastName] = useState('')
    const [firstName,setFirstName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')

    //dirty
    const [lastNameDirty, setLastNameDirty] = useState(false)
    const [firstNameDirty, setFirstNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)

    //error
    const [lastNameError, setlastNameError] = useState('поле не может быть пустым ')
    const [firstNameError, setFirstNameError] = useState('поле не может быть пустой ')
    const [emailError, setEmailError] = useState('поле не может быть пустым ')
    const [phoneError, setPhoneError] = useState('поле не может быть пустым ')
    // valid
    const [formValid,setFormValid] = useState(true)


    useEffect(()=>{
        if (  lastNameError || firstNameError || emailError || phoneError) {
            setFormValid(true)
            console.log(formValid)
        } else{
          setFormValid(false)
          console.log(formValid)
        }
      }, [  lastNameError, firstNameError, emailError, phoneError])

    const blurHandler = (event)=>{
        switch (event.target.name) {
          case 'lastName':
            setLastNameDirty( true)
            break;
            case 'firstName':
                setFirstNameDirty(true)
              break
              case 'email':
                setEmailDirty(true)
              break
              case 'phone':
                setPhoneDirty( true)
              break
        }
    }

        const firstNameHandler = (event)=>{
            setFirstName(event.target.value)
            if (event.target.value !== '') {
                setFirstNameError('')
                
            } else{
                setFirstNameError('поле не может быть пустым')
            }
        }
        const lastNameHandler = (event)=>{
            setLastName(event.target.value)
            if (event.target.value !== '') {
                setlastNameError('')
                
            } else{
                setlastNameError('поле не должно быть пустым')
            }
        }

        const emailHandler = (event)=>{
            setEmail(event.target.value)
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(String(event.target.value).toLowerCase())){
            setEmailError('Email некорректный!')
        }else{
            setEmailError('')
            } }

        const phoneHandler = (event)=>{
            setPhone(event.target.value)
            const re = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g
            if (!re.test(String(event.target.value).toLowerCase())) {
                setPhoneError('Телефон не корректный')
                
            } else{
                setPhoneError('')
            }

        }

        const submit = (event)=>{
            event.preventDefault()
          
            const user = {
                id : Math.random()*60,
                lastName: lastName,
                firstName: firstName,
                email: email,
                phone: phone
            }
                dispatch(
                    addUser(user)
                )

                setModalActive(false)
                setEmail('')
                setLastName('')
                setFirstName('')
                setPhone('')
                setlastNameError('Поле не должно быть пустым')
                setEmailError('Поле не должно быть пустым')
                setFirstNameError('Поле не должно быть пустым')
                setPhoneError('Поле не должно быть пустым')
                
          }

    return(
        <React.Fragment>
           <button 
           type="button" 
           className="btn btn-primary"
           onClick={()=>setModalActive(true)}
           >добавить</button>
           {
               modalActive?
               <div className = 'modal-form'>   
                <div className = 'modal-form__container'>
                <div className= 'modal-form__title text-center'>Добавить</div>
                <div className ='modal-form__body'>

                <form
                onSubmit={(e)=>{submit(e)}}
                >
            <div className="mb-3">
            <label  className="form-label">Имя</label>
            <input 

            type="text" 
            className="form-control" 
            name= 'lastName'
            onBlur= {e =>blurHandler(e) }
            onChange= {e=>lastNameHandler(e)}
            value={lastName}
            />
            {(lastNameDirty &&  lastNameError) && <div style= {{color: 'red'}}>{lastNameError}</div>}
            
            </div>
        <div className="mb-3">
        <label  className="form-label">Фамилия</label>
        <input 
        type="text" 
        className="form-control"
        name= 'firstName'
        onBlur= {e =>blurHandler(e) }
        onChange= {e=>firstNameHandler(e)}
        value = {firstName}

        />
        {(firstNameDirty &&  firstNameError) && <div style= {{color: 'red'}}>{firstNameError}</div>}
        
    </div>
    <div className="mb-3">
        <label  className="form-label">Email</label>
        <input 
        type="email" 
        className="form-control" 
        name= 'email'
        onBlur= {e =>blurHandler(e) }
        onChange= {e=>emailHandler(e)}
        value ={email}
        />
        {(emailDirty &&  emailError) && <div style= {{color: 'red'}}>{emailError}</div>}

       
    </div>
    <div className="mb-3">
        <label  className="form-label">Phone</label>
        <input 
        type="text" 
        className="form-control" 
        name= 'phone'
        onBlur= {e =>blurHandler(e) }
        onChange= {e=>phoneHandler(e)}
        value = {phone}
        />
        {(phoneDirty &&  phoneError) && <div style= {{color: 'red'}}>{phoneError}</div>}
        

    </div>
     <button 
     type="submit" 
     className="btn btn-primary"
    disabled = {formValid}
     >добавить в таблицу
     </button>
        </form>
                </div>
            </div>
        </div>
        :null
       
           }
           </React.Fragment>

        
       
    )
}