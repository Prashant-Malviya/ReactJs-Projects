import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  //if wanted to link the react code with redux then we use provider
  <Provider store={store} >
    <App />
  </Provider>
)
