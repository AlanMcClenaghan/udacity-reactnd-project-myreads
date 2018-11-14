import React from 'react'
import ReactDOM from 'react-dom'

// Step 6 - Add navigation.
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'))