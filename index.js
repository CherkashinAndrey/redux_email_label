import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Email from './containers/email'
import Lists from './containers/lists'
import configureStore from './store/configureStore'
import './css/index.css'

const store = configureStore()

render(
  <Provider store={store}>
  	<div>
	   <Email />
	   <Lists />
	</div>
  </Provider>,
  document.getElementById('root')
)
