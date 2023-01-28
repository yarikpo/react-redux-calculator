import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './pages/Calculator/store';
import App from './App';

const root = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);