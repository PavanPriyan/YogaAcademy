import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Reg from './Reg.jsx'
import Login from './login.jsx'
import 'rsuite/dist/rsuite.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}

    <App/>
  </React.StrictMode>,
)
