import Calculator from './main/Calculator';
import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator />
  </div>
);


reportWebVitals();
