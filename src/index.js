import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Accumulation from './Accumulation';
import Effect from './Effectapi';
import Timer from './Timer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Accumulation /> <Effect /> <Timer />
  </React.StrictMode>
);


