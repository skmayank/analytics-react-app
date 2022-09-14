import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { setupAxiosInterceptors } from './services/axios';

const root = ReactDOM.createRoot(document.getElementById('root'));

setupAxiosInterceptors()

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
