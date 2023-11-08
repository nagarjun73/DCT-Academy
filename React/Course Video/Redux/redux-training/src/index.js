import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import configureStore from './store/configureStore'
import { increment, decrement, reset, incrementBy } from './actions/countActions'
import { Provider } from 'react-redux'

const store = configureStore()
console.log(store.getState())

store.subscribe(() => {
  console.log('state updated', store.getState())
})

store.dispatch(increment())

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)