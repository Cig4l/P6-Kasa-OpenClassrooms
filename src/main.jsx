import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './SCSS/index.scss';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
