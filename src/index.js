import React from 'react';
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {rootReducer} from './redux/rootreduser'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  )
))
const  app =(
<Provider store= {store}>
    <App />
</Provider>
)
render(app, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
