import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import './index.css'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorkerRegistration.register()