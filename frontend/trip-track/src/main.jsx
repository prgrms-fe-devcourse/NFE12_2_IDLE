import React from 'react'
import ReactDOM from 'react-dom/client'; // ReactDOM.createRoot 사용
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
