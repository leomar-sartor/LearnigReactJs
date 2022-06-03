import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Hello from './Hello';
import Botao from './Botao';
import Clock from './Clock';
import Props from './Props';
import State from './State';
import Clock2 from './Clock2';
import Events from './Events';
import Events2 from './Events2';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello />
    <Botao />
    <Clock />
    <Props attr="ValorUm" attr2="Valor2" attr3="Valor3"/>
    <State />
    <Clock2 />
    <Events />
    <Events2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
