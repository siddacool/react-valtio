import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import websocketClient from './web-socket';
import { onMessage } from './store';

const client = websocketClient(onMessage);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
