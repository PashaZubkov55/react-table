import React, {useState} from 'react'

export const Search = (props)=>{
    const [searchValue, setSearchValue] = useState('')
    const changeValue = (event)=>{
        setSearchValue(event.target.value) 
    }
    return (
        <div className="search mb-3 mt-3">
  <button 
  className="btn btn-primary"
  onClick={()=>{props.onSearch(searchValue)}}
  >
      Seartch
  </button>
  <input 
  type="text" 
  className="form-control" 
  value = {searchValue}
  onChange = {(e)=>changeValue(e)}
  />
</div>
    )
}