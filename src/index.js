import React                 from 'react'
import ReactDOM              from 'react-dom'
import {Provider}            from 'react-redux'
import {createStore}         from 'redux'
import {rootReducer}         from 'reducers/rootReducers'
import App                   from './App'
import registerServiceWorker from 'registerServiceWorker'
import './index.css'

const store = createStore(rootReducer)


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))
registerServiceWorker()
