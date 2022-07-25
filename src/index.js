import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Accumulation from './composant/Accumulation';
import Effect from './composant/Effectapi';
import App from './composant/App';
import Video from './composant/Video';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

 <Accumulation /> <Effect /> <App /> 
  </React.StrictMode>
);


