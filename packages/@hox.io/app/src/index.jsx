import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './app';
import {StateInspector} from 'reinspect';

const root = createRoot(document.getElementById('app'))
root.render(
  <StateInspector name="App">
    <App />
  </StateInspector>
)
