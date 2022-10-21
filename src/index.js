import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Context from './Context/Context'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Context>
      <ToastContainer position='top-center' />
      <App />
    </Context>
  </>
)
