import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </PrimeReactProvider>,
)
