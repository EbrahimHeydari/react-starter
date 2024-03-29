import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.css'
import './App.css'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

serviceWorkerRegistration.register()