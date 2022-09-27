import React from 'react';
import ReactDOM from 'react-dom/client';
import{Menu}from './Componente/Menu.js';
import{Banner}from './Banner/Banner.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu></Menu>
    <Banner></Banner>
    
  </React.StrictMode>
);


