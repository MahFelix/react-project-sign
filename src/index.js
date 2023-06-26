/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Container/Home';
import Exame from './Container/Exames';
import User from './Container/Users';
import './input.css'
import Routs from './routes.js'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Routs />
);
