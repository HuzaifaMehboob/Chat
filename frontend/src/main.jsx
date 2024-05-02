import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import Approuting from './routes/Approuting.jsx'
import { Provider } from 'react-redux';
import {store} from  './redux/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Approuting />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
)
