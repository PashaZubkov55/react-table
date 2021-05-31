import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import ReactPaginate from 'react-paginate'
import {useSelector, useDispatch} from 'react-redux'
import {Loader} from './componets/Loader'
import { Table } from './componets/Table'
import {Select} from './componets/Select'
import {UserDetail} from './componets/UserDetail'
import { dataSort,  } from './redux/actions'
import { Search } from './componets/Search'
import { Modal } from './componets/Modal'
import './App.css';







function App() {
  const [currentPage, setCurrentPage] = useState(0) 
  const [search, setSearch] = useState('')
  const [sortType, setSortType] = useState('asc')
  const pageSize = 50
 const dispatch= useDispatch()
  const loading = useSelector(state=>{
    return state.loader.loading
  })
  const mode = useSelector((state)=>{
    return state.users.mode
  })
  const user = useSelector((state)=>{
    return state.users.user
  })
  const users = useSelector((state)=>{
      return state.users.users
  })
  

  

  const orderData= (array,  fild )=>{
    const cloneArray = array.concat()
    sortType ==='asc'? setSortType('desc'):setSortType('asc')
    const orderedData = _.orderBy(cloneArray, fild, sortType )
    dispatch(dataSort(orderedData))

     
  }
  const  getFilteredData = ()=>{

    if (!search) {
    return users
      
    }
    return users.filter(user=>{
      return user['firstName'].toLowerCase().includes(search.toLowerCase())||
        user['lastName'].toLowerCase().includes(search.toLowerCase()) ||
        user['email'].toLowerCase().includes(search.toLowerCase())  ||
        user['phone'].toLowerCase().includes(search.toLowerCase())

    })
  }
 
  const filteredData  = getFilteredData()
  const pageCount = Math.ceil(filteredData.length/ pageSize) 
  const [displayData, setDisplayData ] = useState([])
 

 const PageChangeHandler = (page)=>{
   console.log(page.selected)
   setCurrentPage(page.selected)
   console.log(currentPage)
   setDisplayData(_.chunk(users, pageSize)[currentPage])
  
 
}
const searchHandler = (search)=>{
  setSearch(search) 
  setCurrentPage(0)
  
 
  

 
}
useEffect(()=>{
  if (users !== []) {
  setDisplayData(_.chunk(filteredData, pageSize)[currentPage])
  }
  if (search) {
    setDisplayData(_.chunk(filteredData, pageSize)[currentPage])
  }
}, [ search, users,pageSize, currentPage])

  if (!mode) {
    return(
      <Select />
      
    )
    
  }
  return(
    <div>
      {
        loading===true? <Loader/>:
       <React.Fragment>
        <Search
         onSearch = {searchHandler}
        />
        <Modal/>
          <Table 
        ordered = {orderData}
        Type = {sortType}
        data = {displayData}
        />
       </React.Fragment>
       
      }
      {
        users.length>=50? 
        <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={ PageChangeHandler}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName = 'page-item'
        pageClassName = 'page-link'
        previousClassName = 'page-item'
        nextClassName = 'page-item'
        previousLinkClassName = 'page-link'
        nextLinkClassName = 'page-link'
        forcePage = {currentPage}


      />: null
      }
      {
        user?<UserDetail/>:null
      }
    
    </div>
  )
 
  
     
}

export default App;
