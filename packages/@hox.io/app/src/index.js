import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {StateInspector} from 'reinspect';

ReactDOM.render(
  <StateInspector name="App">
    <App />
  </StateInspector>,
  document.getElementById('app')
);