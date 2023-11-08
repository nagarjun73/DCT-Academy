import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import configureStore from './store/configureStore.js'
import { Provider } from 'react-redux'

const store = configureStore()
console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState())
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
